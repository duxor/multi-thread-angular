import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingleThreadComponent} from 'src/app/single-thread/single-thread.component';
import {MultiThreadComponent} from 'src/app/multi-thread/multi-thread.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'multi-thread'},
  {path: 'single-thread', component: SingleThreadComponent},
  {path: 'multi-thread', component: MultiThreadComponent},
  {path: '**', redirectTo: 'multi-thread'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
