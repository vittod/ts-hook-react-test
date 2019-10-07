import React, { useReducer } from 'react';
import './testo.css';
import reducer from './reducer';
import { MyContext } from './context-service';

const TestoDos: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, {val: 0});

  return (
    <div className="my-seperator">
      
      <h3>this is another testo DOS</h3>

      <button onClick={() => dispatch({type: 'add'})}>
        click here to increase via reducer hook
      </button> 

      <div>
        {state.val} 
      </div>

      <button onClick={() => dispatch({type: 'sub'})}>
        click here to decrease via reducer hook
      </button> 

      <div>
        this is the MyContext contents in dos               
        <MyContext.Consumer>
          {value => ': ' + value}
        </MyContext.Consumer>
      </div>

    </div>
  );
};

export default TestoDos;
