import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ChainComponent } from './chain.component';
import { CertificateChainComponent } from '../certificate-chain/certificate-chain.component';
import { CertificateComponent } from '../certificate/certificate.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ChainComponent', () => {
  let component: ChainComponent;
  let fixture: ComponentFixture<ChainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [
        ChainComponent,
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
    fixture = TestBed.createComponent(ChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
