import Inventory from "../classes/Inventory"
import Room from "../classes/Room"
import DescribeAction from "./DescribeAction"
import MoveAction from "./MoveAction"
import InputProcessor from "./InputProcessor"
import RoomManager from "./RoomManager"

class MoveProcessor {
    inputProcessor: InputProcessor
    roomManager: RoomManager
    gameInventory: Inventory
    currentRoom: Room | boolean

    processMove() {
        let output: string = 'I\'m not sure what you mean... please try again.'

        if (typeof this.inputProcessor.action != 'undefined') {
            switch( this.inputProcessor.action.constructor ) {
                case MoveAction:
                    [output, this.currentRoom] = this.inputProcessor.action.processAction(this.currentRoom, this.roomManager)

                    break;
                case DescribeAction:
                    output = this.inputProcessor.action.processAction(this.currentRoom, this.gameInventory)
                    break;
            }
        }

        return output
    }

    constructor(inputProcessor: InputProcessor, inventory: Inventory, roomManager: RoomManager, room: Room | boolean) {
        this.roomManager = roomManager
        this.gameInventory = inventory
        this.currentRoom = room
        this.inputProcessor = inputProcessor
    }
}

export default MoveProcessor
