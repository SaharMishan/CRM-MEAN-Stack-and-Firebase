import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contacts';

@Pipe({
  name: 'contactPipe'
})
export class ContactPipePipe implements PipeTransform {

 transform(
    contact: Contact[] | null,
    propName: keyof Contact,
    value: string
  ): Contact[] | null {
    if (!contact) return null;
    return contact.filter((contact) => {
      return contact[propName]?.toLowerCase().includes(value.toLowerCase());
    })
  };

}
