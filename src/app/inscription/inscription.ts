import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [MatTabsModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule],
  templateUrl: './inscription.html',
  styleUrls: ['./inscription.scss'],
})
export class Inscription {}
