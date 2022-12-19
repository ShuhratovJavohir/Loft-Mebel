import MainConteiner from "../../components/MainConteiner";
import ProductCard from "../../components/ProductCard";
import Image from 'next/image';

const Product = ({product}) => {
    return(
        <MainConteiner>
            <div className="productBlock">
                <div className="img">
                    <Image className="buyimg" src={product.img} />
                </div>
                <div className="productInfo">
                    <h1 className="productInfoName">{product.name}</h1>
                    <p className="productinfoType">{product.type}</p>
                    <div className="buy">
                        <h1>{product.price}₽</h1>
                        <button className="buyBtn">Купить</button>
                    </div>
                </div>
                <div className="buySubtitle">
                    <p>{product.subtitle}</p>
                </div>
            </div>
            <div className="infoBlock">
                <div className="infoName">
                    <p>Размер</p>
                    <p>Спальное место</p>
                    <p>Посадочное место</p>
                    <p>Каркас</p>
                    <p>Механизм</p>
                    <p>Материал ножек</p>
                    <p>Наполнение подушек</p>
                </div>
                <div className="infoNameRes">
                    <p>{product.size}</p>
                    <p>{product.sleepingArea}</p>
                    <p>{product.seat}</p>
                    <p>{product.frame}</p>
                    <p>{product.mechanism}</p>
                    <p>{product.legMaterial}</p>
                    <p>{product.pillowFilling}</p>
                </div>
            </div>
        </MainConteiner>
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