import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resultado-presenter',
  templateUrl: './resultado-presenter.component.html',
  styleUrls: ['./resultado-presenter.component.css']
})
export class ResultadoPresenterComponent implements OnInit {
  @Input() public resultado = { contenido: 99 };
  @Input() public lanzamientos: any[];
  @Input() public criterio = { valor: ''};
  constructor() { }

  ngOnInit() {
  }

}
