import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { fadeInScaleAnimation } from './animations/fade-in-scale';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  animations: [
    fadeInScaleAnimation
  ]
})
export class AppComponent {
  title = 'portfolio';

  constructor(private route:ActivatedRoute){
    
  }


  getRouteAnimationData(){
    return this.route?.snapshot?.data
  }
}
