import { Component, inject, OnInit } from '@angular/core';
import { Licorne } from '../../licorne';
import { AffichageLicorne } from '../../affichage-licorne/affichage-licorne';
import { Licornes, VoteType } from '../../licornes';
import { Vote } from '../../vote/vote';

@Component({
    selector: 'app-page-accueil',
    imports: [AffichageLicorne, Vote],
    templateUrl: './page-accueil.html',
    styleUrl: './page-accueil.css',
})
export class PageAccueil implements OnInit {
    /** Service des licornes */
    private readonly licornesService = inject(Licornes);

    /** Top 3 des licornes avec le meilleur score */
    protected top3: Licorne[] = [];

    ngOnInit(): void {
        // Récupération du top 3 des licornes au chargement
        this.recupererTop3();
    }

    /**
     * Modifie le score d'une licorne
     * @param licorne Licorne dont on modifie le score
     * @param vote Valeur à ajouter au score (positive ou négative)
     */
    protected modifierScore(licorne: Licorne, vote: VoteType) {
        // Mise à jour du score
        this.licornesService.voter(licorne.id, vote);
        // Mise à jour du top 3 au cas où le classement a changé
        this.recupererTop3();
    }

    /** Récupère les 3 licornes avec le meilleur score */
    private recupererTop3() {
        this.top3 = this.licornesService
            .getAllLicornes()
            .sort((a, b) => b.score - a.score)
            .slice(0, 3);
    }
}
