import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([50, -3, 39, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);


const testString = new CharactersCollection('ddaXdsX');
testString.sort();
console.log(testString.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.sort();
linkedList.print(); 