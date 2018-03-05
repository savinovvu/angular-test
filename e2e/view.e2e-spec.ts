import {browser, by, element} from 'protractor';

describe('Given views should flip through navigation interraction', () => {
  let view1, view2, view1Link, view2Link;

  beforeEach(() => {
    browser.get('view1');

    view1 = element(by.css('app-view1 #view1'));
    view2 = element(by.css('app-view2 #view2'));

    view1Link = element(by.linkText('View1'));
    view2Link = element(by.linkText('View2'));

  });

  it('Should fliped to View2 and view2 should visible', () => {
    expect(view1.isPresent()).toBeTruthy();
    expect(view2.isPresent()).toBeFalsy();
  });

  it('View1 should have body content as expected', () => {
    expect(view1.getText()).toEqual('I am view one component');
  });

  it('Should flipped to View2 and view should visible', () => {
    view2Link.click();
    expect(view2.isPresent()).toBeTruthy();
    expect(view1.isPresent()).toBeFalsy();
  });

  it('Should flipped to View2 and should have body content as expected', () => {
    view2Link.click();
    expect(view2.getText()).toEqual('I am view two component');
  });

  it('Should flipped to View1 again and should visible', () => {
    view1Link.click();
    expect(view1.isPresent()).toBeTruthy();
    expect(view2.isPresent()).toBeFalsy();
  });


  /*  it('Should fliped to View2 and view1 should not visible', () => {
      expect(view1.isPresent()).toBeFalsy();
    });

    it('Should fliped to View2 and should have body content as expected', () => {
      expect(view2.getText()).toEqual('I am view two component');
    });
    it('Should flipped to View1 again and should visible',()=>{})*/

});
