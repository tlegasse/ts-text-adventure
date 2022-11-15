import GameOptionsInterface from "./GameOptionsInterface"
import InputProcessor from "./InputProcessor"
import Inventory from "./Inventory"
import MoveProcessor from "./MoveProcessor"
import ItemDataInterface from "./ItemDataInterface"
import RoomDataInterface from "./RoomDataInterface"
import ItemData from "./data/items.json"
import RoomData from "./data/rooms.json"
import RoomManager from "./RoomManager"
import Room from "./Room"
import Action from "./Action"

/**
 * Our main game controller class. Accepts options to make it all happen.
 * 
 * @class Game
 */
class Game {
    itemData: Array<ItemDataInterface> = ItemData
    roomData: Array<RoomDataInterface> = RoomData

    roomManager: RoomManager = new RoomManager(this.roomData)
    currentRoom: Room | boolean = this.roomManager.getRoomById(0)

    inputProcessor: InputProcessor = new InputProcessor()
    moveProcessor: MoveProcessor

    inventory: Inventory
    opts: GameOptionsInterface

    /**
     * Uses the setOutputs hook passed in with the provided outputs state.
     *
     * @memberof Game
     */
    updateOutputs():void {
        this.opts.setOutputs([ ...this.opts.outputs ])
    }

    /**
     * Updates internally held inputs and then calls input processing
     *
     * @param {string} input
     * @param {boolean} should we update the display?
     * @memberof Game
     */
    processInput(input: string, update: boolean):void {
        this.inputProcessor.processInput(input)
        this.processMove()

        if(update) this.updateOutputs()
    }

    processMove() {
         this.opts.outputs.push(
             this.moveProcessor.processMove()
         )
    }

    /**
     * Creates an instance of Game.
     * @param {GameOptionsInterface} opts
     * @memberof Game
     */
    constructor(opts: GameOptionsInterface) {
        this.opts = opts
        this.inventory = new Inventory(this.itemData)
        this.moveProcessor = new MoveProcessor(this.inputProcessor, this.inventory, this.roomManager, this.currentRoom)

        this.processInput('look', false)
    }
}

export default Game
