import { Component } from '@angular/core';
import { TextLimitPipe } from '../text-limit.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'published-videos',
  standalone: true,
  imports: [TextLimitPipe, RouterModule],
  templateUrl: './published-videos.component.html',
  styleUrl: './published-videos.component.scss',
})
export class PublishedVideosComponent {
  data = [
    {
      videoTitle: 'Project Video',
      views: 200,
      comments: 100,
      likes: 50,
      imageSrc: 'https://picsum.photos/200/300',
    },
    {
      videoTitle: 'Project Video',
      views: 200,
      comments: 100,
      likes: 50,
      imageSrc: 'https://picsum.photos/200/300',
    },
    {
      videoTitle: 'Project Video',
      views: 200,
      comments: 100,
      likes: 50,
      imageSrc: 'https://picsum.photos/200/300',
    },
    {
      videoTitle: 'Project Video',
      views: 200,
      comments: 100,
      likes: 50,
      imageSrc: 'https://picsum.photos/200/300',
    },
  ];
}
