/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { Contract, ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export class ERC777Mock extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions)
  clone(): ERC777Mock
  methods: {
    allowance(holder: string, spender: string): TransactionObject<string>

    approve(spender: string, value: number | string): TransactionObject<boolean>

    approveInternal(holder: string, spender: string, value: number | string): TransactionObject<void>

    authorizeOperator(operator: string): TransactionObject<void>

    balanceOf(tokenHolder: string): TransactionObject<string>

    burn(amount: number | string, data: string | number[]): TransactionObject<void>

    decimals(): TransactionObject<string>

    defaultOperators(): TransactionObject<string[]>

    granularity(): TransactionObject<string>

    isOperatorFor(operator: string, tokenHolder: string): TransactionObject<boolean>

    mintInternal(
      to: string,
      amount: number | string,
      userData: string | number[],
      operatorData: string | number[]
    ): TransactionObject<void>

    name(): TransactionObject<string>

    operatorBurn(
      account: string,
      amount: number | string,
      data: string | number[],
      operatorData: string | number[]
    ): TransactionObject<void>

    operatorSend(
      sender: string,
      recipient: string,
      amount: number | string,
      data: string | number[],
      operatorData: string | number[]
    ): TransactionObject<void>

    revokeOperator(operator: string): TransactionObject<void>

    send(recipient: string, amount: number | string, data: string | number[]): TransactionObject<void>

    symbol(): TransactionObject<string>

    totalSupply(): TransactionObject<string>

    transfer(recipient: string, amount: number | string): TransactionObject<boolean>

    transferFrom(holder: string, recipient: string, amount: number | string): TransactionObject<boolean>
  }
  events: {
    Approval: ContractEvent<{
      owner: string
      spender: string
      value: string
      0: string
      1: string
      2: string
    }>
    AuthorizedOperator: ContractEvent<{
      operator: string
      tokenHolder: string
      0: string
      1: string
    }>
    Burned: ContractEvent<{
      operator: string
      from: string
      amount: string
      data: string
      operatorData: string
      0: string
      1: string
      2: string
      3: string
      4: string
    }>
    Minted: ContractEvent<{
      operator: string
      to: string
      amount: string
      data: string
      operatorData: string
      0: string
      1: string
      2: string
      3: string
      4: string
    }>
    RevokedOperator: ContractEvent<{
      operator: string
      tokenHolder: string
      0: string
      1: string
    }>
    Sent: ContractEvent<{
      operator: string
      from: string
      to: string
      amount: string
      data: string
      operatorData: string
      0: string
      1: string
      2: string
      3: string
      4: string
      5: string
    }>
    Transfer: ContractEvent<{
      from: string
      to: string
      value: string
      0: string
      1: string
      2: string
    }>
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
  }
}