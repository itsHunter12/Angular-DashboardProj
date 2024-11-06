import { Component } from '@angular/core';
import { TextLimitPipe } from '../text-limit.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'latest-comments',
  standalone: true,
  imports: [TextLimitPipe, RouterModule],
  templateUrl: './latest-comments.component.html',
  styleUrl: './latest-comments.component.scss',
})
export class LatestCommentsComponent {
  data = [
    {
      profileImageSrc: 'profile.png',
      username: 'test.username',
      comment: 'This is test comment',
      thumbnailSrc: 'thumbnail.png',
    },
    {
      profileImageSrc: 'profile.png',
      username: 'test.username',
      comment: 'This is test comment',
      thumbnailSrc: 'thumbnail.png',
    },
    {
      profileImageSrc: 'profile.png',
      username: 'test.username',
      comment: 'This is test comment',
      thumbnailSrc: 'thumbnail.png',
    },
    {
      profileImageSrc: 'profile.png',
      username: 'test.username',
      comment: 'This is test comment',
      thumbnailSrc: 'thumbnail.png',
    },
    {
      profileImageSrc: 'profile.png',
      username: 'test.username',
      comment: 'This is test comment',
      thumbnailSrc: 'thumbnail.png',
    },
  ];
}
