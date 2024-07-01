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
    const [photo, setPhoto] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('idle')

    const handleChange = ({ target }) => {
        console.log(target.files[0])

        if (!(target.files[0].type === 'image/jpeg' || target.files[0].type === 'image/jpg' || target.files[0].type === 'image/png')) {
            setError("The chosed file is not valid as type")
        }

        if (target.files[0].size > 1000000) {
            setError('The size should be under 1 mgbyte')
        }

        else if (target.files[0]) {
            setError("")
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
                        accept=".png, .jpg, .jpeg"
                        label='Choose your Photo'
                        className='file-input'
                        onChange={handleChange}

                    />
                    {error ?
                        <p className='error'>{error}</p>
                        :
                        <p className='info'>{photo?.name || 'Supported files: jpeg, jpg, png'}</p>
                    }
                    <Button type='secondary' onClick={handleClick} disabled={loading !== 'idle' || !photo}>{loading === 'uploading' ? 'Uploading...' : 'Upload'}</Button>
                </div>
            </Modal.Content>
        </Modal>
    )
}

export default ProfilePicture