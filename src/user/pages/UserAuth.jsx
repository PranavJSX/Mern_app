import React, { useState } from "react";
import Card from "../../shared/components/UI_elements/Card";
import { Input } from "../../shared/components/FormElements/Input";
import Button from "../components/Form elements/Button";
import { VALIDATOR_EMAIL,VALIDATOR_MINLENGTH ,VALIDATOR_REQUIRE} from "../../shared/Util/Validators";
import { useForm } from "../../shared/Hooks/form-hook";


export const UserAuth=()=>{
    const [isLogin,setisLogin] = useState(true);
    const [formState,inputHandler,setFormData] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        }
    },false);

    const autSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(formState.inputs);
    }

    const swithModeHandler=()=>{
        if(!isLogin){
            setFormData()
        }
        
        setisLogin(prevMode=>!prevMode);
    }


    return <Card classname="authentication">
        <h2>Login Required</h2>
        <form onSubmit={autSubmitHandler}>
            {!isLogin && 
            <Input element="input" id="name"
            type="text" label="Your Name" validators={[VALIDATOR_REQUIRE]}
            error="Please enter a Name."
            onInput={inputHandler}
            />}
            <Input element="input" id="email" type="email" 
            label="E-mail" validators={[VALIDATOR_EMAIL]} errorText="Please enter a valid email adress"
            onInput={inputHandler}/>
            <Input element="input" id="password" type="password" 
            label="Password" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid Password which is atleast 5 characters"
            onInput={inputHandler}/>
            <Button type="Submit" disabled={!formState.isValid}>{isLogin ? 'LOGIN':'SIGN-UP'}</Button>
        </form>

        <Button inverse onclick={swithModeHandler}>SWITCH TO { isLogin ? 'SIGN-UP' : 'LOGIN'}</Button>
        </Card>
}