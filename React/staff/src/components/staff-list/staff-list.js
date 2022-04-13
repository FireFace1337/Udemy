import StaffListItem from "../staff-list-item/staff-list-item";

import './staff-list.css';

const StaffList = ({data, onDelete, onToggleLike, onToggleIncrease}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <StaffListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleLike={() => onToggleLike(id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default StaffList;