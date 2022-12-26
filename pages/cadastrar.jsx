import { useState } from "react";
import Header from "./components/Header";
export default function Home(){
    const [nome, setNome] = useState('')
    const [status, setStatus] = useState('')

    const onChangeNome = evt =>{setNome(evt.target.value)}
    const onChangeStatus = evt =>{setStatus(evt.target.value)}
    
    function enviar(servicename, servicestatus){
    
    const options = {
        method: 'POST',
        headers: {
          Authorization: 'bearer 14d0e8aa59539555b1f52bc0cd281882bccb77863a0fecf4e4c41128c5cf08fb831dcb384d4f07125d93123497dbb68de176d33d7a538daa8e6f8c1217fc61b10b2fbb39498a12d1ecfed984381c025cad20c979ac9bdc64031b9c17dafd9265495719584c066059240d32c2d4dd7c83b5c3f318d2c8694836023c56f52d979c',
          'Content-Type': 'application/json'
        },
        body: `{"data":{"serviceName":"${servicename}","serviceStatus":"${servicestatus}"}}`
      };
      
      fetch('http://192.168.0.107:1337/api/servicos', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));}

return(
    <div>
    <Header></Header>
    <div className="w-[100%] h-[20rem] flex justify-center flex-col items-center gap-3">
        <h1>Cadastrar um serviço</h1>
        <p>Coloque o nome e o status de serviço</p>
        <form method="POST" className="flex flex-col text-black">
            <h2>Nome:</h2><input type="text" name="servicename" value={nome} onChange={onChangeNome}/> <br /> <br />
            <h2>status:</h2>
            <input type="text" name="servicestatus" value={status} onChange={onChangeStatus}/>
            
            <button onClick={enviar(nome, status)}>enviar</button>
        </form>
    </div>
    </div>
)
}