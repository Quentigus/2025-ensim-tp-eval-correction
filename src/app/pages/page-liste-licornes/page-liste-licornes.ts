import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AffichageLicorne } from '../../affichage-licorne/affichage-licorne';
import { Licorne } from '../../licorne';
import { Licornes, VoteType } from '../../licornes';
import { Vote } from '../../vote/vote';

@Component({
    selector: 'app-page-liste-licornes',
    imports: [AffichageLicorne, Vote, RouterLink],
    templateUrl: './page-liste-licornes.html',
    styleUrl: './page-liste-licornes.css',
})
export class PageListeLicornes {
    /** Service des licornes */
    private readonly licornesService = inject(Licornes);
    /** Route actuelle pour récupérer les paramètres */
    private readonly route = inject(ActivatedRoute);

    /** Liste des licornes triées par nom */
    protected licornes: Licorne[] = [];
    /** Critère de tri actif */
    protected sortBy: 'name' | 'score' = 'name';

    ngOnInit(): void {
        // Récupération des paramètres de la route pour le tri
        this.route.queryParams.subscribe((params) => {
            // On met à jour le critère de tri pour refléter l'état actuel
            this.sortBy = params['sort'];
            // On récupère les licornes triées selon le critère actif
            this.recupererLicornes();
        });
    }

    /**
     * Modifie le score d'une licorne
     * @param licorne Licorne dont on modifie le score
     * @param vote Valeur à ajouter au score (positive ou négative)
     */
    protected modifierScore(licorne: Licorne, vote: VoteType) {
        // Mise à jour du score
        this.licornesService.voter(licorne.id, vote);
        // On re-récupère les licornes pour mettre à jour l'affichage
        this.recupererLicornes();
    }

    /** Récupère et trie les licornes selon le critère actif*/
    private recupererLicornes() {
        const tmp = [...this.licornesService.getAllLicornes()];
        switch (this.sortBy) {
            case 'score':
                this.licornes = tmp.sort((a, b) => b.score - a.score);
                break;
            case 'name':
            default:
                this.licornes = tmp.sort((a, b) => a.nom.localeCompare(b.nom));
                break;
        }
    }
}
