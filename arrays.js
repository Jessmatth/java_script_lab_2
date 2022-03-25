'use strict';

// 1. printIndices
function printIndices(items)  {
  for (const i in items){
    console.log(`${items[i]} ${i}`);

  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (const i in items){
    if (i % 2 === 0){
      result.push(items[i]);
    }
  }
  console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortItems = items.sort();
  const nLenItems = sortItems.splice(0,n);
  const revItems =  nLenItems.reverse();
  console.log(revItems)

}

// sorted_items = sorted(items)
// sorted_n_items = sorted_items[:n]
// sorted_n_items.reverse()

// print(sorted_n_items)