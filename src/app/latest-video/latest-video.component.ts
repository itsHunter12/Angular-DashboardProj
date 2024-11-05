import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextLimitPipe } from '../text-limit.pipe';

@Component({
  selector: 'latest-video',
  standalone: true,
  imports: [RouterModule, TextLimitPipe],
  templateUrl: './latest-video.component.html',
  styleUrl: './latest-video.component.scss',
})
export class LatestVideoComponent {
  data = {
    videoTitle: 'Project Video',
    ranking: 2,
    clickThrough: '10%',
    duration: '3.22',
    views: 200,
    comments: 100,
    likes: 50,
  };
}
