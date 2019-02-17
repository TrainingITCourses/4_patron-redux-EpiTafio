import { Component, OnInit } from '@angular/core';
import lanzamientosJS from '../../assets/data/launches.json';
import estadosJS from '../../assets/data/launchstatus.json';
import agenciasJS from '../../assets/data/agencies.json';
import tiposJS from '../../assets/data/missiontypes.json';

@Component({
  selector: 'app-contenedor-container',
  templateUrl: './contenedor-container.component.html',
  styleUrls: ['./contenedor-container.component.css']
})
export class ContenedorContainerComponent implements OnInit {
  public lanzamientos: any[];
  public resultado  = { contenido: 0 };
  public cuenta = 0;
  public filtro = { valor: 0 };
  constructor() { }
  public criterio = { valor: ''};
  ngOnInit() {
  }

  onSearch  (searchText: any)  {
    this.filtra(searchText);
  }

  onFiltratipo(opcion: any) {
    this.filtro.valor = opcion;
    this.resetear();
  }

  filtra (searchText: any) {
 //   this.lanzamientos = [];
   // this.resultado.contenido = 0;
   this.resetear();
    console.log('texto: ' + searchText);
    console.log('Filtro: ' + this.filtro.valor);
    const search = searchText.toLowerCase();
    if (search === '') {
      console.log('searchText: VACIO' + searchText);
    } else {
        if ( 1 == this.filtro.valor ) {
          this.porEstados(search);
        } else if ( this.filtro.valor == 2) {
          this.porAgencias(search);
        } else if ( this.filtro.valor == 3 ) {
          this.porTipos(search);
        } else {
          console.log('"Invalid choice"');
          this.lanzamientos.push('¡¡¡ ELIJA CRITERIO !!! ');
        }
    }
  }

  porEstados (search: any) {
    for (let i = 0; i < lanzamientosJS.launches.length; i++ ) {
      for (let j = 0; j < estadosJS.types.length; j++) {
        if (estadosJS.types[j].name.toLowerCase().includes(search) || estadosJS.types[j].description.toLowerCase().includes(search) ) {
          if (estadosJS.types[j].id === lanzamientosJS.launches[i].status) {
            this.resultado.contenido ++;
            this.lanzamientos.push('Lanzamiento: ' +  lanzamientosJS.launches[i].name + estadosJS.types[j].description);

          }
        }
      }
    }
  }

  porAgencias (search: any) {
    for ( let i = 0; i < agenciasJS.agencies.length; i++ ) {console.log('" x agencias"');
      if ( agenciasJS.agencies[i].name.toLowerCase().includes(search) ) {console.log('"encuentre"');
        for ( let j = 0; j < lanzamientosJS.launches.length; j++ ) {

        }
      }
    }

  }

  porTipos (search: any) {
    for ( let i = 0; i < tiposJS.types.length; i++ ) {
      if ( tiposJS.types[i].name.toLowerCase().includes(search) ) {
        // pintar tipo
        for ( let j = 0; j < lanzamientosJS.launches.length; j++ ) {
          for ( let k = 0; k < lanzamientosJS.launches[j].missions.length; k++ ) {
            if ( lanzamientosJS.launches[j].missions[k].type === tiposJS.types[i].id) {
              this.resultado.contenido ++;
              this.lanzamientos.push('Lanzamiento: ' +  lanzamientosJS.launches[j].name +  'TIPO: ' + tiposJS.types[i].name);

            }
          }
        }
      }
    }
  }

  resetear() {
    this.lanzamientos = [];
    this.resultado.contenido = 0;
    this.criterio.valor = '';
  }
}
