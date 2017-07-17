'use strict'

const { PhotoAlbum, Photo } = require('../src/photo-album');
const { expect } = require('chai');

describe('add', () => {
	it('should add photos success', () => {
		const expectedRecords = 4;
		let phList = [
			new Photo('desc 01','http://desc01.com'),
			new Photo('desc 02','http://desc02.com'),
			new Photo('desc 03','http://desc03.com')
			];
		const store = new PhotoAlbum(phList);
		expect(store.add(new Photo('desc 04','http://desc04.com'))).to
			.equal(expectedRecords);
	});
});
describe('get', () => {
	it('should return photo desc matching given id', () => {
		const expectedDesc5 = 'desc 05';
		const expectedPhoto = new Photo(expectedDesc5, 'http://desc05.com');
		const phList = [expectedPhoto];
		const store = new PhotoAlbum(phList);
		const desc5 = store.get(expectedPhoto.id);
		expect(desc5).to.equal(expectedDesc5);
	});
	
	it('should return error when not matching given id', () => {
		const invalidId = 7;
		const expectedInvalidDesc = "no description have the keyword";
		let phList = [
			new Photo('desc 06','http://desc03.com')
			];
		const store = new PhotoAlbum(phList);
		const desc7 = store.get(invalidId);
		expect(desc7).to.equal(expectedInvalidDesc);
	});
});		
describe('find', () => {
	it('should return photo matching given id', () => {
		const expectedPhoto = new Photo("desc 07", 'http://desc07.com');
		const phList = [expectedPhoto];
		const store = new PhotoAlbum(phList);
		const actualPhoto = store.find(expectedPhoto.id);
		expect(actualPhoto).to.equal(expectedPhoto);
	});
	it('should return error when not matching given id', () => {
		const invalidId = 9;
		const expectedInvalidDesc = "no record found with the keyword";
		let phList = [new Photo('desc 08','http://desc08.com')];
		const store = new PhotoAlbum(phList);
		const desc = store.find(invalidId);
		expect(desc).to.equal(expectedInvalidDesc);
	});
});
describe('edit', () => {
	it('should return photo matching given id', () => {
		const expectedPhoto = new Photo("desc 09", 'http://desc09.com');
		const phList = [expectedPhoto];
		const store = new PhotoAlbum(phList);
		const actualPhoto = store.edit({id: 9, desc: 'edited desc 09', url: 'http://edited.com'});
		expect(actualPhoto.desc).to.equal('edited desc 09');
		expect(actualPhoto.url).to.equal('http://edited.com');
	});
});
	
