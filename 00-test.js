function pageCount(n, p) {
    let book = 0; 
    let book_finded = 0;
    for(let i=0 ; i<=n ; i++){
        if(i==p && i%2==0){
            book++
            book_finded=book
        } else if(i==p){
            book_finded=book
        } else if(i%2==0){
            book++
        }
    }

    let from_front = book_finded - 1
    let from_back = book - book_finded

    return from_front > from_back ? from_back : from_front;
}



// def pageCount(n, p): 
    // turnsFromStart = p // 2; 
    // turnsFromEnd = n // 2 - p // 2; 
    // return min(turnsFromStart, turnsFromEnd);
console.log(pageCount(5, 3))
