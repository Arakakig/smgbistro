import * as C from './style';
import { doc, setDoc} from "firebase/firestore"
import {uniKey, db} from "../../../config/firebase"
import { ChangeEvent } from 'react';
import {useForm, FormActions} from '../../contexts/FormContext';


export const FormStep1 = () =>{
    const {state, dispatch} = useForm();

    const handleNameChange =(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:FormActions.setName, 
            payload: e.target.value
        });
    }
    const handleCodeChange =(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:FormActions.setCode, 
            payload: e.target.value
        });
    }
    const handlePriceChange =(e:ChangeEvent<HTMLInputElement>)=>{
        var y: number = +e.target.value;
        if(y>=0){
            dispatch({
                type:FormActions.setPrice, 
                payload: e.target.value
            });
        }
       
    }

    async function addData() {
        try {
            if(state.id!==''){
                state.id = uniKey();
            }else{
                state.id = uniKey();
            }
            const docRef = await setDoc(doc(db, "Products", state.id), {
                code: state.code,
                name: state.name,
                price: state.price,
                uid: state.uid,
                id: state.id,
            });
            dispatch({
                type:FormActions.setName,
                payload: '',
            })
            dispatch({
                type:FormActions.setCode,
                payload: '',
            })
            dispatch({
                type:FormActions.setId,
                payload:'',
            })
            dispatch({
                type:FormActions.setPrice,
                payload:0,
            })

          } catch (e) {
            console.error("Error adding document: ", e);
          }
        // await setDoc(doc(db, "Products", dataProduct), dataProduct);
    }
  
    
    return (
            <C.Container>

               <h1>Dados do Produto</h1>
               <p className='Subtitle'>Preencha os campo abaixo com os dados do produto.</p>
               <hr/>

               <label>
                    <p> Nome do produto: </p> 
                   <input 
                   type="text" 
                   autoFocus 
                   value={state.name}
                   onChange={handleNameChange}
                   />
               </label>
               <div className='Cod-Price'>
                    <label>
                       <p>Codigo do Produto:</p> 
                        <input 
                         type="text" 
                         value={state.code}
                         onChange={handleCodeChange}
                        />
                    </label>
                    <label>
                        <p>Preço: </p> 
                        <input 
                        type="number" 
                        value={state.price}
                        onChange={handlePriceChange}
                        />
                    </label>
               </div>
               <div className='Finals-Button'>
                <button className='Delete-Button'> Deletar</button>

                <button className='Save-Button' onClick={addData}> Salvar</button>
               </div>
            </C.Container>

    )
}