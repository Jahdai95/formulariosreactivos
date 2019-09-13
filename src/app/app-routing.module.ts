import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent},
  { path: 'data', component: DataComponent},
  { path: 'contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
