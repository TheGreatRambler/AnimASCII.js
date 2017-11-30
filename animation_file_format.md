# Animation file format

An example of a animation file is as follows:

```text
+ Moving Zero
_ A zero going around a grid
#5
#5
^200
%_____
%_____
%_____
%_____
%___0_
^200
%_____
%_____
%_____
%_____
%__0__
^200
%_____
%_____
%_____
%__0__
%_____
^1600
%_____
%_____
%_____
%_0___
%_____
^200
%_____
%_____
%_0___
%_____
%_____
^200
%_____
%_____
%__0__
%_____
%_____
^500
%_____
%__0__
%_____
%_____
%_____
^200
%__0__
%_____
%_____
%_____
%_____
```

Files are parsed based on the first charactor of each line.

Charactors with significance include:
```text
+: Name
_: Description and/or comments
#: Width and height, first occurance of # will count as width, second occurance will count as height, all other occurances are ignored.
^: Length of each frame
%: Frames of animation
```
Animation file is saved as a text file with `.txt` extension.
