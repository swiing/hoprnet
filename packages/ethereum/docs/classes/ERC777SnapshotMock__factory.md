[@hoprnet/hopr-ethereum](../README.md) / [Exports](../modules.md) / ERC777SnapshotMock__factory

# Class: ERC777SnapshotMock\_\_factory

## Hierarchy

- `ContractFactory`

  ↳ **`ERC777SnapshotMock__factory`**

## Table of contents

### Constructors

- [constructor](ERC777SnapshotMock__factory.md#constructor)

### Properties

- [bytecode](ERC777SnapshotMock__factory.md#bytecode)
- [interface](ERC777SnapshotMock__factory.md#interface)
- [signer](ERC777SnapshotMock__factory.md#signer)

### Methods

- [attach](ERC777SnapshotMock__factory.md#attach)
- [connect](ERC777SnapshotMock__factory.md#connect)
- [deploy](ERC777SnapshotMock__factory.md#deploy)
- [getDeployTransaction](ERC777SnapshotMock__factory.md#getdeploytransaction)
- [connect](ERC777SnapshotMock__factory.md#connect)
- [fromSolidity](ERC777SnapshotMock__factory.md#fromsolidity)
- [getContract](ERC777SnapshotMock__factory.md#getcontract)
- [getContractAddress](ERC777SnapshotMock__factory.md#getcontractaddress)
- [getInterface](ERC777SnapshotMock__factory.md#getinterface)

## Constructors

### constructor

• **new ERC777SnapshotMock__factory**(`signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer?` | `Signer` |

#### Overrides

ContractFactory.constructor

#### Defined in

packages/ethereum/types/factories/ERC777SnapshotMock__factory.ts:17

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

▸ **attach**(`address`): [`ERC777SnapshotMock`](ERC777SnapshotMock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`ERC777SnapshotMock`](ERC777SnapshotMock.md)

#### Overrides

ContractFactory.attach

#### Defined in

packages/ethereum/types/factories/ERC777SnapshotMock__factory.ts:51

___

### connect

▸ **connect**(`signer`): [`ERC777SnapshotMock__factory`](ERC777SnapshotMock__factory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

[`ERC777SnapshotMock__factory`](ERC777SnapshotMock__factory.md)

#### Overrides

ContractFactory.connect

#### Defined in

packages/ethereum/types/factories/ERC777SnapshotMock__factory.ts:54

___

### deploy

▸ **deploy**(`name`, `symbol`, `initialAccount`, `initialBalance`, `overrides?`): `Promise`<[`ERC777SnapshotMock`](ERC777SnapshotMock.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `symbol` | `string` |
| `initialAccount` | `string` |
| `initialBalance` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ERC777SnapshotMock`](ERC777SnapshotMock.md)\>

#### Overrides

ContractFactory.deploy

#### Defined in

packages/ethereum/types/factories/ERC777SnapshotMock__factory.ts:21

___

### getDeployTransaction

▸ **getDeployTransaction**(`name`, `symbol`, `initialAccount`, `initialBalance`, `overrides?`): `TransactionRequest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `symbol` | `string` |
| `initialAccount` | `string` |
| `initialBalance` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`TransactionRequest`

#### Overrides

ContractFactory.getDeployTransaction

#### Defined in

packages/ethereum/types/factories/ERC777SnapshotMock__factory.ts:36

___

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ERC777SnapshotMock`](ERC777SnapshotMock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`ERC777SnapshotMock`](ERC777SnapshotMock.md)

#### Defined in

packages/ethereum/types/factories/ERC777SnapshotMock__factory.ts:57

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
