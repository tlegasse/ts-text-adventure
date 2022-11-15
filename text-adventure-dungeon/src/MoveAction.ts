import Action from "./Action"
import Room from "./Room"
import RoomManager from "./RoomManager"

class MoveAction extends Action {
    words: string[] = [
        "move",
        "go",
        "walk",
        "run",
        "travel"
    ]
    cardinalDirectionsAliases: any = {
        "n": ["north"],
        "ne": ["northeast", "north east"],
        "e": ["east"],
        "se": ["southeast", "south east"],
        "s": ["south"],
        "sw": ["southwest", "south west"],
        "w": ["west"],
        "nw": ["northwest", "north west"],
        "up": [],
        "down": []
    }

   getCardinalDirectionFromNoun(): string | undefined {
        if (typeof this.noun == 'undefined') {
            return 'n'
        }

        if(this.cardinalDirectionsAliases[this.noun]) return this.noun

        for(const key of Object.keys(this.cardinalDirectionsAliases)) {
            if(this.cardinalDirectionsAliases[key].includes(this.noun)) return key
        }
   }

    processAction(currentRoom: Room, roomManager: RoomManager): [string, Room] {
        if(typeof this.noun == 'undefined') return ["I need a direction to travel", currentRoom]

        if (currentRoom.constructor !== Room) return ["I'm not sure where we are...", currentRoom]

        let direction: string | undefined = this.getCardinalDirectionFromNoun()

        if(typeof direction == 'undefined') return ["I don't think I can go that way", currentRoom]

        let nextRoomId: number | undefined = currentRoom.exits[direction].roomId

        if(
            typeof this.cardinalDirectionsAliases[direction] == 'undefined' || 
            typeof nextRoomId == 'undefined'
        ) return ["I don't think I can go that way", currentRoom]

        let newRoom: Room | boolean = roomManager.getRoomById(nextRoomId)

        if(newRoom.constructor != Room) return ["I don't think I can go that way", currentRoom]
        
        return [newRoom.name, newRoom]
    }
}

export default MoveAction
