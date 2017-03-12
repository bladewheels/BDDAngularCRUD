describe('Given I am posting a new review',function(){

  describe('When I push the submit button',function(){

    beforeEach(function(){
			//Assemble
			browser.get('/');
			var reviewInput = $('textarea');
			reviewInput.sendKeys("a review");
			//Act
			var submitButton = element(by.buttonText('Submit')).click();
    });

		//Assert
    it('Should then add the review',function(){
			var reviews = element.all(by.repeater('review in reviews')).first();
			expect(reviews.getText()).toBe('a review');
    });

  });

});
