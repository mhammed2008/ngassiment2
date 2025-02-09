import { Routes} from '@angular/router';
import { HomeComponent } from './featured/pages/home/home.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    { path: 'category/:category', loadComponent: () => import('./featured/pages/category/category.component').then(c => c.CategoryComponent)  },
    { path: 'recpie/:id', loadComponent: () => import('./featured/pages/recpie-details/recpie-details.component').then(c => c.RecpieDetailsComponent) },
    {path:"" , redirectTo:'home' , pathMatch: 'full'},
    {path:"**" , redirectTo:'home' , pathMatch: 'full'}

];
