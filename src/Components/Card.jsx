import PropTypes from 'prop-types';

const Card = ({ children ,bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      
      {children}
    </div>
  )
}
// Define prop types
Card.propTypes = {
    children: PropTypes.node.isRequired,
    bg:PropTypes.string,
    // or PropTypes.element
 }
export default Card
