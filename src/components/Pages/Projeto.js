// Projeto.js
import styles from "../styles_modules/Projeto.module.css"
import { useParams } from "react-router-dom";

function Projeto() {
    // Função para importar todas as imagens de uma pasta dinamicamente
    function importAllImages(folderPath) {
        console.log('folderpath: ',folderPath)
        // let images = {};
        // const requireContext = require.context(
        //     `${folderPath}`,
        //     false,
        //     /\.(png|jpe?g|svg)$/
        // );
        // requireContext.keys().forEach(filename => {
        //     const imageName = filename.replace('./', '');
        //     images[imageName] = requireContext(filename);
        // });
       // return images;
    }
    //pegando o GET da pag
    const { id } = useParams();

    // Construir o caminho da pasta dinamicamente
    const string = id.split('-');
    const folderPath = `../../images/${string[0]}/${string[1]}`;
    // Importar todas as imagens da pasta dinamicamente
    const imagens = importAllImages(folderPath);
    console.log(imagens)

    return (
        // Object.keys(imagens).map(imageName => (
        //     <img key={imageName} src={imagens[imageName].default} alt={imageName} />
        //   ))
        <h1>ALGO</h1>
    );

}

export default Projeto;
