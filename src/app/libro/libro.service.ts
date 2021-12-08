import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  LIBRI_MOCK: Libro[] = [
    { id: 1, titolo: "Titolo1", pagine: 234, autore: 'Autore1', dataPubblicazione: new Date("2019-01-16"), premiato: false },
    { id: 2, titolo: "Titolo2", pagine: 434, autore: 'Autore2', dataPubblicazione: new Date("1996-02-16"), premiato: true },
    { id: 3, titolo: "Titolo3", pagine: 634, autore: 'Autore3', dataPubblicazione: new Date("1955-03-23"), premiato: false },
    { id: 4, titolo: "Titolo4", pagine: 334, autore: 'Autore4', dataPubblicazione: new Date("2004-04-12"), premiato: false }
  ]

  constructor() { }

  getAllLibri(): Observable<Libro[]> {
    return of(this.LIBRI_MOCK);
  }

  getLibro(id: number): Observable<Libro> {
    const libro = this.LIBRI_MOCK.find(libroItem => libroItem.id === id)!;
    return of(libro);
  }

  create(libroInput: Libro): Observable<Libro> {
    const newId: number = Math.max.apply(Math, this.LIBRI_MOCK.map(libroItem => libroItem.id ? libroItem.id : 1));
    libroInput.id = newId + 1;
    this.LIBRI_MOCK.push(libroInput);
    return of(libroInput);
  }
}
