import data from '../../../src/db.json'
import styles from '../styles_modules/Projetos.module.css'
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
                            <div></div>
                        </details>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Projetos