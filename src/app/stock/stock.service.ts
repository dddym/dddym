import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class StockService {

  constructor(public http:Http) { }
  private stocks:Stock[] = [
    new Stock(1, '第一个商品', 9.99, 4.9, '这是第一个商品，智行工作室', ['IT', '进口']),
    new Stock(2, '第二个商品', 19.99, 3.9, '这是第二个商品，智行工作室', ['IT', '进口']),
    new Stock(3, '第三个商品', 29.99, 2.9, '这是第三个商品，智行工作室', ['IT', '进口']),
    new Stock(4, '第四个商品', 39.99, 1.9, '这是第四个商品，智行工作室', ['IT', '进口']),
    new Stock(5, '第五个商品', 49.99, 3.6, '这是第五个商品，智行工作室', ['IT', '进口']),
    new Stock(6, '第六个商品', 59.99, 4.6, '这是第六个商品，智行工作室', ['IT', '进口']),
    new Stock(7, '第七个商品', 69.99, 4.8, '这是第七个商品，智行工作室', ['IT', '进口']),
    new Stock(8, '第八个商品', 79.99, 4.3, '这是第八个商品，智行工作室', ['IT', '进口']),
    new Stock(9, '第九个商品', 89.99, 2.8, '这是第九个商品，智行工作室', ['IT', '进口']),
    new Stock(10, '第十个商品', 99.99, 3.6, '这是第十个商品，智行工作室', ['IT', '进口'])
  ];
  /*获取商品列表*/
  getStocks():Stock[]{
    var log=this.http.get("/api/girls").subscribe((res:any)=>{

        console.log(res);
     console.log("vjewinviwen")
    });
    return this.stocks;
  }

  /*根据id查找商品*/
  getStock(id:number):Stock{
    var stock=this.stocks.find(stock=>stock.id==id);
    if (!stock){
      stock=new Stock(0, '', 0, 0, '', [])
    }
    return stock;
  }

}
export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
