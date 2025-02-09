import { AfterRenderRef, Component, inject, OnChanges, OnInit } from '@angular/core';
import { CategoryService } from '../../../sheared/services/category/category.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CetagoryNavbarComponent } from "../../../sheared/components/cetagory-navbar/cetagory-navbar.component";
import { RecipesCardsComponent } from "../../components/recipes-cards/recipes-cards.component";
import { Recpies } from '../../../sheared/interface/recpies';

@Component({
  selector: 'app-cetagory',
  imports: [CetagoryNavbarComponent, RecipesCardsComponent, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit   {
  private readonly route = inject(ActivatedRoute);
  private _categoryService = inject(CategoryService);
  loading: boolean = true;
  notFound: boolean = false;
  recpies!: Recpies[];

  ngOnInit(): void {
    const routerCatagoryName = this.route.snapshot.paramMap.get('category');
    this.getRecpiesByCategory(routerCatagoryName)
  }
  
  

  getRecpiesByCategory(category: string | null) {
    this._categoryService.getRecpiesByCategory(category).subscribe({
      next: (data) => {
        this.recpies = data.meals;
        console.log(data);
      },
      error:(err) => {
        this.notFound = true;
        console.log(err);
      },
      complete:()=> {
        
        this.loading=false;
      },
    })
  }
  refreshApi(url:any) {
    console.log(url);
    this.getRecpiesByCategory(url);
  }
  
}
