var T = document,
    V = document.currentScript,
    U = 'script.js';

if (true) {//!("complete" == T.readyState || "loaded" == T.readyState || V && V.async)) {
    try {
        T.write('This is bootstrap content.');
        //T.write('<script id="' + W + '" src="' + U + '">\x3c/script>')
    } catch (X) {}
}
