import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeLicornes } from './page-liste-licornes';

describe('PageListeLicornes', () => {
  let component: PageListeLicornes;
  let fixture: ComponentFixture<PageListeLicornes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListeLicornes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListeLicornes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
