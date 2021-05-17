#!/bin/bash

# Runs a testnet, and tests against it.
# This relies on using GCloud as an environment for testing

source scripts/environments.sh
source scripts/testnet.sh
source scripts/cleanup.sh

# Get version from package.json
RELEASE=$(node -p -e "require('./packages/hoprd/package.json').version")

TESTNET_NAME="integration-test$(echo "$VERSION_MAJ_MIN" | sed 's/\./-/g')"
TESTNET_SIZE=3

echo "Cleaning up before deploy"
cleanup

echo "Starting a fake chain provider RPC node"
start_chain_provider

exit 1

echo "Starting testnet '$TESTNET_NAME' with $TESTNET_SIZE nodes and image hoprd:$RELEASE"
start_testnet $TESTNET_NAME $TESTNET_SIZE "gcr.io/hoprassociation/hoprd:$RELEASE" 

# TODO FUND ADDRESS

echo "Running integration test against testnet: $TESTNET_NAME"
NODE1="$(vm_name 'node-1' $TESTNET_NAME)"
NODE2="$(vm_name 'node-2' $TESTNET_NAME)"
NODE3="$(vm_name 'node-3' $TESTNET_NAME)"
IP1="$(gcloud_get_ip $NODE1)"
IP2="$(gcloud_get_ip $NODE2)"
IP3="$(gcloud_get_ip $NODE3)"
ETH_ADDRESS1="$(get_eth_address $IP1)"
ETH_ADDRESS2="$(get_eth_address $IP2)"
ETH_ADDRESS3="$(get_eth_address $IP3)"
source ./test/integration_test.sh

#echo "Cleaning up after deploy"
#cleanup
