import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as DataActions from './data.actions';
import { DataService } from '../services/data.service';

@Injectable()
export class DataEffects {
  loadHistoricalData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.loadHistoricalData),
      mergeMap(() =>
        this.dataService.getHistoricalData().pipe(
          map((data) => DataActions.loadHistoricalDataSuccess({ data }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}