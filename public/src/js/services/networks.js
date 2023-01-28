'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, LBChcoreLib) {
			return {
				getCurrentNetwork: function () {
					return LBChcoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});