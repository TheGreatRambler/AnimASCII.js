function animascii(inputoptions, callback) {
    var sourcearraybool = Array.isArray(inputoptions.src);
    var options = {};
    this.iteration = 0;

    function setDefaults() {
        if (typeof inputoptions.repeat === "undefined") {
            options.repeat = 1;
        } else {
            options.repeat = inputoptions.repeat;
        }
        if (typeof inputoptions.letter_padding === "undefined") {
            options.letter_padding = 1;
        } else {
            options.letter_padding = inputoptions.letter_padding;
        }
        if (typeof inputoptions.font_family === "undefined") {
            options.font_family = "monospace";
        } else {
            options.font_family = inputoptions.font_family;
        }
        if (typeof inputoptions.font_size === "undefined") {
            options.font_size = 25;
        } else {
            options.font_size = inputoptions.font_size;
        }
        if (typeof inputoptions.background_color === "undefined") {
            options.background_color = inputoptions.background_color;
        } else {
            options.background_color = "white";
        }
        if (typeof inputoptions.foreground_color === "undefined") {
            options.foreground_color = "black";
        } else {
            options.foreground_color = inputoptions.foreground_color;
        }
        if (typeof inputoptions.delay === "undefined") {
            options.delay = 200;
        } else {
            options.delay = inputoptions.delay;
        }
    }

    function parsetextdoc(options, method, func) {
        function find(collection, predicate, fromIndex) {
            var result;
            collection.forEach(function(value) {
                if (value[predicate[0]] === value[predicate[1]]) {
                    result = value;
                }
            });
            return result;
        }
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demo").innerHTML =
                    this.responseText;


                var lines = this.responseText.split('\n');
                var data = {};
                lines.forEach(function(result) {
                    var linedata = find(method, ['symbol', result.charAt(0)]);
                    if (typeof linedata !== "undefined") {
                        if (array.isArray(data[linedata.name]) === false) {
                            data[linedata.name] = [];
                        }
                        data[linedata.name].push(result.substr(1));
                    }
                });
                func(data);
            }
        };
        xhttp.open("GET", options.src, true);
        xhttp.send();
    }

    setDefaults();

    var asciiscreen = new ROT.Display({
            fontSize: options.font_size,
            bg: options.background_color,
            fg: options.foreground_color,
            fontFamily: options.font_family,
            spacing: options.letter_padding
        });
    ROT.Display.Rect.cache = true;
    options.display.innerHTML = asciiscreen.getContainer();

    function draw(n, data) {
        if (n < numofframes) {
            var startval = n * height;
            for (let t = 0; t < height; t++) {
                asciiscreen.drawText(cornerx, cornery + t, data.frames[startval + t], width);
            }
            setTimeout(function() {
                draw(n++, data);
            }, data.frametime[n]);
        } else {
            if (options.repeat === -1 || this.iteration < options.repeat) {
                this.iteration++;
                draw(0);
            } else {
                callback();
            }
        }
    }

    if (sourcearraybool === false) {
        game_funcs.parsetextdoc({
                src: inputoptions.src
            }, [{
                    symbol: "#",
                    name: "widthheight"
                }, {
                    symbol: "^",
                    name: "frametime"
                }, {
                    symbol: "%",
                    name: "frames"
                }, {
                    symbol: "_",
                    name: "comments"
                }, {
                    symbol: "+",
                    name: "name"
                }
            ], function(filedata) {

                var width = filedata.widthheight[0];
                var height = filedata.widthheight[1];
                asciiscreen.setOptions({
                        width: width,
                        height: height
                    });
                var cornerx = 0;
                var cornery = 0;
                var numofframes = filedata.frames.length / height;
                draw(0, filedata);
            });
    } else {
        draw(0, {
                widthheight: [inputoptions.src[0][0].length, inputoptions.src[0].length],
                frametime: Array(inputoptions.src.length).fill(options.delay),
                frames: [].concat.apply([], inputoptions.src)
            })
    }
}
