'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

describe('testing drakeApp', function() {
  beforeEach(() => {
    angular.mock.module('drakeApp');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
      this.thumbController = new $controller('ThumbnailController');
      this.fullController = new $controller('FullController');
    });
  });

  it('home controller should create a list of links to images', () => {
    expect(this.homeController.images.length > 0).toEqual(true);
    expect(this.homeController.images.length).toEqual(8);
  });

  it('thumbnail controller should create a list of images', () =>{
    expect(this.thumbController.images.length > 0).toEqual(true);
    expect(this.thumbController.images.length).toEqual(8);
  });

  it('full controller should create a list of images', () =>{
    expect(this.fullController.images.length > 0).toEqual(true);
    expect(this.fullController.images.length).toEqual(8);
  });

});
