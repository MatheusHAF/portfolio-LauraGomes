import data from '../../../src/db.json'
import styles from '../styles_modules/Projetos.module.css'
console.log(data)
function Projetos() {
    return (
        <div className={styles.container}>
            <h1>Projetos</h1>

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
    );
}
export default Projetos