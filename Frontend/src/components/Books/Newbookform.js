import { useRef} from 'react';
// import * as ReactDOMClient from 'react-dom/client';

import Card from '../UserInterface/Card';
import classes from './Newbookform.module.css';

function Newbookform(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const bookData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };

    props.OnAddBook(bookData);
}
  
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Book Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Book Image</label>
          <input type='url' required id='image'  ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionInputRef} ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Book</button>
        </div>
      </form>
    </Card>
  );
}

export default Newbookform;