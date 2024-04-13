import data from '../../../src/db.json'
import styles from '../styles_modules/Projetos.module.css'

import img1 from '../../images/TEATRO/OKUTÁ/00 capa.jpg'
import img2 from '../../images/TEATRO/TRAGÉDIA DO REI CRISTOPHE/DSCF5179.jpg'
import img3 from '../../images/TEATRO/UMA NOITE/00 CAPA.jpg'
function Projetos() {
    const dbimgs = [
        {title:'Okuta',image: {img1}},
        {title:'Uma Noite',image: {img1}},
        {title:'Cristhope',image: {img1}},
    ]
    return (
        <>
            <div className={styles.container}>
            <h1>Projetos</h1>
                <div className={styles.div_projs}>
                    {data.projetos.map((item, index) => (
                        <details key={index}>
                            <summary> {item.title}</summary>
                            <p>
                                <h4>{item.subtitle}</h4>
                                {item.desc}
                            </p>
                            <div className={styles.card}>
                                <img src={img1} alt="" />
                                <p>Titulo</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Projetos