import React, { Component } from 'react';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import { employees } from '../data.js';
import { Card , CardGroup ,Button  } from 'react-bootstrap';
import {CSVLink, CSVDownload} from 'react-csv';
import * as csv from 'csvtojson';

var titleStyle= {
    height: '41px',
    fontSize: '30px',
    fontWeight: '700',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1.5px',
    color:'#0055a5',
};

const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
      return <td key={props.data[key]}>{props.data[key]}</td>
    })
}

const csvData =[
    ['firstname', 'lastname', 'email'] ,
    ['John', 'Doe' , 'john.doe@xyz.com'] ,
    ['Jane', 'Doe' , 'jane.doe@xyz.com']
  ];

   

class AccountsContainer extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //  GET request using fetch
        fetch('http://localhost:8081/data')
            .then(response =>  { 
            
                if(response.status == 200)
                {
                    return response.json(); 
                }
                
                else 
                {
                  console.log(response.status);
                  throw new Error(response.status);
                }
             })
            .then(data => {
                console.log(data);
                  if(data!=null)
                  this.setState({ users : data.results  })
            })
             .catch((error) => {
                  this.setState({ errors : error + ' Error Occured ' })
            })
    }
    

    state = { //state is by default an object
         users: [
           { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
           { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
           { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
           { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
        ],
        lines : [],
       
     }

    

 
    handleFiles = (files) => {

        console.log('in handle',files);
     
        // Check for the various File API support.
        if (window.FileReader) {
            // FileReader are supported.
            this.getAsText(files[0]);
        }
    }

  

    getAsText(fileToRead) {
        var reader = new FileReader();
        // Read file into memory as UTF-8   
        
        fileToRead = document.querySelector('input').files[0];

        reader.readAsText(fileToRead);
 
        // Handle errors load
        reader.onload = this.fileReadingFinished.bind(this);
       
        reader.onerror = this.errorHandler;
    }

    fileReadingFinished(event) {
        var csvData = event.target.result;
        console.log(csvData);
     
        this.convertCSVToJson(csvData);
      
    }

    convertCSVToJson(csvData) {
        csv()
        .fromString(csvData)
        .then((jsonObj)=>{
            console.log(jsonObj);
            this.setState({users : jsonObj});
        });
      

    }

    
    errorHandler(event) {
        if (event.target.error.name === "NotReadableError") {
            alert("Cannot read file!");
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    

    renderTableData() {
   
        let headers = Object.keys(this.state.users[0]);
   
        return this.state.users.map((row, index) => {
            console.log(row);

           return <tr key={index}><RenderRow key={index} data={row} keys={headers}/></tr>
         })
      }
     

   


  render() {
    return (
      <div className="AccountsContainer" style={{ backgroundColor:'#ebf0f4',height:'98vh'}}>
      
      <div class="row" style={{ padding: '2%'  }}>
            <div class="col-8">
            <Card style={{borderRadius:'15px',height:'80vh' }}>
            <Card.Body>
                <Card.Title style={titleStyle} onClick={this.handleFiles}>Accounts</Card.Title>
                <Card.Text>
                <DataGrid
                     dataSource={this.state.users}
                     selection={{ mode: 'single' }}
                     showBorders={true}
                     hoverStateEnabled={true}
                  //   keyExpr="ID"
                     onSelectionChanged={this.onSelectionChanged}
                    >
                         <Column dataField="account_id" caption="ID" width={70} />
                        <Column dataField="status" />
                        <Column dataField="created_on" dataType="date" />
                    <Paging defaultPageSize={10} />
                    <Pager
                      showPageSizeSelector={true}
                      allowedPageSizes={[5, 10, 20]}
                      showInfo={true} />
                </DataGrid>

                <CSVLink filename={"my-file.csv"} data={csvData} >Download me</CSVLink>
               
                {/* <CSVDownload data={csvData} target="_blank" /> */}
                                </Card.Text>
               
            </Card.Body>
            </Card>
            </div>
            <div class="col-4">
            <Card style={{borderRadius:'15px',height:'80vh' }}>
            <Card.Body>
                <Card.Title className="card_title">Details</Card.Title>
                <Card.Text>
                    <input type="file" onChange={ this.handleFiles }
                accept=".csv" 
            />
         
         <div>
            <p id='title'>React Dynamic Table</p>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
                
                </Card.Text>
              
            </Card.Body>
            </Card>
            </div>
        </div>
      
      </div>
    );
  }
}


export default AccountsContainer;
