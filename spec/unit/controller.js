describe('The Reviews controller',function(){
	// TODO: Figure out how to inject a dependent service (ngGUID) into dataService
	var controller,
			scope = {},
			dataService;

	beforeEach(module('reviews'));
	beforeEach(function () {
		dataService = jasmine.createSpyObj('dataService', [
			'get',
			'save'
		]);

    module(function ($provide) {
      $provide.value('dataService', dataService);
    });
	});

	beforeEach(function() {
		inject(function($controller) {
			controller = $controller('ReviewController',{$scope:scope});
		});
	});

	xit('should be defined',function() {
		expect(controller).toBeDefined();
	})

	xit('should call the service to get the reviews',function() {
    expect(dataService.get).toHaveBeenCalled();
	})

	xit('should call the service to save a review',function() {
		scope.add('a review');
    expect(dataService.save).toHaveBeenCalled();
	})
});
