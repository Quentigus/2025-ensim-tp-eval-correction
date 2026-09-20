import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Licorne } from '../../licorne';
import { Licornes, VoteType } from '../../licornes';
import { Vote } from '../../vote/vote';

@Component({
    selector: 'app-page-details-licorne',
    imports: [Vote],
    templateUrl: './page-details-licorne.html',
    styleUrl: './page-details-licorne.css',
})
export class PageDetailsLicorne implements OnInit {
    /** Service des licornes */
    private readonly licornesService = inject(Licornes);
    /** Route actuelle pour récupérer les paramètres */
    private readonly activatedRoute = inject(ActivatedRoute);

    /** Licorne affichée */
    protected licorne: Licorne | undefined;
    /** Position de la licorne dans le classement */
    protected position: number = -1;

    ngOnInit(): void {
        // Récupération de l'identifiant dans les paramètres de la route
        this.activatedRoute.params.subscribe((params) => {
            const pathId = parseInt(params['id']);

            // Récupération de la licorne correspondante
            this.licorne = this.licornesService.getAllLicornes().find((l) => l.id === pathId);

            // Récupération de sa position dans le classement
            this.recupererPosition();
        });
    }

    /**
     * Modifie le score de la licorne affichée
     * @param vote Valeur à ajouter au score (positive ou négative)
     */
    protected modifierScore(vote: VoteType) {
        if (this.licorne) {
            // Mise à jour du score
            this.licornesService.voter(this.licorne.id, vote);
            // Récupération de la nouvelle position au cas où le classement a changé
            this.recupererPosition();
        }
    }

    /** Récupère la position dans le classement de la licorne affichée */
    private recupererPosition() {
        this.position = this.licorne ? this.licornesService.getPosition(this.licorne.id) : -1;
    }
}
