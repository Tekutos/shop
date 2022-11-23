import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/models/services/modal.service';
import { ProductService } from 'src/app/models/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  ngOnInit(): void {}

  submit() {
    console.log(
      this.productService
        .create({
          title: this.form.value.title as string,
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic',
          rating: {
            rate: 42,
            count: 1,
          },
          id: 0,
        })
        .subscribe(() => {
          this.modalService.close();
        })
    );
  }
}
