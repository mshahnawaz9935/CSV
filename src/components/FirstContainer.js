import React, { Component } from 'react';
import { Card , CardGroup ,Button  } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


var cardStyle = {
    backgroundColor : '#ebf0f4',
     height: '800px'
}


const options = {
    chart: {
        animation: true,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        style: {
           
        }
    },
    exporting: { enabled: false },
    credits: {
        enabled: false
    },
    title: {
        text: '<b>1200</b>',
        verticalAlign: 'middle',
        align: 'center',
        x: 0,
        y: 15,
        style: {
            color: '#0055a5',
            fontWeight: '700',
            letterSpacing: '1.5px',
            fontSize: '55px',
            fontFamily : '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
    
        }
     //   floating: true
    },
    subtitle: {
        text: 'Total Animals',
        verticalAlign: 'middle',
        align: 'center',
        x: 0,
        y: 5,
        style : {
            fontSize : '13px',
            color:'#8a95a0',
            fontWeight : '500',
            letterSpacing : '1px'

        }
    },
    legend: {
        itemStyle:{
        color:'#8a95a0',
        fontWeight: '500',
        fontSize: '13px',
        letterSpacing:'1px'
        }
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            events: {
                click: function (event) {
                    console.log('point name' , event.point.name);

    
                }
            },
            showInLegend: true
        },
        pie: {
            //allowPointSelect: true,
            // data here
            data:
               [{
                   //Calved
                   name: 'Calves',
                   color: '#6EB8EE',
                   y: 40
               },
               {
                   //Young Stock
                   name: 'Young Stock',
                   color: '#FFC300',
                   y:30
               },
               {
                   //Heifers
                   name: 'Heifers',
                   color: '#E3A945',
                   y: 10
               },
               {
                   //First Lactations
                   name: 'Lactations',
                   color: '#F0EC16',
                   y:5
               },
               {
                   //Cows
                   name: 'Cows',
                   color: '#5CEC59',
                   y: 5
               },
               {
                   //Unknown
                   name: 'Other', 
                   color: '#e60000',
                   y: 10
               }]
        }
    },
    
    series: [
    {
        name: 'Animals',
        colorByPoint: true,
        innerSize: '70%',
        dataLabels: {
            distance: 20,
            color:'#0055a5',

    
            formatter: function () {
                if (this.y > 0)
                {
                    return '<b>' + this.y;
                }
                    // + this.point.name + '(s) </b>';
            }
        },
    }]


  }
   
  const options2 = {
    chart: {
        type: 'column'
    },
    exporting: { enabled: false },
    credits: {
        enabled: false
    },
    title: {
        text: 'Milk Production Overview',
        align : 'left',
        x: 0,
        y: 10,
        style : {
            fontSize : '13px',
            color:'#8a95a0',
            fontWeight : '500',
            letterSpacing : '1.5px'

        }
    },
    // subtitle: {
    //     text: 'Daily / Monthly'
    // },
    xAxis: {
        categories: [
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Yield monthly'
        }
    },
    legend : {
        itemStyle:{
            color:'#8a95a0',
            fontWeight: '500',
            fontSize: '13px'
        },

    },
    
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} lts</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%',
                style: {fontSize: '13px' , color :'#0055a5'}
            }
        }
    },
    series: [ {
        name: '2019',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3],
        color: '#dfdd07'

    }, {
        name: '2020',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5],
        color:'#0055a5'

    }]
  }


class FirstContainer extends Component{

    showAlert() {
        alert("I'm an alert");
      }

  render() {
      return(
    <div className="FirstContainer" >

        <div class="container-fluid"  >

        <div class="row" style={{marginTop:'2%'}}>
        <div class="col-xl-4 " >
            <div class="card row1" style={{borderRadius:'15px'}} >
                <div class="settings">
                    <a href="#">
                        <img src="settings2.svg" alt="settings" />
                    </a>
                </div>
                <div class="card-body">
                    <span class="card_title" onClick={this.showAlert}>
                        Herd Overview
                    </span>
                    <hr />
                        <div class="overviewpie">
                            <HighchartsReact 
                                    highcharts={Highcharts}
                                    options={options}
                                />
                        </div>
  
                </div>
            </div>

        </div>
        <div class="col-xl-8" >
            <div class="card row1"  style={{borderRadius:'15px'}} >
                <div class="settings">
                    <a href="#">
                        <img src="settings2.svg" alt="settings" />
                    </a>
                </div>
                <div class="card-body">
                    <span class="card_title">
                        Milking Stats
                    </span>
                    <hr />
                    <div class="row ">
                    <div class="col-6">
                    <div class="row card_text_header">

                        <div class="col-6">
                            <a class="dashboard_link " href="#" >
                                Cows Milked
                            </a>
                        </div>
                        <div class="col-6">
                            <a class="dashboard_link" href="#" >
                                Total Yield (kg)
                            </a>
                        </div>
                        </div>
                        <div class="row milking_card_text">

                        <div class="col-6">
                            1256
                        </div>
                        <div class="col-6">
                            17256
                        </div>

                        </div>
                        <div class="row card_text_header" style={{paddingTop: '2%'}}>

                            <div class="col-6">
                                <a class="dashboard_link" href="#" >
                                    Average Total Yield (kg)
                                </a>
                            </div>
                            <div class="col-6">
                                <a class="dashboard_link" href="#" >
                                    Total Feed (kg)
                                </a>
                            </div>
                            </div>
                            <div class="row milking_card_text">

                            <div class="col-6">
                                1542
                            </div>
                            <div class="col-6">
                                14523.5
                            </div>

                            </div>
                            <div class="row card_text_header"  style={{paddingTop: '2%'}}>

                            <div class="col-6">
                                <a class="dashboard_link" href="#">
                                    Cows Diverted
                                </a>
                            </div>
                            <div class="col-6">
                                <a class="dashboard_link" href="#">
                                    Milking Duration
                                </a>
                            </div>
                            </div>
                            <div class="row milking_card_text">

                            <div class="col-6">
                                9%
                            </div>
                            <div class="col-6">
                                05:51
                            </div>

                            </div>
                        </div>
                        <div class="col-6">
                        <div class="overviewpie">
                        <HighchartsReact 
                            highcharts={Highcharts}
                            options={options2}
                        />
                        </div>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
          
    </div>
    </div>
    </div>
      )
 }
}

export default FirstContainer;
