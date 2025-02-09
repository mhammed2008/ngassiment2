import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../sheared/services/category/category.service';
import { RecpiesService } from '../../../sheared/services/category/recpies.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {   Ingredients, Recpies } from '../../../sheared/interface/recpies';


@Component({
  selector: 'app-recpie-details',
  imports: [RouterLink],
  templateUrl: './recpie-details.component.html',
  styleUrl: './recpie-details.component.scss'
})
export class RecpieDetailsComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private _recpiesService = inject(RecpiesService);
  recpie!: Recpies;
  notFound: boolean = false;
  load: boolean = true;
  ingredients:Ingredients[]=[];
  private ingredient:string[] =[];
  private measure:string[] = [];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.getSinglRecpie(id);
  }

  getSinglRecpie(id: string | null) {
    this._recpiesService.getRecpie(id).subscribe({
      next: (data) => {
        this.recpie = data.meals[0];
        this.arrayGeneratorForIngredientsAndMeasures(this.recpie)
        console.log(this.ingredients);
      },
      error: (err) => {
        this.notFound = true;
        console.log(err);
      },
      complete: () => {
        this.load = false;
      }

    })
  }

  arrayGeneratorForIngredientsAndMeasures(obj: Recpies) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.match('Ingredient') != undefined && value != false) {
        console.log('true');
        this.ingredient.push(value);
      }
      if (key.match('Measure') != undefined && value != false) {
        console.log('true');
        this.measure.push(value);
      }
    }
    for (let index = 0; index < this.measure.length; index++) {
      this.ingredients.push({ ingredient: this.ingredient[index], measure: this.measure[index] });
    }
  }
}
