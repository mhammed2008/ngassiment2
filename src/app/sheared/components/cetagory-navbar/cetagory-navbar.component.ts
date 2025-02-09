import { Component, EventEmitter, inject, OnInit, Output  } from '@angular/core';
import {  RouterLinkActive, RouterLink, Router } from '@angular/router';
import { CategoryService } from '../../services/category/category.service';
import { Category } from '../../interface/category';


@Component({
  selector: 'app-cetagory-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './cetagory-navbar.component.html',
  styleUrl: './cetagory-navbar.component.scss'
})
export class CetagoryNavbarComponent implements OnInit {
  private _categoryService = inject(CategoryService);
  private router = inject(Router);
  @Output() refresh: EventEmitter<string> = new EventEmitter();
  loading:boolean = true;
  categories!: Category[];

  constructor(){}

  ngOnInit(): void {
    this.getCatgoriesName()
  }

  getCatgoriesName() {
    this.loading = false;
    this._categoryService.getCategorys().subscribe({
      next: (data) => {
        
        this.categories = data.meals
      },
      error:(err)=> {
        console.log(err);
      },
      complete:() => {
        this.loading = false;
      }
    })
  }
  refreshApi(url: string) {
    console.log(url);
    this.refresh.emit(url)
  } 
  routeBettwenCategories(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    if (selectedValue) {
      this.refresh.emit(selectedValue);
      this.router.navigate(['category',selectedValue]);
    }
  }
}
