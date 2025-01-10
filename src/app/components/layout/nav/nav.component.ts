import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {

  public spanish: boolean = false
    public english: boolean = true
  
    constructor(private cookieService: CookieService) {
  
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
