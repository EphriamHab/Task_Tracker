import {Link} from 'react-router'
const Footer =()=>{
    return(
        <footer>
           <p>Copyright &copy; 2023</p> 
           <Link to="/about">About</Link>
        </footer>
    );
}

export default Footer