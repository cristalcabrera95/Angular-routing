import { Component} from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent {

  gatos = ['Panchila', 'Junior', 'Chupetas', 'Kyra'];
  newCat = '';


  addGatos() {
    this.gatos.push(this.newCat);
    this.newCat = '';
  }

}
