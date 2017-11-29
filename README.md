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

#### letter-padding

```javascript
// default
letter-padding: 1

// very small spacing
letter-padding: 0

// XXXX
// XXXX
// XXXX
// XXXX

// very large padding
letter-padding: 4

// X   X   X   X
//
// X   X   X   X
//
// X   X   X   X
//
// X   X   X   X
```
Use this option in order to either increase or decrease the padding between letters.

#### font-family

```javascript
// default
font-family: "monospace"

// can use system font or use your own
font-family: "arial"
```
Specify font family of resulting animation.

#### font-size

```javascript
// default
font-size: 25

// small
font-size: 10

// big
font-size: 100
```
Specify font size in pixels.

#### background-color

```javascript
// default
background-color: "white"

// can accept named color...
background-color: "green"

// or any css-valid color
background-color: "#ffa100"
```
Specify background color.

#### foreground-color

```javascript
// default
foreground-color: "black"

// can accept named color...
foreground-color: "purple"

// or any css-valid color
foreground-color: "#ffa100"
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
