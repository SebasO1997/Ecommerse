import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string, ): string {
    let fechaCreado = new Date(value);
    let fechaActual = new Date();

    let diferecia = fechaActual.getTime() - fechaCreado.getTime();
    const segundos = Math.floor(diferecia/1000);
    const minutos = Math.floor(segundos/60);
    const horas = Math.floor(minutos/60);
    const dias = Math.floor(horas/24);

    if(dias > 0 ) return `hace ${dias} día${dias > 1 ? 's': ''}`;
    if(horas > 0 ) return `hace ${horas} hora${horas > 1 ? 's': ''}`;
    if(minutos > 0 ) return `hace ${minutos} minuto${minutos > 1 ? 's': ''}`;

    return `hace unos segundos`;
  }

}
