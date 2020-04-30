import assert from 'assert'
import { randomBytes } from 'crypto'
import Web3 from 'web3'
import { stringToU8a } from '@hoprnet/hopr-utils'
import { Ganache, migrate, fund } from '@hoprnet/hopr-ethereum'
import HoprTokenAbi from '@hoprnet/hopr-ethereum/build/extracted/abis/HoprToken.json'
import HoprEthereum from '.'
import { HoprToken } from './tsc/web3/HoprToken'
import { Await } from './tsc/utils'
import { cleanupPromiEvent } from './utils'
import { generateNode, getPrivKeyData } from './utils/testing'
import * as configs from './config'

describe('test connector', function () {
  const ganache = new Ganache()
  let owner: Await<ReturnType<typeof getPrivKeyData>>
  let web3: Web3
  let hoprToken: HoprToken
  let connector: HoprEthereum

  before(async function () {
    this.timeout(60e3)

    await ganache.start()
    await migrate()
    await fund()

    owner = await getPrivKeyData(stringToU8a(configs.DEMO_ACCOUNTS[0]))
    web3 = new Web3(configs.DEFAULT_URI)
    hoprToken = new web3.eth.Contract(HoprTokenAbi as any, configs.TOKEN_ADDRESSES.private)
    connector = await generateNode(owner.privKey)
    await connector.start()
  })

  after(async function () {
    // @ts-ignore
    web3.currentProvider.disconnect()
    await ganache.stop()
  })

  context('nonces', function () {
    const parallel = 5

    it('should generate nonces in parallel', async function () {
      const latestNonce = await web3.eth.getTransactionCount(owner.address.toHex())
      const results = await Promise.all(
        Array.from({ length: parallel }).map(async (_, expectedNonce) => {
          const nonce = await connector.nonce
          return nonce === latestNonce + expectedNonce
        })
      )

      assert(
        results.every((r) => r),
        'incorrect nonces'
      )
    })

    it('should generate next nonce', async function () {
      const latestNonce = await web3.eth.getTransactionCount(owner.address.toHex())
      const nonce = await connector.nonce

      assert.equal(nonce, latestNonce + parallel, 'incorrect next nonce')
    })
  })

  // @TODO: move this test to utils
  context('events', function () {
    it('should clear events once resolved', function () {
      let numberOfEvents = 0

      const once = () => {
        return cleanupPromiEvent(hoprToken.events.Transfer(), (event) => {
          return new Promise((resolve, reject) => {
            event
              .on('data', (data) => {
                numberOfEvents++
                return resolve(data)
              })
              .on('error', reject)
          })
        })
      }

      return new Promise(async (resolve, reject) => {
        try {
          const nonce = await web3.eth.getTransactionCount(owner.address.toHex())
          const receiver = await getPrivKeyData(randomBytes(32))

          await Promise.all([
            once(),
            hoprToken.methods.transfer(receiver.address.toHex(), 1).send({ from: owner.address.toHex(), nonce }),
            hoprToken.methods
              .transfer(receiver.address.toHex(), 1)
              .send({ from: owner.address.toHex(), nonce: nonce + 1 }),
          ])
          await hoprToken.methods.transfer(receiver.address.toHex(), 1).send({ from: owner.address.toHex() })

          assert.equal(numberOfEvents, 1, 'sub')
          return resolve()
        } catch (err) {
          return reject(err)
        }
      })
    })
  })
})
