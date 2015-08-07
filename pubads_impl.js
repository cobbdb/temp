﻿(function() {
    var l, p = this,
        r = function(a) {
            return void 0 !== a
        },
        aa = function() {},
        ba = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" !=
                        typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ca = function(a) {
            return "array" == ba(a)
        },
        da = function(a) {
            var b = ba(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = function(a) {
            return "string" == typeof a
        },
        v = function(a) {
            return "number" == typeof a
        },
        ea = function(a) {
            return "function" == ba(a)
        },
        w = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        fa = "closure_uid_" +
        (1E9 * Math.random() >>> 0),
        ga = 0,
        ha = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ia = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        x = function(a, b, c) {
            x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
            return x.apply(null, arguments)
        },
        y = function(a, b) {
            var c = a.split("."),
                d = p;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) !c.length && r(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
        },
        z = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.la = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Na = function(a, c, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[c].apply(a, g)
            }
        };
    var ja = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ja);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    z(ja, Error);
    ja.prototype.name = "CustomError";
    var ka;
    var la = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        ma = function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        ua = function(a) {
            if (!na.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(oa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(pa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(qa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ra, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(sa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ta, "&#0;"));
            return a
        },
        oa = /&/g,
        pa = /</g,
        qa = />/g,
        ra = /"/g,
        sa = /'/g,
        ta = /\x00/g,
        na = /[\x00&<>"']/,
        xa = function(a) {
            return -1 != a.indexOf("&") ? "document" in p ? va(a) : wa(a) : a
        },
        va = function(a) {
            var b = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                c;
            c = p.document.createElement("div");
            return a.replace(ya, function(a, e) {
                var f = b[a];
                if (f) return f;
                if ("#" == e.charAt(0)) {
                    var g = Number("0" + e.substr(1));
                    isNaN(g) || (f = String.fromCharCode(g))
                }
                f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
                return b[a] = f
            })
        },
        wa = function(a) {
            return a.replace(/&([^;]+);/g, function(a, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        if ("#" == c.charAt(0)) {
                            var d = Number("0" + c.substr(1));
                            if (!isNaN(d)) return String.fromCharCode(d)
                        }
                        return a
                }
            })
        },
        ya = /&([^;\s<&]+);?/g,
        za = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\"
        },
        Aa = {
            "'": "\\'"
        },
        Ba = function(a) {
            a = String(a);
            if (a.quote) return a.quote();
            for (var b = ['"'], c = 0; c < a.length; c++) {
                var d = a.charAt(c),
                    e = d.charCodeAt(0),
                    f = c + 1,
                    g;
                if (!(g = za[d])) {
                    if (!(31 < e && 127 > e))
                        if (d in Aa) d = Aa[d];
                        else if (d in
                        za) d = Aa[d] = za[d];
                    else {
                        e = d;
                        g = d.charCodeAt(0);
                        if (31 < g && 127 > g) e = d;
                        else {
                            if (256 > g) {
                                if (e = "\\x", 16 > g || 256 < g) e += "0"
                            } else e = "\\u", 4096 > g && (e += "0");
                            e += g.toString(16).toUpperCase()
                        }
                        d = Aa[d] = e
                    }
                    g = d
                }
                b[f] = g
            }
            b.push('"');
            return b.join("")
        },
        Ca = function(a) {
            return null == a ? "" : String(a)
        },
        Da = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ea = Array.prototype,
        Fa = function(a, b) {
            if (u(a)) return u(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ga = function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ha = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = u(a) ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Ia = function(a, b) {
            for (var c = a.length, d = Array(c), e = u(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0,
                e[f], f, a));
            return d
        },
        Ja = function(a, b) {
            for (var c = a.length, d = u(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        Ka = function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        La = function(a, b) {
            var c = Ka(a, b, void 0);
            0 <= c && Ea.splice.call(a, c, 1)
        },
        Ma = function(a) {
            return Ea.concat.apply(Ea, arguments)
        },
        Na = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Oa = function(a, b, c) {
            return 2 >=
                arguments.length ? Ea.slice.call(a, b) : Ea.slice.call(a, b, c)
        },
        Qa = function(a) {
            for (var b = {}, c = 0, d = 0; d < a.length;) {
                var e = a[d++],
                    f;
                f = e;
                f = w(f) ? "o" + (f[fa] || (f[fa] = ++ga)) : (typeof f).charAt(0) + f;
                Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
            }
            a.length = c
        },
        Ra = function(a, b) {
            for (var c = {}, d = 0; d < a.length; d++) {
                var e = a[d],
                    f = b.call(void 0, e, d, a);
                r(f) && (c[f] || (c[f] = [])).push(e)
            }
            return c
        };
    var Sa = function(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        },
        Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ua = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ta.length; f++) c = Ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        Va = function(a) {
            var b = arguments.length;
            if (1 == b && ca(arguments[0])) return Va.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    Va("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    var A = function(a, b) {
        this.x = r(a) ? a : 0;
        this.y = r(b) ? b : 0
    };
    A.prototype.clone = function() {
        return new A(this.x, this.y)
    };
    A.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    A.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    A.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var B = function(a, b) {
        this.width = a;
        this.height = b
    };
    l = B.prototype;
    l.clone = function() {
        return new B(this.width, this.height)
    };
    l.isEmpty = function() {
        return !(this.width * this.height)
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Wa;
    a: {
        var Xa = p.navigator;
        if (Xa) {
            var Ya = Xa.userAgent;
            if (Ya) {
                Wa = Ya;
                break a
            }
        }
        Wa = ""
    }
    var C = function(a) {
        return -1 != Wa.indexOf(a)
    };
    var Za = function() {
            return C("Opera") || C("OPR")
        },
        $a = function() {
            return (C("Chrome") || C("CriOS")) && !Za() && !C("Edge")
        };
    var ab = function() {
        return C("iPhone") && !C("iPod") && !C("iPad")
    };
    var bb = Za(),
        D = C("Trident") || C("MSIE"),
        cb = C("Edge"),
        db = C("Gecko") && !(-1 != Wa.toLowerCase().indexOf("webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        eb = -1 != Wa.toLowerCase().indexOf("webkit") && !C("Edge"),
        fb = function() {
            var a = Wa;
            if (db) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (cb) return /Edge\/([\d\.]+)/.exec(a);
            if (D) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (eb) return /WebKit\/(\S+)/.exec(a)
        },
        gb = function() {
            var a = p.document;
            return a ? a.documentMode : void 0
        },
        hb = function() {
            if (bb && p.opera) {
                var a =
                    p.opera.version;
                return ea(a) ? a() : a
            }
            var a = "",
                b = fb();
            b && (a = b ? b[1] : "");
            return D && (b = gb(), b > parseFloat(a)) ? String(b) : a
        }(),
        ib = {},
        jb = function(a) {
            var b;
            if (!(b = ib[a])) {
                b = 0;
                for (var c = ma(String(hb)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        h = d[f] || "",
                        k = RegExp("(\\d*)(\\D*)", "g"),
                        n = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var m = k.exec(g) || ["", "", ""],
                            t = n.exec(h) || ["", "", ""];
                        if (0 == m[0].length && 0 == t[0].length) break;
                        b = Da(0 == m[1].length ? 0 : parseInt(m[1], 10), 0 == t[1].length ?
                            0 : parseInt(t[1], 10)) || Da(0 == m[2].length, 0 == t[2].length) || Da(m[2], t[2])
                    } while (0 == b)
                }
                b = ib[a] = 0 <= b
            }
            return b
        },
        kb = p.document,
        lb = kb && D ? gb() || ("CSS1Compat" == kb.compatMode ? parseInt(hb, 10) : 5) : void 0;
    var mb = !D || 9 <= lb,
        nb = !db && !D || D && 9 <= lb || db && jb("1.9.1");
    D && jb("9");
    var ob = D || bb || eb;
    var rb = function(a) {
            return a ? new pb(qb(a)) : ka || (ka = new pb)
        },
        sb = function(a) {
            var b = document;
            return u(a) ? b.getElementById(a) : a
        },
        ub = function(a, b) {
            Sa(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : tb.hasOwnProperty(d) ? a.setAttribute(tb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        tb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        vb = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new B(a.clientWidth, a.clientHeight)
        },
        wb = function(a) {
            return a.j ? a.j : eb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
        },
        xb = function(a) {
            return a.parentWindow || a.defaultView
        },
        zb = function(a, b, c) {
            function d(c) {
                c && b.appendChild(u(c) ? a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !da(f) || w(f) &&
                    0 < f.nodeType ? d(f) : Ga(yb(f) ? Na(f) : f, d)
            }
        },
        Ab = function(a) {
            return nb && void 0 != a.children ? a.children : Ha(a.childNodes, function(a) {
                return 1 == a.nodeType
            })
        },
        Bb = function(a) {
            var b;
            if (ob && !(D && jb("9") && !jb("10") && p.SVGElement && a instanceof p.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return w(b) && 1 == b.nodeType ? b : null
        },
        qb = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        yb = function(a) {
            if (a && "number" == typeof a.length) {
                if (w(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ea(a)) return "function" == typeof a.item
            }
            return !1
        },
        pb = function(a) {
            this.j = a || p.document || document
        };
    pb.prototype.l = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[0],
            g = e[1];
        if (!mb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ua(g.name), '"');
            if (g.type) {
                f.push(' type="', ua(g.type), '"');
                var h = {};
                Ua(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (u(g) ? f.className = g : ca(g) ? f.className = g.join(" ") : ub(f, g));
        2 < e.length && zb(d, f, e);
        return f
    };
    pb.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    pb.prototype.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Cb = function(a) {
        Cb[" "](a);
        return a
    };
    Cb[" "] = aa;
    var Db = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Cb(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (d) {
                return !1
            }
        },
        Eb = function(a, b) {
            if (!(1E-4 > Math.random())) {
                var c = Math.random();
                if (c < b) {
                    try {
                        var d = new Uint16Array(1);
                        window.crypto.getRandomValues(d);
                        c = d[0] / 65536
                    } catch (e) {
                        c = Math.random()
                    }
                    return a[Math.floor(c * a.length)]
                }
            }
            return null
        },
        E = function(a, b, c) {
            for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
        },
        Fb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b,
                c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Gb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        Hb = function(a) {
            try {
                for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "http:":
                    case "file:":
                        return !1
                }
            } catch (c) {}
            return !0
        };
    var Ib = document,
        F = window;
    var Kb = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            a.stack && (b = Jb(a.stack, b));
            return b
        },
        Lb = function(a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function(a) {
                    c(a);
                    Gb(d, "load", e);
                    Gb(d, "error", e)
                };
                Fb(d, "load", e);
                Fb(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        },
        Jb = function(a, b) {
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,
                    "$1");
                return a.replace(/\n */g, "\n")
            } catch (d) {
                return b
            }
        };
    var Mb = function(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
    };

    function G(a) {
        return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
    }

    function Nb() {
        var a = Ob,
            b = document,
            c = b.createElement("script");
        c.type = "text/javascript";
        c.src = a;
        var d = b.getElementsByTagName("head")[0];
        if (d) try {
            window.setTimeout(function() {
                d.appendChild(c)
            }, 0)
        } catch (e) {}
    }
    var Qb = function(a, b) {
            Pb(a, "load", b)
        },
        Pb = function(a, b, c) {
            Fb(a, b, c, void 0)
        },
        Sb = function() {
            var a = Rb();
            "google_onload_fired" in a || (a.google_onload_fired = !1, Qb(a, function() {
                a.google_onload_fired = !0
            }))
        };

    function Tb() {
        return "msie" in Ub ? Ub.msie : Ub.msie = -1 != navigator.userAgent.toLowerCase().indexOf("msie")
    }
    var Ub = {};

    function Vb() {
        if (navigator.plugins && navigator.mimeTypes.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                for (var a = 3, b = 1; b;) try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a + 1)), a++
                } catch (c) {
                    b = null
                }
                return a.toString()
            }
            if (Tb() && !window.opera) {
                b = null;
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    a = 0;
                    try {
                        b =
                            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = 6, b.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 == a) return a.toString()
                    }
                    try {
                        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                    } catch (f) {}
                }
                if (b) return a = b.GetVariable("$version").split(" ")[1], a.replace(/,/g, ".")
            }
        }
        return "0"
    }
    var Wb = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    var Xb = {},
        $b = function(a, b, c, d) {
            var e = Yb,
                f, g = !0;
            try {
                f = b()
            } catch (h) {
                try {
                    var k = Kb(h);
                    b = "";
                    h.fileName && (b = h.fileName);
                    var n = -1;
                    h.lineNumber && (n = h.lineNumber);
                    g = e(a, k, b, n, c)
                } catch (m) {
                    try {
                        var t = Kb(m);
                        a = "";
                        m.fileName && (a = m.fileName);
                        c = -1;
                        m.lineNumber && (c = m.lineNumber);
                        Yb("pAR", t, a, c, void 0, void 0)
                    } catch (q) {
                        Zb({
                            context: "mRE",
                            msg: q.toString() + "\n" + (q.stack || "")
                        }, void 0)
                    }
                }
                if (!g) throw h;
            } finally {
                if (d) try {
                    d()
                } catch (W) {}
            }
            return f
        },
        Yb = function(a, b, c, d, e, f) {
            var g = {};
            if (e) try {
                e(g)
            } catch (h) {}
            g.context = a;
            g.msg = b.substring(0,
                512);
            c && (g.file = c);
            0 < d && (g.line = d.toString());
            g.url = Ib.URL.substring(0, 512);
            g.ref = Ib.referrer.substring(0, 512);
            ac(g);
            Zb(g, f);
            return !0
        },
        Zb = function(a, b) {
            try {
                if (Math.random() < (b || .01)) {
                    var c = "/pagead/gen_204?id=jserror" + bc(a),
                        d = "http" + ("http:" == F.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + c,
                        d = d.substring(0, 2E3);
                    Lb(F, d, void 0)
                }
            } catch (e) {}
        },
        ac = function(a) {
            var b = a || {};
            Mb(Xb, function(a, d) {
                b[d] = F[a]
            })
        },
        cc = function(a, b) {
            return function() {
                var c = arguments;
                return $b(a, function() {
                    return b.apply(void 0,
                        c)
                }, void 0, void 0)
            }
        },
        dc = function(a) {
            return cc("osd::util::rschange", a)
        },
        bc = function(a) {
            var b = "";
            Mb(a, function(a, d) {
                if (0 === a || a) b += "&" + d + "=" + G(a)
            });
            return b
        };
    var ec = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    l = ec.prototype;
    l.getWidth = function() {
        return this.right - this.left
    };
    l.getHeight = function() {
        return this.bottom - this.top
    };
    l.clone = function() {
        return new ec(this.top, this.right, this.bottom, this.left)
    };
    l.contains = function(a) {
        return this && a ? a instanceof ec ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    l.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var H = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    H.prototype.clone = function() {
        return new H(this.left, this.top, this.width, this.height)
    };
    var fc = function(a) {
        return new ec(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    H.prototype.contains = function(a) {
        return a instanceof H ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    H.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    H.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    H.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var gc = function(a, b) {
            var c;
            a: {
                c = qb(a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                    c = c[b] || c.getPropertyValue(b) || "";
                    break a
                }
                c = ""
            }
            return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        hc = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            D && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        ic = function(a) {
            if (D && !(8 <= lb)) return a.offsetParent;
            var b = qb(a),
                c = gc(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = gc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        jc = function(a) {
            var b = qb(a),
                c = new A(0, 0),
                d;
            d = b ? qb(b) : document;
            var e;
            (e = !D) || (e = 9 <= lb);
            e || (e = "CSS1Compat" ==
                rb(d).j.compatMode);
            if (a == (e ? d.documentElement : d.body)) return c;
            a = hc(a);
            d = rb(b).j;
            b = wb(d);
            d = xb(d);
            b = D && jb("10") && d.pageYOffset != b.scrollTop ? new A(b.scrollLeft, b.scrollTop) : new A(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        kc = function(a) {
            "number" == typeof a && (a = Math.round(a) + "px");
            return a
        },
        lc = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = eb && !b && !c;
            return r(b) && !d || !a.getBoundingClientRect ? new B(b, c) : (a = hc(a), new B(a.right - a.left, a.bottom - a.top))
        };
    var mc = function() {
            this.j = []
        },
        oc = function(a, b, c, d, e) {
            a.j.push(new nc(b, c, d, e))
        },
        nc = function(a, b, c, d) {
            this.m = a;
            this.j = (this.l = r(d) && a.style && a.style.getPropertyPriority) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.o = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.u = this.l ? a.style.getPropertyPriority(this.j) : null;
            this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, c, d)) : a.style[this.j] = c
        };
    var pc = function(a) {
        var b = arguments,
            c = b.length;
        return function() {
            for (var a = 0; a < c; a++)
                if (!b[a].apply(this, arguments)) return !1;
            return !0
        }
    };
    var qc = function(a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        I = function(a) {
            var b = [];
            rc(new sc, a, b);
            return b.join("")
        },
        sc = function() {},
        rc = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (ca(b)) {
                        var d =
                            b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), rc(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), tc(d, c), c.push(":"), rc(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        tc(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? b : "null");
                        break;
                    case "boolean":
                        c.push(b);
                        break;
                    case "function":
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        uc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        vc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        tc = function(a, b) {
            b.push('"', a.replace(vc, function(a) {
                var b = uc[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), uc[a] = b);
                return b
            }), '"')
        };
    var wc = function(a, b, c, d) {
        this.o = a;
        this.j = 1;
        this.m = b;
        this.v = c;
        this.F = d;
        this.u = Math.random();
        this.w = {};
        this.l = null;
        this.B = x(this.D, this)
    };
    wc.prototype.D = function(a) {
        if (a.origin == this.v && a.source == this.m) {
            var b = null;
            try {
                b = qc(a.data)
            } catch (c) {}
            if (w(b) && (a = b.i, b.c === this.o && a != this.u && (2 != this.j && (this.j = 2, xc(this), this.l && (this.l(), this.l = null)), a = b.s, b = b.p, u(a) && (u(b) || w(b)) && this.w.hasOwnProperty(a)))) this.w[a](b)
        }
    };
    var xc = function(a) {
        var b = {};
        b.c = a.o;
        b.i = a.u;
        a.m.postMessage(I(b), a.v)
    };
    wc.prototype.C = function() {
        if (1 == this.j) {
            try {
                this.m.postMessage && xc(this)
            } catch (a) {}
            window.setTimeout(x(this.C, this), 50)
        }
    };
    wc.prototype.connect = function(a) {
        a && (this.l = a);
        Fb(window, "message", this.B);
        this.F && this.C()
    };
    var yc = function(a, b, c) {
        a.w[b] = c
    };
    wc.prototype.send = function(a, b) {
        var c = {};
        c.c = this.o;
        c.i = this.u;
        c.s = a;
        c.p = b;
        this.m.postMessage(I(c), this.v)
    };
    wc.prototype.close = function() {
        3 != this.j && (this.j = 3, Gb(window, "message", this.B))
    };
    db || eb || D && jb(11);
    var zc = function(a) {
        this.o = a;
        this.u = null;
        this.D = this.m = 0;
        this.l = null;
        this.M = "sfchannel" + a
    };
    var Ac = function(a, b, c, d, e, f) {
            this.m = a.clone();
            this.l = b.clone();
            this.o = c;
            this.j = d.clone();
            this.u = e;
            this.v = f
        },
        Bc = function(a) {
            return I({
                windowCoords_t: a.m.top,
                windowCoords_r: a.m.right,
                windowCoords_b: a.m.bottom,
                windowCoords_l: a.m.left,
                frameCoords_t: a.l.top,
                frameCoords_r: a.l.right,
                frameCoords_b: a.l.bottom,
                frameCoords_l: a.l.left,
                styleZIndex: a.o,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.u,
                yInView: a.v
            })
        },
        Cc = function(a) {
            var b =
                window.screenX || window.screenLeft || 0,
                c = window.screenY || window.screenTop || 0,
                b = new ec(c, (window.outerWidth || document.documentElement.clientWidth || 0) - b, (window.outerHeight || document.documentElement.clientHeight || 0) - c, b),
                c = jc(a),
                d;
            if ("none" != gc(a, "display")) d = lc(a);
            else {
                d = a.style;
                var e = d.display,
                    f = d.visibility,
                    g = d.position;
                d.visibility = "hidden";
                d.position = "absolute";
                d.display = "inline";
                var h = lc(a);
                d.display = e;
                d.position = g;
                d.visibility = f;
                d = h
            }
            c = new H(c.x, c.y, d.width, d.height);
            d = fc(c);
            for (var e = String(gc(a,
                    "zIndex")), f = new ec(0, Infinity, Infinity, 0), g = rb(a), k = g.j.body, n = g.j.documentElement, h = wb(g.j); a = ic(a);)
                if (!(D && 0 == a.clientWidth || eb && 0 == a.clientHeight && a == k) && a != k && a != n && "visible" != gc(a, "overflow")) {
                    var m = jc(a),
                        t = new A(a.clientLeft, a.clientTop);
                    m.x += t.x;
                    m.y += t.y;
                    f.top = Math.max(f.top, m.y);
                    f.right = Math.min(f.right, m.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
                    f.left = Math.max(f.left, m.x)
                }
            a = h.scrollLeft;
            h = h.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, h);
            g = vb(xb(g.j) ||
                window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, h + g.height);
            a = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null;
            var q;
            if (null != a) a: {
                h = new H(a.left, a.top, a.right - a.left, a.bottom - a.top);
                q = Math.max(h.left, c.left);
                f = Math.min(h.left + h.width, c.left + c.width);
                if (q <= f && (g = Math.max(h.top, c.top), h = Math.min(h.top + h.height, c.top + c.height), g <= h)) {
                    q = new H(q, g, f - q, h - g);
                    break a
                }
                q = null
            }
            a = (f = (f = null != q && (0 != q.width || q.left + q.width != a.left && q.left != a.right)) && (0 != q.height || q.top + q.height !=
                a.top && q.top != a.bottom)) ? new ec(Math.max(d.top - a.top, 0), Math.max(a.right - d.right, 0), Math.max(a.bottom - d.bottom, 0), Math.max(d.left - a.left, 0)) : new ec(0, 0, 0, 0);
            g = f = 0;
            q && !(new B(q.width, q.height)).isEmpty() && (f = q.width / c.width, g = q.height / c.height);
            return new Ac(b, d, e, a, f, g)
        };
    var Dc = !1,
        Ec = "",
        Fc = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    if (navigator.plugins && navigator.plugins.length) {
        var Gc = navigator.plugins["Shockwave Flash"];
        Gc && (Dc = !0, Gc.description && (Ec = Fc(Gc.description)));
        navigator.plugins["Shockwave Flash 2.0"] && (Dc = !0, Ec = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var Hc = navigator.mimeTypes["application/x-shockwave-flash"];
        (Dc = Hc && Hc.enabledPlugin) && (Ec = Fc(Hc.enabledPlugin.description))
    } else try {
        var Ic = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            Dc = !0,
            Ec = Fc(Ic.GetVariable("$version"))
    } catch (Jc) {
        try {
            Ic =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Dc = !0, Ec = "6.0.21"
        } catch (Kc) {
            try {
                Ic = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Dc = !0, Ec = Fc(Ic.GetVariable("$version"))
            } catch (Lc) {}
        }
    }
    var Mc = Dc,
        Nc = Ec;
    var Oc = function() {
        this.j = {
            shared: {
                sf_ver: "1-0-2",
                ck_on: navigator.cookieEnabled ? 1 : 0,
                flash_ver: Mc ? Nc : "0"
            }
        }
    };
    var Pc = function() {
        this.j = !0;
        this.l = !1
    };
    var Qc = function(a, b, c, d) {
        var e = new Pc,
            f = new Oc;
        this.v = a;
        this.j = b;
        this.l = c;
        this.o = e;
        this.m = f;
        this.u = d
    };
    var Rc = function(a) {
            this.j = a
        },
        Sc = function(a, b) {
            this.j = a;
            this.version = b
        };
    z(Sc, Rc);
    Sc.prototype.m = function() {
        return I({
            uid: this.j,
            version: this.version
        })
    };
    var Tc = function(a, b, c) {
        this.j = a;
        this.o = b;
        this.l = c
    };
    z(Tc, Rc);
    Tc.prototype.m = function() {
        return I({
            uid: this.j,
            initialWidth: this.o,
            initialHeight: this.l
        })
    };
    var Uc = function(a, b) {
        this.j = a;
        this.description = b
    };
    z(Uc, Rc);
    Uc.prototype.m = function() {
        return I({
            uid: this.j,
            description: this.description
        })
    };
    var Vc = function(a, b) {
        this.j = a;
        this.l = b
    };
    z(Vc, Rc);
    Vc.prototype.m = function() {
        return I({
            uid: this.j,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left
        })
    };
    var Wc = function(a) {
        this.j = a
    };
    z(Wc, Rc);
    Wc.prototype.m = function() {
        return I({
            uid: this.j
        })
    };
    var Xc = function(a, b) {
        this.j = a;
        this.o = b
    };
    z(Xc, Rc);
    Xc.prototype.m = function() {
        var a = {
            uid: this.j,
            newGeometry: Bc(this.o)
        };
        return I(a)
    };
    var Yc = function(a, b, c, d) {
        Xc.call(this, a, c);
        this.u = b;
        this.l = d
    };
    z(Yc, Xc);
    Yc.prototype.m = function() {
        var a = {
            uid: this.j,
            success: this.u,
            newGeometry: Bc(this.o),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left
        };
        return I(a)
    };
    var Zc = function(a, b, c) {
        this.j = a;
        this.width = b;
        this.height = c
    };
    z(Zc, Rc);
    Zc.prototype.m = function() {
        return I({
            uid: this.j,
            width: this.width,
            height: this.height
        })
    };
    var cd = function(a) {
        zc.call(this, $c++);
        this.B = a.Ca;
        this.C = a.U;
        this.R = window.location.protocol + "//" + window.location.host;
        this.O = window.location.protocol + "//tpc.googlesyndication.com";
        this.I = Boolean(a.ra);
        this.F = 1 == a.size;
        this.v = new mc;
        ad(this, a.U, a.size);
        this.u = this.K = Cc(a.U);
        this.j = bd(this, a.wa, a.content, a.size);
        this.G = x(this.P, this);
        this.H = -1;
        this.w = 0;
        this.l = new wc(this.M, this.j.contentWindow, this.O, !1);
        yc(this.l, "init_done", x(this.za, this));
        yc(this.l, "register_done", x(this.Ga, this));
        yc(this.l, "report_error",
            x(this.Ha, this));
        yc(this.l, "expand_request", x(this.sa, this));
        yc(this.l, "collapse_request", x(this.pa, this));
        yc(this.l, "creative_geometry_update", x(this.N, this));
        this.l.connect(x(this.Ea, this));
        if (a.ka) {
            var b = x(function() {
                var c;
                a: {
                    try {
                        if (this.j.contentWindow.frames.google_pubads_beacon_iframe) {
                            c = !0;
                            break a
                        }
                    } catch (d) {}
                    c = !1
                }
                c || (a.ka(), Gb(this.j, "load", b))
            }, this);
            Fb(this.j, "load", b)
        }
    };
    z(cd, zc);
    var $c = 1,
        ad = function(a, b, c) {
            a.F ? (b.style.width = kc("100%"), b.style.height = kc("auto")) : (b.style.width = kc(c.width), b.style.height = kc(c.height))
        },
        bd = function(a, b, c, d) {
            var e = rb(a.C);
            c = "1-0-2;" + c.length + ";" + c;
            var f;
            f = new Qc(a.o, a.R, a.K, a.F);
            var g = f.v,
                h = f.j,
                k = Bc(f.l),
                n;
            n = f.o;
            n = I({
                expandByOverlay: n.j,
                expandByPush: n.l,
                readCookie: !1,
                writeCookie: !1
            });
            f = {
                uid: g,
                hostPeerName: h,
                initialGeometry: k,
                permissions: n,
                metadata: I(f.m.j),
                reportCreativeGeometry: f.u
            };
            f = I(f);
            c = c + f;
            a.I && d instanceof B && (f = rb(a.C), dd || (g = f.l("script", {
                src: "//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"
            }), Bb(f.j.getElementsByTagName("script")[0]).appendChild(g), dd = !0), f = xb(f.j), f.google_eas_queue = f.google_eas_queue || [], f.google_eas_queue.push({
                a: b,
                b: f.location.protocol + "//tpc.googlesyndication.com",
                c: d.width,
                d: d.height,
                e: "sf-gdn-exp-" + a.o,
                f: void 0,
                g: void 0,
                h: void 0
            }));
            a.F ? (f = "100%", d = 0) : (f = d.width, d = d.height);
            g = xb(e.j);
            h = "//tpc.googlesyndication.com/safeframe/1-0-2/html/container.html";
            k = g;
            for (n = 0; k != k.parent;) n++,
                k = k.parent;
            (k = n) && (h += "?n=" + k);
            h = (Hb(g) ? "https:" : "http:") + h;
            a.I && (g = g.location.href, h += "#" + [g && (0 < g.indexOf("?google_debug") || 0 < g.indexOf("&google_debug") || 0 < g.indexOf("#google_debug")) ? "google_debug&" : "", "xpc=", "sf-gdn-exp-" + a.o, "&p=", encodeURIComponent(Ib.location.protocol), "//", encodeURIComponent(Ib.location.host)].join(""));
            b = {
                id: b,
                name: c,
                src: h,
                scrolling: "no",
                marginWidth: "0",
                marginHeight: "0",
                width: String(f),
                height: String(d),
                "data-is-safeframe": "true"
            };
            d = {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;",
                allowTransparency: "true",
                src: D && !jb(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"" : "about:blank"
            };
            b && Ua(d, b);
            e = e.l("iframe", d);
            a.C.appendChild(e);
            return e
        };
    l = cd.prototype;
    l.Ea = function() {
        Fb(window, "resize", this.G);
        Fb(window, "scroll", this.G)
    };
    l.za = function(a) {
        try {
            if (0 != this.m) throw Error("Container already initialized");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = qc(a);
            if (!(w(c) && v(c.uid) && u(c.version))) throw Error("Cannot parse JSON message");
            b = new Sc(c.uid, c.version);
            if (this.o != b.j || "1-0-2" != b.version) throw Error("Wrong source container");
            this.m = 1
        } catch (d) {
            this.B.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
        }
    };
    l.Ga = function(a) {
        try {
            if (1 != this.m) throw Error("Container not initialized");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b = qc(a);
            if (!(w(b) && v(b.uid) && v(b.initialWidth) && v(b.initialHeight))) throw Error("Cannot parse JSON message");
            if (this.o != (new Tc(b.uid, b.initialWidth, b.initialHeight)).j) throw Error("Wrong source container");
            this.m = 2
        } catch (c) {
            this.B.error("Invalid REGISTER_DONE message. Reason: " + c.message)
        }
    };
    l.Ha = function(a) {
        try {
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = qc(a);
            if (!(w(c) && v(c.uid) && u(c.description))) throw Error("Cannot parse JSON message");
            b = new Uc(c.uid, c.description);
            if (this.o != b.j) throw Error("Wrong source container");
            this.B.info("Ext reported an error. Description: " + b.description)
        } catch (d) {
            this.B.error("Invalid REPORT_ERROR message. Reason: " + d.message)
        }
    };
    l.sa = function(a) {
        try {
            if (2 != this.m) throw Error("Container is not registered");
            if (0 != this.D) throw Error("Container is not collapsed");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = qc(a);
            if (!(w(c) && v(c.uid) && v(c.expand_t) && v(c.expand_r) && v(c.expand_b) && v(c.expand_l))) throw Error("Cannot parse JSON message");
            b = new Vc(c.uid, new ec(c.expand_t, c.expand_r, c.expand_b, c.expand_l));
            if (this.o != b.j) throw Error("Wrong source container");
            if (!(0 <= b.l.top && 0 <= b.l.left && 0 <= b.l.bottom && 0 <= b.l.right)) throw Error("Invalid expansion amounts");
            var d;
            var e = b.l,
                f = this.u = Cc(this.j);
            if (e.top <= f.j.top && e.right <= f.j.right && e.bottom <= f.j.bottom && e.left <= f.j.left) {
                for (var g = this.j.parentNode; g && g.style; g = g.parentNode) oc(this.v, g, "overflowX", "visible", "important"), oc(this.v, g, "overflowY", "visible", "important");
                var h = fc(new H(0, 0, this.u.l.getWidth(), this.u.l.getHeight()));
                w(e) ? (h.top -= e.top, h.right += e.right, h.bottom += e.bottom, h.left -= e.left) : (h.top -= e, h.right += void 0, h.bottom += void 0, h.left -= NaN);
                oc(this.v, this.C, "position", "relative");
                oc(this.v,
                    this.j, "zIndex", "10000");
                oc(this.v, this.j, "position", "absolute");
                var k = h.getWidth();
                oc(this.v, this.j, "width", k + "px", void 0);
                var n = h.getHeight();
                oc(this.v, this.j, "height", n + "px", void 0);
                oc(this.v, this.j, "left", h.left + "px", void 0);
                oc(this.v, this.j, "top", h.top + "px", void 0);
                this.D = 2;
                this.u = Cc(this.j);
                d = !0
            } else d = !1;
            this.l.send("expand_response", (new Yc(this.o, d, this.u, b.l)).m())
        } catch (m) {
            this.B.error("Invalid EXPAND_REQUEST message. Reason: " + m.message)
        }
    };
    l.pa = function(a) {
        try {
            if (2 != this.m) throw Error("Container is not registered");
            if (2 != this.D) throw Error("Container is not expanded");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b = qc(a);
            if (!w(b) || !v(b.uid)) throw Error("Cannot parse JSON message");
            if (this.o != (new Wc(b.uid)).j) throw Error("Wrong source container");
            ed(this);
            this.l.send("collapse_response", (new Xc(this.o, this.u)).m())
        } catch (c) {
            this.B.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
        }
    };
    var ed = function(a) {
        for (var b = a.v, c = b.j.length - 1; 0 <= c; c--) {
            var d = b.j[c];
            d.l ? (d.m.style.removeProperty(d.j), d.m.style.setProperty(d.j, d.o, d.u)) : d.m.style[d.j] = d.o
        }
        b.j.length = 0;
        a.D = 0;
        a.j && (a.u = Cc(a.j))
    };
    cd.prototype.P = function() {
        if (1 == this.m || 2 == this.m) switch (this.w) {
            case 0:
                fd(this);
                this.H = setTimeout(x(this.J, this), 1E3);
                this.w = 1;
                break;
            case 1:
                this.w = 2;
                break;
            case 2:
                this.w = 2
        }
    };
    cd.prototype.N = function(a) {
        try {
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = qc(a);
            if (!(w(c) && v(c.uid) && v(c.width) && v(c.height))) throw Error("Cannot parse JSON message");
            b = new Zc(c.uid, c.width, c.height);
            if (this.o != b.j) throw Error("Wrong source container");
            this.F ? this.j.height = String(b.height) : this.B.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
        } catch (d) {
            this.B.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + d.message)
        }
    };
    cd.prototype.J = function() {
        if (1 == this.m || 2 == this.m) switch (this.w) {
            case 1:
                this.w = 0;
                break;
            case 2:
                fd(this), this.H = setTimeout(x(this.J, this), 1E3), this.w = 1
        }
    };
    var fd = function(a) {
            a.u = Cc(a.j);
            a.l.send("geometry_update", (new Xc(a.o, a.u)).m())
        },
        gd = function(a) {
            100 != a.m && (2 == a.D && ed(a), clearTimeout(a.H), a.H = -1, a.w = 3, a.l && (a.l.close(), a.l = null), Gb(window, "resize", a.G), Gb(window, "scroll", a.G), a.j && a.C == Bb(a.j) && a.C.removeChild(a.j), a.j = null, a.C = null, a.m = 100)
        },
        dd = !1;
    var hd = function(a, b, c, d, e) {
        this.slot = a;
        this.isEmpty = b;
        this.size = c;
        this.creativeId = d;
        this.lineItemId = e;
        this.serviceName = "publisher_ads"
    };
    var id = function(a, b) {
        this.j = a;
        this.l = b;
        this.B = this.j.getAdUnitPath();
        this.F = this.j.getSlotId().getInstance();
        var c = this.B,
            d = c.split("/");
        this.G = "/" == c.charAt(0) && 2 <= d.length ? d[1] : "/" != c.charAt(0) && 1 <= d.length ? d[0] : "";
        this.H = "";
        this.I = 0;
        this.o = null;
        this.u = 0;
        this.m = null
    };
    id.prototype.K = 0;
    id.prototype.C = !1;
    var jd = 0,
        kd = function(a) {
            a.K = 0;
            a.C = !1;
            a.v = null;
            a.D = null;
            a.w = null;
            a.J = null;
            a.m = null
        };
    id.prototype.getAdUnitPath = function() {
        return this.B
    };
    id.prototype.getInstance = function() {
        return this.F
    };
    var J = function(a) {
            return a.B + "_" + a.F
        },
        K = function(a) {
            return a.j.getSlotId().getDomId()
        },
        L = function(a) {
            return "google_ads_iframe_" + J(a)
        };
    id.prototype.toString = function() {
        var a = this.j.getSlotId().toString();
        return "[gam.gut.AdSlot: nwid=" + this.G + ", adUnitPath=" + this.B + ", instance=" + this.F + ", iframeLoaded=" + this.C + ", tries=" + this.K + ", GUT slot id=" + a + "]"
    };
    var ld = function(a, b) {
            a.v || (a.v = (new Date).getTime());
            a.j.fetchStarted(b || "")
        },
        md = function(a) {
            a.w || (a.w = (new Date).getTime());
            a.j.renderStarted()
        },
        M = function(a, b) {
            a.J || (a.J = (new Date).getTime());
            a.j.renderEnded(b)
        };
    id.prototype.getSizes = function(a) {
        var b = a || window;
        a = null;
        b.top == b && (a = vb(window), a = this.j.getSizes(a.width, a.height));
        null == a && (a = this.j.getSizes());
        for (var b = [], c = 0; c < a.length; ++c) b.push([a[c].getWidth(), a[c].getHeight()]);
        return b
    };
    var nd = function(a) {
            a = a.getSizes();
            for (var b = [], c = 0; c < a.length; ++c) b.push(a[c].join("x"));
            return b.join("|")
        },
        od = function(a) {
            var b = [],
                c = a.j.getTargetingMap();
            E(c, function(a, c) {
                for (var d = [], h = 0; h < a.length; ++h) d.push(encodeURIComponent(a[h]));
                b.push(encodeURIComponent(c) + "=" + d.join(","))
            });
            if (ea(a.j.getCategoryExclusions) && (a = a.j.getCategoryExclusions(), 0 < a.length && !("excl_cat" in c))) {
                for (var c = [], d = 0; d < a.length; ++d) c.push(encodeURIComponent(a[d]));
                b.push(encodeURIComponent("excl_cat") + "=" + c.join(","))
            }
            return b.join("&")
        };
    l = id.prototype;
    l.getContentUrl = function() {
        return this.j.getContentUrl()
    };
    l.setClickUrl = function(a) {
        this.j.setClickUrl(a)
    };
    l.getClickUrl = function() {
        return this.j.getClickUrl()
    };
    l.getOutOfPage = function() {
        return this.j.getOutOfPage()
    };
    l.getAudExtId = function() {
        return this.j.getAudExtId()
    };
    l.getCollapseEmptyDiv = function() {
        return this.j.getCollapseEmptyDiv()
    };
    l.getDivStartsCollapsed = function() {
        return this.j.getDivStartsCollapsed()
    };
    l.getFirstLook = function() {
        return this.j.getFirstLook()
    };
    var pd = function(a, b) {
            var c = null,
                d = !0,
                e = null,
                f = null;
            w(b) && (d = b._empty_, d || (c = [b._width_, b._height_], 0 == b._is_afc_ && b._creative_ids_ && b._adgroup2_ids_ && (e = b._creative_ids_[0], f = b._adgroup2_ids_[0])));
            return new hd(a.j, d, c, e, f)
        },
        qd = function(a) {
            return new hd(a.j, !0, null, null, null)
        },
        rd = function(a) {
            a.u = ++jd;
            return a.u
        };
    var sd = {
            google_ad_channel: "channel",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_ad_section: "region",
            google_ad_type: "ad_type",
            google_adtest: "adtest",
            google_available_width: "avail_w",
            google_allow_expandable_ads: "ea",
            google_alternate_ad_url: "alternate_ad_url",
            google_alternate_color: "alt_color",
            google_city: "gcs",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_line: "color_line",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_contents: "contents",
            google_country: "gl",
            google_cpm: "cpm",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_id: "cust_id",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_ed: "ed",
            google_encoding: "oe",
            google_flash_version: "flash",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_kw: "kw",
            google_kw_type: "kw_type",
            google_language: "hl",
            google_page_url: "url",
            google_pgb_reactive: "pra",
            google_region: "gr",
            google_reuse_colors: "reuse_colors",
            google_responsive_formats: "resp_fmts",
            google_safe: "adsafe",
            google_tag_info: "gut",
            google_targeting: "targeting",
            google_ui_features: "ui",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type"
        },
        td = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_format: "format",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_unit_key_2: "adk2",
            google_ad_width: "w",
            google_analytics_url_parameters: "aup",
            google_captcha_token: "captok",
            google_content_recommendation_ui_type: "crui",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_nofo: "nofo",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_only_ads_with_video: "only_ads_with_video",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_source_type: "src_type",
            google_sui: "sui",
            google_skip: "skip",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_origin: "to",
            google_tdsma: "tdsma",
            google_tfs: "tfs",
            google_tl: "tl"
        },
        ud = {
            google_core_dbp: "dbp",
            google_lact: "lact",
            google_only_pyv_ads: "pyv",
            google_only_userchoice_ads: "uc",
            google_scs: "scs",
            google_with_pyv_ads: "withpyv",
            google_previous_watch: "p_w",
            google_previous_searches: "p_s",
            google_video_url_to_fetch: "durl",
            google_yt_pt: "yt_pt",
            google_yt_up: "yt_up"
        };
    var vd = !!window.google_async_iframe_id,
        wd = vd && window.parent || window,
        Rb = function() {
            if (vd && !Db(wd)) {
                for (var a = "." + Ib.domain; 2 < a.split(".").length && !Db(wd);) Ib.domain = a = a.substr(a.indexOf(".") + 1), wd = window.parent;
                Db(wd) || (wd = window)
            }
            return wd
        };
    var xd = !1,
        yd = function(a, b, c) {
            "" != b && (c ? a.j.hasOwnProperty(c) && (a.j[c] = b) : a.l.push(b))
        },
        Ad = function() {
            var a = zd,
                b = a.l.concat([]);
            E(a.j, function(a) {
                "" != a && b.push(a)
            });
            return b
        };
    xd = !1;
    var Bd = function(a, b) {
            for (var c = 0, d = a, e = 0; a && a != a.parent;)
                if (a = a.parent, e++, Db(a)) d = a, c = e;
                else if (b) break;
            return {
                T: d,
                level: c
            }
        },
        Cd = null;
    var Dd = function(a) {
            this.S = a;
            N(this, 3, null);
            N(this, 4, 0);
            N(this, 5, 0);
            N(this, 6, 0);
            N(this, 15, 0);
            a = Rb();
            a = Bd(a, !1).T;
            var b = a.google_global_correlator;
            b || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
            N(this, 7, b);
            N(this, 8, {});
            N(this, 9, {});
            N(this, 10, {});
            N(this, 11, []);
            N(this, 12, 0);
            N(this, 16, null);
            N(this, 14, {});
            N(this, 17, !1)
        },
        Ed = {
            google_persistent_state: !0,
            google_persistent_state_async: !0
        },
        Fd = {},
        Gd = function(a) {
            var b = Rb();
            a = a && Ed[a] ? a : vd ? "google_persistent_state_async" : "google_persistent_state";
            if (Fd[a]) return Fd[a];
            var c = "google_persistent_state_async" == a ? {} : b,
                d = b[a];
            return null != d && "object" == typeof d && null != d.S && "object" == typeof d.S ? Fd[a] = d : b[a] = Fd[a] = new Dd(c)
        },
        Hd = function(a) {
            switch (a) {
                case 3:
                    return "google_exp_persistent";
                case 4:
                    return "google_num_sdo_slots";
                case 5:
                    return "google_num_0ad_slots";
                case 6:
                    return "google_num_ad_slots";
                case 7:
                    return "google_correlator";
                case 8:
                    return "google_prev_ad_formats_by_region";
                case 9:
                    return "google_prev_ad_slotnames_by_region";
                case 10:
                    return "google_num_slots_by_channel";
                case 11:
                    return "google_viewed_host_channels";
                case 12:
                    return "google_num_slot_to_show";
                case 14:
                    return "gaGlobal";
                case 15:
                    return "google_num_reactive_ad_slots";
                case 16:
                    return "google_persistent_language";
                case 17:
                    return "google_ose_setup_performed"
            }
            throw Error("unexpected state");
        },
        Id = function(a) {
            var b = Hd(14);
            return a.S[b]
        },
        N = function(a, b, c) {
            a = a.S;
            b = Hd(b);
            void 0 === a[b] && (a[b] = c)
        };
    var Jd = function(a, b, c, d, e, f) {
            var g = "";
            a && (g += a + ":");
            c && (g += "//", b && (g += b + "@"), g += c, d && (g += ":" + d));
            e && (g += e);
            f && (g += "?" + f);
            return g
        },
        Kd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        Nd = function(a) {
            if (Ld) {
                Ld = !1;
                var b = p.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = Md(c)) && c != b.hostname) throw Ld = !0, Error();
                }
            }
            return a.match(Kd)
        },
        Ld = eb,
        Md = function(a) {
            return (a = Nd(a)[3] || null) ? decodeURI(a) : a
        };

    function Od(a, b, c, d) {
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (a.top == a) return !1;
        var e = b.documentElement;
        if (c && d) {
            var f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
            if (g > 2 * d || f > 2 * c) return !1
        }
        return !0
    }

    function Pd(a, b) {
        var c = {};
        c.Ja = Bd(window, !1).T;
        var d;
        var e = c.Ja;
        d = e.location.href;
        if (e == e.top) d = {
            url: d,
            ja: !0
        };
        else {
            var f = !1,
                g = e.document;
            g && g.referrer && (d = g.referrer, e.parent == e.top && (f = !0));
            (e = e.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == d.indexOf(e) && (f = !1, d = e);
            d = {
                url: d,
                ja: f
            }
        }
        c.Ka = d;
        c.ya = Od(Rb(), b, a.google_ad_width, a.google_ad_height);
        d = c.ya;
        f = c.Ka.ja;
        e = Rb();
        e = e.top == e ? 0 : Db(e.top) ? 1 : 2;
        g = 4;
        d || 1 != e ? d || 2 != e ? d && 1 == e ? g = 7 : d && 2 == e && (g = 8) : g = 6 : g = 5;
        f && (g |= 16);
        c.xa = "" + g;
        return c
    };
    var Qd = function(a) {
            this.j = {};
            this.l = a
        },
        Rd = function(a, b, c, d) {
            b && (c || (c = ""), "google_gl" == b ? b = "google_country" : "google_region" == b && (b = "google_section"), b in a.l && ("undefined" == typeof d || d || !a.j[b]) && (a.j[b] = c))
        },
        Sd = function(a, b) {
            E(b.j, function(a, b) {
                this.j[b] || (this.j[b] = a)
            }, a)
        },
        Td = function(a) {
            var b = new Qd(a.l);
            a = a.j;
            var c = {},
                d;
            for (d in a) c[d] = a[d];
            b.j = c;
            delete b.j.google_page_url;
            return b
        },
        Ud = function(a) {
            return a.j.google_page_url
        };
    Qd.prototype.L = function() {
        var a = [];
        E(this.j, function(b, c) {
            var d = sd[c] || td[c] || ud[c] || null;
            d && b && a.push(d + "=" + G(b))
        });
        return a.join("&")
    };
    var Wd = function(a, b, c, d) {
            var e = Vd(a, Td(b), c, d);
            a = Vd(a, b, c, d);
            b = [];
            e[0] && 0 < e[0].length && b.push(e[0].join("&"));
            a[1] && 0 < a[1].length && b.push("sps=" + a[1].join("|"));
            return b.join("&")
        },
        Vd = function(a, b, c, d) {
            var e = [],
                f = [],
                g = b.j;
            E(d, function(b, d) {
                if (b) {
                    var n = "";
                    null != g[d] && (n = G(g[d]));
                    for (var m = [], t = -1, q = -1, W = 0; W < a.length; ++W) {
                        var Pa = J(a[W]);
                        ++t;
                        null == c[Pa] ? m.push("") : (Pa = c[Pa].j, null != Pa[d] ? (m.push(G(G(Pa[d]))), q = t) : m.push(""))
                    }
                    if (0 <= q) {
                        t = [];
                        t.push(G(n));
                        for (W = 0; W <= q; ++W) t.push(m[W]);
                        f.push(b + "," + t.join(","))
                    } else n &&
                        e.push(b + "=" + n)
                }
            });
            b = [];
            b.push(e);
            b.push(f);
            return b
        },
        Xd = function(a, b) {
            var c;
            a: {
                c = a.navigator;
                var d = c.userAgent,
                    e = c.platform,
                    f = /WebKit\/(\d+)/,
                    g = /rv\:(\d+\.\d+)/,
                    h = /rv\:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(d) && (f = (f.exec(d) || [0, 0])[1], g = (g.exec(d) || [0, 0])[1], /Win/.test(e) && /Trident/.test(d) && 11 <= b.documentMode || !f && "Gecko" == c.product && 27 <= g && !h.test(d) || 536 <= f)) {
                    c = !0;
                    break a
                }
                c = !1
            }
            d = Od(a, a.document, 500, 300);
            e = {};
            if (!c || d) e.ea = "0";
            return e
        };
    var Yd = C("Firefox"),
        Zd = ab() || C("iPod"),
        $d = C("iPad"),
        ae = C("Android") && !($a() || C("Firefox") || Za() || C("Silk")),
        be = $a(),
        ce = C("Safari") && !($a() || C("Coast") || Za() || C("Edge") || C("Silk") || C("Android")) && !(ab() || C("iPad") || C("iPod"));
    var de = function(a) {
        return (a = a.exec(Wa)) ? a[1] : ""
    };
    (function() {
        if (Yd) return de(/Firefox\/([0-9.]+)/);
        if (D || bb) return hb;
        if (be) return de(/Chrome\/([0-9.]+)/);
        if (ce && !(ab() || C("iPad") || C("iPod"))) return de(/Version\/([0-9.]+)/);
        if (Zd || $d) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Wa)) return a[1] + "." + a[2]
        } else if (ae) return (a = de(/Android\s+([0-9.]+)/)) ? a : de(/Version\/([0-9.]+)/);
        return ""
    })();
    var ee = function(a, b, c) {
            b = b || F;
            a && b.top != b && (b = b.top);
            try {
                return b.document && !b.document.body ? new B(-1, -1) : c ? (new B(b.innerWidth, b.innerHeight)).round() : vb(b || window).round()
            } catch (d) {
                return new B(-12245933, -12245933)
            }
        },
        fe = function(a, b) {
            Tb() && !window.opera ? Pb(a, "readystatechange", dc(function() {
                "complete" == a.readyState && b(null)
            })) : Pb(a, "load", cc("osd::util::load", b))
        },
        ge = function() {
            var a = 0;
            !r(F.postMessage) && (a |= 1);
            return a
        };
    var O = function(a, b) {
            this.o = a;
            this.l = b && b.l ? b.l : [];
            this.w = b ? b.w : !1;
            this.m = b && b.m ? b.m : 0;
            this.v = b ? b.v : "";
            this.j = b && b.j ? b.j : [];
            this.u = null;
            this.B = !1;
            if (b) {
                var c;
                for (c = 0; c < this.l.length; ++c) this.l[c].push("true");
                for (c = 0; c < this.j.length; ++c) this.j[c].ia = !0
            }
        },
        Ob = "",
        he = 0,
        ie = 0,
        je = function(a, b) {
            var c = a.l,
                d = a.o.google_ad_request_done;
            d && (d = d.orig_callback || d, a.o.google_ad_request_done = function(a) {
                if (a && 0 < a.length) {
                    var f = 1 < a.length ? a[1].url : null,
                        g = a[0].log_info || null,
                        h = a[0].activeview_url || null,
                        k = a[0].activeview_js_enabled ||
                        null,
                        n = a[0].activeview_js_immediate_enabled || null,
                        m = a[0].activeview_js_tos_enabled || null,
                        t = a[0].activeview_cid || null,
                        q = a[0].activeview_metadata || null;
                    c.push([b, xa(a[0].url), f, g, null, h, k, n, m, t, q])
                }
                d(a)
            }, a.o.google_ad_request_done.orig_callback = d)
        },
        ke = function(a, b, c, d) {
            var e = a.l;
            if (0 < e.length)
                for (var f = b.document.getElementsByTagName("a"), g = 0; g < f.length; g++)
                    for (var h = 0; h < e.length; h++)
                        if (0 <= f[g].href.indexOf(e[h][1])) {
                            var k = f[g].parentNode;
                            if (e[h][2])
                                for (var n = k, m = 0; 4 > m; m++) {
                                    if (0 <= n.innerHTML.indexOf(e[h][2])) {
                                        k =
                                            n;
                                        break
                                    }
                                    n = n.parentNode
                                }
                            c(k, e[h][0], d || 0, !0, e[h][3], void 0, e[h][5], "true" == e[h][6], "true" == e[h][7], "true" == e[h][11], "true" == e[h][8], e[h][9], e[h][10]);
                            e.splice(h, 1);
                            break
                        }
            if (g = 0 < e.length) Cd || (Cd = Bd(window, !0).T), g = b != Cd;
            if (g) try {
                ke(a, b.parent, c, d)
            } catch (t) {}
            for (g = 0; g < e.length; ++g) a = e[g], "true" == a[6] && le("osd2", a[3]), "true" == a[7] && le("osdim", a[3])
        },
        le = function(a, b) {
            if (a && b) {
                var c = ["//"];
                c.push("pagead2.googlesyndication.com");
                c.push("/activeview");
                c.push("?id=" + a);
                c.push("&r=j");
                c.push("&avi=" + b);
                Lb(F,
                    c.join(""), void 0)
            }
        };
    l = O.prototype;
    l.getNewBlocks = function(a, b) {
        b && ke(this, this.o, a, 1);
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.o && e.j && (a(e.j, e.m, e.v, e.l, "", e.u, "", !1, !1, e.ia, !1, "", ""), e.o = !0)
        }
        b && (this.u = a)
    };
    l.getRegisteredAdblockUrls = function() {
        for (var a = [], b = this.j.length, c = 0; c < b; c++) a.push(this.j[c].m);
        return a
    };
    l.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = window.google_enable_ose,
            c;
        !0 === b ? c = 2 : !1 !== b && (c = Eb([0], ie), null == c && ((c = Eb([2], he)) || (c = 3)));
        if (!c) return 0;
        this.m = c;
        this.v = String(a || 0);
        return this.getOseId()
    };
    l.getOseId = function() {
        return window && Math.random ? this.m : -1
    };
    l.getCorrelator = function() {
        return this.v
    };
    l.numBlocks = function() {
        return this.l.length + this.j.length
    };
    l.registerAdBlock = function(a, b, c, d, e, f) {
        var g = null;
        e && f && (g = {
            width: e,
            height: f
        });
        if (this.u && d) this.u(d, a, b, !0, "", g, "", !1, !1, !1, !1, "", "");
        else {
            if ("js" == c) je(this, a);
            else {
                var h = new me(a, b, d, g);
                this.j.push(h);
                d && fe(d, function() {
                    h.l = !0
                })
            }
            this.w || (Sb(), Nb(), this.w = !0)
        }
    };
    l.unloadAdBlock = function(a, b) {
        r(window.Goog_Osd_UnloadAdBlock) && window.Goog_Osd_UnloadAdBlock(a, b)
    };
    l.setUpForcePeriscope = function() {
        window.google_enable_ose_periscope && (this.B = !0)
    };
    l.shouldForcePeriscope = function() {
        return this.B
    };
    var ne = function() {
            var a = Rb(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new O(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            return a.__google_ad_urls = new O(a, b)
        },
        me = function(a, b, c, d) {
            this.m = a;
            this.v = b;
            this.j = c;
            this.o = this.l = !1;
            this.u = d;
            this.ia = !1
        };
    y("Goog_AdSense_getAdAdapterInstance", ne);
    y("Goog_AdSense_OsdAdapter", O);
    y("Goog_AdSense_OsdAdapter.prototype.numBlocks", O.prototype.numBlocks);
    y("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", O.prototype.getNewBlocks);
    y("Goog_AdSense_OsdAdapter.prototype.getOseId", O.prototype.getOseId);
    y("Goog_AdSense_OsdAdapter.prototype.getCorrelator", O.prototype.getCorrelator);
    y("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", O.prototype.getRegisteredAdblockUrls);
    y("Goog_AdSense_OsdAdapter.prototype.setupOse", O.prototype.setupOse);
    y("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", O.prototype.registerAdBlock);
    y("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", O.prototype.setUpForcePeriscope);
    y("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", O.prototype.shouldForcePeriscope);
    y("Goog_AdSense_OsdAdapter.prototype.unloadAdBlock", O.prototype.unloadAdBlock);
    var P = p.googletag._vars_,
        oe = P["#7#"],
        pe = P["#20#"],
        Ob = function(a, b) {
            $b("files::getSrc", function() {
                if ("https:" == F.location.protocol && "http" == b) throw b = "https", Error("Requested url " + a + "/pagead/osd.js");
            });
            return [b, "://", a, "/pagead/osd.js"].join("")
        }(P["#1#"], P["#6#"] ? "https" : "http"),
        he = oe,
        ie = pe;
    var qe = function(a, b) {
            var c = b[J(a)];
            return null != c ? Ud(c) : null
        },
        re = function(a, b, c) {
            if (null != Ud(b)) return !0;
            b = !1;
            for (var d = 0; d < a.length && !b; d++) b = null != qe(a[d], c);
            return b
        },
        se = function(a) {
            var b = a;
            "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
            return b
        },
        te = /\+/g,
        ue = function(a) {
            var b = P["#6#"];
            return a || b ? "https://" + P["#3#"] : "http://" + P["#2#"]
        },
        ve = function() {
            var a = navigator.userAgent,
                b = a.indexOf("MSIE ");
            return -1 ==
                b ? 0 : parseFloat(a.substring(b + 5, a.indexOf(";", b)))
        },
        we = function() {
            var a = Wa;
            return null != a && -1 != a.indexOf("MSIE ") && -1 == a.indexOf("IEMobile")
        },
        xe = function(a, b) {
            var c = 0,
                d = [];
            a && (d.push(a.getAdUnitPath()), d.push(nd(a)), d.push(K(a)));
            if (b) {
                var e;
                e = [];
                for (var f = 0, g = b; g && 25 > f; g = g.parentNode, ++f) e.push(9 != g.nodeType && g.id || "");
                (e = e.join()) && d.push(e)
            }
            0 < d.length && (c = Wb(d.join(":")));
            return c.toString()
        },
        ye = function(a, b) {
            if (null == b) return a;
            var c = a.indexOf("google_preview=", a.lastIndexOf("?")),
                d = a.indexOf("&",
                    c); - 1 == d && (d = a.length - 1, --c);
            return a.substring(0, c) + a.substring(d + 1, a.length)
        },
        ze = {
            VISIBLE: "visible",
            HIDDEN: "hidden",
            PRERENDER: "prerender",
            Ma: "other"
        },
        Ae = function(a) {
            a = a || document;
            a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "visible";
            var b;
            a: {
                for (b in ze)
                    if (ze[b] == a) {
                        b = !0;
                        break a
                    }
                b = !1
            }
            return b ? a : "other"
        };
    var Be = function() {
            this.j = {};
            var a = Ib.URL;
            null == Q(this, "target_platform") && (this.j.target_platform = "DESKTOP");
            for (var b = this.j, a = a.split("?"), a = a[a.length - 1].split("&"), c = 0; c < a.length; c++) {
                var d = a[c].split("=");
                if (d[0]) {
                    var e = d[0].toLowerCase();
                    if ("google_domain_reset_url" != e) try {
                        var f;
                        if (1 < d.length) {
                            var g = d[1];
                            f = window.decodeURIComponent ? decodeURIComponent(g.replace(te, " ")) : unescape(g)
                        } else f = "";
                        b[e] = f
                    } catch (h) {}
                }
            }
        },
        Q = function(a, b) {
            return null == b ? null : a.j[b]
        };
    var Ce = function(a) {
            this.j = {};
            this.F = {};
            this.m = [];
            this.w = {};
            this.D = [];
            this.K = a;
            this.l = new Qd(a);
            this.u = {};
            this.G = {};
            this.B = {};
            this.o = {};
            this.J = this.C = "";
            this.v = !1;
            this.H = -1;
            this.I = 0
        },
        De = function(a, b, c) {
            b = new id(b, c || !1);
            if (!b.getAdUnitPath()) return null;
            c = J(b);
            var d = a.j[c];
            if (d) return d;
            a.j[c] = b;
            a.F[b.getAdUnitPath()] || (a.F[b.getAdUnitPath()] = []);
            return a.F[b.getAdUnitPath()][b.getInstance()] = b
        },
        Fe = function(a) {
            return Ha(Ee(a), function(a) {
                return !a.v
            })
        },
        Ge = function(a, b) {
            -1 == Ka(a.m, function(a) {
                return J(b) ==
                    J(a)
            }) && a.m.push(b)
        },
        He = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = J(d);
                e in a.j && (kd(d), La(a.m, function(a) {
                    return J(a) == e
                }))
            }
        },
        Ie = function(a) {
            a = Ha(Ee(a), function(a) {
                return !!a.v && !(a.v && a.D)
            });
            return Ia(a, function(a) {
                return [a.getAdUnitPath(), a.getInstance()]
            })
        },
        Je = function(a) {
            var b = 0;
            E(a.j, function() {
                b++
            });
            return b
        };
    Ce.prototype.toString = function() {
        var a = "[AdData:",
            b = [];
        E(this.j, function(a) {
            b.push(a.toString())
        });
        E(this.w, function(a, d) {
            b.push("[" + d + "," + a + "]")
        });
        a += b.join();
        return a + "]"
    };
    var Ke = function(a, b) {
            if (b) {
                var c = b.getAdUnitPath(),
                    d = b.getSlotId().getInstance();
                return a.j[c + "_" + d] || null
            }
            return null
        },
        Ee = function(a) {
            var b = [];
            E(a.j, function(a) {
                b.push(a)
            });
            return b
        },
        Le = function(a, b) {
            var c = b || Ee(a),
                c = Ia(c, function(a) {
                    return a.G
                });
            Qa(c);
            return c
        },
        Me = function(a) {
            var b = [];
            E(a.w, function(a, d) {
                b.push(G(d) + "=" + G(a))
            });
            0 < a.D.length && ("excl_cat" in a.w || b.push(G("excl_cat") + "=" + G(a.D.join(","))));
            return b.join("&")
        },
        Ne = function(a, b) {
            var c = a.B[J(b)],
                d;
            if (c)
                if (c) try {
                    var e = window.top,
                        f = new A(0,
                            0),
                        g, h = qb(c);
                    g = h ? xb(h) : window;
                    do {
                        var k;
                        if (g == e) k = jc(c);
                        else {
                            var n = hc(c);
                            k = new A(n.left, n.top)
                        }
                        h = k;
                        f.x += h.x;
                        f.y += h.y
                    } while (g && g != e && g != g.parent && (c = g.frameElement) && (g = g.parent));
                    d = f
                } catch (m) {
                    d = new A(-12245933, -12245933)
                } else d = null;
                else d = null;
            return d
        };
    var Oe = function() {
        this.j = [];
        this.w = "";
        this.G = "json_html";
        this.m = "fif";
        this.u = 1;
        this.F = !1;
        this.v = "";
        this.l = [];
        this.persistentRoadblocksOnly = !1;
        this.videoPodNumber = this.videoPodPosition = NaN;
        this.C = this.D = "";
        this.B = !1;
        this.videoStreamCorrelator = NaN;
        this.o = 0
    };
    var Pe = function(a, b) {
            this.url = a;
            this.T = b;
            this.Aa = !1;
            this.depth = v(void 0) ? void 0 : null
        },
        Qe = function() {
            this.l = p.top == p ? 1 : Db(p.top) ? 2 : 3;
            3 != this.l && Date.parse(p.top.document.lastModified);
            var a = p,
                b = [],
                c = null,
                d = null;
            do {
                var e = a;
                Db(e) ? (c = e.location.href, d = e.document.referrer || null) : (c = d, d = null);
                b.push(new Pe(c, e));
                try {
                    a = e.parent
                } catch (f) {
                    a = null
                }
            } while (a && e != a);
            e = 0;
            for (a = b.length - 1; e <= a; ++e) b[e].depth = a - e;
            e = p;
            if ((a = e.location.ancestorOrigins) && a.length == b.length - 1)
                for (e = 1; e < b.length; ++e) c = b[e], c.url || (c.url =
                    a[e - 1], c.Aa = !0);
            this.j = b
        };
    var Te = function(a) {
            this.u = document;
            this.j = a || 0;
            this.l = Re(this, "__gads=");
            this.v = this.o = !1;
            Se(this)
        },
        Ue = function(a, b) {
            if (b._cookies_ && b._cookies_.length && (a.m = b._cookies_[0], null != a.m && (a.l = a.m._value_, null != a.m && a.l))) {
                var c = new Date;
                c.setTime(1E3 * a.m._expires_);
                a.u.cookie = "__gads=" + a.l + "; expires=" + c.toGMTString() + "; path=" + a.m._path_ + "; domain=." + a.m._domain_
            }
        },
        Se = function(a) {
            if (!a.l && !a.v && 1 != a.j) {
                a.u.cookie = "GoogleAdServingTest=Good";
                var b = "Good" == Re(a, "GoogleAdServingTest=");
                if (b) {
                    var c = new Date;
                    c.setTime((new Date).valueOf() + -1);
                    a.u.cookie = "GoogleAdServingTest=; expires=" + c.toGMTString()
                }
                a.o = b;
                a.v = !0
            }
        },
        Re = function(a, b) {
            var c = a.u.cookie,
                d = c.indexOf(b),
                e = ""; - 1 != d && (d += b.length, e = c.indexOf(";", d), -1 == e && (e = c.length), e = c.substring(d, e));
            return e
        },
        Ve = null,
        We = function(a) {
            null == Ve && (Ve = new Te(a));
            return Ve
        };
    var zd = new function(a) {
            this.l = [];
            this.j = {};
            for (var b = 0, c = arguments.length; b < c; ++b) this.j[arguments[b]] = ""
        },
        Xe = [],
        Ze = function(a, b, c) {
            c = c || [];
            a = new Ye(a);
            if (pc.apply(a, c)()) {
                var d = a.j;
                c = [];
                var e = 0,
                    f;
                for (f in d) c[e++] = d[f];
                f = a.l;
                if ((d = a.m) ? f.j.hasOwnProperty(d) && "" == f.j[d] : 1) {
                    var g;
                    b = b * c.length;
                    a: {
                        try {
                            var h = window.top.location.hash;
                            if (h) {
                                var k = h.match(/\bdeid=([\d,]+)/);
                                g = k && k[1] || "";
                                break a
                            }
                        } catch (n) {}
                        g = ""
                    }(g = (g = (g = g.match(new RegExp("\\b(" + c.join("|") + ")\\b"))) && g[0] || null) ? g : xd ? null : Eb(c, b)) && yd(f,
                        g, d)
                }
            }
            Xe.push(a);
            return a
        },
        Ye = function(a) {
            var b = zd;
            this.j = a;
            this.l = b;
            this.m = "exp" + (this[fa] || (this[fa] = ++ga));
            this.l.j[this.m] = ""
        },
        $e = function(a, b) {
            var c;
            if (b in a.j) {
                c = a.l;
                var d = a.m;
                c = a.j[b] == (c.j.hasOwnProperty(d) ? c.j[d] : "")
            } else c = !1;
            return c
        },
        af = function(a) {
            for (var b = 0; b < Xe.length; ++b) {
                var c = Xe[b],
                    d = c.j,
                    e = {},
                    f = void 0;
                for (f in d) e[d[f]] = f;
                d = e[a];
                if (null != d) {
                    d in c.j && yd(c.l, c.j[d], c.m);
                    return
                }
            }
            0 <= Fa(zd.l, a) || yd(zd, a)
        },
        bf = P["#18#"],
        cf;
    cf = 0 <= Fa(["prerender"], Ae(void 0));
    Ze({
        control: "108809009",
        experiment: "108809010"
    }, bf, [function(a) {
        return function() {
            return a
        }
    }(cf)]);
    Ze({
        branch_1: "108809028",
        branch_2: "108809029"
    }, P["#27#"]);
    var df = Ze({
        control: "108809030",
        experiment: "108809031"
    }, P["#28#"]);
    $e(df, "experiment") || $e(df, "control") || af("108809080");
    var ef = Ze({
        control: "108809034",
        experiment: "108809035"
    }, P["#31#"]);
    P["#39#"] && af(P["#39#"]);
    Ze({
        control: "108809045",
        experiment: "108809046"
    }, P["#41#"]);
    var ff = Ze({
        control: "108809075",
        experiment: "108809076"
    }, P["#50#"]);
    Ze({
        control: "108809049",
        experiment: "108809050"
    }, P["#44#"]);
    var gf = Ze({
        control: "108809051",
        experiment: "108809052"
    }, P["#45#"]);
    var hf = function() {
        var a = p.googletag;
        return null != a && ea(a.getVersion) ? a.getVersion() : null
    };
    var jf = navigator;

    function kf() {
        try {
            return jf.javaEnabled()
        } catch (a) {
            return !1
        }
    }

    function lf(a) {
        var b = 1,
            c = 0,
            d;
        if (void 0 != a && "" != a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    }

    function mf(a, b) {
        if (!a || "none" == a) return 1;
        a = String(a);
        "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return lf(a.toLowerCase())
    }
    var nf = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        of = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
    var pf = function() {};
    var qf, rf = function() {};
    z(rf, pf);
    rf.prototype.j = function() {
        var a;
        a: {
            if (!this.l && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        new ActiveXObject(d);
                        a = this.l = d;
                        break a
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            a = this.l
        }
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    qf = new rf;
    var sf = function(a, b) {
            this.m = a;
            this.o = b;
            this.l = 0;
            this.j = null
        },
        tf = function(a) {
            var b;
            0 < a.l ? (a.l--, b = a.j, a.j = b.next, b.next = null) : b = a.m();
            return b
        },
        uf = function(a, b) {
            a.o(b);
            100 > a.l && (a.l++, b.next = a.j, a.j = b)
        };
    var vf = function(a) {
            p.setTimeout(function() {
                throw a;
            }, 0)
        },
        wf, xf = function() {
            var a = p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = x(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !C("Trident") && !C("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (r(c.next)) {
                        c = c.next;
                        var a = c.ga;
                        c.ga = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        ga: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    p.setTimeout(a, 0)
                }
        };
    var yf = function() {
            this.l = this.j = null
        },
        Af = new sf(function() {
            return new zf
        }, function(a) {
            a.reset()
        });
    yf.prototype.add = function(a, b) {
        var c = tf(Af);
        c.j = a;
        c.l = b;
        c.next = null;
        this.l ? this.l.next = c : this.j = c;
        this.l = c
    };
    yf.prototype.remove = function() {
        var a = null;
        this.j && (a = this.j, this.j = this.j.next, this.j || (this.l = null), a.next = null);
        return a
    };
    var zf = function() {
        this.next = this.l = this.j = null
    };
    zf.prototype.reset = function() {
        this.next = this.l = this.j = null
    };
    var Ff = function(a, b) {
            Bf || Cf();
            Df || (Bf(), Df = !0);
            Ef.add(a, b)
        },
        Bf, Cf = function() {
            if (p.Promise && p.Promise.resolve) {
                var a = p.Promise.resolve();
                Bf = function() {
                    a.then(Gf)
                }
            } else Bf = function() {
                var a = Gf;
                !ea(p.setImmediate) || p.Window && p.Window.prototype && p.Window.prototype.setImmediate == p.setImmediate ? (wf || (wf = xf()), wf(a)) : p.setImmediate(a)
            }
        },
        Df = !1,
        Ef = new yf,
        Gf = function() {
            for (var a = null; a = Ef.remove();) {
                try {
                    a.j.call(a.l)
                } catch (b) {
                    vf(b)
                }
                uf(Af, a)
            }
            Df = !1
        };
    var If = function(a, b) {
            this.j = 0;
            this.w = void 0;
            this.m = this.l = this.u = null;
            this.o = this.v = !1;
            if (a != aa) try {
                var c = this;
                a.call(b, function(a) {
                    Hf(c, 2, a)
                }, function(a) {
                    Hf(c, 3, a)
                })
            } catch (d) {
                Hf(this, 3, d)
            }
        },
        Jf = function() {
            this.next = this.m = this.l = this.o = this.j = null;
            this.u = !1
        };
    Jf.prototype.reset = function() {
        this.m = this.l = this.o = this.j = null;
        this.u = !1
    };
    var Kf = new sf(function() {
            return new Jf
        }, function(a) {
            a.reset()
        }),
        Lf = function(a, b, c) {
            var d = tf(Kf);
            d.o = a;
            d.l = b;
            d.m = c;
            return d
        };
    If.prototype.then = function(a, b, c) {
        return Mf(this, ea(a) ? a : null, ea(b) ? b : null, c)
    };
    If.prototype.then = If.prototype.then;
    If.prototype.$goog_Thenable = !0;
    var Of = function(a, b) {
            a.l || 2 != a.j && 3 != a.j || Nf(a);
            a.m ? a.m.next = b : a.l = b;
            a.m = b
        },
        Mf = function(a, b, c, d) {
            var e = Lf(null, null, null);
            e.j = new If(function(a, g) {
                e.o = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (n) {
                        g(n)
                    }
                } : a;
                e.l = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        a(e)
                    } catch (n) {
                        g(n)
                    }
                } : g
            });
            e.j.u = a;
            Of(a, e);
            return e.j
        };
    If.prototype.C = function(a) {
        this.j = 0;
        Hf(this, 2, a)
    };
    If.prototype.D = function(a) {
        this.j = 0;
        Hf(this, 3, a)
    };
    var Hf = function(a, b, c) {
            if (0 == a.j) {
                a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.j = 1;
                var d;
                a: {
                    var e = c,
                        f = a.C,
                        g = a.D;
                    if (e instanceof If) Of(e, Lf(f || aa, g || null, a)), d = !0;
                    else {
                        var h;
                        if (e) try {
                            h = !!e.$goog_Thenable
                        } catch (k) {
                            h = !1
                        } else h = !1;
                        if (h) e.then(f, g, a), d = !0;
                        else {
                            if (w(e)) try {
                                var n = e.then;
                                if (ea(n)) {
                                    Pf(e, n, f, g, a);
                                    d = !0;
                                    break a
                                }
                            } catch (m) {
                                g.call(a, m);
                                d = !0;
                                break a
                            }
                            d = !1
                        }
                    }
                }
                d || (a.w = c, a.j = b, a.u = null, Nf(a), 3 != b || Qf(a, c))
            }
        },
        Pf = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                h = function(a) {
                    f ||
                        (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        },
        Nf = function(a) {
            a.v || (a.v = !0, Ff(a.B, a))
        },
        Rf = function(a) {
            var b = null;
            a.l && (b = a.l, a.l = b.next, b.next = null);
            a.l || (a.m = null);
            return b
        };
    If.prototype.B = function() {
        for (var a = null; a = Rf(this);) {
            var b = this.j,
                c = this.w;
            if (3 == b && a.l && !a.u)
                for (var d = void 0, d = this; d && d.o; d = d.u) d.o = !1;
            if (a.j) a.j.u = null, Sf(a, b, c);
            else try {
                a.u ? a.o.call(a.m) : Sf(a, b, c)
            } catch (e) {
                Tf.call(null, e)
            }
            uf(Kf, a)
        }
        this.v = !1
    };
    var Sf = function(a, b, c) {
            2 == b ? a.o.call(a.m, c) : a.l && a.l.call(a.m, c)
        },
        Qf = function(a, b) {
            a.o = !0;
            Ff(function() {
                a.o && Tf.call(null, b)
            })
        },
        Tf = vf;
    var Xf = function(a, b) {
            var c = {
                timeoutMs: 0,
                withCredentials: !0
            };
            return new If(function(d, e) {
                var f = c || {},
                    g, h = f.La ? f.La.j() : qf.j();
                try {
                    h.open("POST", a, !0)
                } catch (k) {
                    e(new Uf("Error opening XHR: " + k.message, a))
                }
                h.onreadystatechange = function() {
                    if (4 == h.readyState) {
                        p.clearTimeout(g);
                        var b;
                        a: switch (h.status) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                b = !0;
                                break a;
                            default:
                                b = !1
                        }!b && (b = 0 === h.status) && (b = Nd(a)[1] || null, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b =
                            b ? b.toLowerCase() : "", b = !("http" == b || "https" == b || "" == b));
                        b ? d(h) : e(new Vf(h.status, a))
                    }
                };
                h.onerror = function() {
                    e(new Uf("Network error", a))
                };
                var n;
                if (f.headers) {
                    for (var m in f.headers) n = f.headers[m], null != n && h.setRequestHeader(m, n);
                    n = f.headers["Content-Type"]
                }
                m = p.FormData && b instanceof p.FormData;
                void 0 !== n || m || h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                f.withCredentials && (h.withCredentials = f.withCredentials);
                f.responseType && (h.responseType = f.responseType);
                f.Da &&
                    h.overrideMimeType(f.Da);
                0 < f.Ia && (g = p.setTimeout(function() {
                    h.onreadystatechange = aa;
                    h.abort();
                    e(new Wf(a))
                }, f.Ia));
                try {
                    h.send(b)
                } catch (t) {
                    h.onreadystatechange = aa, p.clearTimeout(g), e(new Uf("Error sending XHR: " + t.message, a))
                }
            })
        },
        Uf = function(a, b) {
            ja.call(this, a + ", url=" + b);
            this.url = b
        };
    z(Uf, ja);
    Uf.prototype.name = "XhrError";
    var Vf = function(a, b) {
        Uf.call(this, "Request Failed, status=" + a, b)
    };
    z(Vf, Uf);
    Vf.prototype.name = "XhrHttpError";
    var Wf = function(a) {
        Uf.call(this, "Request timed out", a)
    };
    z(Wf, Uf);
    Wf.prototype.name = "XhrTimeoutError";
    var Yf = function() {};
    z(Yf, pf);
    Yf.prototype.j = function() {
        var a = new XMLHttpRequest;
        if ("withCredentials" in a) return a;
        if ("undefined" != typeof XDomainRequest) return new Zf;
        throw Error("Unsupported browser");
    };
    var Zf = function() {
        this.j = new XDomainRequest;
        this.readyState = 0;
        this.responseText = this.onreadystatechange = null;
        this.status = -1;
        this.j.onload = x(this.ta, this);
        this.j.onerror = x(this.ha, this);
        this.j.onprogress = x(this.ua, this);
        this.j.ontimeout = x(this.va, this)
    };
    l = Zf.prototype;
    l.open = function(a, b, c) {
        if (null != c && !c) throw Error("Only async requests are supported.");
        this.j.open(a, b)
    };
    l.send = function(a) {
        if (a)
            if ("string" == typeof a) this.j.send(a);
            else throw Error("Only string data is supported");
        else this.j.send()
    };
    l.abort = function() {
        this.j.abort()
    };
    l.setRequestHeader = function() {};
    l.ta = function() {
        this.status = 200;
        this.responseText = this.j.responseText;
        $f(this, 4)
    };
    l.ha = function() {
        this.status = 500;
        this.responseText = null;
        $f(this, 4)
    };
    l.va = function() {
        this.ha()
    };
    l.ua = function() {
        this.status = 200;
        $f(this, 1)
    };
    var $f = function(a, b) {
        a.readyState = b;
        if (a.onreadystatechange) a.onreadystatechange()
    };
    var ag = function(a) {
            if (a = sb(a)) a.innerHTML = ""
        },
        bg = function(a, b) {
            var c = sb(a);
            c && (c.style.display = b ? "" : "none")
        },
        cg = function(a, b, c, d, e) {
            e = (e || document).createElement("iframe");
            e.id = b;
            e.name = b;
            null != d[0] && null != d[1] && (e.width = String(d[0]), e.height = String(d[1]));
            e.vspace = "0";
            e.hspace = "0";
            e.allowTransparency = "true";
            e.scrolling = "no";
            e.marginWidth = "0";
            e.marginHeight = "0";
            e.frameBorder = "0";
            e.style.border = "0";
            e.style.verticalAlign = "bottom";
            c && (e.style.visibility = "hidden", e.style.display = "none");
            e.src = "javascript:\"<html><body style='background:transparent'></body></html>\"";
            a.appendChild(e);
            return e
        },
        dg = function(a, b) {
            if (0 != ve()) {
                var c = a.getElementById(b);
                c && "hidden" == c.style.visibility && "none" == c.style.display && c.parentNode.removeChild(c)
            }
        },
        fg = function(a, b, c, d, e) {
            return new cd({
                U: a,
                wa: b,
                content: eg(c),
                size: new B(d[0], d[1]),
                Ca: {
                    info: function() {},
                    j: function() {},
                    error: function() {}
                },
                ra: !0,
                ka: e
            })
        },
        ig = function(a, b, c) {
            c && (b = eg(b));
            if (0 != ve()) {
                var d;
                try {
                    d = !!a.contentWindow.document
                } catch (e) {
                    d = !1
                }
                if (d) {
                    var f = b,
                        g = gg();
                    try {
                        var h = window.frames[a.name];
                        if (6 < parseInt(ve(), 10) || 0 > f.indexOf("http://" +
                                P["#1#"] + "/pagead/inject_object_div.js")) {
                            var k;
                            b: {
                                a = f;
                                b = document;
                                var n = ve(),
                                    m;
                                if (!(m = 0 == n || isNaN(n) || 7 > n || 9 < n || b.documentMode && 10 <= b.documentMode)) {
                                    var t = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                                    m = 6 <= (t ? parseFloat(t[1]) : 0)
                                }
                                if (!m)
                                    for (n = 0; n < a.length; ++n)
                                        if (127 < a.charCodeAt(n)) {
                                            k = !0;
                                            break b
                                        }
                                k = !1
                            }
                            if (k) {
                                var q = unescape(encodeURIComponent(f)),
                                    W = Math.floor(q.length / 2);
                                a = [];
                                for (k = 0; k < W; ++k) a[k] = String.fromCharCode(256 * q.charCodeAt(2 * k + 1) + q.charCodeAt(2 * k));
                                1 == q.length % 2 && (a[W] = q.charAt(q.length -
                                    1));
                                f = a.join("")
                            }
                            h.contents = f;
                            h.location.replace("javascript:window.contents")
                        } else h.contents = f, h.location.replace("javascript:document.write(window.contents);document.close();")
                    } catch (Pa) {} finally {
                        hg(g)
                    }
                } else {
                    q = b;
                    h = gg();
                    try {
                        f = "google-ad-content-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ +new Date).toString(36)), window[f] = q, q = 'var adContent = window.parent["' + f + '"];window.parent["' + f + '"] = null;document.write(adContent);', q = 6 == ve() ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" +
                            document.domain + '";' + q + "<\\/scr\\' + \\'ipt>\\');document.close(); };" : 'document.domain = "' + document.domain + '";' + q + "document.close();", a.src = 'javascript:\'<script type="text/javascript">' + q + "\x3c/script>'"
                    } catch (Kh) {
                        window[f] = null
                    } finally {
                        hg(h)
                    }
                }
            } else {
                h = b;
                try {
                    g = a.contentWindow ? a.contentWindow.document : a.contentDocument, -1 != navigator.userAgent.indexOf("Firefox") && g.open("text/html", "replace"), g.write(h), g.close()
                } catch (Lh) {}
            }
        },
        eg = function(a) {
            if (!Boolean(a)) return a;
            var b = a.toLowerCase();
            return -1 <
                b.indexOf("<!doctype") || -1 < b.indexOf("<html") ? a : "<html>\n<head>\n<script>var inDapIF=true;\x3c/script>\n</head><body>" + a + "</body></html>\n"
        },
        jg = function(a, b) {
            var c = (b || document).getElementById(a);
            if (c && c.style.height && c.style.width) {
                for (var c = [c.style.width, c.style.height], d = 0; d < c.length; ++d)
                    if (2 < c[d].length && "px" == c[d].substring(c[d].length - 2)) c[d] = parseInt(c[d], 10);
                    else return null;
                return c
            }
            return null
        },
        gg = function() {
            var a = [],
                b = document.getElementsByTagName("base");
            if (b)
                for (var c = 0, d = b.length; c <
                    d; ++c) {
                    var e = b[c],
                        f = e.getAttribute("target");
                    f && (a.push({
                        na: e,
                        Fa: f
                    }), e.removeAttribute("target"))
                }
            return a
        },
        hg = function(a) {
            if (a)
                for (var b = 0, c = a.length; b < c; ++b) {
                    var d = a[b];
                    d.na.setAttribute("target", d.Fa)
                }
        };
    var kg = function(a, b) {
            var c;
            c = P["#6#"] ? "https://" + P["#33#"] : "http://" + P["#33#"];
            if (!b || 0 > b || 1 < b) b = 0;
            this.m = Math.random() < b;
            this.l = a;
            this.j = c + "/pagead/gen_204?id=" + G(a)
        },
        R = function(a, b, c) {
            b && b.match(/^\w+$/) && c && (a.j += "&" + b + "=" + G(c))
        },
        lg = function(a, b) {
            var c = hf();
            null != c && R(a, "vrg", "" + c);
            R(a, "vrp", "68g");
            var c = document,
                d = window,
                e = Le(b);
            0 < e.length && (R(a, "pub_id", e[0]), 3 >= e.length || (e = Oa(e, 0, 3), e.push("__extra__")), R(a, "nw_id", e.join(",")));
            R(a, "nslots", Je(b).toString());
            e = Ad();
            0 < e.length && R(a, "eid", e.join());
            R(a, "pub_url", c.URL);
            null != Ud(b.l) && d.top != d || R(a, "pub_ref", c.referrer)
        },
        mg = function(a) {
            a.m && a.l && a.j && Lb(window, a.j)
        };
    var S = function(a, b, c, d, e) {
        this.j = b;
        this.u = c;
        this.m = d;
        this.v = a;
        this.l = e;
        this.o = "";
        this.G = sd;
        this.w = [];
        this.F = []
    };
    S.prototype.L = function(a) {
        if (!ca(a)) return "";
        if ("sra" == this.v) 0 == a.length && (a = Ee(this.j));
        else {
            if (0 == a.length) return "";
            1 < a.length && (a = [a[0]])
        }
        this.C();
        this.D(a);
        return this.o
    };
    S.prototype.D = function(a) {
        try {
            var b, c = "",
                d = 0;
            "prerender" == Ae(document) ? (c = "108809008", d = P["#17#"]) : (c = "108809007", d = P["#16#"]);
            b = Eb([c], d);
            T(this, "eid", (b ? Ma(this.l.l, b) : this.l.l).join())
        } catch (e) {}
        this.m && 0 !== this.m.j && T(this, "co", this.m.j);
        b = this.j.H; - 1 !== b && T(this, "tfcd", b);
        1 === this.j.I && T(this, "kfa", 1);
        T(this, "sc", P["#6#"] ? 1 : 0);
        Boolean(window.postMessage) && T(this, "sfv", "1-0-2");
        if ("sra" == this.v) {
            b = a.length;
            for (c = 0; c < b; c++) {
                var d = a[c].getAdUnitPath(),
                    f = "";
                if ("" != d) {
                    d = d.split("/");
                    for (f = 0; f < d.length; f++)
                        if ("" !=
                            d[f]) {
                            for (var g = !1, h = 0; h < this.w.length; h++)
                                if (d[f] == this.w[h]) {
                                    g = !0;
                                    break
                                }
                            g || this.w.push(d[f])
                        }
                    f = "";
                    for (g = 0; g < d.length; g++) {
                        if (0 < g) f += "/";
                        else if ("" == d[0]) continue;
                        for (h = 0; h < this.w.length; h++)
                            if (d[g] == this.w[h]) {
                                f += h;
                                break
                            }
                    }
                }
                this.F.push(f)
            }
            T(this, "iu_parts", this.w.join());
            T(this, "enc_prev_ius", this.F.join());
            b = [];
            for (c = 0; c < a.length; ++c) b.push(nd(a[c]));
            T(this, "prev_iu_szs", b.join());
            b = [];
            c = !1;
            for (d = 0; d < a.length; ++d) f = a[d].getFirstLook(), 0 != f && (c = !0), b.push(f);
            (b = c ? b.join() : void 0) && T(this, "fla", b);
            if (a.length) {
                b = "";
                for (c = 0; c < a.length; ++c) b += a[c].getOutOfPage() ? "1" : "0";
                b = parseInt(b, 2)
            } else b = 0;
            b && T(this, "ists", b);
            ng(this);
            c = null;
            b = [];
            for (c = 0; c < a.length; ++c) b.push(od(a[c]));
            c = b.join("|");
            c.length == b.length - 1 && (c = null);
            T(this, "prev_scp", c)
        } else b = a[0].j.gtfcd(), -1 !== b && T(this, "tfcd", b), b = a[0], T(this, "iu", b.getAdUnitPath()), T(this, "sz", nd(b)), (c = b.getFirstLook()) && T(this, "fl", c), b.getClickUrl() && T(this, "click", b.getClickUrl()), b.getOutOfPage() && T(this, "ists", "1"), b in this.j.o && T(this, "logonly",
            "1"), ng(this), b = a[0], c = od(b), T(this, "scp", c), b = b.getAudExtId(), 0 < b && T(this, "audextid", b);
        b = a[0].l;
        c = re(a, this.j.l, this.j.u);
        d = this.l.F;
        f = 3 == this.l.u;
        g = P["#46#"];
        h = 0;
        1 != this.l.u && (h |= 1);
        b && (h |= 2);
        c && (h |= 4);
        d && (h |= 8);
        f && (h |= 16);
        g && (h |= 32);
        b = h;
        0 < b && T(this, "eri", b);
        "prerender" == Ae() && T(this, "d_imp", 1);
        b = window;
        c = document;
        T(this, "cust_params", Me(this.j));
        this.m && 1 != this.m.j && (T(this, "cookie", this.m.l), this.m.o && T(this, "cookie_enabled", "1"));
        (d = this.j.C) && T(this, "uule", d);
        this.m && 1 != this.m.j && (b = (Ud(this.j.l) ||
            (b.top == b ? c.URL : c.referrer)) != c.URL ? c.domain : "") && T(this, "cdm", b);
        null != Q(this.u, "google_preview") && T(this, "gct", Q(this.u, "google_preview"));
        this.B(new Date, a, window);
        b = {};
        b.u_tz = -(new Date).getTimezoneOffset();
        var k;
        try {
            k = F.history.length
        } catch (n) {
            k = 0
        }
        b.u_his = k;
        b.u_java = !!F.navigator && "unknown" != typeof F.navigator.javaEnabled && !!F.navigator.javaEnabled && F.navigator.javaEnabled();
        F.screen && (b.u_h = F.screen.height, b.u_w = F.screen.width, b.u_ah = F.screen.availHeight, b.u_aw = F.screen.availWidth, b.u_cd = F.screen.colorDepth);
        F.navigator && F.navigator.plugins && (b.u_nplug = F.navigator.plugins.length);
        F.navigator && F.navigator.mimeTypes && (b.u_nmime = F.navigator.mimeTypes.length);
        og(this, b);
        p.devicePixelRatio && U(this, "u_sd", Number(p.devicePixelRatio.toFixed(3)));
        var m;
        try {
            m = Vb()
        } catch (t) {
            m = "0"
        }
        U(this, "flash", m);
        c = window;
        m = c.document;
        k = "sra" == this.v ? Ud(this.j.l) : qe(a[0], this.j.u) || Ud(this.j.l);
        if ($e(ff, "experiment")) null != k || (k = ye(Ud(this.j.l) || (c.top == c ? m.URL : m.referrer), Q(this.u, "google_preview"))), T(this, "url", k), re(a, this.j.l,
            this.j.u) && c.top != c || T(this, "ref", m.referrer);
        else {
            d = ye(m.URL, Q(this.u, "google_preview"));
            a = ye(m.referrer, Q(this.u, "google_preview"));
            f = new Qe;
            m = f.j[f.j.length - 1].url;
            b = f.j[0].depth;
            var q;
            null != k ? (q = d, c.top != c && (a = "", m && (m = Md(m)))) : k = d;
            if (null != b && 0 < b && (T(this, "nhd", b), c.location.ancestorOrigins)) {
                d = f.j;
                c = [];
                for (f = 1; f < d.length && 27 > f; f++) d[f] && d[f].url && (c[f - 1] = d[f].url);
                d = new Qe;
                c = pg(c.reverse(), d.j[d.j.length - 1].url || "");
                T(this, "iag", c)
            }
            T(this, "url", k);
            null != q && q != k && T(this, "loc", q);
            T(this, "ref",
                a);
            null != b && 0 < b && T(this, "top", m)
        }
        q = window.document;
        k = q.scripts;
        T(this, "dssz", k.length);
        a = [];
        for (m = k.length; 0 <= m && 26 > a.length;) null != k[m] && null != k[m].src && "" != k[m].src && a.push(k[m].src), m--;
        k = new Qe;
        T(this, "icsg", pg(a.reverse(), k.j[k.j.length - 1].url || ""));
        a = Error();
        a.stack && (k = a.stack, m = k.split(/\r\n|\r|\n/).length, "Error" == k.slice(0, 5) && m--, k = m - 10, 0 > k && (k = 0, m = new kg("gpt_negative_stack_trace", P["#23#"]), lg(m, this.j), R(m, "stackTrace", a.stack), mg(m)), T(this, "std", k));
        q.currentScript && q.currentScript.text &&
            T(this, "csl", q.currentScript.text.length);
        T(this, "vrg", hf());
        T(this, "vrp", "68g")
    };
    var qg = function(a, b) {
            for (var c = b.length, d = [], e = 0; e < c; e++) {
                var f = xe(b[e]);
                b[e].H = f;
                d.push(f)
            }
            T(a, "adks", d.join(","))
        },
        og = function(a, b) {
            E(b, function(a, b) {
                U(this, b, a)
            }, a)
        },
        ng = function(a) {
            a.m && 1 == a.m.j || T(a, "ppid", a.j.J)
        };
    S.prototype.B = function(a, b, c) {
        var d = c.document;
        T(this, "lmt", (Date.parse(d.lastModified) / 1E3).toString());
        U(this, "dt", a.getTime());
        if (d.body) {
            a = d.body.scrollHeight;
            var e = d.body.clientHeight;
            e && a && T(this, "cc", Math.round(100 * e / a).toString())
        }
        a = Q(this.u, "deb");
        null != a && T(this, "deb", a);
        a = Q(this.u, "haonly");
        null != a && T(this, "haonly", a);
        a = Xd(c, d);
        Mb(a, x(function(a, b) {
            T(this, b, a)
        }, this));
        d = Pd(c, d).xa || null;
        null != d && T(this, "frm", d);
        if (d = ee(!0, c)) T(this, "biw", d.width), T(this, "bih", d.height);
        c.top != c && (c = ee(!1,
            c)) && (T(this, "isw", c.width), T(this, "ish", c.height));
        this.l.o && T(this, "oid", this.l.o);
        if ("sra" == this.v) qg(this, b);
        else {
            if (c = Ne(this.j, b[0])) T(this, "adx", Math.round(c.x)), T(this, "ady", Math.round(c.y));
            c = b[0].H || xe(b[0], this.j.G[J(b[0])]);
            T(this, "adk", c)
        }
        c = ge();
        0 < c && T(this, "osd", c);
        c = this.j.l;
        d = "";
        "sra" == this.v ? d = Wd(b, c, this.j.u, this.G) : (b = this.j.u[J(b[0])], null == b ? b = c : Sd(b, c), b = Td(b), d = b.L());
        d && (this.o += "&" + d)
    };
    S.prototype.C = function() {
        var a = !1;
        Boolean(this.j.C) ? a = !1 : a = P["#46#"] || $e(df, "control");
        this.o = ue(!a) + "/gampad/ads?";
        U(this, "gdfp_req", 1);
        T(this, "correlator", this.l.w);
        U(this, "output", this.l.G);
        U(this, "callback", this.l.v);
        U(this, "impl", this.l.m);
        this.l.persistentRoadblocksOnly && T(this, "per_only", 1);
        "sra" == this.v && T(this, "json_a", 1)
    };
    var T = function(a, b, c) {
            null != c && U(a, b, G("" + c))
        },
        U = function(a, b, c) {
            null != c && "" != c && (a.o = "?" != a.o.charAt(a.o.length - 1) ? a.o + ("&" + b + "=" + c) : a.o + (b + "=" + c))
        },
        rg = function(a, b) {
            var c = b - 8;
            if (a.length > b) {
                var d = a.lastIndexOf("&", c); - 1 != d ? a = a.substring(0, d) : (a = a.substring(0, c), a = a.replace(/%\w?$/, ""));
                a += "&trunc=1"
            }
            return a
        },
        pg = function(a, b) {
            for (var c = "", d = 0; d < a.length && 26 > d; d++) {
                var e;
                null != a[d] && (e = Md(a[d]));
                if ("" != b && e && e == Md(b)) c = c + "11";
                else {
                    var f;
                    if (f = e) {
                        f = a[d];
                        var g = /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i,
                            h = /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(\:\d+)?($|(\/.*))/i,
                            k = /^https?:\/\/(tpc|pagead2).googlesyndication\.com(\:\d+)?($|(\/.*))/i,
                            n = /^https?:\/\/www.googletagservices\.com(\:\d+)?($|(\/.*))/i;
                        f = /^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i.test(f) || g.test(f) || h.test(f) || k.test(f) || n.test(f)
                    }
                    if (f) c = c + "10";
                    else {
                        if (f = e) a: if (f = e.toLowerCase().split("."), 2 > f.length) f = !1;
                            else {
                                f = f[f.length - 2] + "." + f[f.length - 1];
                                for (h = g = 0; h < f.length; ++h) g = 31 * g + f.charCodeAt(h), g %= 4294967296;
                                switch (g) {
                                    case 1967261364:
                                    case 3147493546:
                                    case 1567346461:
                                    case 2183041838:
                                    case 763236279:
                                    case 1342279801:
                                    case 526831769:
                                    case 352806002:
                                    case 2755048925:
                                    case 3306848407:
                                    case 2207000920:
                                    case 484037040:
                                    case 3506871055:
                                    case 672143848:
                                    case 2528751226:
                                    case 2744854768:
                                    case 3703278665:
                                    case 2014749173:
                                    case 133063824:
                                    case 2749334602:
                                    case 3131239845:
                                    case 2074086763:
                                    case 795772493:
                                    case 290857819:
                                    case 3035947606:
                                    case 2983138003:
                                    case 2197138676:
                                    case 4216016165:
                                    case 239803524:
                                    case 975993579:
                                    case 1794940339:
                                    case 1314429186:
                                    case 1643618937:
                                    case 497159982:
                                        f = !0;
                                        break a;
                                    default:
                                        f = !1
                                }
                            }
                        c = f ? c + "01" : c + "00"
                    }
                }
            }
            return "" == c ? 0 : parseInt(c, 2)
        };
    var sg = function(a, b, c, d, e) {
        S.call(this, a, b, c, d, e)
    };
    z(sg, S);
    sg.prototype.B = function(a, b, c) {
        0 < navigator.userAgent.indexOf("MSIE ") && Rd(this.j.l, "google_encoding", document.charset, !1);
        S.prototype.B.call(this, a, b, c);
        T(this, "ifi", b[0].I);
        c == c.top ? c = 0 : (a = [], a.push(c.document.URL), c.name && a.push(c.name), c = ee(!1, c, !1), a.push(c.width.toString()), a.push(c.height.toString()), c = Wb(a.join("")));
        0 != c && T(this, "ifk", c.toString())
    };
    sg.prototype.D = function(a) {
        var b = a[0],
            c = window;
        c.google_unique_id ? ++c.google_unique_id : c.google_unique_id = 1;
        b.I = c.google_unique_id;
        this.l.B && (U(this, "hxva", 1), T(this, "cmsid", this.l.C), T(this, "vid", this.l.D));
        isNaN(this.l.videoPodNumber) || U(this, "pod", this.l.videoPodNumber);
        isNaN(this.l.videoPodPosition) || U(this, "ppos", this.l.videoPodPosition);
        isNaN(this.l.videoStreamCorrelator) || U(this, "scor", this.l.videoStreamCorrelator);
        S.prototype.D.call(this, a);
        a = window;
        var b = a.document.domain,
            c = a.document.cookie,
            d = a.history.length,
            e = a.screen,
            f = a.document.referrer,
            g = Math.round((new Date).getTime() / 1E3),
            h = window.google_analytics_domain_name,
            b = "undefined" == typeof h ? mf("auto", b) : mf(h, b),
            k = -1 < c.indexOf("__utma=" + b + "."),
            n = -1 < c.indexOf("__utmb=" + b),
            h = Gd("google_persistent_state"),
            m;
        (m = Id(h)) || (m = h.S[Hd(14)] = {});
        h = m;
        m = !1;
        if (k) f = c.split("__utma=" + b + ".")[1].split(";")[0].split("."), n ? h.sid = f[3] + "" : h.sid || (h.sid = g + ""), h.vid = f[0] + "." + f[1], h.from_cookie = !0;
        else {
            h.sid || (h.sid = g + "");
            if (!h.vid) {
                m = !0;
                n = Math.round(2147483647 *
                    Math.random());
                k = [jf.appName, jf.version, jf.language ? jf.language : jf.browserLanguage, jf.platform, jf.userAgent, kf() ? 1 : 0].join("");
                e ? k += e.width + "x" + e.height + e.colorDepth : window.java && (e = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), k += e.screen.width + "x" + e.screen.height);
                k = k + c + (f || "");
                for (f = k.length; 0 < d;) k += d-- ^ f++;
                h.vid = (n ^ lf(k) & 2147483647) + "." + g
            }
            h.from_cookie = !1
        }
        if (!h.cid) {
            var t;
            a: {
                g = 999;
                if (f = window.google_analytics_domain_name) f = 0 == f.indexOf(".") ? f.substr(1) : f, g = ("" + f).split(".").length;
                f = 999;
                c = c.split(";");
                for (e = 0; e < c.length; e++)
                    if (d = nf.exec(c[e]) || of.exec(c[e])) {
                        if (d[1] == g) {
                            t = d[2];
                            break a
                        }
                        d[1] < f && (f = d[1], t = d[2])
                    }
            }
            m && t && -1 != t.search(/^\d+\.\d+$/) ? h.vid = t : t != h.vid && (h.cid = t)
        }
        h.dh = b;
        h.hid || (h.hid = Math.round(2147483647 * Math.random()));
        t = Gd();
        t = Id(t);
        U(this, "ga_vid", t.vid);
        U(this, "ga_sid", t.sid);
        U(this, "ga_hid", t.hid);
        U(this, "ga_fc", t.from_cookie);
        T(this, "ga_wpids", a.google_analytics_uacct)
    };
    var tg = function(a, b, c, d) {
        var e = Q(c, "api_experiment");
        la(Ca(e)) || Ga(Ia(e.split(","), ma), af);
        Ga(Ad(), function(a) {
            googletag._tmanager_.addFeature(a)
        });
        this.A = b;
        this.l = c;
        this.v = d;
        this.m = Math.floor(4503599627370496 * Math.random());
        this.aa = !1;
        this.j = a;
        D && jb(9) && (qf = new Yf)
    };
    tg.prototype.F = function() {
        return "lean"
    };
    var ug = function(a, b) {
        b && window.top != window ? a.aa = !0 : b = Math.floor(4503599627370496 * Math.random());
        a.m = Math.floor(b)
    };
    tg.prototype.Z = function() {
        return null
    };
    tg.prototype.M = function() {
        return !1
    };
    tg.prototype.$ = function() {};
    var vg = function(a, b, c, d) {
        var e = new Oe;
        e.G = "json_html";
        e.m = a.D(a.j);
        e.u = c;
        e.v = d;
        e.j = b;
        return e
    };
    tg.prototype.u = function(a) {
        a.w = this.m + "";
        a.l = Ad();
        a.F = this.aa
    };
    tg.prototype.L = function(a) {
        this.u(a);
        return wg(this, this.j ? "sra" : "single", a).L(a.j)
    };
    var xg = function(a, b) {
            return b ? rg(a, 8192) : rg(a, 2048)
        },
        zg = function(a, b, c, d) {
            b = Nd(b);
            Xf(Jd(b[1], b[2], b[3], b[4], b[5], "nwids=" + G(d)), b[6]).then(function(a) {
                var b;
                a = a.responseText;
                a = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).replace(/\\x/g, "\\u00");
                var d = p.JSON.parse;
                try {
                    b = d(a)
                } catch (h) {
                    b = null
                }
                b && (yg(b), c(b))
            }, function(a) {
                var b = new kg("gpt_post_error", P["#23#"]);
                a.name && R(b, "name", a.name);
                a.status && R(b, "status", a.status);
                a.message && R(b, "message", a.message);
                lg(b, this.A);
                mg(b)
            }, a)
        },
        yg = function(a) {
            ca(a) ?
                Ga(a, yg) : E(a, function(a) {
                    a._cookies_ && delete a._cookies_
                })
        },
        Ag = function(a, b, c, d) {
            var e = d || !1;
            Ga(b, function(a) {
                var b = vg(this, [a], 1, c);
                this.u(b);
                b.m = this.D(!1);
                b = xg(wg(this, "single", b).L([a]), e);
                ld(a, b)
            }, a)
        },
        Bg = function(a, b, c) {
            b in a.A.o || (c && a.M([b]), c = b.getCollapseEmptyDiv(), null == c && (c = "true" === Q(a.l, "google_collapse_empty_div")), c && bg(K(b), !1))
        },
        Fg = function(a, b, c) {
            var d = [];
            if (a.j)
                if (ca(b)) {
                    d = c || Ee(a.A);
                    c = [];
                    for (var e = {}, f = 0; f < d.length; ++f) {
                        for (var g = d[f], h = null, k = Math.min(b.length, f + 1), n = 0; n < k; n++)
                            if (null ==
                                e[n] && (h = b[n][g.getAdUnitPath()])) {
                                e[n] = !0;
                                break
                            }
                        h && (Cg(a, g, h), c.push(g))
                    }
                    d = c
                } else d = Dg(a, b);
            else {
                e = [];
                f = 0;
                for (g in b) e[f++] = g;
                1 < e.length || 0 == e.length ? a = null : (e = e[0], b = b[e], (c = (c ? c[0] : void 0) || Eg(a, e)) ? (Cg(a, c, b), a = c) : a = null);
                a && d.push(a)
            }
            return d
        },
        Dg = function(a, b) {
            var c = [];
            E(b, function(a, b) {
                var f = Eg(this, b);
                f && (Cg(this, f, a), c.push(f))
            }, a);
            return c
        },
        Cg = function(a, b, c) {
            b.m = c;
            b.D || (b.D = (new Date).getTime());
            b.j.fetchEnded();
            null != c._cookies_ && Ue(a.v, c);
            c._persistent_for_stream_ && (a.A.o[b] = null)
        },
        Eg =
        function(a, b) {
            if (!a.j)
                for (var c = a.A.m, d = c.length - 1; 0 <= d; --d)
                    if (c[d].getAdUnitPath() == b) {
                        var e = c[d];
                        if (!e.m) return e
                    }
            d = [];
            if (e = a.A.F[b])
                for (c = 0; c < e.length; ++c) e[c] && d.push(c);
            if (c = d.length ? d : null)
                for (d = 0; d < c.length; ++d)
                    if ((e = a.A.j[b + "_" + c[d]]) && !e.m) return e;
            return null
        },
        Gg = function() {
            p.googletag._getcook_ = 1
        };
    var Hg = function(a, b, c, d, e) {
        S.call(this, a, b, c, d, e)
    };
    z(Hg, S);
    Hg.prototype.C = function() {
        S.prototype.C.call(this);
        U(this, "m_ast", "js");
        U(this, "markup", "html");
        U(this, "js", "afmc")
    };
    var Ig = function(a, b, c, d) {
        tg.call(this, a, b, c, d);
        this.X = this.G = this.C = this.w = !1;
        this.I = this.J = "";
        this.videoStreamCorrelator = NaN;
        this.H = 0
    };
    z(Ig, tg);
    Ig.prototype.F = function() {
        return "unknown"
    };
    Ig.prototype.u = function(a) {
        Ig.la.u.call(this, a);
        a.B = this.X;
        a.C = this.I;
        a.D = this.J;
        a.o = this.H
    };
    var Jg = function(a) {
        var b = Ie(a.A);
        if (0 < b.length) {
            for (var c = {}, d = [], e = 0; e < b.length; ++e) c[b[e][0]] = !0;
            E(c, function(a, b) {
                d.push(b)
            });
            b = new kg("gpt_missing_cb", P["#10#"]);
            R(b, "pending", d.join());
            R(b, "correlator", a.m.toString());
            R(b, "impl", a.F());
            lg(b, a.A);
            mg(b)
        }
    };
    Ig.prototype.oa = function() {
        Jg(this);
        if (this.j && !this.C) {
            var a = Je(this.A),
                b = this.A.m.length;
            a != b && (a = new kg("gpt_sra_mismatch", P["#11#"]), R(a, "correlator", this.m.toString()), R(a, "fslots", b.toString()), lg(a, this.A), mg(a))
        }
    };
    Ig.prototype.qa = function() {
        var a = new kg("gpt_req_disp_mismatch", P["#23#"]);
        R(a, "fslots", this.A.m.length.toString());
        R(a, "impl", this.D(this.j));
        R(a, "sra", this.j ? "1" : "0");
        R(a, "correlator", this.m.toString());
        lg(a, this.A);
        mg(a)
    };
    var wg = function(a, b, c) {
            switch (Q(a.l, "target_platform")) {
                case "MOBILE":
                    return new Hg(b, a.A, a.l, a.v, c);
                default:
                    return new sg(b, a.A, a.l, a.v, c)
            }
        },
        Kg = function(a, b, c) {
            a.H && b && (a = a.A.j[c], c = "", a && (c = a.getContentUrl()), ne().registerAdBlock(c, 3, "json_html", b))
        };
    var V = function(a, b, c, d) {
        Ig.call(this, a, b, c, d);
        this.o = [];
        this.B = {};
        this.K = 0;
        this.da = {};
        this.fa = this.V = NaN;
        this.R = !1;
        this.O = NaN;
        this.ca = !1
    };
    z(V, Ig);
    V.prototype.F = function() {
        return this.j ? "gut_friendly_iframe_sra" : "gut_friendly_iframe"
    };
    V.prototype.D = function(a) {
        return a ? "fifs" : "fif"
    };
    V.prototype.u = function(a) {
        V.la.u.call(this, a);
        a.persistentRoadblocksOnly = this.ca;
        a.videoPodNumber = this.V;
        a.videoPodPosition = this.fa;
        a.videoStreamCorrelator = this.videoStreamCorrelator
    };
    var Og = function(a, b, c) {
            for (var d = b.j, e = 0; e < d.length; e++) Ge(a.A, d[e]);
            b = a.L(b);
            Boolean(p.JSON && p.JSON.parse) && (!D || jb(10)) && (!bb || jb(12)) && 2048 < b.length ? (Lg(a, b, d), c = d[c], a.v && 1 != p.googletag._getcook_ && (b = a.v, 1 == b.j || !b.l && !b.o ? b = null : (e = ue(Boolean(a.A.C)) + "/gampad/cookie.js?", e += "domain=" + G(document.domain), e = e + "&callback=window.parent.googletag.impl.pubads.setCookieInfo" + ("&iu=" + c.G), b.l && (e += "&cookie=" + G(b.l)), b.o && (e += "&cookie_enabled=1"), b = e), b && (b = '<script src = "' + se(b) + '">\x3c/script>', Mg(c,
                b)))) : Ng(a, b, d, c);
            Gg();
            a.j || (a.da[J(d[0])] = setTimeout(x(a.ma, a), P["#13#"]))
        },
        Pg = function(a, b, c) {
            var d = "";
            c && (d += '<script type="text/javascript">function callbackProxy(adContents) { ', d += "window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync(adContents, " + a + ");}", d += "\x3c/script>");
            return d += '<script src = "' + b + '">\x3c/script>'
        },
        Ng = function(a, b, c, d) {
            b = xg(b, !1);
            var e = se(b);
            a.j ? Ag(a, c, "callbackProxy") : ld(c[0], e);
            Qg(a, c, d);
            b = ++a.K;
            a.B[b] = c;
            a = Pg(b, e, a.j || !(c[0] in a.A.o));
            googletag._tmanager_.tickRepeated("start_ad_fetch_period",
                b, c[0].l);
            if ($e(ef, "experiment") && null == document.getElementById(K(c[d])) && (d = Ka(c, function(a) {
                    return null != document.getElementById(K(a))
                }), -1 == d)) return;
            Mg(c[d], a)
        },
        Lg = function(a, b, c) {
            b = xg(b, !0);
            var d = se(b);
            a.j ? Ag(a, c, "callbackProxy", !0) : ld(c[0], d);
            var e = ++a.K;
            a.B[e] = c;
            d = x(function(a) {
                !this.j && c[0] in this.A.o || Rg(this, a, e)
            }, a);
            zg(a, b, d, Le(a.A, c).join(","));
            googletag._tmanager_.tickRepeated("start_ad_fetch_period", e, c[0].l)
        },
        Mg = function(a, b) {
            var c = document,
                d = L(a) + "__hidden__",
                e = c.getElementById(d);
            if (!e) {
                e = K(a);
                e = c.getElementById(e);
                if (null == e) return;
                e = cg(e, d, !0, [0, 0], c)
            }
            ig(e, b, !1)
        },
        Sg = function(a) {
            return L(a) + "__container__"
        },
        Vg = function(a, b) {
            var c = document;
            if (!(b in a.A.o)) {
                var d = K(b),
                    e = c.getElementById(d);
                if (e) {
                    for (var d = Sg(b), f = L(b) + "__hidden__", e = e.childNodes, g = !1, h = 0; h < e.length; ++h)
                        if (1 == e[h].nodeType) {
                            var k = e[h];
                            if (k.id != d && k.id != f) {
                                g = !0;
                                break
                            }
                        }(g = g || Tg(c, b)) && Ug(b)
                }
            }
        },
        Tg = function(a, b) {
            var c = a.getElementById(Sg(b));
            return Boolean(c) && Ja(Ab(c), function(a) {
                return a.id != L(b)
            })
        };
    V.prototype.$ = function(a, b) {
        var c = Ra(a, function(a) {
            return 0 != a.getSizes().length
        });
        c[!1] && Ga(c[!1], function(a) {
            Bg(this, a, !0)
        }, this);
        if (a = c[!0]) {
            r(b.videoStreamCorrelator) ? this.videoStreamCorrelator = b.videoStreamCorrelator : (c = !0, r(b.changeCorrelator) && (c = b.changeCorrelator), c && ug(this));
            this.V = b.videoPodNumber || NaN;
            this.fa = b.videoPodPosition || NaN;
            this.ca = b.persistentRoadblocksOnly || !1;
            this.R = b.clearUnfilledSlots || !1;
            He(this.A, a);
            this.O = a.length;
            for (c = 0; c < a.length; ++c) Vg(this, a[c]);
            if (!this.w) {
                var d =
                    x(function(a) {
                        return vg(this, a, b.isVideoRefresh ? 3 : 2, "callbackProxy")
                    }, this);
                if (this.j) Wg(this, d(a), 0);
                else
                    for (c = 0; c < a.length; ++c) Wg(this, d([a[c]]), 0)
            }
        }
    };
    V.prototype.M = function(a) {
        for (var b = 0; b < a.length; ++b) Ug(a[b]), Xg(this, a[b]);
        return !0
    };
    var Ug = function(a) {
            var b = !!a.o;
            Yg(a);
            var c = K(a);
            if (b) {
                var d = document.getElementById(c);
                if (d) {
                    var e = Sg(a) + "__to_be_removed__";
                    a = Na(d.childNodes);
                    Ga(a, function(a) {
                        1 == a.nodeType && a.id == e || d.removeChild(a)
                    })
                }
            } else ag(c)
        },
        Zg = function(a, b) {
            var c = document,
                d = b.getSizes();
            if (0 != d.length) {
                var e = d[0];
                1 < d.length && (e = jg(K(b), c) || e);
                var d = L(b),
                    f = c.getElementById(d);
                if (!f) {
                    f = K(b);
                    f = c.getElementById(f);
                    if (null == f) return;
                    var g = c.createElement("div");
                    g.id = Sg(b);
                    g.name = g.id;
                    g.style.border = "0pt none";
                    a.A.v && (g.style.margin =
                        "auto", g.style.textAlign = "center");
                    f.appendChild(g);
                    f = cg(g, d, !1, e, c);
                    Fb(f, "load", function() {
                        b.w && googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
                    })
                }
                a.A.B[J(b)] = f
            }
        },
        Rg = function(a, b, c) {
            var d = a.B[c];
            b = Fg(a, b, d);
            googletag._tmanager_.tickRepeated("ad_fetch_period", c, b[0].l);
            delete a.B[c];
            Ga(b, a.Y, a);
            a.j || c != a.K || (clearTimeout(a.da[J(d[0])]), $g(a))
        };
    V.prototype.ma = function() {
        var a = new kg("gpt_request_timeout", P["#23#"]);
        lg(a, this.A);
        mg(a);
        $g(this)
    };
    var $g = function(a) {
            0 < a.o.length && (a.o.shift(), 0 < a.o.length && Og(a, a.o[0], 0))
        },
        ah = function(a, b) {
            Ge(a.A, b);
            Zg(a, b);
            null != b.m && a.Y(b)
        },
        Wg = function(a, b, c) {
            for (var d = 0; d < b.j.length; d++) Zg(a, b.j[d]);
            a.j ? Og(a, b, c) : (a.o.push(b), 1 == a.o.length && Og(a, b, c))
        };
    V.prototype.W = function(a) {
        if (!this.j) {
            var b = document.getElementById(K(a));
            b && (this.A.G[J(a)] = b)
        }
    };
    V.prototype.ba = function() {};
    V.prototype.P = function() {};
    V.prototype.N = function(a) {
        Xg(this, a);
        var b = null,
            c = -1;
        if (this.j) {
            ah(this, a);
            b = Fe(this.A);
            if (0 == b.length) return;
            c = Ra(b, function(a) {
                return 0 != a.getSizes().length
            });
            c[!1] && Ga(c[!1], function(a) {
                Bg(this, a, !0)
            }, this);
            b = c[!0];
            if (!b) return;
            c = !a.v && 0 <= Fa(b, a) ? Ka(b, function(b) {
                return J(a) == J(b)
            }) : 0
        } else {
            if (0 == a.getSizes().length) {
                Bg(this, a, !0);
                return
            }
            b = [a];
            c = 0
        }
        this.w || this.C || (b = vg(this, b, 1, "callbackProxy"), Wg(this, b, c))
    };
    var Xg = function(a, b) {
        var c = b.getDivStartsCollapsed();
        null == c && (c = "true" === Q(a.l, "google_divs_start_collapsed"));
        c && bg(K(b), !1)
    };
    V.prototype.Y = function(a) {
        try {
            bh(this, a)
        } catch (b) {}
    };
    var bh = function(a, b) {
            var c = document,
                d = b.m;
            googletag._tmanager_.tickRepeated("start_ad_render_period", rd(b), b.l);
            md(b);
            if (null == d || d._empty_) Bg(a, b, a.R), M(b, qd(b));
            else if (a.G) M(b, qd(b));
            else {
                var e = d._html_;
                if (!u(e)) {
                    Yg(b);
                    return
                }
                bg(K(b), !0);
                ch(a, b);
                var f = [d._width_, d._height_];
                d._use_safe_frame_ ? dh(a, c, b, f, e, function() {
                    googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
                }) : eh(a, c, b, f, e);
                M(b, pd(b, d))
            }
            dg(c, L(b) + "__hidden__")
        },
        Yg = function(a) {
            var b = document.getElementById(Sg(a)),
                c = a.o;
            if (b) {
                var d =
                    document.getElementById(L(a)),
                    e = ne();
                e.unloadAdBlock && e.unloadAdBlock(d, !!a.o);
                a.o ? (b.style.display = "none", b.id += "__to_be_removed__", d.id = d.id + "__to_be_removed__", window.setTimeout(function() {
                    c && gd(c);
                    b.parentNode && b.parentNode.removeChild(b)
                }, P["#24#"])) : b.parentNode.removeChild(b)
            } else c && gd(c);
            a.o = null
        },
        ch = function(a, b) {
            if (b.o) Yg(b), Zg(a, b);
            else {
                var c = document.getElementById(L(b)),
                    d = ne();
                d.unloadAdBlock && d.unloadAdBlock(c, !!b.o)
            }
        },
        eh = function(a, b, c, d, e) {
            b = b.getElementById(L(c));
            null != b && (b.width =
                String(d[0]), b.height = String(d[1]), ig(b, e, !0), Kg(a, b, J(c)))
        },
        dh = function(a, b, c, d, e, f) {
            var g = b.getElementById(Sg(c));
            if (null != g) {
                for (var h; h = g.firstChild;) g.removeChild(h);
                a.A.v || (g.style.display = "inline-block");
                d = fg(g, L(c), e, d, f);
                c.o = d;
                Kg(a, b.getElementById(L(c)), J(c))
            }
        };
    V.prototype.Z = function() {
        return isNaN(this.O) || this.j ? 0 == Fe(this.A).length : Fe(this.A).length == Je(this.A) - this.O
    };
    var Qg = function(a, b, c) {
            null == document.getElementById(K(b[c])) && fh(a);
            a.j && (Ja(b, function(a) {
                return null != document.getElementById(K(a))
            }) || gh(a))
        },
        fh = function(a) {
            var b = new kg("gpt_target_slot_has_no_div", P["#29#"]);
            R(b, "sra", a.j ? "1" : "0");
            lg(b, a.A);
            mg(b)
        },
        gh = function(a) {
            var b = new kg("gpt_request_slots_have_no_divs", P["#29#"]);
            lg(b, a.A);
            mg(b)
        };
    var hh = function(a, b, c, d) {
        Ig.call(this, a, b, c, d);
        this.B = -1;
        this.o = null
    };
    z(hh, Ig);
    hh.prototype.F = function() {
        return this.j ? "gut_sync_sra" : "gut_sync"
    };
    hh.prototype.D = function(a) {
        return a ? "ss" : "s"
    };
    var ih = function(a, b) {
            if (!a.w) {
                a.o = b.j;
                var c = a.L(b),
                    c = se(xg(c, !1)),
                    d = ++a.B;
                googletag._tmanager_.tickRepeated("start_ad_fetch_period", d, b.j[0].l);
                a.j ? Ag(a, b.j, "googletag.impl.pubads.setAdContentsBySlotForSync") : ld(b.j[0], c);
                Gg();
                document.write('<script type="text/javascript" src="' + c + '">\x3c/script>')
            }
        },
        kh = function(a, b) {
            var c = Fg(a, b, $e(gf, "experiment") ? a.o : void 0);
            a.o = null;
            googletag._tmanager_.tickRepeated("ad_fetch_period", a.B, c[0].l);
            if (a.j) c = a.A.m, 1 == c.length && jh(a, c[0]);
            else
                for (var d = 0; d < c.length; ++d) jh(a,
                    c[d])
        };
    hh.prototype.W = function(a) {
        if (!this.j) {
            var b;
            b = null;
            var c = Ib.getElementsByTagName("script");
            c && c.length && (b = c[c.length - 1]);
            (b = b && b.parentElement) && (this.A.G[J(a)] = b)
        }
    };
    hh.prototype.ba = function(a) {
        var b = "google_temp_div_" + J(a),
            c = '<div id="' + ua(b) + '"></div>';
        document.write(c);
        (b = sb(b)) && (this.A.B[J(a)] = b)
    };
    hh.prototype.P = function(a) {
        var b = this.A;
        a = J(a);
        var c = b.B[a];
        c && (c && c.parentNode && c.parentNode.removeChild(c), delete b.B[a])
    };
    hh.prototype.N = function(a) {
        Ge(this.A, a);
        var b = this.A.m.length;
        this.j ? 1 == b ? (b = Ha(Ee(this.A), function(a) {
            return 0 != a.getSizes().length
        }), 0 <= Fa(b, a) || Bg(this, a, !1), b.length && ih(this, vg(this, b, 1, "googletag.impl.pubads.setAdContentsBySlotForSync"))) : jh(this, a) : 0 == a.getSizes().length ? Bg(this, a, !1) : ih(this, vg(this, [a], 1, a.l ? "googletag.impl.pubads.setPassbackAdContents" : "googletag.impl.pubads.setAdContentsBySlotForSync"))
    };
    var jh = function(a, b) {
            var c = document,
                d = b.m;
            md(b);
            googletag._tmanager_.tickRepeated("start_ad_render_period", rd(b), b.l);
            if (null == d || d._empty_) Bg(a, b, !1), M(b, qd(b));
            else if (a.G) M(b, qd(b));
            else if (d._use_safe_frame_) {
                var e = function() {
                        googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
                    },
                    f = d._html_;
                if (f) {
                    var g = [d._width_, d._height_];
                    lh(a, c, b, g, f, e);
                    M(b, pd(b, d))
                } else M(b, qd(b))
            } else if (d._snippet_ && !d._is_afc_) mh(a, b, c);
            else if (we()) {
                c = "googletag.impl.pubads.syncAdSlotLoaded(this, '" + J(b) + "'," +
                    b.l + ");";
                e = "about:blank";
                if (g = Q(a.l, "google_domain_reset_url"))
                    if (f = Md(g), null === f || 0 <= f.indexOf(document.domain)) e = g;
                g = [d._width_, d._height_];
                nh(a, b, e, c, g, a.A.v)
            } else d = oh(a, b, c), c.write("<script>googletag.impl.pubads.createDomIframe(" + Ba(d) + " ," + Ba(J(b)) + "," + a.A.v + "," + b.l + ");\x3c/script>")
        },
        lh = function(a, b, c, d, e, f) {
            ph(c, b);
            var g = L(c) + "__container__",
                h = '<div id="' + ua(g) + '"></div>';
            b.write(h);
            g = b.getElementById(g);
            null != g && (a.A.v ? g.style.margin = "auto" : g.style.display = "inline-block", d = fg(g, L(c), e,
                d, f), c.o = d, Kg(a, b.getElementById(L(c)), J(c)))
        },
        qh = function(a, b) {
            var c = b.m,
                d = a.parentNode,
                e = c && c._html_;
            e ? (!c._expandable_ || c._is_afc_ && c._is_3pas_ ? (Fb(a, "load", function() {
                b.w && googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
            }), ig(a, e, !0)) : d.innerHTML = e, M(b, pd(b, c))) : (d.removeChild(a), M(b, qd(b)))
        },
        rh = function(a, b, c, d) {
            b = K(b) + "_ad_container";
            var e = '<div id="' + ua(b) + '"';
            a.A.v && d ? (e += ' style="width:' + d._width_, e += 'px;margin:auto;">') : e += ">";
            d && (e += d._html_);
            c.write(e + "\n</div>\n");
            return b
        },
        ph = function(a, b) {
            var c = b.getElementById(K(a));
            c && c.parentNode && "" === c.innerHTML && c.parentNode.removeChild(c)
        },
        mh = function(a, b, c) {
            ph(b, c);
            var d = b.m;
            if (null != d) {
                var e = rh(a, b, c, d);
                M(b, pd(b, d));
                (c = c.getElementById(e)) && Kg(a, c, J(b))
            }
        },
        nh = function(a, b, c, d, e, f) {
            ph(b, document);
            var g = L(b),
                h = [],
                k = e[0];
            e = e[1];
            c = se(c);
            h.push('<iframe id="', ua(g), '" name="', ua(g), '" width="', k, '" height="', e, '" vspace="0" hspace="0" allowtransparency="true" ', "scrolling=", a.K ? '"auto"' : '"no"', ' marginwidth="0" marginheight="0" frameborder="0" style=',
                '"border:0px;left:0;position:absolute;top:0;"', ' src="', c, '"');
            null != d && h.push(' onload="', d, '"');
            h.push("></iframe>");
            d = [];
            c = K(b) + "_ad_container";
            d.push('<div id="', ua(c), '"');
            f && d.push(' style="text-align:center" ');
            d.push(">");
            d.push('<ins style="position:relative;width:' + k + "px;height:" + e + 'px;border:none;display:inline-table;vertical-align:bottom;">' + ('<ins style="position:relative;width:' + k + "px;height:" + e + 'px;border:none;display:block;">' + h.join("") + "</ins>") + "</ins>");
            d.push("</div>");
            document.write(d.join(""));
            (f = document.getElementById(g)) && Kg(a, f, J(b))
        },
        oh = function(a, b, c) {
            ph(b, c || document);
            return rh(a, b, c || document)
        },
        sh = function(a, b, c, d, e, f, g) {
            a = a.createElement(b);
            a.style.width = d + "px";
            e && (a.style.height = e + "px");
            a.style.display = f;
            a.style.position = "relative";
            g && (a.style.margin = g);
            a.style.border = 0;
            c && a.appendChild(c);
            return a
        },
        th = function(a, b, c, d, e, f) {
            e = sh(a, "ins", e, c, d, "block");
            d = sh(a, "ins", e, c, d, "inline-table");
            d.style.verticalAlign = "bottom";
            b = a.getElementById(b);
            f ? (a = sh(a, "div", d, c, null, "block", "auto"),
                b.appendChild(a)) : b.appendChild(d)
        },
        uh = function(a, b, c) {
            var d = document,
                e = b.m,
                f = e._width_,
                g = e._height_,
                h = e._html_,
                k = d.createElement("iframe"),
                n = L(b);
            k.id = n;
            k.name = n;
            k.width = f;
            k.height = g;
            k.vspace = 0;
            k.hspace = 0;
            k.allowTransparency = "true";
            k.scrolling = "no";
            k.marginWidth = 0;
            k.marginHeight = 0;
            k.frameBorder = 0;
            k.style.border = 0;
            k.style.position = "absolute";
            k.style.top = 0;
            k.style.left = 0;
            Fb(k, "load", function() {
                b.w && googletag._tmanager_.tickRepeated("ad_render_period", b.u, b.l)
            });
            th(d, a, f, g, k, c);
            k.contentWindow.document.write(h);
            k.contentWindow.document.write("<script>document.close();\x3c/script>");
            M(b, pd(b, e))
        };
    var vh = function() {
            this.m = this.j = this.l = null
        },
        X = function(a) {
            null == a.l && (a.l = new Ce(sd));
            return a.l
        },
        Y = function(a) {
            if (null != a.j) return a.j;
            switch (Q(wh(a), "google_ad_impl")) {
                case "gut_sync_sra":
                    googletag._tmanager_.setSraMode(!0);
                    a.j = new hh(!0, X(a), wh(a), We(void 0));
                    googletag._tmanager_.addFeature("sync");
                    break;
                case "gut_friendly_iframe":
                    googletag._tmanager_.setSraMode(!1);
                    a.j = new V(!1, X(a), wh(a), We(void 0));
                    googletag._tmanager_.addFeature("fif");
                    break;
                case "gut_friendly_iframe_sra":
                    googletag._tmanager_.setSraMode(!0);
                    a.j = new V(!0, X(a), wh(a), We(void 0));
                    googletag._tmanager_.addFeature("fif");
                    break;
                default:
                    googletag._tmanager_.setSraMode(!1), a.j = new hh(!1, X(a), wh(a), We(void 0)), googletag._tmanager_.addFeature("sync")
            }
            var b = a.j;
            b.w = null != Q(b.l, "google_nofetch") || Boolean(window.google_noFetch) || b.w;
            b.C = null != Q(b.l, "google_disable_initial_load") || Boolean(window.google_DisableInitialLoad) || b.C;
            b.G = null != Q(b.l, "google_norender") || b.G;
            var c = x(b.oa, b),
                d = window;
            d.attachEvent ? d.attachEvent("onload", c) : d.addEventListener &&
                d.addEventListener("load", c, !1);
            c = x(b.qa, b);
            d = window;
            d.attachEvent ? d.attachEvent("onunload", c) : d.addEventListener && d.addEventListener("unload", c, !1);
            b.H = ne().setupOse(b.m);
            return a.j
        },
        wh = function(a) {
            null == a.m && (a.m = new Be);
            return a.m
        },
        xh = null,
        Z = function() {
            xh || (xh = new vh);
            return xh
        },
        yh = null,
        zh = function() {
            yh || (yh = new vh);
            return yh
        };
    var Ah = P["#38#"],
        Bh = function(a, b) {
            var c = {
                methodId: a
            };
            b.name && (c.name = b.name);
            b.message && (c.message = b.message.substring(0, 512));
            b.fileName && (c.fileName = b.fileName);
            b.lineNumber && (c.lineNumber = b.lineNumber);
            b.stack && (c.stack = Jb(b.stack, ""));
            return c
        },
        Dh = function(a, b) {
            Ch(a, b, void 0);
            throw b;
        },
        Ch = function(a, b, c) {
            if (!b.Ba) try {
                b.Ba = !0;
                var d = Ah;
                r(c) && 0 <= c && 1 >= c && (d = c);
                var e = Bh(a, b),
                    f = new kg("gpt_exception", d);
                try {
                    lg(f, X(Z()))
                } catch (g) {}
                E(e, function(a, b) {
                    R(f, b, a)
                });
                mg(f)
            } catch (h) {}
        };
    var Eh = function() {};
    l = Eh.prototype;
    l.addSlot = function(a) {
        if (!a) return null;
        var b = a.getAdUnitPath();
        return b && b.length ? De(X(Z()), a) : null
    };
    l.fillSlot = function(a) {
        var b = Z(),
            c = Y(b);
        (a = Ke(X(b), a)) && (null == a.m || c.j) && (c.W(a), c.ba(a), c.N(a), c.P(a))
    };
    l.setCookieOptions = function(a) {
        Z();
        var b = We(a);
        b.j = a;
        Se(b)
    };
    l.setTagForChildDirectedTreatment = function(a) {
        X(Z()).H = a
    };
    l.setKidsFriendlyAds = function(a) {
        X(Z()).I = a
    };
    l.passback = function(a) {
        if (a) {
            var b = a.getAdUnitPath();
            b && b.length && (b = zh(), a = De(X(b), a, !0), Y(b).N(a))
        }
    };
    l.disableInitialLoad = function() {
        window.google_DisableInitialLoad = !0
    };
    l.addAttribute = function(a, b) {
        var c = X(Z()),
            d = b;
        if (!la(Ca(a))) {
            la(Ca(d)) && (d = "");
            var e = c.w[a];
            c.w[a] = e ? e + "," + d : d
        }
    };
    l.clearAttribute = function(a) {
        var b = X(Z());
        la(Ca(a)) || b.w[a] && delete b.w[a]
    };
    l.addPageCategoryExclusion = function(a) {
        var b = X(Z());
        la(Ca(a)) || (b = b.D, 0 <= Fa(b, a) || b.push(a))
    };
    l.clearPageCategoryExclusions = function() {
        X(Z()).D = []
    };
    l.addAdSensePageAttribute = function(a, b) {
        var c = X(Z());
        Rd(c.l, a, b)
    };
    l.addAdSenseSlotAttribute = function(a, b, c) {
        var d = X(Z());
        a && (a = Ke(d, a)) && (a = J(a), null == d.u[a] && (d.u[a] = new Qd(d.K)), Rd(d.u[a], b, c))
    };
    l.enableSingleRequest = function() {
        var a = wh(Z());
        null == Q(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_sync_sra")
    };
    l.collapseEmptyDivs = function(a) {
        var b = wh(Z());
        b.j.google_collapse_empty_div = "true";
        a && (b.j.google_divs_start_collapsed = "true")
    };
    l.enableAsyncRendering = function() {
        var a = wh(Z());
        null == Q(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe")
    };
    l.enableAsyncSingleRequest = function() {
        var a = wh(Z());
        null == Q(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe_sra")
    };
    l.setVideoContentInformation = function(a, b) {
        var c = Y(Z());
        c.X = !0;
        c.J = a;
        c.I = b;
        c.videoStreamCorrelator = Math.floor(4503599627370496 * Math.random())
    };
    l.getVideoContentInformation = function() {
        var a = Y(Z());
        return {
            cmsid: a.I,
            vid: a.J
        }
    };
    l.getVideoStreamCorrelator = function() {
        return Y(Z()).videoStreamCorrelator
    };
    l.refresh = function(a, b) {
        var c = Z(),
            d = Y(c),
            c = X(c),
            e = null,
            e = null != a ? Fh(a) : Ee(c);
        0 == e.length || d.$(e, b)
    };
    l.getCorrelator = function() {
        return Y(Z()).m + ""
    };
    l.setCorrelator = function(a) {
        ug(Y(Z()), a)
    };
    l.setMobilePlatform = function() {
        wh(Z()).j.target_platform = "MOBILE"
    };
    l.setApiExperiment = function(a) {
        af(a)
    };
    l.isAdRequestFinished = function() {
        return Y(Z()).Z()
    };
    l.isSlotAPersistentRoadblock = function(a) {
        if (!a) return !1;
        var b = X(Z());
        return !!(new id(a, !1) in b.o)
    };
    l.clearNoRefreshState = function() {
        X(Z()).o = {}
    };
    l.clearSlotContents = function(a) {
        var b = Z(),
            c = Y(b),
            b = X(b),
            d = null,
            d = a ? Fh(a) : Ee(b);
        return c.M(d)
    };
    l.setLocation = function(a) {
        X(Z()).C = a
    };
    l.setPublisherProvidedId = function(a) {
        X(Z()).J = a
    };
    l.getVersion = function() {
        return "68g"
    };
    l.setCenterAds = function(a) {
        X(Z()).v = a
    };
    var Fh = function(a) {
            for (var b = [], c = X(Z()), d = 0; d < a.length; ++d) {
                var e = Ke(c, a[d]);
                e && b.push(e)
            }
            return b
        },
        Gh = function(a, b) {
            var c;
            c = p.googletag || (p.googletag = {});
            c = c.impl || (c.impl = {});
            c = c.pubads || (c.pubads = {});
            c[a] || (c[a] = b)
        };
    Gh("createDomIframe", function(a, b, c, d) {
        try {
            var e;
            e = d ? zh() : Z();
            var f = Y(e),
                g;
            if (g = X(e).j[b]) {
                uh(a, g, c);
                var h = document.getElementById(L(g));
                h && Kg(f, h, b)
            }
        } catch (k) {
            Dh(2401, k)
        }
    });
    Gh("setAdContentsBySlotForSync", function(a) {
        try {
            kh(Y(Z()), a)
        } catch (b) {
            Dh(2403, b)
        }
    });
    Gh("setPassbackAdContents", function(a) {
        try {
            kh(Y(zh()), a)
        } catch (b) {
            Dh(2404, b)
        }
    });
    Gh("setAdContentsBySlotForAsync", function(a, b) {
        try {
            Rg(Y(Z()), a, b)
        } catch (c) {
            Dh(2405, c)
        }
    });
    Gh("syncAdSlotLoaded", function(a, b, c) {
        try {
            var d = Y(c ? zh() : Z());
            if (b) {
                var e = d.A.j[b];
                e && !e.C && (e.C = !0, qh(a, e))
            }
        } catch (f) {
            Dh(2407, f)
        }
    });
    Gh("setCookieInfo", function(a) {
        try {
            var b;
            Z();
            b = We(void 0);
            Ue(b, a)
        } catch (c) {
            Dh(2408, c)
        }
    });
    try {
        googletag._tmanager_.tick("pubads_load_period");
        window.google_noFetch = !1;
        window.google_DisableInitialLoad = !1;
        try {
            var Hh = p.googletag.pubads;
            if (ea(Hh)) Hh().onGoogleAdsJsLoad(new Eh)
        } catch (Ih) {
            Ch(3002, Ih)
        }
    } catch (Jh) {
        Dh(3001, Jh)
    };
}).call(this);