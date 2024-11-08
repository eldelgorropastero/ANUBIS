import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Playlist3Page } from './playlist-3.page';

describe('Playlist3Page', () => {
  let component: Playlist3Page;
  let fixture: ComponentFixture<Playlist3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Playlist3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
