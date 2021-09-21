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
                {label: 'Going to learn React', important: true, liked: false, id: 1},
                {label: 'This is good', important: false, liked: false, id: 2},
                {label: 'I need a break...', important: false, liked: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.searchItems = this.searchItems.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.filterItems = this.filterItems.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

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
            };
        });
    }

    onChangeState(id, property) {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    const newItem = {...item} //клонируем item в локальной области вид-ти
                    if (item.id === id) {
                        newItem[property] = !newItem[property]; //меняем property на противоположное
                    }
                    return newItem; //обязательно вернуть новый item
                })
            }
        });
    }

    onToggleImportant(id) {
        this.onChangeState(id, 'important');
    }

    onToggleLiked(id) {
        this.onChangeState(id, 'liked');
    }

    searchItems(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterItems(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.liked);
        } else {
            return items;
        }
    }

    //обновляет состояния
    updateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const like = data.filter(item => item.liked).length;
        const total = data.length;

        const visiblePosts = this.filterItems(this.searchItems(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    total={total}
                    like={like}
                    />
                <div className="search-panel d-flex">
                    <SearchPanel
                        updateSearch={this.updateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}