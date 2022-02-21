import * as C from './style';
import {Theme} from '../../components/Theme';
import {Modal} from '../../components/ThemeModal';
import {ButtonProduct} from '../../components/ButtonProduct';
import {useState} from 'react';
import IPageProps from '../../interfaces/page';
import { collection, query, onSnapshot } from "firebase/firestore";
import {uniKey, db} from "../../config/firebase";


type Props={
    listData: ()=> void;
}
const FormStep1: React.FunctionComponent<IPageProps> = props => {


    const [isModalVisible, setIsModalVisible] = useState(false);

    const [list, setList] = useState([0,1]);
  
    const q = query(collection(db, "Products"));
    var rows = new Array;

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            rows.push(doc.data());
            // setList((list) => [...list, list[list.length - 1] + 1]);
        });
      });
    //   async function mapProducts(){
        //  const unsubscribe = onSnapshot(q, (querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         cities.push(doc.data());
        //     });
        //   });
        // var rows = new Array;
      
        // for (var i = 0; i < cities.length; i++) {
        //     rows.push(<p key={i}>{cities[i].name}</p>);
        // }
            // return (<div>{rows}</div>);
    // }

    
    
    return (
        <Theme>
            <C.Container>
                <h1>Lista de Produtos</h1>
                <C.Register>
                    <button className='modalButton' onClick={()=>setIsModalVisible(true)}>Cadastrar Produto</button>
                    {isModalVisible ? 
                    <Modal 
                        patch={"/"}
                        onClose={()=>setIsModalVisible(false)}
                        section={0}/>: null}
               </C.Register>
                <div>
                    {rows.map((number)=>(
                        <ButtonProduct
                            number={number}
                            onclick={()=>setIsModalVisible(true)}
                            />
                    ))}
                    {/* {cities.map((i) =>console.log("Ei"))} */}
                {/* {cities1.map((item,key)=>(
                   <p>Teste</p>
                ))} */}
                </div>
            </C.Container>
        </Theme>

    )
}

export default FormStep1;
