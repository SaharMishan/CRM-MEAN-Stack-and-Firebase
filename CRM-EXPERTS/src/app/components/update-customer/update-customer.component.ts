import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customers } from 'src/app/interfaces/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer: Customers = {
   firstName:"",
   lastName:"",
   email:"",
   phone:"",
   address:"",
   notes:""

}
@Input() id?: string

  constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
      this.cs.getCustomerById(this.id!).subscribe((customer:Customers) =>{
      this.customer = customer
    })
  }
updateCustomerFunc(){
this.cs.updateCustomer(this.customer)
.then(()=>{
this.activeModal.close();
alert("Customer Updated Successfully")
})
}
}
