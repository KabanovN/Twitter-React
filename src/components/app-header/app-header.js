import React from "react";

import './app-header.css';

const AppHeader = ({total, like}) => {
    return (
        <div className="app-header d-flex">
            <h1>Kabanov Nikita</h1>
            <h2>{total} записей, из них понравилось {like}</h2>
        </div>
    )
}

export default AppHeader;