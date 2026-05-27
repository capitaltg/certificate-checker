import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [
        AppComponent,
        AppNavbarComponent
    ],
    imports: [RouterTestingModule,
        NgbModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
