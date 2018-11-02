import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { GameoverComponent } from './gameover.component';
import { RouterLinkStubDirective } from '../testing/router-link-stub.directive';


describe('GameoverComponent', () => {
  let component: GameoverComponent;
  let fixture: ComponentFixture<GameoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        GameoverComponent,
        RouterLinkStubDirective
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ result: 0 })
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
