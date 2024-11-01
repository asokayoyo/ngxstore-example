import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataPoint } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getHistoricalData(): Observable<DataPoint[]> {
    // Simulate API call for historical data
    return new Observable<DataPoint[]>((observer) => {
      const historicalData: DataPoint[] = Array.from({ length: 10 }, (_, i) => ({
        id: `hist-${i}`,
        value: Math.random() * 100,
        timestamp: Date.now() - i * 60000,
      }));
      observer.next(historicalData);
      observer.complete();
    });
  }

  getRealTimeData(): Observable<DataPoint> {
    // Simulate real-time data stream
    return interval(5000).pipe(
      map(() => ({
        id: `rt-${Date.now()}`,
        value: Math.random() * 100,
        timestamp: Date.now(),
      }))
    );
  }
}