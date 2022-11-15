import Action from "./Action"
import Room from "./Room"
import Inventory from "./Inventory"

class DescribeAction extends Action {
    words: string[] = [
        "look",
        "describe",
        "study"
    ]

    processAction(room: Room | boolean, inventory: Inventory): string {
        if (room.constructor !== Room) return "I'm not sure where we are..."

        if (typeof this.noun == 'undefined') {
            return room.description
        }

        if (this.noun == 'inventory') return inventory.describeInventory()

        if (inventory.itemFoundByName(this.noun)) return inventory.describeItemByName(this.noun)

        return "some stuff is happening"
    }
}

export default DescribeAction
