import PropTypes from 'prop-types';
import './Card.css'
const Card = ({title,desc, image}) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <img src={image} alt='logo'/>
            <p>{desc}</p>
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};
Card.defaultProps={
    title: "",
    desc: ""
}
export default Card;