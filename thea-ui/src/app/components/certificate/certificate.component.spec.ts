import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';

import { CertificateComponent } from './certificate.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CertificateComponent', () => {
  let component: CertificateComponent;
  let fixture: ComponentFixture<CertificateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [
        CertificateComponent,
    ],
    imports: [NgbModule,
        RouterTestingModule,
        CommonModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateComponent);
    component = fixture.componentInstance;

    component.certificate = {
      sha256: 'TestSHA',
      subjectAlternativeNames: [],
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
