import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Customers } from '../interfaces/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customerRef = collection(this.fireStore,"customers")
  constructor(private fireStore:Firestore) { }

  addCustomer(customer:Customers){
    return addDoc(this.customerRef,customer)
  }
 updateCustomer(customer: Customers){
  // get reference to customers
  let customerRef = doc(this.fireStore,`customers/${customer.id}`)
  // set new customer in db
  return setDoc(customerRef,customer)
}
deleteCustomer(customer:Customers){
   // get reference to book
  let customerRef = doc(this.fireStore,`customers/${customer.id}`)
  // delete customer
  return deleteDoc(customerRef)
}
getCustomers(): Observable<Customers[]>{
  // get all books from customers collection
  return collectionData(this.customerRef,{idField: "id"}) as Observable<Customers[]>
}
getCustomerById(id:string){
 let customerRef = doc(this.fireStore,`customers/${id}`)
 return docData(customerRef,{idField: "id"}) as Observable<Customers>;
}
}
