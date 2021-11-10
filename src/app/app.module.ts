import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleThreadComponent } from './pages/single-thread/single-thread.component';
import { MultiThreadComponent } from './pages/multi-thread/multi-thread.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculationFormComponent } from './components/calculation-form/calculation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleThreadComponent,
    MultiThreadComponent,
    CalculationFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
