import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'side-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  items: { icon: string; title: string; link: string }[] = [
    { icon: 'team_dashboard', title: 'Dashboard', link: 'dashboard' },
    { icon: 'content_copy', title: 'Content', link: 'content' },
    { icon: 'pie_chart', title: 'Analytics', link: 'analytics' },
    { icon: 'chat', title: 'Comments', link: 'comments' },
  ];
}
