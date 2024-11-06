//import { ChartData, ChartOptions } from './../../../node_modules/chart.js/dist/types/index.d';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  Tooltip, // Import Tooltip plugin
  Legend,
  ChartData,
  ChartOptions,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale
);

@Component({
  selector: 'subscribers-watchtime-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './subscribers-watchtime-chart.component.html',
  styleUrl: './subscribers-watchtime-chart.component.scss',
})
export class SubscribersWatchtimeChartComponent {
  // Define the data for the bar chart
  data: ChartData<'bar'> = {
    labels: [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],

    datasets: [
      {
        data: this.getSubs(),
        label: 'Subscribers',
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Add color for differentiation
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        data: this.getWatchTime(),
        label: 'Watchtime',
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // Different color for the second dataset
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Optional: Add chart options to control chart behavior
  options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  getSubs() {
    return [100, 200, 300, 400, 500, 600, 700, 800, 900, 450, 650, 890];
  }
  getWatchTime() {
    return [100, 150, 350, 410, 450, 580, 740, 650, 450, 410, 800, 670];
  }

  getTotalSubs() {
    let sum = 0;
    this.getSubs().forEach((value) => (sum += value));
    return sum;
  }
  getTotalWatchTime() {
    let sum = 0;
    this.getWatchTime().forEach((value) => (sum += value));
    return sum;
  }
}
