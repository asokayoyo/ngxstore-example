import { createAction, props } from '@ngrx/store';
import { DataPoint } from '../models/data.model';

export const loadHistoricalData = createAction(
  '[Data] Load Historical Data'
);

export const loadHistoricalDataSuccess = createAction(
  '[Data] Load Historical Data Success',
  props<{ data: DataPoint[] }>()
);

export const addRealTimeData = createAction(
  '[Data] Add Real-Time Data',
  props<{ data: DataPoint }>()
);