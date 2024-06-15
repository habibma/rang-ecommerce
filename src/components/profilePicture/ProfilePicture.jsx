import React from 'react'
import './profilePicture.scss'
import Avatar from '../avatar/Avatar'
import Modal from '../modal/index'

const ProfilePicture = () => {

    const handleChange = () => {

    }

    const handleClick = () => {

    }

    return (
        <Modal>
            <Modal.Button>
                {(func) => <Avatar onClick={func} style={{cursor:'pointer'}}></Avatar>}
            </Modal.Button>
            <Modal.Content>
                <div className='profile-picture-box'>
                    <Avatar alt="Avatar"/>
                    <input type="file" onChange={handleChange} />
                    <button onClick={handleClick}>Upload</button>
                </div>
            </Modal.Content>
        </Modal>
    )
}

export default ProfilePicture