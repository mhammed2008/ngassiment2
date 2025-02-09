import { Component, Input } from '@angular/core';
import { RecpieCardComponent } from '../../../sheared/components/recpie-card/recpie-card.component';
import { Recpies } from '../../../sheared/interface/recpies';




@Component({
  selector: 'app-recipes-cards',
  imports: [RecpieCardComponent],
  templateUrl: './recipes-cards.component.html',
  styleUrl: './recipes-cards.component.scss'
})
export class RecipesCardsComponent  {
  @Input() recpies!: Recpies[] ;
  @Input() load!: boolean ;

}
