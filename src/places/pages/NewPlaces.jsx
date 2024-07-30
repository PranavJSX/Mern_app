import React, { useCallback, useReducer } from 'react'
import { Input } from '../../shared/components/FormElements/Input';
import './NewPlaces.css'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/Util/Validators';
import Button from '../../user/components/Form elements/Button';

  const formReducer = (state,action) =>{
    switch(action.type){
      case 'INPUT_CHANGE':
        let formisValid = true;
        for(const inputid in state.inputs){
          if(inputid === action.inputid){
            formisValid = formisValid && action.isvalid;
          }
          else{
            formisValid = formisValid && state.inputs[inputid].isvalid
          }
        }
        return{
          ...state,
          inputs:{
            ...state.inputs,
            [action.inputid]:{ value:action.value,isvalid:action.isvalid}
          },
          isvalid:formisValid
        };
      default:
        return state;
    }
  };

  export const NewPlaces = () =>{
    const [formState,dispatch] = useReducer(formReducer,{
      inputs:{
        title:{
          value:'',
          isvalid:false
        },
        description :{
          value:'',
          isvalid:false
        }
      },
      isvalid:false
    });
  

  const inputHandler = useCallback((id,value,isvalid) => {
    dispatch({type:'INPUT_CHANGE',isvalid:isvalid , value:value , inputid:id})
  },[]);

  const placeSubmitHandler = e =>{
    e.preventDefault();
    console.log(formState.inputs);
  }

  return <form className='place-form' onSubmit={placeSubmitHandler}>
    <Input id='title' element = 'input' type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} 
    errorText = 'Please enter a valid title' 
    onInput = {inputHandler}/>
    <Input id='description' element = 'textarea'  label="description" validators={[VALIDATOR_MINLENGTH(5)]} 
    errorText = 'Please enter a valid desciption (atleast 5 characters)' 
    onInput = {inputHandler}/>
    <Input id='address' element = 'input'  label="address" validators={[VALIDATOR_REQUIRE()]} 
    errorText = 'Please enter a valid address' 
    onInput = {inputHandler}/>
    <Button type="submit" disabled = {!formState.isvalid}>ADD PLACE</Button>
  </form>;
}
