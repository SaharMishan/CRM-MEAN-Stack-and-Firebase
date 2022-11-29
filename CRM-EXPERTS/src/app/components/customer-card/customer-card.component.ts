import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customers } from 'src/app/interfaces/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  customer: Customers = {
   firstName:"",
   lastName:"",
   email:"",
   phone:"",
   address:"",
   notes:""
}

@Input() id?: string;
  constructor(private cs:CustomersService,private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.cs.getCustomerById(this.id!).subscribe((customer:Customers)=>{
      this.customer=customer;
    })
  }
backToDashboard(){
this.activeModal.close()
}
}
