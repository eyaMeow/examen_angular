import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatToolbarModule],
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.scss'],
})
export class Accueil {}
