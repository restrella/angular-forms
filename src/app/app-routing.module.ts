import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pipedemo',
    loadChildren: () =>
      import('./modules/pipedemo/pipedemo.module').then(
        (m) => m.PipedemoModule
      ),
  },
  {
    path: 'templateform',
    loadChildren: () =>
      import('./modules/templateform/templateform.module').then(
        (m) => m.TemplateformModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
