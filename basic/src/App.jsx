import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, minusNumber } from './redux/modules/counter';

const App = () => {
  const globalNumber = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const onChangeHandler = (event) => {
    setNumber(event.target.value);
  };
  const onClickAddNumberHandler = () => {
    return dispatch(addNumber(number));
  };
  const onClickMinusNumberHandler = () => {
    return dispatch(minusNumber(number));
  };
  console.log(number);
  return (
    <div>
      {globalNumber}
      <input value={number} onChange={onChangeHandler} type='text' />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
