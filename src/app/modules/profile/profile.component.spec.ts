import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenStorageService } from '../../shared/services/auth/token-storage.service';
import { MaterialModule } from '../../../material.module';
import { ProfileComponent } from './profile.component';

describe('LoginComponnet', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [ MaterialModule ],
      providers: [ TokenStorageService ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});