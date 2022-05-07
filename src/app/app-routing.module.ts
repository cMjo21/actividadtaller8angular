import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Porsche911Component } from './componente/porsche911/porsche911.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { MercedesAMGComponent } from './componente/mercedes-amg/mercedes-amg.component';
import { NisanGTRComponent } from './componente/nisan-gtr/nisan-gtr.component';
import { FordComponent } from './componente/ford/ford.component';
import { FormularioComponent } from './componente/formulario/formulario.component';


const routes: Routes = [
 
 { path:'inicio',component:InicioComponent },
 { path:'porsche911',component:Porsche911Component},
 { path:'MercedesAMG',component:MercedesAMGComponent},
 { path:'NisanGTR',component:NisanGTRComponent},
 { path:'ford',component:FordComponent},
 { path:'formulario',component:FormularioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
