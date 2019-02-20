import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros-presenter',
  templateUrl: './filtros-presenter.component.html',
  styleUrls: ['./filtros-presenter.component.css']
})
export class FiltrosPresenterComponent implements OnInit {
  @Output() public filtros = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  public cambiaFiltro(valor: any) {
    console.log('Cambia filtro ' + valor );
    this.filtros.next(valor);
  }
}
