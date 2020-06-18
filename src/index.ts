/**
 * Generates a query string from an object.
 *
 * @param {object} payload The object to generate a query string from.
 *
 * @returns {string} The query string.
 */

function getQueryString(payload: object): string {
	const parameters = [];

	Object.keys(payload).forEach((key) => {
		if (payload[key] === undefined) return;

		parameters.push(`${key}=${encodeURI(payload[key])}`);
	});

	return parameters.length ? `?${parameters.join('&')}` : '';
}

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
export function getChangeRepURI(
	address: string,
	label?: string,
	message?: string,
): string {
	if (address === undefined) {
		throw Error('Address must be defined.');
	}

	const queryString = getQueryString({ label, message });

	return `bananorep:${address}${queryString}`;
}

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
export function getImportPrivateKeyURI(
	privateKey: string,
	label?: string,
	message?: string,
): string {
	if (privateKey === undefined) {
		throw Error('Private key must be defined.');
	}

	const queryString = getQueryString({ label, message });

	return `bananokey:${privateKey}${queryString}`;
}

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
export function getImportSeedURI(
	seed: string,
	label?: string,
	message?: string,
	lastIndex?: number | string,
): string {
	if (seed === undefined) {
		throw Error('Seed must be defined.');
	}

	const queryString = getQueryString({ label, message, lastindex: lastIndex });

	return `bananoseed:${seed}${queryString}`;
}

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
export function getSendURI(
	address: string,
	amount?: number | string,
	label?: string,
	message?: string,
): string {
	if (address === undefined) {
		throw Error('Address must be defined.');
	}

	const queryString = getQueryString({ amount, label, message });

	return `banano:${address}${queryString}`;
}

// TODO: generate new address from a seed
