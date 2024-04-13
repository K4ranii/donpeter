import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage {

  precioCompleto: number = 4500;
  precioPapas: number = 1500;
  precioBebida: number = 1000;

  cantidadCompleto: number = 0;
  cantidadPapas: number = 0;
  cantidadBebida: number = 0;

  subtotal: number = 0;

  constructor() {
    this.calcularSubtotal();
  }

  addItem(item: string) {
    switch (item) {
      case 'completo':
        this.cantidadCompleto++;
        break;
      case 'papas':
        this.cantidadPapas++;
        break;
      case 'bebida':
        this.cantidadBebida++;
        break;
      default:
        break;
    }
    this.calcularSubtotal();
  }

  removeItem(item: string) {
    switch (item) {
      case 'completo':
        if (this.cantidadCompleto > 0) {
          this.cantidadCompleto--;
        }
        break;
      case 'papas':
        if (this.cantidadPapas > 0) {
          this.cantidadPapas--;
        }
        break;
      case 'bebida':
        if (this.cantidadBebida > 0) {
          this.cantidadBebida--;
        }
        break;
      default:
        break;
    }
    this.calcularSubtotal();
  }

  calcularSubtotal() {
    this.subtotal = (this.precioCompleto * this.cantidadCompleto) + 
                    (this.precioPapas * this.cantidadPapas) +
                    (this.precioBebida * this.cantidadBebida);
  }

}
