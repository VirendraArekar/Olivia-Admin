import { MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './style.css'
export default function Button(props){
    const {title, bgColor = 'bg-[#3D5890]', size ='py-2 px-10', shadow='drop-shadow-lg', type = 'button', inverse = false, className = "", element="button", to = '#'} = props
     
    return(
        <>
         {
            element === 'button' ?
            <button className={`${!inverse ? 'text-white' : 'text-blue-800'} border border-blue-800 text-sm rounded 
                            ${size} ${!inverse ? bgColor : 'bg[#FFFFFF]'} ${shadow} ${className}` } type={type} {...props}>
            {title}
            </button>
            :
            <Link to={to} className={`${!inverse ? 'text-white' : 'text-blue-800'} border border-blue-800 text-sm rounded 
                            ${size} ${!inverse ? bgColor : 'bg[#FFFFFF]'} ${shadow} ${className}` } type={type} {...props}>
            {title}
            </Link>
         }
        </>
        
    )
}