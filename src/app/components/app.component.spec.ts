import {AppComponent} from './app.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('AppComponent Tests', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    comp.add('a sample comment2');
  });

  it('First item inthe item should match', () => {
    expect(comp.comments[0]).toBe('a sample comment2');
  });
});
