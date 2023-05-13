import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post legal'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { // Apas duplas em volta do todo para podermos utilizar as aspas simples no meio da string e isolar as palavras que nós queremos dentro da string data.
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, 
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault(); //Evita o recarregamento da página ao enviar o formulário

        setComments([...comments, newCommentText]); // ...comments lê o conteúdo de comments e a segunda coisa adiciona um comentário na última posição do vetor
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity(''); // Para informar ao JS que não está mais com erro
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => { // Filter retira da lista se for = false e mantém na lista se for = true
            return comment !== commentToDelete; // Fazendo isso nós removemos da lista apenas quando for = true
        })

        /**
         * Atribuímos para comments o valor de commentsWithoutDeletedOne pois ele contém exatamente o mesmo valor de comments anteriormente, apenas sem o comentário deletado.
         * Em react nós sempre criamos um novo valor para a variável ao invés de pega o valor antigo e atualizar uma parte
         * Isso se dá devido ao conceito de imutabilidade que temos.
         * Devido isso o React se torna mais performático.
        */

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarURL} />
                    <div className={styles.authorInfo}>
                        <strong> {author.name} </strong>
                        <span> {author.role} </span>
                    </div>
                </div>

                <time title={ publishedDateFormatted } dateTime={publishedAt.toISOString()}> 
                    { publishedDateRelativeToNow }
                </time>
            </header>

            <div className={styles.content}>
                { content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}> {line.content} </p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}> <a href=""> {line.content} </a> </p>;
                    }
                }) }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Deixe seu feedback </strong>

                <textarea
                    name = 'comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}> 
                        Publicar 
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                { comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                }) }
            </div>
        </article>
    );
}