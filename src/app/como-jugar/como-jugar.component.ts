import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-como-jugar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './como-jugar.component.html',
  styleUrl: './como-jugar.component.css'
})
export class ComoJugarComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  score = 0;
  answered = 0;
  currentQuestionIndex = 0;
  showResult = false;
  readonly correctWeight = 1;
  readonly wrongWeight = -0.25;
  readonly questionIds: string[] = [
    ...Array.from({ length: 10 }, (_, i) => `s${i + 1}`),
    ...Array.from({ length: 10 }, (_, i) => `c${i + 1}`),
    ...Array.from({ length: 10 }, (_, i) => `o${i + 1}`),
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.recomputeScore();
    }
  }

  recomputeScore(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    let score = 0;
    let answered = 0;
    const currentQuestionId = this.questionIds[this.currentQuestionIndex];
    const checked = document.querySelector(`input[name="${currentQuestionId}"]:checked`) as HTMLInputElement | null;
    if (checked) {
      answered++;
      score += checked.classList.contains('correct') ? this.correctWeight : this.wrongWeight;
    }
    this.score = Math.max(0, Number(score.toFixed(2)));
    this.answered = answered;
  }

  nextQuestion(): void {
    this.recomputeScore(); // Calculate score for the current question before moving on
    if (this.currentQuestionIndex < this.questionIds.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResult = true; // All questions answered, show results
    }
  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questionIds.length - 1;
  }

  clearSelection(q: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    document.querySelectorAll(`input[name="${q}"]`).forEach(el => ((el as HTMLInputElement).checked = false));
    this.recomputeScore();
  }

  clearRegion(prefix: 's' | 'c' | 'o'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    for (let i = 1; i <= 10; i++) this.clearSelection(`${prefix}${i}`);
  }

  resetQuiz(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.answered = 0;
    this.showResult = false;
    for (const q of this.questionIds) {
      document.querySelectorAll(`input[name="${q}"]`).forEach(el => ((el as HTMLInputElement).checked = false));
    }
    this.recomputeScore();
  }
}