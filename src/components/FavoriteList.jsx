import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'

const FavoriteList = () => {
    const {favorites} = useContext(GlobalContext)

  return (
    <div>{favorites.map( favorite => <li>{favorite.title}</li>)}</div>
  )
}

export default FavoriteList