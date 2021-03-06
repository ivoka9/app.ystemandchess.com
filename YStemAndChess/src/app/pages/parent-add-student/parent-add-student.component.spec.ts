import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { ParentAddStudentComponent } from './parent-add-student.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { ModalModule } from '../../_modal';

describe('ParentAddStudentComponent', () => {
  let component: ParentAddStudentComponent;
  let fixture: ComponentFixture<ParentAddStudentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAddStudentComponent, HeaderComponent, FooterComponent, LoginComponent ],
      imports: [ ModalModule, RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: 'parent-add-student', component: ParentAddStudentComponent },
], { relativeLinkResolution: 'legacy' })
      ],
      providers: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
