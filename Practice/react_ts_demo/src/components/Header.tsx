import { type ReactNode } from "react";

// type Image ={
//     src: string;
//     alt: string;
// }


interface HeaderProps {
    // image: Image;
    image:{
        src: string;
        alt:string;
    }
    children: ReactNode;
}

export default function Header ({ image , children }: HeaderProps) {
    return(
             <header>
                <img {...image} />
                {/* <img src={image.src} alt={image.alt} />     */}
                 {children}
             </header>

    );
}
