import { Component, OnInit } from '@angular/core';

interface NewsItem {
  title: string;
  image: string;
  description: string;
  collapsed: boolean;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  newsItems: NewsItem[] = [
    {
      title: 'DUKI',
      image: 'assets/img/duki-150x150.jpg',
      description: 'Descripción breve de la noticia 1. Esto incluye detalles relevantes sobre la noticia.',
      collapsed: true,
    },
    {
      title: 'SKARTUTRAPERSITO',
      image: 'assets/img/skar-150x150.png',
      description: 'Descripción breve de la noticia 2. Esto incluye detalles relevantes sobre la noticia.',
      collapsed: true,
    },
    {
      title: 'DON CHETO',
      image: 'assets/img/cheto-150x150.jpg',
      description: 'Descripción breve de la noticia 3. Esto incluye detalles relevantes sobre la noticia.',
      collapsed: true,
    },
    {
      title: 'CABBACH',
      image: 'assets/img/cabbach-150x150.png',
      description: 'Descripción breve de la noticia 4. Esto incluye detalles relevantes sobre la noticia.',
      collapsed: true,
    },
    {
      title: 'SANKER',
      image: 'assets/img/agu-150x150.jpg',
      description: 'Descripción breve de la noticia 5. Esto incluye detalles relevantes sobre la noticia.',
      collapsed: true,
    },
    {
      title: 'BENYI KATRE',
      image: 'assets/img/benja-150x150.png',
      description: 'Descripción breve de la noticia 6. Esto incluye detalles relevantes sobre la noticia.',
      collapsed: true,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
