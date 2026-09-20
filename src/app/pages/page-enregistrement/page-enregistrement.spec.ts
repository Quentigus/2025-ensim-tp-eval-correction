import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnregistrement } from './page-enregistrement';

describe('PageEnregistrement', () => {
    let component: PageEnregistrement;
    let fixture: ComponentFixture<PageEnregistrement>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PageEnregistrement],
        }).compileComponents();

        fixture = TestBed.createComponent(PageEnregistrement);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
