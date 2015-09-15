'use strict';

/**
 * @ngdoc service
 * @name guitarwebApp.frettin
 * @description
 * # frettin
 * Service in the guitarwebApp.
 */
angular.module('guitarwebApp')
  .service('frettin', function ($resource) {
   	return $resource('db/jsons/scales.json',{},{
   		query:{method:'GET',params:{storeId:'guitar'},isArray:true}
   	});
  });
