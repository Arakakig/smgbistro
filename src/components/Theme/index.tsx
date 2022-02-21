import { ReactNode } from 'react';
import * as C from './styles';
import {Header} from '../Header';
import {Sidebaritem} from '../SidebarItem';



type Props ={
    children: ReactNode;
}
export const Theme = ({children}: Props) =>{

    return(
        <C.Container>
            <C.Area>
                <Header/>
                    <C.Steps>
                        <C.Sidebar>
                            <Sidebaritem
                                title= "Lista dos Produtos"
                                path="/"
                            />

                            <Sidebaritem
                                title= "Lista de Receitas"
                                path="/step1"
                            />

                        </C.Sidebar>
                        <C.Page>
                            {children}
                        </C.Page>
                    </C.Steps>
            </C.Area>
        </C.Container>
    );
}