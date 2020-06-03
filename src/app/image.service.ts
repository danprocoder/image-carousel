import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: any[] = [
    {
      name: 'Belle Christelle',
      src: 'assets/images/image1.jpg',
      background: '#0e1d33'
    },
    {
      name: 'Belle Christelle',
      src: 'assets/images/image2.jpg',
      background: '#543000'
    },
    {
      name: 'Belle Christelle',
      src: 'assets/images/image3.png',
      background: '#420422'
    },
    {
      name: 'Belle Christelle',
      src: 'assets/images/image4.jpg',
      background: '#230a22'
    },
  ];
  index: number = 0;
  
  $event: BehaviorSubject<any>;

  constructor() {
    this.$event = new BehaviorSubject(this.images[this.index]);
  }

  switchImage(): void {
    if (this.index === this.images.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }

    this.$event.next(this.images[this.index]);
  }

  getNumberOfImages(): number {
    return this.images.length;
  }

  getCurrentPosition(): number {
    return this.index;
  }
}
