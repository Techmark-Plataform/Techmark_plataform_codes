import styles from "./../css/Gallery.module.css"
import {Icon} from "@iconify/react"
import image1 from "./../img/Gallery/lanhouse.jpg";
import image2 from "./../img/Gallery/lanPlace2.jpg";
import image3 from "./../img/Gallery/lanPlace3.jpg";
import image4 from "./../img/Gallery/lanPlace4.webp";


let GalleryPicture = [{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
},{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
},{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
},{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
},{
    title : "Sala Principal",
    picture : "/static/media/lanhouse.ef43cb425316e622cd43.jpg",
    description : "Foto da sala principal da lanhouse do Emerson, contém 5 maquinas e 5 cadeiras..."
}]

export default function Gallery(){
    return(
        <div className={styles.GallerySection}>
            <h2 className={styles.Tittle}>Galeria</h2>
            <div className={styles.GalleryContent}>
                <div className={styles.GalleryPictures}>
                    <div className={styles.MainPicture}>
                        <h3>{GalleryPicture[0].title}</h3>
                        <div className={styles.MainPictureContent}>                          
                            <img src={image1} alt=""/>
                        </div>
                        <p>{GalleryPicture[0].description}</p>
                    </div>
                </div>
                <div className={styles.PicturesCollection}>
                    <div className={styles.Inputs}>
                        <Icon className={styles.Chevron} icon="charm:chevron-up" width="40px" />
                        <Icon className={styles.Chevron} icon="charm:chevron-down" width="40px"/>
                    </div>
                        <div className={styles.PicturesCollectionImages}>
                        {/* {GalleryPicture.map( (GalleryPicture) => {return <img src={GalleryPicture.picture} alt=""/>})} */}
                            <img src={image1} alt=""/>
                            <img src={image2} alt=""/>
                            <img src={image3} alt=""/>
                            <img src={image4} alt=""/>
                        </div>
                </div>
            </div>
            
        </div>
    )
}