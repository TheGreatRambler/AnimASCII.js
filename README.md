# AnimASCII


ASCII art animation library in Javascript using Canvas

Features

 * Animations are stored in text files
 * Simple format
 * Uses canvas
 * Currently does not support color

## Installation

1. Download animascii.js
2. Download ROT.js from [here](https://github.com/ondras/rot.js/)
2. Put ROT.js and animascii.js into the head of your HTML document
3. Make some animations!

```html

<html>
	<head>
    	<script src="js/ROT.js"></script>
        <script src="js/animascii.js"></script>
	</head>
	<body>
    	<!-- Do whatever you want here -->
        <div id="container"></div>
        <script>
        	var animation = new animascii({src: "animation.txt", display: document.getElementById("container")}, function() {
            	console.log("finished!");
            });
        </script>
	</body>
</html>

```

## API guide

```javascript
new animascii(options, callback);
```
Create animascii instance and run an animation.

### options

#### display

```javascript
// use vanilla javascript...
display: document.getElementById("put-id-here")

// or use jQuery!
display: $("put-id-here")[0]
```
Pass in an element object in order to create a display.

#### src

```javascript
// Can be path...
src: "path/to/animation.txt"
// or array
src: [["_/\_____",
       "-00-----"],
      ["__/\____",
       "--00----"], 
      ["___/\___",
       "---00---"],
      ["____/\__",
       "----00--"],
      ["_____/\_",
       "-----00-"]]
```
Either a string or array. If it is a string, it will be parsed as a path to an animation file. If it is an array, it will be parsed as a raw animation.

#### repeat

```javascript
// default
repeat: 1

// infinite
repeat: -1

// repeat any number of times
repeat: 42
```
Specifies amount of times to repeat animation.

#### letter_padding

```javascript
// default
letter_padding: 1

// very small spacing
letter_padding: 0

// XXXX
// XXXX
// XXXX
// XXXX

// very large padding
letter_padding: 4

// X   X   X   X
//
// X   X   X   X
//
// X   X   X   X
//
// X   X   X   X
```
Use this option in order to either increase or decrease the padding between letters.

#### font_family

```javascript
// default
font_family: "monospace"

// can use system font or use your own
font_family: "arial"
```
Specify font family of resulting animation.

#### font_size

```javascript
// default
font_size: 25

// small
font_size: 10

// big
font_size: 100
```
Specify font size in pixels.

#### background_color

```javascript
// default
background_color: "white"

// can accept named color...
background_color: "green"

// or any css-valid color
background_color: "#ffa100"
```
Specify background color.

#### foreground_color

```javascript
// default
foreground_color: "black"

// can accept named color...
foreground_color: "purple"

// or any css-valid color
foreground_color: "#ffa100"
```
Specify foreground color.

### callback

```javascript
new animascii(options, function() {
	console.log("Finished!");
});
```
Function executed after animation has finished. If `options.repeat` is infinite, callback will never run.

## Acknowledgements

 * Thanks to [ROT.js](https://github.com/ondras/rot.js/) for simple grid-based rendering
