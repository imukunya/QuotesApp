import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"",0,0);
  Quotes:[] = [];
  @Output() addQuote = new EventEmitter<Quote>();
  constructor() { }


  saveQuote(){
    this.Quotes = JSON.parse(localStorage.getItem("Quotes"));
     var quoteCount:number = (this.Quotes.length);
    this.newQuote.id = quoteCount+1;
    this.addQuote.emit(this.newQuote);

  }
  ngOnInit(): void {

  }
  deleteQuotes(){
    localStorage.removeItem("Quotes");
    location.reload();
  }

}
