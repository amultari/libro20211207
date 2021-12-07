import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-create',
  templateUrl: './libro-create.component.html',
  styleUrls: ['./libro-create.component.css']
})
export class LibroCreateComponent implements OnInit {

  libro: Libro = new Libro();
  errorMessage: string = '';

  constructor(private libroService: LibroService, private router: Router) { }

  ngOnInit(): void {
  }

  save(libroForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.libro));
    if (libroForm.valid) {
      this.libroService.create(this.libro).subscribe({
        next: libroItem => this.libro = libroItem,
        complete: () => this.router.navigate([`libro/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

}
