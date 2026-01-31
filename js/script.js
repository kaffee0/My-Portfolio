!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 51)
}([function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(43), i = (r = o) && r.__esModule ? r : {
        default: r
    };
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                (0,
                i.default)(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t, n) {
    var r = n(35)("wks")
      , o = n(36)
      , i = n(2).Symbol
      , a = "function" == typeof i;
    (e.exports = function(e) {
        return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
    }
    ).store = r
}
, function(e, t) {
    var n = e.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t, n) {
    var r = n(12);
    e.exports = function(e) {
        if (!r(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t, n) {
    var r = n(2)
      , o = n(4)
      , i = n(11)
      , a = n(7)
      , c = n(15)
      , u = function(e, t, n) {
        var s, l, d, m = e & u.F, f = e & u.G, v = e & u.S, y = e & u.P, p = e & u.B, _ = e & u.W, h = f ? o : o[t] || (o[t] = {}), g = h.prototype, w = f ? r : v ? r[t] : (r[t] || {}).prototype;
        for (s in f && (n = t),
        n)
            (l = !m && w && void 0 !== w[s]) && c(h, s) || (d = l ? w[s] : n[s],
            h[s] = f && "function" != typeof w[s] ? n[s] : p && l ? i(d, r) : _ && w[s] == d ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t,n)
                        }
                        return new e(t,n,r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype,
                t
            }(d) : y && "function" == typeof d ? i(Function.call, d) : d,
            y && ((h.virtual || (h.virtual = {}))[s] = d,
            e & u.R && g && !g[s] && a(g, s, d)))
    };
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    e.exports = u
}
, function(e, t, n) {
    var r = n(8)
      , o = n(23);
    e.exports = n(9) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(55)
      , i = n(56)
      , a = Object.defineProperty;
    t.f = n(9) ? Object.defineProperty : function(e, t, n) {
        if (r(e),
        t = i(t, !0),
        r(n),
        o)
            try {
                return a(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    e.exports = !n(34)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t) {
    e.exports = {}
}
, function(e, t, n) {
    var r = n(14);
    e.exports = function(e, t, n) {
        if (r(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(54)(!0);
    n(33)(String, "String", (function(e) {
        this._t = String(e),
        this._i = 0
    }
    ), (function() {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n),
        this._i += e.length,
        {
            value: e,
            done: !1
        })
    }
    ))
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = c(n(50))
      , o = c(n(32))
      , i = c(n(0))
      , a = c(n(1));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = function() {
        function e() {
            (0,
            i.default)(this, e)
        }
        return (0,
        a.default)(e, null, [{
            key: "init",
            value: function() {
                var t = document.querySelectorAll(".active_active");
                document.getElementById("switchBtn");
                if (window.images = ["img/test_03.png", "img/test_04.png", "img/test_01.png", "img/test.png", "img/test_02.png"],
                window.currentIndex = 0,
                t.forEach((function(t) {
                    t.addEventListener("click", (function() {
                        e.image_switch()
                    }
                    ))
                }
                )),
                window.innerWidth <= 768)
                    ;
                else {
                    var n = function(e) {
                        var t = e / 127 * 100;
                        u = 2 * e,
                        l.textContent = u.toFixed(0).padStart(2, "0"),
                        s.value = e,
                        s.style.background = "linear-gradient(90deg, #dc4c33 " + t + "%, #dddddd " + t + "%)"
                    }
                      , i = function() {
                        var e = Number(s.value);
                        n(e)
                    }
                      , a = function(e) {
                        cancelAnimationFrame(y),
                        v = 0,
                        f.forEach((function(e) {
                            e.style.filter = "hue-rotate(0deg)"
                        }
                        )),
                        0 !== e && (p = 1 + e,
                        function e() {
                            0 !== p && (v = (v + p) % 360,
                            f.forEach((function(e) {
                                e.style.filter = "hue-rotate(" + v + "deg)"
                            }
                            )),
                            y = requestAnimationFrame(e))
                        }())
                    }
                      , c = function(e) {
                        var t = e / parseInt(d.max, 10) * 100;
                        d.style.background = "linear-gradient(90deg, #dc4c33 " + t + "%, #dddddd " + t + "%)"
                    };
                    gsap.registerPlugin(CustomWiggle);
                    var u = 1;
                    document.querySelectorAll(".wiggle").forEach((function(e) {
                        var t;
                        t = e,
                        function e() {
                            var n = Math.random() > .4 ? 1 : -1
                              , r = Math.random() * u;
                            gsap.to(t, {
                                x: n * r,
                                y: .1 * r,
                                duration: .1,
                                ease: CustomWiggle.create(null, {
                                    type: "random",
                                    wiggles: 10
                                }),
                                onComplete: e
                            })
                        }()
                    }
                    ));
                    var s = document.getElementById("inputRange")
                      , l = document.querySelector(".range_disp");
                    s.addEventListener("input", i),
                    i(),
                    navigator.requestMIDIAccess ? navigator.requestMIDIAccess().then((function(e) {
                        var t = !0
                          , i = !1
                          , a = void 0;
                        try {
                            for (var c, u = (0,
                            o.default)(e.inputs.values()); !(t = (c = u.next()).done); t = !0) {
                                c.value.onmidimessage = function(e) {
                                    var t = (0,
                                    r.default)(e.data, 3)
                                      , o = t[0]
                                      , i = t[1]
                                      , a = t[2];
                                    176 == (240 & o) && 20 === i && n(a)
                                }
                            }
                        } catch (e) {
                            i = !0,
                            a = e
                        } finally {
                            try {
                                !t && u.return && u.return()
                            } finally {
                                if (i)
                                    throw a
                            }
                        }
                    }
                    )).catch((function(e) {
                        console.error("MIDI接続に失敗しました:", e)
                    }
                    )) : console.warn("Web MIDI API はこのブラウザでサポートされていません。");
                    var d = document.getElementById("inputRange2")
                      , m = document.querySelector(".range_disp2")
                      , f = document.querySelectorAll(".wiggle")
                      , v = 0
                      , y = null
                      , p = 0;
                    d.addEventListener("input", (function() {
                        var e = parseInt(d.value, 10);
                        m.textContent = e,
                        a(e),
                        c(e)
                    }
                    )),
                    c(parseInt(d.value, 10)),
                    navigator.requestMIDIAccess && navigator.requestMIDIAccess().then((function(e) {
                        var t = !0
                          , n = !1
                          , i = void 0;
                        try {
                            for (var u, s = (0,
                            o.default)(e.inputs.values()); !(t = (u = s.next()).done); t = !0) {
                                u.value.onmidimessage = function(e) {
                                    var t = (0,
                                    r.default)(e.data, 3)
                                      , n = t[0]
                                      , o = t[1]
                                      , i = t[2];
                                    if (176 == (240 & n) && 21 === o) {
                                        var u = i;
                                        document.getElementById("inputRange2").value = u,
                                        document.querySelector(".range_disp2").textContent = u,
                                        a(u),
                                        c(u)
                                    }
                                }
                            }
                        } catch (e) {
                            n = !0,
                            i = e
                        } finally {
                            try {
                                !t && s.return && s.return()
                            } finally {
                                if (n)
                                    throw i
                            }
                        }
                    }
                    ))
                }
            }
        }, {
            key: "image_switch",
            value: function() {
                var e = document.querySelector(".disp_img");
                gsap.fromTo(e, {
                    opacity: 1
                }, {
                    opacity: 1,
                    duration: .01,
                    repeat: 1,
                    yoyo: !0,
                    ease: "power1.inOut",
                    onComplete: function() {
                        window.currentIndex = (window.currentIndex + 1) % window.images.length,
                        e.src = window.images[window.currentIndex]
                    }
                })
            }
        }]),
        e
    }();
    t.default = u
}
, function(e, t, n) {
    e.exports = {
        default: n(53),
        __esModule: !0
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (null == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t) {
    e.exports = !0
}
, function(e, t, n) {
    var r = n(12)
      , o = n(2).document
      , i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, n) {
    var r = n(63)
      , o = n(20);
    e.exports = function(e) {
        return r(o(e))
    }
}
, function(e, t, n) {
    var r = n(19)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}
, function(e, t, n) {
    var r = n(35)("keys")
      , o = n(36);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}
, function(e, t, n) {
    var r = n(8).f
      , o = n(15)
      , i = n(3)("toStringTag");
    e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}
, function(e, t, n) {
    var r = n(29)
      , o = n(3)("iterator")
      , i = n(10);
    e.exports = n(4).getIteratorMethod = function(e) {
        if (null != e)
            return e[o] || e["@@iterator"] || i[r(e)]
    }
}
, function(e, t, n) {
    var r = n(16)
      , o = n(3)("toStringTag")
      , i = "Arguments" == r(function() {
        return arguments
    }());
    e.exports = function(e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}
, function(e, t, n) {
    n(77);
    for (var r = n(2), o = n(7), i = n(10), a = n(3)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < c.length; u++) {
        var s = c[u]
          , l = r[s]
          , d = l && l.prototype;
        d && !d[a] && o(d, a, s),
        i[s] = i.Array
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(14);
    function o(e) {
        var t, n;
        this.promise = new e((function(e, r) {
            if (void 0 !== t || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            t = e,
            n = r
        }
        )),
        this.resolve = r(t),
        this.reject = r(n)
    }
    e.exports.f = function(e) {
        return new o(e)
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(93),
        __esModule: !0
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(21)
      , o = n(6)
      , i = n(57)
      , a = n(7)
      , c = n(10)
      , u = n(58)
      , s = n(27)
      , l = n(66)
      , d = n(3)("iterator")
      , m = !([].keys && "next"in [].keys())
      , f = function() {
        return this
    };
    e.exports = function(e, t, n, v, y, p, _) {
        u(n, t, v);
        var h, g, w, b = function(e) {
            if (!m && e in k)
                return k[e];
            switch (e) {
            case "keys":
            case "values":
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this,e)
            }
        }, L = t + " Iterator", S = "values" == y, q = !1, k = e.prototype, T = k[d] || k["@@iterator"] || y && k[y], x = T || b(y), I = y ? S ? b("entries") : x : void 0, E = "Array" == t && k.entries || T;
        if (E && (w = l(E.call(new e))) !== Object.prototype && w.next && (s(w, L, !0),
        r || "function" == typeof w[d] || a(w, d, f)),
        S && T && "values" !== T.name && (q = !0,
        x = function() {
            return T.call(this)
        }
        ),
        r && !_ || !m && !q && k[d] || a(k, d, x),
        c[t] = x,
        c[L] = f,
        y)
            if (h = {
                values: S ? x : b("values"),
                keys: p ? x : b("keys"),
                entries: I
            },
            _)
                for (g in h)
                    g in k || i(k, g, h[g]);
            else
                o(o.P + o.F * (m || q), t, h);
        return h
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, n) {
    var r = n(4)
      , o = n(2)
      , i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: r.version,
        mode: n(21) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t) {
    var n = 0
      , r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t, n) {
    var r = n(2).document;
    e.exports = r && r.documentElement
}
, function(e, t, n) {
    var r = n(20);
    e.exports = function(e) {
        return Object(r(e))
    }
}
, function(e, t, n) {
    var r = n(5);
    e.exports = function(e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)),
            t
        }
    }
}
, function(e, t, n) {
    var r = n(10)
      , o = n(3)("iterator")
      , i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}
, function(e, t, n) {
    var r = n(3)("iterator")
      , o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }
        ,
        Array.from(i, (function() {
            throw 2
        }
        ))
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[r] = function() {
                return a
            }
            ,
            e(i)
        } catch (e) {}
        return n
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(69),
        __esModule: !0
    }
}
, function(e, t, n) {
    e.exports = n(72)
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(74), i = (r = o) && r.__esModule ? r : {
        default: r
    };
    t.default = function(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new i.default((function(e, n) {
                return function r(o, a) {
                    try {
                        var c = t[o](a)
                          , u = c.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!c.done)
                        return i.default.resolve(u).then((function(e) {
                            r("next", e)
                        }
                        ), (function(e) {
                            r("throw", e)
                        }
                        ));
                    e(u)
                }("next")
            }
            ))
        }
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(14)
      , i = n(3)("species");
    e.exports = function(e, t) {
        var n, a = r(e).constructor;
        return void 0 === a || null == (n = r(a)[i]) ? t : o(n)
    }
}
, function(e, t, n) {
    var r, o, i, a = n(11), c = n(83), u = n(38), s = n(22), l = n(2), d = l.process, m = l.setImmediate, f = l.clearImmediate, v = l.MessageChannel, y = l.Dispatch, p = 0, _ = {}, h = function() {
        var e = +this;
        if (_.hasOwnProperty(e)) {
            var t = _[e];
            delete _[e],
            t()
        }
    }, g = function(e) {
        h.call(e.data)
    };
    m && f || (m = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return _[++p] = function() {
            c("function" == typeof e ? e : Function(e), t)
        }
        ,
        r(p),
        p
    }
    ,
    f = function(e) {
        delete _[e]
    }
    ,
    "process" == n(16)(d) ? r = function(e) {
        d.nextTick(a(h, e, 1))
    }
    : y && y.now ? r = function(e) {
        y.now(a(h, e, 1))
    }
    : v ? (i = (o = new v).port2,
    o.port1.onmessage = g,
    r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
        l.postMessage(e + "", "*")
    }
    ,
    l.addEventListener("message", g, !1)) : r = "onreadystatechange"in s("script") ? function(e) {
        u.appendChild(s("script")).onreadystatechange = function() {
            u.removeChild(this),
            h.call(e)
        }
    }
    : function(e) {
        setTimeout(a(h, e, 1), 0)
    }
    ),
    e.exports = {
        set: m,
        clear: f
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(12)
      , i = n(31);
    e.exports = function(e, t) {
        if (r(e),
        o(t) && t.constructor === e)
            return t;
        var n = i.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = i(n(90))
      , o = i(n(32));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function(e, t) {
        if (Array.isArray(e))
            return e;
        if ((0,
        r.default)(Object(e)))
            return function(e, t) {
                var n = []
                  , r = !0
                  , i = !1
                  , a = void 0;
                try {
                    for (var c, u = (0,
                    o.default)(e); !(r = (c = u.next()).done) && (n.push(c.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    i = !0,
                    a = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                return n
            }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}
, function(e, t, n) {
    "use strict";
    var r = p(n(52))
      , o = p(n(95))
      , i = p(n(17))
      , a = p(n(96))
      , c = p(n(97))
      , u = p(n(98))
      , s = p(n(99))
      , l = p(n(101))
      , d = p(n(102))
      , m = p(n(103))
      , f = p(n(104))
      , v = p(n(105))
      , y = p(n(106));
    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var _ = function() {
        var e = ["img/test_01.png", "img/test_02.png", "img/test_03.png", "img/test_04.png"];
        window.onload = function() {
            for (var t = 0; t < e.length; t++) {
                document.createElement("img").src = e[t]
            }
        }
        ,
        i.default.init(),
        o.default.init(),
        m.default.init(),
        window.innerWidth <= 768 || s.default.init(),
        y.default.init(),
        navigator.requestMIDIAccess ? navigator.requestMIDIAccess().then((function(e) {
            f.default.init(),
            e.onstatechange = function(e) {
                var t;
                "input" === e.port.type && "connected" === e.port.state && (console.log("MIDIデバイスが接続されました：", e.port.name),
                f.default.init(),
                t = e.port,
                alert("MIDIデバイス「" + t.name + "」が接続されました"))
            }
        }
        ), (function() {
            console.error("MIDIの使用が許可されませんでした")
        }
        )) : console.error("このブラウザはWeb MIDI APIに対応していません"),
        setTimeout((function() {
            if (window.innerWidth <= 768) {
                var e = 0;
                document.addEventListener("touchend", (function(t) {
                    var n = Date.now();
                    n - e <= 300 && t.preventDefault(),
                    e = n
                }
                ), !1),
                c.default.init(),
                setTimeout((function() {
                    l.default.init(),
                    window.line_sp_01.show("draw"),
                    window.line_sp_02.show("draw"),
                    window.line_sp_03.show("draw"),
                    window.line_sp_04.show("draw")
                }
                ), 2e3)
            } else
                a.default.init(),
                u.default.init(),
                s.default.init(),
                r.default.init(),
                v.default.init();
            d.default.init()
        }
        ), 1e3)
    };
    document.addEventListener("DOMContentLoaded", (function() {
        _()
    }
    ))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = c(n(18))
      , o = c(n(0))
      , i = c(n(1))
      , a = (c(n(71)),
    c(n(17)));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = []
      , s = function() {
        function e() {
            (0,
            o.default)(this, e)
        }
        return (0,
        i.default)(e, null, [{
            key: "init",
            value: function() {
                document.querySelector(".audio_number2");
                var e = document.querySelector(".audio_number");
                var t = [document.querySelector(".button_menu.button_index"), document.querySelector(".button_menu.button_about"), document.querySelector(".button_menu.button_midi")]
                  , n = [document.querySelector(".btn_view_video"), document.querySelector(".btn_view_credit"), document.querySelector(".btn_view_images")]
                  , o = [document.querySelector(".button_sort_mv"), document.querySelector(".button_sort_live"), document.querySelector(".button_sort_graphic"), document.querySelector(".button_sort_ads"), document.querySelector(".button_sort_others"), document.querySelector(".button_sort_all")]
                  , i = 0
                  , c = 0
                  , s = 0;
                document.getElementById("inputRange");
                document.addEventListener("keydown", (function(e) {
                    document.querySelector(".moji_type");
                    "Escape" == e.key ? (none(),
                    typed = "How to play",
                    updateTypedTextTypingEffect(typed)) : "Alt" == e.key ? (none(),
                    t[i].click(),
                    i = (i + 1) % t.length,
                    typed = t[i].textContent,
                    updateTypedTextTypingEffect(typed)) : "Tab" == e.key ? (none(),
                    n[c].click(),
                    c = (c + 1) % n.length,
                    typed = n[c].textContent,
                    updateTypedTextTypingEffect(typed)) : "Control" == e.key && (none(),
                    o[s].click(),
                    s = (s + 1) % o.length,
                    typed = o[s].textContent,
                    updateTypedTextTypingEffect(typed))
                }
                )),
                u = document.querySelectorAll(".numbers");
                for (var l = function(t) {
                    document.addEventListener("keydown", (function(n) {
                        n.key == t + 1 && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[t].classList.add("active_number")
                        }
                        ), 0));
                        0 == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[9].classList.add("active_number")
                        }
                        ), 0));
                        "-" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[10].classList.add("active_number")
                        }
                        ), 0));
                        "^" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[11].classList.add("active_number")
                        }
                        ), 0));
                        "¥" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[12].classList.add("active_number")
                        }
                        ), 0));
                        "q" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[13].classList.add("active_number")
                        }
                        ), 0));
                        "w" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[14].classList.add("active_number")
                        }
                        ), 0));
                        "e" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[15].classList.add("active_number")
                        }
                        ), 0));
                        "r" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[16].classList.add("active_number")
                        }
                        ), 0));
                        "t" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[17].classList.add("active_number")
                        }
                        ), 0));
                        "y" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[18].classList.add("active_number")
                        }
                        ), 0));
                        "u" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[19].classList.add("active_number")
                        }
                        ), 0));
                        "i" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[20].classList.add("active_number")
                        }
                        ), 0));
                        "o" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[21].classList.add("active_number")
                        }
                        ), 0));
                        "p" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[22].classList.add("active_number")
                        }
                        ), 0));
                        "@" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[23].classList.add("active_number")
                        }
                        ), 0));
                        "[" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[24].classList.add("active_number")
                        }
                        ), 0));
                        "a" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[25].classList.add("active_number")
                        }
                        ), 0));
                        "s" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[26].classList.add("active_number")
                        }
                        ), 0));
                        "d" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[27].classList.add("active_number")
                        }
                        ), 0));
                        "f" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[28].classList.add("active_number")
                        }
                        ), 0));
                        "g" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[29].classList.add("active_number")
                        }
                        ), 0));
                        "h" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[30].classList.add("active_number")
                        }
                        ), 0));
                        "j" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[31].classList.add("active_number")
                        }
                        ), 0));
                        "k" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[32].classList.add("active_number")
                        }
                        ), 0));
                        "l" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[33].classList.add("active_number")
                        }
                        ), 0));
                        ";" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[34].classList.add("active_number")
                        }
                        ), 0));
                        ":" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[35].classList.add("active_number")
                        }
                        ), 0));
                        "]" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[36].classList.add("active_number")
                        }
                        ), 0));
                        "z" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[37].classList.add("active_number")
                        }
                        ), 0));
                        "x" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[38].classList.add("active_number")
                        }
                        ), 0));
                        "c" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[39].classList.add("active_number")
                        }
                        ), 0));
                        "v" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[40].classList.add("active_number")
                        }
                        ), 0));
                        "b" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[41].classList.add("active_number")
                        }
                        ), 0));
                        "n" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[42].classList.add("active_number")
                        }
                        ), 0));
                        "m" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[43].classList.add("active_number")
                        }
                        ), 0));
                        "," == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[44].classList.add("active_number")
                        }
                        ), 0));
                        "." == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[45].classList.add("active_number")
                        }
                        ), 0));
                        "/" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[46].classList.add("active_number")
                        }
                        ), 0));
                        "_" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[47].classList.add("active_number")
                        }
                        ), 0));
                        "!" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[48].classList.add("active_number")
                        }
                        ), 0));
                        '"' == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[49].classList.add("active_number")
                        }
                        ), 0));
                        "#" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[50].classList.add("active_number")
                        }
                        ), 0));
                        "$" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[51].classList.add("active_number")
                        }
                        ), 0));
                        "%" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[52].classList.add("active_number")
                        }
                        ), 0));
                        "&" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[53].classList.add("active_number")
                        }
                        ), 0));
                        "'" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[54].classList.add("active_number")
                        }
                        ), 0));
                        "(" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[55].classList.add("active_number")
                        }
                        ), 0));
                        ")" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[56].classList.add("active_number")
                        }
                        ), 0));
                        "=" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[57].classList.add("active_number")
                        }
                        ), 0));
                        "~" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[58].classList.add("active_number")
                        }
                        ), 0));
                        "|" == n.key && (e.pause(),
                        e.currentTime = 0,
                        e.play(),
                        document.querySelectorAll(".active_number").forEach((function(e) {
                            e.classList.remove("active_number")
                        }
                        )),
                        setTimeout((function() {
                            u[59].classList.add("active_number")
                        }
                        ), 0))
                    }
                    ))
                }, d = 0; d < u.length; d++)
                    l(d);
                document.addEventListener("keydown", (function(t) {
                    if (!t.shiftKey && "ArrowRight" === t.code) {
                        var n = document.querySelectorAll(".active_active")
                          , o = document.querySelector(".active_number")
                          , i = (0,
                        r.default)(n).indexOf(o) + 1;
                        i <= (n.length - 1) / 2 && (o.classList.remove("active_number"),
                        n[i].classList.add("active_number")),
                        a.default.image_switch(),
                        e.pause(),
                        e.currentTime = 0,
                        e.play()
                    }
                }
                )),
                document.addEventListener("keydown", (function(t) {
                    if ("ArrowLeft" === t.key) {
                        var n = document.querySelectorAll(".active_active")
                          , o = document.querySelector(".active_number")
                          , i = (0,
                        r.default)(n).indexOf(o) - 1;
                        i >= 0 && (o.classList.remove("active_number"),
                        n[i].classList.add("active_number")),
                        a.default.image_switch(),
                        e.pause(),
                        e.currentTime = 0,
                        e.play()
                    }
                }
                ))
            }
        }, {
            key: "onClickShow",
            value: function() {
                header.classList.toggle("is-active")
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, n) {
    n(13),
    n(67),
    e.exports = n(4).Array.from
}
, function(e, t, n) {
    var r = n(19)
      , o = n(20);
    e.exports = function(e) {
        return function(t, n) {
            var i, a, c = String(o(t)), u = r(n), s = c.length;
            return u < 0 || u >= s ? e ? "" : void 0 : (i = c.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === s || (a = c.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? c.charAt(u) : i : e ? c.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536
        }
    }
}
, function(e, t, n) {
    e.exports = !n(9) && !n(34)((function() {
        return 7 != Object.defineProperty(n(22)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, n) {
    var r = n(12);
    e.exports = function(e, t) {
        if (!r(e))
            return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
            return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t, n) {
    e.exports = n(7)
}
, function(e, t, n) {
    "use strict";
    var r = n(59)
      , o = n(23)
      , i = n(27)
      , a = {};
    n(7)(a, n(3)("iterator"), (function() {
        return this
    }
    )),
    e.exports = function(e, t, n) {
        e.prototype = r(a, {
            next: o(1, n)
        }),
        i(e, t + " Iterator")
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(60)
      , i = n(37)
      , a = n(26)("IE_PROTO")
      , c = function() {}
      , u = function() {
        var e, t = n(22)("iframe"), r = i.length;
        for (t.style.display = "none",
        n(38).appendChild(t),
        t.src = "javascript:",
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        u = e.F; r--; )
            delete u.prototype[i[r]];
        return u()
    };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (c.prototype = r(e),
        n = new c,
        c.prototype = null,
        n[a] = e) : n = u(),
        void 0 === t ? n : o(n, t)
    }
}
, function(e, t, n) {
    var r = n(8)
      , o = n(5)
      , i = n(61);
    e.exports = n(9) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, a = i(t), c = a.length, u = 0; c > u; )
            r.f(e, n = a[u++], t[n]);
        return e
    }
}
, function(e, t, n) {
    var r = n(62)
      , o = n(37);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(24)
      , i = n(64)(!1)
      , a = n(26)("IE_PROTO");
    e.exports = function(e, t) {
        var n, c = o(e), u = 0, s = [];
        for (n in c)
            n != a && r(c, n) && s.push(n);
        for (; t.length > u; )
            r(c, n = t[u++]) && (~i(s, n) || s.push(n));
        return s
    }
}
, function(e, t, n) {
    var r = n(16);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}
, function(e, t, n) {
    var r = n(24)
      , o = n(25)
      , i = n(65);
    e.exports = function(e) {
        return function(t, n, a) {
            var c, u = r(t), s = o(u.length), l = i(a, s);
            if (e && n != n) {
                for (; s > l; )
                    if ((c = u[l++]) != c)
                        return !0
            } else
                for (; s > l; l++)
                    if ((e || l in u) && u[l] === n)
                        return e || l || 0;
            return !e && -1
        }
    }
}
, function(e, t, n) {
    var r = n(19)
      , o = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(39)
      , i = n(26)("IE_PROTO")
      , a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e),
        r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(11)
      , o = n(6)
      , i = n(39)
      , a = n(40)
      , c = n(41)
      , u = n(25)
      , s = n(68)
      , l = n(28);
    o(o.S + o.F * !n(42)((function(e) {
        Array.from(e)
    }
    )), "Array", {
        from: function(e) {
            var t, n, o, d, m = i(e), f = "function" == typeof this ? this : Array, v = arguments.length, y = v > 1 ? arguments[1] : void 0, p = void 0 !== y, _ = 0, h = l(m);
            if (p && (y = r(y, v > 2 ? arguments[2] : void 0, 2)),
            null == h || f == Array && c(h))
                for (n = new f(t = u(m.length)); t > _; _++)
                    s(n, _, p ? y(m[_], _) : m[_]);
            else
                for (d = h.call(m),
                n = new f; !(o = d.next()).done; _++)
                    s(n, _, p ? a(d, y, [o.value, _], !0) : o.value);
            return n.length = _,
            n
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(8)
      , o = n(23);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}
, function(e, t, n) {
    n(70);
    var r = n(4).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}
, function(e, t, n) {
    var r = n(6);
    r(r.S + r.F * !n(9), "Object", {
        defineProperty: n(8).f
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = c(n(44))
      , o = c(n(45))
      , i = c(n(0))
      , a = c(n(1));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = function() {
        function e() {
            (0,
            i.default)(this, e)
        }
        return (0,
        a.default)(e, null, [{
            key: "init",
            value: function() {
                var t, n = (t = (0,
                o.default)(r.default.mark((function e() {
                    var t, n;
                    return r.default.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                fetch("https://tsuchifumazu.microcms.io/api/v1/works", {
                                    headers: {
                                        "X-MICROCMS-API-KEY": "rmHFovgI5S3cQtvxxqwvI2oPKx6G2ba9YE8F"
                                    }
                                });
                            case 2:
                                return t = e.sent,
                                e.next = 5,
                                t.json();
                            case 5:
                                return n = e.sent,
                                e.abrupt("return", n.contents);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return t.apply(this, arguments)
                }
                );
                function i() {
                    n().then((function(t) {
                        var n = document.querySelector(".number")
                          , r = new URLSearchParams(window.location.search).get("id");
                        t.forEach((function(o, i) {
                            var a = document.createElement("button");
                            a.textContent = i + 1,
                            a.onclick = function() {
                                return e.renderImageById(o.id, t)
                            }
                            ,
                            n.append(a),
                            a.classList.add("numbers"),
                            r == o.id && a.classList.add("active_number"),
                            document.addEventListener("keydown", (function(n) {
                                n.key == i + 1 && e.renderImageById(o.id, t)
                            }
                            ))
                        }
                        )),
                        r ? e.renderImageById(r, t) : t.length > 0 && e.renderImageById(t[0].id, t);
                        var o = 0;
                        document.addEventListener("keydown", (function(n) {
                            var r = new URLSearchParams(window.location.search).get("id")
                              , i = t.find((function(e) {
                                return e.id === r
                            }
                            ));
                            if (i) {
                                if ("ArrowRight" === n.key) {
                                    var a = t.findIndex((function(e) {
                                        return e.id === r
                                    }
                                    )) + 1;
                                    a < t.length && e.renderImageById(t[a].id, t)
                                }
                                if ("ArrowLeft" === n.key) {
                                    var c = t.findIndex((function(e) {
                                        return e.id === r
                                    }
                                    )) - 1;
                                    c >= 0 && e.renderImageById(t[c].id, t)
                                }
                                if ("n" === n.key.toLowerCase()) {
                                    ++o >= i.image.length && (o = 0);
                                    var u = i.image[o].url;
                                    document.querySelector(".main_view").src = u,
                                    document.querySelectorAll(".sub_view_box").forEach((function(e, t) {
                                        e.classList.toggle("selected", t === o)
                                    }
                                    ))
                                }
                                if ("b" === n.key.toLowerCase()) {
                                    --o < 0 && (o = i.image.length - 1);
                                    var s = i.image[o].url;
                                    document.querySelector(".main_view").src = s,
                                    document.querySelectorAll(".sub_view_box").forEach((function(e, t) {
                                        e.classList.toggle("selected", t === o)
                                    }
                                    ))
                                }
                            }
                        }
                        ))
                    }
                    )).then((function(t) {
                        e.addButton()
                    }
                    ))
                }
                document.querySelectorAll(".numbers"),
                i()
            }
        }, {
            key: "renderImageById",
            value: function(e, t) {
                var n = t.find((function(t) {
                    return t.id === e
                }
                ));
                if (n) {
                    document.querySelector(".main_view").src = n.image[0].url;
                    for (var r = 0; r < 9; r++) {
                        var o = document.querySelectorAll(".sub_view_box");
                        n.image[r] && (o[r].src = n.image[r].url)
                    }
                    document.querySelectorAll(".sub_view_box").forEach((function(e, t) {
                        e.classList.toggle("selected", 0 === t)
                    }
                    )),
                    document.querySelector(".tag").textContent = n.sort,
                    document.querySelector(".works_title").textContent = n.title,
                    document.querySelector(".works_desc").textContent = n.desc,
                    document.querySelector(".credit_data").innerHTML = n.credit.replace(/\n/g, "<br>"),
                    history.replaceState(null, "", "?id=" + n.id),
                    window.currentSubIndex = 0,
                    window.currentImage = n
                }
            }
        }, {
            key: "addButton",
            value: function() {
                for (var e = document.querySelectorAll(".numbers").length; !(e >= 48); ) {
                    e++;
                    var t = document.createElement("button");
                    if (t.classList.add("numbers"),
                    t.classList.add("dis_active"),
                    document.querySelector(".number").append(t),
                    e <= 9)
                        t.textContent = e;
                    else if (e <= 18) {
                        var n = e - 9;
                        t.textContent = "shift +" + n
                    } else if (e <= 27) {
                        var r = e - 18;
                        t.textContent = "Q +" + r
                    } else if (e <= 36) {
                        var o = e - 27;
                        t.textContent = "W +" + o
                    } else if (e <= 45) {
                        var i = e - 36;
                        t.textContent = "E +" + i
                    }
                }
            }
        }]),
        e
    }();
    t.default = u
}
, function(e, t, n) {
    var r = function() {
        return this
    }() || Function("return this")()
      , o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0
      , i = o && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0,
    e.exports = n(73),
    o)
        r.regeneratorRuntime = i;
    else
        try {
            delete r.regeneratorRuntime
        } catch (e) {
            r.regeneratorRuntime = void 0
        }
}
, function(e, t) {
    !function(t) {
        "use strict";
        var n = Object.prototype
          , r = n.hasOwnProperty
          , o = "function" == typeof Symbol ? Symbol : {}
          , i = o.iterator || "@@iterator"
          , a = o.asyncIterator || "@@asyncIterator"
          , c = o.toStringTag || "@@toStringTag"
          , u = "object" == typeof e
          , s = t.regeneratorRuntime;
        if (s)
            u && (e.exports = s);
        else {
            (s = t.regeneratorRuntime = u ? e.exports : {}).wrap = y;
            var l = {}
              , d = {};
            d[i] = function() {
                return this
            }
            ;
            var m = Object.getPrototypeOf
              , f = m && m(m(T([])));
            f && f !== n && r.call(f, i) && (d = f);
            var v = g.prototype = _.prototype = Object.create(d);
            h.prototype = v.constructor = g,
            g.constructor = h,
            g[c] = h.displayName = "GeneratorFunction",
            s.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            s.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                c in e || (e[c] = "GeneratorFunction")),
                e.prototype = Object.create(v),
                e
            }
            ,
            s.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            w(b.prototype),
            b.prototype[a] = function() {
                return this
            }
            ,
            s.AsyncIterator = b,
            s.async = function(e, t, n, r) {
                var o = new b(y(e, t, n, r));
                return s.isGeneratorFunction(t) ? o : o.next().then((function(e) {
                    return e.done ? e.value : o.next()
                }
                ))
            }
            ,
            w(v),
            v[c] = "Generator",
            v[i] = function() {
                return this
            }
            ,
            v.toString = function() {
                return "[object Generator]"
            }
            ,
            s.keys = function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            s.values = T,
            k.prototype = {
                constructor: k,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(q),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var t = this;
                    function n(n, r) {
                        return a.type = "throw",
                        a.arg = e,
                        t.next = n,
                        r && (t.method = "next",
                        t.arg = void 0),
                        !!r
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    l) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    l
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            q(n),
                            l
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                q(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: T(e),
                        resultName: t,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = void 0),
                    l
                }
            }
        }
        function y(e, t, n, r) {
            var o = t && t.prototype instanceof _ ? t : _
              , i = Object.create(o.prototype)
              , a = new k(r || []);
            return i._invoke = function(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r)
                        throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o)
                            throw i;
                        return x()
                    }
                    for (n.method = o,
                    n.arg = i; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var c = L(a, n);
                            if (c) {
                                if (c === l)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r)
                                throw r = "completed",
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = p(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield",
                            u.arg === l)
                                continue;
                            return {
                                value: u.arg,
                                done: n.done
                            }
                        }
                        "throw" === u.type && (r = "completed",
                        n.method = "throw",
                        n.arg = u.arg)
                    }
                }
            }(e, n, a),
            i
        }
        function p(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        function _() {}
        function h() {}
        function g() {}
        function w(e) {
            ["next", "throw", "return"].forEach((function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            }
            ))
        }
        function b(e) {
            var t;
            this._invoke = function(n, o) {
                function i() {
                    return new Promise((function(t, i) {
                        !function t(n, o, i, a) {
                            var c = p(e[n], e, o);
                            if ("throw" !== c.type) {
                                var u = c.arg
                                  , s = u.value;
                                return s && "object" == typeof s && r.call(s, "__await") ? Promise.resolve(s.__await).then((function(e) {
                                    t("next", e, i, a)
                                }
                                ), (function(e) {
                                    t("throw", e, i, a)
                                }
                                )) : Promise.resolve(s).then((function(e) {
                                    u.value = e,
                                    i(u)
                                }
                                ), a)
                            }
                            a(c.arg)
                        }(n, o, t, i)
                    }
                    ))
                }
                return t = t ? t.then(i, i) : i()
            }
        }
        function L(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null,
                "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return",
                    t.arg = void 0,
                    L(e, t),
                    "throw" === t.method))
                        return l;
                    t.method = "throw",
                    t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var r = p(n, e.iterator, t.arg);
            if ("throw" === r.type)
                return t.method = "throw",
                t.arg = r.arg,
                t.delegate = null,
                l;
            var o = r.arg;
            return o ? o.done ? (t[e.resultName] = o.value,
            t.next = e.nextLoc,
            "return" !== t.method && (t.method = "next",
            t.arg = void 0),
            t.delegate = null,
            l) : o : (t.method = "throw",
            t.arg = new TypeError("iterator result is not an object"),
            t.delegate = null,
            l)
        }
        function S(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function q(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function k(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(S, this),
            this.reset(!0)
        }
        function T(e) {
            if (e) {
                var t = e[i];
                if (t)
                    return t.call(e);
                if ("function" == typeof e.next)
                    return e;
                if (!isNaN(e.length)) {
                    var n = -1
                      , o = function t() {
                        for (; ++n < e.length; )
                            if (r.call(e, n))
                                return t.value = e[n],
                                t.done = !1,
                                t;
                        return t.value = void 0,
                        t.done = !0,
                        t
                    };
                    return o.next = o
                }
            }
            return {
                next: x
            }
        }
        function x() {
            return {
                value: void 0,
                done: !0
            }
        }
    }(function() {
        return this
    }() || Function("return this")())
}
, function(e, t, n) {
    e.exports = {
        default: n(75),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(76),
    n(13),
    n(30),
    n(80),
    n(88),
    n(89),
    e.exports = n(4).Promise
}
, function(e, t) {}
, function(e, t, n) {
    "use strict";
    var r = n(78)
      , o = n(79)
      , i = n(10)
      , a = n(24);
    e.exports = n(33)(Array, "Array", (function(e, t) {
        this._t = a(e),
        this._i = 0,
        this._k = t
    }
    ), (function() {
        var e = this._t
          , t = this._k
          , n = this._i++;
        return !e || n >= e.length ? (this._t = void 0,
        o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }
    ), "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
}
, function(e, t) {
    e.exports = function() {}
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r, o, i, a, c = n(21), u = n(2), s = n(11), l = n(29), d = n(6), m = n(12), f = n(14), v = n(81), y = n(82), p = n(46), _ = n(47).set, h = n(84)(), g = n(31), w = n(48), b = n(85), L = n(49), S = u.TypeError, q = u.process, k = q && q.versions, T = k && k.v8 || "", x = u.Promise, I = "process" == l(q), E = function() {}, P = o = g.f, A = !!function() {
        try {
            var e = x.resolve(1)
              , t = (e.constructor = {})[n(3)("species")] = function(e) {
                e(E, E)
            }
            ;
            return (I || "function" == typeof PromiseRejectionEvent) && e.then(E)instanceof t && 0 !== T.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
        } catch (e) {}
    }(), O = function(e) {
        var t;
        return !(!m(e) || "function" != typeof (t = e.then)) && t
    }, j = function(e, t) {
        if (!e._n) {
            e._n = !0;
            var n = e._c;
            h((function() {
                for (var r = e._v, o = 1 == e._s, i = 0, a = function(t) {
                    var n, i, a, c = o ? t.ok : t.fail, u = t.resolve, s = t.reject, l = t.domain;
                    try {
                        c ? (o || (2 == e._h && B(e),
                        e._h = 1),
                        !0 === c ? n = r : (l && l.enter(),
                        n = c(r),
                        l && (l.exit(),
                        a = !0)),
                        n === t.promise ? s(S("Promise-chain cycle")) : (i = O(n)) ? i.call(n, u, s) : u(n)) : s(r)
                    } catch (e) {
                        l && !a && l.exit(),
                        s(e)
                    }
                }; n.length > i; )
                    a(n[i++]);
                e._c = [],
                e._n = !1,
                t && !e._h && M(e)
            }
            ))
        }
    }, M = function(e) {
        _.call(u, (function() {
            var t, n, r, o = e._v, i = z(e);
            if (i && (t = w((function() {
                I ? q.emit("unhandledRejection", o, e) : (n = u.onunhandledrejection) ? n({
                    promise: e,
                    reason: o
                }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o)
            }
            )),
            e._h = I || z(e) ? 2 : 1),
            e._a = void 0,
            i && t.e)
                throw t.v
        }
        ))
    }, z = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
    }, B = function(e) {
        _.call(u, (function() {
            var t;
            I ? q.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                promise: e,
                reason: e._v
            })
        }
        ))
    }, C = function(e) {
        var t = this;
        t._d || (t._d = !0,
        (t = t._w || t)._v = e,
        t._s = 2,
        t._a || (t._a = t._c.slice()),
        j(t, !0))
    }, R = function(e) {
        var t, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === e)
                    throw S("Promise can't be resolved itself");
                (t = O(e)) ? h((function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        t.call(e, s(R, r, 1), s(C, r, 1))
                    } catch (e) {
                        C.call(r, e)
                    }
                }
                )) : (n._v = e,
                n._s = 1,
                j(n, !1))
            } catch (e) {
                C.call({
                    _w: n,
                    _d: !1
                }, e)
            }
        }
    };
    A || (x = function(e) {
        v(this, x, "Promise", "_h"),
        f(e),
        r.call(this);
        try {
            e(s(R, this, 1), s(C, this, 1))
        } catch (e) {
            C.call(this, e)
        }
    }
    ,
    (r = function(e) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ).prototype = n(86)(x.prototype, {
        then: function(e, t) {
            var n = P(p(this, x));
            return n.ok = "function" != typeof e || e,
            n.fail = "function" == typeof t && t,
            n.domain = I ? q.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && j(this, !1),
            n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    i = function() {
        var e = new r;
        this.promise = e,
        this.resolve = s(R, e, 1),
        this.reject = s(C, e, 1)
    }
    ,
    g.f = P = function(e) {
        return e === x || e === a ? new i(e) : o(e)
    }
    ),
    d(d.G + d.W + d.F * !A, {
        Promise: x
    }),
    n(27)(x, "Promise"),
    n(87)("Promise"),
    a = n(4).Promise,
    d(d.S + d.F * !A, "Promise", {
        reject: function(e) {
            var t = P(this);
            return (0,
            t.reject)(e),
            t.promise
        }
    }),
    d(d.S + d.F * (c || !A), "Promise", {
        resolve: function(e) {
            return L(c && this === a ? x : this, e)
        }
    }),
    d(d.S + d.F * !(A && n(42)((function(e) {
        x.all(e).catch(E)
    }
    ))), "Promise", {
        all: function(e) {
            var t = this
              , n = P(t)
              , r = n.resolve
              , o = n.reject
              , i = w((function() {
                var n = []
                  , i = 0
                  , a = 1;
                y(e, !1, (function(e) {
                    var c = i++
                      , u = !1;
                    n.push(void 0),
                    a++,
                    t.resolve(e).then((function(e) {
                        u || (u = !0,
                        n[c] = e,
                        --a || r(n))
                    }
                    ), o)
                }
                )),
                --a || r(n)
            }
            ));
            return i.e && o(i.v),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = P(t)
              , r = n.reject
              , o = w((function() {
                y(e, !1, (function(e) {
                    t.resolve(e).then(n.resolve, r)
                }
                ))
            }
            ));
            return o.e && r(o.v),
            n.promise
        }
    })
}
, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e)
            throw TypeError(n + ": incorrect invocation!");
        return e
    }
}
, function(e, t, n) {
    var r = n(11)
      , o = n(40)
      , i = n(41)
      , a = n(5)
      , c = n(25)
      , u = n(28)
      , s = {}
      , l = {};
    (t = e.exports = function(e, t, n, d, m) {
        var f, v, y, p, _ = m ? function() {
            return e
        }
        : u(e), h = r(n, d, t ? 2 : 1), g = 0;
        if ("function" != typeof _)
            throw TypeError(e + " is not iterable!");
        if (i(_)) {
            for (f = c(e.length); f > g; g++)
                if ((p = t ? h(a(v = e[g])[0], v[1]) : h(e[g])) === s || p === l)
                    return p
        } else
            for (y = _.call(e); !(v = y.next()).done; )
                if ((p = o(y, h, v.value, t)) === s || p === l)
                    return p
    }
    ).BREAK = s,
    t.RETURN = l
}
, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
        case 0:
            return r ? e() : e.call(n);
        case 1:
            return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}
, function(e, t, n) {
    var r = n(2)
      , o = n(47).set
      , i = r.MutationObserver || r.WebKitMutationObserver
      , a = r.process
      , c = r.Promise
      , u = "process" == n(16)(a);
    e.exports = function() {
        var e, t, n, s = function() {
            var r, o;
            for (u && (r = a.domain) && r.exit(); e; ) {
                o = e.fn,
                e = e.next;
                try {
                    o()
                } catch (r) {
                    throw e ? n() : t = void 0,
                    r
                }
            }
            t = void 0,
            r && r.enter()
        };
        if (u)
            n = function() {
                a.nextTick(s)
            }
            ;
        else if (!i || r.navigator && r.navigator.standalone)
            if (c && c.resolve) {
                var l = c.resolve(void 0);
                n = function() {
                    l.then(s)
                }
            } else
                n = function() {
                    o.call(r, s)
                }
                ;
        else {
            var d = !0
              , m = document.createTextNode("");
            new i(s).observe(m, {
                characterData: !0
            }),
            n = function() {
                m.data = d = !d
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            t && (t.next = o),
            e || (e = o,
            n()),
            t = o
        }
    }
}
, function(e, t, n) {
    var r = n(2).navigator;
    e.exports = r && r.userAgent || ""
}
, function(e, t, n) {
    var r = n(7);
    e.exports = function(e, t, n) {
        for (var o in t)
            n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
        return e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(2)
      , o = n(4)
      , i = n(8)
      , a = n(9)
      , c = n(3)("species");
    e.exports = function(e) {
        var t = "function" == typeof o[e] ? o[e] : r[e];
        a && t && !t[c] && i.f(t, c, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(6)
      , o = n(4)
      , i = n(2)
      , a = n(46)
      , c = n(49);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = a(this, o.Promise || i.Promise)
              , n = "function" == typeof e;
            return this.then(n ? function(n) {
                return c(t, e()).then((function() {
                    return n
                }
                ))
            }
            : e, n ? function(n) {
                return c(t, e()).then((function() {
                    throw n
                }
                ))
            }
            : e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(6)
      , o = n(31)
      , i = n(48);
    r(r.S, "Promise", {
        try: function(e) {
            var t = o.f(this)
              , n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v),
            t.promise
        }
    })
}
, function(e, t, n) {
    e.exports = {
        default: n(91),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(30),
    n(13),
    e.exports = n(92)
}
, function(e, t, n) {
    var r = n(29)
      , o = n(3)("iterator")
      , i = n(10);
    e.exports = n(4).isIterable = function(e) {
        var t = Object(e);
        return void 0 !== t[o] || "@@iterator"in t || i.hasOwnProperty(r(t))
    }
}
, function(e, t, n) {
    n(30),
    n(13),
    e.exports = n(94)
}
, function(e, t, n) {
    var r = n(5)
      , o = n(28);
    e.exports = n(4).getIterator = function(e) {
        var t = o(e);
        if ("function" != typeof t)
            throw TypeError(e + " is not iterable!");
        return r(t.call(e))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(n(44))
      , o = u(n(45))
      , i = u(n(0))
      , a = u(n(1))
      , c = u(n(17));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = function() {
        function e() {
            (0,
            i.default)(this, e)
        }
        return (0,
        a.default)(e, null, [{
            key: "init",
            value: function() {
                var t, n = (t = (0,
                o.default)(r.default.mark((function e() {
                    var t, n;
                    return r.default.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                fetch("https://tsuchifumazu.microcms.io/api/v1/works?limit=100", {
                                    headers: {
                                        "X-MICROCMS-API-KEY": "rmHFovgI5S3cQtvxxqwvI2oPKx6G2ba9YE8F"
                                    }
                                });
                            case 2:
                                return t = e.sent,
                                e.next = 5,
                                t.json();
                            case 5:
                                return n = e.sent,
                                e.abrupt("return", n.contents);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function() {
                    return t.apply(this, arguments)
                }
                ), i = document.querySelector(".moji_flow_1"), a = document.querySelector(".moji_flow_2");
                window.typed = "",
                window.hasRenderedOnce = !1,
                window.none = function() {
                    i.style.display = "none",
                    a.style.display = "none"
                }
                ;
                document.querySelectorAll(".flow_moji");
                var c = document.getElementById("typedDisplay")
                  , u = null;
                window.updateTypedTextTypingEffect = function(e) {
                    c.classList.add("active-cursor"),
                    null !== u && (clearInterval(u),
                    u = null),
                    c.textContent = "";
                    var t = 0;
                    u = setInterval((function() {
                        c.textContent += e[t],
                        ++t >= e.length && (clearInterval(u),
                        u = null)
                    }
                    ), 50)
                }
                ;
                var s = document.querySelector(".audio_number")
                  , l = document.querySelector(".audio_number2");
                function d() {
                    n().then((function(t) {
                        var n = document.querySelector(".number")
                          , r = document.querySelector(".list")
                          , o = new URLSearchParams(window.location.search).get("id");
                        if (document.addEventListener("keydown", (function(n) {
                            0 == n.key && e.renderImageById(t[9].id, t),
                            "-" == n.key && e.renderImageById(t[10].id, t),
                            "^" == n.key && e.renderImageById(t[11].id, t),
                            "¥" == n.key && e.renderImageById(t[12].id, t),
                            "q" == n.key && e.renderImageById(t[13].id, t),
                            "w" == n.key && e.renderImageById(t[14].id, t),
                            "e" == n.key && e.renderImageById(t[15].id, t),
                            "r" == n.key && e.renderImageById(t[16].id, t),
                            "t" == n.key && e.renderImageById(t[17].id, t),
                            "y" == n.key && e.renderImageById(t[18].id, t),
                            "u" == n.key && e.renderImageById(t[19].id, t),
                            "i" == n.key && e.renderImageById(t[20].id, t),
                            "o" == n.key && e.renderImageById(t[21].id, t),
                            "p" == n.key && e.renderImageById(t[22].id, t),
                            "@" == n.key && e.renderImageById(t[23].id, t),
                            "[" == n.key && e.renderImageById(t[24].id, t),
                            "a" == n.key && e.renderImageById(t[25].id, t),
                            "s" == n.key && e.renderImageById(t[26].id, t),
                            "d" == n.key && e.renderImageById(t[27].id, t),
                            "f" == n.key && e.renderImageById(t[28].id, t),
                            "g" == n.key && e.renderImageById(t[29].id, t),
                            "h" == n.key && e.renderImageById(t[30].id, t),
                            "j" == n.key && e.renderImageById(t[31].id, t),
                            "k" == n.key && e.renderImageById(t[32].id, t),
                            "l" == n.key && e.renderImageById(t[33].id, t),
                            ";" == n.key && e.renderImageById(t[34].id, t),
                            ":" == n.key && e.renderImageById(t[35].id, t),
                            "]" == n.key && e.renderImageById(t[36].id, t),
                            "z" == n.key && e.renderImageById(t[37].id, t),
                            "x" == n.key && e.renderImageById(t[38].id, t),
                            "c" == n.key && e.renderImageById(t[39].id, t),
                            "v" == n.key && e.renderImageById(t[40].id, t),
                            "b" == n.key && e.renderImageById(t[41].id, t),
                            "n" == n.key && e.renderImageById(t[42].id, t),
                            "m" == n.key && e.renderImageById(t[43].id, t),
                            "," == n.key && e.renderImageById(t[44].id, t),
                            "." == n.key && e.renderImageById(t[45].id, t),
                            "/" == n.key && e.renderImageById(t[46].id, t),
                            "_" == n.key && e.renderImageById(t[47].id, t),
                            "!" === n.key && e.renderImageById(t[48].id, t),
                            '"' === n.key && e.renderImageById(t[49].id, t),
                            "#" === n.key && e.renderImageById(t[50].id, t),
                            "$" === n.key && e.renderImageById(t[51].id, t),
                            "%" === n.key && e.renderImageById(t[52].id, t),
                            "&" === n.key && e.renderImageById(t[53].id, t),
                            "!" === n.key && e.renderImageById(t[54].id, t),
                            '"' === n.key && e.renderImageById(t[55].id, t),
                            "#" === n.key && e.renderImageById(t[56].id, t),
                            "$" === n.key && e.renderImageById(t[57].id, t),
                            "%" === n.key && e.renderImageById(t[58].id, t),
                            "&" === n.key && e.renderImageById(t[59].id, t)
                        }
                        )),
                        t.forEach((function(o, i) {
                            gsap.to(".moji_sums", {
                                duration: 1,
                                scrambleText: "ALL - " + t.length
                            });
                            var a = document.createElement("button");
                            a.textContent = i + 1;
                            var c = function() {
                                e.renderImageById(o.id, t);
                                var n = document.querySelectorAll(".active_active");
                                s.pause(),
                                s.currentTime = 0,
                                s.play(),
                                n.forEach((function(e) {
                                    e.classList.remove("active_number")
                                }
                                )),
                                a.classList.add("active_number"),
                                f.classList.add("active_number")
                            };
                            a.addEventListener("touchstart", c, {
                                passive: !0
                            }),
                            a.addEventListener("click", c),
                            n.append(a),
                            a.classList.add("numbers"),
                            a.classList.add("active_active", "gogo");
                            var u = o.sort;
                            if (u < 2) {
                                var l = "numbers_" + o.sort[0];
                                a.classList.add(l)
                            } else {
                                var d = "numbers_" + o.sort[0]
                                  , m = "numbers_" + o.sort[1];
                                a.classList.add(d),
                                a.classList.add(m)
                            }
                            var f = document.createElement("div")
                              , v = document.createElement("p")
                              , y = document.createElement("p");
                            if (v.textContent = o.artist,
                            y.textContent = o.en_title,
                            f.classList.add("active_active"),
                            u < 2) {
                                var p = "numbers_" + o.sort[0];
                                f.classList.add(p)
                            } else {
                                var _ = "numbers_" + o.sort[0]
                                  , h = "numbers_" + o.sort[1];
                                f.classList.add(_),
                                f.classList.add(h)
                            }
                            f.append(v),
                            f.append(y),
                            r.append(f),
                            f.addEventListener("touchstart", c, {
                                passive: !0
                            }),
                            f.addEventListener("click", c),
                            o.id,
                            document.addEventListener("keydown", (function(n) {
                                n.key == i + 1 && e.renderImageById(o.id, t)
                            }
                            ))
                        }
                        )),
                        o) {
                            e.renderImageById(o, t);
                            var i = document.querySelectorAll(".numbers")
                              , a = document.querySelectorAll(".list div");
                            t.forEach((function(e, t) {
                                e.id === o && i[t] && i[t].classList.add("active_number"),
                                e.id === o && a[t] && a[t].classList.add("active_number")
                            }
                            ))
                        } else if (t.length > 0) {
                            e.renderImageById(t[0].id, t);
                            var c = document.querySelectorAll(".numbers")
                              , u = document.querySelectorAll(".list div");
                            c[0] && c[0].classList.add("active_number"),
                            u[0] && u[0].classList.add("active_number")
                        }
                        window.currentSubIndex = 0;
                        var d = document.querySelectorAll(".sub_view_box");
                        d.forEach((function(e, t) {
                            e.addEventListener("click", (function() {
                                window.currentSubIndex = t;
                                var n = currentImage.image[currentSubIndex].url;
                                document.querySelector(".main_view").src = n,
                                d.forEach((function(e, t) {
                                    e.classList.remove("selected")
                                }
                                )),
                                e.classList.toggle("selected", t === currentSubIndex),
                                s.pause(),
                                s.currentTime = 0,
                                s.play()
                            }
                            ))
                        }
                        )),
                        document.addEventListener("keydown", (function(n) {
                            var r = new URLSearchParams(window.location.search).get("id")
                              , o = t.find((function(e) {
                                return e.id === r
                            }
                            ));
                            if (o) {
                                if ("ArrowRight" === n.key) {
                                    var i = t.findIndex((function(e) {
                                        return e.id === r
                                    }
                                    )) + 1;
                                    i < t.length && e.renderImageById(t[i].id, t)
                                }
                                if ("ArrowLeft" === n.key) {
                                    var a = t.findIndex((function(e) {
                                        return e.id === r
                                    }
                                    )) - 1;
                                    a >= 0 && e.renderImageById(t[a].id, t)
                                }
                                if ("ArrowDown" === n.code) {
                                    window.currentSubIndex++,
                                    l.pause(),
                                    l.currentTime = 0,
                                    l.play(),
                                    currentSubIndex >= o.image.length && (currentSubIndex = 0);
                                    var c = o.image[currentSubIndex].url;
                                    document.querySelector(".main_view").src = c,
                                    document.querySelectorAll(".sub_view_box").forEach((function(e, t) {
                                        e.classList.toggle("selected", t === currentSubIndex)
                                    }
                                    ))
                                }
                                if ("ArrowUp" === n.code) {
                                    currentSubIndex--,
                                    l.pause(),
                                    l.currentTime = 0,
                                    l.play(),
                                    currentSubIndex < 0 && (currentSubIndex = o.image.length - 1);
                                    var u = o.image[currentSubIndex].url;
                                    document.querySelector(".main_view").src = u,
                                    document.querySelectorAll(".sub_view_box").forEach((function(e, t) {
                                        e.classList.toggle("selected", t === currentSubIndex)
                                    }
                                    ))
                                }
                            }
                        }
                        ))
                    }
                    )).then((function(t) {
                        e.addButton()
                    }
                    ))
                }
                document.querySelectorAll(".numbers"),
                d()
            }
        }, {
            key: "renderImageById",
            value: function(e, t) {
                var n = t.find((function(t) {
                    return t.id === e
                }
                ));
                if (n) {
                    var r = document.querySelector(".main_view");
                    r.src = "img/placeholder.png";
                    var o = new Image;
                    o.onload = function() {
                        r.src = o.src,
                        gsap.fromTo(r, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .05,
                            repeat: 2,
                            yoyo: !0,
                            ease: "power1.inOut"
                        })
                    }
                    ,
                    o.onerror = function() {
                        r.src = "img/placeholder.png"
                    }
                    ,
                    o.src = n.image[0].url;
                    for (var i = 0; i < 10; i++) {
                        var a = document.querySelectorAll(".sub_view_box");
                        n.image[i] ? (a[i].style.backgroundImage = "url('" + n.image[i].url + "')",
                        a[i].classList.add("sub_active_ok")) : (a[i].classList.remove("sub_active_ok"),
                        a[i].style.backgroundImage = "none")
                    }
                    document.querySelectorAll(".sub_view_box").forEach((function(e, t) {
                        e.classList.toggle("selected", 0 === t)
                    }
                    ));
                    var u = n.sort;
                    u.length < 2 ? (gsap.to(".tag", {
                        duration: 1,
                        scrambleText: u[0]
                    }),
                    gsap.to(".tag2", {
                        duration: 1,
                        scrambleText: ""
                    })) : (gsap.to(".tag", {
                        duration: 1,
                        scrambleText: u[0]
                    }),
                    gsap.to(".tag2", {
                        duration: 1,
                        scrambleText: u[1]
                    })),
                    gsap.to(".works_title", {
                        duration: 1,
                        scrambleText: n.title
                    }),
                    gsap.to(".works_artist", {
                        duration: 1,
                        scrambleText: n.artist
                    }),
                    gsap.to(".works_year", {
                        duration: 1,
                        scrambleText: n.year
                    }),
                    gsap.to(".works_desc", {
                        duration: 1,
                        scrambleText: n.desc
                    }),
                    document.querySelector(".works_view_video_inner").innerHTML = n.link,
                    n.link || (document.querySelector(".works_view_video_inner").innerHTML = "準備中"),
                    document.querySelector(".credit_data").innerHTML = n.credit.replace(/\n/g, "<br>"),
                    gsap.to(".moji_nums", {
                        duration: 1,
                        scrambleText: e
                    }),
                    history.replaceState(null, "", "?id=" + n.id),
                    document.querySelectorAll(".active_active").forEach((function(e) {
                        e.classList.remove("active_number")
                    }
                    ));
                    var s = t.findIndex((function(e) {
                        return e.id === n.id
                    }
                    ))
                      , l = document.querySelectorAll(".numbers")
                      , d = document.querySelectorAll(".list div");
                    l[s] && l[s].classList.add("active_number"),
                    d[s] && d[s].classList.add("active_number"),
                    window.currentSubIndex = 0,
                    window.currentImage = n,
                    window.hasRenderedOnce ? (window.none(),
                    window.typed = n.en_title,
                    window.updateTypedTextTypingEffect(typed),
                    window.animateAndHideAllLines(),
                    c.default.image_switch()) : window.hasRenderedOnce = !0
                }
            }
        }, {
            key: "addButton",
            value: function() {
                for (var e = document.querySelectorAll(".numbers").length; !(e >= 60); ) {
                    e++;
                    var t = document.createElement("button");
                    t.classList.add("numbers"),
                    t.classList.add("dis_active"),
                    document.querySelector(".number").append(t),
                    t.textContent = e
                }
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0))
      , o = i(n(1));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = function() {
        function e() {
            (0,
            r.default)(this, e)
        }
        return (0,
        o.default)(e, null, [{
            key: "init",
            value: function() {
                var e = document.querySelector(".audio_number2");
                window.line7 = new LeaderLine(document.querySelector(".center2"),document.querySelector(".human_01"),{
                    color: "black",
                    size: 1,
                    startPlug: "square",
                    endPlug: "square",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2
                }),
                window.line7.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line8 = new LeaderLine(document.querySelector(".center2"),document.querySelector(".human_02"),{
                    color: "black",
                    size: 1,
                    startPlug: "square",
                    endPlug: "square",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2
                }),
                window.line8.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line9 = new LeaderLine(document.querySelector(".bottom"),document.querySelector(".list"),{
                    hide: !0,
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "top",
                    endSocket: "bottom",
                    path: "grid",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    dash: {
                        animation: !0
                    }
                }),
                window.line9.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line10 = new LeaderLine(document.querySelector(".buttons"),document.querySelector(".center2"),{
                    hide: !0,
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "right",
                    endSocket: "left",
                    path: "grid",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    dash: {
                        animation: !0
                    }
                }),
                window.line10.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line11 = new LeaderLine(document.querySelector(".center2"),document.querySelector(".human_01"),{
                    hide: !0,
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "right",
                    endSocket: "left",
                    path: "grid",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    dash: {
                        animation: !0
                    }
                }),
                window.line11.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line12 = new LeaderLine(document.querySelector(".center2"),document.querySelector(".human_02"),{
                    hide: !0,
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "right",
                    endSocket: "left",
                    path: "grid",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    dash: {
                        animation: !0
                    }
                }),
                window.line12.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line13 = new LeaderLine(document.querySelector(".bottom"),document.querySelector(".center2"),{
                    hide: !0,
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "top",
                    endSocket: "bottom",
                    path: "grid",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    dash: {
                        animation: !0
                    }
                }),
                window.line13.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                });
                var t = document.querySelector(".works_view_images")
                  , n = document.querySelector(".works_view_credit")
                  , r = document.querySelector(".works_view_video")
                  , o = document.querySelector(".btn_view_images")
                  , i = document.querySelector(".btn_view_credit")
                  , a = document.querySelector(".btn_view_video");
                i.onclick = function() {
                    n.classList.add("view_active"),
                    t.classList.remove("view_active"),
                    r.classList.remove("view_active"),
                    i.classList.add("button_active"),
                    o.classList.remove("button_active"),
                    a.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                ,
                a.onclick = function() {
                    n.classList.remove("view_active"),
                    t.classList.remove("view_active"),
                    r.classList.add("view_active"),
                    i.classList.remove("button_active"),
                    o.classList.remove("button_active"),
                    a.classList.add("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                ,
                o.onclick = function() {
                    n.classList.remove("view_active"),
                    t.classList.add("view_active"),
                    r.classList.remove("view_active"),
                    i.classList.remove("button_active"),
                    o.classList.add("button_active"),
                    a.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                ;
                var c = document.querySelector(".button_sort_all")
                  , u = document.querySelector(".button_sort_mv")
                  , s = document.querySelector(".button_sort_live")
                  , l = document.querySelector(".button_sort_graphic")
                  , d = document.querySelector(".button_sort_ads")
                  , m = document.querySelector(".button_sort_others")
                  , f = document.querySelectorAll(".active_active")
                  , v = document.querySelectorAll(".numbers_MV")
                  , y = document.querySelectorAll(".numbers_LiveDirection")
                  , p = document.querySelectorAll(".numbers_Graphic")
                  , _ = document.querySelectorAll(".numbers_Advertisement")
                  , h = document.querySelectorAll(".numbers_Others");
                c.onclick = function() {
                    c.classList.add("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    f.forEach((function(e, t) {
                        e.classList.remove("sorted"),
                        e.classList.add("gogo")
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "ALL WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "ALL  - " + f.length / 2
                    })
                }
                ,
                u.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.add("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    f.forEach((function(e, t) {
                        e.classList.contains("numbers_MV") ? (e.classList.remove("sorted"),
                        e.classList.add("gogo")) : (e.classList.remove("gogo"),
                        e.classList.add("sorted"))
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "MusiVideo WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "MV  - " + v.length
                    })
                }
                ,
                s.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.add("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    f.forEach((function(e, t) {
                        e.classList.contains("numbers_LiveDirection") ? (e.classList.remove("sorted"),
                        e.classList.add("gogo")) : (e.classList.remove("gogo"),
                        e.classList.add("sorted"))
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "LiveDir. WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "LIVE  - " + y.length
                    })
                }
                ,
                l.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.add("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    f.forEach((function(e, t) {
                        e.classList.contains("numbers_Graphic") ? (e.classList.remove("sorted"),
                        e.classList.add("gogo")) : (e.classList.remove("gogo"),
                        e.classList.add("sorted"))
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "Graphic WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "Gra.  - " + p.length
                    })
                }
                ,
                d.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.add("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    f.forEach((function(e, t) {
                        e.classList.contains("numbers_Advertisement") ? (e.classList.remove("sorted"),
                        e.classList.add("gogo")) : (e.classList.remove("gogo"),
                        e.classList.add("sorted"))
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "Ads WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "Ads  - " + _.length
                    })
                }
                ,
                m.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.add("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    f.forEach((function(e, t) {
                        e.classList.contains("numbers_Others") ? (e.classList.remove("sorted"),
                        e.classList.add("gogo")) : (e.classList.remove("gogo"),
                        e.classList.add("sorted"))
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "Others WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "Oth.  - " + h.length
                    })
                }
                ;
                var g = document.querySelector(".button_midi")
                  , w = document.querySelector(".button_index")
                  , b = document.querySelector(".button_about")
                  , L = document.querySelector(".number")
                  , S = document.querySelector(".list")
                  , q = document.querySelector(".center")
                  , k = document.querySelector(".center2")
                  , T = document.querySelector(".right")
                  , x = document.querySelector(".right2");
                g.addEventListener("click", (function() {
                    q.classList.remove("hidden_panel"),
                    k.classList.add("hidden_panel"),
                    T.classList.remove("hidden_panel"),
                    x.classList.add("hidden_panel"),
                    L.classList.remove("hidden_panel"),
                    S.classList.add("hidden_panel"),
                    g.classList.add("button_active"),
                    w.classList.remove("button_active"),
                    b.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    gsap.to(".moji_page", {
                        duration: 1,
                        scrambleText: "WORKS NUMS MODE"
                    }),
                    window.line6.show("draw"),
                    window.line4.show("draw"),
                    window.line9.hide(),
                    window.line2.show("draw"),
                    window.line10.hide("draw"),
                    window.line11.hide("draw"),
                    window.line12.hide("draw"),
                    window.line13.hide("draw")
                }
                )),
                w.addEventListener("click", (function() {
                    q.classList.remove("hidden_panel"),
                    k.classList.add("hidden_panel"),
                    T.classList.remove("hidden_panel"),
                    x.classList.add("hidden_panel"),
                    L.classList.add("hidden_panel"),
                    S.classList.remove("hidden_panel"),
                    g.classList.remove("button_active"),
                    w.classList.add("button_active"),
                    b.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    gsap.to(".moji_page", {
                        duration: 1,
                        scrambleText: "WORKS INDEX MODE"
                    }),
                    window.line4.show("draw"),
                    window.line6.hide("draw"),
                    window.line9.position(),
                    window.line9.show("draw"),
                    window.line2.show("draw"),
                    window.line10.hide("draw"),
                    window.line11.hide("draw"),
                    window.line12.hide("draw"),
                    window.line13.hide("draw")
                }
                )),
                b.addEventListener("click", (function() {
                    q.classList.add("hidden_panel"),
                    k.classList.remove("hidden_panel"),
                    T.classList.add("hidden_panel"),
                    x.classList.remove("hidden_panel"),
                    L.classList.add("hidden_panel"),
                    S.classList.add("hidden_panel"),
                    g.classList.remove("button_active"),
                    w.classList.remove("button_active"),
                    b.classList.add("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    gsap.to(".moji_page", {
                        duration: 1,
                        scrambleText: "ABOUT tsuchifumazu"
                    }),
                    window.line9.hide(),
                    window.line4.hide(),
                    window.line6.hide(),
                    window.line7.show("draw"),
                    window.line8.show("draw"),
                    window.line2.hide("draw"),
                    window.line10.position(),
                    window.line11.position(),
                    window.line12.position(),
                    window.line13.position(),
                    window.line10.show("draw"),
                    window.line11.show("draw"),
                    window.line12.show("draw"),
                    window.line13.show("draw"),
                    window.line_sp_05.position(),
                    window.line_sp_01.hide(),
                    window.line_sp_02.hide(),
                    window.line_sp_03.hide(),
                    window.line_sp_04.hide(),
                    window.line_sp_05.hide("draw")
                }
                ))
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0))
      , o = i(n(1));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = function() {
        function e() {
            (0,
            r.default)(this, e)
        }
        return (0,
        o.default)(e, null, [{
            key: "init",
            value: function() {
                var e = document.querySelector(".audio_number2");
                window.line7 = new LeaderLine(document.querySelector(".center2"),document.querySelector(".human_01"),{
                    color: "black",
                    size: 1,
                    startPlug: "square",
                    endPlug: "square",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2
                }),
                window.line7.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line8 = new LeaderLine(document.querySelector(".center2"),document.querySelector(".human_02"),{
                    color: "black",
                    size: 1,
                    startPlug: "square",
                    endPlug: "square",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2
                }),
                window.line8.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                });
                var t = document.querySelector(".works_view_images")
                  , n = document.querySelector(".works_view_credit")
                  , r = document.querySelector(".works_view_video")
                  , o = document.querySelector(".btn_view_images")
                  , i = document.querySelector(".btn_view_credit")
                  , a = document.querySelector(".btn_view_video");
                i.onclick = function() {
                    n.classList.add("view_active"),
                    t.classList.remove("view_active"),
                    r.classList.remove("view_active"),
                    i.classList.add("button_active"),
                    o.classList.remove("button_active"),
                    a.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                ,
                a.onclick = function() {
                    n.classList.remove("view_active"),
                    t.classList.remove("view_active"),
                    r.classList.add("view_active"),
                    i.classList.remove("button_active"),
                    o.classList.remove("button_active"),
                    a.classList.add("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                ,
                o.onclick = function() {
                    n.classList.remove("view_active"),
                    t.classList.add("view_active"),
                    r.classList.remove("view_active"),
                    i.classList.remove("button_active"),
                    o.classList.add("button_active"),
                    a.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                ;
                var c = document.querySelector(".button_sort_all")
                  , u = document.querySelector(".button_sort_mv")
                  , s = document.querySelector(".button_sort_live")
                  , l = document.querySelector(".button_sort_graphic")
                  , d = document.querySelector(".button_sort_ads")
                  , m = document.querySelector(".button_sort_others")
                  , f = document.querySelectorAll(".active_active")
                  , v = document.querySelectorAll(".numbers_MV")
                  , y = document.querySelectorAll(".numbers_LiveDirection")
                  , p = document.querySelectorAll(".numbers_Graphic")
                  , _ = document.querySelectorAll(".numbers_Advertisement")
                  , h = document.querySelectorAll(".numbers_Others");
                c.onclick = function() {
                    c.classList.add("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    f.forEach((function(e, t) {
                        e.classList.remove("sorted")
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "ALL WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "ALL  - " + f.length / 2
                    })
                }
                ,
                u.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.add("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    v.forEach((function(e, t) {
                        e.classList.remove("sorted")
                    }
                    )),
                    y.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    p.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    _.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    h.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "MusiVideo WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "ALL  - " + v.length
                    })
                }
                ,
                s.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.add("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    v.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    y.forEach((function(e, t) {
                        e.classList.remove("sorted")
                    }
                    )),
                    p.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    _.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    h.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "LiveDir. WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "ALL  - " + y.length
                    })
                }
                ,
                l.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.add("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    v.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    y.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    p.forEach((function(e, t) {
                        e.classList.remove("sorted")
                    }
                    )),
                    _.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    h.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "Graphic WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "ALL  - " + p.length
                    })
                }
                ,
                d.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.add("button_active"),
                    m.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    v.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    y.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    p.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    _.forEach((function(e, t) {
                        e.classList.remove("sorted")
                    }
                    )),
                    h.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "Ads WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "ALL  - " + _.length
                    })
                }
                ,
                m.onclick = function() {
                    c.classList.remove("button_active"),
                    u.classList.remove("button_active"),
                    s.classList.remove("button_active"),
                    l.classList.remove("button_active"),
                    d.classList.remove("button_active"),
                    m.classList.add("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    v.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    y.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    p.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    _.forEach((function(e, t) {
                        e.classList.add("sorted")
                    }
                    )),
                    h.forEach((function(e, t) {
                        e.classList.remove("sorted")
                    }
                    )),
                    gsap.to(".moji_sort", {
                        duration: 1,
                        scrambleText: "Others WORKS"
                    }),
                    gsap.to(".moji_sums", {
                        duration: 1,
                        scrambleText: "ALL  - " + h.length
                    })
                }
                ;
                var g = document.querySelector(".button_midi")
                  , w = document.querySelector(".button_index")
                  , b = document.querySelector(".button_about")
                  , L = document.querySelector(".number")
                  , S = document.querySelector(".list")
                  , q = document.querySelector(".center")
                  , k = document.querySelector(".center2")
                  , T = document.querySelector(".right")
                  , x = document.querySelector(".right2");
                g.addEventListener("click", (function() {
                    q.classList.remove("hidden_panel"),
                    k.classList.add("hidden_panel"),
                    T.classList.remove("hidden_panel"),
                    x.classList.add("hidden_panel"),
                    L.classList.remove("hidden_panel"),
                    S.classList.add("hidden_panel"),
                    g.classList.add("button_active"),
                    w.classList.remove("button_active"),
                    b.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    gsap.to(".moji_page", {
                        duration: 1,
                        scrambleText: "WORKS NUMS MODE"
                    }),
                    window.line_sp_01.show("draw"),
                    window.line_sp_02.show("draw"),
                    window.line_sp_03.show("draw"),
                    window.line_sp_04.show("draw"),
                    window.line_sp_05.hide(),
                    window.line_sp_06.hide()
                }
                )),
                w.addEventListener("click", (function() {
                    q.classList.remove("hidden_panel"),
                    k.classList.add("hidden_panel"),
                    T.classList.remove("hidden_panel"),
                    x.classList.add("hidden_panel"),
                    L.classList.add("hidden_panel"),
                    S.classList.remove("hidden_panel"),
                    g.classList.remove("button_active"),
                    w.classList.add("button_active"),
                    b.classList.remove("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    gsap.to(".moji_page", {
                        duration: 1,
                        scrambleText: "WORKS INDEX MODE"
                    }),
                    window.line_sp_01.show("draw"),
                    window.line_sp_02.show("draw"),
                    window.line_sp_03.show("draw"),
                    window.line_sp_04.show("draw"),
                    window.line_sp_05.hide(),
                    window.line_sp_06.hide()
                }
                )),
                b.addEventListener("click", (function() {
                    q.classList.add("hidden_panel"),
                    k.classList.remove("hidden_panel"),
                    T.classList.add("hidden_panel"),
                    x.classList.remove("hidden_panel"),
                    L.classList.add("hidden_panel"),
                    S.classList.add("hidden_panel"),
                    g.classList.remove("button_active"),
                    w.classList.remove("button_active"),
                    b.classList.add("button_active"),
                    e.pause(),
                    e.currentTime = 0,
                    e.play(),
                    gsap.to(".moji_page", {
                        duration: 1,
                        scrambleText: "ABOUT tsuchifumazu"
                    }),
                    window.line_sp_05.position(),
                    window.line_sp_06.position(),
                    window.line_sp_01.hide(),
                    window.line_sp_02.hide(),
                    window.line_sp_03.hide(),
                    window.line_sp_04.hide(),
                    window.line_sp_05.show("draw"),
                    window.line_sp_06.show("draw")
                }
                ))
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0))
      , o = i(n(1));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = function() {
        function e() {
            (0,
            r.default)(this, e)
        }
        return (0,
        o.default)(e, null, [{
            key: "init",
            value: function() {
                var e = document.querySelector(".audio_number2")
                  , t = document.querySelectorAll(".button_menu")
                  , n = document.querySelector(".btn_view_images")
                  , r = document.querySelector(".btn_view_credit")
                  , o = document.querySelector(".btn_view_video")
                  , i = document.querySelector(".button_sort_all")
                  , a = document.querySelector(".button_sort_mv")
                  , c = document.querySelector(".button_sort_live")
                  , u = document.querySelector(".button_sort_graphic")
                  , s = document.querySelector(".button_sort_ads")
                  , l = document.querySelector(".button_sort_others")
                  , d = document.querySelectorAll(".active_active");
                document.querySelectorAll(".numbers_MV"),
                document.querySelectorAll(".numbers_LiveDirection"),
                document.querySelectorAll(".numbers_Graphic"),
                document.querySelectorAll(".numbers_Advertisement"),
                document.querySelectorAll(".numbers_Others");
                i.addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                a.addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                c.addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                u.addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                s.addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                l.addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                n.addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                r.addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                o.addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                t[0].addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                t[1].addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                t[2].addEventListener("mouseenter", (function() {
                    e.pause(),
                    e.currentTime = 0,
                    e.play()
                }
                )),
                d.forEach((function(t) {
                    t.addEventListener("mouseenter", (function() {
                        e.pause(),
                        e.currentTime = 0,
                        e.play()
                    }
                    ))
                }
                ))
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(100))
      , o = a(n(0))
      , i = a(n(1));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = function() {
        function e() {
            (0,
            o.default)(this, e)
        }
        return (0,
        i.default)(e, null, [{
            key: "init",
            value: function() {
                var e;
                window.line = new LeaderLine(document.querySelector(".moji_area"),document.querySelector(".buttons"),{
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                window.line2 = new LeaderLine(document.querySelector(".buttons"),document.querySelector(".sort"),{
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "right",
                    endSocket: "left",
                    path: "grid",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                line2.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line3 = new LeaderLine(document.querySelector(".sort"),document.querySelector(".number"),{
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "bottom",
                    endSocket: "top",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                window.line4 = new LeaderLine(document.querySelector(".number"),document.querySelector(".works_display"),{
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "bottom- right",
                    endSocket: "left",
                    path: "grid",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                window.line4.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line5 = new LeaderLine(document.querySelector(".ui_kari"),document.querySelector(".buttons"),{
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                window.line6 = new LeaderLine(document.querySelector(".bottom"),document.querySelector(".number"),(e = {
                    color: "black",
                    size: 1.5,
                    startPlug: "square",
                    endPlug: "square",
                    path: "straight"
                },
                (0,
                r.default)(e, "path", "grid"),
                (0,
                r.default)(e, "startPlugSize", 1.5),
                (0,
                r.default)(e, "endPlugSize", 1.5),
                (0,
                r.default)(e, "hide", !0),
                (0,
                r.default)(e, "dash", {
                    animation: !0
                }),
                e))
            }
        }]),
        e
    }();
    t.default = c
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(43), i = (r = o) && r.__esModule ? r : {
        default: r
    };
    t.default = function(e, t, n) {
        return t in e ? (0,
        i.default)(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0))
      , o = i(n(1));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = function() {
        function e() {
            (0,
            r.default)(this, e)
        }
        return (0,
        o.default)(e, null, [{
            key: "init",
            value: function() {
                window.line_sp_01 = new LeaderLine(document.querySelector(".line_annai_1"),document.querySelector(".line_annai_2"),{
                    color: "black",
                    size: 1.2,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "bottom",
                    endSocket: "top",
                    path: "straight",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                window.line_sp_02 = new LeaderLine(document.querySelector(".sort"),document.querySelector(".number"),{
                    color: "black",
                    size: 1.2,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "right",
                    endSocket: "left",
                    path: "straight",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                window.line_sp_03 = new LeaderLine(document.querySelector(".line_annai_4"),document.querySelector(".sort"),{
                    color: "black",
                    size: 1.2,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "top",
                    endSocket: "bottom",
                    path: "straight",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                window.line_sp_04 = new LeaderLine(document.querySelector(".number"),document.querySelector(".line_annai_3"),{
                    color: "black",
                    size: 1.2,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "top",
                    endSocket: "bottom",
                    path: "straight",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                window.line_sp_05 = new LeaderLine(document.querySelector(".center2"),document.querySelector(".human_01"),{
                    color: "black",
                    size: 1.2,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "bottom",
                    endSocket: "top",
                    path: "straight",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                }),
                window.line_sp_06 = new LeaderLine(document.querySelector(".center2"),document.querySelector(".human_02"),{
                    color: "black",
                    size: 1.2,
                    startPlug: "square",
                    endPlug: "square",
                    startSocket: "right",
                    endSocket: "right",
                    path: "grid",
                    startPlugSize: 1.2,
                    endPlugSize: 1.2,
                    hide: !0,
                    dash: {
                        animation: !0
                    }
                })
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0))
      , o = i(n(1));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = function() {
        function e() {
            (0,
            r.default)(this, e)
        }
        return (0,
        o.default)(e, null, [{
            key: "init",
            value: function() {
                window.innerWidth <= 768 ? (window.line_spp_01 = new LeaderLine(document.querySelector(".line_annai_1"),document.querySelector(".line_annai_2"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.line_spp_02 = new LeaderLine(document.querySelector(".sort"),document.querySelector(".number"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.line_spp_03 = new LeaderLine(document.querySelector(".line_annai_4"),document.querySelector(".sort"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.line_spp_04 = new LeaderLine(document.querySelector(".number"),document.querySelector(".line_annai_3"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.animateAndHideAllLines = function() {
                    for (var e = function(e) {
                        var t = window["line_spp_0" + e];
                        t && (t.position(),
                        setTimeout((function() {
                            t.show("draw", {
                                duration: 300
                            }),
                            setTimeout((function() {
                                t.hide("fade", {
                                    duration: 200
                                })
                            }
                            ), 200)
                        }
                        ), 30 * (e - 1)))
                    }, t = 1; t <= 4; t++)
                        e(t)
                }
                ) : (window.line_anim1 = new LeaderLine(document.querySelector(".moji_area"),document.querySelector(".buttons"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.line_anim2 = new LeaderLine(document.querySelector(".buttons"),document.querySelector(".sort"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "grid",
                    startSocket: "right",
                    endSocket: "left",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.line_anim2.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line_anim3 = new LeaderLine(document.querySelector(".sort"),document.querySelector(".number"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.line_anim4 = new LeaderLine(document.querySelector(".number"),document.querySelector(".works_display"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "grid",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.line_anim4.setOptions({
                    startSocketGravity: [0, 0],
                    endSocketGravity: [0, 0]
                }),
                window.line_anim5 = new LeaderLine(document.querySelector(".ui_kari"),document.querySelector(".buttons"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "straight",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.line_anim6 = new LeaderLine(document.querySelector(".bottom"),document.querySelector(".number"),{
                    size: 2,
                    startPlug: "disc",
                    endPlug: "disc",
                    path: "grid",
                    startPlugSize: 1.5,
                    endPlugSize: 1.5,
                    hide: !0,
                    dash: {
                        animation: !0
                    },
                    color: "transparent",
                    startPlugColor: "transparent",
                    endPlugColor: "#E65619"
                }),
                window.animateAndHideAllLines = function() {
                    for (var e = function(e) {
                        var t = window["line_anim" + e];
                        t && (t.position(),
                        setTimeout((function() {
                            t.show("draw", {
                                duration: 500
                            }),
                            setTimeout((function() {
                                t.hide("fade", {
                                    duration: 100
                                })
                            }
                            ), 400)
                        }
                        ), 30 * (e - 1)))
                    }, t = 1; t <= 6; t++)
                        e(t)
                }
                )
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0))
      , o = i(n(1));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = function() {
        function e() {
            (0,
            r.default)(this, e)
        }
        return (0,
        o.default)(e, null, [{
            key: "init",
            value: function() {
                window.innerHeight < 760 && document.querySelector(".center").classList.add("resize_center"),
                window.innerHeight
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = s(n(50))
      , o = s(n(32))
      , i = s(n(18))
      , a = s(n(0))
      , c = s(n(1))
      , u = s(n(17));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = function() {
        function e() {
            (0,
            a.default)(this, e)
        }
        return (0,
        c.default)(e, null, [{
            key: "init",
            value: function() {
                var e = document.querySelector(".audio_number2")
                  , t = (0,
                i.default)(document.querySelectorAll(".btn_tab"))
                  , n = 0
                  , a = {};
                function c() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = arguments[1]
                      , n = new KeyboardEvent("keydown",{
                        key: t,
                        code: t.startsWith("Arrow") ? t : "Key" + t.toUpperCase(),
                        bubbles: !0,
                        cancelable: !0,
                        shiftKey: e.includes("Shift"),
                        ctrlKey: e.includes("Control"),
                        altKey: e.includes("Alt"),
                        metaKey: e.includes("Meta")
                    });
                    document.dispatchEvent(n)
                }
                "requestMIDIAccess"in navigator ? navigator.requestMIDIAccess().then((function(e) {
                    console.log("\nMIDIアクセス成功");
                    var t = !0
                      , n = !1
                      , r = void 0;
                    try {
                        for (var a, c = (0,
                        o.default)(e.inputs.values()); !(t = (a = c.next()).done); t = !0) {
                            var u = a.value;
                            console.log(u.name),
                            gsap.to(".moji_midi", {
                                duration: 1,
                                scrambleText: u.name
                            }),
                            u.onmidimessage = function(e) {
                                console.log((0,
                                i.default)(e.data).join(", "))
                            }
                        }
                    } catch (e) {
                        n = !0,
                        r = e
                    } finally {
                        try {
                            !t && c.return && c.return()
                        } finally {
                            if (n)
                                throw r
                        }
                    }
                }
                )).catch((function() {
                    console.log("失敗しました")
                }
                )) : console.log("WebMIDI API is not supported.");
                var s = {
                    36: "¥",
                    37: "q",
                    38: "w",
                    39: "e",
                    40: "9",
                    41: "0",
                    42: "-",
                    43: "^",
                    44: "5",
                    45: "6",
                    46: "7",
                    47: "8",
                    48: "1",
                    49: "2",
                    50: "3",
                    51: "4",
                    52: "f",
                    53: "g",
                    54: "h",
                    55: "j",
                    56: "[",
                    57: "a",
                    58: "s",
                    59: "d",
                    60: "i",
                    61: "o",
                    62: "p",
                    63: "@",
                    64: "r",
                    65: "t",
                    66: "y",
                    67: "u",
                    68: ",",
                    69: ".",
                    70: "/",
                    71: "_",
                    72: "v",
                    73: "b",
                    74: "n",
                    75: "m",
                    76: "]",
                    77: "z",
                    78: "x",
                    79: "c",
                    80: "k",
                    81: "l",
                    82: ";",
                    83: ":"
                };
                function l(e) {
                    var t = s[e];
                    t && c([], t)
                }
                navigator.requestMIDIAccess().then((function(i) {
                    var s = !0
                      , d = !1
                      , m = void 0;
                    try {
                        for (var f, v = (0,
                        o.default)(i.inputs.values()); !(s = (f = v.next()).done); s = !0) {
                            f.value.onmidimessage = function(o) {
                                var i = (0,
                                r.default)(o.data, 3)
                                  , s = i[0]
                                  , d = i[1]
                                  , m = i[2];
                                if (28 === d) {
                                    var f = void 0 !== a[d] ? a[d] : m;
                                    return m > f ? (n = (n + 1) % t.length,
                                    t[n].click()) : m < f && (n = (n - 1 + t.length) % t.length,
                                    t[n].click()),
                                    void 0 !== e && (e.currentTime = 0,
                                    e.pause(),
                                    e.currentTime = 0,
                                    e.play()),
                                    void (a[d] = m)
                                }
                                if (9 === d) {
                                    var v = void 0 !== a[d] ? a[d] : m;
                                    return e.pause(),
                                    e.currentTime = 0,
                                    e.play(),
                                    m > v ? c([], "ArrowDown") : m < v && c([], "ArrowUp"),
                                    void (a[d] = m)
                                }
                                26 === d && m > 5 && document.querySelector(".button_midi").click(),
                                27 === d && m > 5 && document.querySelector(".button_about").click(),
                                144 == (240 & s) && m > 2 && (void 0 !== e && (e.currentTime = 0,
                                e.pause(),
                                e.currentTime = 0,
                                e.play()),
                                u.default.image_switch(),
                                l(d))
                            }
                        }
                    } catch (e) {
                        d = !0,
                        m = e
                    } finally {
                        try {
                            !s && v.return && v.return()
                        } finally {
                            if (d)
                                throw m
                        }
                    }
                }
                ))
            }
        }]),
        e
    }();
    t.default = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(n(0))
      , o = i(n(1));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var a = function() {
        function e() {
            (0,
            r.default)(this, e)
        }
        return (0,
        o.default)(e, null, [{
            key: "init",
            value: function() {
                var e = document.getElementById("dvdLogo")
                  , t = void 0
                  , n = void 0
                  , r = 100
                  , o = 100
                  , i = 2
                  , a = 2;
                function c() {
                    e.style.display = "block",
                    r = 100,
                    o = 100,
                    i = 2,
                    a = 2,
                    u()
                }
                function u() {
                    var t = window.innerWidth
                      , c = window.innerHeight
                      , s = e.offsetWidth
                      , l = e.offsetHeight;
                    ((r += i) <= 0 || r + s >= t) && (i *= -1),
                    ((o += a) <= 0 || o + l >= c) && (a *= -1),
                    e.style.left = r + "px",
                    e.style.top = o + "px",
                    n = requestAnimationFrame(u)
                }
                function s() {
                    cancelAnimationFrame(n),
                    e.style.display = "none",
                    clearTimeout(t),
                    t = setTimeout(c, 6e3)
                }
                ["mousemove", "keydown", "mousedown", "touchstart"].forEach((function(e) {
                    document.addEventListener(e, s)
                }
                )),
                s()
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = a(n(107))
      , o = a(n(0))
      , i = a(n(1));
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = function() {
        function e() {
            (0,
            o.default)(this, e)
        }
        return (0,
        i.default)(e, null, [{
            key: "init",
            value: function() {
                document.body.classList.add("loading-mode"),
                setTimeout((function() {
                    var e = document.querySelector(".loading_text");
                    e && e.remove(),
                    document.body.classList.remove("loading-mode"),
                    document.body.classList.add("loaded");
                    var t = [].concat((0,
                    r.default)(document.querySelectorAll(".disp_img")), [document.querySelector(".moji_area_desc")], (0,
                    r.default)(document.querySelectorAll(".buttons")), (0,
                    r.default)(document.querySelectorAll(".ui")), [document.querySelector(".center"), document.querySelector(".right"), document.querySelector(".bottom")], (0,
                    r.default)(document.querySelectorAll(".midi_title")));
                    t.forEach((function(e, n) {
                        e && (e.style.opacity = "0",
                        e.style.visibility = "visible",
                        e.style.pointerEvents = "auto",
                        e.style.transition = "opacity 0.05s ease",
                        setTimeout((function() {
                            var r = 0
                              , o = setInterval((function() {
                                r < 2 ? (e.style.opacity = r % 2 == 0 ? "1" : "0",
                                r++) : (e.style.opacity = "1",
                                e.style.transition = "opacity 0.1s ease",
                                clearInterval(o),
                                n === t.length - 1 && setTimeout((function() {
                                    window.innerWidth <= 768 || (window.line.show("draw"),
                                    window.line2.show("draw"),
                                    window.line3.show("draw"),
                                    window.line4.show("draw"),
                                    window.line5.show("draw"),
                                    window.line6.show("draw")),
                                    window.animateAndHideAllLines()
                                }
                                ), 100))
                            }
                            ), 50)
                        }
                        ), 50 * n))
                    }
                    ))
                }
                ), 3e3)
            }
        }]),
        e
    }();
    t.default = c
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(18), i = (r = o) && r.__esModule ? r : {
        default: r
    };
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return (0,
        i.default)(e)
    }
}
]);
