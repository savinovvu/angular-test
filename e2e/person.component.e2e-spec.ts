import {browser, by, element} from 'protractor';

describe('Given should test the searh result in details view',()=>{
  beforeEach(() => {
    browser.get('members');
    let searchButton = element(by.css('form button'));
    let searchBox = element(by.css('form input'));
    searchBox.sendKeys('Thomas');
    searchButton.click();
    let resultItem = element(by.linkText('Demaryius Thomas'));
    resultItem.click();
  });
  it('should be load the person details page',()=>{
    let resultDetail = element(by.css('#personDetails'));
    expect(resultDetail.isDisplayed()).toBeTruthy();
  })
});
