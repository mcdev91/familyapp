import React, { Component } from "react";
import ShopingListItems from "./ShopingListItems";
import "./ShopingList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        // const { name } = this.props
        return (
            <div className="todoListMain">
                <h3>Shoping List</h3>
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => this._inputElement = a}
                            placeholder='add task'
                        />
                        <button type="submit">add</button>
                    </form>
                </div>
                <ShopingListItems
                    entries={this.state.items}
                    delete={this.deleteItem}
                />
            </div>
        );
    }
}

export default TodoList;