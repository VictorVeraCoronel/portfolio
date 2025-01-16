import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LanguageSelectorComponent } from "../../language-selector/language-selector.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LanguageSelectorComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {

  public spanish: boolean = false
    public english: boolean = true
    @ViewChild('nav') public nav!:ElementRef<HTMLElement>
  
    constructor(private cookieService: CookieService) {
  
    }

    openMenu(){
      this.nav.nativeElement.classList.toggle('visible')
    }
  
  
    ngOnInit() {
      if (this.cookieService.get('lang') == 'spanish') {
        this.spanish = true
        this.english = false
      } else {
        this.spanish = false
        this.english = true
      }
    }
}
