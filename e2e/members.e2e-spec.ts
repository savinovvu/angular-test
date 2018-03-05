import {browser, by, element} from 'protractor';

describe('Given should test the search feature', () => {
  let searchBox, searchButton, searchResult;
  beforeEach(() => {
    browser.get('');
    element(by.linkText('Search')).click();
    searchResult = element.all(by.css('#searchList tbody tr'));
    expect(searchResult.count()).toBe(3);

    searchButton = element(by.css('form button'));
    searchBox = element(by.css('form input'));
    searchBox.sendKeys('Thomas');
    searchButton.click();
  });

  it('There should be one item in search result', () => {
    searchResult = element.all(by.css('#searchList tbody tr'));
    expect(searhResult.count()).toBe(1);
  });
});
