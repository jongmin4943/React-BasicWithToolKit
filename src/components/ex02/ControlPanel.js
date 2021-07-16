import React from 'react';

const ControlPanel = ({change}) => {
    return (
        <div>
            <h2>Control Panel</h2>
            <div>
                <button onClick={change}>CLICK</button>
            </div>
        </div>
    );
};

export default ControlPanel;