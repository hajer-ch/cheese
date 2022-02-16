import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-add-cheese',
  templateUrl: './add-cheese.component.html',
  styleUrls: ['./add-cheese.component.css']
})
export class AddCheeseComponent implements OnInit {
  productForm: FormGroup;
  product: any = {};
  imagePreview: any;
  id:any;
  titles:any;
  message:any;
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  constructor(private formBuilder: FormBuilder,
    private productService: ProduitsService,
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private toastyService:ToastyService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.titles='Update';
      this.productService.getProductById(this.id).subscribe(
        (result)=>{
          this.product=result.findedProduct;
        }
      )
    }else{
      this.titles='Add'
    }
    this.productForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      image: ['']
    })
   
  }
  addProduct() {
    if (this.id) {
      this.productService.updateProduct(this.product).subscribe(
        (data)=>{
          if (data.message=='0') {
            this.message='can not update'
          }else{
            this.router.navigate(['/admin/home']);
          }
        }
      )
    }else{
      this.productService.addProduct(this.product, this.productForm.value.image).subscribe();
        this.router.navigate(['/admin/home']);
    }
    
  }
  addToast(options) {
    
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
 
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here file', file);

    this.productForm.patchValue({ image: file });
    this.productForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }; reader.readAsDataURL(file);
  }
}