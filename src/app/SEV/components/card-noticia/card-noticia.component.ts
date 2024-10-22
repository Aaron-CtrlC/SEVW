import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'card-noticia',
  standalone:true,
  imports:[MaterialModule],
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.css']
})
export class CardNoticiaComponent implements OnInit {

  @Input() imgUrl?: string;
  @Input() link?:string;
  @Input() titulo?:string
  constructor() { }

  ngOnInit() {
  }

}
