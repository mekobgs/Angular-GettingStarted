import { ProductService } from './product.service';
import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter:string;
    filteredProducts: IProduct[];
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts =this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] = []

    constructor(private productService: ProductService){
    }

    performFilter(filterBy:string) : IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                product.productCode.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toogleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: ' + message;
    }
}