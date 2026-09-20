import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsLicorne } from './page-details-licorne';

describe('PageDetailsLicorne', () => {
    let component: PageDetailsLicorne;
    let fixture: ComponentFixture<PageDetailsLicorne>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PageDetailsLicorne],
        }).compileComponents();

        fixture = TestBed.createComponent(PageDetailsLicorne);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
