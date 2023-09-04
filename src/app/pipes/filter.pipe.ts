import { Pipe, PipeTransform } from '@angular/core';
import { userDetails } from '../model/user.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: userDetails[], ...args: string[]): userDetails[] {
    const name = args[0] ? new RegExp(args[0]) : undefined;
    const company = args[1] ? new RegExp(args[1]) : undefined;
    const designation = args[2] ? new RegExp(args[2]) : undefined;

    const data: userDetails[] = value.filter((user: userDetails) => {
      if (
        name?.test(user.name) ||
        company?.test(user.company.name) ||
        designation?.test(user.company.designation)
      ) {
        return true;
      } else {
        return false;
      }
    });

    return data.length ? data : value;
  }
}
