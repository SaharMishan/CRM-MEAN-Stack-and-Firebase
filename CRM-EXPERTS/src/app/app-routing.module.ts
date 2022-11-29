import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';

const routes: Routes = [
{path: "",
pathMatch: "full",
redirectTo: "login"},

{path: "login",
component: LoginComponent},

{path:"register",component:RegisterComponent},

{path: "dashboard",
component: DashboardComponent,
canActivate:[AuthGuard],
children:[
  {path:"",pathMatch: "full", redirectTo:"customer"},
  {path:"customer",component:CustomersComponent,},
  {path:"contact",component:ContactsComponent},
]
},

{path:"add-customer",component:AddCustomerComponent,canActivate:[AuthGuard]},

{path:"update-customer",component:UpdateCustomerComponent,canActivate:[AuthGuard]},

{path:"**",component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
