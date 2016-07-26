## Matches an email `sajib@example.com`
- Starts with a word
- Followed by an @ character
- Followed by another word
- TLD can be com or net or org or edu

#### Explain
- `/\w@\w/` matches only `b@e`
   - `\w` only searches for 1 word-like character.
- `/\w+@\w+/` matches `sajib@example`
    - Because the '.' is not a word.
- `/\w+@\w+.\w+` matches `sajib@example.com` but it also matches `sajib@example!com`!
    - The `.` is a wildcard metacharacter that matches any character except newline.
- `/\w+@\w+\.(com|net|org|edu)/i` more specific about the Top-level domain (TLD)
- `/^\w+@\w+\.(com|net|org|edu)$/i` 

#### In Short 
- `.` matches any character except newline
- `\.` matches literal `.` character
- `+` matches 1 or more times
- `\+` matches literal `+` character
- `?` make proceeding pattern optional
- `\?` matches literal `?` character
- `^` start looking at the beginning of the subject
- `$` stop looking at the end of subject 
- /i is modifier, letter can be lower case or upper case.
 
- Detecting Word Boundaries With the Boundary Metacharacter
    - `\b` is boundary metacharacter that matches whole words only
- Marking a Group of Characters as Optional
    - Group characters followed by `?` to make them all optional
    - 
    - `/pirate(\sship)?/` matches both `pirate ship` or `pirate boat`
- Writing a Shorter Pattern With the `NOT` operator
    - `/[a-z\s,]+/i` and `/[^\d]+/i`
    - `\d` means any number
    - The `^` means `not` when placed within a character set
    - `/^[^\d]+/i` here, first `^` is used to anchor beginning of subject
- Even Shorted With Negated Shorted
     - `[^\d]` = `\D` = match every character except numbers
     - [^\s] = `S` = match every character except whitespace
     - [^\w] = \W = match every character except words
- Matching a Specific Number of Times With Interval Expressions
    - `/[a-z]{2}/` matches any character from a-z exactly 2 times
    - `/[a-z]{1,3}/` matches the character a minimum of 1 time and maximum of 3 times
    - 
#### Multiline Strings:
```
King penguin
Emperor penguin
```
Rule: /penguin/igm

- i - case ignore
- g - global modifier, Match 'penguin' as many times as possible with global modifier
- m - Treat string as multiple lines. That is, change `^` and `$` from matching the start or end of line 
  only at the left and right ends of the string to matching them anywhere within the string.

#### Capture Groups:
- (regex) - Parentheses group the regex between them and return the value.
- (?:regex) - Non-capturing parentheses group the regex between them.
- 

## Examples
- Rule: `/^(job\/\w+((\/job\/\w+)*)?)$/`
    - Start with `job/<name1>`, followed by `/job/<name2>/job/<name3>...` unlimited time
    - matches: job/n1/job/n2/job/n3/job/n4
        - passing two values `a` and `b` (let).
        - a = job/n1/job/n2/job/n3/job/n4
        - b = /job/n2/job/n3/job/n4
        
- Rule: `/^job\/\w+\/((job\/\w+\/)*)?(\d*)$/`
    - Start with `job/<name1>`, followed by `/job/<name2>/job/<name3>...` and end with and integer value.
    - matches `job/n1/job/n2/job/n3/job/n4/123`
        - passing 4 values `a`, `b`, `c`, `d` (let)
        - a = job/n1/job/n2/job/n3/job/n4/123
        - b = job/n2/job/n3/job/n4/
        - c = job/n4/
        - d = 123

                            

























