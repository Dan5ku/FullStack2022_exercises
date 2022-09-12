import "./Country.css";

const Country = (props) => {
    return (
        <div className="country">
            <p className="country__name">{props.countries.Name} </p>
            <p className="country__capital">{props.countries.Capital} </p>
        </div>
    )
}

export default Country;