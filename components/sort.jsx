import React, {useState} from "react";
import Link from 'next/Link';
import Image from 'next/image';
import kitchen from '../app/img/sort/kitchen-icon.svg';
import {sortData} from '../app/utils/sortData'


const Sort = () => {
    return(
        <div className='sort'>
            <ul className='sortList'>
                {
                    sortData.map((items, id) =>(
                        <Link href={'/'} key={id}><li className='sortItems' ><Image className='sortItemsImg' src={items.img} alt={items.type}/>{items.name}</li></Link>
                    ))
                }
                <li className='sortItems stock'>Акция</li>
                <div className="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </ul>
        </div>
    )
}

export default Sort;