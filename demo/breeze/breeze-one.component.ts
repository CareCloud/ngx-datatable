import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {MockServerResultsService} from '../paging/mock-server-results-service';
import {PagedData} from '../paging/model/paged-data';
import {CorporateEmployee} from '../paging/model/corporate-employee';
import {Page} from '../paging/model/page';

@Component({
  selector: 'breeze-one-demo',
  providers: [
      MockServerResultsService
  ],
  template: `
    <div>
      <h3>
        Breeze 1
        <small>
          <a href="#" (click)="table.rowDetail.expandAllRows()">Expand All</a> | 
          <a href="#" (click)="table.rowDetail.collapseAllRows()">Collapse All</a>
        </small>
      </h3>
      <ngx-datatable
        #myTable
        class='material expandable'
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [settingsHeight]="50"
        [rowHeight]="50"
        [rows]='rows'
        [externalPaging]="true"
        [externalSorting]="true"
        [count]="page.totalElements"
        [offset]="page.pageNumber"
        [limit]="page.size"
        [limits]="limits"
        (sort)="onSort($event)"
        (page)="setPage($event)"
        (search)="onSearch($event)">
        <!-- Row Detail Template -->
        <ngx-datatable-row-detail [rowHeight]="100" #myDetailRow (toggle)="onDetailToggle($event)">
          <ng-template let-row="row" ngx-datatable-row-detail-template>
            <div style="padding-left:35px;">
              <div><strong>Inner Template</strong></div>
              <div>{{row.name}}</div>
            </div>
          </ng-template>
        </ngx-datatable-row-detail>

        <!-- Column Templates -->
         <ngx-datatable-column
          [width]="50"
          [resizeable]="false"
          [sortable]="false"
          [draggable]="false"
          [canAutoResize]="false">
          <ng-template let-row="row" ngx-datatable-cell-template>
            <a
              href="#"
              [class.datatable-icon-right]="!row.$$expanded"
              [class.datatable-icon-down]="row.$$expanded"
              title="Expand/Collapse Row"
              (click)="toggleExpandRow(row)">
            </a>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Name" width="200">
          <ng-template let-value="value" ngx-datatable-cell-template>
            <strong>{{value}}</strong>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Gender" width="300">
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            <i [innerHTML]="row['name']"></i> and <i>{{value}}</i>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Age" ></ngx-datatable-column>
      </ngx-datatable>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class BreezeOneComponent {

  @ViewChild('myTable') table: any;

  limits: number[] = [10, 25, 50];
  rows = new Array<CorporateEmployee>();
  page = new Page();

  expanded: any = {};

  constructor(private serverResultsService: MockServerResultsService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    console.log('Set Page event', pageInfo);
    this.page.pageNumber = pageInfo.offset;
    if (pageInfo.limit) {
      this.page.size = pageInfo.limit;
    }
    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }

  /**
   * Populate the table with new data based on the sort prop and dir
   * @param event The sort event
   */
  onSort(event) {
    // event was triggered, start sort sequence
    console.log('Sort Event', event);
    const rows = [...this.rows];
    // this is only for demo purposes, normally
    // your server would return the result for
    // you and you would just set the rows prop
    const sort = event.sorts[0];
    rows.sort((a, b) => {
      if (a[sort.prop] && b[sort.prop]) {
        return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
      }
      return 0;
    });

    this.rows = rows;
  }

  onSearch(event) {
    console.log('Search event', event);
    // this is only for demo purposes, normally
    // your server would return the result for
    // you and you would just set the rows prop
    this.rows = this.rows;
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

}
