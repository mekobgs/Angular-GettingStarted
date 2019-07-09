import { SharedModule } from '../shared/shared.module';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
       { path: 'products', component: ProductListComponent },
      { path: 'products/:id' ,
        canActivate: [ProductDetailGuard],
       component: ProductDetailComponent }
    ]),
  SharedModule
  ]
})
export class ProductModule { }
