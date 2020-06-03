import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roman' })
export class RomanPipe implements PipeTransform {
  transform(value: number) {
    return ['I', 'II', 'III', 'IV'][value - 1];
  }
}
