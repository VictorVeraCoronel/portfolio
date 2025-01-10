import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.sass'
})
export class LanguageSelectorComponent {

  private language = 'english'


  constructor(private cookieService:CookieService){

  }

  setEnglish() {
    this.language = 'english'
    this.cookieService.set('lang','english')
    location.reload()
  }
  
  setSpanish() {
    this.language = 'spanish'
    this.cookieService.set('lang','spanish')
    location.reload()

  }
}
