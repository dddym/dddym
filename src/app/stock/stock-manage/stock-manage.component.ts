import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

   stocks: Array<Stock>;

    nameFilter:FormControl=new FormControl();

    keywork:string;

  constructor(public router:Router,private stockService:StockService) {
  }

  ngOnInit() {
    this.stocks=this.stockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value =>this.keywork=value);
  }
  create(){
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/'+stock.id);
  }

}

