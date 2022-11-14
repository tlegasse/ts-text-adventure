import RoomDataInterface from "../interfaces/RoomDataInterface"
import Room from "./Room"

class RoomManager {
    roomData: Array<RoomDataInterface>

    constructor(roomData: Array<RoomDataInterface>) {
        this.roomData = roomData
    }

    getRoomById(roomId: number): Room | boolean {
        let foundRoom: RoomDataInterface | undefined = this.roomData.find(room => room.id == roomId)
        let returnRoomOrFalse: Room | boolean = false

        if (typeof foundRoom != undefined) {
            returnRoomOrFalse = new Room(foundRoom)
        }
        
        return returnRoomOrFalse
    }
}

export default RoomManager
