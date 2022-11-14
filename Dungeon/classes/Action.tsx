import ActionInterface from "../interfaces/ActionInterface"

abstract class Action implements ActionInterface {
    words: string[] = []
    inputString?: string
    verb?: string
    preposition?: string
    noun?: string
    subject?: string

    prepositionWords: string[] = [
        "with",
        "in",
        "through",
        "around"
    ]

    processInput(inputString: string) {
        this.inputString = inputString
        let processingString = this.inputString

        if (this.verb) {
            processingString = this.inputString.replace(this.verb, '')
            processingString.trim()
        }

        let processingStringParts: string[] = []

        for (const prepositionWord of this.prepositionWords) {
            if (processingString.indexOf(' ' + prepositionWord + ' ')) {
                processingStringParts = processingString.split(' ' + prepositionWord + ' ')
            }
        }

        if (processingStringParts[0]) {
            this.noun = processingStringParts[0].trim()
        }

        if (processingStringParts[1]) {
            this.subject = processingStringParts[1].trim()
        }
    }

    matchesInput(inputString: string): boolean {
        this.inputString = inputString
        let foundMatch = false

        for (const word of this.words) {
            if(this.inputString.indexOf(word) != 0) continue
            foundMatch = true
            this.verb = word
        }

        return foundMatch
    }

    processAction(...args: any): any {
        return "Nothing here"
    }
}

export default Action
