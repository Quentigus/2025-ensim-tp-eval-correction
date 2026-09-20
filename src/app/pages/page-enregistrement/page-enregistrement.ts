import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Licornes } from '../../licornes';

@Component({
    selector: 'app-page-enregistrement',
    imports: [ReactiveFormsModule],
    templateUrl: './page-enregistrement.html',
    styleUrl: './page-enregistrement.css',
})
export class PageEnregistrement {
    /** Service des licornes */
    private readonly licornesService = inject(Licornes);
    /** Router pour la navigation */
    private readonly router = inject(Router);
    /** FormBuilder pour créer le formulaire */
    private readonly fb = inject(FormBuilder);

    /** Formulaire d'enregistrement */
    protected form = this.fb.group({
        nom: this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
        description: this.fb.control('', [Validators.maxLength(100)]),
    });

    /** Enregistre la nouvelle licorne et redirige vers sa page de détails */
    enregistrer(): void {
        // Si le formulaire est valide
        if (this.form.valid) {
            // Génération de l'identifiant
            const id = this.licornesService.genererId();

            // Enregistrement de la licorne
            this.licornesService.enregistrer({
                id, // Identifiant généré (équivalent à "id: id")
                score: 0,
                nom: this.form.value.nom!, // ! pour indiquer que la valeur n'est pas null
                description: this.form.value.description!, // ! pour indiquer que la valeur n'est pas null
            });

            // Redirection vers la page de détails de la licorne
            this.router.navigate(['/licornes', id]);
        }
    }
}
