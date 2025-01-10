import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {
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
