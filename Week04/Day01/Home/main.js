function Digits(n)
{
    let largest = 0;
    let smallest = 9;
 
    while (n) {
        let r = n % 10;
 
        // Find the largest digit
        largest = Math.max(r, largest);
 
        // Find the smallest digit
        smallest = Math.min(r, smallest);
 
        n = parseInt(n / 10);
    }
    document.write(largest + " " + smallest);
}