import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

items: ItemPortafolio[] = [];

private cargarItems() {
  /*
  // para agregar cuando cree la DB
  this.http.get('https://portafolio-angular-html.firebaseio.com/-------------')
      .subscribe( (resp: Producto[]) => {
        console.log(resp);
        this.productos = resp;
        this.cargando = false;
      });*/

      const item: ItemPortafolio = {
        titulo: 'proyecto Titulo',
        nombre: 'CEREAL',
        imagen: 'masonry/001.jpg',
        filtro: 'artwork',
        url: 'project-1.html'
    };
    this.items.push(item);
}

  constructor() {
    this.cargarItems();
  }
}
