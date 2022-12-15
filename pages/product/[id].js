const Product = ({product}) => {
    return(
        <div>
            <h1>{product.name}</h1>
            <p>{product.type}</p>
            <p>{product.price}</p>
        </div>
    )
}

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:3000/api/products')
    const products = await  response.json()

    const paths = products.map(c => ({
        params: {id: c._id}
    }))
    return {paths, fallback: 'blocking'}
}

export const getStaticProps = async ({params}) => {
    const response = await fetch(`http://localhost:3000/api/products/${params.id}`)
    const product = await response.json()

    return{
        props: {
            product
        },
        revalidate: 10
    }
}

export default Product