import { NavLink, useParams } from 'react-router-dom';
import style from './Detalles.module.css';
import { useEffect, useState } from 'react';
import { products } from '../../../JSON/index';

const Detalles = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const selectedProduct = products.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
    }, [id])

    if (!product) {
        return (
            <div className={style.container}>
                <NavLink to={'/productos'}>
                    <button>Back</button>
                </NavLink>
                <h1>Loading...</h1>
            </div>
        )
    }

    const { name, price, description, image } = product;

    return (
        <div className={style.container}>
            <div>
                <NavLink 
                    to={'/productos'}
                    className={style.navLink}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"></path>
                            <path d="M8 12l4 4"></path>
                            <path d="M8 12h8"></path>
                            <path d="M12 8l-4 4"></path>
                    </svg>
                </NavLink>
            </div>

            <div className={style.product}>
                <div className={`${style.imgContainer} ${style.shadowImg}`}>
                    <img  src={image}/>
                </div>

                <div className={`${style.info} ${style.shadowInfo}`}>
                    <div className={style.name}>
                        <h1>{name}</h1>
                    </div>

                    <div className={style.price}>
                        <h2>{price}</h2>
                    </div>

                    <div className={style.description}>
                        Descripción:
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Detalles;