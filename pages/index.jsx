import Status from "./components/status";
import { useEffect, useState, setState} from "react";
import { data } from "autoprefixer";
import Header from "./components/Header";





const options = {
    method: 'GET',
    headers: {
      Authorization: 'bearer 14d0e8aa59539555b1f52bc0cd281882bccb77863a0fecf4e4c41128c5cf08fb831dcb384d4f07125d93123497dbb68de176d33d7a538daa8e6f8c1217fc61b10b2fbb39498a12d1ecfed984381c025cad20c979ac9bdc64031b9c17dafd9265495719584c066059240d32c2d4dd7c83b5c3f318d2c8694836023c56f52d979c'
    }
  };
  
   const parseJson = (resp) => (resp.json ? resp.json(): resp)
   const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {return resp}

    return parseJson(resp).then(resp => {throw resp})
   }

const App = () => {
    const [error, setError] = useState(null)
    const [status, setStatus] = useState([]) 
    
    
    useEffect(() => {
        fetch('http://192.168.0.107:1337/api/servicos', options)
        .then(checkStatus)
        .then(parseJson)
        .then(({data}) => setStatus(data))
        .catch((error) => setError(error))
    }, [])
    console.log(status)
    if(error){
    return <div>Ops! ocorreu um erro: {error.message}</div>
    }

return(
    <div className="flex justify-center flex-col items-center">
    <Header></Header>
    <div className="w-[22rem] h-[100%] flex justify-start items-center flex-col bg-bl-50 rounded-md pb-5 pt-5">
        <h1 className="mb-[2rem] border-b-2 border-slate-500 text-xl">Status de serviços</h1>
        {status.map(({attributes,id}) => <Status serviceName={attributes.serviceName} serviceStatus={attributes.serviceStatus} key={id}></Status>)}
    </div>
    <section className=" flex gap-1 items-center flex-col mt-[1rem]">
        <p>Precisando de mais ajuda ?</p>
        <p>Entre no Karoo</p>
        <button className="bg-gr-100 h-[3rem] w-[7rem] rounded-md mt-[1rem] hover:bg-transparent hover:border-2 hover:border-gr-100 hover:text-gr-100 duration-300 text-xl"><a href="https://www.karoo.com.br/chat/#/entrada?conta=136">Acessar</a></button>
    </section>
    </div>
)}

export default App;