import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-equipe',
  templateUrl: './section-equipe.component.html',
  styleUrls: ['./section-equipe.component.css']
})
export class SectionEquipeComponent implements OnInit {

  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
