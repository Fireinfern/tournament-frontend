import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentGridComponent } from './tournament-grid.component';

describe('TournamentGridComponent', () => {
  let component: TournamentGridComponent;
  let fixture: ComponentFixture<TournamentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
