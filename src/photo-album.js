'use strict';

let sum = 0;

function Photo(desc, url){
	this.id = ++sum;
	this.desc = desc;
	this.url = url;
}

function PhotoAlbum(photoList){
	this.photoList = photoList;
};

// add new photo
PhotoAlbum.prototype.add = function(photo){
	return this.photoList.push(photo);
}

// get photo desc with id
PhotoAlbum.prototype.get = function(id) {
	for(let i = 0;i < this.photoList.length; i++){
		if(this.photoList[i].id === id){
			return this.photoList[i].desc;
		}
	}
	return 'no description have the keyword';
}

// should find the photo where desc contains keyword
PhotoAlbum.prototype.find = function(keyword) {
	for(let i = 0;i < this.photoList.length; i++){
		if(this.photoList[i].desc.includes(keyword)){
			return this.photoList[i];
		}
	}
	return 'no record found with the keyword';
}
// edit photo with id and photo content
PhotoAlbum.prototype.edit = function(photo) {
	for(let i = 0; i < this.photoList.length; i++) {
		const ph = this.photoList[i];
		if(ph.id === photo.id){
			ph.desc = photo.desc;
			ph.url = photo.url;
			return ph;
		}
	}
	return 'no record found with the id';
}
// delete photo with id
PhotoAlbum.prototype.remove = function(id){
	for(let i = 0;i < this.photoList.length; i++){
		if(this.photoList[i].id === id){
			delete this.photoList[i];
			return;
		}
	}
	return 'no record found with the id';
}
// all photos as array
PhotoAlbum.prototype.getAll = function(){
	return this.photoList;
}

module.exports = { PhotoAlbum, Photo };