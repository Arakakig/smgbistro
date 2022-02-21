import * as C from './style';
import {Theme} from '../../components/Theme';
import {Modal} from '../../components/ThemeModal';
import {useState} from 'react';
import IPageProps from '../../interfaces/page';


type Props={
    listData: ()=> void;
}
const FormStep2: React.FunctionComponent<IPageProps> = props => {


    const [isModalVisible, setIsModalVisible] = useState(false);
   
   
    return (
        <Theme>
            <C.Container>
                {   }
                <C.Register>
                    <button className='modalButton' onClick={()=>setIsModalVisible(true)}>Open Modal</button>
                    {isModalVisible ? 
                    <Modal 
                        patch={"/step2"}
                        onClose={()=>setIsModalVisible(false)}
                    section={0}/>: null}
               </C.Register>
            </C.Container>
        </Theme>

    )
}
export default FormStep2;
