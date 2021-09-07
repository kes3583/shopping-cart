import React from 'react';

const Backdrop = ({show, onToggleDrawer}) => {
    return show && <div className="backdrop" onClick={onToggleDrawer}></div>
}

export { Backdrop };