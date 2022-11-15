class Room {
    public name: string = "default"
    public id: number = 0
    public description: string = "default"
    public exits: any = {
        n: false,
        ne: false,
        e: false,
        se: false,
        s: false,
        sw: false,
        w: false,
        nw: false,
        up: false,
        down: false
    }

    constructor(init?: Partial<Room>) {
        Object.assign(this, init)
    }

    getItemData() {
        return this 
    }
}

export default Room
