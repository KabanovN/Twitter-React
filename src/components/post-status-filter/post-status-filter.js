import React, { Component } from 'react';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'all', label: 'Все' },
            { name: 'like', label: 'Понравилось' },
        ];
    }

    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const { filter, onFilterSelect } = this.props;
            //активный класс в зависимости от фильтра
            const active =
                filter === name ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    className={`btn ${active}`}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            );
        });
        return <div className='btn-group'>{buttons}</div>;
    }
}
