// Context, Reducer, Provider, Hook
import {createContext, ReactNode, useContext, useReducer} from 'react';

type FormProviderProps ={
    children: ReactNode
}
type State={
    name: string;
    code: string;
    price: number;
    uid: string;
    id: string;
    description: string;
}
type Action ={
    type: FormActions;
    payload: any;
};

type ContextType = {
    state: State;
    dispatch: (action:Action)=> void;
}

const initialData: State = {
    name: '',
    code: '',
    price: 0,
    uid: '',
    id: '',
    description: '',
}

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions{
    setName,
    setCode,
    setPrice,
    setUid,
    setId,
    setDescription
}
const formReducer = (state: State, action: Action) =>{
    switch(action.type){
      
        case FormActions.setName:
            return{...state, name: action.payload};
        case FormActions.setCode:
             return{...state, code: action.payload};
        case FormActions.setPrice:
            return{...state, price: action.payload};
        case FormActions.setUid:
            return{...state, uid: action.payload};
        case FormActions.setId:
            return{...state, id: action.payload};
        case FormActions.setDescription:
            return{...state, description: action.payload};
        default:
            return state; 
    }
}

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state, dispatch};
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Context Hook
export const useForm = () =>{
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}
