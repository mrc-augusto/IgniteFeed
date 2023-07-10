import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import {Trash, ThumbsUp} from 'phosphor-react';

interface CommentProps{
  content: string,
  onDeleteComment: (comment: string)=>void;
}

export function Comment({content, onDeleteComment}: CommentProps){

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment(){
    setLikeCount((state)=>{
      return state + 1;
    });
  }

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mrc-augusto.png" alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maurício Augusto</strong>
              <time
                title='28 de Junho às 15:18h' 
                dateTime='2023-06-29 15:18:00'>
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header> 
          <p>{content}</p> 
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}