import ItemDataInterface from "../interfaces/ItemDataInterface"

class Item implements ItemDataInterface {
    public collectable: boolean = false
    public name: string = "default"
    public id: number = 0
    public aliases: string[] = []
    public description: string = "default"

    constructor(init?: Partial<Item>) {
        Object.assign(this, init)
    }

    getItemData() {
        return this 
    }
}

export default Item
