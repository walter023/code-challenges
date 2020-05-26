# Sherlock and the Valid String

Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string **_s_**, determine if it is valid. If so, return YES, otherwise return NO.

For example, if _s=abc_, it is a valid string because frequencies are _{a:1, b:1, c:1}_. So is _s=abcc_ because we can remove one _c_ and have 1 of each character in the remaining string. If  _s=abccc_ however, the string is not valid as we can only remove 1 occurrence of _c_. That would leave character frequencies of. _{a:1, b:1, c:1}_ 

Function Description

Complete the isValid function in the editor below. It should return either the string YES or the string NO.

isValid has the following parameter(s):

- s: a string

_Input Format_

A single string **_s_**.

Output Format

Print YES if string **_s_** is valid, otherwise, print NO.

_Sample Input 0_

aabbcd

_Sample Output 0_

NO

_Explanation 0_

Given **_s="aabbcd"_**, we would need to remove two characters, both c and d => aabb or a and b=> abcd, to make it valid. We are limited to removing only one character, so  is **_s_** invalid.

_Sample Input 1_

aabbccddeefghi

_Sample Output 1_

NO

Frequency counts for the letters are as follows:

_{'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}_

There are two ways to make the valid string:

Remove  characters with a frequency of _1_:_{fghi}_.

Remove  characters of frequency _2_:_{abcde}_.

Neither of these is an option.

_Sample Input 2_

abcdefghhgfedecba

_Sample Output 2_

YES

_Explanation 2_

All characters occur twice except for **_e_** which occurs **3** times. We can delete one instance of  **_e_** to have a valid string.