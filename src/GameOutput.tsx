import {useState} from "react"

function GameOutput(props:any){
    const [ outputs, setOutputs ] = useState(props.outputs)

    return(
        <>
            { props.outputs && props.outputs.map((output:string, key:number) => <p className="pb-2" key={key}>{ output }</p>) }
        </>
    )
}

export default GameOutput
