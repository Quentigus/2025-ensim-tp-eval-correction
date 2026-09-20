import { Component, inject } from '@angular/core';
import { AffichageLicorne } from '../../affichage-licorne/affichage-licorne';
import { Licorne } from '../../licorne';
import { Licornes, VoteType } from '../../licornes';
import { Vote } from '../../vote/vote';

@Component({
    selector: 'app-page-liste-licornes',
    imports: [AffichageLicorne, Vote],
    templateUrl: './page-liste-licornes.html',
    styleUrl: './page-liste-licornes.css',
})
export class PageListeLicornes {
    /** Service des licornes */
    private readonly licornesService = inject(Licornes);

    /** Liste des licornes triées par nom */
    protected licornes = this.licornesService.getAllLicornes().sort((a, b) => a.nom.localeCompare(b.nom));

    /**
     * Modifie le score d'une licorne
     * @param licorne Licorne dont on modifie le score
     * @param vote Valeur à ajouter au score (positive ou négative)
     */
    protected modifierScore(licorne: Licorne, vote: VoteType) {
        this.licornesService.voter(licorne.id, vote);
    }
}
