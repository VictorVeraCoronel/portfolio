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

  ngOnInit() {

  }

  setEnglish() {
    let url=this.router.url.replace('/','')
    this.language = 'english'
    this.cookieService.set('lang', 'english')
    location.reload()
    /*
    this.ngOnInit()
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
    */

  }

  setSpanish() {
    let url=this.router.url.replace('/','')
    this.language = 'spanish'
    this.cookieService.set('lang', 'spanish')
    location.reload()
    
   
    /*

    this.ngOnInit()
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
    */


  }
}
