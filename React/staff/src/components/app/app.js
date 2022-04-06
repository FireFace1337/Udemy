import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Max Lavrov', salary: 800, increase: true, id: 1},
        {name: 'Alex Ronaldo', salary: 3000, increase: false, id: 2},
        {name: 'Leonid Messi', salary: 15000, increase: true, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <StaffList data={data}/>
            <StaffAddForm/>
        </div>
    );
}

export default App;