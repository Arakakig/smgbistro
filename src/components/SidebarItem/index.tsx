import { Link } from 'react-router-dom';
import * as C from './styles';

type Props={
    title: string;
    path: string;
}

export const Sidebaritem =({ title, path }: Props) => {

    return (
        <C.Container>
            <Link to={path}>
                    <C.Title>{title}</C.Title>
            </Link>
        </C.Container>
    );
}