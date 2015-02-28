describe('Ducati Shop', function() {
	beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('should have title', function() {    
    expect(browser.getTitle()).toEqual('Ducati Shop');
  });

  it('should menu bar', function() {
    expect(
    	element(
    		by.id('menu-bar')
    	).isPresent()
    ).toBe(true);
  });

  it('should have 5 button in menu bar', function() {
    expect(
    	element(
    		by.id('menu-bar')
    	)
    	.all(by.css('a')).count()
    ).toEqual(5);
  });

  it('should have monster button', function() {
    expect(
    	element(
    		by.css('#monster')
    	).getText()
    ).toEqual('Monster 796');
  });

  it('should have panigale button', function() {
    expect(
    	element(
    		by.css('#panigale')
    	).getText()
    ).toEqual('Panigale 1299s');
  });

  it('should have multistrada button', function() {
    expect(
    	element(
    		by.css('#multistrada')
    	).getText()
    ).toEqual('Multistrada 1200');
  });

  it('should have diavel button', function() {
    expect(
    	element(
    		by.css('#diavel')
    	).getText()
    ).toEqual('Diavel');
  });

  it('should have scrambler button', function() {
    expect(
    	element(
    		by.css('#scrambler')
    	).getText()
    ).toEqual('Scrambler');
  });

  it('should show monster detail when click monster button', function() {
    element(by.id('monster')).click();
    expect(by.css('#header')).toEqual('Monster 796');
  });

  it('should show scrambler detail when click scrambler button', function() {
    element(by.id('scrambler')).click();
    expect(by.css('#header')).toEqual('Scrambler');
  });


});