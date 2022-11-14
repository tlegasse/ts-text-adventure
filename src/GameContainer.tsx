import React, {FormEvent, useState} from "react"
import GameInput from "./GameInput"
import GameOutput from "./GameOutput"
import Game from "../Dungeon/Dungeon"

function GameContainer(){
    const [ outputs, setOutputs ] = useState<Array<string>>([])

    const [ dungeonGame ] = useState(
        () => new Game({
            setOutputs: setOutputs,
            outputs: outputs
        })
    )
    
    const updateGameInput = (event: React.FormEvent<HTMLFormElement>, inputValue: string): void => {
        event.preventDefault()
        dungeonGame.processInput(inputValue, true)
    }

    return(
        <>
            <GameOutput outputs={outputs} />
            <GameInput updateGameInput={updateGameInput} />
        </>
    )
}

export default GameContainer
