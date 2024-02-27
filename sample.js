/**
 * @description The provided function calculates the factorial of a given integer n
 * by checking if n is 0 or 1 and returning 1 for those cases and otherwise recursively
 * calling itself with n-1 as the input until it reaches the base case.
 * 
 * @param { number } n - The `n` input parameter represents the number for which we
 * are calculating the factorial.
 * 
 * @returns { integer } The output of this function is the nth factorial where n can
 * be any positive integer. Specifically; it starts with the product of 1 and (n-1)
 * times itself when n =2 and decreases to 1 multiplied by zero when n=0 or when there
 * is no factorial at all.
 * 
 * In mathematical terms we could describe this as such:
 * 
 * Let 'factorial(n)' be 'the product of 1' multiplied by ( 'n-1'(recurively defined)times
 * 'n')   for n=0 this is defined as the multiplicative identity product of  1 x zero
 *     i.e  1  since there is no other term . Similarly for n = 1  then
 *     factorial(1)=  1*1  reduces simply to just  1  ...otherwise (n > 2 ) then
 * factorial(n) = n * (factorial(n-1)) e.g for n =2 we would have;
 *           factorial(2)
 *             =  2 * ( 1 * factorial(2 -1))   or
 *             2* factorial(1))  2*1    which simply  reduces down to ...
 *             = 2   thereby starting with  n=2 reducing simply gives :
 *             1  *1  * (factorial (1 )    reduced to:
 *                      1*   factorial (0))
 *           Since the factorial(0) reduced further simply down
 *            becomes identity product of one , as result  factorail = identity (
 * i.e) :
 * 
 *    factorial(n) = identity whenever n= 2 and for n>2 factors accordingly reducing.
 * 
 * Therefore given positive integers such as    n we obtain successively these
 * simplified reductions    to the eventual resultant identities below:
 *           factorial(2 ) =  2  factorial (1 ) = 1  and identity    for when n=0
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 * @description This function checks whether a number is prime or not. It does so by
 * first ruling out composite numbers with a factor less than or equal to the square
 * root of the number. If none is found then it returns true indicating that the input
 * is indeed prime.
 * 
 * @param { number } num - The `num` parameter is the number for which we must determine
 * if it's prime. It serves as the function's only argument and sets the value for
 * which we execute the rest of the logic within the function body.
 * 
 * @returns { number } This function takes an integer num as input and returns a
 * boolean value indicating whether the number is prime or not. If the number is less
 * than or equal to 1 the function returns false directly without checking for
 * primality. Otherwise it iterates a loop from 2 to sqrt of the given number and
 * checks if num is divisible by any of those numbers using the modulo operator. If
 * any divisibility found returns false otherwise true indicating the given number
 * is prime.
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * @description The given function takes a celsius value as input and returns the
 * corresponding fahrenheit value using the following formula:
 * (celsius * 9/5) + 32.
 * 
 * @param { number } celsius - The input parameter celsius is multiplied by 9 and
 * divided by 5 before being added to 32. In other words celsius goes through an
 * calculation and is then converted to Fahrenheit.
 * 
 * @returns { number } << gyx4d >>
 * 
 * The output of the given function `celsiusToFahrenheit` is the Fahrenheit equivalent
 * of a given Celsius temperature. The function multiplies the input Celsius value
 * by 9 and divides by 5 before adding 32.
 * 
 * For example if we pass the argument `celsius = 20` to this function , it will
 * calculate as below.
 * 
 * (20 × 9 / 5) + 32 = (20 × 9) / 5 + 32
 *                       = (180) / 5 + 32        // (180/5 = 36 )
 *                       = 36 + 32 = 68
 * 
 * Hence the output of this function with input `celsius=20` will be 68(Fahrenheit).
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * @description This function finds the largest value within an array of numbers by
 * iterating over each element and checking if it's greater than the current maximum.
 * If an element is found to be greater than the current maximum value (array[0]) the
 * corresponding variable "max" is updated to that new maximum until the entire loop
 * finishes and returns max having identified and saved the largest value within the
 * array.
 * 
 * @param { array } arr - The `arr` input parameter is an array of numbers passed to
 * the function that finds its maximum value.
 * 
 * @returns { number } This function takes an array as input and returns the largest
 * value present inside that array.
 * 
 * Here is a step-by-step breakdown of what the code does:
 * 
 * 1/ We set `max` to the first value of the input array (`arr[0]`).
 * 2/ We then iterate from the second index of the array (i=1) until we reach the end
 * of the array (i < arr.length).
 * 3/ For each iteration of the loop: If the current value at the next index is greater
 * than `max`, we update `max` to be that value.
 * 4/ At the end of the loop (after iterating through the entire input array), `max`
 * contains the largest value present inside the array and we return that value.
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/**
 * @description The function `reverseString` takes a string `str` as input and returns
 * the string with its characters reversed.
 * 
 * @param { string } str - The input parameter "str" passes the string that you want
 * to reverse. It is then split into an array of individual characters and reverse
 * order is created before being rejoined back into a single string using the join method.
 * 
 * @returns { string } The input "hello world" and its corresponding outputs:
 * 
 * 1/ Plain string: hello world
 * 
 * Output: dlroW olleH
 * 
 * Explanation: Using split(), divide the input into a array of individual characters
 * and reverse them using the Array.prototype.reverse() method. Then use the join()
 * method with an empty string to concatenate these elements back into a string. This
 * new string will have all characters of the original reversed.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * @description This function determines if a string is a palindrome by comparing the
 * original string with its reversal.
 * 
 * @param { string } str - The `str` input parameter receives a string to check whether
 * it's a palindrome or not.
 * 
 * @returns { boolean } This function will check if a given string is a palindrome
 * or not and it is returning a boolean value which is either true or false based on
 * the given input string. If the input string is a palindrome then the return value
 * of this function will be "true" otherwise it returns "false".
 */
function isPalindrome(str) {
    return str === reverseString(str);
}

/**
 * @description The function returns a random integer between the specified range
 * (min and max) using Math.random and Math.floor.
 * 
 * @param { number } min - The "min" parameter determines the lowest possible value
 * that will be returned by the function. In other words it sets the range of the
 * random number generation
 * 
 * @param { number } max - The `max` input parameter defines the upper bound of the
 * random number to be generated. It influences the range within which the random
 * number will fall. Essentially. it specifies the limits of the randomness.
 * 
 * @returns { integer } This function gets two parameters called "min" and "max", and
 * then calculates a random integer that lies within the range defined by min to max
 * (inclusive of both numbers). Finally it returns the calculated value as an integer
 * within the specified range..
 * 
 * To put it more briefly; it provides a random number between min-1 up to max(including
 * both)-1
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description This function calculates the area of a circle given the radius.
 * 
 * @param { number } radius - The `radius` input parameter is used to determine the
 * size of the circle and is squared to calculate the area.
 * 
 * @returns {  } The output returned by this function is a number that represents the
 * area of a circle with the given radius. The calculation involves multiplying the
 * mathematical constant pi (π) by the radius squared.
 */
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

/**
 * @description This function counts the number of occurrences of each element within
 * an array.
 * 
 * @param { array } arr - The "arr" input parameter is the array whose elements'
 * occurrences should be counted. It is passed into the reduce function as its second
 * argument.
 * 
 * @returns { object } The function `countOccurrences(arr)` takes an array `arr` as
 * input and returns an object containing each element of `arr` as a key with a count
 * of how many times that element appears within the original array.
 * The function counts the number of times each element of the given array is found.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

/**
 * @description This function takes a sentence as input and capitalizes all the words
 * by converting only the first letter of each word to upper case and returning the
 * resulting list of capitalized words joined together with spaces between them.
 * 
 * @param { string } sentence - The "sentence" input parameter takes a string of words
 * as input and passes it to the map function for capitalization.
 * 
 * @returns { string } Here is a description of the output:
 * 
 * This function takes a string sentence as an argument and splits it into an array
 * of words using the "split()". Then it iterates over the array and uses the "charAt()
 * method to get the first character of each word (capitalizing it using "toUpperCase()"
 * and then joins the resulting capitalized words back into a string with spaces
 * ("join('')"). Finally it returns this joined string as output. The resultant
 * function has every word's first letter capitalized.
 */
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
