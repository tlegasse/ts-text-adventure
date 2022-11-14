import Item from "../classes/Item"

interface RoomDataInterface {
    name: string
    id: number
    description: string
    exits: any
    items?: Array<number>
}

export default RoomDataInterface 
