class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(item) {
        this.values.push(item);
        let index = this.values.length-1;
        this.bubbleUp(item, index);
    }

    bubbleUp(item, index = this.length-1) {
        console.log(typeof item, item, index, this.values);
        let target = this.values[index];

        while( index > 0 ) {
            let parentIndex = Math.floor((index -1)/2);
            let parent = this.values[parentIndex];

            console.log('mid', {parentIndex}, {parent}, {index}, {target});

            if ( target <= parent ) break;

            this.values[parentIndex] = target;
            this.values[index] = parent;
            index = parentIndex;

            console.log('end', {parentIndex}, {parent}, {index}, {target});
        }
        console.log('final', item, index,  this.values[index], this.values);
    }

    popTop() {
        console.log('Start Removal', this.values);

        let max = this.values[0];
        let end = this.values.pop();

       if (this.values.length > 0) {
           this.values[0] = end;
           this.sinkDown(end);
        }

        return max;
    }

    sinkDown(item, index = 0) {
        let target = this.values[index];
        let length = this.values.length;

        while(true) {
            console.log(this.values);

            let leftIndex = 2*index+1;
            let rightIndex = 2*index+2;

            if (leftIndex < length && target < this.values[leftIndex] && this.values[leftIndex] > this.values[rightIndex]){
                //swap = leftIndex;
                this.values[index] = this.values[leftIndex];
                this.values[leftIndex] = item;
                index = leftIndex;
                console.log('swapped left', this.values[leftIndex]);
            } else if (rightIndex < length && target < this.values[rightIndex]){
                //swap = rightIndex;
                this.values[index] = this.values[rightIndex];
                this.values[rightIndex] = item;
                index = rightIndex;
                console.log('swapped right', this.values[rightIndex]);
            } else {
                console.log('BREAK')
                break;
            }
        }
        console.log('END', this.values);
    }
}

const heap = new BinaryHeap();
console.log(heap);
heap.insert(5);
heap.insert(15);
heap.insert(25);
heap.insert(35);
heap.insert(45);
heap.insert(55);
heap.insert(58);
heap.insert(26);
heap.insert(89);
heap.insert(48);
heap.insert(787);
heap.insert(2);
console.log(heap[heap.length+3]);
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
console.log(heap.popTop());
heap.insert(799);
console.log(heap.popTop());

class item {
    constructor(priority, data) {
        this.priority = priority;
        this.data = data;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    insert(item) {
        this.values.push(item);
        let index = this.values.length-1;
        this.bubbleUp(item, index);
    }

    bubbleUp(item, index = this.length-1) {
        console.log(typeof item, item, index, this.values);
        let target = this.values[index];

        while( index > 0 ) {
            let parentIndex = Math.floor((index -1)/2);
            let parent = this.values[parentIndex];

            console.log('mid', {parentIndex}, {parent}, {index}, {target});

            if ( target.priority <= parent.priority ) break;

            this.values[parentIndex] = target;
            this.values[index] = parent;
            index = parentIndex;

            console.log('end', {parentIndex}, {parent}, {index}, {target});
        }
        console.log('final', item, index,  this.values[index], this.values);
    }

    popTop() {
        console.log('Start Removal', this.values);

        let top = this.values[0];
        let end = this.values.pop();

       if (this.values.length > 0) {
           this.values[0] = end;
           this.sinkDown(end);
        }

        return top;
    }

    sinkDown(item, index = 0) {
        let target = this.values[index];
        let length = this.values.length;

        while(true) {
            //console.log(this.values);

            let leftIndex = 2*index+1;
            let rightIndex = 2*index+2;

            if (leftIndex < length && target.priority < this.values[leftIndex].priority && this.values[leftIndex].priority > this.values[rightIndex]?.priority){
                //swap = leftIndex;
                this.values[index] = this.values[leftIndex];
                this.values[leftIndex] = item;
                index = leftIndex;
                //console.log('swapped left', this.values[leftIndex]);
            } else if (rightIndex < length && target.priority < this.values[rightIndex].priority){
                //swap = rightIndex;
                this.values[index] = this.values[rightIndex];
                this.values[rightIndex] = item;
                index = rightIndex;
                //console.log('swapped right', this.values[rightIndex]);
            } else {
                //console.log('BREAK')
                break;
            }
        }
        //console.log('END', this.values);
    }
}

const priorityQueue = new PriorityQueue();
console.log(priorityQueue);
priorityQueue.insert(new item(5));
priorityQueue.insert(new item(15));
priorityQueue.insert(new item(25));
priorityQueue.insert(new item(35));
priorityQueue.insert(new item(45));
priorityQueue.insert(new item(55));
priorityQueue.insert(new item(58));
priorityQueue.insert(new item(26));
priorityQueue.insert(new item(89));
priorityQueue.insert(new item(48));
priorityQueue.insert(new item(787));
priorityQueue.insert(new item(2));
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
console.log(priorityQueue.popTop());
priorityQueue.insert(new item(799));
console.log(priorityQueue.popTop());