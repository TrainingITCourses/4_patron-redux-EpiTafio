import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscador-presenter',
  templateUrl: './buscador-presenter.component.html',
  styleUrls: ['./buscador-presenter.component.css']
})
export class BuscadorPresenterComponent implements OnInit {
  @Output() public search = new EventEmitter<string>();
  @Output() public filtratipo = new EventEmitter<string>();
  public filtro: any;
  constructor() { }

  ngOnInit() {
  }

 public hayTexto (texto: any)  {
  console.log(texto.toLowerCase());
  this.search.next(texto.toLowerCase());
  }

  public cambiaFiltro(valor: any) {
    console.log('Cambia filtro ' + valor );
    this.filtratipo.next(valor);
  }
}
