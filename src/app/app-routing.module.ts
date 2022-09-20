import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EquipeComponent } from "./components/equipe/equipe.component";
import { HtmlComponent } from "./components/html/html.component";
import { SitesComponent } from "./components/html/sites/sites.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { InscricaoComponent } from "./components/inscricao/inscricao.component";
import { ProjetosComponent } from "./components/projetos/projetos.component";
import { RedesSociaisComponent } from "./components/redes-sociais/redes-sociais.component";

const routes: Routes = [
    {path: '', component: InicioComponent, title: 'Meninas na TI · Início' },
    {path: 'equipe', component: EquipeComponent, title: 'Meninas na TI · Equipe' },
    {path: 'projetos', component: ProjetosComponent, title: 'Meninas na TI · Projetos' },
    {path: 'inscricao', component: InscricaoComponent, title: 'Meninas na TI · Inscrição' },
    {path: 'redes-sociais', component: RedesSociaisComponent, title: 'Meninas na TI · Mídia' },
    {path: 'html', component: HtmlComponent, title: 'Meninas na TI · HTML' },
    {path: 'html/projetos', component: SitesComponent, title: 'Meninas na TI · Projetos' },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}