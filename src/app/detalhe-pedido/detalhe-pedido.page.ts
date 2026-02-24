import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe-pedido',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './detalhe-pedido.page.html',
  styleUrls: ['./detalhe-pedido.page.scss'],
})
export class DetalhePedidoPage {

  itens = [
    {
      nome: 'Camiseta estampada',
      tamanho: 'M',
      imagem: 'assets/products/camiseta.png'
    },
    {
      nome: 'Calça jeans',
      tamanho: '38',
      imagem: 'assets/products/calca.png'
    }
  ];

}
