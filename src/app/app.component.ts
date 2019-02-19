import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import * as Highcharts from 'highcharts/highstock';

// ==== Testing Import Style A ====

import 'highcharts/Indicators/indicators-all';
import 'highcharts/modules/drag-panes';
import 'highcharts/modules/annotations-advanced';
import 'highcharts/modules/price-indicator';
import 'highcharts/modules/full-screen';
import 'highcharts/modules/stock-tools';

// ==== Testing Import Style B ====

// import * as Indicators from 'highcharts/Indicators/indicators-all';
// Indicators(Highcharts);
// import * as DragPanes from 'highcharts/modules/drag-panes';
// (DragPanes as any)(Highcharts);
// import * as AnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
// AnnotationsAdvanced(Highcharts);
// import * as PriceIndicator from 'highcharts/modules/price-indicator';
// PriceIndicator(Highcharts);
// import * as FullScreen from 'highcharts/modules/full-screen';
// FullScreen(Highcharts);
// import * as StockTools from 'highcharts/modules/stock-tools';
// (StockTools as any)(Highcharts);

// =======================================

import { Options as HighchartOptions } from 'highcharts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    title = 'AngularChartTester';

    @ViewChild('chart') private chartElement: ElementRef;

    ngAfterViewInit() {
        const chartOptions: HighchartOptions = {
            series: [{
                type: 'candlestick',
                data: [
                    [1, 12, 15, 10, 11],
                    [2, 11, 13, 9, 9],
                    [3, 10, 11, 6, 7],
                    [4, 9, 12, 8, 11],
                    [5, 12, 15, 11, 14],
                ],
                id: 'main',
                name: 'GOOG',
            }],
            credits: {
                enabled: true,
            },
            rangeSelector: {
                enabled: true,
            },
            tooltip: {
                enabled: true,
            },
            yAxis: {
                floor: 0,
            },
            stockTools: {
                gui: {
                    enabled: true,
                }
            }
        };
        Highcharts.stockChart(this.chartElement.nativeElement, chartOptions);
    }
}
