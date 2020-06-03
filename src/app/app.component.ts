import { Component, HostBinding, OnInit, Host } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  image: any;
  @HostBinding('style.backgroundColor') background: string;

  constructor(private service: ImageService) {}

  ngOnInit(): void {
    this.service.$event.subscribe(image => {
      this.image = image;
      this.background = image.background;
    });
  }

}
