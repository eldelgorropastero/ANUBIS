import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Playlist1Page } from './playlist-1.page';

describe('Playlist1Page', () => {
  let component: Playlist1Page;
  let fixture: ComponentFixture<Playlist1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Playlist1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
