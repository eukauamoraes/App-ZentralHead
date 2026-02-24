import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './detalhes-produto.page.html',
  styleUrls: ['./detalhes-produto.page.scss'],
})
export class DetalhesProdutoPage {

  produto = {
    nome: 'Vestido de Festa Longo',
    descricao: 'Vestido de festa longo, ideal para eventos formais. Disponível em diversos tamanhos e cores.',
    preco: 'R$ 250,00',
    imagens: [
      'assets/products/vestido1.png',
      'assets/products/vestido2.png'
    ]
  };

}
