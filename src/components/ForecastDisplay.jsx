const ForecastDisplay = ({ location }) => {
    const loading = () => {
        return <h5>Loading...</h5>
    }
    const loaded = () => {
        return (
            <>
                <h1>{location.location.name}</h1>
            </>
        )
    }
    return location? loaded() : loading();
}
export default ForecastDisplay;