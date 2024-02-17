import style from "./GridHome.module.css"

const GridHome = ({ images }) => {
    return ( 
        <div className={style.container}>
            {
                images.map((image, i) => (
                    <div key={i} className={style.imgContainer} >
                        <h4>{image.title}</h4>
                        <img className={style.images} src={image.img}/>
                    </div>
                ))
            }
        </div>
    );
}
 
export default GridHome;