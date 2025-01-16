import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { NavComponent } from '../layout/nav/nav.component';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.sass'
})
export class LanguageSelectorComponent {

  private language = 'english'
  @ViewChild(NavComponent) navComponent!: NavComponent


  constructor(private cookieService: CookieService, private router: Router) {

  }

  setEnglish() {
    this.language = 'english'
    this.cookieService.set('lang', 'english')
    location.href = 'https://turbrecher.github.io/portfolio/'
  }
  
  setSpanish() {
    this.language = 'spanish'
    this.cookieService.set('lang', 'spanish')
    this.router.navigate(['about'])
    location.href = 'https://turbrecher.github.io/portfolio/'

  }
}
