import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src }) { /*Conceito de desestruturação: Pegamos um objeto {} e pegamos os valores que queremos dele, e se este objeto não tiver valor atribuido para essa propriedade, atribuimos algum valor padrão, como fizemos agora com o = true*/
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    );
}