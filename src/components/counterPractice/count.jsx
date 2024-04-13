import PropTypes from 'prop-types'
export default function Count(props){
    return(
        <div className="counter--count">
        <h1>{props.number}</h1>
    </div>
    )

}

Count.propTypes = {
    number: PropTypes.string.isRequired
}

