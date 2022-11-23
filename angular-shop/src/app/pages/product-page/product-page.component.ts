import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ModalService } from 'src/app/models/services/modal.service';
import { ProductService } from 'src/app/models/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  title = 'angular shop';
  products: IProduct[] = [];
  loading = false;
  products$: Observable<IProduct[]>;
  term = '';

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
