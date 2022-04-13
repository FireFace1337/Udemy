import './app-info.css';

const AppInfo = ({staff, increaseStaff}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании Z</h1>
            <h2>Общее число сотрудников: {staff} </h2>
            <h2>Премию получат: {increaseStaff}</h2>
        </div>
    )
}

export default AppInfo;