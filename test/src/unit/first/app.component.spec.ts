import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('A sample test suite to test jasmine assertion', () => {
  let a = 0;
  beforeEach(() => {
    a += 1;
  });
  afterEach(() => {
    a = 0;
  });
  it('Title for a spec 1', () => {
    expect(a).toEqual(1);
  });
  it('Title for a spec 2', () => {
    expect(a).toEqual(1);
    expect(a).not.toEqual(0);
  });
});

describe('A sample test suite 2 to test jasmine assertion', () => {
  let myObj, a, fetchA;
  beforeEach(() => {
    myObj = {
      setA: (value) => {
        a = value;
      },
      getA: () => a
    };
    spyOn(myObj, 'getA').and.returnValue(789);
    myObj.setA(123);
    fetchA = myObj.getA();
  });
  it('tracks that the spy was called', () => {
    expect(myObj.getA).toHaveBeenCalled();
  });
  it('should not affect other functions', () => {
    expect(a).toEqual(123);
  });
  it("then called returns the requested value", ()=>{
    expect(fetchA).toEqual(789);
  })

});

