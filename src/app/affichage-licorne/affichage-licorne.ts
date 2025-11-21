import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Licorne } from '../licorne';

@Component({
    selector: 'app-licorne',
    imports: [RouterLink],
    templateUrl: './affichage-licorne.html',
    styleUrl: './affichage-licorne.css',
})
export class AffichageLicorne {
    /** Licorne à afficher */
    readonly licorne = input.required<Licorne>();
}
