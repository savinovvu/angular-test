import {browser, by, element} from 'protractor';

describe('AppComponent Tests', () => {
  beforeEach(() => {
    browser.get('/');
  });
  it('Test spec for debug and play', () => {
    browser.debugger();
    expect(element(by.id('my_id')).getText()).toEqual('my text');
  });

});
