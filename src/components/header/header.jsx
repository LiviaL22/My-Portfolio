import Style from './header.module.css';
import { Link } from 'react-router-dom';

export default function header() {
    return(
        <>
        <div className={Style.navbar}>
            <Link to='/'>Home</Link>
            <Link to='/portfolio'>Portfolio</Link>
        </div>
        </>
    )
}