import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageLicorne } from './affichage-licorne';

describe('AffichageLicorne', () => {
    let component: AffichageLicorne;
    let fixture: ComponentFixture<AffichageLicorne>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AffichageLicorne],
        }).compileComponents();

        fixture = TestBed.createComponent(AffichageLicorne);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
