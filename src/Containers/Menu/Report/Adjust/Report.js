import React, { Component } from 'react';
import ReportTable from '../../../../Generics/ReportTable/ReportTable';

class ReportAdjustReport extends Component {
  render() {
    let table = {
      columns: ['id', 'name'],
      rows: [
        {
          columns: ['testId', 'testName'],
          data: {
            columns: ['id', 'name', 'qty'],
            rows: [
              {
                columns: ['1', 'test1', 2],
                onMouseEnter: _ => {
                  console.log(1);
                }
              },
              {
                columns: ['2', 'test2', 1],
                onMouseEnter: _ => {
                  console.log(2);
                }
              }
            ]
          },
          onMouseEnter: _ => {
            console.log(0);
          }
        }
      ]
    };
    return <ReportTable table={table} />;
  }
}

export default ReportAdjustReport;
