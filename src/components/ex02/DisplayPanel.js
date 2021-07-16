import React from 'react';

const style = {
    backgroundColor: "blue",
    height: '15vh',
}

const DisplayPanel = ({num}) => {
    return (
        <div style={style}>
            <h2>Display Panel {num}</h2>
        </div>
    );
};

export default DisplayPanel;