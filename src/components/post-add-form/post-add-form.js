import React, {Component} from "react";

import './post-add-form.css';

export default class PostAddForm extends Component {
    render() {
        return (
            <div className="bottom-panel d-flex">
                <input
                    className="form-control new-post-label"
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                />
                <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    onClick={() => this.props.onAdd('Hello')}>
                    Добавить
                </button>
            </div>
        )
    }
}