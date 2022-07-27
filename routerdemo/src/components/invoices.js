import { Link } from 'react-router-dom'
function Invoices() {
    let abc  = 100;
    return (
        <div>
            <h1>
                Invoices page
            </h1>
            <Link to={`/invoices/${abc}`}>ID: {abc}</Link>
        </div>
    )
}
export default Invoices