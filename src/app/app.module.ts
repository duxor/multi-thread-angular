import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculationFormComponent } from 'src/app/components/forms/calculation-form/calculation-form.component';
import { SwitchInputComponent } from 'src/app/components/ui/switch-input/switch-input.component';

@NgModule({
  declarations: [AppComponent, CalculationFormComponent, SwitchInputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
