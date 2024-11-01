import { createReducer, on } from '@ngrx/store';
import { DataPoint } from '../models/data.model';
import * as DataActions from './data.actions';

export interface DataState {
  historicalData: DataPoint[];
  realTimeData: DataPoint[];
  loading: boolean;
}

export const initialState: DataState = {
  historicalData: [],
  realTimeData: [],
  loading: false,
};

export const dataReducer = createReducer(
  initialState,
  on(DataActions.loadHistoricalData, (state) => ({
    ...state,
    loading: true,
  })),
  on(DataActions.loadHistoricalDataSuccess, (state, { data }) => ({
    ...state,
    historicalData: data,
    loading: false,
  })),
  on(DataActions.addRealTimeData, (state, { data }) => ({
    ...state,
    realTimeData: [...state.realTimeData, data],
  }))
);