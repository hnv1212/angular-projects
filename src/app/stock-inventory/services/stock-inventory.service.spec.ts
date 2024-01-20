import { TestBed } from '@angular/core/testing';
import { StockInventoryService } from './stock-inventory.service';
import { map, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
// Http testing module
import { HttpClientTestingModule } from '@angular/common/http/testing';

function createResponse(body: any) {
  return of( body );
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

const cartItems = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 5 },
];
const productItems = [
  { id: 1, price: 10, name: 'Test' },
  { id: 2, price: 100, name: 'Another Test' },
];

describe('StockInventoryService', () => {
  let service: StockInventoryService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StockInventoryService,
        // { provide: HttpClient, useClass: MockHttp },
      ],
    });
    http = bed.inject(HttpClient);
    service = bed.get(StockInventoryService);
  });

  it('should get cart items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...cartItems]));
     service.getCartItems().subscribe((result) => {
      console.log('🚀 ~ service.getCartItems ~ result:', result);
        expect(result.length).toBe(2);
        expect(result).toEqual(cartItems);
    });
  });

  it('should get product items', () => {
    spyOn(http, 'get').and.returnValue(createResponse([...productItems]));

    service.getProducts()
      .subscribe((result) => {
        expect(result.length).toBe(2);
        expect(result).toEqual(productItems);
      });
  });
});
