'use strict';

/**
 * @ngdoc service
 * @name guitarwebApp.scaleList
 * @description
 * # scaleList
 * Service in the guitarwebApp.
 */
angular.module('guitarwebApp')
  .service('scaleList', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('db/jsons/scalelist.json',{},{
    	query:{method:'GET',params:{scaleId:'scale'},isArray:true}
    });

  });
