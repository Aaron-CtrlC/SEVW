import { Component, OnInit } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { Signal } from '../../interface/signal.interface';
import { SignalService } from '../../services/api.service';
import { SignalCard } from '../../components/signal/signal.component';

@Component({
  selector: 'app-ManualSeñales',
  standalone: true,
  imports: [SignalCard, CommonModule],
  templateUrl: 'ManualSeñales.component.html',
  styleUrls: ['ManualSeñales.component.css']
})
export class ManualSeñalesComponent implements OnInit {
  public signals: Signal[] = [];

  constructor(private signalService: SignalService) { }

  ngOnInit(): void {
    this.loadSignal();
  }

  private loadSignal(): void {
    this.signalService.getAllSignals().subscribe(
      (signals: Signal[]) => { this.signals = signals; },
      error => {
        console.log('Error fetching signals', error);
      }
    );
  }
}
