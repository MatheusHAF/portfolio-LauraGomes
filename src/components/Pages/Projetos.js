import data from '../../../src/db.json'
import styles from '../styles_modules/Projetos.module.css'
import Slider from './Slider'

function Projetos() {
    
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
                            <Slider filter={item.title}/>
                        </details>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Projetos