const ProductItems = ({product}) => {
    return(
        <div>
            <h1>Товар: {product.name}</h1>
            <p>Тип: {product.type}</p>
            <p>Цена: {product.price}</p>
        </div>
    )
}

export default ProductItems;