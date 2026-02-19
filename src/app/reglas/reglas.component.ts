import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reglas',
  standalone: true,
  imports: [],
  templateUrl: './reglas.component.html',
  styleUrl: './reglas.component.css'
})
export class ReglasComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    cards.forEach((el) => observer.observe(el));
  }
}
