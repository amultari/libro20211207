import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit, OnDestroy {

  libri?: Libro[];
  sub?: Subscription;
  confirmMessage: string = '';

  constructor(private libroService: LibroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.libroService.getAllLibri().subscribe(libroList => this.libri = libroList);

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
