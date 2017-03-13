describe('The storage service', function(){

  var service = null;

  beforeEach(module('storageServices'));
  beforeEach(inject(function (localStorageService) {
     service = localStorageService;
  }));

	it('should be defined',function() {
		expect(service).toBeDefined();
	})

  it('should save a review', function() {
    service.save('a review');
    expect(service.get()[0] === 'a review');
  });

  it('should retrieve all reviews', function() {
    service.save('a review');
    service.save('another review');
    service.save('yet another review');

    expect(service.get()[0] === 'a review');
    expect(service.get()[1] === 'another review');
    expect(service.get()[2] === 'yet another review');
  });
});
