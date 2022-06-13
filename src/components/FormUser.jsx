import React, {useState} from 'react';
import {Form,FloatingLabel,Button} from "react-bootstrap";
import './FormUser.css';

const FormUser = ({setLists,addList}) => {

    const [formValue,setFormValue] = useState('')
    
    const formChange = (event) => {
        setFormValue(event.currentTarget.value)
    }

    const formSubmit = (event) => {
        event.preventDefault()
        addList(formValue)
        setFormValue('')
    }
    
    const formEnter = (event) => {
        if (event.key === 'Enter'){
            formSubmit(event)
        }
    }

    const deleteAll = () => {
        setLists([])
    }

    return (
        <Form onSubmit={formSubmit} className='form-main'>
            <FloatingLabel controlId="floatingPassword" label="Введите задачу ...">
                <Form.Control
                    type="text"
                    placeholder="Введите задачу ..."
                    value={formValue}
                    onChange={formChange}
                    onKeyDown={formEnter}
                />
            </FloatingLabel>
            <Button variant='secondary' type='submit'>Сохранить</Button>
            <Button variant='danger' onClick={deleteAll}>Удалить все</Button>
        </Form>
    );
};

export default FormUser;