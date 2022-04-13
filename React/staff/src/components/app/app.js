import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Max Lavrov', salary: 800, increase: true, like: true, id: 1},
                {name: 'Alex Ronaldo', salary: 3000, increase: false, like: false, id: 2},
                {name: 'Leonid Messi', salary: 15000, increase: true, like: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleLike = (id) => {
        console.log(`Like this ${id}`);
    }

   render() {
    const staff = this.state.data.length;
    const increaseStaff = this.state.data.filter(item => item.increase === true).length;
    return (
        <div className="app">
            <AppInfo
            staff={staff}
            increaseStaff={increaseStaff}/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <StaffList 
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleLike={this.onToggleLike}
            />
            <StaffAddForm onAdd={this.addItem}/>
        </div>
    );
   }
}

export default App;