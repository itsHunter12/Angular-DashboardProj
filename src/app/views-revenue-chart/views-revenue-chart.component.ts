//import { ChartData } from './../../../node_modules/chart.js/dist/types/index.d';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  Tooltip, // Import Tooltip plugin
  Legend,
  PointElement,
  ChartData,
  ChartOptions,
  LineElement,
  LineController,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

Chart.register(
  BarController,
  PointElement,
  LineElement,
  LineController,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale
);

@Component({
  selector: 'views-revenue-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './views-revenue-chart.component.html',
  styleUrl: './views-revenue-chart.component.scss',
})
export class ViewsRevenueChartComponent {
  data: ChartData<'line'> = {
    labels: this.getLabels(),
    datasets: [
      {
        data: this.getViews(),
        label: '',
      },
      {
        data: this.getViews(),
        label: '',
      },
    ],
  };

  getLabels(): string[] {
    var labels = [];
    for (let i = 0; i < 31; i++) {
      labels.push(i + 1 + 'Dec');
    }
    return labels;
  }

  getViews(): number[] {
    var data = [];
    for (let i = 0; i < 31; i++) {
      data.push(Math.random() * 10000);
    }
    return data;
  }
}
