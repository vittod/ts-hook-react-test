import React, { useState } from 'react';
import './testo.css';
import { MyContext } from './context-service';

interface TestoUnoProps { 
  changeContext: (arg0: string) => void;
  setShowTres: (arg: boolean) => void;
  showTres: boolean;
}

const TestoUno: React.FC<TestoUnoProps> = (props) => {
  const [ctxChangeText, setCtxChangeText] = useState('');

  const handleInput = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    console.log('event ', e.target.value);
    setCtxChangeText(e.target.value);
  };

  const handleForm = (e: {preventDefault: () => void}) => {
    e.preventDefault();
  };

  return (
    <div className="my-seperator">
      <h3>this is a testo UNO</h3>

      <div>
        {props.children}
      </div>
      <form onSubmit={handleForm}>
        <input type="text" name="context-change-text" onChange={(handleInput)} />
        <button
          onClick={() => props.changeContext(ctxChangeText)}
        >
          this is a context button
        </button>
      </form>
      <div>
        this is the ctxChangeText in uno {' ' + ctxChangeText}
      </div>
      <div>
        this is the MyContext contents in uno
        <MyContext.Consumer>
          {value => ': ' + value}
        </MyContext.Consumer>
      </div>
      <div className="my-seperator">
        <button
          onClick={() => props.setShowTres(!props.showTres)}
        >
          {props.showTres && 'hide TRES' || 'show TRES'}
        </button>
      </div>
    </div>
  );
};

export default TestoUno;
