import { useState } from 'react';
import Loader from '../loader/Loader';
import classes from './comment-list.module.css';

function CommentList(props) {

  const { items } = props;

  const [commentsList ,setCommentsList] = useState();

  if(items.length === 0) {
    return (
      <Loader/>
    )
  }

  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
