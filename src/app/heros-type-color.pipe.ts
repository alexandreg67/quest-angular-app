import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'herosTypeColor'
})
export class herosTypeColorPipe implements PipeTransform {
  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'feu':
        color = 'red lighten-1';
        break;
      case 'eau':
        color = 'blue lighten-1';
        break;
      case 'plante':
        color = 'green lighten-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}
