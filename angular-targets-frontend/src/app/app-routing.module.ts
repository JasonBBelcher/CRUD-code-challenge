import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTargetComponent } from './pages/create-target/create-target.component';
import { ViewTargetsComponent } from './pages/view-targets/view-targets.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ViewFinancialsComponent } from './pages/view-financials/view-financials.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';

const routes: Routes = [
  { path: '', redirectTo: 'view/targets', pathMatch: 'full' },
  { path: 'create/target', component: CreateTargetComponent },
  { path: 'view/targets', component: ViewTargetsComponent },
  { path: 'view/contacts', component: ViewContactsComponent },
  { path: 'view/financials', component: ViewFinancialsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],

  exports: [RouterModule]
})
export class AppRoutingModule {}
