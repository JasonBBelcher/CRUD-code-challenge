import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTargetComponent } from './pages/create-target/create-target.component';
import { ViewTargetsComponent } from './pages/view-targets/view-targets.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ViewFinancialsComponent } from './pages/view-financials/view-financials.component';
import { ViewContactsComponent } from './pages/view-contacts/view-contacts.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CreateTargetComponent,
    ViewTargetsComponent,
    PageNotFoundComponent,
    ViewFinancialsComponent,
    ViewContactsComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
