import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionLandingComponent } from './components/section-landing/section-landing.component';
import { SectionEquipeComponent } from './components/section-equipe/section-equipe.component';
import { SectionProjetosComponent } from './components/section-projetos/section-projetos.component';
import { SectionParticiparComponent } from './components/section-participar/section-participar.component';
import { SectionSocialComponent } from './components/section-social/section-social.component';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonBackTopComponent } from './components/button-back-top/button-back-top.component';
import { SectionCopyrightComponent } from './components/section-copyright/section-copyright.component';
import { DividerLandingComponent } from './components/divider-landing/divider-landing.component';
import { FooterContentComponent } from './components/footer-content/footer-content.component';
import { InscricaoPanelComponent } from './components/inscricao-panel/inscricao-panel.component';
import { LandingContentComponent } from './components/landing-content/landing-content.component';
import { SectionContentComponent } from './components/section-content/section-content.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SocialCardsComponent } from './components/social-cards/social-cards.component';
import { HeaderComponent } from './components/header/header.component';
import { ImagesSliderComponent } from './components/images-slider/images-slider.component';
import { CardsCarouselComponent } from './components/cards-carousel/cards-carousel.component';
import { CardsCarouselTwoComponent } from './components/cards-carousel-two/cards-carousel-two.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { InscricaoComponent } from './components/inscricao/inscricao.component';
import { RedesSociaisComponent } from './components/redes-sociais/redes-sociais.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionLandingComponent,
    SectionEquipeComponent,
    SectionProjetosComponent,
    SectionParticiparComponent,
    SectionSocialComponent,
    DividerComponent,
    FooterComponent,
    ButtonBackTopComponent,
    SectionCopyrightComponent,
    DividerLandingComponent,
    FooterContentComponent,
    InscricaoPanelComponent,
    LandingContentComponent,
    SectionContentComponent,
    SectionTitleComponent,
    SocialCardsComponent,
    HeaderComponent,
    ImagesSliderComponent,
    CardsCarouselComponent,
    CardsCarouselTwoComponent,
    EquipeComponent,
    InicioComponent,
    ProjetosComponent,
    InscricaoComponent,
    RedesSociaisComponent,
    OficinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
