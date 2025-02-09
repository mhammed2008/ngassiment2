import { Component, inject, OnInit } from '@angular/core';
import { CetagoryNavbarComponent } from "../../../sheared/components/cetagory-navbar/cetagory-navbar.component";
import { RecipesCardsComponent } from '../../components/recipes-cards/recipes-cards.component';
import { RecpiesService } from '../../../sheared/services/category/recpies.service';
import { Recpies } from '../../../sheared/interface/recpies';

@Component({
  selector: 'app-home',
  imports: [RecipesCardsComponent, CetagoryNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private _recpiesService = inject(RecpiesService);
  recpies!: Recpies[];
  loading: boolean = true;

  ngOnInit(): void {
    this.getAllRecpies()
  }

  getAllRecpies() {
    return this._recpiesService.getAllRecpies().subscribe({
      next: (data) => {
        this.recpies = data.meals;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.loading = false
      },
    })
  }
  refreshApi(url: any) {
    console.log(url + "home");
    
  }
}
