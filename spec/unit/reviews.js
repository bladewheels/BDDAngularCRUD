describe('The Reviews controller',function(){

	var controller,
			scope = {},
			ReviewService;

	beforeEach(module('reviews'));

	beforeEach(function () {
		ReviewService = jasmine.createSpyObj('ReviewService', [
			'get',
			'save'
		]);

    module(function ($provide) {
      $provide.value('ReviewService', ReviewService);
    });
	});

	beforeEach(function() {
		inject(function($controller) {
			controller = $controller('ReviewController',{$scope:scope});
		});
	});

	it('should be defined',function() {
		expect(controller).toBeDefined();
	})

	it('should call the service to get the reviews',function() {
    expect(ReviewService.get).toHaveBeenCalled();
	})

	it('should call the service to save a review',function() {
		scope.add('a review');
    expect(ReviewService.save).toHaveBeenCalled();
	})
});
