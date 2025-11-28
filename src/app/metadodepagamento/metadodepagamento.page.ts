import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-metadodepagamento',
  templateUrl: './metadodepagamento.page.html',
  styleUrls: ['./metadodepagamento.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MetadodepagamentoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
