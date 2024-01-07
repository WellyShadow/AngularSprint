import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/products';
import { ProductsService } from './services/product.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angulartesttask';
  //products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(private productsService: ProductsService){

  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
//    this.productsService.getAll().subscribe(products => {
//      this.products = products
//      this.loading = false
//    })
  } 
}
