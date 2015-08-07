﻿(function() {
    var k, p = this,
        q = function(a) {
            return void 0 !== a
        },
        ba = function() {},
        ca = function(a) {
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
        r = function(a) {
            return "array" == ca(a)
        },
        da = function(a) {
            var b = ca(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        u = function(a) {
            return "string" == typeof a
        },
        ea = function(a) {
            return "boolean" == typeof a
        },
        w = function(a) {
            return "number" == typeof a
        },
        fa = function(a) {
            return "function" == ca(a)
        },
        x = function(a) {
            var b = typeof a;
            return "object" ==
                b && null != a || "function" == b
        },
        ga = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0,
        ia = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ja = function(a, b, c) {
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
        y = function(a, b, c) {
            y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                ia : ja;
            return y.apply(null, arguments)
        },
        ka = function(a, b) {
            var c = a.split("."),
                d = p;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) !c.length && q(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
        },
        z = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ra = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.wb = function(a, c, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[c].apply(a, g)
            }
        };
    var la = function() {
            return p.googletag || (p.googletag = {})
        },
        A = function(a, b) {
            var c = la();
            c.hasOwnProperty(a) || (c[a] = b)
        },
        ma = function(a, b) {
            a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
        };
    var na = function(a, b) {
        this.l = a;
        this.j = b || []
    };
    na.prototype.getMessageId = function() {
        return this.l
    };
    na.prototype.getMessageArgs = function() {
        return this.j
    };
    var oa = function(a, b, c, d, e) {
        this.l = new Date;
        this.v = d || null;
        this.u = c || null;
        this.m = a;
        this.o = b;
        this.j = e || null
    };
    k = oa.prototype;
    k.getSlot = function() {
        return this.v
    };
    k.getService = function() {
        return this.u
    };
    k.getLevel = function() {
        return this.m
    };
    k.getTimestamp = function() {
        return this.l
    };
    k.getMessage = function() {
        return this.o
    };
    k.getReference = function() {
        return this.j
    };
    var pa = ["Debug", "Info", "Warning", "Error", "Fatal"];
    oa.prototype.toString = function() {
        var a = this.l.toTimeString() + ": " + pa[this.m] + ": " + this.o;
        this.j && (a += " Duration: " + (this.l.getTime() - this.j.getTimestamp().getTime()) + "ms.");
        return a
    };
    var qa = function() {
        this.l = []
    };
    qa.prototype.getAllEvents = function() {
        return this.l
    };
    qa.prototype.getEventsByService = function(a) {
        return ra(this, function(b) {
            return b.getService() === a
        })
    };
    qa.prototype.getEventsBySlot = function(a) {
        return ra(this, function(b) {
            return b.getSlot() === a
        })
    };
    qa.prototype.getEventsByLevel = function(a) {
        return ra(this, function(b) {
            return b.getLevel() >= a
        })
    };
    var ra = function(a, b) {
        for (var c = [], d = 0; d < a.l.length; ++d) b(a.l[d]) && c.push(a.l[d]);
        return c
    };
    qa.prototype.log = function(a, b, c, d, e) {
        a = new oa(a, b, c, d, e);
        this.l.push(a);
        return a
    };
    qa.prototype.info = function(a, b, c, d) {
        return this.log(1, a, b, c, d)
    };
    qa.prototype.j = function(a, b, c, d) {
        return this.log(2, a, b, c, d)
    };
    qa.prototype.error = function(a, b, c, d) {
        return this.log(3, a, b, c, d)
    };
    var sa = function() {
        var a = la();
        return a.debug_log || (a.debug_log = new qa)
    };
    A("getEventLog", sa);
    var B = function(a) {
            return function() {
                return new na(a, [])
            }
        },
        C = function(a) {
            return function(b) {
                return new na(a, [b])
            }
        },
        D = function(a) {
            return function(b, c) {
                return new na(a, [b, c])
            }
        },
        ta = function(a) {
            return function(b, c, d) {
                return new na(a, [b, c, d])
            }
        },
        va = function(a) {
            return "[" + ua(a, function(a) {
                return u(a) ? "'" + a + "'" : r(a) ? va(a) : String(a)
            }).join(", ") + "]"
        },
        wa = B(1),
        xa = C(2),
        ya = C(3),
        za = C(4),
        Aa = C(5),
        Ba = C(6),
        Ca = B(8),
        Da = ta(9),
        Ea = ta(10),
        Fa = D(12),
        Ga = C(13),
        Ha = C(14),
        Ia = B(16),
        Ja = ta(17),
        Ka = B(19),
        La = C(20),
        Na = C(21),
        Oa = D(22),
        Pa =
        D(23),
        Qa = C(26),
        Ra = C(27),
        Sa = C(28),
        Ta = C(30),
        Ua = D(31),
        Va = B(34),
        Wa = C(35),
        Xa = ta(36),
        Ya = ta(37),
        Za = B(38),
        $a = C(39),
        ab = D(40),
        bb = B(42),
        cb = D(43),
        db = B(44),
        eb = B(45),
        fb = C(46),
        gb = C(47),
        hb = C(48),
        ib = B(49),
        jb = B(50),
        kb = B(52),
        lb = D(53),
        mb = D(54),
        nb = C(55),
        ob = D(57),
        pb = ta(58),
        qb = C(59),
        rb = C(60),
        sb = D(61),
        tb = D(62),
        ub = C(63),
        vb = D(64),
        wb = C(65),
        xb = B(66),
        yb = B(67),
        zb = B(68),
        Ab = B(69),
        Bb = B(70),
        Cb = B(71),
        Db = B(72),
        Eb = C(75),
        Fb = ta(77),
        Gb = C(78),
        Hb = B(79),
        Ib = C(80),
        Jb = D(82),
        Kb = D(84),
        Lb = C(85),
        Mb = B(87),
        Nb = ta(88),
        Ob = C(90),
        Pb = C(92),
        Qb = C(93),
        Rb = C(94),
        Sb = C(95),
        E = function(a, b) {
            var c = va(Tb(b)),
                c = c.substring(1, c.length - 1);
            return new na(96, [a, c])
        },
        Ub = C(97),
        Vb = C(98);
    var Wb = function(a) {
        Wb[" "](a);
        return a
    };
    Wb[" "] = ba;
    var Xb = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Wb(a.foo);
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
        Yb = function(a, b) {
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
        F = function(a, b, c) {
            for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
        },
        Zb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b,
                c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        $b = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        ac = function(a) {
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
    var cc = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            a.stack && (b = bc(a.stack, b));
            return b
        },
        dc = function(a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            if (c) {
                var e = function(a) {
                    c(a);
                    $b(d, "load", e);
                    $b(d, "error", e)
                };
                Zb(d, "load", e);
                Zb(d, "error", e)
            }
            d.src = b;
            a.google_image_requests.push(d)
        },
        bc = function(a, b) {
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,
                    "$1");
                return a.replace(/\n */g, "\n")
            } catch (d) {
                return b
            }
        };
    var ec = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ec);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    z(ec, Error);
    ec.prototype.name = "CustomError";
    var fc;
    var gc = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        hc = function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        pc = function(a) {
            if (!ic.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(jc, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(kc, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(lc, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(mc, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(nc, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(oc, "&#0;"));
            return a
        },
        jc = /&/g,
        kc = /</g,
        lc = />/g,
        mc = /"/g,
        nc = /'/g,
        oc = /\x00/g,
        ic = /[\x00&<>"']/,
        sc = function(a) {
            return -1 != a.indexOf("&") ? "document" in p ? qc(a) : rc(a) : a
        },
        qc = function(a) {
            var b = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                c;
            c = p.document.createElement("div");
            return a.replace(tc, function(a, e) {
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
        rc = function(a) {
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
        tc = /&([^;\s<&]+);?/g,
        uc = {
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
        vc = {
            "'": "\\'"
        },
        wc = function(a) {
            a = String(a);
            if (a.quote) return a.quote();
            for (var b = ['"'], c = 0; c < a.length; c++) {
                var d = a.charAt(c),
                    e = d.charCodeAt(0),
                    f = c + 1,
                    g;
                if (!(g = uc[d])) {
                    if (!(31 < e && 127 > e))
                        if (d in vc) d = vc[d];
                        else if (d in
                        uc) d = vc[d] = uc[d];
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
                        d = vc[d] = e
                    }
                    g = d
                }
                b[f] = g
            }
            b.push('"');
            return b.join("")
        },
        xc = function(a) {
            return null == a ? "" : String(a)
        },
        yc = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var zc = Array.prototype,
        G = function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ac = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = u(a) ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        ua = function(a, b) {
            for (var c = a.length, d = Array(c), e = u(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Bc = function(a, b) {
            for (var c = a.length, d = u(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        Dc = function(a, b) {
            var c = Cc(a, b, void 0);
            return 0 > c ? null : u(a) ? a.charAt(c) : a[c]
        },
        Cc = function(a, b, c) {
            for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        Ec = function(a, b) {
            var c;
            a: if (u(a)) c = u(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
                else {
                    for (c = 0; c < a.length; c++)
                        if (c in a && a[c] === b) break a;
                    c = -1
                }
            return 0 <= c
        },
        Fc = function(a, b) {
            Ec(a, b) || a.push(b)
        },
        Gc = function(a, b) {
            var c = Cc(a, b, void 0);
            0 <= c && zc.splice.call(a, c, 1)
        },
        Hc = function(a) {
            return zc.concat.apply(zc, arguments)
        },
        Tb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Ic = Tb,
        Jc = function(a, b, c) {
            return 2 >= arguments.length ? zc.slice.call(a, b) : zc.slice.call(a, b, c)
        },
        Kc = function(a) {
            for (var b = {}, c = 0, d = 0; d < a.length;) {
                var e = a[d++],
                    f;
                f = e;
                f = x(f) ? "o" + (f[ga] || (f[ga] = ++ha)) : (typeof f).charAt(0) + f;
                Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
            }
            a.length = c
        },
        Mc = function(a, b) {
            a.sort(b || Lc)
        },
        Oc = function(a) {
            for (var b = Nc, c = 0; c < a.length; c++) a[c] = {
                index: c,
                value: a[c]
            };
            var d = b ||
                Lc;
            Mc(a, function(a, b) {
                return d(a.value, b.value) || a.index - b.index
            });
            for (c = 0; c < a.length; c++) a[c] = a[c].value
        },
        Lc = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        },
        Pc = function(a, b) {
            for (var c = {}, d = 0; d < a.length; d++) {
                var e = a[d],
                    f = b.call(void 0, e, d, a);
                q(f) && (c[f] || (c[f] = [])).push(e)
            }
            return c
        };
    var Qc = function(a) {
            return w(a) && isFinite(a) && 0 == a % 1 && 0 <= a
        },
        Sc = function() {
            return Rc().replace(/[^a-zA-Z0-9]/g, function(a) {
                return "&#" + a.charCodeAt() + ";"
            })
        },
        Tc = function() {
            return H("#6#") ? "https:" : "http:"
        },
        Uc = function(a) {
            var b = a.split("/");
            return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
        },
        Vc = function(a) {
            var b = [],
                b = ua(a, function(a) {
                    return Uc(a.getAdUnitPath())
                });
            Kc(b);
            return b
        },
        H = function(a) {
            return la()._vars_[a]
        };
    var Wc = function() {
        return "68r2"
    };
    A("getVersion", Wc);
    var Yc = function() {
            this.j = Xc + "/pagead/gen_204?id=" + encodeURIComponent("gpt_exception")
        },
        Xc = H("#6#") ? "https://" + H("#33#") : "http://" + H("#33#"),
        Zc = function(a, b, c) {
            b && b.match(/^\w+$/) && c && (a.j += "&" + b + "=" + encodeURIComponent(c))
        },
        $c = function(a, b) {
            if (!q(b) || 0 > b || 1 < b) b = H("#23#");
            Math.random() < b && a.j && dc(window, a.j)
        },
        bd = function(a) {
            var b = ad;
            Zc(a, "vrg", Wc());
            b = Vc(b);
            3 >= b.length || (b = Jc(b, 0, 3), b.push("__extra__"));
            Zc(a, "nw_id", b.join(","))
        };
    var cd = H("#38#"),
        ad = [],
        dd = function(a, b) {
            var c = {
                methodId: a
            };
            b.name && (c.name = b.name);
            b.message && (c.message = b.message.substring(0, 512));
            b.fileName && (c.fileName = b.fileName);
            b.lineNumber && (c.lineNumber = b.lineNumber);
            b.stack && (c.stack = bc(b.stack, ""));
            return c
        },
        I = function(a, b) {
            ed(a, b, void 0);
            throw b;
        },
        ed = function(a, b, c) {
            if (!b.ia) try {
                b.ia = !0;
                var d = cd;
                q(c) && 0 <= c && 1 >= c && (d = c);
                var e = dd(a, b),
                    f = new Yc;
                try {
                    bd(f)
                } catch (g) {}
                F(e, function(a, b) {
                    Zc(f, b, a)
                });
                $c(f, d)
            } catch (h) {}
        };
    var fd = function() {
        this.l = this.j = 0
    };
    fd.prototype.push = function(a) {
        try {
            for (var b = sa(), c = 0; c < arguments.length; ++c) try {
                fa(arguments[c]) && (arguments[c](), this.j++)
            } catch (d) {
                this.l++, b.error(Ta(String(d.message)))
            }
            b.info(Ua(String(this.j), String(this.l)));
            return this.j
        } catch (e) {
            I(1001, e)
        }
    };
    (function() {
        function a(a) {
            this.t = {};
            this.tick = function(a, b, c) {
                this.t[a] = [void 0 != c ? c : (new Date).getTime(), b];
                if (void 0 == c) try {
                    window.console.timeStamp("CSI/" + a)
                } catch (d) {}
            };
            this.tick("start", null, a)
        }
        var b;
        window.performance && (b = window.performance.timing);
        var c = b ? new a(b.responseStart) : new a;
        window.GPT_jstiming = {
            Timer: a,
            load: c
        };
        b && (c = b.navigationStart, b = b.responseStart, 0 < c && b >= c && (window.GPT_jstiming.srt = b - c));
        try {
            b = null, window.chrome && window.chrome.csi && (b = Math.floor(window.chrome.csi().pageT)), null ==
                b && window.gtbExternal && (b = window.gtbExternal.pageT()), null == b && window.external && (b = window.external.pageT), b && (window.GPT_jstiming.pt = b)
        } catch (d) {}
    })();
    if (window.GPT_jstiming) {
        window.GPT_jstiming.la = {};
        window.GPT_jstiming.Na = 1;
        var gd = function(a, b, c) {
            var d = a.t[b],
                e = a.t.start;
            if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
        };
        window.GPT_jstiming.getTick = gd;
        var hd = function(a, b, c) {
                var d = "";
                window.GPT_jstiming.srt && (d += "&srt=" + window.GPT_jstiming.srt);
                window.GPT_jstiming.pt && (d += "&tbsrt=" + window.GPT_jstiming.pt);
                try {
                    window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d +=
                        "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
                } catch (e) {}
                var f = window.chrome;
                if (f && (f = f.loadTimes)) {
                    f().wasFetchedViaSpdy && (d += "&p=s");
                    if (f().wasNpnNegotiated) {
                        var d = d + "&npn=1",
                            g = f().npnNegotiatedProtocol;
                        g && (d += "&npnv=" + (encodeURIComponent || escape)(g))
                    }
                    f().wasAlternateProtocolAvailable && (d += "&apa=1")
                }
                var h = a.t,
                    l = h.start,
                    f = [],
                    g = [],
                    m;
                for (m in h)
                    if ("start" != m && 0 != m.indexOf("_")) {
                        var n = h[m][1];
                        n ? h[n] && g.push(m + "." + gd(a, m, h[n][0])) : l && f.push(m +
                            "." + gd(a, m))
                    }
                if (b)
                    for (var v in b) d += "&" + v + "=" + b[v];
                (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.GPT_jstiming.sn || "gpt") + "&action=", a.name, g.length ? "&it=" + g.join(",") : "", d, "&rt=", f.join(",")].join("")
            },
            id = function(a, b, c) {
                a = hd(a, b, c);
                if (!a) return "";
                b = new Image;
                var d = window.GPT_jstiming.Na++;
                window.GPT_jstiming.la[d] = b;
                b.onload = b.onerror = function() {
                    window.GPT_jstiming && delete window.GPT_jstiming.la[d]
                };
                b.src =
                    a;
                b = null;
                return a
            };
        window.GPT_jstiming.report = function(a, b, c) {
            if ("prerender" == document.webkitVisibilityState) {
                var d = !1,
                    e = function() {
                        if (!d) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            var f;
                            "prerender" == document.webkitVisibilityState ? f = !1 : (id(a, b, c), f = !0);
                            f && (d = !0, document.removeEventListener("webkitvisibilitychange", e, !1))
                        }
                    };
                document.addEventListener("webkitvisibilitychange", e, !1);
                return ""
            }
            return id(a, b, c)
        }
    };
    var jd = function(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        },
        kd = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        ld = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        md = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        nd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        od = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < nd.length; f++) c = nd[f], Object.prototype.hasOwnProperty.call(d,
                    c) && (a[c] = d[c])
            }
        },
        pd = function(a) {
            var b = arguments.length;
            if (1 == b && r(arguments[0])) return pd.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    pd("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    var qd = function(a, b) {
        this.x = q(a) ? a : 0;
        this.y = q(b) ? b : 0
    };
    qd.prototype.clone = function() {
        return new qd(this.x, this.y)
    };
    qd.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    qd.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    qd.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var rd = function(a, b) {
        this.width = a;
        this.height = b
    };
    k = rd.prototype;
    k.clone = function() {
        return new rd(this.width, this.height)
    };
    k.isEmpty = function() {
        return !(this.width * this.height)
    };
    k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var sd;
    a: {
        var td = p.navigator;
        if (td) {
            var ud = td.userAgent;
            if (ud) {
                sd = ud;
                break a
            }
        }
        sd = ""
    }
    var J = function(a) {
        return -1 != sd.indexOf(a)
    };
    var vd = function() {
            return J("Opera") || J("OPR")
        },
        wd = function() {
            return (J("Chrome") || J("CriOS")) && !vd() && !J("Edge")
        };
    var xd = function() {
        return J("iPhone") && !J("iPod") && !J("iPad")
    };
    var yd = vd(),
        K = J("Trident") || J("MSIE"),
        zd = J("Edge"),
        Ad = J("Gecko") && !(-1 != sd.toLowerCase().indexOf("webkit") && !J("Edge")) && !(J("Trident") || J("MSIE")) && !J("Edge"),
        Bd = -1 != sd.toLowerCase().indexOf("webkit") && !J("Edge"),
        Cd = function() {
            var a = sd;
            if (Ad) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (zd) return /Edge\/([\d\.]+)/.exec(a);
            if (K) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Bd) return /WebKit\/(\S+)/.exec(a)
        },
        Dd = function() {
            var a = p.document;
            return a ? a.documentMode : void 0
        },
        Ed = function() {
            if (yd && p.opera) {
                var a =
                    p.opera.version;
                return fa(a) ? a() : a
            }
            var a = "",
                b = Cd();
            b && (a = b ? b[1] : "");
            return K && (b = Dd(), b > parseFloat(a)) ? String(b) : a
        }(),
        Fd = {},
        Gd = function(a) {
            var b;
            if (!(b = Fd[a])) {
                b = 0;
                for (var c = hc(String(Ed)).split("."), d = hc(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        h = d[f] || "",
                        l = RegExp("(\\d*)(\\D*)", "g"),
                        m = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var n = l.exec(g) || ["", "", ""],
                            v = m.exec(h) || ["", "", ""];
                        if (0 == n[0].length && 0 == v[0].length) break;
                        b = yc(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == v[1].length ?
                            0 : parseInt(v[1], 10)) || yc(0 == n[2].length, 0 == v[2].length) || yc(n[2], v[2])
                    } while (0 == b)
                }
                b = Fd[a] = 0 <= b
            }
            return b
        },
        Hd = p.document,
        Id = Hd && K ? Dd() || ("CSS1Compat" == Hd.compatMode ? parseInt(Ed, 10) : 5) : void 0;
    var Jd = !K || 9 <= Id,
        Kd = !Ad && !K || K && 9 <= Id || Ad && Gd("1.9.1");
    K && Gd("9");
    var Ld = K || yd || Bd;
    var Od = function(a) {
            return a ? new Md(Nd(a)) : fc || (fc = new Md)
        },
        Pd = function(a) {
            var b = document;
            return u(a) ? b.getElementById(a) : a
        },
        Rd = function(a, b) {
            jd(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Qd.hasOwnProperty(d) ? a.setAttribute(Qd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Qd = {
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
        Sd = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new rd(a.clientWidth, a.clientHeight)
        },
        Td = function(a) {
            return a.j ? a.j : Bd || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
        },
        Ud = function(a) {
            return a.parentWindow || a.defaultView
        },
        Wd = function(a, b, c) {
            function d(c) {
                c && b.appendChild(u(c) ? a.createTextNode(c) : c)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !da(f) || x(f) &&
                    0 < f.nodeType ? d(f) : G(Vd(f) ? Tb(f) : f, d)
            }
        },
        Xd = function(a) {
            return Kd && void 0 != a.children ? a.children : Ac(a.childNodes, function(a) {
                return 1 == a.nodeType
            })
        },
        Yd = function(a) {
            var b;
            if (Ld && !(K && Gd("9") && !Gd("10") && p.SVGElement && a instanceof p.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return x(b) && 1 == b.nodeType ? b : null
        },
        Nd = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Vd = function(a) {
            if (a && "number" == typeof a.length) {
                if (x(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (fa(a)) return "function" == typeof a.item
            }
            return !1
        },
        Md = function(a) {
            this.j = a || p.document || document
        };
    Md.prototype.l = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[0],
            g = e[1];
        if (!Jd && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', pc(g.name), '"');
            if (g.type) {
                f.push(' type="', pc(g.type), '"');
                var h = {};
                od(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (u(g) ? f.className = g : r(g) ? f.className = g.join(" ") : Rd(f, g));
        2 < e.length && Wd(d, f, e);
        return f
    };
    Md.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    Md.prototype.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Zd = {
            vb: "slotRenderEnded"
        },
        $d = function(a, b, c, d, e, f) {
            this.slot = a;
            this.isEmpty = b;
            this.size = c;
            this.creativeId = d;
            this.lineItemId = e;
            this.serviceName = f
        };
    var ae = function() {
        this.Y = [];
        this.aa = {};
        this.l = !1;
        this.G = {};
        this.log = sa();
        this.log.info(Wa(this.getName()), this)
    };
    k = ae.prototype;
    k.getName = function() {
        return "unknown"
    };
    k.getVersion = function() {
        return "unversioned"
    };
    k.getSlots = function() {
        return this.Y
    };
    k.getSlotIdMap = function() {
        return this.aa
    };
    k.enable = function() {
        if (this.l) this.log.info(Za(), this);
        else {
            this.l = !0;
            try {
                this.ga()
            } catch (a) {
                ed(1402, a), this.log.error($a(String(a)), this)
            }
        }
    };
    k.ka = function(a) {
        this.Y.push(a);
        this.aa[a.getSlotId().getId()] = a;
        this.log.info(ab(this.getName(), a.getAdUnitPath()), this, a)
    };
    k.addEventListener = function(a, b) {
        try {
            if (!fa(b) || !u(a)) {
                var c = E("Service.addEventListener", arguments);
                this.log.j(c, this);
                return this
            }
            if (!ld(Zd, a)) return this.log.j(Qb(a), this), this;
            c = a;
            r(this.G[c]) || (this.G[c] = []);
            this.G[c].push(b);
            return this
        } catch (d) {
            I(1401, d)
        }
    };
    var be = function(a, b) {
        var c = a.G.slotRenderEnded;
        r(c) && G(c, function(a) {
            try {
                a(b)
            } catch (c) {
                a = c && u(c.name) ? c.name : null;
                var f = c && u(c.message) ? c.message : null,
                    g = "";
                a && f ? g = a + ": " + f : a ? g = a : f && (g = f);
                this.log.j(Pb(g), this)
            }
        }, a)
    };
    var ce = {
        Va: "start_first_ad_fetch_period",
        Ua: "start_ad_fetch_period",
        Ta: "ad_fetch_period",
        eb: "start_ad_render_period",
        cb: "ad_render_period",
        Za: "page_load_time",
        $a: "page_load_time_nw",
        Wa: "loader_loaded_instant",
        Xa: "loader_loaded_instant_nw",
        bb: "_start_pubads_load_period",
        ab: "pubads_load_period",
        qb: "_rt_st_ref",
        pb: "rt_st_instant",
        kb: "_rt_fs_ref",
        jb: "rt_fs_instant",
        gb: "_rt_dns_ref",
        fb: "rt_dns_period",
        sb: "_rt_tcp_ref",
        rb: "rt_tcp_period",
        ob: "_rt_ssl_ref",
        nb: "rt_ssl_period",
        mb: "_rt_rtt_ref",
        lb: "rt_rtt_period",
        ub: "_rt_tft_ref",
        tb: "rt_tft_period",
        ib: "_rt_duration_ref",
        hb: "rt_duration_period"
    };
    var de = "v" + Wc(),
        ee = {
            page_load_time: !0,
            loader_loaded_instant: !0,
            page_load_time_nw: !0,
            loader_loaded_instant_nw: !0,
            _start_pubads_load_period: !0,
            pubads_load_period: !0,
            _rt_st_ref: !0,
            rt_st_instant: !0,
            _rt_fs_ref: !0,
            rt_fs_instant: !0,
            _rt_dns_ref: !0,
            rt_dns_period: !0,
            _rt_tcp_ref: !0,
            rt_tcp_period: !0,
            _rt_ssl_ref: !0,
            rt_ssl_period: !0,
            _rt_rtt_ref: !0,
            rt_rtt_period: !0,
            _rt_tft_ref: !0,
            rt_tft_period: !0,
            _rt_duration_ref: !0,
            rt_duration_period: !0
        },
        fe = {
            start_ad_fetch_period: !0,
            start_ad_render_period: !0
        },
        ge = {
            pubads_load_period: "_start_pubads_load_period",
            ad_fetch_period: "start_ad_fetch_period",
            ad_render_period: "start_ad_render_period",
            rt_st_instant: "_rt_st_ref",
            rt_fs_instant: "_rt_fs_ref",
            rt_dns_period: "_rt_dns_ref",
            rt_tcp_period: "_rt_tcp_ref",
            rt_ssl_period: "_rt_ssl_ref",
            rt_rtt_period: "_rt_rtt_ref",
            rt_tft_period: "_rt_tft_ref",
            rt_duration_period: "_rt_duration_ref"
        },
        he = {},
        ie = function() {
            this.A = !1;
            p.GPT_jstiming && p.GPT_jstiming.load && ("http:" == p.location.protocol || "https:" == p.location.protocol) && Math.random() < H("#37#") && (this.A = !0);
            this.o = this.m = this.w =
                null;
            this.I = this.H = this.F = !1;
            this.v = window.GPT_jstiming.getTick(window.GPT_jstiming.load, "start", 0);
            this.l = window.GPT_jstiming.load;
            this.l.name = "global";
            if (!window.performance || !window.performance.timing) {
                var a = H("#49#");
                this.v = a;
                this.l.tick("start", void 0, a)
            }
            this.j = {};
            this.B = 500;
            this.G = [];
            this.C = {};
            this.L = this.J = !1;
            this.M = this.K = 0;
            this.u = !1
        },
        ke = function(a, b, c, d, e, f) {
            if (c) {
                a.l || (a.l = new p.GPT_jstiming.Timer(a.v), a.l.name = "global");
                c = "_" == b[0];
                if (e || c || window.performance && window.performance.timing) a.l.tick(b,
                    e, f), c || (a.H = !0);
                "loader_loaded_instant" == b && (a.u ? a.tick("loader_loaded_instant_nw") : a.K = (new Date).getTime());
                "page_load_time" == b && (a.u ? a.tick("page_load_time_nw") : a.M = (new Date).getTime());
                a.L || je(a, !0)
            } else d ? (a.o || (a.o = new p.GPT_jstiming.Timer(a.v), a.o.name = "ad_events_psbk"), a.o.tick(b, e, f), 0 != b.indexOf("_") && (a.I = !0)) : (a.m || (a.m = new p.GPT_jstiming.Timer(a.v), a.m.name = "ad_events"), a.m.tick(b, e, f), 0 != b.indexOf("_") && (a.F = !0))
        };
    ie.prototype.tick = function(a, b, c) {
        try {
            if (this.A) {
                var d = ee.hasOwnProperty(a),
                    e = ge[a];
                d && (this.j[a] = !0);
                ke(this, a, d, b || !1, e, c)
            }
        } catch (f) {
            I(2601, f)
        }
    };
    var le = function(a) {
            var b = null != a.l && a.H && (a.j.page_load_time || "complete" == document.readyState) && a.j.loader_loaded_instant;
            b && F(ce, function(a) {
                var d = ge[a];
                ee.hasOwnProperty(a) && d && (b = b && this.j[a] == this.j[d])
            }, a);
            return b
        },
        me = function(a) {
            window.setTimeout(y(function() {
                try {
                    je(this, !1) && (this.B = 32E3 < 2 * this.B ? 32E3 : 2 * this.B), me(this)
                } catch (a) {
                    I(2602, a)
                }
            }, a), a.B)
        },
        je = function(a, b) {
            if (!a.A) return !1;
            var c = "https:" == p.location.protocol ? "https://www.google.com/csi" : "http://csi.gstatic.com/csi",
                d = {};
            d.vrg = Wc();
            a.G.length && (d.e = a.G.join());
            var e = !1;
            a.l && le(a) && (p.GPT_jstiming.report(a.l, d, c), a.L = !0, a.H = !1, a.l = null, e = !0);
            b || (a.m && a.F && (p.GPT_jstiming.report(a.m, d, c), a.m = null, a.F = !1, e = !0), a.o && a.I && (p.GPT_jstiming.report(a.o, d, c), a.o = null, a.I = !1, e = !0));
            return e
        };
    ie.prototype.tickRepeated = function(a, b, c) {
        if (this.A && !(1E3 < b)) {
            var d = ge[a],
                e = ee.hasOwnProperty(a),
                f = a,
                g = d;
            d && (g = this.w && he[d] ? g + ".sra" : g + ("." + b));
            f = this.w && he[a] ? f + ".sra" : f + ("." + b);
            g && this.C.hasOwnProperty("_" + g) && (g = "_" + g, ke(this, g, !1, c || !1, void 0, this.C[g] + this.v), delete this.C[g]);
            ke(this, f, e, c || !1, g);
            b = c ? this.o : this.m;
            e || "start_ad_fetch_period" != a || this.J || (ke(this, "start_first_ad_fetch_period", !1, c || !1, void 0, window.GPT_jstiming.getTick(b, f) + this.v), this.J = !0);
            fe.hasOwnProperty(a) && (a = window.GPT_jstiming.getTick(b,
                f), this.C["_" + f] = a)
        }
    };
    ie.prototype.addFeature = function(a) {
        0 < a.length && Fc(this.G, a)
    };
    ie.prototype.setSraMode = function(a) {
        null === this.w && ((this.w = a) ? this.addFeature("sra") : this.addFeature("non-sra"))
    };
    var oe = function() {
            return la()._tmanager_ || ne()
        },
        ne = function() {
            var a = new ie;
            A("_tmanager_", a);
            me(a);
            pe(a);
            ma(window, function() {
                a.tick("page_load_time")
            });
            a.addFeature(de);
            return a
        },
        pe = function(a) {
            F(ce, function(a) {
                ee.hasOwnProperty(a) && (this.j[a] = !1)
            }, a)
        };
    ie.prototype.tickValueAsInterval = function(a, b, c) {
        var d = ge[a];
        d && (this.tick(d, c, 0), this.tick(a, c, b))
    };
    var qe = function(a) {
        a.j.loader_loaded_instant && !a.j.loader_loaded_instant_nw && a.tick("loader_loaded_instant_nw", !1, a.K);
        a.j.page_load_time && !a.j.page_load_time_nw && a.tick("page_load_time_nw", !1, a.M)
    };
    var re = function() {
        this.j = {};
        this.m = !1;
        this.l = sa();
        this.u = this.l.info(Ca());
        ma(window, y(re.prototype.o, this))
    };
    re.prototype.add = function(a) {
        this.j[a.getName()] = a
    };
    var se = function(a, b) {
            var c = null;
            b in a.j && (c = a.j[b]);
            return c
        },
        ue = function() {
            var a = te();
            F(a.j, function(a, c) {
                a.enable();
                oe().addFeature(c)
            })
        };
    re.prototype.o = function() {
        try {
            this.m = !0, this.l.info(wa(), null, null, this.u)
        } catch (a) {
            I(1802, a)
        }
    };
    var te = function() {
        var a = la();
        return a.service_manager_instance || (a.service_manager_instance = new re)
    };
    A("enableServices", function() {
        try {
            ue()
        } catch (a) {
            I(1801, a)
        }
    });
    var ve = function(a) {
            return r(a) && 2 == a.length && Qc(a[0]) && Qc(a[1])
        },
        we = function(a) {
            return r(a) && 1 < a.length && w(a[0]) && w(a[1])
        };
    var xe = function(a, b) {
        this.l = a;
        this.j = b
    };
    xe.prototype.getWidth = function() {
        return this.l
    };
    xe.prototype.getHeight = function() {
        return this.j
    };
    var ye = function(a) {
        var b = [];
        if (r(a))
            if (we(a)) b.push(new xe(a[0], a[1]));
            else
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    we(d) && b.push(new xe(d[0], d[1]))
                }
            return b
    };
    var ze = function(a, b) {
        this.l = a;
        this.j = b
    };
    ze.prototype.clone = function() {
        return new ze(this.l, this.j)
    };
    var Ae = function(a) {
            this.j = a
        },
        Be = function(a, b) {
            var c = Dc(a.j, function(a) {
                a = a.l;
                return a.width <= b.width && a.height <= b.height
            });
            return null == c ? null : c.j
        },
        Ce = function(a) {
            if (!r(a) || 2 != a.length) throw Error("Each mapping entry has to be an array of size 2");
            var b;
            b = a[0];
            if (!ve(b)) throw Error("Size has to be an array of two non-negative integers");
            b = new rd(b[0], b[1]);
            if (r(a[1]) && 0 == a[1].length) a = [];
            else if (a = ye(a[1]), 0 == a.length) throw Error("At least one slot size must be present");
            return new ze(b, a)
        };
    var De = function(a, b, c) {
        this.j = a;
        this.A = w(b) ? b : 0;
        this.l = this.j + "_" + this.A;
        this.m = c || "gpt_unit_" + this.l
    };
    k = De.prototype;
    k.getId = function() {
        return this.l
    };
    k.getAdUnitPath = function() {
        return this.j
    };
    k.getName = function() {
        return this.j
    };
    k.getInstance = function() {
        return this.A
    };
    k.toString = De.prototype.getId;
    k.getDomId = function() {
        return this.m
    };
    var Ee = function(a, b, c, d) {
        this.w = a;
        this.R = ye(c);
        this.G = null;
        this.l = new De(a, b, d);
        this.m = [];
        this.u = {};
        this.A = null;
        this.j = sa();
        this.j.info(xa(this.l.toString()), null, this);
        this.v = this.C = null;
        this.J = this.L = "";
        this.F = !0;
        this.o = {};
        this.B = [];
        this.O = !1;
        this.M = this.K = null;
        this.I = 0;
        this.H = -1;
        this.N = 0;
        this.P = !1
    };
    k = Ee.prototype;
    k.set = function(a, b) {
        try {
            if (!u(a) || !b) return this.j.j(E("Slot.set", arguments), null, this), this;
            var c = this.getAdUnitPath();
            this.u[a] = b;
            this.C || this.v ? this.j.j(Ea(a, String(b), c), null, this) : this.j.info(Da(a, String(b), c), null, this);
            return this
        } catch (d) {
            I(201, d)
        }
    };
    k.get = function(a) {
        try {
            return u(a) ? this.u.hasOwnProperty(a) ? this.u[a] : null : (this.j.j(E("Slot.get", arguments), null, this), null)
        } catch (b) {
            I(202, b)
        }
    };
    k.getAttributeKeys = function() {
        try {
            var a = [];
            F(this.u, function(b, d) {
                a.push(d)
            });
            return a
        } catch (b) {
            I(203, b)
        }
    };
    k.addService = function(a) {
        try {
            var b = te();
            if (!ld(b.j, a)) return this.j.j(Rb(this.l.toString()), null, this), this;
            for (b = 0; b < this.m.length; ++b)
                if (a == this.m[b]) return this.j.j(Fa(a.getName(), this.l.toString()), a, this), this;
            this.m.push(a);
            a.ka(this);
            return this
        } catch (c) {
            I(204, c)
        }
    };
    k.getName = function() {
        return this.w
    };
    k.getAdUnitPath = function() {
        try {
            return this.w
        } catch (a) {
            I(215, a)
        }
    };
    k.getSlotElementId = function() {
        return this.l.getDomId()
    };
    k.getSlotId = function() {
        return this.l
    };
    k.getServices = function() {
        return this.m
    };
    k.getSizes = function(a, b) {
        return w(a) && w(b) && this.G ? Be(this.G, new rd(a, b)) : this.R
    };
    k.defineSizeMapping = function(a) {
        try {
            if (!r(a)) throw Error("Size mapping has to be an array");
            var b = ua(a, Ce);
            this.G = new Ae(b)
        } catch (c) {
            ed(205, c), this.j.j(Ga(c.message), null, this)
        }
        return this
    };
    k.hasWrapperDiv = function() {
        return !!document.getElementById(this.l.getDomId())
    };
    k.setClickUrl = function(a) {
        try {
            if (!u(a)) return this.j.j(E("Slot.setClickUrl", arguments), null, this), this;
            this.J = a;
            return this
        } catch (b) {
            I(206, b)
        }
    };
    k.getClickUrl = function() {
        return this.J
    };
    k.setCategoryExclusion = function(a) {
        try {
            return u(a) && !gc(xc(a)) ? (Fc(this.B, a), this.j.info(Ha(a), null, this)) : this.j.j(E("Slot.setCategoryExclusion", arguments), null, this), this
        } catch (b) {
            I(207, b)
        }
    };
    k.clearCategoryExclusions = function() {
        try {
            return this.j.info(Ia(), null, this), this.B = [], this
        } catch (a) {
            I(208, a)
        }
    };
    k.getCategoryExclusions = function() {
        try {
            return Ic(this.B)
        } catch (a) {
            I(209, a)
        }
    };
    k.setTargeting = function(a, b) {
        try {
            var c = [];
            r(b) ? c = b : b && c.push(b.toString());
            u(a) ? (this.j.info(Ja(a, c.join(), this.getAdUnitPath()), null, this), this.o[a] = c) : this.j.j(E("Slot.setTargeting", arguments), null, this);
            return this
        } catch (d) {
            I(210, d)
        }
    };
    k.clearTargeting = function() {
        try {
            return this.j.info(Ka(), null, this), this.o = {}, this
        } catch (a) {
            I(211, a)
        }
    };
    k.getTargetingMap = function() {
        return md(this.o)
    };
    k.getTargeting = function(a) {
        try {
            return u(a) ? this.o.hasOwnProperty(a) ? Ic(this.o[a]) : [] : (this.j.j(E("Slot.getTargeting", arguments), null, this), [])
        } catch (b) {
            I(212, b)
        }
    };
    k.getTargetingKeys = function() {
        try {
            var a = [];
            F(this.o, function(b, d) {
                a.push(d)
            });
            return a
        } catch (b) {
            I(213, b)
        }
    };
    k.getOutOfPage = function() {
        return this.O
    };
    k.getAudExtId = function() {
        return this.I
    };
    k.gtfcd = function() {
        return this.H
    };
    k.setCollapseEmptyDiv = function(a, b) {
        try {
            if (!ea(a) || b && !ea(b)) return this.j.j(E("Slot.setCollapseEmptyDiv", arguments), null, this), this;
            this.M = (this.K = a) && Boolean(b);
            b && !a && this.j.j(La(this.l.toString()), null, this);
            return this
        } catch (c) {
            I(214, c)
        }
    };
    k.getCollapseEmptyDiv = function() {
        return this.K
    };
    k.getDivStartsCollapsed = function() {
        return this.M
    };
    var Fe = function(a, b) {
        if (!a.hasWrapperDiv()) return a.j.error(Na(a.l.toString()), null, a), !1;
        var c = p.document,
            d = a.l.getDomId(),
            c = c && c.getElementById(d);
        if (!c) return a.j.error(Oa(d, a.l.toString()), null, a), !1;
        d = a.A;
        return u(d) && 0 < d.length ? (a.renderStarted(), c.innerHTML = d, a.renderEnded(b), !0) : !1
    };
    k = Ee.prototype;
    k.fetchStarted = function(a) {
        this.C = this.j.info(ya(this.getAdUnitPath()), null, this);
        this.L = a
    };
    k.getContentUrl = function() {
        return this.L
    };
    k.fetchEnded = function() {
        this.j.info(za(this.getAdUnitPath()), null, this, this.C)
    };
    k.renderStarted = function() {
        this.v = this.j.info(Aa(this.getAdUnitPath()), null, this)
    };
    k.renderEnded = function(a) {
        this.j.info(Ba(this.getAdUnitPath()), null, this, this.v);
        G(this.m, function(b) {
            b.getName() == a.serviceName && be(b, a)
        })
    };
    k.setFirstLook = function(a) {
        if (!ea(a)) return this.j.j(E("Slot.setFirstLook", arguments), null, this), this;
        this.N = a ? 1 : 2;
        return this
    };
    k.getFirstLook = function() {
        return this.N
    };
    var Ge = function() {
        this.j = {};
        this.l = {};
        this.m = sa()
    };
    Ge.prototype.add = function(a, b, c) {
        if (!u(a) || 0 >= a.length || !b) return null;
        a in this.j || (this.j[a] = []);
        b = new Ee(a, this.j[a].length, b, c);
        c = b.getSlotId().getDomId();
        if (this.l[c]) return this.m.error(Sa(c)), null;
        this.j[a].push(b);
        this.l[b.getSlotId().getDomId()] = b;
        ad.push(b);
        a = Vc([b])[0];
        c = oe();
        c.u || (c.u = !0, c.addFeature("n" + a));
        qe(c);
        return b
    };
    Ge.prototype.o = function(a, b) {
        var c = b || 0,
            d = u(a) && this.j[a] || [];
        return 0 <= c && c < d.length && (d = d[c], d.getSlotId().getInstance() == c) ? d : null
    };
    var He = function(a, b) {
            return kd(a.j, function(a) {
                return Ec(a, b)
            })
        },
        Ie = function() {
            var a = la();
            return a.slot_manager_instance || (a.slot_manager_instance = new Ge)
        },
        Je = function(a, b, c) {
            try {
                var d = Ie();
                return d && d.add(a, b, c)
            } catch (e) {
                I(802, e)
            }
        };
    A("defineOutOfPageSlot", function(a, b) {
        try {
            var c = Ie();
            if (!c) return null;
            var d = c.add(a, [1, 1], b);
            return d ? (d.O = !0, d) : null
        } catch (e) {
            I(801, e)
        }
    });
    A("defineSlot", Je);
    A("defineUnit", Je);
    Ge.prototype.find = Ge.prototype.o;
    Ge.getInstance = Ie;
    var Ke = function(a) {
        try {
            var b = sa();
            if (u(a)) {
                var c, d = Ie();
                if (c = d.l[a] ? d.l[a] : null)
                    if (c.F && !c.hasWrapperDiv()) c.j.j(Pa(c.w, c.l.getDomId()), null, c);
                    else
                        for (a = 0; a < c.m.length; ++a) c.m[a].l && c.m[a].da(c);
                else b.error(Ra(String(a)))
            } else b.error(Qa(String(a)))
        } catch (e) {
            I(2201, e)
        }
    };
    A("display", Ke);
    var Le = document,
        L = window;
    var Me = function(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
    };

    function M(a) {
        return "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)
    }

    function Ne() {
        var a = Oe,
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
    var Qe = function(a, b) {
            Pe(a, "load", b)
        },
        Pe = function(a, b, c) {
            Zb(a, b, c, void 0)
        },
        Se = function() {
            var a = Re();
            "google_onload_fired" in a || (a.google_onload_fired = !1, Qe(a, function() {
                a.google_onload_fired = !0
            }))
        };

    function Te() {
        return "msie" in Ue ? Ue.msie : Ue.msie = -1 != navigator.userAgent.toLowerCase().indexOf("msie")
    }
    var Ue = {};

    function Ve() {
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
            if (Te() && !window.opera) {
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
    var We = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    var Xe = {},
        $e = function(a, b, c, d) {
            var e = Ye,
                f, g = !0;
            try {
                f = b()
            } catch (h) {
                try {
                    var l = cc(h);
                    b = "";
                    h.fileName && (b = h.fileName);
                    var m = -1;
                    h.lineNumber && (m = h.lineNumber);
                    g = e(a, l, b, m, c)
                } catch (n) {
                    try {
                        var v = cc(n);
                        a = "";
                        n.fileName && (a = n.fileName);
                        c = -1;
                        n.lineNumber && (c = n.lineNumber);
                        Ye("pAR", v, a, c, void 0, void 0)
                    } catch (t) {
                        Ze({
                            context: "mRE",
                            msg: t.toString() + "\n" + (t.stack || "")
                        }, void 0)
                    }
                }
                if (!g) throw h;
            } finally {
                if (d) try {
                    d()
                } catch (aa) {}
            }
            return f
        },
        Ye = function(a, b, c, d, e, f) {
            var g = {};
            if (e) try {
                e(g)
            } catch (h) {}
            g.context = a;
            g.msg = b.substring(0,
                512);
            c && (g.file = c);
            0 < d && (g.line = d.toString());
            g.url = Le.URL.substring(0, 512);
            g.ref = Le.referrer.substring(0, 512);
            af(g);
            Ze(g, f);
            return !0
        },
        Ze = function(a, b) {
            try {
                if (Math.random() < (b || .01)) {
                    var c = "/pagead/gen_204?id=jserror" + bf(a),
                        d = "http" + ("http:" == L.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com" + c,
                        d = d.substring(0, 2E3);
                    dc(L, d, void 0)
                }
            } catch (e) {}
        },
        af = function(a) {
            var b = a || {};
            Me(Xe, function(a, d) {
                b[d] = L[a]
            })
        },
        cf = function(a, b) {
            return function() {
                var c = arguments;
                return $e(a, function() {
                    return b.apply(void 0,
                        c)
                }, void 0, void 0)
            }
        },
        df = function(a) {
            return cf("osd::util::rschange", a)
        },
        bf = function(a) {
            var b = "";
            Me(a, function(a, d) {
                if (0 === a || a) b += "&" + d + "=" + M(a)
            });
            return b
        };
    var ef = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    k = ef.prototype;
    k.clone = function() {
        return new ef(this.top, this.right, this.bottom, this.left)
    };
    k.contains = function(a) {
        return this && a ? a instanceof ef ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var ff = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    ff.prototype.clone = function() {
        return new ff(this.left, this.top, this.width, this.height)
    };
    var gf = function(a) {
        return new ef(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    ff.prototype.contains = function(a) {
        return a instanceof ff ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    };
    ff.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ff.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ff.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var hf = function(a, b) {
            var c;
            a: {
                c = Nd(a);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                    c = c[b] || c.getPropertyValue(b) || "";
                    break a
                }
                c = ""
            }
            return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        jf = function(a) {
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
            K && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        kf = function(a) {
            if (K && !(8 <= Id)) return a.offsetParent;
            var b = Nd(a),
                c = hf(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = hf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        lf = function(a) {
            var b = Nd(a),
                c = new qd(0, 0),
                d;
            d = b ? Nd(b) : document;
            var e;
            (e = !K) || (e = 9 <= Id);
            e || (e = "CSS1Compat" ==
                Od(d).j.compatMode);
            if (a == (e ? d.documentElement : d.body)) return c;
            a = jf(a);
            d = Od(b).j;
            b = Td(d);
            d = Ud(d);
            b = K && Gd("10") && d.pageYOffset != b.scrollTop ? new qd(b.scrollLeft, b.scrollTop) : new qd(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        mf = function(a) {
            "number" == typeof a && (a = Math.round(a) + "px");
            return a
        },
        nf = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Bd && !b && !c;
            return q(b) && !d || !a.getBoundingClientRect ? new rd(b, c) : (a = jf(a), new rd(a.right - a.left, a.bottom -
                a.top))
        };
    var of = function() {
            this.j = []
        },
        qf = function(a, b, c, d, e) {
            a.j.push(new pf(b, c, d, e))
        },
        pf = function(a, b, c, d) {
            this.m = a;
            this.j = (this.l = q(d) && a.style && a.style.getPropertyPriority) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.o = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.u = this.l ? a.style.getPropertyPriority(this.j) : null;
            this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, c, d)) : a.style[this.j] = c
        };
    var rf = function(a) {
        var b = arguments,
            c = b.length;
        return function() {
            for (var a = 0; a < c; a++)
                if (!b[a].apply(this, arguments)) return !1;
            return !0
        }
    };
    var sf = function(a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        vf = function(a) {
            var b = [];
            tf(new uf, a, b);
            return b.join("")
        },
        uf = function() {},
        tf = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (r(b)) {
                        var d =
                            b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), tf(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), wf(d, c), c.push(":"), tf(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        wf(b, c);
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
        xf = {
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
        yf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        wf = function(a, b) {
            b.push('"', a.replace(yf, function(a) {
                var b = xf[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), xf[a] = b);
                return b
            }), '"')
        };
    var zf = function(a, b, c, d) {
        this.o = a;
        this.j = 1;
        this.m = b;
        this.v = c;
        this.F = d;
        this.u = Math.random();
        this.w = {};
        this.l = null;
        this.A = y(this.C, this)
    };
    zf.prototype.C = function(a) {
        if (a.origin == this.v && a.source == this.m) {
            var b = null;
            try {
                b = sf(a.data)
            } catch (c) {}
            if (x(b) && (a = b.i, b.c === this.o && a != this.u && (2 != this.j && (this.j = 2, Af(this), this.l && (this.l(), this.l = null)), a = b.s, b = b.p, u(a) && (u(b) || x(b)) && this.w.hasOwnProperty(a)))) this.w[a](b)
        }
    };
    var Af = function(a) {
        var b = {};
        b.c = a.o;
        b.i = a.u;
        a.m.postMessage(vf(b), a.v)
    };
    zf.prototype.B = function() {
        if (1 == this.j) {
            try {
                this.m.postMessage && Af(this)
            } catch (a) {}
            window.setTimeout(y(this.B, this), 50)
        }
    };
    zf.prototype.connect = function(a) {
        a && (this.l = a);
        Zb(window, "message", this.A);
        this.F && this.B()
    };
    var Bf = function(a, b, c) {
        a.w[b] = c
    };
    zf.prototype.send = function(a, b) {
        var c = {};
        c.c = this.o;
        c.i = this.u;
        c.s = a;
        c.p = b;
        this.m.postMessage(vf(c), this.v)
    };
    zf.prototype.close = function() {
        3 != this.j && (this.j = 3, $b(window, "message", this.A))
    };
    Ad || Bd || K && Gd(11);
    var Cf = function(a) {
        this.o = a;
        this.u = null;
        this.C = this.m = 0;
        this.l = null;
        this.L = "sfchannel" + a
    };
    var Df = function(a, b, c, d, e, f) {
            this.m = a.clone();
            this.l = b.clone();
            this.o = c;
            this.j = d.clone();
            this.u = e;
            this.v = f
        },
        Ef = function(a) {
            return vf({
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
        Ff = function(a) {
            var b =
                window.screenX || window.screenLeft || 0,
                c = window.screenY || window.screenTop || 0,
                b = new ef(c, (window.outerWidth || document.documentElement.clientWidth || 0) - b, (window.outerHeight || document.documentElement.clientHeight || 0) - c, b),
                c = lf(a),
                d;
            if ("none" != hf(a, "display")) d = nf(a);
            else {
                d = a.style;
                var e = d.display,
                    f = d.visibility,
                    g = d.position;
                d.visibility = "hidden";
                d.position = "absolute";
                d.display = "inline";
                var h = nf(a);
                d.display = e;
                d.position = g;
                d.visibility = f;
                d = h
            }
            c = new ff(c.x, c.y, d.width, d.height);
            d = gf(c);
            for (var e = String(hf(a,
                    "zIndex")), f = new ef(0, Infinity, Infinity, 0), g = Od(a), l = g.j.body, m = g.j.documentElement, h = Td(g.j); a = kf(a);)
                if (!(K && 0 == a.clientWidth || Bd && 0 == a.clientHeight && a == l) && a != l && a != m && "visible" != hf(a, "overflow")) {
                    var n = lf(a),
                        v = new qd(a.clientLeft, a.clientTop);
                    n.x += v.x;
                    n.y += v.y;
                    f.top = Math.max(f.top, n.y);
                    f.right = Math.min(f.right, n.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, n.y + a.clientHeight);
                    f.left = Math.max(f.left, n.x)
                }
            a = h.scrollLeft;
            h = h.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, h);
            g = Sd(Ud(g.j) ||
                window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, h + g.height);
            a = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null;
            var t;
            if (null != a) a: {
                h = new ff(a.left, a.top, a.right - a.left, a.bottom - a.top);
                t = Math.max(h.left, c.left);
                f = Math.min(h.left + h.width, c.left + c.width);
                if (t <= f && (g = Math.max(h.top, c.top), h = Math.min(h.top + h.height, c.top + c.height), g <= h)) {
                    t = new ff(t, g, f - t, h - g);
                    break a
                }
                t = null
            }
            a = (f = (f = null != t && (0 != t.width || t.left + t.width != a.left && t.left != a.right)) && (0 != t.height || t.top + t.height !=
                a.top && t.top != a.bottom)) ? new ef(Math.max(d.top - a.top, 0), Math.max(a.right - d.right, 0), Math.max(a.bottom - d.bottom, 0), Math.max(d.left - a.left, 0)) : new ef(0, 0, 0, 0);
            g = f = 0;
            t && !(new rd(t.width, t.height)).isEmpty() && (f = t.width / c.width, g = t.height / c.height);
            return new Df(b, d, e, a, f, g)
        };
    var Gf = !1,
        Hf = "",
        If = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    if (navigator.plugins && navigator.plugins.length) {
        var Jf = navigator.plugins["Shockwave Flash"];
        Jf && (Gf = !0, Jf.description && (Hf = If(Jf.description)));
        navigator.plugins["Shockwave Flash 2.0"] && (Gf = !0, Hf = "2.0.0.11")
    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
        var Kf = navigator.mimeTypes["application/x-shockwave-flash"];
        (Gf = Kf && Kf.enabledPlugin) && (Hf = If(Kf.enabledPlugin.description))
    } else try {
        var Lf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
            Gf = !0,
            Hf = If(Lf.GetVariable("$version"))
    } catch (Mf) {
        try {
            Lf =
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Gf = !0, Hf = "6.0.21"
        } catch (Nf) {
            try {
                Lf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Gf = !0, Hf = If(Lf.GetVariable("$version"))
            } catch (Of) {}
        }
    }
    var Pf = Gf,
        Qf = Hf;
    var Rf = function() {
        this.j = {
            shared: {
                sf_ver: "1-0-2",
                ck_on: navigator.cookieEnabled ? 1 : 0,
                flash_ver: Pf ? Qf : "0"
            }
        }
    };
    var Sf = function() {
        this.j = !0;
        this.l = !1
    };
    var Tf = function(a, b, c, d) {
        var e = new Sf,
            f = new Rf;
        this.v = a;
        this.j = b;
        this.l = c;
        this.o = e;
        this.m = f;
        this.u = d
    };
    var Uf = function(a) {
            this.j = a
        },
        Vf = function(a, b) {
            this.j = a;
            this.version = b
        };
    z(Vf, Uf);
    Vf.prototype.m = function() {
        return vf({
            uid: this.j,
            version: this.version
        })
    };
    var Wf = function(a, b, c) {
        this.j = a;
        this.o = b;
        this.l = c
    };
    z(Wf, Uf);
    Wf.prototype.m = function() {
        return vf({
            uid: this.j,
            initialWidth: this.o,
            initialHeight: this.l
        })
    };
    var Xf = function(a, b) {
        this.j = a;
        this.description = b
    };
    z(Xf, Uf);
    Xf.prototype.m = function() {
        return vf({
            uid: this.j,
            description: this.description
        })
    };
    var Yf = function(a, b) {
        this.j = a;
        this.l = b
    };
    z(Yf, Uf);
    Yf.prototype.m = function() {
        return vf({
            uid: this.j,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left
        })
    };
    var Zf = function(a) {
        this.j = a
    };
    z(Zf, Uf);
    Zf.prototype.m = function() {
        return vf({
            uid: this.j
        })
    };
    var $f = function(a, b) {
        this.j = a;
        this.o = b
    };
    z($f, Uf);
    $f.prototype.m = function() {
        var a = {
            uid: this.j,
            newGeometry: Ef(this.o)
        };
        return vf(a)
    };
    var ag = function(a, b, c, d) {
        $f.call(this, a, c);
        this.u = b;
        this.l = d
    };
    z(ag, $f);
    ag.prototype.m = function() {
        var a = {
            uid: this.j,
            success: this.u,
            newGeometry: Ef(this.o),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left
        };
        return vf(a)
    };
    var bg = function(a, b, c) {
        this.j = a;
        this.width = b;
        this.height = c
    };
    z(bg, Uf);
    bg.prototype.m = function() {
        return vf({
            uid: this.j,
            width: this.width,
            height: this.height
        })
    };
    var cg = function(a) {
        var b = "//tpc.googlesyndication.com/safeframe/1-0-2/html/container.html",
            c;
        c = a;
        for (var d = 0; c != c.parent;) d++, c = c.parent;
        (c = d) && (b += "?n=" + c);
        return (ac(a) ? "https:" : "http:") + b
    };
    var gg = function(a) {
        Cf.call(this, dg++);
        this.A = a.Ia;
        this.B = a.ja;
        this.P = window.location.protocol + "//" + window.location.host;
        this.N = window.location.protocol + "//tpc.googlesyndication.com";
        this.I = Boolean(a.xa);
        this.F = 1 == a.size;
        this.v = new of;
        eg(this, a.ja, a.size);
        this.u = this.K = Ff(a.ja);
        this.j = fg(this, a.Ca, a.content, a.size);
        this.G = y(this.O, this);
        this.H = -1;
        this.w = 0;
        this.l = new zf(this.L, this.j.contentWindow, this.N, !1);
        Bf(this.l, "init_done", y(this.Fa, this));
        Bf(this.l, "register_done", y(this.Ma, this));
        Bf(this.l,
            "report_error", y(this.Oa, this));
        Bf(this.l, "expand_request", y(this.ya, this));
        Bf(this.l, "collapse_request", y(this.va, this));
        Bf(this.l, "creative_geometry_update", y(this.M, this));
        this.l.connect(y(this.Ka, this));
        if (a.qa) {
            var b = y(function() {
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
                c || (a.qa(), $b(this.j, "load", b))
            }, this);
            Zb(this.j, "load", b)
        }
    };
    z(gg, Cf);
    var dg = 1,
        eg = function(a, b, c) {
            a.F ? (b.style.width = mf("100%"), b.style.height = mf("auto")) : (b.style.width = mf(c.width), b.style.height = mf(c.height))
        },
        fg = function(a, b, c, d) {
            var e = Od(a.B);
            c = "1-0-2;" + c.length + ";" + c;
            var f;
            f = new Tf(a.o, a.P, a.K, a.F);
            var g = f.v,
                h = f.j,
                l = Ef(f.l),
                m;
            m = f.o;
            m = vf({
                expandByOverlay: m.j,
                expandByPush: m.l,
                readCookie: !1,
                writeCookie: !1
            });
            f = {
                uid: g,
                hostPeerName: h,
                initialGeometry: l,
                permissions: m,
                metadata: vf(f.m.j),
                reportCreativeGeometry: f.u
            };
            f = vf(f);
            c = c + f;
            a.I && d instanceof rd && (f = Od(a.B), hg || (g = f.l("script", {
                src: "//pagead2.googlesyndication.com/pagead/expansion_embed.js?source=safeframe"
            }), Yd(f.j.getElementsByTagName("script")[0]).appendChild(g), hg = !0), f = Ud(f.j), f.google_eas_queue = f.google_eas_queue || [], f.google_eas_queue.push({
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
            h = Ud(e.j);
            g = cg(h);
            a.I && (h = h.location.href, g += "#" + [h && (0 < h.indexOf("?google_debug") || 0 < h.indexOf("&google_debug") ||
                0 < h.indexOf("#google_debug")) ? "google_debug&" : "", "xpc=", "sf-gdn-exp-" + a.o, "&p=", encodeURIComponent(Le.location.protocol), "//", encodeURIComponent(Le.location.host)].join(""));
            b = {
                id: b,
                name: c,
                src: g,
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
                src: K && !Gd(9) ? "javascript:\"<html><body style='background:transparent'></body></html>\"" : "about:blank"
            };
            b && od(d, b);
            e = e.l("iframe", d);
            a.B.appendChild(e);
            return e
        };
    k = gg.prototype;
    k.Ka = function() {
        Zb(window, "resize", this.G);
        Zb(window, "scroll", this.G)
    };
    k.Fa = function(a) {
        try {
            if (0 != this.m) throw Error("Container already initialized");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = sf(a);
            if (!(x(c) && w(c.uid) && u(c.version))) throw Error("Cannot parse JSON message");
            b = new Vf(c.uid, c.version);
            if (this.o != b.j || "1-0-2" != b.version) throw Error("Wrong source container");
            this.m = 1
        } catch (d) {
            this.A.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
        }
    };
    k.Ma = function(a) {
        try {
            if (1 != this.m) throw Error("Container not initialized");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b = sf(a);
            if (!(x(b) && w(b.uid) && w(b.initialWidth) && w(b.initialHeight))) throw Error("Cannot parse JSON message");
            if (this.o != (new Wf(b.uid, b.initialWidth, b.initialHeight)).j) throw Error("Wrong source container");
            this.m = 2
        } catch (c) {
            this.A.error("Invalid REGISTER_DONE message. Reason: " + c.message)
        }
    };
    k.Oa = function(a) {
        try {
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = sf(a);
            if (!(x(c) && w(c.uid) && u(c.description))) throw Error("Cannot parse JSON message");
            b = new Xf(c.uid, c.description);
            if (this.o != b.j) throw Error("Wrong source container");
            this.A.info("Ext reported an error. Description: " + b.description)
        } catch (d) {
            this.A.error("Invalid REPORT_ERROR message. Reason: " + d.message)
        }
    };
    k.ya = function(a) {
        try {
            if (2 != this.m) throw Error("Container is not registered");
            if (0 != this.C) throw Error("Container is not collapsed");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = sf(a);
            if (!(x(c) && w(c.uid) && w(c.expand_t) && w(c.expand_r) && w(c.expand_b) && w(c.expand_l))) throw Error("Cannot parse JSON message");
            b = new Yf(c.uid, new ef(c.expand_t, c.expand_r, c.expand_b, c.expand_l));
            if (this.o != b.j) throw Error("Wrong source container");
            if (!(0 <= b.l.top && 0 <= b.l.left && 0 <= b.l.bottom && 0 <= b.l.right)) throw Error("Invalid expansion amounts");
            var d;
            var e = b.l,
                f = this.u = Ff(this.j);
            if (e.top <= f.j.top && e.right <= f.j.right && e.bottom <= f.j.bottom && e.left <= f.j.left) {
                for (var g = this.j.parentNode; g && g.style; g = g.parentNode) qf(this.v, g, "overflowX", "visible", "important"), qf(this.v, g, "overflowY", "visible", "important");
                var h = this.u.l,
                    l = this.u.l,
                    m = gf(new ff(0, 0, h.right - h.left, l.bottom - l.top));
                x(e) ? (m.top -= e.top, m.right += e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += void 0, m.bottom += void 0, m.left -= NaN);
                qf(this.v, this.B, "position", "relative");
                qf(this.v, this.j, "zIndex", "10000");
                qf(this.v, this.j, "position", "absolute");
                qf(this.v, this.j, "width", m.right - m.left + "px", void 0);
                qf(this.v, this.j, "height", m.bottom - m.top + "px", void 0);
                qf(this.v, this.j, "left", m.left + "px", void 0);
                qf(this.v, this.j, "top", m.top + "px", void 0);
                this.C = 2;
                this.u = Ff(this.j);
                d = !0
            } else d = !1;
            this.l.send("expand_response", (new ag(this.o, d, this.u, b.l)).m())
        } catch (n) {
            this.A.error("Invalid EXPAND_REQUEST message. Reason: " + n.message)
        }
    };
    k.va = function(a) {
        try {
            if (2 != this.m) throw Error("Container is not registered");
            if (2 != this.C) throw Error("Container is not expanded");
            if (!u(a)) throw Error("Could not parse serialized message");
            var b = sf(a);
            if (!x(b) || !w(b.uid)) throw Error("Cannot parse JSON message");
            if (this.o != (new Zf(b.uid)).j) throw Error("Wrong source container");
            ig(this);
            this.l.send("collapse_response", (new $f(this.o, this.u)).m())
        } catch (c) {
            this.A.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
        }
    };
    var ig = function(a) {
        for (var b = a.v, c = b.j.length - 1; 0 <= c; c--) {
            var d = b.j[c];
            d.l ? (d.m.style.removeProperty(d.j), d.m.style.setProperty(d.j, d.o, d.u)) : d.m.style[d.j] = d.o
        }
        b.j.length = 0;
        a.C = 0;
        a.j && (a.u = Ff(a.j))
    };
    gg.prototype.O = function() {
        if (1 == this.m || 2 == this.m) switch (this.w) {
            case 0:
                jg(this);
                this.H = setTimeout(y(this.J, this), 1E3);
                this.w = 1;
                break;
            case 1:
                this.w = 2;
                break;
            case 2:
                this.w = 2
        }
    };
    gg.prototype.M = function(a) {
        try {
            if (!u(a)) throw Error("Could not parse serialized message");
            var b, c = sf(a);
            if (!(x(c) && w(c.uid) && w(c.width) && w(c.height))) throw Error("Cannot parse JSON message");
            b = new bg(c.uid, c.width, c.height);
            if (this.o != b.j) throw Error("Wrong source container");
            this.F ? this.j.height = String(b.height) : this.A.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
        } catch (d) {
            this.A.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + d.message)
        }
    };
    gg.prototype.J = function() {
        if (1 == this.m || 2 == this.m) switch (this.w) {
            case 1:
                this.w = 0;
                break;
            case 2:
                jg(this), this.H = setTimeout(y(this.J, this), 1E3), this.w = 1
        }
    };
    var jg = function(a) {
            a.u = Ff(a.j);
            a.l.send("geometry_update", (new $f(a.o, a.u)).m())
        },
        kg = function(a) {
            100 != a.m && (2 == a.C && ig(a), clearTimeout(a.H), a.H = -1, a.w = 3, a.l && (a.l.close(), a.l = null), $b(window, "resize", a.G), $b(window, "scroll", a.G), a.j && a.B == Yd(a.j) && a.B.removeChild(a.j), a.j = null, a.B = null, a.m = 100)
        },
        hg = !1;
    var lg = function(a, b) {
        this.j = a;
        this.l = b;
        this.m = this.j.getAdUnitPath();
        this.A = this.j.getSlotId().getInstance();
        var c = this.m,
            d = c.split("/");
        this.G = "/" == c.charAt(0) && 2 <= d.length ? d[1] : "/" != c.charAt(0) && 1 <= d.length ? d[0] : "";
        this.H = "";
        this.I = 0;
        this.u = null;
        this.v = 0;
        this.o = null
    };
    lg.prototype.K = 0;
    lg.prototype.C = !1;
    var mg = 0,
        ng = function(a) {
            a.K = 0;
            a.C = !1;
            a.w = null;
            a.F = null;
            a.B = null;
            a.J = null;
            a.o = null
        };
    lg.prototype.getInstance = function() {
        return this.A
    };
    var N = function(a) {
            return a.m + "_" + a.A
        },
        O = function(a) {
            return a.j.getSlotId().getDomId()
        },
        P = function(a) {
            return "google_ads_iframe_" + N(a)
        };
    lg.prototype.toString = function() {
        var a = this.j.getSlotId().toString();
        return "[gam.gut.AdSlot: nwid=" + this.G + ", adUnitPath=" + this.m + ", instance=" + this.A + ", iframeLoaded=" + this.C + ", tries=" + this.K + ", GUT slot id=" + a + "]"
    };
    var og = function(a, b) {
            a.w || (a.w = (new Date).getTime());
            a.j.fetchStarted(b || "")
        },
        pg = function(a) {
            a.B || (a.B = (new Date).getTime());
            a.j.renderStarted()
        },
        qg = function(a, b) {
            a.J || (a.J = (new Date).getTime());
            a.j.renderEnded(b)
        },
        rg = function(a) {
            var b = window,
                c = null;
            b.top == b && (c = Sd(window), c = a.j.getSizes(c.width, c.height));
            null == c && (c = a.j.getSizes());
            a = [];
            for (b = 0; b < c.length; ++b) a.push([c[b].getWidth(), c[b].getHeight()]);
            return a
        },
        sg = function(a) {
            a = rg(a);
            for (var b = [], c = 0; c < a.length; ++c) b.push(a[c].join("x"));
            return b.join("|")
        },
        tg = function(a) {
            var b = [],
                c = a.j.getTargetingMap();
            F(c, function(a, c) {
                for (var d = [], h = 0; h < a.length; ++h) d.push(encodeURIComponent(a[h]));
                b.push(encodeURIComponent(c) + "=" + d.join(","))
            });
            if (fa(a.j.getCategoryExclusions) && (a = a.j.getCategoryExclusions(), 0 < a.length && !("excl_cat" in c))) {
                for (var c = [], d = 0; d < a.length; ++d) c.push(encodeURIComponent(a[d]));
                b.push(encodeURIComponent("excl_cat") + "=" + c.join(","))
            }
            return b.join("&")
        },
        ug = function(a, b) {
            var c = null,
                d = !0,
                e = null,
                f = null;
            x(b) && (d = b._empty_, d || (c = [b._width_, b._height_],
                0 == b._is_afc_ && b._creative_ids_ && b._adgroup2_ids_ && (e = b._creative_ids_[0], f = b._adgroup2_ids_[0])));
            return new $d(a.j, d, c, e, f, "publisher_ads")
        },
        vg = function(a) {
            return new $d(a.j, !0, null, null, null, "publisher_ads")
        },
        wg = function(a) {
            a.v = ++mg;
            return a.v
        };
    var xg = {
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
        yg = {
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
        zg = {
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
    var Ag = !!window.google_async_iframe_id,
        Bg = Ag && window.parent || window,
        Re = function() {
            if (Ag && !Xb(Bg)) {
                for (var a = "." + Le.domain; 2 < a.split(".").length && !Xb(Bg);) Le.domain = a = a.substr(a.indexOf(".") + 1), Bg = window.parent;
                Xb(Bg) || (Bg = window)
            }
            return Bg
        };
    var Cg = !1,
        Dg = function(a, b, c) {
            "" != b && (c ? a.j.hasOwnProperty(c) && (a.j[c] = b) : a.l.push(b))
        },
        Fg = function() {
            var a = Eg,
                b = a.l.concat([]);
            F(a.j, function(a) {
                "" != a && b.push(a)
            });
            return b
        };
    Cg = !1;
    var Gg = function(a, b) {
            for (var c = 0, d = a, e = 0; a && a != a.parent;)
                if (a = a.parent, e++, Xb(a)) d = a, c = e;
                else if (b) break;
            return {
                fa: d,
                level: c
            }
        },
        Hg = null;
    var Jg = function(a) {
            this.S = a;
            Ig(this, 3, null);
            Ig(this, 4, 0);
            Ig(this, 5, 0);
            Ig(this, 6, 0);
            Ig(this, 15, 0);
            a = Re();
            a = Gg(a, !1).fa;
            var b = a.google_global_correlator;
            b || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
            Ig(this, 7, b);
            Ig(this, 8, {});
            Ig(this, 9, {});
            Ig(this, 10, {});
            Ig(this, 11, []);
            Ig(this, 12, 0);
            Ig(this, 16, null);
            Ig(this, 14, {});
            Ig(this, 17, !1)
        },
        Kg = {
            google_persistent_state: !0,
            google_persistent_state_async: !0
        },
        Lg = {},
        Mg = function(a) {
            var b = Re();
            a = a && Kg[a] ? a : Ag ? "google_persistent_state_async" :
                "google_persistent_state";
            if (Lg[a]) return Lg[a];
            var c = "google_persistent_state_async" == a ? {} : b,
                d = b[a];
            return null != d && "object" == typeof d && null != d.S && "object" == typeof d.S ? Lg[a] = d : b[a] = Lg[a] = new Jg(c)
        },
        Ng = function(a) {
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
        Og = function(a) {
            var b = Ng(14);
            return a.S[b]
        },
        Ig = function(a, b, c) {
            a = a.S;
            b = Ng(b);
            void 0 === a[b] && (a[b] = c)
        };
    var Pg = function(a, b, c, d, e, f) {
            var g = "";
            a && (g += a + ":");
            c && (g += "//", b && (g += b + "@"), g += c, d && (g += ":" + d));
            e && (g += e);
            f && (g += "?" + f);
            return g
        },
        Qg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        Tg = function(a) {
            if (Rg) {
                Rg = !1;
                var b = p.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = Sg(c)) && c != b.hostname) throw Rg = !0, Error();
                }
            }
            return a.match(Qg)
        },
        Rg = Bd,
        Sg = function(a) {
            return (a = Tg(a)[3] || null) ? decodeURI(a) : a
        },
        Ug = /#|$/,
        Vg = function(a, b) {
            var c = a.search(Ug),
                d;
            a: {
                d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
        };

    function Wg(a, b, c, d) {
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

    function Xg(a, b) {
        var c = {};
        c.Qa = Gg(window, !1).fa;
        var d;
        var e = c.Qa;
        d = e.location.href;
        if (e == e.top) d = {
            url: d,
            pa: !0
        };
        else {
            var f = !1,
                g = e.document;
            g && g.referrer && (d = g.referrer, e.parent == e.top && (f = !0));
            (e = e.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == d.indexOf(e) && (f = !1, d = e);
            d = {
                url: d,
                pa: f
            }
        }
        c.Ra = d;
        c.Ea = Wg(Re(), b, a.google_ad_width, a.google_ad_height);
        d = c.Ea;
        f = c.Ra.pa;
        e = Re();
        e = e.top == e ? 0 : Xb(e.top) ? 1 : 2;
        g = 4;
        d || 1 != e ? d || 2 != e ? d && 1 == e ? g = 7 : d && 2 == e && (g = 8) : g = 6 : g = 5;
        f && (g |= 16);
        c.Da = "" + g;
        return c
    };
    var Yg = function(a) {
            this.j = {};
            this.l = a
        },
        Zg = function(a, b, c, d) {
            b && (c || (c = ""), "google_gl" == b ? b = "google_country" : "google_region" == b && (b = "google_section"), b in a.l && ("undefined" == typeof d || d || !a.j[b]) && (a.j[b] = c))
        },
        $g = function(a, b) {
            F(b.j, function(a, b) {
                this.j[b] || (this.j[b] = a)
            }, a)
        },
        ah = function(a) {
            var b = new Yg(a.l);
            b.j = md(a.j);
            delete b.j.google_page_url;
            return b
        },
        bh = function(a) {
            return a.j.google_page_url
        };
    Yg.prototype.T = function() {
        var a = [];
        F(this.j, function(b, c) {
            var d = xg[c] || yg[c] || zg[c] || null;
            d && b && a.push(d + "=" + M(b))
        });
        return a.join("&")
    };
    var dh = function(a, b, c, d) {
            var e = ch(a, ah(b), c, d);
            a = ch(a, b, c, d);
            b = [];
            e[0] && 0 < e[0].length && b.push(e[0].join("&"));
            a[1] && 0 < a[1].length && b.push("sps=" + a[1].join("|"));
            return b.join("&")
        },
        ch = function(a, b, c, d) {
            var e = [],
                f = [],
                g = b.j;
            F(d, function(b, d) {
                if (b) {
                    var m = "";
                    null != g[d] && (m = M(g[d]));
                    for (var n = [], v = -1, t = -1, aa = 0; aa < a.length; ++aa) {
                        var Ma = N(a[aa]);
                        ++v;
                        null == c[Ma] ? n.push("") : (Ma = c[Ma].j, null != Ma[d] ? (n.push(M(M(Ma[d]))), t = v) : n.push(""))
                    }
                    if (0 <= t) {
                        v = [];
                        v.push(M(m));
                        for (aa = 0; aa <= t; ++aa) v.push(n[aa]);
                        f.push(b + "," +
                            v.join(","))
                    } else m && e.push(b + "=" + m)
                }
            });
            b = [];
            b.push(e);
            b.push(f);
            return b
        },
        eh = function(a, b) {
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
            d = Wg(a, a.document, 500, 300);
            e = {};
            if (!c || d) e.ea = "0";
            return e
        };
    var fh = J("Firefox"),
        gh = xd() || J("iPod"),
        hh = J("iPad"),
        ih = J("Android") && !(wd() || J("Firefox") || vd() || J("Silk")),
        jh = wd(),
        kh = J("Safari") && !(wd() || J("Coast") || vd() || J("Edge") || J("Silk") || J("Android")) && !(xd() || J("iPad") || J("iPod"));
    var lh = function(a) {
        return (a = a.exec(sd)) ? a[1] : ""
    };
    (function() {
        if (fh) return lh(/Firefox\/([0-9.]+)/);
        if (K || yd) return Ed;
        if (jh) return lh(/Chrome\/([0-9.]+)/);
        if (kh && !(xd() || J("iPad") || J("iPod"))) return lh(/Version\/([0-9.]+)/);
        if (gh || hh) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(sd)) return a[1] + "." + a[2]
        } else if (ih) return (a = lh(/Android\s+([0-9.]+)/)) ? a : lh(/Version\/([0-9.]+)/);
        return ""
    })();
    var mh = function(a, b, c) {
            b = b || L;
            a && b.top != b && (b = b.top);
            try {
                return b.document && !b.document.body ? new rd(-1, -1) : c ? (new rd(b.innerWidth, b.innerHeight)).round() : Sd(b || window).round()
            } catch (d) {
                return new rd(-12245933, -12245933)
            }
        },
        nh = function(a, b) {
            Te() && !window.opera ? Pe(a, "readystatechange", df(function() {
                "complete" == a.readyState && b(null)
            })) : Pe(a, "load", cf("osd::util::load", b))
        },
        oh = function() {
            var a = 0;
            !q(L.postMessage) && (a |= 1);
            return a
        };
    var ph = function(a, b) {
            this.o = a;
            this.l = b && b.l ? b.l : [];
            this.w = b ? b.w : !1;
            this.m = b && b.m ? b.m : 0;
            this.v = b ? b.v : "";
            this.j = b && b.j ? b.j : [];
            this.u = null;
            this.A = !1;
            if (b) {
                var c;
                for (c = 0; c < this.l.length; ++c) this.l[c].push("true");
                for (c = 0; c < this.j.length; ++c) this.j[c].oa = !0
            }
        },
        Oe = "",
        qh = 0,
        rh = 0,
        sh = function(a, b) {
            var c = a.l,
                d = a.o.google_ad_request_done;
            d && (d = d.orig_callback || d, a.o.google_ad_request_done = function(a) {
                if (a && 0 < a.length) {
                    var f = 1 < a.length ? a[1].url : null,
                        g = a[0].log_info || null,
                        h = a[0].activeview_url || null,
                        l = a[0].activeview_js_enabled ||
                        null,
                        m = a[0].activeview_js_immediate_enabled || null,
                        n = a[0].activeview_js_tos_enabled || null,
                        v = a[0].activeview_cid || null,
                        t = a[0].activeview_metadata || null;
                    c.push([b, sc(a[0].url), f, g, null, h, l, m, n, v, t])
                }
                d(a)
            }, a.o.google_ad_request_done.orig_callback = d)
        },
        th = function(a, b, c, d) {
            var e = a.l;
            if (0 < e.length)
                for (var f = b.document.getElementsByTagName("a"), g = 0; g < f.length; g++)
                    for (var h = 0; h < e.length; h++)
                        if (0 <= f[g].href.indexOf(e[h][1])) {
                            var l = f[g].parentNode;
                            if (e[h][2])
                                for (var m = l, n = 0; 4 > n; n++) {
                                    if (0 <= m.innerHTML.indexOf(e[h][2])) {
                                        l =
                                            m;
                                        break
                                    }
                                    m = m.parentNode
                                }
                            c(l, e[h][0], d || 0, !0, e[h][3], void 0, e[h][5], "true" == e[h][6], "true" == e[h][7], "true" == e[h][11], "true" == e[h][8], e[h][9], e[h][10]);
                            e.splice(h, 1);
                            break
                        }
            if (g = 0 < e.length) Hg || (Hg = Gg(window, !0).fa), g = b != Hg;
            if (g) try {
                th(a, b.parent, c, d)
            } catch (v) {}
            for (g = 0; g < e.length; ++g) a = e[g], "true" == a[6] && uh("osd2", a[3]), "true" == a[7] && uh("osdim", a[3])
        },
        uh = function(a, b) {
            if (a && b) {
                var c = ["//"];
                c.push("pagead2.googlesyndication.com");
                c.push("/activeview");
                c.push("?id=" + a);
                c.push("&r=j");
                c.push("&avi=" + b);
                dc(L,
                    c.join(""), void 0)
            }
        };
    k = ph.prototype;
    k.getNewBlocks = function(a, b) {
        b && th(this, this.o, a, 1);
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.o && e.j && (a(e.j, e.m, e.v, e.l, "", e.u, "", !1, !1, e.oa, !1, "", ""), e.o = !0)
        }
        b && (this.u = a)
    };
    k.getRegisteredAdblockUrls = function() {
        for (var a = [], b = this.j.length, c = 0; c < b; c++) a.push(this.j[c].m);
        return a
    };
    k.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = window.google_enable_ose,
            c;
        !0 === b ? c = 2 : !1 !== b && (c = Yb([0], rh), null == c && ((c = Yb([2], qh)) || (c = 3)));
        if (!c) return 0;
        this.m = c;
        this.v = String(a || 0);
        return this.getOseId()
    };
    k.getOseId = function() {
        return window && Math.random ? this.m : -1
    };
    k.getCorrelator = function() {
        return this.v
    };
    k.numBlocks = function() {
        return this.l.length + this.j.length
    };
    k.registerAdBlock = function(a, b, c, d, e, f) {
        var g = null;
        e && f && (g = {
            width: e,
            height: f
        });
        if (this.u && d) this.u(d, a, b, !0, "", g, "", !1, !1, !1, !1, "", "");
        else {
            if ("js" == c) sh(this, a);
            else {
                var h = new vh(a, b, d, g);
                this.j.push(h);
                d && nh(d, function() {
                    h.l = !0
                })
            }
            this.w || (Se(), Ne(), this.w = !0)
        }
    };
    k.unloadAdBlock = function(a, b) {
        q(window.Goog_Osd_UnloadAdBlock) && window.Goog_Osd_UnloadAdBlock(a, b)
    };
    k.setUpForcePeriscope = function() {
        window.google_enable_ose_periscope && (this.A = !0)
    };
    k.shouldForcePeriscope = function() {
        return this.A
    };
    var wh = function() {
            var a = Re(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new ph(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            return a.__google_ad_urls = new ph(a, b)
        },
        vh = function(a, b, c, d) {
            this.m = a;
            this.v = b;
            this.j = c;
            this.o = this.l = !1;
            this.u = d;
            this.oa = !1
        };
    ka("Goog_AdSense_getAdAdapterInstance", wh);
    ka("Goog_AdSense_OsdAdapter", ph);
    ka("Goog_AdSense_OsdAdapter.prototype.numBlocks", ph.prototype.numBlocks);
    ka("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", ph.prototype.getNewBlocks);
    ka("Goog_AdSense_OsdAdapter.prototype.getOseId", ph.prototype.getOseId);
    ka("Goog_AdSense_OsdAdapter.prototype.getCorrelator", ph.prototype.getCorrelator);
    ka("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", ph.prototype.getRegisteredAdblockUrls);
    ka("Goog_AdSense_OsdAdapter.prototype.setupOse", ph.prototype.setupOse);
    ka("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", ph.prototype.registerAdBlock);
    ka("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", ph.prototype.setUpForcePeriscope);
    ka("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", ph.prototype.shouldForcePeriscope);
    ka("Goog_AdSense_OsdAdapter.prototype.unloadAdBlock", ph.prototype.unloadAdBlock);
    var Q = p.googletag._vars_,
        xh = Q["#7#"],
        yh = Q["#20#"],
        Oe = function(a, b) {
            $e("files::getSrc", function() {
                if ("https:" == L.location.protocol && "http" == b) throw b = "https", Error("Requested url " + a + "/pagead/osd.js");
            });
            return [b, "://", a, "/pagead/osd.js"].join("")
        }(Q["#1#"], Q["#6#"] ? "https" : "http"),
        qh = xh,
        rh = yh;
    var zh = function(a, b) {
            var c = b[N(a)];
            return null != c ? bh(c) : null
        },
        Ah = function(a, b, c) {
            if (null != bh(b)) return !0;
            b = !1;
            for (var d = 0; d < a.length && !b; d++) b = null != zh(a[d], c);
            return b
        },
        Bh = function(a) {
            var b = a;
            "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
            return b
        },
        Ch = /\+/g,
        Dh = function(a) {
            var b = Q["#6#"];
            return a || b ? "https://" + Q["#3#"] : "http://" + Q["#2#"]
        },
        Eh = function() {
            var a = navigator.userAgent,
                b = a.indexOf("MSIE ");
            return -1 ==
                b ? 0 : parseFloat(a.substring(b + 5, a.indexOf(";", b)))
        },
        Fh = function() {
            var a = sd;
            return null != a && -1 != a.indexOf("MSIE ") && -1 == a.indexOf("IEMobile")
        },
        Gh = function(a, b) {
            var c = 0,
                d = [];
            a && (d.push(a.m), d.push(sg(a)), d.push(O(a)));
            if (b) {
                var e;
                e = [];
                for (var f = 0, g = b; g && 25 > f; g = g.parentNode, ++f) e.push(9 != g.nodeType && g.id || "");
                (e = e.join()) && d.push(e)
            }
            0 < d.length && (c = We(d.join(":")));
            return c.toString()
        },
        Hh = function(a, b) {
            if (null == b) return a;
            var c = a.indexOf("google_preview=", a.lastIndexOf("?")),
                d = a.indexOf("&", c); - 1 == d &&
                (d = a.length - 1, --c);
            return a.substring(0, c) + a.substring(d + 1, a.length)
        },
        Ih = {
            VISIBLE: "visible",
            HIDDEN: "hidden",
            PRERENDER: "prerender",
            Ya: "other"
        },
        Jh = function(a) {
            a = a || document;
            a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "visible";
            return ld(Ih, a) ? a : "other"
        };
    var Kh = function() {
            this.j = {};
            var a = Le.URL;
            null == R(this, "target_platform") && (this.j.target_platform = "DESKTOP");
            for (var b = this.j, a = a.split("?"), a = a[a.length - 1].split("&"), c = 0; c < a.length; c++) {
                var d = a[c].split("=");
                if (d[0]) {
                    var e = d[0].toLowerCase();
                    if ("google_domain_reset_url" != e) try {
                        var f;
                        if (1 < d.length) {
                            var g = d[1];
                            f = window.decodeURIComponent ? decodeURIComponent(g.replace(Ch, " ")) : unescape(g)
                        } else f = "";
                        b[e] = f
                    } catch (h) {}
                }
            }
        },
        R = function(a, b) {
            return null == b ? null : a.j[b]
        };
    var Lh = function(a) {
            this.j = {};
            this.F = {};
            this.m = [];
            this.w = {};
            this.C = [];
            this.K = a;
            this.l = new Yg(a);
            this.u = {};
            this.G = {};
            this.A = {};
            this.o = {};
            this.J = this.B = "";
            this.v = !1;
            this.H = -1;
            this.I = 0
        },
        Mh = function(a, b, c) {
            b = new lg(b, c || !1);
            if (!b.m) return null;
            c = N(b);
            var d = a.j[c];
            if (d) return d;
            a.j[c] = b;
            a.F[b.m] || (a.F[b.m] = []);
            return a.F[b.m][b.getInstance()] = b
        },
        Oh = function(a) {
            return Ac(Nh(a), function(a) {
                return !a.w
            })
        },
        Ph = function(a, b) {
            -1 == Cc(a.m, function(a) {
                return N(b) == N(a)
            }) && a.m.push(b)
        },
        Qh = function(a, b) {
            for (var c = 0; c <
                b.length; c++) {
                var d = b[c],
                    e = N(d);
                e in a.j && (ng(d), Gc(a.m, function(a) {
                    return N(a) == e
                }))
            }
        },
        Rh = function(a) {
            a = Ac(Nh(a), function(a) {
                return !!a.w && !(a.w && a.F)
            });
            return ua(a, function(a) {
                return [a.m, a.getInstance()]
            })
        },
        Sh = function(a) {
            var b = 0;
            F(a.j, function() {
                b++
            });
            return b
        };
    Lh.prototype.toString = function() {
        var a = "[AdData:",
            b = [];
        F(this.j, function(a) {
            b.push(a.toString())
        });
        F(this.w, function(a, d) {
            b.push("[" + d + "," + a + "]")
        });
        a += b.join();
        return a + "]"
    };
    var Th = function(a, b) {
            if (b) {
                var c = b.getAdUnitPath(),
                    d = b.getSlotId().getInstance();
                return a.j[c + "_" + d] || null
            }
            return null
        },
        Nh = function(a) {
            var b = [];
            F(a.j, function(a) {
                b.push(a)
            });
            return b
        },
        Uh = function(a, b) {
            var c = b || Nh(a),
                c = ua(c, function(a) {
                    return a.G
                });
            Kc(c);
            return c
        },
        Vh = function(a) {
            var b = [];
            F(a.w, function(a, d) {
                b.push(M(d) + "=" + M(a))
            });
            0 < a.C.length && ("excl_cat" in a.w || b.push(M("excl_cat") + "=" + M(a.C.join(","))));
            return b.join("&")
        },
        Wh = function(a, b) {
            var c = a.A[N(b)],
                d;
            if (c)
                if (c) try {
                    var e = window.top,
                        f = new qd(0,
                            0),
                        g, h = Nd(c);
                    g = h ? Ud(h) : window;
                    do {
                        var l;
                        if (g == e) l = lf(c);
                        else {
                            var m = jf(c);
                            l = new qd(m.left, m.top)
                        }
                        h = l;
                        f.x += h.x;
                        f.y += h.y
                    } while (g && g != e && g != g.parent && (c = g.frameElement) && (g = g.parent));
                    d = f
                } catch (n) {
                    d = new qd(-12245933, -12245933)
                } else d = null;
                else d = null;
            return d
        };
    var Xh = function() {
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
        this.B = this.C = "";
        this.A = !1;
        this.videoStreamCorrelator = NaN;
        this.o = 0
    };
    var Yh = function(a, b) {
            this.url = a;
            this.fa = b;
            this.Ha = !1;
            this.depth = w(void 0) ? void 0 : null
        },
        Zh = function() {
            this.l = p.top == p ? 1 : Xb(p.top) ? 2 : 3;
            3 != this.l && Date.parse(p.top.document.lastModified);
            var a = p,
                b = [],
                c = null,
                d = null;
            do {
                var e = a;
                Xb(e) ? (c = e.location.href, d = e.document.referrer || null) : (c = d, d = null);
                b.push(new Yh(c, e));
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
                    a[e - 1], c.Ha = !0);
            this.j = b
        };
    var bi = function(a) {
            this.u = document;
            this.j = a || 0;
            this.l = $h(this, "__gads=");
            this.v = this.o = !1;
            ai(this)
        },
        ci = function(a, b) {
            if (b._cookies_ && b._cookies_.length && (a.m = b._cookies_[0], null != a.m && (a.l = a.m._value_, null != a.m && a.l))) {
                var c = new Date;
                c.setTime(1E3 * a.m._expires_);
                a.u.cookie = "__gads=" + a.l + "; expires=" + c.toGMTString() + "; path=" + a.m._path_ + "; domain=." + a.m._domain_
            }
        },
        ai = function(a) {
            if (!a.l && !a.v && 1 != a.j) {
                a.u.cookie = "GoogleAdServingTest=Good";
                var b = "Good" == $h(a, "GoogleAdServingTest=");
                if (b) {
                    var c = new Date;
                    c.setTime((new Date).valueOf() + -1);
                    a.u.cookie = "GoogleAdServingTest=; expires=" + c.toGMTString()
                }
                a.o = b;
                a.v = !0
            }
        },
        $h = function(a, b) {
            var c = a.u.cookie,
                d = c.indexOf(b),
                e = ""; - 1 != d && (d += b.length, e = c.indexOf(";", d), -1 == e && (e = c.length), e = c.substring(d, e));
            return e
        },
        di = null,
        ei = function(a) {
            null == di && (di = new bi(a));
            return di
        };
    var Eg = new function(a) {
            this.l = [];
            this.j = {};
            for (var b = 0, c = arguments.length; b < c; ++b) this.j[arguments[b]] = ""
        },
        fi = [],
        hi = function(a, b, c) {
            c = c || [];
            a = new gi(a);
            if (rf.apply(a, c)()) {
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
                                var l = h.match(/\bdeid=([\d,]+)/);
                                g = l && l[1] || "";
                                break a
                            }
                        } catch (m) {}
                        g = ""
                    }(g = (g = (g = g.match(new RegExp("\\b(" + c.join("|") + ")\\b"))) && g[0] || null) ? g : Cg ? null : Yb(c, b)) && Dg(f,
                        g, d)
                }
            }
            fi.push(a);
            return a
        },
        gi = function(a) {
            var b = Eg;
            this.j = a;
            this.l = b;
            this.m = "exp" + (this[ga] || (this[ga] = ++ha));
            this.l.j[this.m] = ""
        },
        ii = function(a, b) {
            var c;
            if (b in a.j) {
                c = a.l;
                var d = a.m;
                c = a.j[b] == (c.j.hasOwnProperty(d) ? c.j[d] : "")
            } else c = !1;
            return c
        },
        ji = function(a) {
            for (var b = 0; b < fi.length; ++b) {
                var c = fi[b],
                    d = c.j,
                    e = {},
                    f = void 0;
                for (f in d) e[d[f]] = f;
                d = e[a];
                if (null != d) {
                    d in c.j && Dg(c.l, c.j[d], c.m);
                    return
                }
            }
            Ec(Eg.l, a) || Dg(Eg, a)
        },
        ki = Q["#18#"],
        li = Ec(["prerender"], Jh(void 0));
    hi({
        control: "108809009",
        experiment: "108809010"
    }, ki, [function(a) {
        return function() {
            return a
        }
    }(li)]);
    hi({
        branch_1: "108809028",
        branch_2: "108809029"
    }, Q["#27#"]);
    var mi = hi({
        control: "108809030",
        experiment: "108809031"
    }, Q["#28#"]);
    ii(mi, "experiment") || ii(mi, "control") || ji("108809080");
    var ni = hi({
        control: "108809034",
        experiment: "108809035"
    }, Q["#31#"]);
    Q["#39#"] && ji(Q["#39#"]);
    hi({
        control: "108809045",
        experiment: "108809046"
    }, Q["#41#"]);
    var oi = hi({
        control: "108809075",
        experiment: "108809076"
    }, Q["#50#"]);
    hi({
        control: "108809049",
        experiment: "108809050"
    }, Q["#44#"]);
    var pi = hi({
        control: "108809051",
        experiment: "108809052"
    }, Q["#45#"]);
    var qi = function() {
        var a = p.googletag;
        return null != a && fa(a.getVersion) ? a.getVersion() : null
    };
    var ri = navigator;

    function si() {
        try {
            return ri.javaEnabled()
        } catch (a) {
            return !1
        }
    }

    function ti(a) {
        var b = 1,
            c = 0,
            d;
        if (void 0 != a && "" != a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    }

    function ui(a, b) {
        if (!a || "none" == a) return 1;
        a = String(a);
        "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return ti(a.toLowerCase())
    }
    var vi = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        wi = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
    var xi = function() {};
    var yi, zi = function() {};
    z(zi, xi);
    zi.prototype.j = function() {
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
    yi = new zi;
    var Ai = function(a, b) {
            this.m = a;
            this.o = b;
            this.l = 0;
            this.j = null
        },
        Bi = function(a) {
            var b;
            0 < a.l ? (a.l--, b = a.j, a.j = b.next, b.next = null) : b = a.m();
            return b
        },
        Ci = function(a, b) {
            a.o(b);
            100 > a.l && (a.l++, b.next = a.j, a.j = b)
        };
    var Di = function(a) {
            p.setTimeout(function() {
                throw a;
            }, 0)
        },
        Gi = function(a, b) {
            var c = a;
            b && (c = y(a, b));
            !fa(p.setImmediate) || p.Window && p.Window.prototype && p.Window.prototype.setImmediate == p.setImmediate ? (Ei || (Ei = Fi()), Ei(c)) : p.setImmediate(c)
        },
        Ei, Fi = function() {
            var a = p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !J("Presto") && (a = function() {
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
                    a = y(function(a) {
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
            if ("undefined" !== typeof a && !J("Trident") && !J("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (q(c.next)) {
                        c = c.next;
                        var a = c.ma;
                        c.ma = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        ma: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
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
    var Hi = function() {
            this.l = this.j = null
        },
        Ji = new Ai(function() {
            return new Ii
        }, function(a) {
            a.reset()
        });
    Hi.prototype.add = function(a, b) {
        var c = Bi(Ji);
        c.j = a;
        c.l = b;
        c.next = null;
        this.l ? this.l.next = c : this.j = c;
        this.l = c
    };
    Hi.prototype.remove = function() {
        var a = null;
        this.j && (a = this.j, this.j = this.j.next, this.j || (this.l = null), a.next = null);
        return a
    };
    var Ii = function() {
        this.next = this.l = this.j = null
    };
    Ii.prototype.reset = function() {
        this.next = this.l = this.j = null
    };
    var Oi = function(a, b) {
            Ki || Li();
            Mi || (Ki(), Mi = !0);
            Ni.add(a, b)
        },
        Ki, Li = function() {
            if (p.Promise && p.Promise.resolve) {
                var a = p.Promise.resolve();
                Ki = function() {
                    a.then(Pi)
                }
            } else Ki = function() {
                Gi(Pi)
            }
        },
        Mi = !1,
        Ni = new Hi,
        Pi = function() {
            for (var a = null; a = Ni.remove();) {
                try {
                    a.j.call(a.l)
                } catch (b) {
                    Di(b)
                }
                Ci(Ji, a)
            }
            Mi = !1
        };
    var Ri = function(a, b) {
            this.j = 0;
            this.w = void 0;
            this.m = this.l = this.u = null;
            this.o = this.v = !1;
            if (a != ba) try {
                var c = this;
                a.call(b, function(a) {
                    Qi(c, 2, a)
                }, function(a) {
                    Qi(c, 3, a)
                })
            } catch (d) {
                Qi(this, 3, d)
            }
        },
        Si = function() {
            this.next = this.m = this.l = this.o = this.j = null;
            this.u = !1
        };
    Si.prototype.reset = function() {
        this.m = this.l = this.o = this.j = null;
        this.u = !1
    };
    var Ti = new Ai(function() {
            return new Si
        }, function(a) {
            a.reset()
        }),
        Ui = function(a, b, c) {
            var d = Bi(Ti);
            d.o = a;
            d.l = b;
            d.m = c;
            return d
        };
    Ri.prototype.then = function(a, b, c) {
        return Vi(this, fa(a) ? a : null, fa(b) ? b : null, c)
    };
    Ri.prototype.then = Ri.prototype.then;
    Ri.prototype.$goog_Thenable = !0;
    var Xi = function(a, b) {
            a.l || 2 != a.j && 3 != a.j || Wi(a);
            a.m ? a.m.next = b : a.l = b;
            a.m = b
        },
        Vi = function(a, b, c, d) {
            var e = Ui(null, null, null);
            e.j = new Ri(function(a, g) {
                e.o = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (m) {
                        g(m)
                    }
                } : a;
                e.l = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        a(e)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.j.u = a;
            Xi(a, e);
            return e.j
        };
    Ri.prototype.B = function(a) {
        this.j = 0;
        Qi(this, 2, a)
    };
    Ri.prototype.C = function(a) {
        this.j = 0;
        Qi(this, 3, a)
    };
    var Qi = function(a, b, c) {
            if (0 == a.j) {
                a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.j = 1;
                var d;
                a: {
                    var e = c,
                        f = a.B,
                        g = a.C;
                    if (e instanceof Ri) Xi(e, Ui(f || ba, g || null, a)), d = !0;
                    else {
                        var h;
                        if (e) try {
                            h = !!e.$goog_Thenable
                        } catch (l) {
                            h = !1
                        } else h = !1;
                        if (h) e.then(f, g, a), d = !0;
                        else {
                            if (x(e)) try {
                                var m = e.then;
                                if (fa(m)) {
                                    Yi(e, m, f, g, a);
                                    d = !0;
                                    break a
                                }
                            } catch (n) {
                                g.call(a, n);
                                d = !0;
                                break a
                            }
                            d = !1
                        }
                    }
                }
                d || (a.w = c, a.j = b, a.u = null, Wi(a), 3 != b || Zi(a, c))
            }
        },
        Yi = function(a, b, c, d, e) {
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
            } catch (l) {
                h(l)
            }
        },
        Wi = function(a) {
            a.v || (a.v = !0, Oi(a.A, a))
        },
        $i = function(a) {
            var b = null;
            a.l && (b = a.l, a.l = b.next, b.next = null);
            a.l || (a.m = null);
            return b
        };
    Ri.prototype.A = function() {
        for (var a = null; a = $i(this);) {
            var b = this.j,
                c = this.w;
            if (3 == b && a.l && !a.u)
                for (var d = void 0, d = this; d && d.o; d = d.u) d.o = !1;
            if (a.j) a.j.u = null, aj(a, b, c);
            else try {
                a.u ? a.o.call(a.m) : aj(a, b, c)
            } catch (e) {
                bj.call(null, e)
            }
            Ci(Ti, a)
        }
        this.v = !1
    };
    var aj = function(a, b, c) {
            2 == b ? a.o.call(a.m, c) : a.l && a.l.call(a.m, c)
        },
        Zi = function(a, b) {
            a.o = !0;
            Oi(function() {
                a.o && bj.call(null, b)
            })
        },
        bj = Di;
    var fj = function(a, b) {
            var c = {
                timeoutMs: 0,
                withCredentials: !0
            };
            return new Ri(function(d, e) {
                var f = c || {},
                    g, h = f.Sa ? f.Sa.j() : yi.j();
                try {
                    h.open("POST", a, !0)
                } catch (l) {
                    e(new cj("Error opening XHR: " + l.message, a))
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
                        }!b && (b = 0 === h.status) && (b = Tg(a)[1] || null, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b =
                            b ? b.toLowerCase() : "", b = !("http" == b || "https" == b || "" == b));
                        b ? d(h) : e(new dj(h.status, a))
                    }
                };
                h.onerror = function() {
                    e(new cj("Network error", a))
                };
                var m;
                if (f.headers) {
                    for (var n in f.headers) m = f.headers[n], null != m && h.setRequestHeader(n, m);
                    m = f.headers["Content-Type"]
                }
                n = p.FormData && b instanceof p.FormData;
                void 0 !== m || n || h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                f.withCredentials && (h.withCredentials = f.withCredentials);
                f.responseType && (h.responseType = f.responseType);
                f.Ja &&
                    h.overrideMimeType(f.Ja);
                0 < f.Pa && (g = p.setTimeout(function() {
                    h.onreadystatechange = ba;
                    h.abort();
                    e(new ej(a))
                }, f.Pa));
                try {
                    h.send(b)
                } catch (v) {
                    h.onreadystatechange = ba, p.clearTimeout(g), e(new cj("Error sending XHR: " + v.message, a))
                }
            })
        },
        cj = function(a, b) {
            ec.call(this, a + ", url=" + b);
            this.url = b
        };
    z(cj, ec);
    cj.prototype.name = "XhrError";
    var dj = function(a, b) {
        cj.call(this, "Request Failed, status=" + a, b)
    };
    z(dj, cj);
    dj.prototype.name = "XhrHttpError";
    var ej = function(a) {
        cj.call(this, "Request timed out", a)
    };
    z(ej, cj);
    ej.prototype.name = "XhrTimeoutError";
    var gj = function() {};
    z(gj, xi);
    gj.prototype.j = function() {
        var a = new XMLHttpRequest;
        if ("withCredentials" in a) return a;
        if ("undefined" != typeof XDomainRequest) return new hj;
        throw Error("Unsupported browser");
    };
    var hj = function() {
        this.j = new XDomainRequest;
        this.readyState = 0;
        this.responseText = this.onreadystatechange = null;
        this.status = -1;
        this.j.onload = y(this.za, this);
        this.j.onerror = y(this.na, this);
        this.j.onprogress = y(this.Aa, this);
        this.j.ontimeout = y(this.Ba, this)
    };
    k = hj.prototype;
    k.open = function(a, b, c) {
        if (null != c && !c) throw Error("Only async requests are supported.");
        this.j.open(a, b)
    };
    k.send = function(a) {
        if (a)
            if ("string" == typeof a) this.j.send(a);
            else throw Error("Only string data is supported");
        else this.j.send()
    };
    k.abort = function() {
        this.j.abort()
    };
    k.setRequestHeader = function() {};
    k.za = function() {
        this.status = 200;
        this.responseText = this.j.responseText;
        ij(this, 4)
    };
    k.na = function() {
        this.status = 500;
        this.responseText = null;
        ij(this, 4)
    };
    k.Ba = function() {
        this.na()
    };
    k.Aa = function() {
        this.status = 200;
        ij(this, 1)
    };
    var ij = function(a, b) {
        a.readyState = b;
        if (a.onreadystatechange) a.onreadystatechange()
    };
    var jj = function(a) {
            if (a = Pd(a)) a.innerHTML = ""
        },
        kj = function(a, b) {
            var c = Pd(a);
            c && (c.style.display = b ? "" : "none")
        },
        lj = function(a, b, c, d, e) {
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
        mj = function(a, b) {
            if (0 != Eh()) {
                var c = a.getElementById(b);
                c && "hidden" == c.style.visibility && "none" == c.style.display && c.parentNode.removeChild(c)
            }
        },
        oj = function(a, b, c, d, e) {
            return new gg({
                ja: a,
                Ca: b,
                content: nj(c),
                size: new rd(d[0], d[1]),
                Ia: {
                    info: function() {},
                    j: function() {},
                    error: function() {}
                },
                xa: !0,
                qa: e
            })
        },
        rj = function(a, b, c) {
            c && (b = nj(b));
            if (0 != Eh()) {
                var d;
                try {
                    d = !!a.contentWindow.document
                } catch (e) {
                    d = !1
                }
                if (d) {
                    var f = b,
                        g = pj();
                    try {
                        var h = window.frames[a.name];
                        if (6 < parseInt(Eh(), 10) || 0 >
                            f.indexOf("http://" + Q["#1#"] + "/pagead/inject_object_div.js")) {
                            var l;
                            b: {
                                a = f;
                                b = document;
                                var m = Eh(),
                                    n;
                                if (!(n = 0 == m || isNaN(m) || 7 > m || 9 < m || b.documentMode && 10 <= b.documentMode)) {
                                    var v = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
                                    n = 6 <= (v ? parseFloat(v[1]) : 0)
                                }
                                if (!n)
                                    for (m = 0; m < a.length; ++m)
                                        if (127 < a.charCodeAt(m)) {
                                            l = !0;
                                            break b
                                        }
                                l = !1
                            }
                            if (l) {
                                var t = unescape(encodeURIComponent(f)),
                                    aa = Math.floor(t.length / 2);
                                a = [];
                                for (l = 0; l < aa; ++l) a[l] = String.fromCharCode(256 * t.charCodeAt(2 * l + 1) + t.charCodeAt(2 * l));
                                1 == t.length % 2 &&
                                    (a[aa] = t.charAt(t.length - 1));
                                f = a.join("")
                            }
                            h.contents = f;
                            h.location.replace("javascript:window.contents")
                        } else h.contents = f, h.location.replace("javascript:document.write(window.contents);document.close();")
                    } catch (Ma) {} finally {
                        qj(g)
                    }
                } else {
                    t = b;
                    h = pj();
                    try {
                        f = "google-ad-content-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ +new Date).toString(36)), window[f] = t, t = 'var adContent = window.parent["' + f + '"];window.parent["' + f + '"] = null;document.write(adContent);',
                            t = 6 == Eh() ? "window.onload = function() {document.write(\\'<sc\\' + \\'ript type=\"text/javascript\">document.domain = \"" + document.domain + '";' + t + "<\\/scr\\' + \\'ipt>\\');document.close(); };" : 'document.domain = "' + document.domain + '";' + t + "document.close();", a.src = 'javascript:\'<script type="text/javascript">' + t + "\x3c/script>'"
                    } catch (Kl) {
                        window[f] = null
                    } finally {
                        qj(h)
                    }
                }
            } else {
                h = b;
                try {
                    g = a.contentWindow ? a.contentWindow.document : a.contentDocument, -1 != navigator.userAgent.indexOf("Firefox") && g.open("text/html",
                        "replace"), g.write(h), g.close()
                } catch (Ll) {}
            }
        },
        nj = function(a) {
            if (!Boolean(a)) return a;
            var b = a.toLowerCase();
            return -1 < b.indexOf("<!doctype") || -1 < b.indexOf("<html") ? a : "<html>\n<head>\n<script>var inDapIF=true;\x3c/script>\n</head><body>" + a + "</body></html>\n"
        },
        sj = function(a, b) {
            var c = (b || document).getElementById(a);
            if (c && c.style.height && c.style.width) {
                for (var c = [c.style.width, c.style.height], d = 0; d < c.length; ++d)
                    if (2 < c[d].length && "px" == c[d].substring(c[d].length - 2)) c[d] = parseInt(c[d], 10);
                    else return null;
                return c
            }
            return null
        },
        pj = function() {
            var a = [],
                b = document.getElementsByTagName("base");
            if (b)
                for (var c = 0, d = b.length; c < d; ++c) {
                    var e = b[c],
                        f = e.getAttribute("target");
                    f && (a.push({
                        ta: e,
                        La: f
                    }), e.removeAttribute("target"))
                }
            return a
        },
        qj = function(a) {
            if (a)
                for (var b = 0, c = a.length; b < c; ++b) {
                    var d = a[b];
                    d.ta.setAttribute("target", d.La)
                }
        };
    var tj = function(a, b) {
            var c;
            c = Q["#6#"] ? "https://" + Q["#33#"] : "http://" + Q["#33#"];
            if (!b || 0 > b || 1 < b) b = 0;
            this.m = Math.random() < b;
            this.l = a;
            this.j = c + "/pagead/gen_204?id=" + M(a)
        },
        S = function(a, b, c) {
            b && b.match(/^\w+$/) && c && (a.j += "&" + b + "=" + M(c))
        },
        uj = function(a, b) {
            var c = qi();
            null != c && S(a, "vrg", "" + c);
            S(a, "vrp", "68r2");
            var c = document,
                d = window,
                e = Uh(b);
            0 < e.length && (S(a, "pub_id", e[0]), 3 >= e.length || (e = Jc(e, 0, 3), e.push("__extra__")), S(a, "nw_id", e.join(",")));
            S(a, "nslots", Sh(b).toString());
            e = Fg();
            0 < e.length && S(a, "eid",
                e.join());
            S(a, "pub_url", c.URL);
            null != bh(b.l) && d.top != d || S(a, "pub_ref", c.referrer)
        },
        vj = function(a) {
            a.m && a.l && a.j && dc(window, a.j)
        };
    var wj = function(a, b, c, d, e) {
        this.j = b;
        this.u = c;
        this.m = d;
        this.v = a;
        this.l = e;
        this.o = "";
        this.G = xg;
        this.w = [];
        this.F = []
    };
    wj.prototype.T = function(a) {
        if (!r(a)) return "";
        if ("sra" == this.v) 0 == a.length && (a = Nh(this.j));
        else {
            if (0 == a.length) return "";
            1 < a.length && (a = [a[0]])
        }
        this.B();
        this.C(a);
        return this.o
    };
    wj.prototype.C = function(a) {
        try {
            var b, c = "",
                d = 0;
            "prerender" == Jh(document) ? (c = "108809008", d = Q["#17#"]) : (c = "108809007", d = Q["#16#"]);
            b = Yb([c], d);
            T(this, "eid", (b ? Hc(this.l.l, b) : this.l.l).join())
        } catch (e) {}
        this.m && 0 !== this.m.j && T(this, "co", this.m.j);
        b = this.j.H; - 1 !== b && T(this, "tfcd", b);
        1 === this.j.I && T(this, "kfa", 1);
        T(this, "sc", Q["#6#"] ? 1 : 0);
        Boolean(window.postMessage) && T(this, "sfv", "1-0-2");
        if ("sra" == this.v) {
            b = a.length;
            for (c = 0; c < b; c++) {
                var d = a[c].m,
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
            for (c = 0; c < a.length; ++c) b.push(sg(a[c]));
            T(this, "prev_iu_szs", b.join());
            b = [];
            c = !1;
            for (d = 0; d < a.length; ++d) f = a[d].j.getFirstLook(), 0 != f && (c = !0), b.push(f);
            (b = c ? b.join() : void 0) && T(this, "fla",
                b);
            if (a.length) {
                b = "";
                for (c = 0; c < a.length; ++c) b += a[c].j.getOutOfPage() ? "1" : "0";
                b = parseInt(b, 2)
            } else b = 0;
            b && T(this, "ists", b);
            xj(this);
            c = null;
            b = [];
            for (c = 0; c < a.length; ++c) b.push(tg(a[c]));
            c = b.join("|");
            c.length == b.length - 1 && (c = null);
            T(this, "prev_scp", c)
        } else b = a[0].j.gtfcd(), -1 !== b && T(this, "tfcd", b), b = a[0], T(this, "iu", b.m), T(this, "sz", sg(b)), (c = b.j.getFirstLook()) && T(this, "fl", c), b.j.getClickUrl() && T(this, "click", b.j.getClickUrl()), b.j.getOutOfPage() && T(this, "ists", "1"), b in this.j.o && T(this, "logonly",
            "1"), xj(this), b = a[0], c = tg(b), T(this, "scp", c), b = b.j.getAudExtId(), 0 < b && T(this, "audextid", b);
        b = a[0].l;
        c = Ah(a, this.j.l, this.j.u);
        d = this.l.F;
        f = 3 == this.l.u;
        g = Q["#46#"];
        h = 0;
        1 != this.l.u && (h |= 1);
        b && (h |= 2);
        c && (h |= 4);
        d && (h |= 8);
        f && (h |= 16);
        g && (h |= 32);
        b = h;
        0 < b && T(this, "eri", b);
        "prerender" == Jh() && T(this, "d_imp", 1);
        b = window;
        c = document;
        T(this, "cust_params", Vh(this.j));
        this.m && 1 != this.m.j && (T(this, "cookie", this.m.l), this.m.o && T(this, "cookie_enabled", "1"));
        (d = this.j.B) && T(this, "uule", d);
        this.m && 1 != this.m.j && (b = (bh(this.j.l) ||
            (b.top == b ? c.URL : c.referrer)) != c.URL ? c.domain : "") && T(this, "cdm", b);
        null != R(this.u, "google_preview") && T(this, "gct", R(this.u, "google_preview"));
        this.A(new Date, a, window);
        b = {};
        b.u_tz = -(new Date).getTimezoneOffset();
        var l;
        try {
            l = L.history.length
        } catch (m) {
            l = 0
        }
        b.u_his = l;
        b.u_java = !!L.navigator && "unknown" != typeof L.navigator.javaEnabled && !!L.navigator.javaEnabled && L.navigator.javaEnabled();
        L.screen && (b.u_h = L.screen.height, b.u_w = L.screen.width, b.u_ah = L.screen.availHeight, b.u_aw = L.screen.availWidth, b.u_cd = L.screen.colorDepth);
        L.navigator && L.navigator.plugins && (b.u_nplug = L.navigator.plugins.length);
        L.navigator && L.navigator.mimeTypes && (b.u_nmime = L.navigator.mimeTypes.length);
        yj(this, b);
        p.devicePixelRatio && U(this, "u_sd", Number(p.devicePixelRatio.toFixed(3)));
        var n;
        try {
            n = Ve()
        } catch (v) {
            n = "0"
        }
        U(this, "flash", n);
        c = window;
        n = c.document;
        l = "sra" == this.v ? bh(this.j.l) : zh(a[0], this.j.u) || bh(this.j.l);
        if (ii(oi, "experiment")) null != l || (l = Hh(bh(this.j.l) || (c.top == c ? n.URL : n.referrer), R(this.u, "google_preview"))), T(this, "url", l), Ah(a, this.j.l,
            this.j.u) && c.top != c || T(this, "ref", n.referrer);
        else {
            d = Hh(n.URL, R(this.u, "google_preview"));
            a = Hh(n.referrer, R(this.u, "google_preview"));
            f = new Zh;
            n = f.j[f.j.length - 1].url;
            b = f.j[0].depth;
            var t;
            null != l ? (t = d, c.top != c && (a = "", n && (n = Sg(n)))) : l = d;
            if (null != b && 0 < b && (T(this, "nhd", b), c.location.ancestorOrigins)) {
                d = f.j;
                c = [];
                for (f = 1; f < d.length && 27 > f; f++) d[f] && d[f].url && (c[f - 1] = d[f].url);
                d = new Zh;
                c = zj(c.reverse(), d.j[d.j.length - 1].url || "");
                T(this, "iag", c)
            }
            T(this, "url", l);
            null != t && t != l && T(this, "loc", t);
            T(this, "ref",
                a);
            null != b && 0 < b && T(this, "top", n)
        }
        t = window.document;
        l = t.scripts;
        T(this, "dssz", l.length);
        a = [];
        for (n = l.length; 0 <= n && 26 > a.length;) null != l[n] && null != l[n].src && "" != l[n].src && a.push(l[n].src), n--;
        l = new Zh;
        T(this, "icsg", zj(a.reverse(), l.j[l.j.length - 1].url || ""));
        a = Error();
        a.stack && (l = a.stack, n = l.split(/\r\n|\r|\n/).length, "Error" == l.slice(0, 5) && n--, l = n - 10, 0 > l && (l = 0, n = new tj("gpt_negative_stack_trace", Q["#23#"]), uj(n, this.j), S(n, "stackTrace", a.stack), vj(n)), T(this, "std", l));
        t.currentScript && t.currentScript.text &&
            T(this, "csl", t.currentScript.text.length);
        T(this, "vrg", qi());
        T(this, "vrp", "68r2")
    };
    var Aj = function(a, b) {
            for (var c = b.length, d = [], e = 0; e < c; e++) {
                var f = Gh(b[e]);
                b[e].H = f;
                d.push(f)
            }
            T(a, "adks", d.join(","))
        },
        yj = function(a, b) {
            F(b, function(a, b) {
                U(this, b, a)
            }, a)
        },
        xj = function(a) {
            a.m && 1 == a.m.j || T(a, "ppid", a.j.J)
        };
    wj.prototype.A = function(a, b, c) {
        var d = c.document;
        T(this, "lmt", (Date.parse(d.lastModified) / 1E3).toString());
        U(this, "dt", a.getTime());
        if (d.body) {
            a = d.body.scrollHeight;
            var e = d.body.clientHeight;
            e && a && T(this, "cc", Math.round(100 * e / a).toString())
        }
        a = R(this.u, "deb");
        null != a && T(this, "deb", a);
        a = R(this.u, "haonly");
        null != a && T(this, "haonly", a);
        a = eh(c, d);
        Me(a, y(function(a, b) {
            T(this, b, a)
        }, this));
        d = Xg(c, d).Da || null;
        null != d && T(this, "frm", d);
        if (d = mh(!0, c)) T(this, "biw", d.width), T(this, "bih", d.height);
        c.top != c && (c = mh(!1,
            c)) && (T(this, "isw", c.width), T(this, "ish", c.height));
        this.l.o && T(this, "oid", this.l.o);
        if ("sra" == this.v) Aj(this, b);
        else {
            if (c = Wh(this.j, b[0])) T(this, "adx", Math.round(c.x)), T(this, "ady", Math.round(c.y));
            c = b[0].H || Gh(b[0], this.j.G[N(b[0])]);
            T(this, "adk", c)
        }
        c = oh();
        0 < c && T(this, "osd", c);
        c = this.j.l;
        d = "";
        "sra" == this.v ? d = dh(b, c, this.j.u, this.G) : (b = this.j.u[N(b[0])], null == b ? b = c : $g(b, c), b = ah(b), d = b.T());
        d && (this.o += "&" + d)
    };
    wj.prototype.B = function() {
        var a = !1;
        Boolean(this.j.B) ? a = !1 : a = Q["#46#"] || ii(mi, "control");
        this.o = Dh(!a) + "/gampad/ads?";
        U(this, "gdfp_req", 1);
        T(this, "correlator", this.l.w);
        U(this, "output", this.l.G);
        U(this, "callback", this.l.v);
        U(this, "impl", this.l.m);
        this.l.persistentRoadblocksOnly && T(this, "per_only", 1);
        "sra" == this.v && T(this, "json_a", 1)
    };
    var T = function(a, b, c) {
            null != c && U(a, b, M("" + c))
        },
        U = function(a, b, c) {
            null != c && "" != c && (a.o = "?" != a.o.charAt(a.o.length - 1) ? a.o + ("&" + b + "=" + c) : a.o + (b + "=" + c))
        },
        Bj = function(a, b) {
            var c = b - 8;
            if (a.length > b) {
                var d = a.lastIndexOf("&", c); - 1 != d ? a = a.substring(0, d) : (a = a.substring(0, c), a = a.replace(/%\w?$/, ""));
                a += "&trunc=1"
            }
            return a
        },
        zj = function(a, b) {
            for (var c = "", d = 0; d < a.length && 26 > d; d++) {
                var e;
                null != a[d] && (e = Sg(a[d]));
                if ("" != b && e && e == Sg(b)) c = c + "11";
                else {
                    var f;
                    if (f = e) {
                        f = a[d];
                        var g = /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i,
                            h = /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(\:\d+)?($|(\/.*))/i,
                            l = /^https?:\/\/(tpc|pagead2).googlesyndication\.com(\:\d+)?($|(\/.*))/i,
                            m = /^https?:\/\/www.googletagservices\.com(\:\d+)?($|(\/.*))/i;
                        f = /^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(\:\d+)?($|(\/.*))/i.test(f) || g.test(f) || h.test(f) || l.test(f) || m.test(f)
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
    var Cj = function(a, b, c, d, e) {
        wj.call(this, a, b, c, d, e)
    };
    z(Cj, wj);
    Cj.prototype.A = function(a, b, c) {
        0 < navigator.userAgent.indexOf("MSIE ") && Zg(this.j.l, "google_encoding", document.charset, !1);
        wj.prototype.A.call(this, a, b, c);
        T(this, "ifi", b[0].I);
        c == c.top ? c = 0 : (a = [], a.push(c.document.URL), c.name && a.push(c.name), c = mh(!1, c, !1), a.push(c.width.toString()), a.push(c.height.toString()), c = We(a.join("")));
        0 != c && T(this, "ifk", c.toString())
    };
    Cj.prototype.C = function(a) {
        var b = a[0],
            c = window;
        c.google_unique_id ? ++c.google_unique_id : c.google_unique_id = 1;
        b.I = c.google_unique_id;
        this.l.A && (U(this, "hxva", 1), T(this, "cmsid", this.l.B), T(this, "vid", this.l.C));
        isNaN(this.l.videoPodNumber) || U(this, "pod", this.l.videoPodNumber);
        isNaN(this.l.videoPodPosition) || U(this, "ppos", this.l.videoPodPosition);
        isNaN(this.l.videoStreamCorrelator) || U(this, "scor", this.l.videoStreamCorrelator);
        wj.prototype.C.call(this, a);
        a = window;
        var b = a.document.domain,
            c = a.document.cookie,
            d = a.history.length,
            e = a.screen,
            f = a.document.referrer,
            g = Math.round((new Date).getTime() / 1E3),
            h = window.google_analytics_domain_name,
            b = "undefined" == typeof h ? ui("auto", b) : ui(h, b),
            l = -1 < c.indexOf("__utma=" + b + "."),
            m = -1 < c.indexOf("__utmb=" + b),
            h = Mg("google_persistent_state"),
            n;
        (n = Og(h)) || (n = h.S[Ng(14)] = {});
        h = n;
        n = !1;
        if (l) f = c.split("__utma=" + b + ".")[1].split(";")[0].split("."), m ? h.sid = f[3] + "" : h.sid || (h.sid = g + ""), h.vid = f[0] + "." + f[1], h.from_cookie = !0;
        else {
            h.sid || (h.sid = g + "");
            if (!h.vid) {
                n = !0;
                m = Math.round(2147483647 *
                    Math.random());
                l = [ri.appName, ri.version, ri.language ? ri.language : ri.browserLanguage, ri.platform, ri.userAgent, si() ? 1 : 0].join("");
                e ? l += e.width + "x" + e.height + e.colorDepth : window.java && (e = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), l += e.screen.width + "x" + e.screen.height);
                l = l + c + (f || "");
                for (f = l.length; 0 < d;) l += d-- ^ f++;
                h.vid = (m ^ ti(l) & 2147483647) + "." + g
            }
            h.from_cookie = !1
        }
        if (!h.cid) {
            var v;
            a: {
                g = 999;
                if (f = window.google_analytics_domain_name) f = 0 == f.indexOf(".") ? f.substr(1) : f, g = ("" + f).split(".").length;
                f = 999;
                c = c.split(";");
                for (e = 0; e < c.length; e++)
                    if (d = vi.exec(c[e]) || wi.exec(c[e])) {
                        if (d[1] == g) {
                            v = d[2];
                            break a
                        }
                        d[1] < f && (f = d[1], v = d[2])
                    }
            }
            n && v && -1 != v.search(/^\d+\.\d+$/) ? h.vid = v : v != h.vid && (h.cid = v)
        }
        h.dh = b;
        h.hid || (h.hid = Math.round(2147483647 * Math.random()));
        v = Mg();
        v = Og(v);
        U(this, "ga_vid", v.vid);
        U(this, "ga_sid", v.sid);
        U(this, "ga_hid", v.hid);
        U(this, "ga_fc", v.from_cookie);
        T(this, "ga_wpids", a.google_analytics_uacct)
    };
    var Dj = function(a, b, c, d) {
        var e = R(c, "api_experiment");
        gc(xc(e)) || G(ua(e.split(","), hc), ji);
        G(Fg(), function(a) {
            googletag._tmanager_.addFeature(a)
        });
        this.D = b;
        this.l = c;
        this.v = d;
        this.m = Math.floor(4503599627370496 * Math.random());
        this.Z = !1;
        this.j = a;
        K && Gd(9) && (yi = new gj)
    };
    Dj.prototype.F = function() {
        return "lean"
    };
    var Ej = function(a, b) {
        b && window.top != window ? a.Z = !0 : b = Math.floor(4503599627370496 * Math.random());
        a.m = Math.floor(b)
    };
    Dj.prototype.X = function() {
        return null
    };
    Dj.prototype.L = function() {
        return !1
    };
    Dj.prototype.Y = function() {};
    var Fj = function(a, b, c, d) {
        var e = new Xh;
        e.G = "json_html";
        e.m = a.C(a.j);
        e.u = c;
        e.v = d;
        e.j = b;
        return e
    };
    Dj.prototype.u = function(a) {
        a.w = this.m + "";
        a.l = Fg();
        a.F = this.Z
    };
    Dj.prototype.T = function(a) {
        this.u(a);
        return Gj(this, this.j ? "sra" : "single", a).T(a.j)
    };
    var Hj = function(a, b) {
            return b ? Bj(a, 8192) : Bj(a, 2048)
        },
        Jj = function(a, b, c, d) {
            b = Tg(b);
            fj(Pg(b[1], b[2], b[3], b[4], b[5], "nwids=" + M(d)), b[6]).then(function(a) {
                var b;
                a = a.responseText;
                a = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).replace(/\\x/g, "\\u00");
                var d = p.JSON.parse;
                try {
                    b = d(a)
                } catch (h) {
                    b = null
                }
                b && (Ij(b), c(b))
            }, function(a) {
                var b = new tj("gpt_post_error", Q["#23#"]);
                a.name && S(b, "name", a.name);
                a.status && S(b, "status", a.status);
                a.message && S(b, "message", a.message);
                uj(b, this.D);
                vj(b)
            }, a)
        },
        Ij = function(a) {
            r(a) ?
                G(a, Ij) : F(a, function(a) {
                    a._cookies_ && delete a._cookies_
                })
        },
        Kj = function(a, b, c, d) {
            var e = d || !1;
            G(b, function(a) {
                var b = Fj(this, [a], 1, c);
                this.u(b);
                b.m = this.C(!1);
                b = Hj(Gj(this, "single", b).T([a]), e);
                og(a, b)
            }, a)
        },
        Lj = function(a, b, c) {
            b in a.D.o || (c && a.L([b]), c = b.j.getCollapseEmptyDiv(), null == c && (c = "true" === R(a.l, "google_collapse_empty_div")), c && kj(O(b), !1))
        },
        Pj = function(a, b, c) {
            var d = [];
            if (a.j)
                if (r(b)) {
                    d = c || Nh(a.D);
                    c = [];
                    for (var e = {}, f = 0; f < d.length; ++f) {
                        for (var g = d[f], h = null, l = Math.min(b.length, f + 1), m = 0; m < l; m++)
                            if (null ==
                                e[m] && (h = b[m][g.m])) {
                                e[m] = !0;
                                break
                            }
                        h && (Mj(a, g, h), c.push(g))
                    }
                    d = c
                } else d = Nj(a, b);
            else {
                e = [];
                f = 0;
                for (g in b) e[f++] = g;
                1 < e.length || 0 == e.length ? a = null : (e = e[0], b = b[e], (c = (c ? c[0] : void 0) || Oj(a, e)) ? (Mj(a, c, b), a = c) : a = null);
                a && d.push(a)
            }
            return d
        },
        Nj = function(a, b) {
            var c = [];
            F(b, function(a, b) {
                var f = Oj(this, b);
                f && (Mj(this, f, a), c.push(f))
            }, a);
            return c
        },
        Mj = function(a, b, c) {
            b.o = c;
            b.F || (b.F = (new Date).getTime());
            b.j.fetchEnded();
            null != c._cookies_ && ci(a.v, c);
            c._persistent_for_stream_ && (a.D.o[b] = null)
        },
        Oj = function(a, b) {
            if (!a.j)
                for (var c =
                        a.D.m, d = c.length - 1; 0 <= d; --d)
                    if (c[d].m == b) {
                        var e = c[d];
                        if (!e.o) return e
                    }
            d = [];
            if (e = a.D.F[b])
                for (c = 0; c < e.length; ++c) e[c] && d.push(c);
            if (c = d.length ? d : null)
                for (d = 0; d < c.length; ++d)
                    if ((e = a.D.j[b + "_" + c[d]]) && !e.o) return e;
            return null
        },
        Qj = function() {
            p.googletag._getcook_ = 1
        };
    var Rj = function(a, b, c, d, e) {
        wj.call(this, a, b, c, d, e)
    };
    z(Rj, wj);
    Rj.prototype.B = function() {
        wj.prototype.B.call(this);
        U(this, "m_ast", "js");
        U(this, "markup", "html");
        U(this, "js", "afmc")
    };
    var Sj = function(a, b, c, d) {
        Dj.call(this, a, b, c, d);
        this.V = this.G = this.B = this.w = !1;
        this.I = this.J = "";
        this.videoStreamCorrelator = NaN;
        this.H = 0
    };
    z(Sj, Dj);
    Sj.prototype.F = function() {
        return "unknown"
    };
    Sj.prototype.u = function(a) {
        Sj.ra.u.call(this, a);
        a.A = this.V;
        a.B = this.I;
        a.C = this.J;
        a.o = this.H
    };
    var Tj = function(a) {
        var b = Rh(a.D);
        if (0 < b.length) {
            for (var c = {}, d = [], e = 0; e < b.length; ++e) c[b[e][0]] = !0;
            F(c, function(a, b) {
                d.push(b)
            });
            b = new tj("gpt_missing_cb", Q["#10#"]);
            S(b, "pending", d.join());
            S(b, "correlator", a.m.toString());
            S(b, "impl", a.F());
            uj(b, a.D);
            vj(b)
        }
    };
    Sj.prototype.ua = function() {
        Tj(this);
        if (this.j && !this.B) {
            var a = Sh(this.D),
                b = this.D.m.length;
            a != b && (a = new tj("gpt_sra_mismatch", Q["#11#"]), S(a, "correlator", this.m.toString()), S(a, "fslots", b.toString()), uj(a, this.D), vj(a))
        }
    };
    Sj.prototype.wa = function() {
        var a = new tj("gpt_req_disp_mismatch", Q["#23#"]);
        S(a, "fslots", this.D.m.length.toString());
        S(a, "impl", this.C(this.j));
        S(a, "sra", this.j ? "1" : "0");
        S(a, "correlator", this.m.toString());
        uj(a, this.D);
        vj(a)
    };
    var Gj = function(a, b, c) {
            switch (R(a.l, "target_platform")) {
                case "MOBILE":
                    return new Rj(b, a.D, a.l, a.v, c);
                default:
                    return new Cj(b, a.D, a.l, a.v, c)
            }
        },
        Uj = function(a, b, c) {
            a.H && b && (a = a.D.j[c], c = "", a && (c = a.j.getContentUrl()), wh().registerAdBlock(c, 3, "json_html", b))
        };
    var V = function(a, b, c, d) {
        Sj.call(this, a, b, c, d);
        this.o = [];
        this.A = {};
        this.K = 0;
        this.ba = {};
        this.ca = this.U = NaN;
        this.P = !1;
        this.N = NaN;
        this.aa = !1
    };
    z(V, Sj);
    V.prototype.F = function() {
        return this.j ? "gut_friendly_iframe_sra" : "gut_friendly_iframe"
    };
    V.prototype.C = function(a) {
        return a ? "fifs" : "fif"
    };
    V.prototype.u = function(a) {
        V.ra.u.call(this, a);
        a.persistentRoadblocksOnly = this.aa;
        a.videoPodNumber = this.U;
        a.videoPodPosition = this.ca;
        a.videoStreamCorrelator = this.videoStreamCorrelator
    };
    var Yj = function(a, b, c) {
            for (var d = b.j, e = 0; e < d.length; e++) Ph(a.D, d[e]);
            b = a.T(b);
            Boolean(p.JSON && p.JSON.parse) && (!K || Gd(10)) && (!yd || Gd(12)) && 2048 < b.length ? (Vj(a, b, d), c = d[c], a.v && 1 != p.googletag._getcook_ && (b = a.v, 1 == b.j || !b.l && !b.o ? b = null : (e = Dh(Boolean(a.D.B)) + "/gampad/cookie.js?", e += "domain=" + M(document.domain), e = e + "&callback=window.parent.googletag.impl.pubads.setCookieInfo" + ("&iu=" + c.G), b.l && (e += "&cookie=" + M(b.l)), b.o && (e += "&cookie_enabled=1"), b = e), b && (b = '<script src = "' + Bh(b) + '">\x3c/script>', Wj(c,
                b)))) : Xj(a, b, d, c);
            Qj();
            a.j || (a.ba[N(d[0])] = setTimeout(y(a.sa, a), Q["#13#"]))
        },
        Zj = function(a, b, c) {
            var d = "";
            c && (d += '<script type="text/javascript">function callbackProxy(adContents) { ', d += "window.parent.googletag.impl.pubads.setAdContentsBySlotForAsync(adContents, " + a + ");}", d += "\x3c/script>");
            return d += '<script src = "' + b + '">\x3c/script>'
        },
        Xj = function(a, b, c, d) {
            b = Hj(b, !1);
            var e = Bh(b);
            a.j ? Kj(a, c, "callbackProxy") : og(c[0], e);
            ak(a, c, d);
            b = ++a.K;
            a.A[b] = c;
            a = Zj(b, e, a.j || !(c[0] in a.D.o));
            googletag._tmanager_.tickRepeated("start_ad_fetch_period",
                b, c[0].l);
            if (ii(ni, "experiment") && null == document.getElementById(O(c[d])) && (d = Cc(c, function(a) {
                    return null != document.getElementById(O(a))
                }), -1 == d)) return;
            Wj(c[d], a)
        },
        Vj = function(a, b, c) {
            b = Hj(b, !0);
            var d = Bh(b);
            a.j ? Kj(a, c, "callbackProxy", !0) : og(c[0], d);
            var e = ++a.K;
            a.A[e] = c;
            d = y(function(a) {
                !this.j && c[0] in this.D.o || bk(this, a, e)
            }, a);
            Jj(a, b, d, Uh(a.D, c).join(","));
            googletag._tmanager_.tickRepeated("start_ad_fetch_period", e, c[0].l)
        },
        Wj = function(a, b) {
            var c = document,
                d = P(a) + "__hidden__",
                e = c.getElementById(d);
            if (!e) {
                e = O(a);
                e = c.getElementById(e);
                if (null == e) return;
                e = lj(e, d, !0, [0, 0], c)
            }
            rj(e, b, !1)
        },
        ck = function(a) {
            return P(a) + "__container__"
        },
        fk = function(a, b) {
            var c = document;
            if (!(b in a.D.o)) {
                var d = O(b),
                    e = c.getElementById(d);
                if (e) {
                    for (var d = ck(b), f = P(b) + "__hidden__", e = e.childNodes, g = !1, h = 0; h < e.length; ++h)
                        if (1 == e[h].nodeType) {
                            var l = e[h];
                            if (l.id != d && l.id != f) {
                                g = !0;
                                break
                            }
                        }(g = g || dk(c, b)) && ek(b)
                }
            }
        },
        dk = function(a, b) {
            var c = a.getElementById(ck(b));
            return Boolean(c) && Bc(Xd(c), function(a) {
                return a.id != P(b)
            })
        };
    V.prototype.Y = function(a, b) {
        var c = Pc(a, function(a) {
            return 0 != rg(a).length
        });
        c[!1] && G(c[!1], function(a) {
            Lj(this, a, !0)
        }, this);
        if (a = c[!0]) {
            q(b.videoStreamCorrelator) ? this.videoStreamCorrelator = b.videoStreamCorrelator : (c = !0, q(b.changeCorrelator) && (c = b.changeCorrelator), c && Ej(this));
            this.U = b.videoPodNumber || NaN;
            this.ca = b.videoPodPosition || NaN;
            this.aa = b.persistentRoadblocksOnly || !1;
            this.P = b.clearUnfilledSlots || !1;
            Qh(this.D, a);
            this.N = a.length;
            for (c = 0; c < a.length; ++c) fk(this, a[c]);
            if (!this.w) {
                var d = y(function(a) {
                    return Fj(this,
                        a, b.isVideoRefresh ? 3 : 2, "callbackProxy")
                }, this);
                if (this.j) gk(this, d(a), 0);
                else
                    for (c = 0; c < a.length; ++c) gk(this, d([a[c]]), 0)
            }
        }
    };
    V.prototype.L = function(a) {
        for (var b = 0; b < a.length; ++b) ek(a[b]), hk(this, a[b]);
        return !0
    };
    var ek = function(a) {
            var b = !!a.u;
            ik(a);
            var c = O(a);
            if (b) {
                var d = document.getElementById(c);
                if (d) {
                    var e = ck(a) + "__to_be_removed__";
                    a = Tb(d.childNodes);
                    G(a, function(a) {
                        1 == a.nodeType && a.id == e || d.removeChild(a)
                    })
                }
            } else jj(c)
        },
        jk = function(a, b) {
            var c = document,
                d = rg(b);
            if (0 != d.length) {
                var e = d[0];
                1 < d.length && (e = sj(O(b), c) || e);
                var d = P(b),
                    f = c.getElementById(d);
                if (!f) {
                    f = O(b);
                    f = c.getElementById(f);
                    if (null == f) return;
                    var g = c.createElement("div");
                    g.id = ck(b);
                    g.name = g.id;
                    g.style.border = "0pt none";
                    a.D.v && (g.style.margin =
                        "auto", g.style.textAlign = "center");
                    f.appendChild(g);
                    f = lj(g, d, !1, e, c);
                    Zb(f, "load", function() {
                        b.B && googletag._tmanager_.tickRepeated("ad_render_period", b.v, b.l)
                    })
                }
                a.D.A[N(b)] = f
            }
        },
        bk = function(a, b, c) {
            var d = a.A[c];
            b = Pj(a, b, d);
            googletag._tmanager_.tickRepeated("ad_fetch_period", c, b[0].l);
            delete a.A[c];
            G(b, a.W, a);
            a.j || c != a.K || (clearTimeout(a.ba[N(d[0])]), kk(a))
        };
    V.prototype.sa = function() {
        var a = new tj("gpt_request_timeout", Q["#23#"]);
        uj(a, this.D);
        vj(a);
        kk(this)
    };
    var kk = function(a) {
            0 < a.o.length && (a.o.shift(), 0 < a.o.length && Yj(a, a.o[0], 0))
        },
        lk = function(a, b) {
            Ph(a.D, b);
            jk(a, b);
            null != b.o && a.W(b)
        },
        gk = function(a, b, c) {
            for (var d = 0; d < b.j.length; d++) jk(a, b.j[d]);
            a.j ? Yj(a, b, c) : (a.o.push(b), 1 == a.o.length && Yj(a, b, c))
        };
    V.prototype.R = function(a) {
        if (!this.j) {
            var b = document.getElementById(O(a));
            b && (this.D.G[N(a)] = b)
        }
    };
    V.prototype.$ = function() {};
    V.prototype.O = function() {};
    V.prototype.M = function(a) {
        hk(this, a);
        var b = null,
            c = -1;
        if (this.j) {
            lk(this, a);
            b = Oh(this.D);
            if (0 == b.length) return;
            c = Pc(b, function(a) {
                return 0 != rg(a).length
            });
            c[!1] && G(c[!1], function(a) {
                Lj(this, a, !0)
            }, this);
            b = c[!0];
            if (!b) return;
            c = a.w || !Ec(b, a) ? 0 : Cc(b, function(b) {
                return N(a) == N(b)
            })
        } else {
            if (0 == rg(a).length) {
                Lj(this, a, !0);
                return
            }
            b = [a];
            c = 0
        }
        this.w || this.B || (b = Fj(this, b, 1, "callbackProxy"), gk(this, b, c))
    };
    var hk = function(a, b) {
        var c = b.j.getDivStartsCollapsed();
        null == c && (c = "true" === R(a.l, "google_divs_start_collapsed"));
        c && kj(O(b), !1)
    };
    V.prototype.W = function(a) {
        try {
            mk(this, a)
        } catch (b) {}
    };
    var mk = function(a, b) {
            var c = document,
                d = b.o;
            googletag._tmanager_.tickRepeated("start_ad_render_period", wg(b), b.l);
            pg(b);
            if (null == d || d._empty_) Lj(a, b, a.P), qg(b, vg(b));
            else if (a.G) qg(b, vg(b));
            else {
                var e = d._html_;
                if (!u(e)) {
                    ik(b);
                    return
                }
                kj(O(b), !0);
                nk(a, b);
                var f = [d._width_, d._height_];
                d._use_safe_frame_ ? ok(a, c, b, f, e, function() {
                    googletag._tmanager_.tickRepeated("ad_render_period", b.v, b.l)
                }) : pk(a, c, b, f, e);
                qg(b, ug(b, d))
            }
            mj(c, P(b) + "__hidden__")
        },
        ik = function(a) {
            var b = document.getElementById(ck(a)),
                c = a.u;
            if (b) {
                var d =
                    document.getElementById(P(a)),
                    e = wh();
                e.unloadAdBlock && e.unloadAdBlock(d, !!a.u);
                a.u ? (b.style.display = "none", b.id += "__to_be_removed__", d.id = d.id + "__to_be_removed__", window.setTimeout(function() {
                    c && kg(c);
                    b.parentNode && b.parentNode.removeChild(b)
                }, Q["#24#"])) : b.parentNode.removeChild(b)
            } else c && kg(c);
            a.u = null
        },
        nk = function(a, b) {
            if (b.u) ik(b), jk(a, b);
            else {
                var c = document.getElementById(P(b)),
                    d = wh();
                d.unloadAdBlock && d.unloadAdBlock(c, !!b.u)
            }
        },
        pk = function(a, b, c, d, e) {
            b = b.getElementById(P(c));
            null != b && (b.width =
                String(d[0]), b.height = String(d[1]), rj(b, e, !0), Uj(a, b, N(c)))
        },
        ok = function(a, b, c, d, e, f) {
            var g = b.getElementById(ck(c));
            if (null != g) {
                for (var h; h = g.firstChild;) g.removeChild(h);
                a.D.v || (g.style.display = "inline-block");
                d = oj(g, P(c), e, d, f);
                c.u = d;
                Uj(a, b.getElementById(P(c)), N(c))
            }
        };
    V.prototype.X = function() {
        return isNaN(this.N) || this.j ? 0 == Oh(this.D).length : Oh(this.D).length == Sh(this.D) - this.N
    };
    var ak = function(a, b, c) {
            null == document.getElementById(O(b[c])) && qk(a);
            a.j && (Bc(b, function(a) {
                return null != document.getElementById(O(a))
            }) || rk(a))
        },
        qk = function(a) {
            var b = new tj("gpt_target_slot_has_no_div", Q["#29#"]);
            S(b, "sra", a.j ? "1" : "0");
            uj(b, a.D);
            vj(b)
        },
        rk = function(a) {
            var b = new tj("gpt_request_slots_have_no_divs", Q["#29#"]);
            uj(b, a.D);
            vj(b)
        };
    var sk = function(a, b, c, d) {
        Sj.call(this, a, b, c, d);
        this.A = -1;
        this.o = null
    };
    z(sk, Sj);
    sk.prototype.F = function() {
        return this.j ? "gut_sync_sra" : "gut_sync"
    };
    sk.prototype.C = function(a) {
        return a ? "ss" : "s"
    };
    var tk = function(a, b) {
            if (!a.w) {
                a.o = b.j;
                var c = a.T(b),
                    c = Bh(Hj(c, !1)),
                    d = ++a.A;
                googletag._tmanager_.tickRepeated("start_ad_fetch_period", d, b.j[0].l);
                a.j ? Kj(a, b.j, "googletag.impl.pubads.setAdContentsBySlotForSync") : og(b.j[0], c);
                Qj();
                document.write('<script type="text/javascript" src="' + c + '">\x3c/script>')
            }
        },
        vk = function(a, b) {
            var c = Pj(a, b, ii(pi, "experiment") ? a.o : void 0);
            a.o = null;
            googletag._tmanager_.tickRepeated("ad_fetch_period", a.A, c[0].l);
            if (a.j) c = a.D.m, 1 == c.length && uk(a, c[0]);
            else
                for (var d = 0; d < c.length; ++d) uk(a,
                    c[d])
        };
    sk.prototype.R = function(a) {
        if (!this.j) {
            var b;
            b = null;
            var c = Le.getElementsByTagName("script");
            c && c.length && (b = c[c.length - 1]);
            (b = b && b.parentElement) && (this.D.G[N(a)] = b)
        }
    };
    sk.prototype.$ = function(a) {
        var b = "google_temp_div_" + N(a),
            c = '<div id="' + pc(b) + '"></div>';
        document.write(c);
        (b = Pd(b)) && (this.D.A[N(a)] = b)
    };
    sk.prototype.O = function(a) {
        var b = this.D;
        a = N(a);
        var c = b.A[a];
        c && (c && c.parentNode && c.parentNode.removeChild(c), delete b.A[a])
    };
    sk.prototype.M = function(a) {
        Ph(this.D, a);
        var b = this.D.m.length;
        this.j ? 1 == b ? (b = Ac(Nh(this.D), function(a) {
            return 0 != rg(a).length
        }), Ec(b, a) || Lj(this, a, !1), b.length && tk(this, Fj(this, b, 1, "googletag.impl.pubads.setAdContentsBySlotForSync"))) : uk(this, a) : 0 == rg(a).length ? Lj(this, a, !1) : tk(this, Fj(this, [a], 1, a.l ? "googletag.impl.pubads.setPassbackAdContents" : "googletag.impl.pubads.setAdContentsBySlotForSync"))
    };
    var uk = function(a, b) {
            var c = document,
                d = b.o;
            pg(b);
            googletag._tmanager_.tickRepeated("start_ad_render_period", wg(b), b.l);
            if (null == d || d._empty_) Lj(a, b, !1), qg(b, vg(b));
            else if (a.G) qg(b, vg(b));
            else if (d._use_safe_frame_) {
                var e = function() {
                        googletag._tmanager_.tickRepeated("ad_render_period", b.v, b.l)
                    },
                    f = d._html_;
                if (f) {
                    var g = [d._width_, d._height_];
                    wk(a, c, b, g, f, e);
                    qg(b, ug(b, d))
                } else qg(b, vg(b))
            } else if (d._snippet_ && !d._is_afc_) xk(a, b, c);
            else if (Fh()) {
                c = "googletag.impl.pubads.syncAdSlotLoaded(this, '" + N(b) +
                    "'," + b.l + ");";
                e = "about:blank";
                if (g = R(a.l, "google_domain_reset_url"))
                    if (f = Sg(g), null === f || 0 <= f.indexOf(document.domain)) e = g;
                g = [d._width_, d._height_];
                yk(a, b, e, c, g, a.D.v)
            } else d = zk(a, b, c), c.write("<script>googletag.impl.pubads.createDomIframe(" + wc(d) + " ," + wc(N(b)) + "," + a.D.v + "," + b.l + ");\x3c/script>")
        },
        wk = function(a, b, c, d, e, f) {
            Ak(c, b);
            var g = P(c) + "__container__",
                h = '<div id="' + pc(g) + '"></div>';
            b.write(h);
            g = b.getElementById(g);
            null != g && (a.D.v ? g.style.margin = "auto" : g.style.display = "inline-block", d = oj(g, P(c),
                e, d, f), c.u = d, Uj(a, b.getElementById(P(c)), N(c)))
        },
        Bk = function(a, b) {
            var c = b.o,
                d = a.parentNode,
                e = c && c._html_;
            e ? (!c._expandable_ || c._is_afc_ && c._is_3pas_ ? (Zb(a, "load", function() {
                b.B && googletag._tmanager_.tickRepeated("ad_render_period", b.v, b.l)
            }), rj(a, e, !0)) : d.innerHTML = e, qg(b, ug(b, c))) : (d.removeChild(a), qg(b, vg(b)))
        },
        Ck = function(a, b, c, d) {
            b = O(b) + "_ad_container";
            var e = '<div id="' + pc(b) + '"';
            a.D.v && d ? (e += ' style="width:' + d._width_, e += 'px;margin:auto;">') : e += ">";
            d && (e += d._html_);
            c.write(e + "\n</div>\n");
            return b
        },
        Ak = function(a, b) {
            var c = b.getElementById(O(a));
            c && c.parentNode && "" === c.innerHTML && c.parentNode.removeChild(c)
        },
        xk = function(a, b, c) {
            Ak(b, c);
            var d = b.o;
            if (null != d) {
                var e = Ck(a, b, c, d);
                qg(b, ug(b, d));
                (c = c.getElementById(e)) && Uj(a, c, N(b))
            }
        },
        yk = function(a, b, c, d, e, f) {
            Ak(b, document);
            var g = P(b),
                h = [],
                l = e[0];
            e = e[1];
            c = Bh(c);
            h.push('<iframe id="', pc(g), '" name="', pc(g), '" width="', l, '" height="', e, '" vspace="0" hspace="0" allowtransparency="true" ', "scrolling=", a.K ? '"auto"' : '"no"', ' marginwidth="0" marginheight="0" frameborder="0" style=',
                '"border:0px;left:0;position:absolute;top:0;"', ' src="', c, '"');
            null != d && h.push(' onload="', d, '"');
            h.push("></iframe>");
            d = [];
            c = O(b) + "_ad_container";
            d.push('<div id="', pc(c), '"');
            f && d.push(' style="text-align:center" ');
            d.push(">");
            d.push('<ins style="position:relative;width:' + l + "px;height:" + e + 'px;border:none;display:inline-table;vertical-align:bottom;">' + ('<ins style="position:relative;width:' + l + "px;height:" + e + 'px;border:none;display:block;">' + h.join("") + "</ins>") + "</ins>");
            d.push("</div>");
            document.write(d.join(""));
            (f = document.getElementById(g)) && Uj(a, f, N(b))
        },
        zk = function(a, b, c) {
            Ak(b, c || document);
            return Ck(a, b, c || document)
        },
        Dk = function(a, b, c, d, e, f, g) {
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
        Ek = function(a, b, c, d, e, f) {
            e = Dk(a, "ins", e, c, d, "block");
            d = Dk(a, "ins", e, c, d, "inline-table");
            d.style.verticalAlign = "bottom";
            b = a.getElementById(b);
            f ? (a = Dk(a, "div", d, c, null, "block", "auto"),
                b.appendChild(a)) : b.appendChild(d)
        },
        Fk = function(a, b, c) {
            var d = document,
                e = b.o,
                f = e._width_,
                g = e._height_,
                h = e._html_,
                l = d.createElement("iframe"),
                m = P(b);
            l.id = m;
            l.name = m;
            l.width = f;
            l.height = g;
            l.vspace = 0;
            l.hspace = 0;
            l.allowTransparency = "true";
            l.scrolling = "no";
            l.marginWidth = 0;
            l.marginHeight = 0;
            l.frameBorder = 0;
            l.style.border = 0;
            l.style.position = "absolute";
            l.style.top = 0;
            l.style.left = 0;
            Zb(l, "load", function() {
                b.B && googletag._tmanager_.tickRepeated("ad_render_period", b.v, b.l)
            });
            Ek(d, a, f, g, l, c);
            l.contentWindow.document.write(h);
            l.contentWindow.document.write("<script>document.close();\x3c/script>");
            qg(b, ug(b, e))
        };
    var Gk = function() {
            this.m = this.j = this.l = null
        },
        W = function(a) {
            null == a.l && (a.l = new Lh(xg));
            return a.l
        },
        X = function(a) {
            if (null != a.j) return a.j;
            switch (R(Hk(a), "google_ad_impl")) {
                case "gut_sync_sra":
                    googletag._tmanager_.setSraMode(!0);
                    a.j = new sk(!0, W(a), Hk(a), ei(void 0));
                    googletag._tmanager_.addFeature("sync");
                    break;
                case "gut_friendly_iframe":
                    googletag._tmanager_.setSraMode(!1);
                    a.j = new V(!1, W(a), Hk(a), ei(void 0));
                    googletag._tmanager_.addFeature("fif");
                    break;
                case "gut_friendly_iframe_sra":
                    googletag._tmanager_.setSraMode(!0);
                    a.j = new V(!0, W(a), Hk(a), ei(void 0));
                    googletag._tmanager_.addFeature("fif");
                    break;
                default:
                    googletag._tmanager_.setSraMode(!1), a.j = new sk(!1, W(a), Hk(a), ei(void 0)), googletag._tmanager_.addFeature("sync")
            }
            var b = a.j;
            b.w = null != R(b.l, "google_nofetch") || Boolean(window.google_noFetch) || b.w;
            b.B = null != R(b.l, "google_disable_initial_load") || Boolean(window.google_DisableInitialLoad) || b.B;
            b.G = null != R(b.l, "google_norender") || b.G;
            var c = y(b.ua, b),
                d = window;
            d.attachEvent ? d.attachEvent("onload", c) : d.addEventListener &&
                d.addEventListener("load", c, !1);
            c = y(b.wa, b);
            d = window;
            d.attachEvent ? d.attachEvent("onunload", c) : d.addEventListener && d.addEventListener("unload", c, !1);
            b.H = wh().setupOse(b.m);
            return a.j
        },
        Hk = function(a) {
            null == a.m && (a.m = new Kh);
            return a.m
        },
        Ik = null,
        Y = function() {
            Ik || (Ik = new Gk);
            return Ik
        },
        Jk = null,
        Kk = function() {
            Jk || (Jk = new Gk);
            return Jk
        };
    var Lk = Q["#38#"],
        Mk = function(a, b) {
            var c = {
                methodId: a
            };
            b.name && (c.name = b.name);
            b.message && (c.message = b.message.substring(0, 512));
            b.fileName && (c.fileName = b.fileName);
            b.lineNumber && (c.lineNumber = b.lineNumber);
            b.stack && (c.stack = bc(b.stack, ""));
            return c
        },
        Ok = function(a, b) {
            Nk(a, b, void 0);
            throw b;
        },
        Nk = function(a, b, c) {
            if (!b.ia) try {
                b.ia = !0;
                var d = Lk;
                q(c) && 0 <= c && 1 >= c && (d = c);
                var e = Mk(a, b),
                    f = new tj("gpt_exception", d);
                try {
                    uj(f, W(Y()))
                } catch (g) {}
                F(e, function(a, b) {
                    S(f, b, a)
                });
                vj(f)
            } catch (h) {}
        };
    var Pk = function() {};
    k = Pk.prototype;
    k.addSlot = function(a) {
        if (!a) return null;
        var b = a.getAdUnitPath();
        return b && b.length ? Mh(W(Y()), a) : null
    };
    k.fillSlot = function(a) {
        var b = Y(),
            c = X(b);
        (a = Th(W(b), a)) && (null == a.o || c.j) && (c.R(a), c.$(a), c.M(a), c.O(a))
    };
    k.setCookieOptions = function(a) {
        Y();
        var b = ei(a);
        b.j = a;
        ai(b)
    };
    k.setTagForChildDirectedTreatment = function(a) {
        W(Y()).H = a
    };
    k.setKidsFriendlyAds = function(a) {
        W(Y()).I = a
    };
    k.passback = function(a) {
        if (a) {
            var b = a.getAdUnitPath();
            b && b.length && (b = Kk(), a = Mh(W(b), a, !0), X(b).M(a))
        }
    };
    k.disableInitialLoad = function() {
        window.google_DisableInitialLoad = !0
    };
    k.addAttribute = function(a, b) {
        var c = W(Y()),
            d = b;
        if (!gc(xc(a))) {
            gc(xc(d)) && (d = "");
            var e = c.w[a];
            c.w[a] = e ? e + "," + d : d
        }
    };
    k.clearAttribute = function(a) {
        var b = W(Y());
        gc(xc(a)) || b.w[a] && delete b.w[a]
    };
    k.addPageCategoryExclusion = function(a) {
        var b = W(Y());
        gc(xc(a)) || Fc(b.C, a)
    };
    k.clearPageCategoryExclusions = function() {
        W(Y()).C = []
    };
    k.addAdSensePageAttribute = function(a, b) {
        var c = W(Y());
        Zg(c.l, a, b)
    };
    k.addAdSenseSlotAttribute = function(a, b, c) {
        var d = W(Y());
        a && (a = Th(d, a)) && (a = N(a), null == d.u[a] && (d.u[a] = new Yg(d.K)), Zg(d.u[a], b, c))
    };
    k.enableSingleRequest = function() {
        var a = Hk(Y());
        null == R(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_sync_sra")
    };
    k.collapseEmptyDivs = function(a) {
        var b = Hk(Y());
        b.j.google_collapse_empty_div = "true";
        a && (b.j.google_divs_start_collapsed = "true")
    };
    k.enableAsyncRendering = function() {
        var a = Hk(Y());
        null == R(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe")
    };
    k.enableAsyncSingleRequest = function() {
        var a = Hk(Y());
        null == R(a, "google_ad_impl") && (a.j.google_ad_impl = "gut_friendly_iframe_sra")
    };
    k.setVideoContentInformation = function(a, b) {
        var c = X(Y());
        c.V = !0;
        c.J = a;
        c.I = b;
        c.videoStreamCorrelator = Math.floor(4503599627370496 * Math.random())
    };
    k.getVideoContentInformation = function() {
        var a = X(Y());
        return {
            cmsid: a.I,
            vid: a.J
        }
    };
    k.getVideoStreamCorrelator = function() {
        return X(Y()).videoStreamCorrelator
    };
    k.refresh = function(a, b) {
        var c = Y(),
            d = X(c),
            c = W(c),
            e = null,
            e = null != a ? Qk(a) : Nh(c);
        0 == e.length || d.Y(e, b)
    };
    k.getCorrelator = function() {
        return X(Y()).m + ""
    };
    k.setCorrelator = function(a) {
        Ej(X(Y()), a)
    };
    k.setMobilePlatform = function() {
        Hk(Y()).j.target_platform = "MOBILE"
    };
    k.setApiExperiment = function(a) {
        ji(a)
    };
    k.isAdRequestFinished = function() {
        return X(Y()).X()
    };
    k.isSlotAPersistentRoadblock = function(a) {
        if (!a) return !1;
        var b = W(Y());
        return !!(new lg(a, !1) in b.o)
    };
    k.clearNoRefreshState = function() {
        W(Y()).o = {}
    };
    k.clearSlotContents = function(a) {
        var b = Y(),
            c = X(b),
            b = W(b),
            d = null,
            d = a ? Qk(a) : Nh(b);
        return c.L(d)
    };
    k.setLocation = function(a) {
        W(Y()).B = a
    };
    k.setPublisherProvidedId = function(a) {
        W(Y()).J = a
    };
    k.getVersion = function() {
        return "68r2"
    };
    k.setCenterAds = function(a) {
        W(Y()).v = a
    };
    var Qk = function(a) {
            for (var b = [], c = W(Y()), d = 0; d < a.length; ++d) {
                var e = Th(c, a[d]);
                e && b.push(e)
            }
            return b
        },
        Rk = function(a, b) {
            var c;
            c = p.googletag || (p.googletag = {});
            c = c.impl || (c.impl = {});
            c = c.pubads || (c.pubads = {});
            c[a] || (c[a] = b)
        };
    Rk("createDomIframe", function(a, b, c, d) {
        try {
            var e;
            e = d ? Kk() : Y();
            var f = X(e),
                g;
            if (g = W(e).j[b]) {
                Fk(a, g, c);
                var h = document.getElementById(P(g));
                h && Uj(f, h, b)
            }
        } catch (l) {
            Ok(2401, l)
        }
    });
    Rk("setAdContentsBySlotForSync", function(a) {
        try {
            vk(X(Y()), a)
        } catch (b) {
            Ok(2403, b)
        }
    });
    Rk("setPassbackAdContents", function(a) {
        try {
            vk(X(Kk()), a)
        } catch (b) {
            Ok(2404, b)
        }
    });
    Rk("setAdContentsBySlotForAsync", function(a, b) {
        try {
            bk(X(Y()), a, b)
        } catch (c) {
            Ok(2405, c)
        }
    });
    Rk("syncAdSlotLoaded", function(a, b, c) {
        try {
            var d = X(c ? Kk() : Y());
            if (b) {
                var e = d.D.j[b];
                e && !e.C && (e.C = !0, Bk(a, e))
            }
        } catch (f) {
            Ok(2407, f)
        }
    });
    Rk("setCookieInfo", function(a) {
        try {
            var b;
            Y();
            b = ei(void 0);
            ci(b, a)
        } catch (c) {
            Ok(2408, c)
        }
    });
    var Sk = function() {
        try {
            googletag._tmanager_.tick("pubads_load_period");
            window.google_noFetch = !1;
            window.google_DisableInitialLoad = !1;
            try {
                var a = p.googletag.pubads;
                if (fa(a)) a().onGoogleAdsJsLoad(new Pk)
            } catch (b) {
                Nk(3002, b)
            }
        } catch (c) {
            Ok(3001, c)
        }
    };
    var Tk = null,
        Uk = Ad || Bd || yd || "function" == typeof p.atob;
    var Vk = H("#36#");
    var Xk = function(a, b, c) {
            var d = Wk++;
            this.j = new Ee(a, d, b);
            this.j.P = !0;
            this.j.addService(c);
            this.l = c
        },
        Wk = 1;
    k = Xk.prototype;
    k.setClickUrl = function(a) {
        try {
            return this.j.setClickUrl(a), this
        } catch (b) {
            I(1202, b)
        }
    };
    k.setTargeting = function(a, b) {
        try {
            return this.j.setTargeting(a, b), this
        } catch (c) {
            I(1204, c)
        }
    };
    k.setAudExtId = function(a) {
        try {
            return Qc(a) && (this.j.I = a), this
        } catch (b) {
            I(1205, b)
        }
    };
    k.setTagForChildDirectedTreatment = function(a) {
        try {
            if (0 === a || 1 === a) this.j.H = a;
            return this
        } catch (b) {
            I(1203, b)
        }
    };
    k.display = function() {
        try {
            Yk(this.l, this.j)
        } catch (a) {
            I(1201, a)
        }
    };
    var Zk = function(a, b) {
            this.j = a;
            this.l = b || {
                changeCorrelator: !0
            }
        },
        $k = function() {
            ae.call(this);
            this.w = !1;
            this.j = null;
            this.R = 0;
            this.K = -1;
            this.W = 0;
            this.J = {};
            this.C = {};
            this.M = [];
            this.X = this.L = "";
            this.v = this.V = this.$ = this.Z = !1;
            this.m = Vk ? !1 : !0;
            this.P = Vk;
            this.N = this.F = !1;
            this.u = [];
            this.I = [];
            this.A = [];
            this.ba = {};
            this.O = !1;
            this.B = -1;
            this.U = this.ca = "";
            this.o = [];
            null !== Vg(window.location.href, "google_force_safeframe_image") && this.o.push("108809020");
            null !== Vg(window.location.href, "google_force_sra") && this.o.push("108809056");
            "undefined" != typeof window.google_experimental_delay ? this.H = window.google_experimental_delay : (this.H = Yb([0, 100, 200, 400], 4 * H("#48#")), window.google_experimental_delay = this.H);
            var a = Yb(["108809043", "108809044"], 2 * H("#40#"));
            gc(xc(a)) || this.forceExperiment(a);
            a = Yb(["108809055", "108809056", "108809057"], 3 * H("#47#"));
            gc(xc(a)) || this.forceExperiment(a);
            Ec(this.o, "108809056") && (this.v = !0)
        };
    z($k, ae);
    var al = {
        adsense_ad_format: "google_ad_format",
        adsense_ad_types: "google_ad_type",
        adsense_allow_expandable_ads: "google_allow_expandable_ads",
        adsense_background_color: "google_color_bg",
        adsense_bid: "google_bid",
        adsense_border_color: "google_color_border",
        adsense_channel_ids: "google_ad_channel",
        adsense_content_section: "google_ad_section",
        adsense_cpm: "google_cpm",
        adsense_ed: "google_ed",
        adsense_encoding: "google_encoding",
        adsense_family_safe: "google_safe",
        adsense_feedback: "google_feedback",
        adsense_flash_version: "google_flash_version",
        adsense_font_face: "google_font_face",
        adsense_font_size: "google_font_size",
        adsense_hints: "google_hints",
        adsense_host: "google_ad_host",
        adsense_host_channel: "google_ad_host_channel",
        adsense_host_tier_id: "google_ad_host_tier_id",
        adsense_keyword_type: "google_kw_type",
        adsense_keywords: "google_kw",
        adsense_line_color: "google_line_color",
        adsense_link_color: "google_color_link",
        adsense_relevant_content: "google_contents",
        adsense_reuse_colors: "google_reuse_colors",
        adsense_targeting: "google_targeting",
        adsense_targeting_types: "google_targeting",
        adsense_test_mode: "google_adtest",
        adsense_text_color: "google_color_text",
        adsense_ui_features: "google_ui_features",
        adsense_ui_version: "google_ui_version",
        adsense_url_color: "google_color_url",
        alternate_ad_iframe_color: "google_alternate_color",
        alternate_ad_url: "google_alternate_ad_url",
        demographic_age: "google_cust_age",
        demographic_ch: "google_cust_ch",
        demographic_gender: "google_cust_gender",
        demographic_interests: "google_cust_interests",
        demographic_job: "google_cust_job",
        demographic_l: "google_cust_l",
        demographic_lh: "google_cust_lh",
        demographic_u_url: "google_cust_u_url",
        demographic_unique_id: "google_cust_id",
        document_language: "google_language",
        geography_override_city: "google_city",
        geography_override_country: "google_country",
        geography_override_region: "google_region",
        page_url: "google_page_url"
    };
    k = $k.prototype;
    k.set = function(a, b) {
        try {
            if (!(u(a) && 0 < a.length)) return this.log.j(E("PubAdsService.set", arguments), this, null), this;
            this.J[a] = b;
            this.log.info(Xa(a, String(b), this.getName()), this, null);
            return this
        } catch (c) {
            I(21, c)
        }
    };
    k.get = function(a) {
        try {
            return this.J[a]
        } catch (b) {
            I(22, b)
        }
    };
    k.getAttributeKeys = function() {
        try {
            var a = [];
            F(this.J, function(b, d) {
                a.push(d)
            });
            return a
        } catch (b) {
            I(23, b)
        }
    };
    k.display = function(a, b, c, d) {
        try {
            this.enable();
            var e = c ? Je(a, b, c) : Je(a, b);
            e.addService(this);
            d && e.setClickUrl(d);
            Ke(e.getSlotId().getDomId())
        } catch (f) {
            I(24, f)
        }
    };
    k.ga = function() {
        this.w || (oe().tick("_start_pubads_load_period"), 0 < this.u.length ? Sk() : Gi(this.ha, this));
        this.w = !0;
        this.j && Ec(this.o, "108809044") && bl(this)
    };
    k.ha = function() {
        this.w || oe().tick("_start_pubads_load_period");
        this.w = !0;
        this.j || Sk()
    };
    k.getName = function() {
        return "publisher_ads"
    };
    k.onGoogleAdsJsLoad = function(a) {
        if (!this.j) {
            this.j = a;
            this.log.info(hb("GPT"), this);
            this.j.setCookieOptions(this.R);
            this.j.setTagForChildDirectedTreatment(this.K);
            this.j.setKidsFriendlyAds(this.W);
            null === this.H || this.j.setApiExperiment(cl(this));
            G(this.o, function(a) {
                this.j.setApiExperiment(a)
            }, this);
            this.j.setCenterAds(this.P);
            Vk && (this.v = !1, this.j.setMobilePlatform());
            this.F && this.j.collapseEmptyDivs(this.N);
            Ec(this.o, "108809044") ? dl(this) && bl(this) : bl(this);
            if (0 < this.u.length)
                for (a = 0; a < this.u.length; ++a) this.da(this.u[a]);
            if (0 < this.I.length)
                for (a = 0; a < this.I.length; ++a) Yk(this, this.I[a]);
            A("pubadsReady", !0)
        }
    };
    k.ka = function(a) {
        this.m || (a.F = !1);
        ae.prototype.ka.call(this, a)
    };
    k.da = function(a) {
        if (te().m && !this.m) this.log.error(kb(), this);
        else if (this.w && this.ha(), this.j) {
            if (Ec(this.o, "108809044") && bl(this), el(this), fl(this, a))
                if (this.log.info(jb()), this.j.fillSlot(a), this.ba[a.getAdUnitPath()] = !0, this.j)
                    for (a = 0; a < this.A.length; a++) {
                        var b = this.A[a];
                        b.j[0].getAdUnitPath() in this.ba && (this.refresh(b.j, b.l), zc.splice.call(this.A, a, 1), a--)
                    } else this.log.error(ib(), this)
        } else if (this.m || this.w && 0 == this.u.length) {
            for (var b = !1, c = 0; c < this.u.length; ++c) a === this.u[c] && (b = !0);
            b || (this.log.info(lb(a.getAdUnitPath(),
                "GPT"), this, a), this.u.push(a))
        } else this.log.error(nb(a.getAdUnitPath()), this, a)
    };
    var fl = function(a, b) {
            if (a.j && null == a.j.addSlot(b)) return a.log.error(Vb(b.getAdUnitPath()), a, b), !1;
            for (var c = b.getAttributeKeys(), d = 0; d < c.length; ++d) c[d] in al ? a.j.addAdSenseSlotAttribute(b, al[c[d]], String(b.get(c[d]))) : a.log.j(pb(String(c[d]), String(b.get(c[d])), b.getAdUnitPath()), a, b);
            return !0
        },
        dl = function(a) {
            return Bc(a.getSlots(), function(a) {
                return !a.P
            })
        },
        bl = function(a) {
            if (!a.$ && a.j) {
                a.$ = !0;
                if (a.v) {
                    a.m ? a.j.enableAsyncSingleRequest() : a.j.enableSingleRequest();
                    el(a);
                    for (var b = a.getSlots(), c = 0; c <
                        b.length; ++c) fl(a, b[c])
                } else a.m && a.j.enableAsyncRendering();
                a.V && a.j.disableInitialLoad();
                gl(a);
                hl(a)
            }
        },
        el = function(a) {
            if (!a.Z) {
                a.Z = !0;
                for (var b = a.getAttributeKeys(), c = 0; c < b.length; ++c) b[c] in al ? a.j.addAdSensePageAttribute(al[b[c]], String(a.get(b[c]))) : a.log.j(ob(String(b[c]), String(a.get(b[c]))), a);
                a.j.addAdSensePageAttribute("google_tag_info", "v2");
                F(a.C, function(a, b) {
                    if (r(a))
                        for (var c = 0; c < a.length; ++c) this.j.addAttribute(b, a[c])
                }, a);
                G(a.M, function(a) {
                    this.j.addPageCategoryExclusion(a)
                }, a);
                a.j.setPublisherProvidedId(a.X);
                a.L && a.j.setLocation(a.L)
            }
        };
    k = $k.prototype;
    k.setCookieOptions = function(a) {
        try {
            if (!w(a) || !Qc(a)) return this.log.j(qb(String(a)), this), this;
            this.R = a;
            this.j && this.j.setCookieOptions(a);
            return this
        } catch (b) {
            I(17, b)
        }
    };
    k.setTagForChildDirectedTreatment = function(a) {
        try {
            if (0 !== a && 1 !== a) return this.log.j(Ob(String(a)), this), this;
            this.K = a;
            this.j && this.j.setTagForChildDirectedTreatment(a);
            return this
        } catch (b) {
            I(18, b)
        }
    };
    k.clearTagForChildDirectedTreatment = function() {
        try {
            return this.K = -1, this.j && this.j.setTagForChildDirectedTreatment(-1), this
        } catch (a) {
            I(19, a)
        }
    };
    k.setKidsFriendlyAds = function(a) {
        try {
            if (0 !== a && 1 !== a) return this.log.j(Ub(String(a)), this), this;
            this.W = a;
            this.j && this.j.setKidsFriendlyAds(a);
            return this
        } catch (b) {
            I(18, b)
        }
    };
    k.setTargeting = function(a, b) {
        try {
            var c = null;
            u(b) ? c = [b] : r(b) ? c = b : da(b) && (c = Tb(b));
            var d = c ? c.join() : String(b);
            if (!u(a) || gc(xc(a)) || !c) return this.log.j(E("PubAdsService.setTargeting", arguments), this), this;
            this.C[a] = c;
            this.log.info(Nb(a, d, this.getName()), this);
            if (this.j)
                for (this.j.clearAttribute(a), d = 0; d < c.length; ++d) this.j.addAttribute(a, c[d]);
            return this
        } catch (e) {
            I(1, e)
        }
    };
    k.clearTargeting = function(a) {
        try {
            if (!u(a) || gc(xc(a))) return this.log.j(E("PubAdsService.clearTargeting", arguments), this), this;
            if (!this.C[a]) return this.log.j(Kb(a, this.getName()), this), this;
            delete this.C[a];
            this.log.info(Jb(a, this.getName()), this);
            this.j && this.j.clearAttribute(a);
            return this
        } catch (b) {
            I(2, b)
        }
    };
    k.setCategoryExclusion = function(a) {
        try {
            if (!u(a) || gc(xc(a))) return this.log.j(E("PubAdsService.setCategoryExclusion", arguments), this), this;
            Fc(this.M, a);
            this.log.info(Lb(a), this);
            this.j && this.j.addPageCategoryExclusion(a);
            return this
        } catch (b) {
            I(3, b)
        }
    };
    k.clearCategoryExclusions = function() {
        try {
            return this.M = [], this.log.info(Mb(), this), this.j && this.j.clearPageCategoryExclusions(), this
        } catch (a) {
            I(4, a)
        }
    };
    k.disableInitialLoad = function() {
        try {
            this.j ? this.log.j(sb("disableInitialLoad", "pubads"), this) : this.V = !0
        } catch (a) {
            I(5, a)
        }
    };
    k.enableSingleRequest = function() {
        try {
            return this.l && !this.v ? this.log.j(rb("enableSingleRequest"), this) : Ec(this.o, "108809057") || Ec(this.o, "108809056") || (this.log.info(ub("single request"), this), this.v = !0), this.v
        } catch (a) {
            I(6, a)
        }
    };
    k.enableAsyncRendering = function() {
        try {
            return this.l && !this.m ? this.log.j(rb("enableAsyncRendering"), this) : (this.log.info(ub("asynchronous rendering"), this), this.m = !0), this.m
        } catch (a) {
            I(7, a)
        }
    };
    k.enableSyncRendering = function() {
        try {
            if (this.l && this.m) this.log.j(rb("enableSyncRendering"), this);
            else {
                this.log.info(ub("synchronous rendering"), this);
                this.m = !1;
                for (var a = this.getSlots(), b = 0; b < a.length; ++b) a[b].F = !1
            }
            return !this.m
        } catch (c) {
            I(8, c)
        }
    };
    k.setCentering = function(a) {
        try {
            this.log.info(vb("centering", String(a)), this), this.P = a
        } catch (b) {
            I(9, b)
        }
    };
    k.setPublisherProvidedId = function(a) {
        try {
            return this.l ? this.log.j(tb("setPublisherProvidedId", a), this) : (this.log.info(vb("PPID", a), this), this.X = a), this
        } catch (b) {
            I(20, b)
        }
    };
    k.definePassback = function(a, b) {
        try {
            if (!u(a) || 0 >= a.length || !Boolean(b)) return this.log.error(E("PubAdsService.definePassback", arguments)), null;
            var c = Uc(a),
                d = oe(),
                e = d;
            e.u || (e.u = !0, e.addFeature("n" + c));
            qe(d);
            return new Xk(a, b, this)
        } catch (f) {
            I(10, f)
        }
    };
    var Yk = function(a, b) {
        a.ha();
        a.j ? a.j.passback(b) : (a.log.info(mb(b.getAdUnitPath(), "GPT"), a, b), a.I.push(b))
    };
    k = $k.prototype;
    k.refresh = function(a, b) {
        try {
            if (a && !r(a) || b && (!x(b) || b.changeCorrelator && !ea(b.changeCorrelator))) this.log.j(E("PubAdsService.refresh", arguments), this);
            else {
                var c = null;
                if (a && (c = il(this, a), !c.length)) {
                    this.log.j(E("PubAdsService.refresh", arguments), this);
                    return
                }
                if (this.j) {
                    this.log.info(Bb(), this);
                    var d = !0;
                    q(b) && q(b.changeCorrelator) && (d = b.changeCorrelator);
                    this.j.refresh(c, {
                        changeCorrelator: d
                    })
                } else this.v ? (this.log.info(Ab(), this), c ? Fc(this.A, new Zk(c, b)) : Fc(this.A, new Zk(this.getSlots(), b))) : this.log.j(xb(),
                    this)
            }
        } catch (e) {
            I(11, e)
        }
    };
    k.Ga = function(a, b) {
        if (a && !r(a) || b.videoStreamCorrelator && !w(b.videoStreamCorrelator) || b.videoPodNumber && !w(b.videoPodNumber) || b.videoPodPosition && !w(b.videoPodPosition) || b.persistentRoadblocksOnly && !ea(b.persistentRoadblocksOnly) || b.clearUnfilledSlots && !ea(b.clearUnfilledSlots)) this.log.j(E("PubAdsService.internalVideoRefresh", arguments), this);
        else if (this.j) {
            var c = null;
            if (a && (c = il(this, a), !c.length)) {
                this.log.error(wb("internalVideoRefresh"), this);
                return
            }
            this.log.info(Bb(), this);
            this.j.refresh(c,
                b)
        } else this.log.j(xb(), this)
    };
    k.enableVideoAds = function() {
        try {
            this.O = !0, gl(this)
        } catch (a) {
            I(12, a)
        }
    };
    k.setVideoContent = function(a, b) {
        try {
            this.O = !0, this.ca = a, this.U = b, gl(this)
        } catch (c) {
            I(13, c)
        }
    };
    k.getVideoContent = function() {
        try {
            return this.j ? this.j.getVideoContentInformation() : null
        } catch (a) {
            I(30, a)
        }
    };
    var gl = function(a) {
            a.O && a.j && a.j.setVideoContentInformation(a.ca, a.U)
        },
        hl = function(a) {
            a.j && a.j.setCorrelator(-1 == a.B ? void 0 : a.B)
        };
    k = $k.prototype;
    k.getCorrelator = function() {
        try {
            return 0 == this.getSlots().length ? "not_available" : this.j ? this.j.getCorrelator() : "not_loaded"
        } catch (a) {
            I(27, a)
        }
    };
    k.setCorrelator = function(a) {
        try {
            if (window.top == window) return this;
            if (!Qc(a) || 0 === a) return this.log.j(Sb(String(a)), this), this;
            this.B = a;
            hl(this);
            return this
        } catch (b) {
            I(28, b)
        }
    };
    k.updateCorrelator = function() {
        try {
            return this.B = -1, hl(this), this
        } catch (a) {
            I(25, a)
        }
    };
    k.isAdRequestFinished = function() {
        try {
            return this.j ? this.j.isAdRequestFinished() : !1
        } catch (a) {
            I(29, a)
        }
    };
    k.collapseEmptyDivs = function(a) {
        try {
            return this.F ? this.log.j(Hb(), this) : this.l ? this.log.j(rb("collapseEmptyDivs"), this) : (this.N = Boolean(a), this.log.info(Gb(String(this.N)), this), this.F = !0), this.F
        } catch (b) {
            I(14, b)
        }
    };
    k.clear = function(a) {
        try {
            if (!this.j) return this.log.j(zb(), this), !1;
            var b = null;
            if (a && (b = il(this, a), 0 == b.length)) return this.log.j(E("PubAdsService.clear", arguments), this), !1;
            this.log.info(Cb(), this);
            return this.j.clearSlotContents(b)
        } catch (c) {
            I(15, c)
        }
    };
    k.setLocation = function(a, b, c) {
        try {
            var d = "role:1 producer:12";
            if (q(b)) {
                if (!w(a)) return this.log.j(Eb("Latitude")), this;
                if (!w(b)) return this.log.j(Eb("Longitude")), this;
                d += " latlng{ latitude_e7: " + Math.round(1E7 * a) + " longitude_e7: " + Math.round(1E7 * b) + "}";
                if (q(c)) {
                    if (isNaN(c)) return this.log.j(Eb("Radius")), this;
                    d += " radius:" + Math.round(c)
                }
            } else {
                if (50 < a.length) {
                    var e = a.substring(0, 50);
                    this.log.j(Fb(String(a), "50", e));
                    a = e
                }
                d += ' loc:"' + a + '"'
            }
            var e = d,
                f;
            if (Uk) f = p.btoa(e);
            else {
                d = [];
                for (b = a = 0; b < e.length; b++) {
                    for (var g =
                            e.charCodeAt(b); 255 < g;) d[a++] = g & 255, g >>= 8;
                    d[a++] = g
                }
                if (!da(d)) throw Error("encodeByteArray takes an array as a parameter");
                if (!Tk)
                    for (Tk = {}, g = 0; 65 > g; g++) Tk[g] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g);
                g = Tk;
                e = [];
                for (a = 0; a < d.length; a += 3) {
                    var h = d[a],
                        l = a + 1 < d.length,
                        m = l ? d[a + 1] : 0,
                        n = a + 2 < d.length,
                        v = n ? d[a + 2] : 0;
                    b = h >> 2;
                    c = (h & 3) << 4 | m >> 4;
                    var t = (m & 15) << 2 | v >> 6,
                        aa = v & 63;
                    n || (aa = 64, l || (t = 64));
                    e.push(g[b], g[c], g[t], g[aa])
                }
                f = e.join("")
            }
            this.L = "a " + f;
            return this
        } catch (Ma) {
            I(16, Ma)
        }
    };
    k.getVersion = function() {
        return this.j ? this.j.getVersion() : void 0
    };
    k.forceExperiment = function(a) {
        this.l ? this.log.j(tb("forceExperiment", a), this) : this.o.push(a)
    };
    var jl = function() {
            try {
                var a = te(),
                    b = se(a, "publisher_ads");
                b || (b = new $k, a.add(b));
                return b
            } catch (c) {
                I(26, c)
            }
        },
        il = function(a, b) {
            for (var c = [], d = 0; d < b.length; ++d) {
                var e = b[d];
                e instanceof Ee ? c.push(e) : a.log.j(Ib(String(d)), a)
            }
            return c
        },
        cl = function(a) {
            var b = a.m;
            switch (a.H) {
                case 100:
                    return b ? "108809063" : "108809066";
                case 200:
                    return b ? "108809064" : "108809067";
                case 400:
                    return b ? "108809065" : "108809068";
                default:
                    return b ? "108809062" : "108809079"
            }
        };
    A("pubads", jl);
    var kl = function() {
        ae.call(this);
        this.H = !0;
        this.o = this.F = !1;
        this.w = 0;
        this.v = this.u = void 0;
        this.I = this.C = !1;
        this.B = {};
        this.m = {};
        this.j = !1;
        this.A = {}
    };
    z(kl, ae);
    k = kl.prototype;
    k.set = function(a, b) {
        u(a) && 0 < a.length ? (this.A[a] = b, this.log.info(Xa(a, String(b), this.getName()), this, null)) : this.log.j(Ya(String(a), String(b), this.getName()), this, null);
        return this
    };
    k.get = function(a) {
        return this.A[a]
    };
    k.getAttributeKeys = function() {
        var a = [];
        F(this.A, function(b, c) {
            a.push(c)
        });
        return a
    };
    k.display = function(a, b, c, d) {
        this.enable();
        a = c ? Je(a, b, c) : Je(a, b);
        a.addService(this);
        d && a.setClickUrl(d);
        Ke(a.getSlotId().getDomId())
    };
    k.ga = function() {
        if (this.H) {
            if (!this.I) {
                var a = document,
                    b = document.createElement("script");
                b.async = !0;
                b.type = "text/javascript";
                b.src = Rc();
                try {
                    var c = a.getElementsByTagName("script")[0];
                    this.log.info(fb("GPT CompanionAds"), this);
                    this.I = !0;
                    c.parentNode && c.parentNode.insertBefore(b, c)
                } catch (d) {
                    ed(414, d), this.log.error(gb("GPT CompanionAds"), this)
                }
            }
        } else this.C || (p.document.write('<script type="text/javascript" src="' + Sc() + '">\x3c/script>'), this.C = !0)
    };
    k.enableSyncLoading = function() {
        try {
            this.H = !1
        } catch (a) {
            I(402, a)
        }
    };
    k.setRefreshUnfilledSlots = function(a) {
        try {
            ea(a) && (this.F = a)
        } catch (b) {
            I(403, b)
        }
    };
    k.setClearUnfilledSlots = function(a) {
        try {
            ea(a) && (this.o = a)
        } catch (b) {
            I(412, b)
        }
    };
    k.notifyUnfilledSlots = function(a) {
        try {
            if (this.F) ll(this, ml(this, a));
            else if (this.o) {
                var b = ml(this, a),
                    c = jl();
                if (c.l)
                    for (c.clear(b), a = 0; a < b.length; ++a) {
                        var d = new $d(b[a], !0, null, null, null, c.getName());
                        be(c, d)
                    } else this.log.error(cb("PubAds", "clear"))
            }
        } catch (e) {
            I(413, e)
        }
    };
    k.isRoadblockingSupported = function() {
        var a = jl();
        if (!a.l) return !1;
        var a = a.getSlots(),
            b = this.getSlots();
        if (a.length != b.length) return !1;
        for (var c = 0; c < b.length; ++c) {
            for (var d = !1, e = 0; e < a.length; ++e)
                if (b[c] === a[e]) {
                    d = !0;
                    break
                }
            if (!d) return !1
        }
        return !0
    };
    k.refreshAllSlots = function() {
        try {
            this.F && ll(this, null)
        } catch (a) {
            I(404, a)
        }
    };
    k.setVideoSession = function(a, b, c, d) {
        try {
            this.j = !1, this.w = 0, this.v = this.u = void 0, this.w = a, this.u = b, this.v = c, this.j = d
        } catch (e) {
            I(405, e)
        }
    };
    k.getDisplayAdsCorrelator = function() {
        try {
            return jl().getCorrelator()
        } catch (a) {
            I(406, a)
        }
    };
    k.getVideoStreamCorrelator = function() {
        try {
            var a;
            var b = jl();
            if (b.j) {
                var c = b.j.getVideoStreamCorrelator();
                a = isNaN(c) ? 0 : c
            } else a = 0;
            return a
        } catch (d) {
            I(407, d)
        }
    };
    var ll = function(a, b) {
        var c = jl();
        if (c.l) {
            if (a.j) {
                if (!a.isRoadblockingSupported()) {
                    a.log.j(bb());
                    return
                }
                c.j ? (c.log.info(Db(), c), c.j.clearNoRefreshState()) : c.log.j(yb(), c);
                c.clear()
            }
            var d = {
                isVideoRefresh: !0
            };
            q(a.w) && (d.videoStreamCorrelator = a.w);
            a.u && (d.videoPodNumber = a.u);
            a.v && (d.videoPodPosition = a.v);
            a.j && (d.persistentRoadblocksOnly = a.j);
            a.o && (d.clearUnfilledSlots = a.o);
            c.Ga(b, d)
        } else a.log.error(cb("PubAds", "refresh"))
    };
    kl.prototype.isSlotAPersistentRoadblock = function(a) {
        try {
            var b = jl();
            if (b.l && He(Ie(), a)) return b.j ? b.j.isSlotAPersistentRoadblock(a) : !1;
            this.log.error(db());
            return !1
        } catch (c) {
            I(408, c)
        }
    };
    var ml = function(a, b) {
        for (var c = a.getSlotIdMap(), d = [], e = 0; e < b.length; ++e) {
            var f = b[e];
            f in c ? d.push(c[f]) : a.log.j(eb(), a)
        }
        return d
    };
    kl.prototype.getName = function() {
        return "companion_ads"
    };
    var Rc = function() {
        return Tc() + "//pagead2.googlesyndication.com/pagead/show_companion_ad.js"
    };
    kl.prototype.onImplementationLoaded = function() {
        try {
            this.log.info(hb("GPT CompanionAds"), this), this.C = !0
        } catch (a) {
            I(409, a)
        }
    };
    var nl = function(a, b) {
        var c = b && b.getSlotId().getId();
        if (c && c in a.B && b.hasWrapperDiv() && a.l && !a.isSlotAPersistentRoadblock(b)) {
            b.A = a.B[c];
            var d = null;
            a.m.hasOwnProperty(c) && (d = a.m[c], delete a.m[c]);
            c = new $d(b, !1, d, null, null, a.getName());
            return Fe(b, c)
        }
        return !1
    };
    kl.prototype.da = function(a) {
        nl(this, a)
    };
    kl.prototype.fillSlot = function(a, b, c, d) {
        try {
            return He(Ie(), a) && u(b) && 0 < b.length ? (this.B[a.getSlotId().getId()] = b, null != c && null != d && (this.m[a.getSlotId().getId()] = [c, d]), nl(this, a)) : !1
        } catch (e) {
            I(410, e)
        }
    };
    kl.prototype.slotRenderEnded = function(a, b, c) {
        try {
            var d = null;
            null != b && null != c && (d = [b, c]);
            var e = new $d(a, !1, d, null, null, this.getName());
            be(this, e)
        } catch (f) {
            I(411, f)
        }
    };
    A("companionAds", function() {
        try {
            var a = te(),
                b = se(a, "companion_ads");
            b || (b = new kl, a.add(b));
            return b
        } catch (c) {
            I(401, c)
        }
    });
    var ol = function() {
        ae.call(this);
        this.j = {};
        this.m = {}
    };
    z(ol, ae);
    k = ol.prototype;
    k.getName = function() {
        return "content"
    };
    k.set = function(a, b) {
        u(a) && 0 < a.length ? (this.j[a] = b, this.log.info(Xa(a, String(b), this.getName()), this, null)) : this.log.j(Ya(String(a), String(b), this.getName()), this, null);
        return this
    };
    k.get = function(a) {
        return this.j[a]
    };
    k.getAttributeKeys = function() {
        var a = [];
        F(this.j, function(b, c) {
            a.push(c)
        });
        return a
    };
    k.display = function(a, b, c, d) {
        this.enable();
        a = c ? Je(a, b, c) : Je(a, b);
        a.addService(this);
        d && a.setClickUrl(d);
        Ke(a.getSlotId().getDomId())
    };
    var pl = function(a, b) {
        var c = b && b.getSlotId().getId();
        c in a.m && a.l && b.hasWrapperDiv() && !b.v && (b.A = a.m[c], c = new $d(b, !1, null, null, null, a.getName()), Fe(b, c))
    };
    ol.prototype.ga = function() {
        for (var a = this.getSlots(), b = 0; b < a.length; ++b) pl(this, a[b])
    };
    ol.prototype.da = function(a) {
        pl(this, a)
    };
    ol.prototype.setContent = function(a, b) {
        try {
            He(Ie(), a) && u(b) && 0 < b.length && (this.m[a.getSlotId().getId()] = b, pl(this, a))
        } catch (c) {
            I(602, c)
        }
    };
    A("content", function() {
        try {
            var a = te(),
                b = se(a, "content");
            b || (b = new ol, a.add(b));
            return b
        } catch (c) {
            I(601, c)
        }
    });
    var ql = null,
        rl = function() {
            var a = document,
                b = a.createElement("script");
            b.type = "text/javascript";
            b.src = Tc() + "//publisherconsole.appspot.com/js/loader.js";
            b.async = !0;
            (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(b, a)
        },
        sl = function() {
            var a = window,
                b = document;
            if (la()._pubconsole_disable_) return !1;
            var c;
            c = document.cookie.split("google_pubconsole=");
            if (c = 2 == c.length ? c[1].split(";")[0] : "")
                if (c = c.split("|"), 0 < c.length && ("1" == c[0] || "0" == c[0])) return !0;
            te();
            c = !1;
            try {
                c = a.top.document.URL ===
                    b.URL
            } catch (d) {}
            a = c ? b.URL : b.referrer;
            return null !== Vg(a, "google_debug") || null !== Vg(a, "google_console") || null !== Vg(a, "google_force_console") || null !== Vg(a, "googfc")
        },
        ul = function() {
            try {
                sl() && rl(), tl()
            } catch (a) {
                I(2002, a)
            }
        },
        tl = function() {
            Zb(window, "message", function(a) {
                a.source == window && "gpt_open_pubconsole" == a.data.type && (a = a.data.slotDomId) && (googletag && googletag.console ? googletag.console.openConsole(a) : (ql = a, rl()))
            })
        };
    "complete" === document.readyState ? ul() : ma(window, ul);
    A("disablePublisherConsole", function() {
        try {
            la()._pubconsole_disable_ = !0
        } catch (a) {
            I(2001, a)
        }
    });
    A("onPubConsoleJsLoad", function() {
        ql && (googletag.console.openConsole(ql), ql = null)
    });
    var vl = function() {
        this.j = [];
        this.m = !1;
        this.l = sa()
    };
    vl.prototype.addSize = function(a, b) {
        try {
            var c;
            if (!(c = !ve(a))) {
                var d = b,
                    e;
                if (!(e = ve(d))) {
                    var f;
                    if (r(d)) a: {
                        for (var g = d.length, h = u(d) ? d.split("") : d, d = 0; d < g; d++)
                            if (d in h && !ve.call(void 0, h[d])) {
                                f = !1;
                                break a
                            }
                        f = !0
                    } else f = !1;
                    e = f
                }
                c = !e
            }
            if (c) return this.m = !0, this.l.j(E("SizeMappingBuilder.addSize", arguments)), this;
            this.j.push([a, b]);
            return this
        } catch (l) {
            I(1601, l)
        }
    };
    vl.prototype.build = function() {
        try {
            if (this.m) return this.l.j(Va()), null;
            Oc(this.j);
            return this.j
        } catch (a) {
            I(1602, a)
        }
    };
    var Nc = function(a, b) {
        var c;
        a: {
            c = b[0];
            for (var d = a[0], e = Lc, f = Math.min(c.length, d.length), g = 0; g < f; g++) {
                var h = e(c[g], d[g]);
                if (0 != h) {
                    c = h;
                    break a
                }
            }
            c = Lc(c.length, d.length)
        }
        return c
    };
    A("sizeMapping", function() {
        try {
            return new vl
        } catch (a) {
            I(1603, a)
        }
    });

    function wl() {
        G(document.getElementsByTagName("script"), function(a) {
            var b = a.src;
            b && (0 <= b.indexOf("/tag/js/gpt.js") || 0 <= b.indexOf("/tag/js/gpt_mobile.js")) && a.innerHTML && !a.googletag_executed && (a.googletag_executed = !0, eval(a.innerHTML))
        })
    }

    function xl(a, b) {
        var c = a.getElementsByTagName("script");
        0 < c.length && (c = c[c.length - 1], c.parentNode && c.parentNode.insertBefore(b, c.nextSibling))
    }
    if (googletag.evalScripts) googletag.evalScripts();
    else {
        A("evalScripts", function() {
            wl()
        });
        try {
            var yl = oe();
            A("apiReady", !0);
            var zl = la().cmd;
            if (!zl || r(zl)) {
                var Al = la().cmd = new fd;
                zl && 0 < zl.length && Al.push.apply(Al, zl)
            }
            wl();
            var Bl = H("#34#");
            if (Math.random() < Bl) {
                var Cl = document,
                    Dl = Cl.createElement("iframe");
                Dl.src = cg(Cl ? Ud(Cl) : window);
                Dl.style.visibility = "hidden";
                Dl.style.display = "none";
                xl(Cl, Dl)
            }
            var El = H("#43#");
            if (Math.random() < El) {
                var Fl = document,
                    Gl = Fl.createElement("script");
                Gl.async = !0;
                Gl.type = "text/javascript";
                Gl.src = Tc() + "//www.googletagservices.com/tag/js/check_359604.js";
                xl(Fl, Gl)
            }
            yl.tick("loader_loaded_instant");
            var Hl = oe();
            if (window.performance && window.performance.getEntriesByName) {
                var Il = Tc(),
                    Z = window.performance.getEntriesByName(Il + "//www.googletagservices.com/tag/js/gpt.js")[0];
                Z || (Z = window.performance.getEntriesByName(Il + "//www.googletagservices.com/tag/js/gpt_mobile.js")[0]);
                Z && (Hl.tickValueAsInterval("rt_st_instant", Z.startTime), Hl.tickValueAsInterval("rt_fs_instant", Z.fetchStart), Hl.tickValueAsInterval("rt_dns_period",
                    Z.domainLookupEnd - Z.domainLookupStart), Hl.tickValueAsInterval("rt_tcp_period", Z.connectEnd - Z.connectStart), Z.secureConnectionStart && Hl.tickValueAsInterval("rt_ssl_period", Z.connectEnd - Z.secureConnectionStart), Hl.tickValueAsInterval("rt_rtt_period", Z.responseStart - Z.fetchStart), Hl.tickValueAsInterval("rt_tft_period", Z.responseEnd - Z.responseStart), Hl.tickValueAsInterval("rt_duration_period", Z.duration))
            }
        } catch (Jl) {
            I(2801, Jl)
        }
    };
})()