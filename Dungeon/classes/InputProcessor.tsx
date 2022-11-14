import InputPartsInterface from "../interfaces/InputPartsInterface"
import Actions from "./Actions"
import Action from "./Action"

class InputProcessor {
    actions: Actions = new Actions()
    action?: Action
    input: string = "look"
    formattedInputArray: Array<string> = []
    returnParts: InputPartsInterface = this.getDefaultParts()
    oneWordCommands: string[] = ['describe']

    /**
     * Creates an instance of InputProcessor.
     * Takes an input string
     *
     * @memberof InputProcessor
     */
    constructor(init?: Partial<InputProcessor>) {
        Object.assign(this, init)

        this.processInput(this.input)
    }

    getDefaultParts() {
        return {
            verbWord: false,
            nounWord: false,
            prepositionWord: false,
            subjectWord: false
        }
    }

    /**
     * Controlls processing of inputs
     *
     * @param {string} input
     * @memberof InputProcessor
     */
    processInput(input: string) {
        this.input = input
        this.resetParts()
        this.formatAndStoreInput()
    }

    /**
     * Sets our return parts back to their original state
     *
     * @memberof InputProcessor
     */
    resetParts() {
        this.returnParts.verbWord = false
        this.returnParts.nounWord = false
        this.returnParts.prepositionWord = false
        this.returnParts.subjectWord = false
    }

    /**
     * Formats input and stores the return data.
     *
     * @memberof InputProcessor
     */
    formatAndStoreInput() {
        this.lowercaseInput()
        this.removeIllegalChars()
        this.action = this.locateActionAndProcessReturn()
        this.formattedInputToReturn()
    }

    locateActionAndProcessReturn() {
        let locatedAction: Action | undefined = this.actions.actions.find(action => action.matchesInput(this.input))
        
        if (typeof locatedAction != "undefined") {
            locatedAction.processInput(this.input)
        }

        return locatedAction
    }

    /**
     * Sets string to lowercase
     *
     * @memberof InputProcessor
     */
    lowercaseInput() {
        this.input = this.input.toLowerCase()
    }

    /**
     * Sets input string to one without any illegal characters
     *
     * @memberof InputProcessor
     */
    removeIllegalChars() {
        this.input = this.input.replace(/[^a-zA-Z0-9 ]/g, '');
    }

    /**
     * Formats input to return parts
     *
     * @memberof InputProcessor
     */
    formattedInputToReturn() {
        if (typeof this.action != 'undefined') {
            this.returnParts = {
                verbWord: this.action.verb || false,
                nounWord: this.action.noun || false,
                prepositionWord: this.action.preposition || false,
                subjectWord: this.action.subject || false,
            }
        }
    }
}

export default InputProcessor
