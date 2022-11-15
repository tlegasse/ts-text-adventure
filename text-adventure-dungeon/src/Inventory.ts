import ItemDataInterface from "./ItemDataInterface"
import Item from "./Item"

class Inventory {
    public inventoryData: Array<Item> = []
    public itemData: Array<ItemDataInterface>

    constructor(itemData: Array<ItemDataInterface>) {
        this.itemData = itemData
        this.add(0)
    }

    add(id: number) {
        const item = this.itemData.find(item => item.id == id)
        this.inventoryData.push(new Item(item))
    }

    remove(id: number) {
        this.inventoryData = this.inventoryData.filter((item: Item) => item.id != id)
    }

    describeInventory(): string {
        let inventoryDescriptionArray: Array<string> = this.inventoryData.map((item: Item) => item.name)
        return inventoryDescriptionArray.join("\n")
    }

    itemFoundByName(name: string): boolean {
        let item: Item | undefined = this.inventoryData.find((item: Item) => item.name.toLowerCase() == name || item.aliases.includes(name) )
        return (typeof item != 'undefined')
    }

    describeItemByName(name: string): string {
        let description: string = "I couldn't find that"
        
        let item: Item | undefined = this.inventoryData.find((item: Item) => item.name.toLowerCase() == name || item.aliases.includes(name) )
        if(typeof item != 'undefined') description = item.description
        return description
    }
}

export default Inventory
