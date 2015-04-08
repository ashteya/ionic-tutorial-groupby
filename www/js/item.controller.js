(function() {

	angular.module('starter')
		   .controller('ItemController', ItemController)

	function ItemController() {
		var vm = this,
			items = [];

		for (var i = 1; i < 1000; i++) {
			var itemDate = moment().add(i, 'days');

			var item = {
				description: 'Description for item ' + i,
				date: itemDate.toDate()
			};
			items.push(item);
		}

		vm.items = items;
		return vm;

	}

})();
