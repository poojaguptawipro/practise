import React,{Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import {fetchData} from '../actions';
import {bindActionCreators} from 'redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';//material-ui table
import {connect} from 'react-redux';//connecting the reducers and container

import action from '../actions';//importing the actions
import {Link} from 'react-router-dom';//for linking the page

class FirstPage extends Component{
  constructor(props){
    super(props);
    if(!props.fetchData){
      return;
    }
    {this.props.fetchData()}
  }

mapping=()=>{
    console.log('inside mapping');
    console.log(this.props);
    if(this.props.data.length==0){
      return
    }

  return this.props.data.data.data.details.map((data,i)=>{
    return (
      <TableRow key={i}>
      <TableRowColumn>{data.moduleId}</TableRowColumn>
      <TableRowColumn>{data.module}</TableRowColumn>
      <TableRowColumn>{data.description}</TableRowColumn>
      <TableRowColumn><i className="fa fa-cog " aria-hidden="true"></i></TableRowColumn>

      </TableRow>
    )
  })
}
render(){
  let style={backgroundColor:"#C8E6C9"};
  return(
    <div>
    i am from the first page
    <div className="card">
      <span className="tableTitle"> <h3> Module List</h3>  </span>
      <div className="text-xs-right">
      <span>
      <i className="fa fa-search fa-2x" aria-hidden="true"></i>

      <Link to='/postnew'>
        <i className="fa fa-plus-circle fa-2x" aria-hidden="true">
        </i>
      </Link>
      </span>
      </div>
      <div className="innerCard">
      <Table className="tableStyle">
          <TableHeader  displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={style}>Module ID</TableHeaderColumn>
              <TableHeaderColumn style={style}>Module Name</TableHeaderColumn>
              <TableHeaderColumn style={style}>Module Description</TableHeaderColumn>
              <TableHeaderColumn style={style}>         </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true}>
          {this.mapping()}
        </TableBody>
      </Table>
      </div>
</div>

    </div>
  );
}

}
function mapStateToProps(state){
  return {data:state.Data};

}

function mapActionToProps(dispatch)
{
    return bindActionCreators({fetchData:fetchData},dispatch);
}
export default connect(mapStateToProps,mapActionToProps)(FirstPage);
