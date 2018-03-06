# AnimASCII

<img src="thegreatrambler.com/images/code-stuff/AnimASCII.gif">

![AnimASCII Logo](http://www.thegreatrambler.com/images/code-stuff/AnimASCII.gif)

ASCII art animation library in Javascript using Canvas. Check out demo [here](http://thegreatrambler.com/code-demos/animascii/animasciidemo.html) 

Have you ever wanted to make ASCII art but it didnt seem interesting enough? Well, take ASCII art to the next level with AnimASCII. AnimASCII makes it possible to make videos and movies in javascript with only the canvas and a whole heck of a lot of letters!

Features

 * Animations are stored in text files or as regular javascript arrays
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
display: $("#put-id-here")[0]
```
Pass in an element object in order to create a display.

#### src

```javascript
// Can be path to animation file...
src: "path/to/animation.txt"
// or array
src: [["()______",
       "00------"],
      ["_()_____",
       "-00-----"],
      ["__()____",
       "--00----"], 
      ["___()___",
       "---00---"],
      ["____()__",
       "----00--"],
      ["_____()_",
       "-----00-"],
      ["______()",
       "------00"]]
```
Either a string or array. If it is a string, it will be parsed as a path to an animation file. Read about animation files [here](animation_file_format.md). If it is an array, it will be parsed as a raw animation.

#### delay

```javascript
// default
delay: 200

// delay of one second
delay: 1000
```
Specifies delay between each frame of the animation.

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
Specify font family of resulting animation. Font must be loaded before you call AnimASCII, or the font will not be loaded onto the display.

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
Function executed after animation has finished. This is optional. If `options.repeat` is infinite, callback will never run unless you run `stop()`.

### methods

```javascript
var animation = new animascii(options);
```

#### stop();

```javascript
animation.stop();
```

Stop the animation even if repeat is set to `-1` (infinite). Works for both infinite repeats and repeats that aren't infinite

Dont forget to :star: if you like!

## Acknowledgements

 * Thanks to [ROT.js](https://github.com/ondras/rot.js/) for simple grid-based rendering
