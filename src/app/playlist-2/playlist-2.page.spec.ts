import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Playlist2Page } from './playlist-2.page';

describe('Playlist2Page', () => {
  let component: Playlist2Page;
  let fixture: ComponentFixture<Playlist2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Playlist2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
