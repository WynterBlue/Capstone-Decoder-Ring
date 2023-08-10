# Capstone-Decoder-Ring

## Application that will either encode or decode a string using a variety of ciphers.

Includes:
- Caesar Shift cipher
- Polybius Square cipher
- Substitution cipher

 ---
### Caesar Shift

Type of substitution cipher originally used by Julius Caesar to protect messages of military significance.
It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

  ---
  ### Polybius Square
   |  | 1 | 2 | 3 | 4 | 5 |
   | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
   | 1 | A | B | C | D | E |
   | 2 | F | G | H | I/J | K |
   | 3 | L | M | N | O | P |
   | 4 | Q | R | S | T | U |
   | 5 | V | W | X | Y | Z |

A cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate.
For example, in the above table, the letter B would be represented by the numerical pair 21.
Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like.
However, in this case, the grid will be arranged as above and coordinates will be read by comparing the first digit to 
the number on the top of the table and the second digit to that on the left.

 ---
### Substitution Cipher
![sub-cipher](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/19c12a6ee38ceddd82d75e12edf53189-image.png)

The substitution cipher requires a standard alphabet and a substitution alphabet. 
Letters from the standard alphabet will be transposed to the substitution alphabet.

For example, in the image above, the word HELLO would be translated as follows:

- H becomes R.
- E becomes M.
- L becomes W.
- O becomes L.
