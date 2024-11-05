import { AudienceChartComponent } from './../audience-chart/audience-chart.component';
import { ViewsRevenueChartComponent } from './../views-revenue-chart/views-revenue-chart.component';
import { LatestCommentsComponent } from './../latest-comments/latest-comments.component';
import { Component } from '@angular/core';
import { LatestVideoComponent } from '../latest-video/latest-video.component';
import { PublishedVideosComponent } from '../published-videos/published-videos.component';
import { SubscribersWatchtimeChartComponent } from '../subscribers-watchtime-chart/subscribers-watchtime-chart.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    LatestVideoComponent,
    LatestCommentsComponent,
    PublishedVideosComponent,
    SubscribersWatchtimeChartComponent,
    ViewsRevenueChartComponent,
    AudienceChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
