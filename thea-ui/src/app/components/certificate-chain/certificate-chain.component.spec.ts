import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CertificateChainComponent } from './certificate-chain.component';
import { CertificateComponent } from '../certificate/certificate.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CertificateChainComponent', () => {
  let component: CertificateChainComponent;
  let fixture: ComponentFixture<CertificateChainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [
        CertificateChainComponent,
        CertificateComponent
    ],
    imports: [NgbModule,
        RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
