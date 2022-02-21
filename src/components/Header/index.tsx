import * as C from './style'
import { Link } from 'react-router-dom';

export const Header = () =>{

    return(
        <C.Container>
            <h1>SMG BISTRO</h1>
            <C.LogOut>
               <p> Click <Link to='/logout'>here</Link> to logout.</p> 
            </C.LogOut>
           
        </C.Container>
    )
}