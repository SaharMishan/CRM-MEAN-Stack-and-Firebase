import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contacts';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts: Contact[] = []
    name: string=""

  constructor(private cs: ContactsService) { }

  ngOnInit(): void {
    this.contacts = this.cs.getAllContacts()
  }

}
