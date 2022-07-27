import { useParams } from "react-router-dom";

function InvoiceComponents() {
    let params = useParams();
    return (
        <div>
            <h2>Invoice comp</h2>
            <p>Invoice: {params.abc}</p>
        </div>
    )
}
export default InvoiceComponents