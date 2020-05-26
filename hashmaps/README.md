# Sherlock and Anagrams

Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example **_s=mom_**, the list of all anagrammatic pairs is **_[m,m],[mo,om]_** at positions **_[[0],[2]],[[0,1],[1,2]]_** respectively.

Function Description

Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in **_s_**.

sherlockAndAnagrams has the following parameter(s):

- s: a string.

_Input Format_

The first line contains an integer **_q_**, the number of queries.
Each of the next **_q_** lines contains a string **_s_** to analyze.

String **_s_** contains only lowercase letters ascii[a-z].

_Output Format_

For each query, return the number of unordered anagrammatic pairs.

_Sample Input 0_

- 2
- abba
- abcd

_Sample Output 0_

- 4
- 0

_Explanation 0_

The list of all anagrammatic pairs is **_[a,a],[ab,ba],[b,b],[abb,bba]_**

No anagrammatic pairs exist in the second query as no character repeats.

_Sample Input 1_

- 2
- ifailuhkqq
- kkkk

_Sample Output 1_

- 3
- 10

_Explanation 1_

For the first query, we have anagram pairs and at **_[i,i],[q,q]_** and **_[ifa,fai]_**

For the second query:
- There are 6 anagrams of the form  **_[k,k]._**
- There are 3 anagrams of the form  **_[kk,kk]_**
- There is 1 anagram of the form  **_[kkk,kkk]_**