import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { fadeInScaleAnimation } from './animations/fade-in-scale';
import { LanguageSelectorComponent } from "./components/language-selector/language-selector.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, RouterModule, RouterOutlet, LanguageSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  animations: [
    fadeInScaleAnimation
  ]
})
export class AppComponent {
  title = 'portfolio';
  @ViewChild(LanguageSelectorComponent) languageSelector !: LanguageSelectorComponent

  constructor(private route:ActivatedRoute){
    
  }


  getRouteAnimationData(){
    return this.route?.snapshot?.data
  }
}
