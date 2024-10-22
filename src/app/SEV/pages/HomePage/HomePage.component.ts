import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports:[CardComponent,MaterialModule],
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})
export class HomePageComponent implements OnInit {
toggleSidebar() {
throw new Error('Method not implemented.');
}

  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}
