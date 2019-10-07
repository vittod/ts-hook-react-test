import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from './context-service';
import './testo.css';

const TestoTres: React.FC<{changeContext: (arg: string) => void}> = (props) => {

  const [time, setTime] = useState(new Date());
  const [nuCtx, setNuCtx] = useState('');
  const myContext = useContext(MyContext);

  useEffect(() => {
    const timer: number = window.setTimeout(() => setTime(new Date()), 1000);
    console.log(timer);
    return () => clearTimeout(timer);
  }, [time]);

  const handleInput = (e: { target: { value: React.SetStateAction<string> }}) => {
    setNuCtx(e.target.value);
  };
  
  const handleForm = (e: {preventDefault: () => void}) => {
    e.preventDefault();
  };

  return (
    <div className="my-seperator">

      <h3>this is another testo TRES</h3>

      <div className="my-seperator">
        {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
      </div>

      <div>
        This is context in tres via hook
        {myContext}
      </div>

      <div>
        <form onSubmit={handleForm}>
          <input type="text" name="context-change-text" onChange={(handleInput)} />
          <button
            onClick={() => props.changeContext(nuCtx)}
          >
            this is a context button
          </button>
        </form>
      </div>

    </div>
  );
};

export default TestoTres;
