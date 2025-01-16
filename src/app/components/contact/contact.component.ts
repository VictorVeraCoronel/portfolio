import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {
  public spanish: boolean = false
  public english: boolean = true
  public email: string = 'victorveracoronel@outlook.es'
  public phone: string = '628780562'

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
