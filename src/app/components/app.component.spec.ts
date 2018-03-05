import {AppComponent} from './app.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {BrowserModule, By} from '@angular/platform-browser';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterLinkStubDirective} from '../stub/router-link-stub.directive';
import {RouterOutletStubComponent} from '../stub/router-outlet/router-outlet.component';

describe('AppComponent Tests suite', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let navDestination: any;
  let navLinks: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponent, RouterLinkStubDirective, RouterOutletStubComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture.detectChanges();
    navDestination = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));
    navLinks = navDestination
      .map(de => de.injector.get(RouterLinkStubDirective) as
        RouterLinkStubDirective);
  });

  /* it('should create and initiate the App component', () => {
     expect(comp).toBeDefined();
   });

   it('should have expected test in <h1> element', () => {
     fixture.detectChanges();
     const h1 = de.nativeElement;
     expect(h1.innerText).toMatch('My First Angular 2 App',
       '<h1> should say something about "Angular App"');
   });*/

  it('can get RouterLinks from template', () => {
    expect(navLinks.length).toBe(3, 'should have 3 links');
    expect(navLinks[0].linkParams).toBe('/view1', '1st link should go to View1');
    expect(navLinks[1].linkParams).toBe('/view2', '1st link should go to View2');
    expect(navLinks[2].linkParams).toBe('/members',
      '1st link should go to members search page');
  });

  it('can click nav items link in template and navigate accordingly', () => {
    navDestination[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(navLinks[0].navigatedTo).toBe('/view1');

    navDestination[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(navLinks[1].navigatedTo).toBe('/view2');

    navDestination[2].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(navLinks[2].navigatedTo).toBe('/members');
  });


});
