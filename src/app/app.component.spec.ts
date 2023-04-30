import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(async () => {
    fixture = new AppComponent();

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });

});
