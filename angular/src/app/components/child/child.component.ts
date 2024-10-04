import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input()
  msg:string =''//Mensaje que llegara del padre
  @Input()
  animals: any
}
