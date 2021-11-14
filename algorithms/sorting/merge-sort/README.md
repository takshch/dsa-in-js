# Merge Sort

## Pseudo Code

```
mergeSort(array a)
    n = length of array a
    if(n == 1) 
        return a
    
    arrayFirst = array from a[0] to a[n / 2]
    arraySecond = array from a[(n / 2) + 1] to a[n]

    arrayFirst = mergeSort(arrayFirst)
    arraySecond = mergeSort(arraySecond)

    return merge(arrayFirst, arraySecomd)
```

```
merge(array a, array b)
    array c

    while(a and b have elements)
        if(a[0] < b[0])
            add a[0] to the end of c
            remove a[0] from a
        else
            add b[0] to the end of c
            remove b[0] from b
    
    // At this point, either a or b is empty

    // add remaining elements of a to array c
    while(a has elements)
        add a[0] to the end of c
        remove a[0] from a
    
    // add remaining elements of b to array c
    while(b has elements)
        add b[0] to the end of c
        remove b[0] from b
```
