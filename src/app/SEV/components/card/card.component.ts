import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'shared-card',
  standalone: true,
  imports:[MaterialModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() titleCard?: string;
  @Input() imgUrl?: string;
  @Input() textCard?: string;
  @Input() link?:string;
@Input() textLink?:string;
  constructor() { }

  ngOnInit() {
  }

}
