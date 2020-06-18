const { expect } = require('chai');
const {
	getChangeRepURI,
	getImportPrivateKeyURI,
	getImportSeedURI,
	getSendURI,
} = require('../dist/banano-uri-generator');

describe('getChangeRepURI', () => {
	it('should throw an error for missing address', () => {
		expect(() => { getChangeRepURI(); }).to.throw(Error);
	});

	it('should generate a URI with only address', () => {
		const input = 'ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk';
		const output = 'bananorep:ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk';

		expect(getChangeRepURI(input)).to.eql(output);
	});

	it('should generate a URI with all parameters', () => {
		const input = [
			'ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk',
			'Lorem Ipsum',
			'Dolor sit amet',
		];

		const output = 'bananorep:ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk?label=Lorem%20Ipsum&message=Dolor%20sit%20amet';

		expect(getChangeRepURI(...input)).to.eql(output);
	});
});

describe('getImportPrivateKeyURI', () => {
	it('should throw an error for missing private key', () => {
		expect(() => { getImportPrivateKeyURI(); }).to.throw(Error);
	});

	it('should generate a URI with only private key', () => {
		const input = '31C4F7F281E05C560E3CAB9529CC5946B5814982C2412156A39A32676117786A';
		const output = 'bananokey:31C4F7F281E05C560E3CAB9529CC5946B5814982C2412156A39A32676117786A';

		expect(getImportPrivateKeyURI(input)).to.eql(output);
	});

	it('should generate a URI with all parameters', () => {
		const input = [
			'31C4F7F281E05C560E3CAB9529CC5946B5814982C2412156A39A32676117786A',
			'Lorem Ipsum',
			'Dolor sit amet',
		];

		const output = 'bananokey:31C4F7F281E05C560E3CAB9529CC5946B5814982C2412156A39A32676117786A?label=Lorem%20Ipsum&message=Dolor%20sit%20amet';

		expect(getImportPrivateKeyURI(...input)).to.eql(output);
	});
});

describe('getImportSeedURI', () => {
	it('should throw an error for missing seed', () => {
		expect(() => { getImportSeedURI(); }).to.throw(Error);
	});

	it('should generate a URI with only seed', () => {
		const input = '31C4F7F281E05C560E3CAB9529CC5946B5814982C2412156A39A32676117786A';
		const output = 'bananoseed:31C4F7F281E05C560E3CAB9529CC5946B5814982C2412156A39A32676117786A';

		expect(getImportSeedURI(input)).to.eql(output);
	});

	it('should generate a URI with all parameters', () => {
		const input = [
			'31C4F7F281E05C560E3CAB9529CC5946B5814982C2412156A39A32676117786A',
			'Lorem Ipsum',
			'Dolor sit amet',
			'15',
		];

		const output = 'bananoseed:31C4F7F281E05C560E3CAB9529CC5946B5814982C2412156A39A32676117786A?label=Lorem%20Ipsum&message=Dolor%20sit%20amet&lastindex=15';

		expect(getImportSeedURI(...input)).to.eql(output);
	});
});

describe('getSendURI', () => {
	it('should throw an error for missing address', () => {
		expect(() => { getSendURI(); }).to.throw(Error);
	});

	it('should generate a URI with only address', () => {
		const input = 'ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk';
		const output = 'banano:ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk';

		expect(getSendURI(input)).to.eql(output);
	});

	it('should generate a URI with all parameters', () => {
		const input = [
			'ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk',
			'1000000000',
			'Lorem Ipsum',
			'Dolor sit amet',
		];

		const output = 'banano:ban_3x9zbabf15c7sg6raiytndyf45tbwhtoedocz5gcp4n84hydti87ysj849fk?amount=1000000000&label=Lorem%20Ipsum&message=Dolor%20sit%20amet';

		expect(getSendURI(...input)).to.eql(output);
	});
});
