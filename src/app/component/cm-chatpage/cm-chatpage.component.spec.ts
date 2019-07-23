import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmChatpageComponent } from './cm-chatpage.component';

describe('CmChatpageComponent', () => {
  let component: CmChatpageComponent;
  let fixture: ComponentFixture<CmChatpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmChatpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmChatpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
