import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EquipeComponent } from "./components/equipe/equipe.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { InscricaoComponent } from "./components/inscricao/inscricao.component";
import { ProjetosComponent } from "./components/projetos/projetos.component";
import { RedesSociaisComponent } from "./components/redes-sociais/redes-sociais.component";

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'equipe', component: EquipeComponent},
    {path: 'projetos', component: ProjetosComponent},
    {path: 'inscricao', component: InscricaoComponent},
    {path: 'redes-sociais', component: RedesSociaisComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}