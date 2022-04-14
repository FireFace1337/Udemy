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
            ],
            term: ''
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
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item;
            })
        }))
    }

    searchStaff = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

   render() {
    const {data, term} = this.state;
    const staff = this.state.data.length;
    const increaseStaff = this.state.data.filter(item => item.increase === true).length;
    const visibleData = this.searchStaff(data, term);

    return (
        <div className="app">
            <AppInfo
            staff={staff}
            increaseStaff={increaseStaff}/>

            <div className="search-panel">
                <SearchPanel
                onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter/>
            </div>

            <StaffList 
            data={visibleData}
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