import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import {RouterLink} from '@angular/router';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'MARTINS TECH';
}
