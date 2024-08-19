import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { GalleryComponent } from '../components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
