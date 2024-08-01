import React, { useCallback, useReducer } from 'react'
import { Input } from '../../shared/components/FormElements/Input';
import './NewPlaces.css'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/Util/Validators';
import Button from '../../user/components/Form elements/Button';
import { useForm } from '../../shared/Hooks/form-hook';

  export const NewPlaces = () =>{

    const [formState,inputHandler] = useForm({
      title:{
        value:'',
        isValid:false
      },
      description:{
        value:'',
        isValid:false
      },
      address:{
        value:'',
        isValid:false
      },
      
    },false);
  



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
