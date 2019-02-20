import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resultado-presenter',
  templateUrl: './resultado-presenter.component.html',
  styleUrls: ['./resultado-presenter.component.css']
})
export class ResultadoPresenterComponent implements OnInit {
  @Input() public filtros: any[];
  constructor() { }

  ngOnInit() {
  }

}
