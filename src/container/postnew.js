import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';//for linking the page
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { postData}  from '../actions';

import { connect } from 'react-redux';
class PostNew extends Component
{
  renderTextBox=(field)=>
  {
    console.log(field);
    return(
      <TextField
     hintText={field.input.name}
     floatingLabelText={field.input.name}
     errorText={field.meta.error}
     {...field.input}
   />
    )
  }
  renderidbutton1=(field)=>
  {
    console.log(field);
    const style = {
    margin: 12,
   };
    return(
     <RaisedButton label={field.input.name} disabled={true} style={style} />
    )
  }
  renderidbutton2=(field)=>
  {
    console.log(field);
    const style = {
    margin: 12,
   };
    return(
     <RaisedButton label={field.input.name} style={style} />
    )
  }
  onSubmit(values){
     this.props.postData(values);
  }
  render()
  {
    const { handleSubmit}=this.props;

    return(
      <div className="card">
      <h3>Add Module details</h3>
    <form onSubmit ={handleSubmit(this.onSubmit.bind(this))} >
    <Field
    name='moduleId'
    component={this.renderTextBox}
     fullWidth={true}/><br/>
    <Field
    name='moduleName'
     fullWidth={true}
    component={this.renderTextBox}/><br/>
    <Field
    name='description'
     fullWidth={true}
    component={this.renderTextBox}/><br/>
    <button type='submit' className='btn btn-primary'>Submit</button><br/>
    <br/>
    <Link to='/app'>
    <button type='submit' className='btn btn-primary'>Cancel</button>
    </Link>
    </form>
    </div>
    )
  }

}


function validate(values)
{
  console.log(values);
const error = {};
if(!values.moduleId)
error.moduleId='Please Enter the module Id'
if(!values.module)
error.module="Please Enter the module name"
if(!values.description)
error.description="Please Enter the description"
return error
}
export default reduxForm({
  form:'postnewform',
  validate:validate
})(connect(null,{postData})(PostNew));
