import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customers } from 'src/app/interfaces/customers';
import { CustomersService } from 'src/app/services/customers.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerCardComponent } from '../customer-card/customer-card.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  
  customers: Customers[]=[]
  firstName: string=""
  lastName: string=""
  phone: string=""
  
  constructor(private cs: CustomersService, private modal:NgbModal) { }

  ngOnInit(): void {
    this.cs.getCustomers().subscribe((customers: Customers[])=>{
      this.customers=customers
    })
  }
addCustomer(){
    // Create Modal
  this.modal.open(AddCustomerComponent,{
    size: "lg",
    centered: true,
    windowClass: "dark-modal"
  })
}

updateCustomer(customer: Customers){
  let modalRef = this.modal.open(UpdateCustomerComponent,{
      size: "lg",
    centered: true,
    windowClass: "dark-modal"
  })
  modalRef.componentInstance.id = customer.id
}
deleteCustomer(customer:Customers){
if(confirm("Are you sure would you like to delete this customer?")==true){
  this.cs.deleteCustomer(customer)
  .then(()=>{
    alert("Customer deleted successfully")
  })
  .catch((error)=>{
    alert(error.messege)
  })
}
}

customerCard(customer:Customers){
  let modalRef = this.modal.open(CustomerCardComponent,{
      size: "lg",
    centered: true,
    windowClass: "dark-modal"
  })
    modalRef.componentInstance.id = customer.id
  }
}

