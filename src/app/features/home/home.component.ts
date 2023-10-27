import { Component } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';
import { Store } from 'src/app/core/models/store.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { StoresService } from 'src/app/shared/services/stores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories: Category[] = [];
  stores: Store[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private storesService: StoresService,
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getStores();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      response => {
        this.categories = response;
      },
      error => {
        console.error('Erro ao carregar categorias', error);
      }
    )
  }

  getStores() {
    this.storesService.getStores().subscribe(
      response => {
        this.stores = response;
      },
      error => {
        console.error('Erro ao carregar lojas', error);
      }
    )
  }

  viewProducts(id: any) {
    console.log(id)
  }
}
