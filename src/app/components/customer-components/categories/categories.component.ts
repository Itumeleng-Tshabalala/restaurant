import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ICategory } from 'src/app/structure/interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  @Input() categories: ICategory[] = [];

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  cat = {
    slidesPerView: 2.5,
  };

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {}

  goToCategories(categoryId: string) {
    this.router.navigate(['/product-category/'], {
      queryParams: { id: categoryId }
    });
  }

}
