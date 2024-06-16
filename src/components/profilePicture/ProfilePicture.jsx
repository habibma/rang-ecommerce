import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import './profilePicture.scss'
import Avatar from '../avatar/Avatar'
import Modal from '../modal/index'
import Button from '../button/Button'
import FormInput from '../input/FormInput'
import { upload } from '../../api'

const ProfilePicture = () => {

    const currentUser = useAuth()
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState('idle')

    const handleChange = ({ target }) => {
        if (target.files[0]) {
            setPhoto(target.files[0])
        }
    }

    const handleClick = () => {
        upload(photo, currentUser, setLoading)
    }

    return (
        <Modal>
            <Modal.Button>
                {(func) => <Avatar onClick={func} style={{ cursor: 'pointer' }} src={currentUser.photoURL}></Avatar>}
            </Modal.Button>
            <Modal.Content>
                <div className='profile-picture-box'>
                    <Avatar alt="Avatar" src={currentUser.photoURL} />
                    <FormInput
                        id='file'
                        type="file"
                        label='Choose your photo'
                        className='file-input'
                        onChange={handleChange} />
                    <Button type='secondary' onClick={handleClick} disabled={loading !== 'idle' || !photo}>{loading === 'uploading' ? 'Uploading...' : 'Upload'}</Button>
                </div>
            </Modal.Content>
        </Modal>
    )
}

export default ProfilePicture