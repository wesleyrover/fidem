import { Component, OnInit } from '@angular/core';
import { Segmento } from '../../model/segmento';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  segmentoLst: any[];

  constructor() { }

  ngOnInit() {
  }

  getSegmento(term: string = null): Observable<Segmento[]> {
    let items = this.getMockSegmento();
    if (term) {
        items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return Observable.of(items).delay(500);
}

  getMockSegmento() {
    return [{'id': '1', 'name': 'Alimentos'}, {'id': '2', 'name': 'Alimentos 2'}];
  }

}
