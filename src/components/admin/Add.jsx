import React from 'react'

const Add = (props) => {

    const { slug, columns, setOpen } = props;

    const handleSubmit = event => {
        event.preventDefault()

        // Add new item
    }

    return (
        <div className='add-page'>
            <div className="modal">
                <span className='close-btn' onClick={() => setOpen(false)}>X</span>
                <h2>Add new {slug}</h2>
                <form onSubmit={handleSubmit}>
                    {columns
                        .filter(item => item.field !== 'ID' && item.field !== 'img')
                        .map(column => (
                            <div className="item">
                                <label htmlFor={column.field}>{column.headerName}</label>
                                <input id={column.field} type={column.type} placeholder={column.headerName} />
                            </div>
                        ))}
                        <button>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Add