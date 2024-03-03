import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  shouldRenderCarousel(): boolean {
    return window.innerWidth > 1024; // Substitua 1024 pelo valor do seu breakpoint
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Atualize a renderização do carousel quando a janela for redimensionada
    this.shouldRenderCarousel();
  }
}
