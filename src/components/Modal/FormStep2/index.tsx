import * as C from './style';
import { doc, setDoc} from "firebase/firestore"
import {uniKey, db} from "../../../config/firebase"
import { ChangeEvent } from 'react';
import {useForm, FormActions} from '../../contexts/FormContext';

export const FormStep2 = () =>{
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

    const handleDescriptionChange =(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
            dispatch({
                type:FormActions.setDescription, 
                payload: e.target.value
            });
       
    }

    async function addData() {
        try {
            if(state.id!==''){
                state.id = uniKey();
            }else{
                state.id = uniKey();
            }
            const docRef = await setDoc(doc(db, "Recipes ", state.id), {
                code: state.code,
                name: state.name,
                description: state.description,
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
                type:FormActions.setDescription,
                payload:'',
            })

          } catch (e) {
            console.error("Error adding document: ", e);
          }
        // await setDoc(doc(db, "Products", dataProduct), dataProduct);
    }
  
    
    return (
            <C.Container>

               <h1>Dados da Receita</h1>
               <p className='Subtitle'>Preencha os campo abaixo com os dados da Receita.</p>
               <hr/>

               <label>
                    <p> Nome da Receita: </p> 
                   <input 
                   type="text" 
                   autoFocus 
                   value={state.name}
                   onChange={handleNameChange}
                   />
               </label>
               <label>
                    <p> Descrição da Receita: </p> 
                   <textarea 
                   className='Description'
                   value={state.description}
                   onChange={handleDescriptionChange}
                   />
               </label>
                    <label>
                       <p>Codigo da Receita:</p> 
                        <input 
                         type="text" 
                         value={state.code}
                         onChange={handleCodeChange}
                        />
                    </label>
                  
               <div className='Finals-Button'>
                <button className='Delete-Button'> Deletar</button>

                <button className='Save-Button' onClick={addData}> Salvar</button>
               </div>
            </C.Container>

    )
}