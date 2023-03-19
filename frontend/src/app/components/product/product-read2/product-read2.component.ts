import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductService } from '../product.service';
import { Product } from './../product.mode';

@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  products: Product[];

  constructor(private productService: ProductService) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price']

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    })
  }

  // ngAfterViewInit() {
  //   this.products.sort = this.sort;
  //   this.products.paginator = this.paginator;
  //   this.table.products = this.products;
  // }
}
