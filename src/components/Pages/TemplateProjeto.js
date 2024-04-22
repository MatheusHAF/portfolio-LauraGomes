import styles from "../styles_modules/TemplateProjeto.module.css"
function TemplateProjeto({ pacote }) {
    return (
        <div className={styles.projetocontainer}>
            alguma coisa {pacote.name}
            outra coisa {pacote.imgs.map((item, index) => (
                <div key={index}>
                    <img src={item.url} alt={`Capa ${item.alt}`} />
                </div>
            ))}
        </div>);
}
export default TemplateProjeto