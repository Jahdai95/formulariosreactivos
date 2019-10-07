import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormgroupComponent } from './components/formgroup/formgroup.component';

const routes: Routes = [
  { path: 'data', component: DataComponent},
  { path: 'contacto', component: ContactComponent},
  { path: 'formgroup', component: FormgroupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
