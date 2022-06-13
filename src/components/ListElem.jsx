import React from 'react';
import {Button} from "react-bootstrap";
import './ListElem.css';

const ListElem = ({list,deleteList,closeList}) => {
    return (
        <div className='list-elem' key={list.id}>
            <div className='compl-btn' onClick={()=>closeList(list.id)}>
                {list.task}
            </div>
            <span>
                {list.complete?
                    <Button
                        className='complete-but'
                        variant='success'
                        disabled={true}
                    >Выполнено!</Button>:''
                }
                <Button
                    variant='outline-danger'
                    onClick={()=>deleteList(list.id)}
                >Удалить</Button>
            </span>
        </div>
    );
};

export default ListElem;