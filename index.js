// Code your solution here

function findMatching(collection, name){
    return collection.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(collection, letters){
    return collection.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(collection, name){
    return collection.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}