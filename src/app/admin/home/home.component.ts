import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { ProduitsService } from 'src/app/services/produits.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  products: any;
  constructor(private productService: ProduitsService,
    private router: Router, private toastyService:ToastyService) { }
  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (docs) => {
        console.log('here data from BE', docs.products);
        this.products = docs.products;
      });
  }
  updateProduct(id: any) {
    this.router.navigate([`admin/add-cheese/${id}`]);
  }
  deleteProduct(id: any) {
    this.productService.delateProduct(id).subscribe(
      (result) => {
        this.productService.getAllProducts().subscribe(
          (result) => {
            this.products = result.products
          }

        )
      }
    )
  }
  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }
}
