class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const j = new Node(5, null, null)
const i = new Node(8, null, j)
const h = new Node(2, null, null)
const g = new Node(0, h, i)
const f = new Node(1, null, null)
const e = new Node(5, null, null)
const d = new Node(2, null, null)
const c = new Node(7, f, g)
const b = new Node(3, d, e)
const aRoot = new Node(5, b, c)


class Calculations {
    constructor(root) {
        this.root = root;
    }

    DFSPreOrder(operation) {
        let data = [];
        function traverse(node) {
            operation(node.value);
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    subTreeSum = () => {
        let sum = 0;
        this.DFSPreOrder(value => sum += value);
        return sum;
    }

    subTreeAverage = () => {
        if (this.root === null) return;

        let sum = 0;
        let count = 0;
        this.DFSPreOrder(value => {
            sum += value;
            count++;
        });
        return sum / count;
    }

    subTreeMedian = () => {
        if (this.root === null) return;
        
        let arrTree = [];
        this.DFSPreOrder(value => arrTree.push(value));
        const mid = Math.floor(arrTree.length / 2);
        const nums = [...arrTree].sort((a, b) => a - b);
        if (arrTree.length % 2 !== 0) {
            return nums[mid];
        } else {
            return (nums[mid - 1] + nums[mid]) / 2;
        }
    }
}

//tests
const treeNodes = [aRoot, b, c, d, e, f, g, h, i, j];
const treeNodesStr = ["aRoot", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (let i = 0; i < treeNodes.length; i++) {

    let root = treeNodes[i];
    let calc = new Calculations(root);

    console.log(`Sum for the "${treeNodesStr[i]}" object: ${calc.subTreeSum()}`);
    console.log(`Arithmetic average for the "${treeNodesStr[i]}" object: ${calc.subTreeAverage()}`);
    console.log(`Median for the "${treeNodesStr[i]}" object: ${calc.subTreeMedian()}`);
    console.log("*****************************");
}

