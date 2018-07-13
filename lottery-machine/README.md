# Lottery Machine
Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function lottery()). Your code inside lottery() must filter out all letters and return unique integers as a string. If there are no integers in the string return - “One more run!”.


## Examples:
```javascript
var str = "hPrBKWDH8yc6Lt5NQZWQ";
lottery(str); // should return "865"

var str = "ynMAisVpHEqpqHBqTrwH";
lottery(str); // should return "One more run!"
```

https://www.codewars.com/kata/lottery-machine