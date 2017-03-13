xdescribe('The data service', function(){
  // TODO: Figure out how to inject dependent service (localStorage) into dataService
  var service = null;

  beforeEach(module('reviews'));

	beforeEach(function () {
		localStorageService = jasmine.createSpyObj('localStorageService', [
			'get',
			'save'
		]);

    module(function ($provide) {
      $provide.value('dataService', localStorageService);
    });
	});

  beforeEach(inject(function (dataService) {
     service = dataService;
  }));

	it('should be defined',function() {
		expect(service).toBeDefined();
	});

  it('should save a review', function() {
    service.save('a review');
    expect(service.get()[0].text === 'a review');
  });

  it('should retrieve all reviews', function() {
    service.save('a review');
    service.save('another review');
    service.save('yet another review');

    expect(service.get()[0].text === 'a review');
    expect(service.get()[1].text === 'another review');
    expect(service.get()[2].text === 'yet another review');
  });
});
