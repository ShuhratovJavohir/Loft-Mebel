import MainConteiner from "../components/MainConteiner";
import ProductCard from "../components/ProductCard";

const Catalog = ({products}) => {
    return(
        <MainConteiner>
            <div className="product--grid">
                {
                    products.map((items, id) =>(
                        <ProductCard {...items}/>
                    ))
                }
            </div>
        </MainConteiner>
    )
}

export default Catalog;

export async function getStaticProps(){
    const response = await fetch('http://localhost:3000/api/products')
    const products = await  response.json()

    return{props: {products}}
}