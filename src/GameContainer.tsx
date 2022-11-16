import React, {FormEvent, useState} from "react"
import GameInput from "./GameInput"
import GameOutput from "./GameOutput"
import Game from "../text-adventure-dungeon/src/index"

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
        <div className="flex-col justify-end px-2 py-5 bg-slate-900 h-screen overflow-scroll">
            <GameOutput outputs={outputs} />
            <GameInput updateGameInput={updateGameInput} />
        </div>
    )
}

export default GameContainer
