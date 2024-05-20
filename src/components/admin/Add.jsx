import React from 'react'
import FormInput from '../input/FormInput';
import Button from '../button/Button';

const Add = (props) => {

    const { slug, columns, setOpen, onSubmit, value, ...otherProps } = props;


    return (
        <div className='add-page'>
            <div className="modal">
                <span className='close-btn' onClick={() => setOpen(false)}>X</span>
                <h2>Add new {slug}</h2>
                <form onSubmit={onSubmit}>
                    {columns
                        .filter(item => item.field !== 'ID' && item.field !== 'img')
                        .map(column => (
                            <div className="item">
                                <label htmlFor={column.field}>{column.headerName}</label>
                                <FormInput key={column.field} id={column.field} name={column.field} type={column.type} placeholder={column.headerName} value ={value[column.field]} {...otherProps} />
                            </div>
                        ))}
                        <Button>Add</Button>
                </form>
            </div>
        </div>
    )
}

export default Add