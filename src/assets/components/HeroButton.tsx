import '../../App.css'
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

const HeroButton = ({ children }: Props) => {
    return(
        <>
            <button>{children}</button>
        </>
    )
}

export default HeroButton