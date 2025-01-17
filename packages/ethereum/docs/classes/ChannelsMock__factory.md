[@hoprnet/hopr-ethereum](../README.md) / [Exports](../modules.md) / ChannelsMock__factory

# Class: ChannelsMock\_\_factory

## Hierarchy

- `ContractFactory`

  ↳ **`ChannelsMock__factory`**

## Table of contents

### Constructors

- [constructor](ChannelsMock__factory.md#constructor)

### Properties

- [bytecode](ChannelsMock__factory.md#bytecode)
- [interface](ChannelsMock__factory.md#interface)
- [signer](ChannelsMock__factory.md#signer)

### Methods

- [attach](ChannelsMock__factory.md#attach)
- [connect](ChannelsMock__factory.md#connect)
- [deploy](ChannelsMock__factory.md#deploy)
- [getDeployTransaction](ChannelsMock__factory.md#getdeploytransaction)
- [connect](ChannelsMock__factory.md#connect)
- [fromSolidity](ChannelsMock__factory.md#fromsolidity)
- [getContract](ChannelsMock__factory.md#getcontract)
- [getContractAddress](ChannelsMock__factory.md#getcontractaddress)
- [getInterface](ChannelsMock__factory.md#getinterface)

## Constructors

### constructor

• **new ChannelsMock__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

packages/ethereum/types/factories/ChannelsMock__factory.ts:17

## Properties

### bytecode

• `Readonly` **bytecode**: `string`

#### Inherited from

ContractFactory.bytecode

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:135

___

### interface

• `Readonly` **interface**: `Interface`

#### Inherited from

ContractFactory.interface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:134

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

ContractFactory.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:136

## Methods

### attach

▸ **attach**(`address`): [`ChannelsMock`](ChannelsMock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ChannelsMock`](ChannelsMock.md)

#### Overrides

ContractFactory.attach

#### Defined in

packages/ethereum/types/factories/ChannelsMock__factory.ts:39

___

### connect

▸ **connect**(`signer`): [`ChannelsMock__factory`](ChannelsMock__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ChannelsMock__factory`](ChannelsMock__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

packages/ethereum/types/factories/ChannelsMock__factory.ts:42

___

### deploy

▸ **deploy**(`_token`, `_secsClosure`, `overrides?`): `Promise`<[`ChannelsMock`](ChannelsMock.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_secsClosure` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ChannelsMock`](ChannelsMock.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

packages/ethereum/types/factories/ChannelsMock__factory.ts:21

___

### getDeployTransaction

▸ **getDeployTransaction**(`_token`, `_secsClosure`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_token` | `string` |
| `_secsClosure` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

packages/ethereum/types/factories/ChannelsMock__factory.ts:32

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ChannelsMock`](ChannelsMock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ChannelsMock`](ChannelsMock.md)

#### Defined in

packages/ethereum/types/factories/ChannelsMock__factory.ts:45

___

### fromSolidity

▸ `Static` **fromSolidity**(`compilerOutput`, `signer?`): `ContractFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compilerOutput` | `any` |
| `signer?` | `Signer` |

#### Returns

`ContractFactory`

#### Inherited from

ContractFactory.fromSolidity

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:144

___

### getContract

▸ `Static` **getContract**(`address`, `contractInterface`, `signer?`): `Contract`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `contractInterface` | `ContractInterface` |
| `signer?` | `Signer` |

#### Returns

`Contract`

#### Inherited from

ContractFactory.getContract

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:150

___

### getContractAddress

▸ `Static` **getContractAddress**(`tx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.from` | `string` |
| `tx.nonce` | `number` \| `BigNumber` \| `BytesLike` |

#### Returns

`string`

#### Inherited from

ContractFactory.getContractAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:146

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): `Interface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | `ContractInterface` |

#### Returns

`Interface`

#### Inherited from

ContractFactory.getInterface

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:145
