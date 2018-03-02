import {AppComponent} from './app.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('AppComponent Tests', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    comp.add('a sample comment');
  });

  it('First item inthe item should match', () => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    comp.add('a sample comment');
    expect(comp.comments[0]).toBe('a sample comment');
  });
});
