import {AppComponent} from './app.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';

describe('AppComponent Tests', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    comp.newCommentary.title = 'a sample comment';
    comp.add(null);
  });

  it('First item inthe item should match', () => {
    expect(comp.comments[0].title).toBe('a sample comment');
  });
});
