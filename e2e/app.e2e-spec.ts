import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';
import {AppComponent} from '../src/app/components/app.component';

describe('AppComponent Tests', () => {
  /* let page: AppPage;
   browser.get('/');*/
  let todoListItems;
    todoListItems = element.all(by.css('li'));
  beforeAll(()=>{
    browser.get('/');
  });
  let app: AppComponent;
  beforeEach(() => {
    app = new AppComponent();
  });
  it('Browser should have a defined title', () => {
    expect(browser.getTitle()).toEqual('Angular Protractor');
  });

  it('Should get the number of items as defined in item object', () => {
    var listItem = element.all(by.css('li'));
    listItem.count().then(() => {
      expect(listItem.count).toBe(3);
    }
  );
    expect(todoListItems.count()).toBe(3);
  });
  it('Should get the first item text as defined', () => {
    expect(todoListItems.first().getText()).toEqual('test');
  });


  /*  var inputField = element.all(by.css('input'));
    inputField.setText('abc');
    var searchButton = element.all(by.css('#searchButton'));
    searchButton.click();
    it('should display search results', () => {
      var searchResults = element.all(by.css('searchResult'));
      expect(searchResults.count() >= 1);*/
});
