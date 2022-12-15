import Link from 'next/link'

export default function Home({product}){
	console.log(product)
	return (
		<div>
			<h1>Главная страница!</h1>
			<ul>
				<li>
					<Link href="/about">
						о нас
					</Link>
				</li>
				<li>
					<Link href="/catalog">
						каталог
					</Link>
				</li>
			</ul>
		</div>
	);
}

export async function getStaticProps(){
	const response = await fetch('http://localhost:3000/api/products')
	const product = await  response.json()

	return{
		props: {
			product
		}
	}
}


