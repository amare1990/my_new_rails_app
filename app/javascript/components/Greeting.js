import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomMessage } from '../redux/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.greeting.status);
  const message = useSelector((state) => state.greeting.message);

  useEffect(() => {
    if (!status !== "done") {
      dispatch(getRandomMessage());
    }
  }, []);

  return (

      <p className="random-message-text"> {message} </p>
  );
}

export default Greeting;
