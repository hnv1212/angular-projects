import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { map, of } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IProductType } from '../shared/models/product-type';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = environment.apiUrl;
  product = [
    {
      name: 'Angular Speedster Board 2000',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 200,
      pictureUrl: 'images/products/sb-ang1.png',
      productTypeId: 1,
      productBrandId: 1,
    },
    {
      name: 'Green Angular Board 3000',
      description: 'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.',
      price: 150,
      pictureUrl: 'images/products/sb-ang2.png',
      productTypeId: 1,
      productBrandId: 1,
    },
    {
      name: 'Core Board Speed Rush 3',
      description:
        'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
      price: 180,
      pictureUrl: 'images/products/sb-core1.png',
      productTypeId: 1,
      productBrandId: 2,
    },
    {
      name: 'Net Core Super Board',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
      price: 300,
      pictureUrl: 'images/products/sb-core2.png',
      productTypeId: 1,
      productBrandId: 2,
    },
    {
      name: 'React Board Super Whizzy Fast',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 250,
      pictureUrl: 'images/products/sb-react1.png',
      productTypeId: 1,
      productBrandId: 4,
    },
    {
      name: 'Typescript Entry Board',
      description:
        'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.',
      price: 120,
      pictureUrl: 'images/products/sb-ts1.png',
      productTypeId: 1,
      productBrandId: 5,
    },
    {
      name: 'Core Blue Hat',
      description:
        'Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 10,
      pictureUrl: 'images/products/hat-core1.png',
      productTypeId: 2,
      productBrandId: 2,
    },
    {
      name: 'Green React Woolen Hat',
      description:
        'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
      price: 8,
      pictureUrl: 'images/products/hat-react1.png',
      productTypeId: 2,
      productBrandId: 4,
    },
    {
      name: 'Purple React Woolen Hat',
      description:
        'Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 15,
      pictureUrl: 'images/products/hat-react2.png',
      productTypeId: 2,
      productBrandId: 4,
    },
    {
      name: 'Blue Code Gloves',
      description: 'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.',
      price: 18,
      pictureUrl: 'images/products/glove-code1.png',
      productTypeId: 4,
      productBrandId: 3,
    },
    {
      name: 'Green Code Gloves',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
      price: 15,
      pictureUrl: 'images/products/glove-code2.png',
      productTypeId: 4,
      productBrandId: 3,
    },
    {
      name: 'Purple React Gloves',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
      price: 16,
      pictureUrl: 'images/products/glove-react1.png',
      productTypeId: 4,
      productBrandId: 4,
    },
    {
      name: 'Green React Gloves',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
      price: 14,
      pictureUrl: 'images/products/glove-react2.png',
      productTypeId: 4,
      productBrandId: 4,
    },
    {
      name: 'Redis Red Boots',
      description:
        'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
      price: 250,
      pictureUrl: 'images/products/boot-redis1.png',
      productTypeId: 3,
      productBrandId: 6,
    },
    {
      name: 'Core Red Boots',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.',
      price: 189.99,
      pictureUrl: 'images/products/boot-core2.png',
      productTypeId: 3,
      productBrandId: 2,
    },
    {
      name: 'Core Purple Boots',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
      price: 199.99,
      pictureUrl: 'images/products/boot-core1.png',
      productTypeId: 3,
      productBrandId: 2,
    },
    {
      name: 'Angular Purple Boots',
      description:
        'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.',
      price: 150,
      pictureUrl: 'images/products/boot-ang2.png',
      productTypeId: 3,
      productBrandId: 1,
    },
    {
      name: 'Angular Blue Boots',
      description:
        'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
      price: 180,
      pictureUrl: 'images/products/boot-ang1.png',
      productTypeId: 3,
      productBrandId: 1,
    },
  ];

  constructor(private http: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();
    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }
    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }
    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());

    return this.http
      .get<IPagination<IProduct[]>>(this.baseUrl + 'products', {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          return response.body;
        })
      );
    // return of({ data: this.product });
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }

  getProduct(id: number) {
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id)
  }
}
