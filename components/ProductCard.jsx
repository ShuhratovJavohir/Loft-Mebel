import Link from "next/link";
import Image from "next/image";

const ProductCard = ({name, type, price, _id, img}) => {
    return(
        <div className='card'>
            <Link href={`/product/${_id}`}>
                {/*<svg className='cardSvg' width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <path d="M2.29442 8.54442L9.75 16L17.2056 8.54442C18.0344 7.71562 18.5 6.59152 18.5 5.41942C18.5 2.97864 16.5214 1 14.0806 1C12.9085 1 11.7844 1.46562 10.9556 2.29442L9.75 3.5L8.54442 2.29442C7.71562 1.46562 6.59152 1 5.41942 1C2.97864 1 1 2.97864 1 5.41942C1 6.59152 1.46561 7.71561 2.29442 8.54442Z" stroke="black" stroke-linejoin="round"/>*/}
                {/*</svg>*/}
                <Image className="cardimg" src={img}/>
                <h3 className="cardName">{name}</h3>
                <p className="cardType">{type}</p>
                <p className="cardPrice">{price}₽</p>
            </Link>
        </div>
    )
}

export default ProductCard;


