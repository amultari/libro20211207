import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit {

  libro?: Libro;

  constructor(
    private route: ActivatedRoute,
    private libroService: LibroService,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.libroService.getLibro(id)
      .subscribe(libroItem => this.libro = libroItem);
  }

  backToList():void{
    this.router.navigate(['libro/list']);
  }

}
