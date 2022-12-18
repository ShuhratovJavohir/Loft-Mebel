import Swiper from "../components/App";
import MainConteiner from "../components/MainConteiner";
import ProductCard from "../components/ProductCard";

export default function Home({products}){
	return (
		<MainConteiner>
			<Swiper />
			<p className='indexTitle'>Хиты продаж</p>
			<div className="product--grid">
				{
					products.map((items, id) =>(
						<ProductCard {...items}/>
					))
				}
			</div>
		</MainConteiner>
	);
}

export async function getStaticProps(){
	const response = await fetch('http://localhost:3000/api/products')
	const products = await  response.json()

	return{props: {products}}
}




