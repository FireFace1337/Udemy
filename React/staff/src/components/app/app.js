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
                {name: 'Max Lavrov', salary: 800, increase: true, id: 1},
                {name: 'Alex Ronaldo', salary: 3000, increase: false, id: 2},
                {name: 'Leonid Messi', salary: 15000, increase: true, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            // return {
            //     data: newArr
            // }

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
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // valueSubmit = (e) => {
    //     this.setState(({data}) => {
    //         return {
    //             data: data.concat([{name: e.name, salary: e.salary, increase: false, id: this.maxId++}]) 
    //         }
    //     })
    // }



   render() {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <StaffList 
            data={this.state.data}
            onDelete={this.deleteItem}
            />
            <StaffAddForm onAdd={this.addItem}/>
        </div>
    );
   }
}

export default App;