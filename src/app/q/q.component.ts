import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-q',
  templateUrl: './q.component.html',
  styleUrls: ['./q.component.css']
})
export class QComponent implements OnInit {
  @Input() quote: Quote;

  quotesArr: Quote[] = [];
  constructor() { }

  ngOnInit(): void {
    var quotes = localStorage.getItem('Quotes');

    if(quotes==null || quotes== undefined){
      console.log("empty !");
      var initQuote = new Quote(1,"First Quote",0,0);
      this.quotesArr.push(initQuote);
      localStorage.setItem("Quotes",JSON.stringify(this.quotesArr));
    }else
    {
      this.quotesArr = JSON.parse(quotes)
    }
  }

  saveQuote(Quote){
    var arr= [];
    this.quotesArr.push(Quote);
    localStorage.setItem("Quotes",JSON.stringify(this.quotesArr));
    console.log(localStorage.getItem("Quotes"));
  }

  deleteQuotes(){
    localStorage.removeItem("Quotes");
  }

}
