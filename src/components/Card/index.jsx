import './style.css';
import {FaRegUserCircle} from 'react-icons/fa';
import {ImUserCheck} from 'react-icons/im';
import {BsPhone} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {GiPlasticDuck} from 'react-icons/gi';

const Card = ({card}) => {
    return(
        <div className='card-container'>
            <h6><GiPlasticDuck style={{color:'yellow'}}/> {card.userName}</h6>
            <p><ImUserCheck/> User: {card.userName}</p>
            <p><FaRegUserCircle/> Name: {card.fullName}</p>
            <p><BsPhone/> Cell: {card.cellphone}</p>
            <p><HiOutlineMail/> Email: {card.email}</p>
        </div>
    )
}

export default Card;