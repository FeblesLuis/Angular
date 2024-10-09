import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  @Output()
  loginEve: EventEmitter<any> = new EventEmitter<any>;

  name: string = 'Diego'; //Variable que cambiara el nombre del padre llamado FELIPE

  handleLogin() //Esto es IMPORTANTE, es el ahndler que emite un evento
  {
    this.loginEve.emit(this.name);
  }
}
