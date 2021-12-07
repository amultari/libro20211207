import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroCreateComponent } from './libro/libro-create/libro-create.component';
import { LibroDetailComponent } from './libro/libro-detail/libro-detail.component';
import { LibroListComponent } from './libro/libro-list/libro-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'libro/list', component: LibroListComponent },
  { path: 'libro/create', component: LibroCreateComponent },
  { path: 'libro/:id', component: LibroDetailComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
