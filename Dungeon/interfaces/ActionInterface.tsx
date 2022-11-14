import InputPartsInterface from "../interfaces/InputPartsInterface"

interface ActionInterface {
    words: string[],
    prepositionWords: string[],
    processInput(inputString: string): void
    matchesInput(inputString: string): boolean
    processAction(...args: any): string
}

export default ActionInterface
