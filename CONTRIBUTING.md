# Where to develop
Pull request to the [develop](https://github.com/MrSaturnIdk/MrSaturnIdk.github.io/tree/develop) branch.
# Organization
- Pretty important to use naming conventions and organization so you don't get lost in wondering what a variable is.
## Commenting
- Add a space between the comment start and end syntax. Easier to read.
  + JavaScript has inline comments. They should still have a space after the `//`. Obviously though, multiline comments are preferred for, well, multiple lines.
  + If you find yourself using multiline html/css comments, use syntax similar to a js multiline.
```html
<!-- Good html comment -->

<!--Bad html comment-->
```
```css
/* Good css comment */

/*Bad css comment*/
```
```js
// Good inline js comment
/*
Good js multiline comment
Good js multiline comment
*/

//Bad inline js comment
/*Bad js multiline comment
Bad js multiline comment*/
//HORRIBLE js multiline comment
//HORRIBLE js multiline comment
```
## Files
### Naming
- Files should be named with **kebab-case**
```
Good
foo-bar.txt

Bad
foobar.txt
```
### Layout
- JavaScript goes in **src**
- CSS goes in **styles**
- Static files (like images) go in **assets**
  + Icons go in **assets/icons**
```
root/
    src/
        js files
    styles/
        css files
    assets/
        static files (images etc)
        icons/
            icons
```
## HTML
### Naming
- IDs/Classes should use **kebab-case**
- Use " instead of '
- End self-closing with " /" over leaving it empty
- Define types in files
```html
<!-- Good -->
<img src="../assets/foo-bar.png" id="foo-bar" type="image.png"/>

<!-- Bad -->
<img src='../assets/foobar.png' id='foobar'>
```
### Layout
- Define head in this order: 
  1. Charset
  2. Viewport
  3. Icons
  4. Title/desc metadata
  5. CSS
  6. JavaScript
- Use **relative links** (not styling, root breaks local bugtesting)
```html
<!-- Good -->
<img src="../assets/foo-bar.png">

<!-- Broken -->
<img src="/assets/foo-bar.png">
```
### Template
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>foo</title>
        <meta name="description" content="bar" />
        <link rel="apple-touch-icon" sizes="180x180" href="../assets/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href=../assets/icons/favicon-16x16.png" />
        <link rel="manifest" href="../assets/icons/site.webmanifest" />
        <link rel="stylesheet" href="../styles/base.css" /> <!-- always have base.css for the background and font sizes and stuff -->
        <link rel="stylsheet" href="../foo.css" /> <!-- second stylesheet specfic to page -->
        <script src="../src/bar.js" defer></script>
    </head>
    <body>
        <img src="../assets/spinning.gif" id="saturn" type="image/gif" /> <!-- Mr saturn spinning gif (defined in base.css) -->
        <noscript><img src="../assets/enable-java.png" alt="enable java please" class="giant" id="no-script"></noscript> <!-- if java isnt enabled (for pages with js) -->
        <img src="../assets/loading-screen.png" alt="loading" class="giant" id="loading-screen"> <!-- loading screen is removed once js is initialized
Also note these IDs and classes are defined in base.css -->
    </body>
</html>
```
## CSS
### Naming
- At-rule rules, classes, and ids should be **kebab-case**
### Layout
Define rules in this order:
1. At-rules
2. Element rules
3. Classes
4. Ids
### Unscrollability
If a page should be unscrollable, add 
```css
body {
    overflow: hidden;
}
```
```css
@keyframes foo-bar {
    /* idk */ 
}
p {
    /* idk */
}
.foo-bar {
    /* also YOU should never leave css empty in actual code */
}
#foo-bar {
    /* k? */
}
```
## JavaScript
**Only** use let if the variable changes.

Otherwise, use **const**.
### Naming
- Be descriptive
- *Normal* variables, methods, class static and functions use **camelCase**
- *Constant* variables use **SCREAMING_SNAKE_CASE**
- Classes and getters use **PascalCase**
- Use ' over "
```js
// Good
if (1 == 2) {
    // code
} else {
    // code
}

// Bad
if(1==2){
    // code
}
else{

}
```
### Layout
1. Constants
2. Let variables
3. Classes
  1. Constructors
  2. Static
  3. Method
  4. Getter
5. Variables (usually constants) pointing to implementation of this class
6. Functions
7. Remove loading screen
8. Implementation (if so)
```js
// Good
const LOADING_SCREEN = document.querySelector('#loading-screen');
let fooBar = '0';
class FooBar {
    constructor(fooBar) {
        this.moreFooBar = fooBar;
    }
    static evenMoreFooBar = 'highFooBarAmount';
    evenMoreFrickinFooBar() {
        return this.moreFooBar;
    }
    get IWillContinueToUseFooBar {
        return this.evenMoreFrickinFooBar;
    }
}
function fooBarFunc() {
    fooBar++;
}
LOADING_SCREEN.style.display = 'none';
// implemetation idk
```
# Did you read all this?
Put `goober` in your pull requests idk

Just wanna make sure you read
