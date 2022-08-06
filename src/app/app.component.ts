import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(router: Router, titleService: Title) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {

        switch (event.url) {
          case '/':
            titleService.setTitle('Início');
            break;

          case '/equipe':
            titleService.setTitle('Equipe');
            break;

          case '/projetos':
            titleService.setTitle('Projetos');
            break;

          case '/inscricao':
            titleService.setTitle('Inscrição');
            break;

          case '/redes-sociais':
            titleService.setTitle('Redes sociais');
            break;
        }
      });
  }
}

