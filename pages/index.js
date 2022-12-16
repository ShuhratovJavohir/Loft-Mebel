import Link from 'next/link';
import Header from "../components/Header";
import Sort from '../components/sort';

export default function Home({products}){
	return (
		<div className='wrapper'>
			<Header />
			<Sort />
			<h1>Главная страница!</h1>
			<ul>
				{
					products.map(product =>
						<li key={product._id}>
							<Link href={`/product/${product._id}`}>
								{product.name}
							</Link>
						</li>
					)
				}
			</ul>
		</div>
	);
}

export async function getStaticProps(){
	const response = await fetch('http://localhost:3000/api/products')
	const products = await  response.json()

	return{props: {products}}
}


