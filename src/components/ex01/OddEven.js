import React from 'react';

const getContent = (num) => {
    if(num % 2 === 0) {
        return <h1>EVEN</h1>
    } else {
        return <h1>ODD</h1>
    }
}
const OddEven = ({num}) => {

    return (
        <div>
            {getContent(num)}
        </div>
    );
};

export default OddEven;