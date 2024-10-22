import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-modal-signal',
  templateUrl: './modal-signal.component.html',
  standalone:true,
  imports:[MaterialModule],
  styleUrls: ['./modal-signal.component.css']
})
export class ModalSignalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
