import React, { useState } from 'react';
import { useNavigation } from 'react-navi';
import './RegistrationPage.css';
import { onRegister } from './RegistrationPage.service';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { User } from './user.interface';

export var currUser = '';
const RegistrationPage = () => {
    const navigation = useNavigation();
    const [errorMsg,setError] = useState('');

    const formik = useFormik({
        initialValues :{username:''},
        validationSchema: Yup.object({
            username: Yup.string()
            .min(6,'Must be at least 6 characters')
            .max(10, 'Must be 10 characters or less')
            .required()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/,'Error, Only English, at least 1 Uppercase/Digit/Lowercase')    
        }),
        onSubmit:(values)=> {register(values)}
    })

    const register = async (values: User) => {
        const response = await onRegister(
            values.username
        )
        if (response.userExists) {
            setError('User is Exists');
        } else {
            currUser = values.username;
            navigation.navigate('/chat');
        }
    }

    return (
    <div className="card">
        <h1>Registration Page</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="username"> 
                  <label htmlFor="username">Username</label>
                  <input placeholder="Username" id="username" name="username" value={formik.values.username} onChange={formik.handleChange}/>
                  <div className="error">{formik.errors.username || errorMsg}</div>
                </div>
              <button type="submit">Submit</button> 
            </form>
    </div>
    )

}

export default RegistrationPage;