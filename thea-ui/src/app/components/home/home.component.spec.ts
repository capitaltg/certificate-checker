import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { CertificateChainComponent } from '../certificate-chain/certificate-chain.component';
import { RecentComponent } from '../recent/recent.component';
import { CertificateComponent } from '../certificate/certificate.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [
        HomeComponent,
        CertificateChainComponent,
        CertificateComponent,
        RecentComponent,
    ],
    imports: [NgbModule,
        FormsModule,
        RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
