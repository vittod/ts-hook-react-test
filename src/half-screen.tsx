import React, {ReactChild} from 'react';
import './half-screen.css';

const HalfScreen: React.FC<{children: ReactChild[]}> = (props) => {

    return (
        <div className="flex-half">
            {props.children}
        </div>
    );
};

export default HalfScreen;
