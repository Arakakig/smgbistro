import * as C from './style';
import {FormStep1} from '../Modal/FormStep1';
import {FormStep2} from '../Modal/FormStep2';
type Props ={
    section: number;
    patch: string;
    onClose: ()=> void;
}
export const Modal = ({section,patch, onClose }: Props) =>{
    return(
        <C.Container>
            <div className="Modal">
                <button className="closeModal" onClick={onClose}>✖️</button>
                {patch === '/' &&
                <FormStep1 />
                }
                {patch === '/step2' &&
                <FormStep2/>
                }
            </div>
        </C.Container>
    )
}
