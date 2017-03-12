describe('',function(){

	var scope = {};

	beforeEach(function(){
		module('reviews');
		inject(function($controller){
			$controller('ReviewController',{$scope:scope});
		});

		scope.add('a review');
	});

	it('',function(){
		expect(scope.reviews[0]).toBe('a review');
	})
});
