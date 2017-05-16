import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: any, arg1: string): any {
    return value.filter(x => x.firstName.toUpperCase().includes(arg1.toUpperCase()));
  }

}
