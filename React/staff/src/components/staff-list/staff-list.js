import StaffListItem from "../staff-list-item/staff-list-item";

import './staff-list.css';

const StaffList = ({data}) => {

    const elements = data.map(item => {
        return (
            // <StaffListItem name={item.name} salary={item.salary} />
            <StaffListItem {...item} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
            {/* <StaffListItem name="Max Lavrov" salary={800}/>
            <StaffListItem name="Alex Ronaldo" salary={3000}/>
            <StaffListItem name="Leonid Messi" salary={5000}/> */}
        </ul>
    )
}

export default StaffList;