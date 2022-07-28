import { useNavigate } from "react-router-dom";
const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
];
function Employees() {
    const navigate = useNavigate();
    const employeelist = () => {
        return (
            employees.map((employee, index) => {
                return (
                    <tr key={index}>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.id}</td>
                        <td>
                            <button onClick={() => {navigate('/employeedetail',
                                {
                                    state: {
                                        name: employee.name,
                                        age: employee.age,
                                        id: employee.id
                                    }
                                }
                            )}}>Detail</button>
                        </td>
                    </tr>
                )
            })
        )
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>ID</th>
                    <th>Button</th>
                </tr>
            </thead>
            <tbody>
                {employeelist()}
            </tbody>
        </table>
    )
}
export default Employees