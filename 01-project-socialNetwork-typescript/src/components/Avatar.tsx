import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean; // ? infroma que é opcional
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { /*Conceito de desestruturação: Pegamos um objeto {} e pegamos os valores que queremos dele, e se este objeto não tiver valor atribuido para essa propriedade, atribuimos algum valor padrão, como fizemos agora com o = true*/
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    );
}