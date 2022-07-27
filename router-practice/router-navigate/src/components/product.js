import { useParams } from "react-router-dom";

function Product() {
    let params = useParams();
    return (
        <div>
            <h3>ID selected {params.categoryId}</h3>
        </div>
    )
}
export default Product