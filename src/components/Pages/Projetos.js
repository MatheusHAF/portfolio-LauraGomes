import data from '../../../src/db.json'
console.log(data)
function Projetos() {
    return (
        <div>
            <h1>Projetos</h1>
            <div>
            {data.projetos.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <h4>{item.subtitle}</h4>
                    <p>{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
    );
}
export default Projetos