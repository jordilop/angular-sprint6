import { Component, Input } from '@angular/core';

interface Textos {
  text: String
}

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  @Input() textos = [
    { text: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial" },
    { text: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes." },
    { text: "L'heroi va decidir travessar la porta que el portava a casa" },
    { text: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..." },
  ];

  currentSentence = 0;

  next = () => this.currentSentence === this.textos.length - 1 ? this.currentSentence = 0 : this.currentSentence++;
  prev = () => this.currentSentence === 0 ? this.currentSentence = this.textos.length - 1 : this.currentSentence--;

}
