import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ContactPipePipe } from './pipes/contact-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CustomersComponent,
    ContactsComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    RegisterComponent,
    CustomerCardComponent,
    FilterPipePipe,
    ContactPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
