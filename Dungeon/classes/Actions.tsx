import Action from "./Action";
import MoveAction from "./MoveAction"
import DescribeAction from "./DescribeAction"

class Actions {
    actions: Action[] = [
        new MoveAction(),
        new DescribeAction()

    ]
}

export default Actions
