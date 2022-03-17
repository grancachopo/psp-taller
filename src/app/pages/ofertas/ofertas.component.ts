import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/model/oferta';
import { OfertaService } from 'src/app/servicios/oferta.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  public ofertas: Array<Oferta> = [];

  constructor( private ofertaSrv: OfertaService) { }

  ngOnInit(): void {
    this.recuperarOfertas();
  }

  recuperarOfertas(): void {
    this.ofertaSrv.obtenerOfertas().subscribe((respuesta) => {
      this.ofertas = respuesta;
      console.log('Ofertas recuperadas' + JSON.stringify(this.ofertas));
    });
  }

}

