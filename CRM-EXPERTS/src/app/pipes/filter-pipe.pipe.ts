import { Pipe, PipeTransform } from '@angular/core';
import { Customers } from '../interfaces/customers';

@Pipe({
  name: 'customerPipe'
})
export class FilterPipePipe implements PipeTransform {

transform(
    customer: Customers[] | null,
    propName: keyof Customers,
    value: string
  ): Customers[] | null {
    if (!customer) return null;
    return customer.filter((customer) => {
      return customer[propName]?.toLowerCase().includes(value.toLowerCase());
    })
  };


}
