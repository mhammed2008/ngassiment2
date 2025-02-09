import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recpies } from '../../interface/recpies';

@Component({
  selector: 'app-recpie-card',
  imports: [RouterLink],
  templateUrl: './recpie-card.component.html',
  styleUrl: './recpie-card.component.scss'
})
export class RecpieCardComponent {
  @Input() recpie!: Recpies;
}
