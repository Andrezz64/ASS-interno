export default function Status(props){

const red = 'text-red-600'
const green = 'text-green-600'
const orange = 'text-orange-600'
const blue = 'text-sky-500'

const online = 'Online'
const offline = 'Offline'
const manutencao = 'Em manutenção'
const instabilidade = 'Instabilidade'
switch (props.serviceStatus){
    case 'online': 
    return(
        <div className="flex justify-center gap-5 mb-3 text-lg">
        <h1 className="">{props.serviceName}</h1>
        <p className={green}>{online}</p>
        </div>
    )
    case 'offline':
        return(
            <div className="w-[20rem] flex justify-center gap-5 mb-5 text-lg">
            <h1>{props.serviceName}</h1>
            <p className={red}>{offline}</p>
            </div>
        )
    case 'manutencao':
        return(
            <div className="w-[20rem] flex justify-center gap-5 mb-5 text-lg">
            <h1>{props.serviceName}</h1>
            <p className={blue}>{manutencao}</p>
            </div>
        )
    case 'instabilidade':
        return(
        <div className="w-[20rem] flex justify-center gap-5 mb-5 text-lg">
        <h1>{props.serviceName}</h1>
        <p className={orange}>{instabilidade}</p>
        </div>
        )

}

}