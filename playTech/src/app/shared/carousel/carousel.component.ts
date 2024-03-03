import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    interval(5000).subscribe(() => this.nextSlide());
  }

  items = [
    { image: '../../../assets/banner/1.png' },
    { image: '../../../assets/banner/2.png' },
    { image: '../../../assets/banner/3.png' },
    // Adicione mais itens conforme necessário
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

}
