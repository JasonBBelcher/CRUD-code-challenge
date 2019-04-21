import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-view-financials',
  templateUrl: './view-financials.component.html',
  styleUrls: ['./view-financials.component.css']
})
export class ViewFinancialsComponent implements OnInit {
  targets$: Observable<any[]>;
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: Label[] = [];
  public chartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartData: ChartDataSets[] = [{ data: [], label: '' }];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTargets();
    this.targets$ = this.apiService.targets;
    this.targets$.subscribe(targets => {
      this.pieChartLabels = targets.map(target => {
        return target.targetName;
      });
      const agrArr = [];
      targets.map(target => {
        return {
          data: agrArr.push(target.agr.slice(0, -1)),
          Label: 'Series A'
        };
      });

      this.pieChartData[0].data = agrArr;
    });
  }
}
