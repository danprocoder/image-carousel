import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  image: any;

  constructor(private service: ImageService) { }

  ngOnInit(): void {
    this.service.$event.subscribe(image => {
      this.image = image;
    });
  }

}
