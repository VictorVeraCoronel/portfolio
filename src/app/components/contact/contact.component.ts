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
  public email: string = 'victorveracoronel@live.com'
  public phone: string = '628780562'
  public linkedin: string = 'https://www.linkedin.com/in/victorveracoronel/'
  public github: string = 'https://github.com/VictorVeraCoronel'

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
