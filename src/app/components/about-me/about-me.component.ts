import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.sass'
})
export class AboutMeComponent {
  public spanish:boolean = false
  public english:boolean = true
  
  constructor(private cookieService:CookieService){

  }


  ngOnInit(){
    if(this.cookieService.get('lang') == 'spanish'){
      this.spanish = true
      this.english = false
    }else{
      this.spanish = false
      this.english = true
    }
  }
}
