class List_Node{
    constructor(next, prev, data) {
        super.constructor()
        this.next = next
        this.prev = prev
        this.data = data
    }
    set_next(new_next) { this.next = new_next }
    set_prev(new_prev) { this.prev = new_prev }
    set_data(new_data) { this.data = new_data }
}

export class Double_Linked_List{
    constructor() {
        super.constructor()
        this.head = this.tail = null
        this.length = 0
    }

    set_head() { }
    set_tail() { }
    find_element_at(position) {
        if (position > this.length || position < 1 || typeof(position) != "number"){ return undefined }
        var x = 0
        var n = this.head
        while (x < position) {
            if (x == position) return n
            n = n.next
            x++
        }
    }
    append(data) {
        var appending_node = new List_Node(data)
        if (this.length == 0) {
            this.head = appending_node
        } else {
            appending_node.set_prev(this.tail)
            this.tail.set_next(appending_node)
            this.tail = appending_node
        }
        this.length++
    }
    insert_at_position(data, position) {
        var push_back = this.find_element_at(position)
        var appending_node = new List_Node(data)
        appending_node.set_next(push_back)
        appending_node.set_prev(push_back.prev)
        push_back.prev.set_next(appending_node)
        this.length++
    }
    remove_at_position(position) {
        var rem = this.find_element_at(position)
        rem.prev.set_next(rem.next)
        rem.next.set_prev(rem.prev)
        rem = null
        this.length--
    }
}