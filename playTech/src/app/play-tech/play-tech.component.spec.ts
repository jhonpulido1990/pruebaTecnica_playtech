import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTechComponent } from './play-tech.component';

describe('PlayTechComponent', () => {
  let component: PlayTechComponent;
  let fixture: ComponentFixture<PlayTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
