function DisplayErrors(error){
    let abc = error
    if(error){
        return (
            <p style={{color: 'red'}}>{abc}</p>
        )
    }
}
export default DisplayErrors