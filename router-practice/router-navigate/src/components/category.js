import { useNavigate } from 'react-router-dom';
function Category() {
    let navigate = useNavigate();
    const sendDatatoProduct = event => {
        navigate(`/product/${event.target.value}`)
    }
    return (
        <>
            <h2>Select Category</h2>
            <select defaultValue="default" onChange={e => sendDatatoProduct(e)}>
                <option value="default">choose your car</option>
                <option value="Honda">Honda</option>
                <option value="Honda">Honda</option>
                <option value="Yamaha">Yamaha</option>
            </select>
        </>
    )
}
export default Category