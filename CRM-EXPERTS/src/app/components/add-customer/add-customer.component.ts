import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customers } from 'src/app/interfaces/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer: Customers = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    notes: ""

  }
  constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  addCustomerFunc() {
    this.cs.addCustomer(this.customer)
      .then(() => {
        this.resetCustomer()
        alert("Customer Added Successfully")
        this.activeModal.close()
      })
      .catch(() => {
        alert("Customer not added.Please try again")
      })
  }
  resetCustomer() {
    this.customer = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      notes: ""

    }
  }
  close() {
    this.activeModal.close()
  }
}
