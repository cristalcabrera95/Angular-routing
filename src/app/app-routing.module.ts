import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { HolaComponent } from './hola/hola.component';


const routes: Routes = [
    { path: 'hola', component: HolaComponent },
    { path: 'table', component: TablaComponent }
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})

export class AppRoutingModule { }
