import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {

  image: any;
  imagePosition: number;
  totalImages: number;

  constructor(private service: ImageService) { }

  ngOnInit(): void {
    this.service.$event.subscribe(image => {
      this.image = image;
      this.imagePosition = this.service.getCurrentPosition() + 1;
      this.totalImages = this.service.getNumberOfImages();
    });
  }

  getLeftPos(): any {
    return {
      left: ((this.imagePosition - 1) * (100 / this.totalImages)) + '%'
    };
  }

  onNextClicked(): any {
    this.service.switchImage();
  }

}
