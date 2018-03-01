import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('Title of the test suite', () => {
  let app: AppComponent;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  beforeEach(() => {
    comp.add('new-item');
  });

  it('Should define a list object', () => {
    expect(comp.items).toBeDefined();
  });
  it('Should have 4 items in list', () => {
    expect(comp.items.length).toBe(4);
  });
  it('List items should be as expected', () => {
    expect(comp.items).toEqual(['test', 'execute', 'refactor','new-item']);
  });

});
