import { Component } from '@angular/core';
import { WinOrLooseComponent } from './win-or-loose/win-or-loose.component';
import { CareersCollageComponent } from './careers-collage/careers-collage.component';
import {  ElioComponent } from './elio/elio.component';
import { SliderComponent } from './slider/slider.component';


@Component({
  selector: 'app-main',
  imports: [WinOrLooseComponent, CareersCollageComponent, ElioComponent, SliderComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
