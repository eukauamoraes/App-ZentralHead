import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  novidades = [
    {
      nome: 'Camiseta estampada',
      preco: 'R$ 49,99',
      imagem: 'assets/products/camiseta.png'
    },
    {
      nome: 'Tênis esportivo',
      preco: 'R$ 199,99',
      imagem: 'assets/products/tenis.png'
    },
    {
      nome: 'Bolsa de couro',
      preco: 'R$ 129,99',
      imagem: 'assets/products/bolsa.png'
    }
  ];

}
