import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxPrettifyAuthors' })
export class PrettifyAuthorsPipe implements PipeTransform {

  transform(input: string): string {
    return input && input.length
      ? input.replace(/[\[\]]+/g, '')
      : input;
  }
}
