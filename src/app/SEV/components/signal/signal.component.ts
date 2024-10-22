import { Component, Input, OnInit } from '@angular/core';
import { Signal } from '../../interface/signal.interface';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'signal-card',
  standalone:true,
  imports:[MaterialModule,CommonModule],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
})
export class SignalCard implements OnInit {
  @Input() public signal!: Signal;
  public isModalOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.signal) {
      throw new Error('signal property is required');
    }
  }

  // Abrir el modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Cerrar el modal
  closeModal(): void {
    this.isModalOpen = false;
  }
}
