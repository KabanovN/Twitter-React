import { Component } from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
    render() {
        const {
            label,
            onDelete,
            onToggleLiked,
            onToggleImportant,
            important,
            liked,
        } = this.props;

        let wrapperClass = 'app-list-item d-flex justify-content-between';

        if (important) {
            wrapperClass += ' important';
        }

        if (liked) {
            wrapperClass += ' like';
        }

        return (
            <div className={wrapperClass}>
                <span className='app-list-item-label' onClick={onToggleLiked}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        className='btn-star btn-sm'
                        onClick={onToggleImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button className='btn-trash btn-sm' onClick={onDelete}>
                        <i className='fa fa-trash'></i>
                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            </div>
        );
    }
}
