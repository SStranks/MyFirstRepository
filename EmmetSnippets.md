# Emmet Snippets

[Emmet Snippets CheatSheet](https://docs.emmet.io/cheat-sheet/)

### Basic Tags, Classes & IDs

```html

<!-- BASIC TAGS, CLASSES & IDS -->

<!-- div -->
<div></div>

<!-- h1 -->
<h1></h1>

<!-- Common Shortcuts for bq hdr ftr btn -->
<blockquote></blockquote>
<header></header>
<footer></footer>
<button></button>

<!-- h1.myheading -->
<h1 class="myheading"></h1>

<!-- div.myclass OR .myclass -->
<div class="myclass"></div>

<!-- .class1.class2 -->
<div class="class1 class2"></div>

<!-- div#myid or #myid -->
<div id="myid"></div>

<!-- #myid.myclass -->
<div id="myid" class="myclass"></div>

```
### Adding Content

```HTML

<!-- ADDING CONTENT -->

<!-- h1{My Title} -->
<h1>My Title</h1>

<!-- h1.red{My Red Title} -->
<h1 class="red">My Red Title</h1>

```
### Nesting

```HTML

<!-- NESTING -->

<!-- div>ul>li -->
<div>
  <ul>
    <il></il>
  </ul>
</div>

<!-- div>ul>li{List Item 1} -->
<div>
  <ul>
    <li>List Item 1</li>
  </ul>
</div>

```
### Multiplication

```HTML

<!-- MULTIPLICATION -->

<!-- ul#navigation>li*5>{List Item 1} -->
<ul id="navigation">
  <li>List Item 1</li>
  <li>List Item 1</li>
  <li>List Item 1</li>
  <li>List Item 1</li>
  <li>List Item 1</li>
</ul>

<!-- ul#navigation>li*5>{List Item $} -->
<ul id="navigation">
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
  <li>List Item 4</li>
  <li>List Item 5</li>
</ul>

```

### Siblings

```HTML

<!-- SIBLINGS + -->

<!-- div+ul+li -->
<div></div>
<ul></ul>
<li></li>

<!-- h1.title+p.body -->
<h1 class="title"></h1>
<p class="body"></p>

<!-- div>h1.title+p.body -->
<div>
  <h1 class="title"></h1>
  <p class="body"></p>
</div>

```

### Grouping

```HTML

<!-- GROUPING -->

<!-- div>(header>ul>li*2>a)+footer>p -->
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>

```

### Attributes

```HTML

<!-- ATTRIBUTES -->

<!-- a[href="http//google.com" target="_blank"] -->
<a href="http//google.com" target="_blank"></a>

```

### Forms and Input

```HTML

<!-- FORMS AND INPUT -->

<!-- form -->
<form action=""></form>

<!-- form:get -->
<form action="" method="get"></form>

<!-- form:post -->
<form action="" method="post"></form>

<!-- label -->
<label for=""></label>

<!-- input -->
<input type="text">

<!-- inp -->
<input type="text" name="" id="">

<!-- input:email -->
<input type="email" name="" id="">

<!-- input:s -->
<input type="submit" value="">

<!-- select -->
<select name="" id=""></select>

```

```HTML
<!-- EXTENDED STRUCTURE -->
<!-- BUG: Doesn't work in VSCode - Bug not fixed -->
```

### DocType and Structure

```HTML

<!-- DOCTYPE AND STRUCTURE -->

<!-- ! -->
<!-- HTML5 by default -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>

```

### Lorem Ipsum Generator

```HTML

<!-- LOREM IPSUM GENERATOR -->

<!-- lorem -->
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem molestiae dolor at maiores placeat, necessitatibus perferendis eos, voluptas unde inventore nihil dolores optio ab incidunt totam accusantium error, asperiores enim.

<!-- lorem10 -->
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, aliquam.

<!-- ul.mylist>lorem10.item*4 -->
<ul class="mylist">
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatibus.</li>
  <li>Alias cupiditate magnam tempore possimus sed blanditiis itaque expedita commodi.</li>
  <li>Ab odio possimus minus laboriosam, animi optio illum illo debitis.</li>
  <li>Impedit velit unde, expedita neque nam recusandae quae veritatis ducimus.</li>
</ul>

```