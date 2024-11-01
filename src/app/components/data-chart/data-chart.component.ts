import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataPoint } from '../../models/data.model';
import { DataState } from '../../store/data.reducer';
import * as DataActions from '../../store/data.actions';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-chart',
  template: `
    <div class="chart-container">
      <h2>Data Visualization</h2>
      <div class="data-section">
        <h3>Historical Data</h3>
        <ul>
          <li *ngFor="let point of historicalData$ | async">
            Value: {{ point.value.toFixed(2) }} at {{ point.timestamp | date:'medium' }}
          </li>
        </ul>
      </div>
      <div class="data-section">
        <h3>Real-Time Data</h3>
        <ul>
          <li *ngFor="let point of realTimeData$ | async">
            Value: {{ point.value.toFixed(2) }} at {{ point.timestamp | date:'medium' }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .chart-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .data-section {
      margin: 20px 0;
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 10px 0;
      padding: 5px;
      background: #f5f5f5;
      border-radius: 3px;
    }
  `]
})
export class DataChartComponent implements OnInit {
  historicalData$: Observable<DataPoint[]>;
  realTimeData$: Observable<DataPoint[]>;

  constructor(
    private store: Store<{ data: DataState }>,
    private dataService: DataService
  ) {
    this.historicalData$ = this.store.select(state => state.data.historicalData);
    this.realTimeData$ = this.store.select(state => state.data.realTimeData);
  }

  ngOnInit() {
    // Load historical data
    this.store.dispatch(DataActions.loadHistoricalData());

    // Subscribe to real-time updates
    this.dataService.getRealTimeData().subscribe(data => {
      this.store.dispatch(DataActions.addRealTimeData({ data }));
    });
  }
}