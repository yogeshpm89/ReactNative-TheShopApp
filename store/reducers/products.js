import PRODUCTS from '../../data/mock-data';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
}

const ProductReducer = (state = initialState, action) => {
    return state;
}

export default ProductReducer;