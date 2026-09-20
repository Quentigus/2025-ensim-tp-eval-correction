import { Component, output } from '@angular/core';

@Component({
    selector: 'app-vote',
    imports: [],
    templateUrl: './vote.html',
    styleUrl: './vote.css',
})
export class Vote {
    /** Evénement émis lorsqu'on vote pour */
    readonly plus = output<void>();
    /** Evénement émis lorsqu'on vote contre */
    readonly moins = output<void>();

    onPlus() {
        this.plus.emit();
    }

    onMinus() {
        this.moins.emit();
    }
}
