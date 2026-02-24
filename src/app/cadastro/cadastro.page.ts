import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonIcon, IonTabButton, IonLabel, IonTabs, IonTabBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonInput, IonContent,CommonModule, FormsModule]
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
