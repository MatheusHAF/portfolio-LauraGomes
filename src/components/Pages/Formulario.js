import { useState } from "react"
import styles from "../styles_modules/Formulario.module.css"
import emailjs from "@emailjs/browser"


function Formulario() {
    const [name,setName] = useState('')
    const [assunto,setAssunto] = useState('')
    const [email,setEmail] = useState('')
    const [msg,setMsg] = useState('')

    function sendEmail(e) {
        if (name === ''| email === ''| assunto === '' | msg === '') {
            alert('Erro: Digite todos os campos')
            return;
        }
        const templateParams = {
            from_name: name,
            message: msg,
            assunto: assunto,
            email: email,
        }
        emailjs.send('service_1huoh5c','template_ffok2e2',templateParams,'8rTtQx4DOl8bwgztw')
        .then((response)=>{
            console.log("Email Enviado",response.status,response.text)
            setName('')
            setAssunto('')
            setEmail('')
            setMsg('')
        },(err)=>{
            console.log("Erro: ",err)
        })
    }

    return (
        <form onSubmit={sendEmail}>
            <nav>
                <label>Nome: </label>
                <input type="text" 
                placeholder="Digite seu nome"
                className={styles.iptform} 
                value={name} onChange={(e) => setName(e.target.value)} />
            </nav>
            <nav>
                <label>Assunto: </label>
                <input type="text"
                placeholder="Digite o assunto"
                className={styles.iptform} 
                value={assunto} onChange={(e) => setAssunto(e.target.value)} />
            </nav>
            <nav>
                <label>Seu E-mail: </label>
                <input type="email"
                placeholder="Digite seu Email" 
                className={styles.iptform} 
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </nav>
            <nav>
                <label>Mensagem: </label>
                <textarea cols="10" rows="10"
                placeholder="Digite sua mensagem" 
                value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
            </nav>
            <nav>
                <input className={styles.submit} type="submit" value='Enviar E-mail' />
            </nav>
        </form>
    )
}
export default Formulario