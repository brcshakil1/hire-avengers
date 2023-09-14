
import { PropTypes } from 'prop-types';
const Cart = ({hero}) => {
    const {image, name} = hero;
    return (
        <div className="flex items-center gap-2 w-[200px] bg-gray-500 p-2 rounded-lg my-4">
            <img className="w-20 rounded-md" src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};
Cart.propTypes = {
    hero: PropTypes.object
}

export default Cart;