describe('Ducati Shop', function() {
  it('should have title', function() {
    browser.get('http://0.0.0.0:8000');
    expect(browser.getTitle()).toEqual('Ducati Shop');
  });

  it('should menu bar', function() {
    browser.get('http://0.0.0.0:8000');
    expect(
    	element(
    		by.id('menu-bar')
    	).isPresent()
    ).toBe(true);
  });

  it('should have 5 button in menu bar', function() {
    browser.get('http://0.0.0.0:8000');
    expect(
    	element(
    		by.id('menu-bar')
    	)
    	.all(by.css('a')).count()
    ).toEqual(5);
  });

  it('should have monster button', function() {
    browser.get('http://0.0.0.0:8000');
    expect(
    	element(
    		by.css('#monster')
    	).getText()
    ).toEqual('Monster 796');
  });

  it('should have panigale button', function() {
    browser.get('http://0.0.0.0:8000');
    expect(
    	element(
    		by.css('#panigale')
    	).getText()
    ).toEqual('Panigale 1299s');
  });

  it('should have multistrada button', function() {
    browser.get('http://0.0.0.0:8000');
    expect(
    	element(
    		by.css('#multistrada')
    	).getText()
    ).toEqual('Multistrada 1200');
  });

  it('should have diavel button', function() {
    browser.get('http://0.0.0.0:8000');
    expect(
    	element(
    		by.css('#diavel')
    	).getText()
    ).toEqual('Diavel');
  });

  it('should have scrambler button', function() {
    browser.get('http://0.0.0.0:8000');
    expect(
    	element(
    		by.css('#scrambler')
    	).getText()
    ).toEqual('Scrambler');
  });

  it('should show monster detail when click monster button', function() {
    browser.get('http://0.0.0.0:8000');
    element(by.id('monster')).click();

    expect(by.css('#header')).toEqual('Monster 796');
  });

  it('should show scrambler detail when click scrambler button', function() {
    browser.get('http://0.0.0.0:8000');
    element(by.id('scrambler')).click();

    expect(by.css('#header')).toEqual('Scrambler');
  });


});