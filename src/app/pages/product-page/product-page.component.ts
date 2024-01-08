import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  title = 'Angular App';
  //products: IProduct[] = []
  loading = false
  //products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
    ){

  }

  ngOnInit(): void {
    this.loading = true
    //this.products$ = this.productsService.getAll().pipe(
    //  tap(() => this.loading = false)
    //)
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  } 
}
