# Banano URI Generator

Banano URI Generator is a simple library for generating URIs for the Banano cryptocurrency.
It currently supports URIs for sending to an address, changing the representative to an address,
importing a private key, and importing a seed.

The code is based on great [nano-uri-generator library](https://github.com/alecrios/nano-uri-generator) by Alec Rios.

## URI Specifications

TBD

## Installation

```
npm install banano-uri-generator
```

## API

``` ts
/**
 * Generates a URI for changing the representative.
 *
 * @param {string} address The address to change the representative to.
 * @param {string} [label] The label of the representative change.
 * @param {string} [message] The message of the representative change.
 *
 * @throws {Error} Address must be defined.
 *
 * @returns {string} The URI for changing the representative.
 */
export declare function getChangeRepURI(address: string, label?: string, message?: string): string;
```

``` ts
/**
 * Generates a URI for importing a private key.
 *
 * @param {string} privateKey The private key to import.
 * @param {string} [label] The label of the import.
 * @param {string} [message] The message of the import.
 *
 * @throws {Error} Private key must be defined.
 *
 * @returns {string} The URI for importing a private key.
 */
export declare function getImportPrivateKeyURI(privateKey: string, label?: string, message?: string): string;
```

``` ts
/**
 * Generates a URI for importing a seed.
 *
 * @param {string} seed The seed to import.
 * @param {string} [label] The label of the import.
 * @param {string} [message] The message of the import.
 * @param {number | string} [lastIndex] The last index to import.
 *
 * @throws {Error} Seed must be defined.
 *
 * @returns {string} The URI for importing a seed.
 */
export declare function getImportSeedURI(seed: string, label?: string, message?: string, lastIndex?: number | string): string;
```

``` ts
/**
 * Generates a URI for sending.
 *
 * @param {string} address The address to send to.
 * @param {number | string} [amount] The amount to send (in raw).
 * @param {string} [label] The label of the transaction.
 * @param {string} [message] The message of the transaction.
 *
 * @throws {Error} Address must be defined.
 *
 * @returns {string} The URI for sending.
 */
export declare function getSendURI(address: string, amount?: number | string, label?: string, message?: string): string;
```

## Examples

Generate an URI for sending Banano to an address:

```js
import { getSendURI } from 'banano-uri-generator';

const bananoAddress = 'ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk';
const amount = '10000000000000000000000000000';
const label = 'Developer Fund';

getSendURI(bananoAddress, amount, label);
// banano:ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk?amount=10000000000000000000000000000&label=Developer%20Fund
```

Generate an URI for changing the representative to an address:

```js
import { getChangeRepURI } from 'banano-uri-generator';

const bananoAddress = 'ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk';
const label = 'Banano Representative';

getChangeRepURI(bananoAddress, label);
// bananorep:ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk?label=Banano%20Representative
```

## QR Code Generation

To convert an URI to a QR code (using a library such as [qrcode](https://github.com/soldair/node-qrcode)):

```js
import { getSendURI } from 'banano-uri-generator';
import QRCode from 'qrcode';

const uri = getSendURI('ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk');
const svg = QRCode.toString(uri, {type: 'svg'});
```

## See Also

- [Nano URI Generator](https://github.com/alecrios/nano-uri-generator) - Simple library for generating URIs for the Nano cryptocurrency.
- [Nano Address Validator](https://github.com/alecrios/nano-address-validator) - Validates Nano addresses for syntax and checksum integrity.
- [Nano Unit Converter](https://github.com/alecrios/nano-unit-converter) - Converts Nano amounts from one unit to another.
