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

  quizData = [
    {
      id: 's1',
      questionText: '¿Cuál es el principal producto agrícola de la Sierra ecuatoriana?',
      options: [
        { text: 'Banano', isCorrect: false },
        { text: 'Papa', isCorrect: true },
        { text: 'Cacao', isCorrect: false },
        { text: 'Café', isCorrect: false },
      ],
    },
    {
      id: 's2',
      questionText: '¿Qué tipo de clima predomina en la región Sierra?',
      options: [
        { text: 'Tropical húmedo', isCorrect: false },
        { text: 'Cálido seco', isCorrect: false },
        { text: 'Frío de alta montaña', isCorrect: true },
        { text: 'Templado', isCorrect: false },
      ],
    },
    {
      id: 's3',
      questionText: '¿Cuál de los siguientes cultivos es característico de la Sierra?',
      options: [
        { text: 'Palma africana', isCorrect: false },
        { text: 'Flores', isCorrect: true },
        { text: 'Arroz', isCorrect: false },
        { text: 'Caña de azúcar', isCorrect: false },
      ],
    },
    {
      id: 's4',
      questionText: '¿Qué sistema de riego es comúnmente utilizado en la agricultura de la Sierra?',
      options: [
        { text: 'Riego por inundación', isCorrect: false },
        { text: 'Riego por goteo', isCorrect: true },
        { text: 'Riego por aspersión', isCorrect: false },
        { text: 'Riego por surcos', isCorrect: false },
      ],
    },
    {
      id: 's5',
      questionText: '¿Cuál es el ganado más común en la Sierra ecuatoriana?',
      options: [
        { text: 'Porcino', isCorrect: false },
        { text: 'Avícola', isCorrect: false },
        { text: 'Bovino de leche', isCorrect: true },
        { text: 'Ovino', isCorrect: false },
      ],
    },
    {
      id: 's6',
      questionText: '¿Qué fenómeno climático afecta frecuentemente los cultivos en la Sierra?',
      options: [
        { text: 'Sequías prolongadas', isCorrect: false },
        { text: 'Inundaciones', isCorrect: false },
        { text: 'Heladas', isCorrect: true },
        { text: 'Vientos huracanados', isCorrect: false },
      ],
    },
    {
      id: 's7',
      questionText: '¿Qué tipo de suelo es predominante en las zonas agrícolas de la Sierra?',
      options: [
        { text: 'Arenoso', isCorrect: false },
        { text: 'Arcilloso', isCorrect: false },
        { text: 'Franco-arenoso', isCorrect: false },
        { text: 'Volcánico (andisoles)', isCorrect: true },
      ],
    },
    {
      id: 's8',
      questionText: '¿Cuál es la principal fuente de agua para la agricultura en la Sierra?',
      options: [
        { text: 'Pozos subterráneos', isCorrect: false },
        { text: 'Ríos y deshielos', isCorrect: true },
        { text: 'Agua de mar desalinizada', isCorrect: false },
        { text: 'Lluvia estacional', isCorrect: false },
      ],
    },
    {
      id: 's9',
      questionText: '¿Qué cultivo andino es conocido por su alto valor nutricional y se cultiva en la Sierra?',
      options: [
        { text: 'Quinua', isCorrect: true },
        { text: 'Yuca', isCorrect: false },
        { text: 'Maracuyá', isCorrect: false },
        { text: 'Pimiento', isCorrect: false },
      ],
    },
    {
      id: 's10',
      questionText: '¿Qué institución apoya la investigación agrícola en la Sierra ecuatoriana?',
      options: [
        { text: 'INOCAR', isCorrect: false },
        { text: 'INIAP', isCorrect: true },
        { text: 'MAGAP', isCorrect: false },
        { text: 'SENAGUA', isCorrect: false },
      ],
    },
    {
      id: 'c1',
      questionText: '¿Cuál es el cultivo de exportación más importante de la Costa ecuatoriana?',
      options: [
        { text: 'Café', isCorrect: false },
        { text: 'Cacao', isCorrect: false },
        { text: 'Banano', isCorrect: true },
        { text: 'Arroz', isCorrect: false },
      ],
    },
    {
      id: 'c2',
      questionText: '¿Qué tipo de clima caracteriza a la región Costa?',
      options: [
        { text: 'Templado', isCorrect: false },
        { text: 'Frío', isCorrect: false },
        { text: 'Tropical húmedo', isCorrect: true },
        { text: 'Seco desértico', isCorrect: false },
      ],
    },
    {
      id: 'c3',
      questionText: 'Además del banano, ¿qué otro cultivo tropical es fundamental en la Costa?',
      options: [
        { text: 'Papa', isCorrect: false },
        { text: 'Trigo', isCorrect: false },
        { text: 'Cacao', isCorrect: true },
        { text: 'Cebada', isCorrect: false },
      ],
    },
    {
      id: 'c4',
      questionText: '¿Qué sistema de producción acuícola es muy desarrollado en la Costa?',
      options: [
        { text: 'Piscicultura de truchas', isCorrect: false },
        { text: 'Camaronicultura', isCorrect: true },
        { text: 'Cultivo de algas', isCorrect: false },
        { text: 'Maricultura de salmón', isCorrect: false },
      ],
    },
    {
      id: 'c5',
      questionText: '¿Cuál es la principal amenaza para los cultivos de banano en la Costa?',
      options: [
        { text: 'Heladas', isCorrect: false },
        { text: 'Sequías', isCorrect: false },
        { text: 'Enfermedades fúngicas (ej. Mal de Panamá)', isCorrect: true },
        { text: 'Erupciones volcánicas', isCorrect: false },
      ],
    },
    {
      id: 'c6',
      questionText: '¿Qué río es vital para la agricultura en la cuenca del Guayas, en la Costa?',
      options: [
        { text: 'Río Pastaza', isCorrect: false },
        { text: 'Río Esmeraldas', isCorrect: false },
        { text: 'Río Guayas', isCorrect: true },
        { text: 'Río Chira', isCorrect: false },
      ],
    },
    {
      id: 'c7',
      questionText: '¿Qué tipo de suelo es común en las planicies agrícolas de la Costa?',
      options: [
        { text: 'Volcánico', isCorrect: false },
        { text: 'Aluvial', isCorrect: true },
        { text: 'Rocoso', isCorrect: false },
        { text: 'Orgánico (turba)', isCorrect: false },
      ],
    },
    {
      id: 'c8',
      questionText: '¿Cuál es un cultivo energético importante en la Costa ecuatoriana?',
      options: [
        { text: 'Remolacha azucarera', isCorrect: false },
        { text: 'Caña de azúcar', isCorrect: true },
        { text: 'Maíz', isCorrect: false },
        { text: 'Girasol', isCorrect: false },
      ],
    },
    {
      id: 'c9',
      questionText: '¿Qué infraestructura es crucial para la exportación de productos agrícolas de la Costa?',
      options: [
        { text: 'Aeropuertos de carga', isCorrect: false },
        { text: 'Puertos marítimos', isCorrect: true },
        { text: 'Ferrocarriles', isCorrect: false },
        { text: 'Carreteras de alta velocidad', isCorrect: false },
      ],
    },
    {
      id: 'c10',
      questionText: '¿Qué fenómeno climático estacional influye en la agricultura de la Costa?',
      options: [
        { text: 'Monzones', isCorrect: false },
        { text: 'El Niño', isCorrect: true },
        { text: 'La Niña', isCorrect: false },
        { text: 'Frentes fríos', isCorrect: false },
      ],
    },
    {
      id: 'o1',
      questionText: '¿Qué cultivo amazónico es tradicionalmente cultivado en la región Oriente?',
      options: [
        { text: 'Trigo', isCorrect: false },
        { text: 'Yuca', isCorrect: true },
        { text: 'Cebada', isCorrect: false },
        { text: 'Olivo', isCorrect: false },
      ],
    },
    {
      id: 'o2',
      questionText: '¿Qué tipo de clima predomina en la región Amazónica (Oriente)?',
      options: [
        { text: 'Seco', isCorrect: false },
        { text: 'Templado', isCorrect: false },
        { text: 'Ecuatorial lluvioso', isCorrect: true },
        { text: 'Frío', isCorrect: false },
      ],
    },
    {
      id: 'o3',
      questionText: '¿Cuál es un producto forestal importante de la Amazonía ecuatoriana?',
      options: [
        { text: 'Pino', isCorrect: false },
        { text: 'Eucalipto', isCorrect: false },
        { text: 'Madera tropical', isCorrect: true },
        { text: 'Bambú', isCorrect: false },
      ],
    },
    {
      id: 'o4',
      questionText: '¿Qué actividad pecuaria ha crecido en la Amazonía, generando preocupación ambiental?',
      options: [
        { text: 'Avicultura', isCorrect: false },
        { text: 'Ganadería bovina', isCorrect: true },
        { text: 'Piscicultura', isCorrect: false },
        { text: 'Apicultura', isCorrect: false },
      ],
    },
    {
      id: 'o5',
      questionText: '¿Qué cultivo es una alternativa sostenible al monocultivo en la Amazonía?',
      options: [
        { text: 'Palma africana', isCorrect: false },
        { text: 'Café y cacao (sistemas agroforestales)', isCorrect: true },
        { text: 'Soja', isCorrect: false },
        { text: 'Arroz', isCorrect: false },
      ],
    },
    {
      id: 'o6',
      questionText: '¿Cuál es la principal amenaza para la biodiversidad agrícola en la Amazonía?',
      options: [
        { text: 'Sequías', isCorrect: false },
        { text: 'Deforestación y expansión de la frontera agrícola', isCorrect: true },
        { text: 'Heladas', isCorrect: false },
        { text: 'Contaminación del aire', isCorrect: false },
      ],
    },
    {
      id: 'o7',
      questionText: '¿Qué tipo de suelo es característico de la Amazonía, a menudo con baja fertilidad natural?',
      options: [
        { text: 'Volcánico', isCorrect: false },
        { text: 'Arenoso', isCorrect: false },
        { text: 'Arcilloso y ácido', isCorrect: true },
        { text: 'Calcáreo', isCorrect: false },
      ],
    },
    {
      id: 'o8',
      questionText: '¿Qué fruto amazónico es conocido por sus propiedades antioxidantes y se cultiva en la región?',
      options: [
        { text: 'Manzana', isCorrect: false },
        { text: 'Açaí', isCorrect: true },
        { text: 'Pera', isCorrect: false },
        { text: 'Uva', isCorrect: false },
      ],
    },
    {
      id: 'o9',
      questionText: '¿Qué sistema de transporte es fundamental para la comercialización de productos en la Amazonía?',
      options: [
        { text: 'Ferrocarril', isCorrect: false },
        { text: 'Fluvial (ríos)', isCorrect: true },
        { text: 'Aéreo', isCorrect: false },
        { text: 'Carreteras pavimentadas', isCorrect: false },
      ],
    },
    {
      id: 'o10',
      questionText: '¿Qué práctica agrícola ancestral es común entre las comunidades indígenas de la Amazonía?',
      options: [
        { text: 'Monocultivo extensivo', isCorrect: false },
        { text: 'Tala y quema (chacras itinerantes)', isCorrect: true },
        { text: 'Hidroponía', isCorrect: false },
        { text: 'Cultivo en terrazas', isCorrect: false },
      ],
    },
  ];

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.quizData.forEach(question => this.shuffleArray(question.options));
      this.recomputeScore();
    }
  }

  recomputeScore(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    let totalScore = 0;
    let totalAnswered = 0;

    this.quizData.forEach(question => {
      const checkedOption = document.querySelector(`input[name="${question.id}"]:checked`) as HTMLInputElement | null;
      if (checkedOption) {
        totalAnswered++;
        if (checkedOption.classList.contains('correct')) {
          totalScore += this.correctWeight;
        } else {
          totalScore += this.wrongWeight;
        }
      }
    });

    this.score = Math.max(0, Number(totalScore.toFixed(2)));
    this.answered = totalAnswered;
  }

  nextQuestion(): void {
    // No es necesario recomputeScore aquí si se hace en el evento (change) del div principal
    // this.recomputeScore();
    if (this.currentQuestionIndex < this.quizData.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResult = true; // All questions answered, show results
    }
  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.quizData.length - 1;
  }

  resetQuiz(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.answered = 0;
    this.showResult = false;
    this.quizData.forEach(question => {
      document.querySelectorAll(`input[name="${question.id}"]`).forEach(el => ((el as HTMLInputElement).checked = false));
    });
    // Después de limpiar, recomputar el score para que se muestre 0
    this.recomputeScore();
  }
}