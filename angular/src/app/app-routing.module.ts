import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTargetComponent } from './pages/create-target/create-target.component';
import { ViewTargetsComponent } from './pages/view-targets/view-targets.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ViewFinancialsComponent } from './pages/view-financials/view-financials.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { EditTargetComponent } from './pages/edit-target/edit-target.component';

const routes: Routes = [
  { path: 'create/target', component: CreateTargetComponent },
  { path: 'edit/target/:id', component: EditTargetComponent },
  { path: 'view/targets', component: ViewTargetsComponent },
  { path: 'view/contacts', component: ViewContactsComponent },
  { path: 'view/financials', component: ViewFinancialsComponent },
  { path: '', redirectTo: 'view/targets', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],

  exports: [RouterModule]
})
export class AppRoutingModule {}
