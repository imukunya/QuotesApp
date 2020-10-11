import { Component, Input, OnInit,Output, EventEmitter,   } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  @Output() upVote = new EventEmitter<number>();
  @Output() downVote = new EventEmitter<number>();
  @Input() QuoteList:Quote[];
  constructor() { }

  ngOnInit(): void {


  }
  voteUp(quoteID){
    this.upVote.emit(quoteID);

  }
  voteDown(quoteID){
    this.downVote.emit(quoteID);
  }

}
