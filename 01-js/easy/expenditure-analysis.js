/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let returnArray = [];
  const spentObject = {}
  for(let i of transactions){
    if(spentObject.hasOwnProperty(i.category)){
      spentObject[i.category] += i.price; 
    }else{
      spentObject[i.category] = i.price;
    }
  }
  for(let i in spentObject){
    returnArray.push({category : i , totalSpent : spentObject[i]})
  }
  console.log(returnArray)
  return returnArray;
}

calculateTotalSpentByCategory([{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
}])

module.exports = calculateTotalSpentByCategory;
