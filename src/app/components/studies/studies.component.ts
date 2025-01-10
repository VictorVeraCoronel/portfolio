import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.sass'
})
export class StudiesComponent {
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
