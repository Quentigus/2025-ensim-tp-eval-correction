import { Injectable } from '@angular/core';
import { Licorne } from './licorne';

export type VoteType = -1 | 1;

@Injectable({
    providedIn: 'root',
})
export class Licornes {
    /** Liste des licornes */
    private licornes: Licorne[] = [
        { id: 1, nom: 'Licorne paladine', description: '', score: 10 },
        { id: 2, nom: 'La Bersekercorne', description: '', score: 3 },
        { id: 3, nom: 'La Licorne magicienne', description: '', score: 9 },
        { id: 4, nom: "L'Oricorne pillarde", description: '', score: 0 },
        { id: 5, nom: 'La Manicorne artificière', description: '', score: 5 },
        { id: 6, nom: 'La Licorne sorcière', description: '', score: 2 },
        { id: 7, nom: "L'Elficorne éclaireuse", description: '', score: 0 },
    ];

    /** Retourne toutes les licornes */
    getAllLicornes(): Licorne[] {
        return this.licornes;
    }

    /**
     * Retourne la position d'une licorne dans le classement
     * @param id Identifiant de la licorne
     * @returns Position de la licorne (1 = première place), -1 si la licorne n'existe pas
     */
    getPosition(id: number): number {
        const top3 = this.getAllLicornes().sort((a, b) => b.score - a.score);
        const licorne = this.licornes.find((l) => l.id === id);
        return licorne ? top3.indexOf(licorne) + 1 : -1;
    }

    /**
     * Vote pour une licorne
     * @param id Identifiant de la licorne
     * @param vote Vote (positif ou négatif)
     */
    voter(id: number, vote: VoteType): void {
        const licorne = this.licornes.find((l) => l.id === id);
        if (licorne) {
            licorne.score += vote;
        }
    }

    /** Génère un nouvel identifiant unique pour une nouvelle licorne */
    genererId(): number {
        return this.licornes.length > 0 ? Math.max(...this.licornes.map((l) => l.id)) + 1 : 1;
    }

    /**
     * Enregistre une nouvelle licorne
     * @param licorne Licorne à enregistrer
     */
    enregistrer(licorne: Licorne): void {
        this.licornes = [...this.licornes, licorne];
    }
}
