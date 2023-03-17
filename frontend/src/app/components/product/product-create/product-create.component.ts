import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.mode';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  product: Product =  {
    name: '',
    price: null
   }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso');
      this.router.navigate(['/'])
    })
  }

  cancel(): void {
    this.productService.showMessage('Voltando pra tela anterior');
    this.router.navigate(['/']);
  }

}
