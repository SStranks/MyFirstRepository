# Markdown Syntax

<br>

## Headers

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

<!-- Headings -->
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<br>

## Italic Text

```
*This text* is italic

_This text_ is also italic
```

<!-- Italics -->
*This text* is italic

_This text_ is also italic

<br>

## Strong Text

```
**This text** is strong

__This text__ is also strong
```

<!-- Strong -->
**This text** is strong

__This text__ is also strong

<br>

## Strikethrough Text

```
~~This text~~ is strikethrough
```

<!-- Strikethrough -->
~~This text~~ is strikethrough

<br>

## Horizontal Rules

```
---
___
```

<!-- Horizontal Rule -->

---
___

<br>

## Blockquote

```
> This is a quote
```

<!-- Blockquote -->
> This is a quote

<br>

## Hyperlinks

```
[Google](http://www.google.com)

[Google](http://www.google.com "Google")
```

<!-- Links -->
[Google](http://www.google.com)

[Google](http://www.google.com "Google")

<br>

## Unordered Lists

```
* Item 1
* Item 2
* Item 3
  * Nested Item 1
  * Nested Item 2
  ```

<!-- UL -->
* Item 1
* Item 2
* Item 3
  * Nested Item 1
  * Nested Item 2

  <br>

## Ordered Lists

```
1. Item 1
1. Item 2
1. Item 3
```
1. Item 1
1. Item 2
1. Item 3

<br>

## Inline Code Block

```
`<p>This is a paragraph</p>`
```

<!-- Inline Code Block -->
`<p>This is a paragraph</p>`

<br>

## Images

```
![Markdown Logo](https://raw.githubusercontent.com/SStranks/MyFirstRepository/master/HeartandBrain.jpg)
```

<!-- Images -->
![Markdown Logo](https://raw.githubusercontent.com/SStranks/MyFirstRepository/master/HeartandBrain.jpg)

<br>

## Code Blocks

##### Note: To codeblock the 'codeblock triple backtick'; parent nesting object uses higher integer of ticks (four).

### Bash

````
```bash
  npm install

  npm start
```
````

```bash
  npm install

  npm start
```

### Javascript

````
```javascript
  function add(num1, num2) {
    return num1 + num2;
  }
```
````

```javascript
  function add(num1, num2) {
    return num1 + num2;
  }
```

### Python

````
```python
  def add(num1, num2):
    return num1 + num2
```
````

```python
  def add(num1, num2):
    return num1 + num2
```

<br>

## Tables

```
| Default Header | Left Align    | Center Align | Right Align |
| -------------- | :------------ | :----------: | ----------: | 
| John Doe | john@gmail.com | 0207 1111 9999 | Westminster SW1A 0AA
| Jagger | j@g.com | 0207 2222 8888 | The Eye SE1 7PB
```

<!-- Tables -->
| Default Header | Left Align    | Center Align | Right Align |
| -------------- | :------------ | :----------: | ----------: | 
| John Doe | john@gmail.com | 0207 1111 9999 | Westminster SW1A 0AA
| Jagger | j@g.com | 0207 2222 8888 | The Eye SE1 7PB

<br>

## Task Lists

```
* [x] Task 1
* [x] Task 2
* [ ] Task 3
```

<!-- Task List -->
* [x] Task 1
* [x] Task 2
* [ ] Task 3