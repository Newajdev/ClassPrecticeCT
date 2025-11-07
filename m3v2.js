// TODO pagination array

// const arr = Array.from({ length: 5}).map((_, i)=> i);\


const arr = (start, stop, step) => {
   return Array.from({ length: (stop - start) / step }, (_, i)=> start + i * step);    
}

console.log(arr(0,10, 1));
