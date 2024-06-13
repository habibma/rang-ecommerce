import { memo } from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className='footer on-terracotta'>
                <small className="read-the-docs">
                    Coded by <a href='#'>Habib Mote</a>
                </small>
            </div>
        </footer>
    )
}

export default memo(Footer);