import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from 'src/app/services/storage/storage.service';
import { PopoverController } from '@ionic/angular';
import { CartComponent } from 'src/app/components/customer-components/cart/cart.component';
import { ProductService } from 'src/app/services/product/product.service';
import { ICategory, IProduct } from 'src/app/structure/interfaces';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/structure/classes/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: Product[] = [];
  categoriez: ICategory[] = [];

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  constructor(
    private _storageService: StorageService,
    private _productService: ProductService,
    private _categoryService: CategoryService,
    private animationCtrl: AnimationController,
    public popoverController: PopoverController
    ) {
  }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  // Set products
  getProducts() {
    let temp_Product: Product;
    this._productService.getProducts().subscribe(
      (responses) => {
        responses.map(product => {
          this.products.push(product);
        })
      }
    )
  }

  // Set categories
  getCategories(){
    this._categoryService.getCategories().subscribe(
      responses => {
        responses.map(category => {
          this.categoriez.push({
            color: category.color,
            image: category.image,
            name: category.name
          });
        });
      }
    )
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CartComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
