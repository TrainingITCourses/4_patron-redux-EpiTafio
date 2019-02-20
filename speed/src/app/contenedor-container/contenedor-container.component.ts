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
  public lanzamientos: any[] = [];
  public resultado  = { contenido: 0 };
  public filtro = { valor: 0 };
   public criterio:  any[];
  public filtros: any[];

  constructor() { }

  ngOnInit() {
  }

  onSearch = (searchText: any) =>  {
    this.filtra(searchText);
  }

  onFiltratipo = (opcion: any) => {
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

  porEstados (search: any) {
    if ( search.length !== 0 ) {
      lanzamientosJS.launches.forEach( (lanza)  => {
        estadosJS.types.forEach( (esta) => {
          if ( esta.name.toLowerCase().includes(search) || esta.description.toLowerCase().includes(search)  ) {
            if (esta.id === lanza.status) {
              this.resultado.contenido ++;
              this.lanzamientos.push( 'Lanzamiento: ' +  lanza.name );
            }
          }
        });
       });
    }
  }

  porAgencias (search: any) {
    if ( search.length !== 0 ) {
      agenciasJS.agencies.forEach( (agen) => {
        if ( agen.name.toLowerCase().includes(search) ) {
          lanzamientosJS.launches.forEach( (lanza) => {
          lanza.missions.forEach( (misi) => {
            if ( misi.agencies !== null ) {
              misi.agencies.forEach ( (agenlan) => {
                if ( agenlan.name === agen.name ) {
                  this.resultado.contenido ++;
                  this.lanzamientos.push('Lanzamiento: ' +  lanzamientosJS.launches[j].name);
                }
              });
            }
          });
        });
        }
         });


         for ( let i = 0; i < agenciasJS.agencies.length; i++ ) {
      if ( agenciasJS.agencies[i].name.toLowerCase().includes(search) ) {

        for ( let j = 0; j < lanzamientosJS.launches.length; j++ ) {
          for ( let k = 0; k < lanzamientosJS.launches[j].missions.length; k++ ) {
            if ( lanzamientosJS.launches[j].missions[k].agencies !== null ) {
              for ( let l = 0; l < lanzamientosJS.launches[j].missions[k].agencies.length; l++ ) {
                if ( lanzamientosJS.launches[j].missions[k].agencies[l].name === agenciasJS.agencies[i].name ) {
                  this.resultado.contenido ++;
                  this.lanzamientos.push('Lanzamiento: ' +  lanzamientosJS.launches[j].name);
                }
              }
            }
          }
        }
      }
    }

  }
  }

  porTipos (search: any) {
    for ( let i = 0; i < tiposJS.types.length; i++ ) {
      if ( tiposJS.types[i].name.toLowerCase().includes(search) ) {
        // pintar tipo
        this.criterio.push( 'TIPO ' + tiposJS.types[i].name);
        for ( let j = 0; j < lanzamientosJS.launches.length; j++ ) {
          for ( let k = 0; k < lanzamientosJS.launches[j].missions.length; k++ ) {
            if ( lanzamientosJS.launches[j].missions[k].type === tiposJS.types[i].id) {
              this.resultado.contenido ++;
              this.lanzamientos.push('Lanzamiento: ' +  lanzamientosJS.launches[j].name );

            }
          }
        }
      }
    }
  }

  resetear() {
    this.lanzamientos = [];
    this.resultado.contenido = 0;
    this.criterio = [];
  }
}