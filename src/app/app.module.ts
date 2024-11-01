import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { DataChartComponent } from './components/data-chart/data-chart.component';
import { dataReducer } from './store/data.reducer';
import { DataEffects } from './store/data.effects';

@NgModule({
  declarations: [
    AppComponent,
    DataChartComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ data: dataReducer }),
    EffectsModule.forRoot([DataEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }