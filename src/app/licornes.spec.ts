import { TestBed } from '@angular/core/testing';

import { Licornes } from './licornes';

describe('Licornes', () => {
    let service: Licornes;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Licornes);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
