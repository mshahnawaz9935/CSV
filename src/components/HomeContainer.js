import React, { Component } from 'react';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import { employees } from '../data.js';
import { Card , CardGroup ,Button  } from 'react-bootstrap';

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

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          showEmployeeInfo: false,
          selectedRowPicture: '',
          selectedRowNotes: ''
        };
    
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
      }
    
  render() {
    return (
      <div className="HomeContainer" >
        <div class="row" style={{ padding: '2%'  }}>
            <div class="col-8">
            <Card style={{borderRadius:'15px',height:'80vh' }}>
            <Card.Body>
                <Card.Title style={titleStyle}>All Users</Card.Title>
                <Card.Text>
                <DataGrid
                     dataSource={employees}
                     selection={{ mode: 'single' }}
                     showBorders={true}
                     hoverStateEnabled={true}
                     keyExpr="ID"
                     onSelectionChanged={this.onSelectionChanged}
                    >
                         <Column dataField="Prefix" caption="Title" width={70} />
                        <Column dataField="FirstName" />
                        <Column dataField="LastName" />
                        <Column dataField="Position" width={180} />
                        <Column dataField="BirthDate" dataType="date" />
                        <Column dataField="HireDate" dataType="date" />
                    <Paging defaultPageSize={10} />
                    <Pager
                      showPageSizeSelector={true}
                      allowedPageSizes={[5, 10, 20]}
                      showInfo={true} />
                </DataGrid>
                </Card.Text>
               
            </Card.Body>
            </Card>
            </div>
            <div class="col-4">
            <Card style={{borderRadius:'15px',height:'80vh' }}>
            <Card.Body>
                <Card.Title className="card_title">Details</Card.Title>
                <Card.Text>
                <React.Fragment>
                {
                    this.state.showEmployeeInfo &&
                    <div id="employee-info">
                        <img src={this.state.selectedRowPicture} className="employee-photo" />
                        <p className="employee-notes">{this.state.selectedRowNotes}</p>
                    </div>
                    }
                </React.Fragment>
                
                </Card.Text>
              
            </Card.Body>
            </Card>
            </div>
        </div>
       
      
      </div>
    );
  }
  onSelectionChanged({ selectedRowsData }) {
    const data = selectedRowsData[0];
    console.log(selectedRowsData);

    this.setState({
      showEmployeeInfo: !!data,
      selectedRowNotes: data && data.Notes,
      selectedRowPicture: data && data.Picture
    });
  }

}

export default HomeContainer;

