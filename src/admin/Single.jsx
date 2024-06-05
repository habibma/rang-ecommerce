import React from 'react'
import user from '../assets/imgs/user.png'

const Single = ({ id, img, title, info, activities }) => {

  return (
    <div className='single-component'>
      <div className="view">
        <div className="info">
          <div className="top-info">
            <img src={img || user} />
            {title && <h2>{title}</h2>}
            <button>Update</button>
          </div>
          <div className="details">
            {info && Object.entries(info).map(item => (
              <div className="item" key={item[0]} aria-label={item[0]}>
                <div className="item-title">{item[0]}:</div>
                <div className="item-value">{item[1]}</div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="chart"></div>
      </div>
      <div className="activities">
        <h3>Latest Activities</h3>
        {activities && <ul>
          {activities.map((activity, index) => (<li key={index}>
            <div>
              <p>{activity.text}</p>
              <time>{activity.time}</time>
            </div>
          </li>))}
        </ul>}
      </div>
    </div>
  )
}

export default Single