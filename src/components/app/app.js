import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'This is good', important: false, id: 2},
                {label: 'I need a break...', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.currentId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const newData = data.filter(item => item.id !== id);
            return {
                data: newData
            }
        });
    }

    addItem(textValue) {
        const newItem = {
            label: textValue,
            important: false,
            id: this.currentId++,
        }

        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}