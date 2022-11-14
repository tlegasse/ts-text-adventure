import {ChangeEvent, useEffect, useState} from "react"

function GameInput(props: any){
    const [ inputValue, setInputValue ] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    
    useEffect(() => {
        const gameInput = document.getElementById("gameInput")
        if( gameInput != null ) gameInput.focus()
    })


    return(
        <>
            <form 
                onSubmit={(e) => {
                    setInputValue('')
                    props.updateGameInput(e, inputValue)
                }}>
                <input type='text' id="gameInput" name='gameInput' onChange={handleChange} value={inputValue} />
            </form>
        </>
        )
}

export default GameInput
