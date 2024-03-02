import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayTechComponent } from './play-tech.component';

const routes: Routes = [
  {
    path: '',
    component: PlayTechComponent,
    children: [
      {
        path: '',
        title: 'Home',
        loadChildren: () =>
        import('./pages/home/home.module').then( m => m.HomeModule )
      },
      {
        path: 'login',
        title: 'Login',
        loadChildren: () =>
        import('./pages/login/login.module').then( m => m.LoginModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayTechRoutingModule { }
