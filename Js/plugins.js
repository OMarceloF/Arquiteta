/*!
 * jQuery Easing Plugin
 */

!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return n(e);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (exports = n(require("jquery")))
    : n(jQuery);
})(function (n) {
  function e(n) {
    var e = 7.5625,
      t = 2.75;
    return n < 1 / t
      ? e * n * n
      : n < 2 / t
      ? e * (n -= 1.5 / t) * n + 0.75
      : n < 2.5 / t
      ? e * (n -= 2.25 / t) * n + 0.9375
      : e * (n -= 2.625 / t) * n + 0.984375;
  }
  void 0 !== n.easing && (n.easing.jswing = n.easing.swing);
  var t = Math.pow,
    u = Math.sqrt,
    r = Math.sin,
    i = Math.cos,
    a = Math.PI,
    c = 1.70158,
    o = 1.525 * c,
    s = (2 * a) / 3,
    f = (2 * a) / 4.5;
  n.extend(n.easing, {
    def: "easeOutQuad",
    swing: function (e) {
      return n.easing[n.easing.def](e);
    },
    easeInQuad: function (n) {
      return n * n;
    },
    easeOutQuad: function (n) {
      return 1 - (1 - n) * (1 - n);
    },
    easeInOutQuad: function (n) {
      return n < 0.5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2;
    },
    easeInCubic: function (n) {
      return n * n * n;
    },
    easeOutCubic: function (n) {
      return 1 - t(1 - n, 3);
    },
    easeInOutCubic: function (n) {
      return n < 0.5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2;
    },
    easeInQuart: function (n) {
      return n * n * n * n;
    },
    easeOutQuart: function (n) {
      return 1 - t(1 - n, 4);
    },
    easeInOutQuart: function (n) {
      return n < 0.5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2;
    },
    easeInQuint: function (n) {
      return n * n * n * n * n;
    },
    easeOutQuint: function (n) {
      return 1 - t(1 - n, 5);
    },
    easeInOutQuint: function (n) {
      return n < 0.5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2;
    },
    easeInSine: function (n) {
      return 1 - i((n * a) / 2);
    },
    easeOutSine: function (n) {
      return r((n * a) / 2);
    },
    easeInOutSine: function (n) {
      return -(i(a * n) - 1) / 2;
    },
    easeInExpo: function (n) {
      return 0 === n ? 0 : t(2, 10 * n - 10);
    },
    easeOutExpo: function (n) {
      return 1 === n ? 1 : 1 - t(2, -10 * n);
    },
    easeInOutExpo: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : n < 0.5
        ? t(2, 20 * n - 10) / 2
        : (2 - t(2, -20 * n + 10)) / 2;
    },
    easeInCirc: function (n) {
      return 1 - u(1 - t(n, 2));
    },
    easeOutCirc: function (n) {
      return u(1 - t(n - 1, 2));
    },
    easeInOutCirc: function (n) {
      return n < 0.5
        ? (1 - u(1 - t(2 * n, 2))) / 2
        : (u(1 - t(-2 * n + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s);
    },
    easeOutElastic: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : t(2, -10 * n) * r((10 * n - 0.75) * s) + 1;
    },
    easeInOutElastic: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : n < 0.5
        ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2
        : (t(2, -20 * n + 10) * r((20 * n - 11.125) * f)) / 2 + 1;
    },
    easeInBack: function (n) {
      return (c + 1) * n * n * n - c * n * n;
    },
    easeOutBack: function (n) {
      return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2);
    },
    easeInOutBack: function (n) {
      return n < 0.5
        ? (t(2 * n, 2) * (7.189819 * n - o)) / 2
        : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2;
    },
    easeInBounce: function (n) {
      return 1 - e(1 - n);
    },
    easeOutBounce: e,
    easeInOutBounce: function (n) {
      return n < 0.5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2;
    },
  });
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define("packery/js/rect", b)
    : "object" == typeof module && module.exports
    ? (module.exports = b())
    : ((a.Packery = a.Packery || {}), (a.Packery.Rect = b()));
})(window, function () {
  function a(b) {
    for (var c in a.defaults) this[c] = a.defaults[c];
    for (c in b) this[c] = b[c];
  }
  a.defaults = { x: 0, y: 0, width: 0, height: 0 };
  var b = a.prototype;
  return (
    (b.contains = function (a) {
      var b = a.width || 0,
        c = a.height || 0;
      return (
        this.x <= a.x &&
        this.y <= a.y &&
        this.x + this.width >= a.x + b &&
        this.y + this.height >= a.y + c
      );
    }),
    (b.overlaps = function (a) {
      var b = this.x + this.width,
        c = this.y + this.height,
        d = a.x + a.width,
        e = a.y + a.height;
      return this.x < d && b > a.x && this.y < e && c > a.y;
    }),
    (b.getMaximalFreeRects = function (b) {
      if (!this.overlaps(b)) return !1;
      var c,
        d = [],
        e = this.x + this.width,
        f = this.y + this.height,
        g = b.x + b.width,
        h = b.y + b.height;
      return (
        this.y < b.y &&
          ((c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y,
          })),
          d.push(c)),
        e > g &&
          ((c = new a({ x: g, y: this.y, width: e - g, height: this.height })),
          d.push(c)),
        f > h &&
          ((c = new a({ x: this.x, y: h, width: this.width, height: f - h })),
          d.push(c)),
        this.x < b.x &&
          ((c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height,
          })),
          d.push(c)),
        d
      );
    }),
    (b.canFit = function (a) {
      return this.width >= a.width && this.height >= a.height;
    }),
    a
  );
}),
  (function (a, b) {
    if ("function" == typeof define && define.amd)
      define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof module && module.exports)
      module.exports = b(require("./rect"));
    else {
      var c = (a.Packery = a.Packery || {});
      c.Packer = b(c.Rect);
    }
  })(window, function (a) {
    function b(a, b, c) {
      (this.width = a || 0),
        (this.height = b || 0),
        (this.sortDirection = c || "downwardLeftToRight"),
        this.reset();
    }
    var c = b.prototype;
    (c.reset = function () {
      this.spaces = [];
      var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
      this.spaces.push(b),
        (this.sorter = d[this.sortDirection] || d.downwardLeftToRight);
    }),
      (c.pack = function (a) {
        for (var b = 0; b < this.spaces.length; b++) {
          var c = this.spaces[b];
          if (c.canFit(a)) {
            this.placeInSpace(a, c);
            break;
          }
        }
      }),
      (c.columnPack = function (a) {
        for (var b = 0; b < this.spaces.length; b++) {
          var c = this.spaces[b],
            d =
              c.x <= a.x &&
              c.x + c.width >= a.x + a.width &&
              c.height >= a.height - 0.01;
          if (d) {
            (a.y = c.y), this.placed(a);
            break;
          }
        }
      }),
      (c.rowPack = function (a) {
        for (var b = 0; b < this.spaces.length; b++) {
          var c = this.spaces[b],
            d =
              c.y <= a.y &&
              c.y + c.height >= a.y + a.height &&
              c.width >= a.width - 0.01;
          if (d) {
            (a.x = c.x), this.placed(a);
            break;
          }
        }
      }),
      (c.placeInSpace = function (a, b) {
        (a.x = b.x), (a.y = b.y), this.placed(a);
      }),
      (c.placed = function (a) {
        for (var b = [], c = 0; c < this.spaces.length; c++) {
          var d = this.spaces[c],
            e = d.getMaximalFreeRects(a);
          e ? b.push.apply(b, e) : b.push(d);
        }
        (this.spaces = b), this.mergeSortSpaces();
      }),
      (c.mergeSortSpaces = function () {
        b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
      }),
      (c.addSpace = function (a) {
        this.spaces.push(a), this.mergeSortSpaces();
      }),
      (b.mergeRects = function (a) {
        var b = 0,
          c = a[b];
        a: for (; c; ) {
          for (var d = 0, e = a[b + d]; e; ) {
            if (e == c) d++;
            else {
              if (e.contains(c)) {
                a.splice(b, 1), (c = a[b]);
                continue a;
              }
              c.contains(e) ? a.splice(b + d, 1) : d++;
            }
            e = a[b + d];
          }
          b++, (c = a[b]);
        }
        return a;
      });
    var d = {
      downwardLeftToRight: function (a, b) {
        return a.y - b.y || a.x - b.x;
      },
      rightwardTopToBottom: function (a, b) {
        return a.x - b.x || a.y - b.y;
      },
    };
    return b;
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define("packery/js/item", ["outlayer/outlayer", "./rect"], b)
      : "object" == typeof module && module.exports
      ? (module.exports = b(require("outlayer"), require("./rect")))
      : (a.Packery.Item = b(a.Outlayer, a.Packery.Rect));
  })(window, function (a, b) {
    var c = document.documentElement.style,
      d = "string" == typeof c.transform ? "transform" : "WebkitTransform",
      e = function () {
        a.Item.apply(this, arguments);
      },
      f = (e.prototype = Object.create(a.Item.prototype)),
      g = f._create;
    f._create = function () {
      g.call(this), (this.rect = new b());
    };
    var h = f.moveTo;
    return (
      (f.moveTo = function (a, b) {
        var c = Math.abs(this.position.x - a),
          d = Math.abs(this.position.y - b),
          e =
            this.layout.dragItemCount &&
            !this.isPlacing &&
            !this.isTransitioning &&
            1 > c &&
            1 > d;
        return e ? void this.goTo(a, b) : void h.apply(this, arguments);
      }),
      (f.enablePlacing = function () {
        this.removeTransitionStyles(),
          this.isTransitioning && d && (this.element.style[d] = "none"),
          (this.isTransitioning = !1),
          this.getSize(),
          this.layout._setRectSize(this.element, this.rect),
          (this.isPlacing = !0);
      }),
      (f.disablePlacing = function () {
        this.isPlacing = !1;
      }),
      (f.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.layout.packer.addSpace(this.rect),
          this.emitEvent("remove", [this]);
      }),
      (f.showDropPlaceholder = function () {
        var a = this.dropPlaceholder;
        a ||
          ((a = this.dropPlaceholder = document.createElement("div")),
          (a.className = "packery-drop-placeholder"),
          (a.style.position = "absolute")),
          (a.style.width = this.size.width + "px"),
          (a.style.height = this.size.height + "px"),
          this.positionDropPlaceholder(),
          this.layout.element.appendChild(a);
      }),
      (f.positionDropPlaceholder = function () {
        this.dropPlaceholder.style[d] =
          "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
      }),
      (f.hideDropPlaceholder = function () {
        this.layout.element.removeChild(this.dropPlaceholder);
      }),
      e
    );
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(
          "packery/js/packery",
          [
            "get-size/get-size",
            "outlayer/outlayer",
            "./rect",
            "./packer",
            "./item",
          ],
          b
        )
      : "object" == typeof module && module.exports
      ? (module.exports = b(
          require("get-size"),
          require("outlayer"),
          require("./rect"),
          require("./packer"),
          require("./item")
        ))
      : (a.Packery = b(
          a.getSize,
          a.Outlayer,
          a.Packery.Rect,
          a.Packery.Packer,
          a.Packery.Item
        ));
  })(window, function (a, b, c, d, e) {
    function f(a, b) {
      return a.position.y - b.position.y || a.position.x - b.position.x;
    }
    function g(a, b) {
      return a.position.x - b.position.x || a.position.y - b.position.y;
    }
    function h(a, b) {
      var c = b.x - a.x,
        d = b.y - a.y;
      return Math.sqrt(c * c + d * d);
    }
    c.prototype.canFit = function (a) {
      return this.width >= a.width - 1 && this.height >= a.height - 1;
    };
    var i = b.create("packery");
    i.Item = e;
    var j = i.prototype;
    (j._create = function () {
      b.prototype._create.call(this),
        (this.packer = new d()),
        (this.shiftPacker = new d()),
        (this.isEnabled = !0),
        (this.dragItemCount = 0);
      var a = this;
      (this.handleDraggabilly = {
        dragStart: function () {
          a.itemDragStart(this.element);
        },
        dragMove: function () {
          a.itemDragMove(this.element, this.position.x, this.position.y);
        },
        dragEnd: function () {
          a.itemDragEnd(this.element);
        },
      }),
        (this.handleUIDraggable = {
          start: function (b, c) {
            c && a.itemDragStart(b.currentTarget);
          },
          drag: function (b, c) {
            c &&
              a.itemDragMove(b.currentTarget, c.position.left, c.position.top);
          },
          stop: function (b, c) {
            c && a.itemDragEnd(b.currentTarget);
          },
        });
    }),
      (j._resetLayout = function () {
        this.getSize(), this._getMeasurements();
        var a, b, c;
        this._getOption("horizontal")
          ? ((a = 1 / 0),
            (b = this.size.innerHeight + this.gutter),
            (c = "rightwardTopToBottom"))
          : ((a = this.size.innerWidth + this.gutter),
            (b = 1 / 0),
            (c = "downwardLeftToRight")),
          (this.packer.width = this.shiftPacker.width = a),
          (this.packer.height = this.shiftPacker.height = b),
          (this.packer.sortDirection = this.shiftPacker.sortDirection = c),
          this.packer.reset(),
          (this.maxY = 0),
          (this.maxX = 0);
      }),
      (j._getMeasurements = function () {
        this._getMeasurement("columnWidth", "width"),
          this._getMeasurement("rowHeight", "height"),
          this._getMeasurement("gutter", "width");
      }),
      (j._getItemLayoutPosition = function (a) {
        if (
          (this._setRectSize(a.element, a.rect),
          this.isShifting || this.dragItemCount > 0)
        ) {
          var b = this._getPackMethod();
          this.packer[b](a.rect);
        } else this.packer.pack(a.rect);
        return this._setMaxXY(a.rect), a.rect;
      }),
      (j.shiftLayout = function () {
        (this.isShifting = !0), this.layout(), delete this.isShifting;
      }),
      (j._getPackMethod = function () {
        return this._getOption("horizontal") ? "rowPack" : "columnPack";
      }),
      (j._setMaxXY = function (a) {
        (this.maxX = Math.max(a.x + a.width, this.maxX)),
          (this.maxY = Math.max(a.y + a.height, this.maxY));
      }),
      (j._setRectSize = function (b, c) {
        var d = a(b),
          e = d.outerWidth,
          f = d.outerHeight;
        (e || f) &&
          ((e = this._applyGridGutter(e, this.columnWidth)),
          (f = this._applyGridGutter(f, this.rowHeight))),
          (c.width = Math.min(e, this.packer.width)),
          (c.height = Math.min(f, this.packer.height));
      }),
      (j._applyGridGutter = function (a, b) {
        if (!b) return a + this.gutter;
        b += this.gutter;
        var c = a % b,
          d = c && 1 > c ? "round" : "ceil";
        return (a = Math[d](a / b) * b);
      }),
      (j._getContainerSize = function () {
        return this._getOption("horizontal")
          ? { width: this.maxX - this.gutter }
          : { height: this.maxY - this.gutter };
      }),
      (j._manageStamp = function (a) {
        var b,
          d = this.getItem(a);
        if (d && d.isPlacing) b = d.rect;
        else {
          var e = this._getElementOffset(a);
          b = new c({
            x: this._getOption("originLeft") ? e.left : e.right,
            y: this._getOption("originTop") ? e.top : e.bottom,
          });
        }
        this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
      }),
      (j.sortItemsByPosition = function () {
        var a = this._getOption("horizontal") ? g : f;
        this.items.sort(a);
      }),
      (j.fit = function (a, b, c) {
        var d = this.getItem(a);
        d &&
          (this.stamp(d.element),
          d.enablePlacing(),
          this.updateShiftTargets(d),
          (b = void 0 === b ? d.rect.x : b),
          (c = void 0 === c ? d.rect.y : c),
          this.shift(d, b, c),
          this._bindFitEvents(d),
          d.moveTo(d.rect.x, d.rect.y),
          this.shiftLayout(),
          this.unstamp(d.element),
          this.sortItemsByPosition(),
          d.disablePlacing());
      }),
      (j._bindFitEvents = function (a) {
        function b() {
          d++, 2 == d && c.dispatchEvent("fitComplete", null, [a]);
        }
        var c = this,
          d = 0;
        a.once("layout", b), this.once("layoutComplete", b);
      }),
      (j.resize = function () {
        this.isResizeBound &&
          this.needsResizeLayout() &&
          (this.options.shiftPercentResize
            ? this.resizeShiftPercentLayout()
            : this.layout());
      }),
      (j.needsResizeLayout = function () {
        var b = a(this.element),
          c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return b[c] != this.size[c];
      }),
      (j.resizeShiftPercentLayout = function () {
        var b = this._getItemsForLayout(this.items),
          c = this._getOption("horizontal"),
          d = c ? "y" : "x",
          e = c ? "height" : "width",
          f = c ? "rowHeight" : "columnWidth",
          g = c ? "innerHeight" : "innerWidth",
          h = this[f];
        if ((h = h && h + this.gutter)) {
          this._getMeasurements();
          var i = this[f] + this.gutter;
          b.forEach(function (a) {
            var b = Math.round(a.rect[d] / h);
            a.rect[d] = b * i;
          });
        } else {
          var j = a(this.element)[g] + this.gutter,
            k = this.packer[e];
          b.forEach(function (a) {
            a.rect[d] = (a.rect[d] / k) * j;
          });
        }
        this.shiftLayout();
      }),
      (j.itemDragStart = function (a) {
        if (this.isEnabled) {
          this.stamp(a);
          var b = this.getItem(a);
          b &&
            (b.enablePlacing(),
            b.showDropPlaceholder(),
            this.dragItemCount++,
            this.updateShiftTargets(b));
        }
      }),
      (j.updateShiftTargets = function (a) {
        this.shiftPacker.reset(), this._getBoundingRect();
        var b = this._getOption("originLeft"),
          d = this._getOption("originTop");
        this.stamps.forEach(function (a) {
          var e = this.getItem(a);
          if (!e || !e.isPlacing) {
            var f = this._getElementOffset(a),
              g = new c({ x: b ? f.left : f.right, y: d ? f.top : f.bottom });
            this._setRectSize(a, g), this.shiftPacker.placed(g);
          }
        }, this);
        var e = this._getOption("horizontal"),
          f = e ? "rowHeight" : "columnWidth",
          g = e ? "height" : "width";
        (this.shiftTargetKeys = []), (this.shiftTargets = []);
        var h,
          i = this[f];
        if ((i = i && i + this.gutter)) {
          var j = Math.ceil(a.rect[g] / i),
            k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
          h = (k - j) * i;
          for (var l = 0; k > l; l++) this._addShiftTarget(l * i, 0, h);
        } else
          (h = this.shiftPacker[g] + this.gutter - a.rect[g]),
            this._addShiftTarget(0, 0, h);
        var m = this._getItemsForLayout(this.items),
          n = this._getPackMethod();
        m.forEach(function (a) {
          var b = a.rect;
          this._setRectSize(a.element, b),
            this.shiftPacker[n](b),
            this._addShiftTarget(b.x, b.y, h);
          var c = e ? b.x + b.width : b.x,
            d = e ? b.y : b.y + b.height;
          if ((this._addShiftTarget(c, d, h), i))
            for (var f = Math.round(b[g] / i), j = 1; f > j; j++) {
              var k = e ? c : b.x + i * j,
                l = e ? b.y + i * j : d;
              this._addShiftTarget(k, l, h);
            }
        }, this);
      }),
      (j._addShiftTarget = function (a, b, c) {
        var d = this._getOption("horizontal") ? b : a;
        if (!(0 !== d && d > c)) {
          var e = a + "," + b,
            f = -1 != this.shiftTargetKeys.indexOf(e);
          f ||
            (this.shiftTargetKeys.push(e),
            this.shiftTargets.push({ x: a, y: b }));
        }
      }),
      (j.shift = function (a, b, c) {
        var d,
          e = 1 / 0,
          f = { x: b, y: c };
        this.shiftTargets.forEach(function (a) {
          var b = h(a, f);
          e > b && ((d = a), (e = b));
        }),
          (a.rect.x = d.x),
          (a.rect.y = d.y);
      });
    var k = 120;
    (j.itemDragMove = function (a, b, c) {
      function d() {
        f.shift(e, b, c), e.positionDropPlaceholder(), f.layout();
      }
      var e = this.isEnabled && this.getItem(a);
      if (e) {
        (b -= this.size.paddingLeft), (c -= this.size.paddingTop);
        var f = this,
          g = new Date();
        this._itemDragTime && g - this._itemDragTime < k
          ? (clearTimeout(this.dragTimeout),
            (this.dragTimeout = setTimeout(d, k)))
          : (d(), (this._itemDragTime = g));
      }
    }),
      (j.itemDragEnd = function (a) {
        function b() {
          d++,
            2 == d &&
              (c.element.classList.remove("is-positioning-post-drag"),
              c.hideDropPlaceholder(),
              e.dispatchEvent("dragItemPositioned", null, [c]));
        }
        var c = this.isEnabled && this.getItem(a);
        if (c) {
          clearTimeout(this.dragTimeout),
            c.element.classList.add("is-positioning-post-drag");
          var d = 0,
            e = this;
          c.once("layout", b),
            this.once("layoutComplete", b),
            c.moveTo(c.rect.x, c.rect.y),
            this.layout(),
            (this.dragItemCount = Math.max(0, this.dragItemCount - 1)),
            this.sortItemsByPosition(),
            c.disablePlacing(),
            this.unstamp(c.element);
        }
      }),
      (j.bindDraggabillyEvents = function (a) {
        this._bindDraggabillyEvents(a, "on");
      }),
      (j.unbindDraggabillyEvents = function (a) {
        this._bindDraggabillyEvents(a, "off");
      }),
      (j._bindDraggabillyEvents = function (a, b) {
        var c = this.handleDraggabilly;
        a[b]("dragStart", c.dragStart),
          a[b]("dragMove", c.dragMove),
          a[b]("dragEnd", c.dragEnd);
      }),
      (j.bindUIDraggableEvents = function (a) {
        this._bindUIDraggableEvents(a, "on");
      }),
      (j.unbindUIDraggableEvents = function (a) {
        this._bindUIDraggableEvents(a, "off");
      }),
      (j._bindUIDraggableEvents = function (a, b) {
        var c = this.handleUIDraggable;
        a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop);
      });
    var l = j.destroy;
    return (
      (j.destroy = function () {
        l.apply(this, arguments), (this.isEnabled = !1);
      }),
      (i.Rect = c),
      (i.Packer = d),
      i
    );
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["isotope-layout/js/layout-mode", "packery/js/packery"], b)
      : "object" == typeof module && module.exports
      ? (module.exports = b(
          require("isotope-layout/js/layout-mode"),
          require("packery")
        ))
      : b(a.Isotope.LayoutMode, a.Packery);
  })(window, function (a, b) {
    var c = a.create("packery"),
      d = c.prototype,
      e = { _getElementOffset: !0, _getMeasurement: !0 };
    for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
    var g = d._resetLayout;
    d._resetLayout = function () {
      (this.packer = this.packer || new b.Packer()),
        (this.shiftPacker = this.shiftPacker || new b.Packer()),
        g.apply(this, arguments);
    };
    var h = d._getItemLayoutPosition;
    d._getItemLayoutPosition = function (a) {
      return (a.rect = a.rect || new b.Rect()), h.call(this, a);
    };
    var i = d.needsResizeLayout;
    d.needsResizeLayout = function () {
      return this._getOption("horizontal")
        ? this.needsVerticalResizeLayout()
        : i.call(this);
    };
    var j = d._getOption;
    return (
      (d._getOption = function (a) {
        return "horizontal" == a
          ? void 0 !== this.options.isHorizontal
            ? this.options.isHorizontal
            : this.options.horizontal
          : j.apply(this.isotope, arguments);
      }),
      c
    );
  });

/*! lightgallery - v1.6.12 - 2019-02-19
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2019 Sachin N; Licensed GPLv3 */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = b(require("jquery")))
    : b(a.jQuery);
})(this, function (a) {
  !(function () {
    "use strict";
    function b(b, d) {
      if (
        ((this.el = b),
        (this.$el = a(b)),
        (this.s = a.extend({}, c, d)),
        this.s.dynamic &&
          "undefined" !== this.s.dynamicEl &&
          this.s.dynamicEl.constructor === Array &&
          !this.s.dynamicEl.length)
      )
        throw "When using dynamic mode, you must also define dynamicEl as an Array.";
      return (
        (this.modules = {}),
        (this.lGalleryOn = !1),
        (this.lgBusy = !1),
        (this.hideBartimeout = !1),
        (this.isTouch = "ontouchstart" in document.documentElement),
        this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
        this.s.dynamic
          ? (this.$items = this.s.dynamicEl)
          : "this" === this.s.selector
          ? (this.$items = this.$el)
          : "" !== this.s.selector
          ? this.s.selectWithin
            ? (this.$items = a(this.s.selectWithin).find(this.s.selector))
            : (this.$items = this.$el.find(a(this.s.selector)))
          : (this.$items = this.$el.children()),
        (this.$slide = ""),
        (this.$outer = ""),
        this.init(),
        this
      );
    }
    var c = {
      mode: "lg-slide",
      cssEasing: "ease",
      easing: "linear",
      speed: 600,
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 150,
      hideBarsDelay: 6e3,
      useLeft: !1,
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: !1,
      iframeMaxWidth: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      galleryId: 1,
    };
    (b.prototype.init = function () {
      var b = this;
      b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
      var c = window.location.hash;
      c.indexOf("lg=" + this.s.galleryId) > 0 &&
        ((b.index = parseInt(c.split("&slide=")[1], 10)),
        a("body").addClass("lg-from-hash"),
        a("body").hasClass("lg-on") ||
          (setTimeout(function () {
            b.build(b.index);
          }),
          a("body").addClass("lg-on"))),
        b.s.dynamic
          ? (b.$el.trigger("onBeforeOpen.lg"),
            (b.index = b.s.index || 0),
            a("body").hasClass("lg-on") ||
              setTimeout(function () {
                b.build(b.index), a("body").addClass("lg-on");
              }))
          : b.$items.on("click.lgcustom", function (c) {
              try {
                c.preventDefault(), c.preventDefault();
              } catch (a) {
                c.returnValue = !1;
              }
              b.$el.trigger("onBeforeOpen.lg"),
                (b.index = b.s.index || b.$items.index(this)),
                a("body").hasClass("lg-on") ||
                  (b.build(b.index), a("body").addClass("lg-on"));
            });
    }),
      (b.prototype.build = function (b) {
        var c = this;
        c.structure(),
          a.each(a.fn.lightGallery.modules, function (b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
          }),
          c.slide(b, !1, !1, !1),
          c.s.keyPress && c.keyPress(),
          c.$items.length > 1
            ? (c.arrow(),
              setTimeout(function () {
                c.enableDrag(), c.enableSwipe();
              }, 50),
              c.s.mousewheel && c.mousewheel())
            : c.$slide.on("click.lg", function () {
                c.$el.trigger("onSlideClick.lg");
              }),
          c.counter(),
          c.closeGallery(),
          c.$el.trigger("onAfterOpen.lg"),
          c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
            c.$outer.removeClass("lg-hide-items"),
              clearTimeout(c.hideBartimeout),
              (c.hideBartimeout = setTimeout(function () {
                c.$outer.addClass("lg-hide-items");
              }, c.s.hideBarsDelay));
          }),
          c.$outer.trigger("mousemove.lg");
      }),
      (b.prototype.structure = function () {
        var b,
          c = "",
          d = "",
          e = 0,
          f = "",
          g = this;
        for (
          a("body").append('<div class="lg-backdrop"></div>'),
            a(".lg-backdrop").css(
              "transition-duration",
              this.s.backdropDuration + "ms"
            ),
            e = 0;
          e < this.$items.length;
          e++
        )
          c += '<div class="lg-item"></div>';
        if (
          (this.s.controls &&
            this.$items.length > 1 &&
            (d =
              '<div class="lg-actions"><button class="lg-prev lg-icon">' +
              this.s.prevHtml +
              '</button><button class="lg-next lg-icon">' +
              this.s.nextHtml +
              "</button></div>"),
          ".lg-sub-html" === this.s.appendSubHtmlTo &&
            (f = '<div class="lg-sub-html"></div>'),
          (b =
            '<div class="lg-outer ' +
            this.s.addClass +
            " " +
            this.s.startClass +
            '"><div class="lg" style="width:' +
            this.s.width +
            "; height:" +
            this.s.height +
            '"><div class="lg-inner">' +
            c +
            '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' +
            d +
            f +
            "</div></div>"),
          a("body").append(b),
          (this.$outer = a(".lg-outer")),
          (this.$slide = this.$outer.find(".lg-item")),
          this.s.useLeft
            ? (this.$outer.addClass("lg-use-left"), (this.s.mode = "lg-slide"))
            : this.$outer.addClass("lg-use-css3"),
          g.setTop(),
          a(window).on("resize.lg orientationchange.lg", function () {
            setTimeout(function () {
              g.setTop();
            }, 100);
          }),
          this.$slide.eq(this.index).addClass("lg-current"),
          this.doCss()
            ? this.$outer.addClass("lg-css3")
            : (this.$outer.addClass("lg-css"), (this.s.speed = 0)),
          this.$outer.addClass(this.s.mode),
          this.s.enableDrag &&
            this.$items.length > 1 &&
            this.$outer.addClass("lg-grab"),
          this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
          this.doCss())
        ) {
          var h = this.$outer.find(".lg-inner");
          h.css("transition-timing-function", this.s.cssEasing),
            h.css("transition-duration", this.s.speed + "ms");
        }
        setTimeout(function () {
          a(".lg-backdrop").addClass("in");
        }),
          setTimeout(function () {
            g.$outer.addClass("lg-visible");
          }, this.s.backdropDuration),
          this.s.download &&
            this.$outer
              .find(".lg-toolbar")
              .append(
                '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
              ),
          (this.prevScrollTop = a(window).scrollTop());
      }),
      (b.prototype.setTop = function () {
        if ("100%" !== this.s.height) {
          var b = a(window).height(),
            c = (b - parseInt(this.s.height, 10)) / 2,
            d = this.$outer.find(".lg");
          b >= parseInt(this.s.height, 10)
            ? d.css("top", c + "px")
            : d.css("top", "0px");
        }
      }),
      (b.prototype.doCss = function () {
        return !!(function () {
          var a = [
              "transition",
              "MozTransition",
              "WebkitTransition",
              "OTransition",
              "msTransition",
              "KhtmlTransition",
            ],
            b = document.documentElement,
            c = 0;
          for (c = 0; c < a.length; c++) if (a[c] in b.style) return !0;
        })();
      }),
      (b.prototype.isVideo = function (a, b) {
        var c;
        if (
          ((c = this.s.dynamic
            ? this.s.dynamicEl[b].html
            : this.$items.eq(b).attr("data-html")),
          !a)
        )
          return c
            ? { html5: !0 }
            : (console.error(
                "lightGallery :- data-src is not pvovided on slide item " +
                  (b + 1) +
                  ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"
              ),
              !1);
        var d = a.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
          ),
          e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
          f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
          g = a.match(
            /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
          );
        return d
          ? { youtube: d }
          : e
          ? { vimeo: e }
          : f
          ? { dailymotion: f }
          : g
          ? { vk: g }
          : void 0;
      }),
      (b.prototype.counter = function () {
        this.s.counter &&
          a(this.s.appendCounterTo).append(
            '<div id="lg-counter"><span id="lg-counter-current">' +
              (parseInt(this.index, 10) + 1) +
              '</span> / <span id="lg-counter-all">' +
              this.$items.length +
              "</span></div>"
          );
      }),
      (b.prototype.addHtml = function (b) {
        var c,
          d,
          e = null;
        if (
          (this.s.dynamic
            ? this.s.dynamicEl[b].subHtmlUrl
              ? (c = this.s.dynamicEl[b].subHtmlUrl)
              : (e = this.s.dynamicEl[b].subHtml)
            : ((d = this.$items.eq(b)),
              d.attr("data-sub-html-url")
                ? (c = d.attr("data-sub-html-url"))
                : ((e = d.attr("data-sub-html")),
                  this.s.getCaptionFromTitleOrAlt &&
                    !e &&
                    (e =
                      d.attr("title") || d.find("img").first().attr("alt")))),
          !c)
        )
          if (void 0 !== e && null !== e) {
            var f = e.substring(0, 1);
            ("." !== f && "#" !== f) ||
              (e =
                this.s.subHtmlSelectorRelative && !this.s.dynamic
                  ? d.find(e).html()
                  : a(e).html());
          } else e = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo
          ? c
            ? this.$outer.find(this.s.appendSubHtmlTo).load(c)
            : this.$outer.find(this.s.appendSubHtmlTo).html(e)
          : c
          ? this.$slide.eq(b).load(c)
          : this.$slide.eq(b).append(e),
          void 0 !== e &&
            null !== e &&
            ("" === e
              ? this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
          this.$el.trigger("onAfterAppendSubHtml.lg", [b]);
      }),
      (b.prototype.preload = function (a) {
        var b = 1,
          c = 1;
        for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)
          this.loadContent(a + b, !1, 0);
        for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
          this.loadContent(a - c, !1, 0);
      }),
      (b.prototype.loadContent = function (b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k = this,
          l = !1,
          m = function (b) {
            for (var c = [], d = [], e = 0; e < b.length; e++) {
              var g = b[e].split(" ");
              "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1]);
            }
            for (var h = a(window).width(), i = 0; i < c.length; i++)
              if (parseInt(c[i], 10) > h) {
                f = d[i];
                break;
              }
          };
        if (k.s.dynamic) {
          if (
            (k.s.dynamicEl[b].poster &&
              ((l = !0), (g = k.s.dynamicEl[b].poster)),
            (j = k.s.dynamicEl[b].html),
            (f = k.s.dynamicEl[b].src),
            k.s.dynamicEl[b].responsive)
          ) {
            m(k.s.dynamicEl[b].responsive.split(","));
          }
          (h = k.s.dynamicEl[b].srcset), (i = k.s.dynamicEl[b].sizes);
        } else {
          if (
            (k.$items.eq(b).attr("data-poster") &&
              ((l = !0), (g = k.$items.eq(b).attr("data-poster"))),
            (j = k.$items.eq(b).attr("data-html")),
            (f =
              k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src")),
            k.$items.eq(b).attr("data-responsive"))
          ) {
            m(k.$items.eq(b).attr("data-responsive").split(","));
          }
          (h = k.$items.eq(b).attr("data-srcset")),
            (i = k.$items.eq(b).attr("data-sizes"));
        }
        var n = !1;
        k.s.dynamic
          ? k.s.dynamicEl[b].iframe && (n = !0)
          : "true" === k.$items.eq(b).attr("data-iframe") && (n = !0);
        var o = k.isVideo(f, b);
        if (!k.$slide.eq(b).hasClass("lg-loaded")) {
          if (n)
            k.$slide
              .eq(b)
              .prepend(
                '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                  k.s.iframeMaxWidth +
                  '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                  f +
                  '"  allowfullscreen="true"></iframe></div></div>'
              );
          else if (l) {
            var p = "";
            (p =
              o && o.youtube
                ? "lg-has-youtube"
                : o && o.vimeo
                ? "lg-has-vimeo"
                : "lg-has-html5"),
              k.$slide
                .eq(b)
                .prepend(
                  '<div class="lg-video-cont ' +
                    p +
                    ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                    g +
                    '" /></div></div>'
                );
          } else
            o
              ? (k.$slide
                  .eq(b)
                  .prepend(
                    '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                  ),
                k.$el.trigger("hasVideo.lg", [b, f, j]))
              : k.$slide
                  .eq(b)
                  .prepend(
                    '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                      f +
                      '" /></div>'
                  );
          if (
            (k.$el.trigger("onAferAppendSlide.lg", [b]),
            (e = k.$slide.eq(b).find(".lg-object")),
            i && e.attr("sizes", i),
            h)
          ) {
            e.attr("srcset", h);
            try {
              picturefill({ elements: [e[0]] });
            } catch (a) {
              console.warn(
                "lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document."
              );
            }
          }
          ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b),
            k.$slide.eq(b).addClass("lg-loaded");
        }
        k.$slide
          .eq(b)
          .find(".lg-object")
          .on("load.lg error.lg", function () {
            var c = 0;
            d && !a("body").hasClass("lg-from-hash") && (c = d),
              setTimeout(function () {
                k.$slide.eq(b).addClass("lg-complete"),
                  k.$el.trigger("onSlideItemLoad.lg", [b, d || 0]);
              }, c);
          }),
          o && o.html5 && !l && k.$slide.eq(b).addClass("lg-complete"),
          !0 === c &&
            (k.$slide.eq(b).hasClass("lg-complete")
              ? k.preload(b)
              : k.$slide
                  .eq(b)
                  .find(".lg-object")
                  .on("load.lg error.lg", function () {
                    k.preload(b);
                  }));
      }),
      (b.prototype.slide = function (b, c, d, e) {
        var f = this.$outer.find(".lg-current").index(),
          g = this;
        if (!g.lGalleryOn || f !== b) {
          var h = this.$slide.length,
            i = g.lGalleryOn ? this.s.speed : 0;
          if (!g.lgBusy) {
            if (this.s.download) {
              var j;
              (j = g.s.dynamic
                ? !1 !== g.s.dynamicEl[b].downloadUrl &&
                  (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src)
                : "false" !== g.$items.eq(b).attr("data-download-url") &&
                  (g.$items.eq(b).attr("data-download-url") ||
                    g.$items.eq(b).attr("href") ||
                    g.$items.eq(b).attr("data-src"))),
                j
                  ? (a("#lg-download").attr("href", j),
                    g.$outer.removeClass("lg-hide-download"))
                  : g.$outer.addClass("lg-hide-download");
            }
            if (
              (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]),
              (g.lgBusy = !0),
              clearTimeout(g.hideBartimeout),
              ".lg-sub-html" === this.s.appendSubHtmlTo &&
                setTimeout(function () {
                  g.addHtml(b);
                }, i),
              this.arrowDisable(b),
              e || (b < f ? (e = "prev") : b > f && (e = "next")),
              c)
            ) {
              this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
              var k, l;
              h > 2
                ? ((k = b - 1),
                  (l = b + 1),
                  0 === b && f === h - 1
                    ? ((l = 0), (k = h - 1))
                    : b === h - 1 && 0 === f && ((l = 0), (k = h - 1)))
                : ((k = 0), (l = 1)),
                "prev" === e
                  ? g.$slide.eq(l).addClass("lg-next-slide")
                  : g.$slide.eq(k).addClass("lg-prev-slide"),
                g.$slide.eq(b).addClass("lg-current");
            } else
              g.$outer.addClass("lg-no-trans"),
                this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                "prev" === e
                  ? (this.$slide.eq(b).addClass("lg-prev-slide"),
                    this.$slide.eq(f).addClass("lg-next-slide"))
                  : (this.$slide.eq(b).addClass("lg-next-slide"),
                    this.$slide.eq(f).addClass("lg-prev-slide")),
                setTimeout(function () {
                  g.$slide.removeClass("lg-current"),
                    g.$slide.eq(b).addClass("lg-current"),
                    g.$outer.removeClass("lg-no-trans");
                }, 50);
            g.lGalleryOn
              ? (setTimeout(function () {
                  g.loadContent(b, !0, 0);
                }, this.s.speed + 50),
                setTimeout(function () {
                  (g.lgBusy = !1),
                    g.$el.trigger("onAfterSlide.lg", [f, b, c, d]);
                }, this.s.speed))
              : (g.loadContent(b, !0, g.s.backdropDuration),
                (g.lgBusy = !1),
                g.$el.trigger("onAfterSlide.lg", [f, b, c, d])),
              (g.lGalleryOn = !0),
              this.s.counter && a("#lg-counter-current").text(b + 1);
          }
          g.index = b;
        }
      }),
      (b.prototype.goToNextSlide = function (a) {
        var b = this,
          c = b.s.loop;
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index + 1 < b.$slide.length
              ? (b.index++,
                b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
                b.slide(b.index, a, !1, "next"))
              : c
              ? ((b.index = 0),
                b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
                b.slide(b.index, a, !1, "next"))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass("lg-right-end"),
                setTimeout(function () {
                  b.$outer.removeClass("lg-right-end");
                }, 400)));
      }),
      (b.prototype.goToPrevSlide = function (a) {
        var b = this,
          c = b.s.loop;
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index > 0
              ? (b.index--,
                b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
                b.slide(b.index, a, !1, "prev"))
              : c
              ? ((b.index = b.$items.length - 1),
                b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
                b.slide(b.index, a, !1, "prev"))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass("lg-left-end"),
                setTimeout(function () {
                  b.$outer.removeClass("lg-left-end");
                }, 400)));
      }),
      (b.prototype.keyPress = function () {
        var b = this;
        this.$items.length > 1 &&
          a(window).on("keyup.lg", function (a) {
            b.$items.length > 1 &&
              (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()),
              39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()));
          }),
          a(window).on("keydown.lg", function (a) {
            !0 === b.s.escKey &&
              27 === a.keyCode &&
              (a.preventDefault(),
              b.$outer.hasClass("lg-thumb-open")
                ? b.$outer.removeClass("lg-thumb-open")
                : b.destroy());
          });
      }),
      (b.prototype.arrow = function () {
        var a = this;
        this.$outer.find(".lg-prev").on("click.lg", function () {
          a.goToPrevSlide();
        }),
          this.$outer.find(".lg-next").on("click.lg", function () {
            a.goToNextSlide();
          });
      }),
      (b.prototype.arrowDisable = function (a) {
        !this.s.loop &&
          this.s.hideControlOnEnd &&
          (a + 1 < this.$slide.length
            ? this.$outer
                .find(".lg-next")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-next")
                .attr("disabled", "disabled")
                .addClass("disabled"),
          a > 0
            ? this.$outer
                .find(".lg-prev")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-prev")
                .attr("disabled", "disabled")
                .addClass("disabled"));
      }),
      (b.prototype.setTranslate = function (a, b, c) {
        this.s.useLeft
          ? a.css("left", b)
          : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" });
      }),
      (b.prototype.touchMove = function (b, c) {
        var d = c - b;
        Math.abs(d) > 15 &&
          (this.$outer.addClass("lg-dragging"),
          this.setTranslate(this.$slide.eq(this.index), d, 0),
          this.setTranslate(
            a(".lg-prev-slide"),
            -this.$slide.eq(this.index).width() + d,
            0
          ),
          this.setTranslate(
            a(".lg-next-slide"),
            this.$slide.eq(this.index).width() + d,
            0
          ));
      }),
      (b.prototype.touchEnd = function (a) {
        var b = this;
        "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
          this.$slide
            .not(".lg-current, .lg-prev-slide, .lg-next-slide")
            .css("opacity", "0"),
          setTimeout(function () {
            b.$outer.removeClass("lg-dragging"),
              a < 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToNextSlide(!0)
                : a > 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToPrevSlide(!0)
                : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
              b.$slide.removeAttr("style");
          }),
          setTimeout(function () {
            b.$outer.hasClass("lg-dragging") ||
              "lg-slide" === b.s.mode ||
              b.$outer.removeClass("lg-slide");
          }, b.s.speed + 100);
      }),
      (b.prototype.enableSwipe = function () {
        var a = this,
          b = 0,
          c = 0,
          d = !1;
        a.s.enableSwipe &&
          a.doCss() &&
          (a.$slide.on("touchstart.lg", function (c) {
            a.$outer.hasClass("lg-zoomed") ||
              a.lgBusy ||
              (c.preventDefault(),
              a.manageSwipeClass(),
              (b = c.originalEvent.targetTouches[0].pageX));
          }),
          a.$slide.on("touchmove.lg", function (e) {
            a.$outer.hasClass("lg-zoomed") ||
              (e.preventDefault(),
              (c = e.originalEvent.targetTouches[0].pageX),
              a.touchMove(b, c),
              (d = !0));
          }),
          a.$slide.on("touchend.lg", function () {
            a.$outer.hasClass("lg-zoomed") ||
              (d
                ? ((d = !1), a.touchEnd(c - b))
                : a.$el.trigger("onSlideClick.lg"));
          }));
      }),
      (b.prototype.enableDrag = function () {
        var b = this,
          c = 0,
          d = 0,
          e = !1,
          f = !1;
        b.s.enableDrag &&
          b.doCss() &&
          (b.$slide.on("mousedown.lg", function (d) {
            b.$outer.hasClass("lg-zoomed") ||
              b.lgBusy ||
              a(d.target).text().trim() ||
              (d.preventDefault(),
              b.manageSwipeClass(),
              (c = d.pageX),
              (e = !0),
              (b.$outer.scrollLeft += 1),
              (b.$outer.scrollLeft -= 1),
              b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
              b.$el.trigger("onDragstart.lg"));
          }),
          a(window).on("mousemove.lg", function (a) {
            e &&
              ((f = !0),
              (d = a.pageX),
              b.touchMove(c, d),
              b.$el.trigger("onDragmove.lg"));
          }),
          a(window).on("mouseup.lg", function (g) {
            f
              ? ((f = !1), b.touchEnd(d - c), b.$el.trigger("onDragend.lg"))
              : (a(g.target).hasClass("lg-object") ||
                  a(g.target).hasClass("lg-video-play")) &&
                b.$el.trigger("onSlideClick.lg"),
              e &&
                ((e = !1),
                b.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
          }));
      }),
      (b.prototype.manageSwipeClass = function () {
        var a = this.index + 1,
          b = this.index - 1;
        this.s.loop &&
          this.$slide.length > 2 &&
          (0 === this.index
            ? (b = this.$slide.length - 1)
            : this.index === this.$slide.length - 1 && (a = 0)),
          this.$slide.removeClass("lg-next-slide lg-prev-slide"),
          b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
          this.$slide.eq(a).addClass("lg-next-slide");
      }),
      (b.prototype.mousewheel = function () {
        var a = this;
        a.$outer.on("mousewheel.lg", function (b) {
          b.deltaY &&
            (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
            b.preventDefault());
        });
      }),
      (b.prototype.closeGallery = function () {
        var b = this,
          c = !1;
        this.$outer.find(".lg-close").on("click.lg", function () {
          b.destroy();
        }),
          b.s.closable &&
            (b.$outer.on("mousedown.lg", function (b) {
              c = !!(
                a(b.target).is(".lg-outer") ||
                a(b.target).is(".lg-item ") ||
                a(b.target).is(".lg-img-wrap")
              );
            }),
            b.$outer.on("mousemove.lg", function () {
              c = !1;
            }),
            b.$outer.on("mouseup.lg", function (d) {
              (a(d.target).is(".lg-outer") ||
                a(d.target).is(".lg-item ") ||
                (a(d.target).is(".lg-img-wrap") && c)) &&
                (b.$outer.hasClass("lg-dragging") || b.destroy());
            }));
      }),
      (b.prototype.destroy = function (b) {
        var c = this;
        b ||
          (c.$el.trigger("onBeforeClose.lg"),
          a(window).scrollTop(c.prevScrollTop)),
          b &&
            (c.s.dynamic || this.$items.off("click.lg click.lgcustom"),
            a.removeData(c.el, "lightGallery")),
          this.$el.off(".lg.tm"),
          a.each(a.fn.lightGallery.modules, function (a) {
            c.modules[a] && c.modules[a].destroy();
          }),
          (this.lGalleryOn = !1),
          clearTimeout(c.hideBartimeout),
          (this.hideBartimeout = !1),
          a(window).off(".lg"),
          a("body").removeClass("lg-on lg-from-hash"),
          c.$outer && c.$outer.removeClass("lg-visible"),
          a(".lg-backdrop").removeClass("in"),
          setTimeout(function () {
            c.$outer && c.$outer.remove(),
              a(".lg-backdrop").remove(),
              b || c.$el.trigger("onCloseAfter.lg");
          }, c.s.backdropDuration + 50);
      }),
      (a.fn.lightGallery = function (c) {
        return this.each(function () {
          if (a.data(this, "lightGallery"))
            try {
              a(this).data("lightGallery").init();
            } catch (a) {
              console.error("lightGallery has not initiated properly");
            }
          else a.data(this, "lightGallery", new b(this, c));
        });
      }),
      (a.fn.lightGallery.modules = {});
  })();
}),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = {
          autoplay: !1,
          pause: 5e3,
          progressBar: !0,
          fourceAutoplay: !1,
          autoplayControls: !0,
          appendAutoplayControlsTo: ".lg-toolbar",
        },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.$el = a(c)),
            !(this.core.$items.length < 2) &&
              ((this.core.s = a.extend({}, b, this.core.s)),
              (this.interval = !1),
              (this.fromAuto = !0),
              (this.canceledOnTouch = !1),
              (this.fourceAutoplayTemp = this.core.s.fourceAutoplay),
              this.core.doCss() || (this.core.s.progressBar = !1),
              this.init(),
              this)
          );
        };
      (c.prototype.init = function () {
        var a = this;
        a.core.s.autoplayControls && a.controls(),
          a.core.s.progressBar &&
            a.core.$outer
              .find(".lg")
              .append(
                '<div class="lg-progress-bar"><div class="lg-progress"></div></div>'
              ),
          a.progress(),
          a.core.s.autoplay &&
            a.$el.one("onSlideItemLoad.lg.tm", function () {
              a.startlAuto();
            }),
          a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
            a.interval && (a.cancelAuto(), (a.canceledOnTouch = !0));
          }),
          a.$el.on(
            "onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",
            function () {
              !a.interval &&
                a.canceledOnTouch &&
                (a.startlAuto(), (a.canceledOnTouch = !1));
            }
          );
      }),
        (c.prototype.progress = function () {
          var a,
            b,
            c = this;
          c.$el.on("onBeforeSlide.lg.tm", function () {
            c.core.s.progressBar &&
              c.fromAuto &&
              ((a = c.core.$outer.find(".lg-progress-bar")),
              (b = c.core.$outer.find(".lg-progress")),
              c.interval &&
                (b.removeAttr("style"),
                a.removeClass("lg-start"),
                setTimeout(function () {
                  b.css(
                    "transition",
                    "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"
                  ),
                    a.addClass("lg-start");
                }, 20))),
              c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(),
              (c.fromAuto = !1);
          });
        }),
        (c.prototype.controls = function () {
          var b = this;
          a(this.core.s.appendAutoplayControlsTo).append(
            '<span class="lg-autoplay-button lg-icon"></span>'
          ),
            b.core.$outer
              .find(".lg-autoplay-button")
              .on("click.lg", function () {
                a(b.core.$outer).hasClass("lg-show-autoplay")
                  ? (b.cancelAuto(), (b.core.s.fourceAutoplay = !1))
                  : b.interval ||
                    (b.startlAuto(),
                    (b.core.s.fourceAutoplay = b.fourceAutoplayTemp));
              });
        }),
        (c.prototype.startlAuto = function () {
          var a = this;
          a.core.$outer
            .find(".lg-progress")
            .css(
              "transition",
              "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"
            ),
            a.core.$outer.addClass("lg-show-autoplay"),
            a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
            (a.interval = setInterval(function () {
              a.core.index + 1 < a.core.$items.length
                ? a.core.index++
                : (a.core.index = 0),
                (a.fromAuto = !0),
                a.core.slide(a.core.index, !1, !1, "next");
            }, a.core.s.speed + a.core.s.pause));
        }),
        (c.prototype.cancelAuto = function () {
          clearInterval(this.interval),
            (this.interval = !1),
            this.core.$outer.find(".lg-progress").removeAttr("style"),
            this.core.$outer.removeClass("lg-show-autoplay"),
            this.core.$outer.find(".lg-progress-bar").removeClass("lg-start");
        }),
        (c.prototype.destroy = function () {
          this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove();
        }),
        (a.fn.lightGallery.modules.autoplay = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = b(require("jquery")))
      : b(a.jQuery);
  })(this, function (a) {
    !(function () {
      "use strict";
      function b() {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
        );
      }
      var c = { fullScreen: !0 },
        d = function (b) {
          return (
            (this.core = a(b).data("lightGallery")),
            (this.$el = a(b)),
            (this.core.s = a.extend({}, c, this.core.s)),
            this.init(),
            this
          );
        };
      (d.prototype.init = function () {
        var a = "";
        if (this.core.s.fullScreen) {
          if (
            !(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            )
          )
            return;
          (a = '<span class="lg-fullscreen lg-icon"></span>'),
            this.core.$outer.find(".lg-toolbar").append(a),
            this.fullScreen();
        }
      }),
        (d.prototype.requestFullscreen = function () {
          var a = document.documentElement;
          a.requestFullscreen
            ? a.requestFullscreen()
            : a.msRequestFullscreen
            ? a.msRequestFullscreen()
            : a.mozRequestFullScreen
            ? a.mozRequestFullScreen()
            : a.webkitRequestFullscreen && a.webkitRequestFullscreen();
        }),
        (d.prototype.exitFullscreen = function () {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.msExitFullscreen
            ? document.msExitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen && document.webkitExitFullscreen();
        }),
        (d.prototype.fullScreen = function () {
          var c = this;
          a(document).on(
            "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",
            function () {
              c.core.$outer.toggleClass("lg-fullscreen-on");
            }
          ),
            this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
              b() ? c.exitFullscreen() : c.requestFullscreen();
            });
        }),
        (d.prototype.destroy = function () {
          b() && this.exitFullscreen(),
            a(document).off(
              "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg"
            );
        }),
        (a.fn.lightGallery.modules.fullscreen = d);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = { pager: !1 },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.$el = a(c)),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.pager && this.core.$items.length > 1 && this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var b,
          c,
          d,
          e = this,
          f = "";
        if (
          (e.core.$outer
            .find(".lg")
            .append('<div class="lg-pager-outer"></div>'),
          e.core.s.dynamic)
        )
          for (var g = 0; g < e.core.s.dynamicEl.length; g++)
            f +=
              '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
              e.core.s.dynamicEl[g].thumb +
              '" /></div></span>';
        else
          e.core.$items.each(function () {
            e.core.s.exThumbImage
              ? (f +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  a(this).attr(e.core.s.exThumbImage) +
                  '" /></div></span>')
              : (f +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  a(this).find("img").attr("src") +
                  '" /></div></span>');
          });
        (c = e.core.$outer.find(".lg-pager-outer")),
          c.html(f),
          (b = e.core.$outer.find(".lg-pager-cont")),
          b.on("click.lg touchend.lg", function () {
            var b = a(this);
            (e.core.index = b.index()), e.core.slide(e.core.index, !1, !0, !1);
          }),
          c.on("mouseover.lg", function () {
            clearTimeout(d), c.addClass("lg-pager-hover");
          }),
          c.on("mouseout.lg", function () {
            d = setTimeout(function () {
              c.removeClass("lg-pager-hover");
            });
          }),
          e.core.$el.on("onBeforeSlide.lg.tm", function (a, c, d) {
            b.removeClass("lg-pager-active"),
              b.eq(d).addClass("lg-pager-active");
          });
      }),
        (c.prototype.destroy = function () {}),
        (a.fn.lightGallery.modules.pager = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = {
          thumbnail: !0,
          animateThumb: !0,
          currentPagerPosition: "middle",
          thumbWidth: 100,
          thumbHeight: "80px",
          thumbContHeight: 100,
          thumbMargin: 5,
          exThumbImage: !1,
          showThumbByDefault: !0,
          toogleThumb: !0,
          pullCaptionUp: !0,
          enableThumbDrag: !0,
          enableThumbSwipe: !0,
          swipeThreshold: 50,
          loadYoutubeThumbnail: !0,
          youtubeThumbSize: 1,
          loadVimeoThumbnail: !0,
          vimeoThumbSize: "thumbnail_small",
          loadDailymotionThumbnail: !0,
        },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.core.s = a.extend({}, b, this.core.s)),
            (this.$el = a(c)),
            (this.$thumbOuter = null),
            (this.thumbOuterWidth = 0),
            (this.thumbTotalWidth =
              this.core.$items.length *
              (this.core.s.thumbWidth + this.core.s.thumbMargin)),
            (this.thumbIndex = this.core.index),
            this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
            (this.left = 0),
            this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var a = this;
        this.core.s.thumbnail &&
          this.core.$items.length > 1 &&
          (this.core.s.showThumbByDefault &&
            setTimeout(function () {
              a.core.$outer.addClass("lg-thumb-open");
            }, 700),
          this.core.s.pullCaptionUp &&
            this.core.$outer.addClass("lg-pull-caption-up"),
          this.build(),
          this.core.s.animateThumb && this.core.doCss()
            ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
              this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
              (this.thumbClickable = !1))
            : (this.thumbClickable = !0),
          this.toogle(),
          this.thumbkeyPress());
      }),
        (c.prototype.build = function () {
          function b(a, b, c) {
            var g,
              h = d.core.isVideo(a, c) || {},
              i = "";
            h.youtube || h.vimeo || h.dailymotion
              ? h.youtube
                ? (g = d.core.s.loadYoutubeThumbnail
                    ? "//img.youtube.com/vi/" +
                      h.youtube[1] +
                      "/" +
                      d.core.s.youtubeThumbSize +
                      ".jpg"
                    : b)
                : h.vimeo
                ? d.core.s.loadVimeoThumbnail
                  ? ((g = "//i.vimeocdn.com/video/error_" + f + ".jpg"),
                    (i = h.vimeo[1]))
                  : (g = b)
                : h.dailymotion &&
                  (g = d.core.s.loadDailymotionThumbnail
                    ? "//www.dailymotion.com/thumbnail/video/" +
                      h.dailymotion[1]
                    : b)
              : (g = b),
              (e +=
                '<div data-vimeo-id="' +
                i +
                '" class="lg-thumb-item" style="width:' +
                d.core.s.thumbWidth +
                "px; height: " +
                d.core.s.thumbHeight +
                "; margin-right: " +
                d.core.s.thumbMargin +
                'px"><img src="' +
                g +
                '" /></div>'),
              (i = "");
          }
          var c,
            d = this,
            e = "",
            f = "",
            g =
              '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
          switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
              f = "640";
              break;
            case "thumbnail_medium":
              f = "200x150";
              break;
            case "thumbnail_small":
              f = "100x75";
          }
          if (
            (d.core.$outer.addClass("lg-has-thumb"),
            d.core.$outer.find(".lg").append(g),
            (d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer")),
            (d.thumbOuterWidth = d.$thumbOuter.width()),
            d.core.s.animateThumb &&
              d.core.$outer
                .find(".lg-thumb")
                .css({ width: d.thumbTotalWidth + "px", position: "relative" }),
            this.core.s.animateThumb &&
              d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"),
            d.core.s.dynamic)
          )
            for (var h = 0; h < d.core.s.dynamicEl.length; h++)
              b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
          else
            d.core.$items.each(function (c) {
              d.core.s.exThumbImage
                ? b(
                    a(this).attr("href") || a(this).attr("data-src"),
                    a(this).attr(d.core.s.exThumbImage),
                    c
                  )
                : b(
                    a(this).attr("href") || a(this).attr("data-src"),
                    a(this).find("img").attr("src"),
                    c
                  );
            });
          d.core.$outer.find(".lg-thumb").html(e),
            (c = d.core.$outer.find(".lg-thumb-item")),
            c.each(function () {
              var b = a(this),
                c = b.attr("data-vimeo-id");
              c &&
                a.getJSON(
                  "//www.vimeo.com/api/v2/video/" + c + ".json?callback=?",
                  { format: "json" },
                  function (a) {
                    b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize]);
                  }
                );
            }),
            c.eq(d.core.index).addClass("active"),
            d.core.$el.on("onBeforeSlide.lg.tm", function () {
              c.removeClass("active"), c.eq(d.core.index).addClass("active");
            }),
            c.on("click.lg touchend.lg", function () {
              var b = a(this);
              setTimeout(function () {
                ((d.thumbClickable && !d.core.lgBusy) || !d.core.doCss()) &&
                  ((d.core.index = b.index()),
                  d.core.slide(d.core.index, !1, !0, !1));
              }, 50);
            }),
            d.core.$el.on("onBeforeSlide.lg.tm", function () {
              d.animateThumb(d.core.index);
            }),
            a(window).on(
              "resize.lg.thumb orientationchange.lg.thumb",
              function () {
                setTimeout(function () {
                  d.animateThumb(d.core.index),
                    (d.thumbOuterWidth = d.$thumbOuter.width());
                }, 200);
              }
            );
        }),
        (c.prototype.setTranslate = function (a) {
          this.core.$outer
            .find(".lg-thumb")
            .css({ transform: "translate3d(-" + a + "px, 0px, 0px)" });
        }),
        (c.prototype.animateThumb = function (a) {
          var b = this.core.$outer.find(".lg-thumb");
          if (this.core.s.animateThumb) {
            var c;
            switch (this.core.s.currentPagerPosition) {
              case "left":
                c = 0;
                break;
              case "middle":
                c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                break;
              case "right":
                c = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            (this.left =
              (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c),
              this.left > this.thumbTotalWidth - this.thumbOuterWidth &&
                (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
              this.left < 0 && (this.left = 0),
              this.core.lGalleryOn
                ? (b.hasClass("on") ||
                    this.core.$outer
                      .find(".lg-thumb")
                      .css("transition-duration", this.core.s.speed + "ms"),
                  this.core.doCss() ||
                    b.animate({ left: -this.left + "px" }, this.core.s.speed))
                : this.core.doCss() || b.css("left", -this.left + "px"),
              this.setTranslate(this.left);
          }
        }),
        (c.prototype.enableThumbDrag = function () {
          var b = this,
            c = 0,
            d = 0,
            e = !1,
            f = !1,
            g = 0;
          b.$thumbOuter.addClass("lg-grab"),
            b.core.$outer
              .find(".lg-thumb")
              .on("mousedown.lg.thumb", function (a) {
                b.thumbTotalWidth > b.thumbOuterWidth &&
                  (a.preventDefault(),
                  (c = a.pageX),
                  (e = !0),
                  (b.core.$outer.scrollLeft += 1),
                  (b.core.$outer.scrollLeft -= 1),
                  (b.thumbClickable = !1),
                  b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
              }),
            a(window).on("mousemove.lg.thumb", function (a) {
              e &&
                ((g = b.left),
                (f = !0),
                (d = a.pageX),
                b.$thumbOuter.addClass("lg-dragging"),
                (g -= d - c),
                g > b.thumbTotalWidth - b.thumbOuterWidth &&
                  (g = b.thumbTotalWidth - b.thumbOuterWidth),
                g < 0 && (g = 0),
                b.setTranslate(g));
            }),
            a(window).on("mouseup.lg.thumb", function () {
              f
                ? ((f = !1),
                  b.$thumbOuter.removeClass("lg-dragging"),
                  (b.left = g),
                  Math.abs(d - c) < b.core.s.swipeThreshold &&
                    (b.thumbClickable = !0))
                : (b.thumbClickable = !0),
                e &&
                  ((e = !1),
                  b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"));
            });
        }),
        (c.prototype.enableThumbSwipe = function () {
          var a = this,
            b = 0,
            c = 0,
            d = !1,
            e = 0;
          a.core.$outer.find(".lg-thumb").on("touchstart.lg", function (c) {
            a.thumbTotalWidth > a.thumbOuterWidth &&
              (c.preventDefault(),
              (b = c.originalEvent.targetTouches[0].pageX),
              (a.thumbClickable = !1));
          }),
            a.core.$outer.find(".lg-thumb").on("touchmove.lg", function (f) {
              a.thumbTotalWidth > a.thumbOuterWidth &&
                (f.preventDefault(),
                (c = f.originalEvent.targetTouches[0].pageX),
                (d = !0),
                a.$thumbOuter.addClass("lg-dragging"),
                (e = a.left),
                (e -= c - b),
                e > a.thumbTotalWidth - a.thumbOuterWidth &&
                  (e = a.thumbTotalWidth - a.thumbOuterWidth),
                e < 0 && (e = 0),
                a.setTranslate(e));
            }),
            a.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
              a.thumbTotalWidth > a.thumbOuterWidth && d
                ? ((d = !1),
                  a.$thumbOuter.removeClass("lg-dragging"),
                  Math.abs(c - b) < a.core.s.swipeThreshold &&
                    (a.thumbClickable = !0),
                  (a.left = e))
                : (a.thumbClickable = !0);
            });
        }),
        (c.prototype.toogle = function () {
          var a = this;
          a.core.s.toogleThumb &&
            (a.core.$outer.addClass("lg-can-toggle"),
            a.$thumbOuter.append(
              '<span class="lg-toogle-thumb lg-icon"></span>'
            ),
            a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
              a.core.$outer.toggleClass("lg-thumb-open");
            }));
        }),
        (c.prototype.thumbkeyPress = function () {
          var b = this;
          a(window).on("keydown.lg.thumb", function (a) {
            38 === a.keyCode
              ? (a.preventDefault(), b.core.$outer.addClass("lg-thumb-open"))
              : 40 === a.keyCode &&
                (a.preventDefault(),
                b.core.$outer.removeClass("lg-thumb-open"));
          });
        }),
        (c.prototype.destroy = function () {
          this.core.s.thumbnail &&
            this.core.$items.length > 1 &&
            (a(window).off(
              "resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"
            ),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass("lg-has-thumb"));
        }),
        (a.fn.lightGallery.modules.Thumbnail = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = b(require("jquery")))
      : b(a.jQuery);
  })(this, function (a) {
    !(function () {
      "use strict";
      function b(a, b, c, d) {
        var e = this;
        if (
          (e.core.$slide
            .eq(b)
            .find(".lg-video")
            .append(e.loadVideo(c, "lg-object", !0, b, d)),
          d)
        )
          if (e.core.s.videojs)
            try {
              videojs(
                e.core.$slide.eq(b).find(".lg-html5").get(0),
                e.core.s.videojsOptions,
                function () {
                  !e.videoLoaded && e.core.s.autoplayFirstVideo && this.play();
                }
              );
            } catch (a) {
              console.error("Make sure you have included videojs");
            }
          else
            !e.videoLoaded &&
              e.core.s.autoplayFirstVideo &&
              e.core.$slide.eq(b).find(".lg-html5").get(0).play();
      }
      function c(a, b) {
        var c = this.core.$slide.eq(b).find(".lg-video-cont");
        c.hasClass("lg-has-iframe") ||
          (c.css("max-width", this.core.s.videoMaxWidth),
          (this.videoLoaded = !0));
      }
      function d(b, c, d) {
        var e = this,
          f = e.core.$slide.eq(c),
          g = f.find(".lg-youtube").get(0),
          h = f.find(".lg-vimeo").get(0),
          i = f.find(".lg-dailymotion").get(0),
          j = f.find(".lg-vk").get(0),
          k = f.find(".lg-html5").get(0);
        if (g)
          g.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        else if (h)
          try {
            $f(h).api("pause");
          } catch (a) {
            console.error("Make sure you have included froogaloop2 js");
          }
        else if (i) i.contentWindow.postMessage("pause", "*");
        else if (k)
          if (e.core.s.videojs)
            try {
              videojs(k).pause();
            } catch (a) {
              console.error("Make sure you have included videojs");
            }
          else k.pause();
        j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
        var l;
        l = e.core.s.dynamic
          ? e.core.s.dynamicEl[d].src
          : e.core.$items.eq(d).attr("href") ||
            e.core.$items.eq(d).attr("data-src");
        var m = e.core.isVideo(l, d) || {};
        (m.youtube || m.vimeo || m.dailymotion || m.vk) &&
          e.core.$outer.addClass("lg-hide-download");
      }
      var e = {
          videoMaxWidth: "855px",
          autoplayFirstVideo: !0,
          youtubePlayerParams: !1,
          vimeoPlayerParams: !1,
          dailymotionPlayerParams: !1,
          vkPlayerParams: !1,
          videojs: !1,
          videojsOptions: {},
        },
        f = function (b) {
          return (
            (this.core = a(b).data("lightGallery")),
            (this.$el = a(b)),
            (this.core.s = a.extend({}, e, this.core.s)),
            (this.videoLoaded = !1),
            this.init(),
            this
          );
        };
      (f.prototype.init = function () {
        var e = this;
        e.core.$el.on("hasVideo.lg.tm", b.bind(this)),
          e.core.$el.on("onAferAppendSlide.lg.tm", c.bind(this)),
          e.core.doCss() &&
          e.core.$items.length > 1 &&
          (e.core.s.enableSwipe || e.core.s.enableDrag)
            ? e.core.$el.on("onSlideClick.lg.tm", function () {
                var a = e.core.$slide.eq(e.core.index);
                e.loadVideoOnclick(a);
              })
            : e.core.$slide.on("click.lg", function () {
                e.loadVideoOnclick(a(this));
              }),
          e.core.$el.on("onBeforeSlide.lg.tm", d.bind(this)),
          e.core.$el.on("onAfterSlide.lg.tm", function (a, b) {
            e.core.$slide.eq(b).removeClass("lg-video-playing");
          }),
          e.core.s.autoplayFirstVideo &&
            e.core.$el.on("onAferAppendSlide.lg.tm", function (a, b) {
              if (!e.core.lGalleryOn) {
                var c = e.core.$slide.eq(b);
                setTimeout(function () {
                  e.loadVideoOnclick(c);
                }, 100);
              }
            });
      }),
        (f.prototype.loadVideo = function (b, c, d, e, f) {
          var g = "",
            h = 1,
            i = "",
            j = this.core.isVideo(b, e) || {};
          if (
            (d &&
              (h = this.videoLoaded
                ? 0
                : this.core.s.autoplayFirstVideo
                ? 1
                : 0),
            j.youtube)
          )
            (i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1"),
              this.core.s.youtubePlayerParams &&
                (i = i + "&" + a.param(this.core.s.youtubePlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-youtube ' +
                c +
                '" width="560" height="315" src="//www.youtube.com/embed/' +
                j.youtube[1] +
                i +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (j.vimeo)
            (i = "?autoplay=" + h + "&api=1"),
              this.core.s.vimeoPlayerParams &&
                (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-vimeo ' +
                c +
                '" width="560" height="315"  src="//player.vimeo.com/video/' +
                j.vimeo[1] +
                i +
                '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
          else if (j.dailymotion)
            (i = "?wmode=opaque&autoplay=" + h + "&api=postMessage"),
              this.core.s.dailymotionPlayerParams &&
                (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-dailymotion ' +
                c +
                '" width="560" height="315" src="//www.dailymotion.com/embed/video/' +
                j.dailymotion[1] +
                i +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (j.html5) {
            var k = f.substring(0, 1);
            ("." !== k && "#" !== k) || (f = a(f).html()), (g = f);
          } else
            j.vk &&
              ((i = "&autoplay=" + h),
              this.core.s.vkPlayerParams &&
                (i = i + "&" + a.param(this.core.s.vkPlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-vk ' +
                c +
                '" width="560" height="315" src="//vk.com/video_ext.php?' +
                j.vk[1] +
                i +
                '" frameborder="0" allowfullscreen></iframe>'));
          return g;
        }),
        (f.prototype.loadVideoOnclick = function (a) {
          var b = this;
          if (
            a.find(".lg-object").hasClass("lg-has-poster") &&
            a.find(".lg-object").is(":visible")
          )
            if (a.hasClass("lg-has-video")) {
              var c = a.find(".lg-youtube").get(0),
                d = a.find(".lg-vimeo").get(0),
                e = a.find(".lg-dailymotion").get(0),
                f = a.find(".lg-html5").get(0);
              if (c)
                c.contentWindow.postMessage(
                  '{"event":"command","func":"playVideo","args":""}',
                  "*"
                );
              else if (d)
                try {
                  $f(d).api("play");
                } catch (a) {
                  console.error("Make sure you have included froogaloop2 js");
                }
              else if (e) e.contentWindow.postMessage("play", "*");
              else if (f)
                if (b.core.s.videojs)
                  try {
                    videojs(f).play();
                  } catch (a) {
                    console.error("Make sure you have included videojs");
                  }
                else f.play();
              a.addClass("lg-video-playing");
            } else {
              a.addClass("lg-video-playing lg-has-video");
              var g,
                h,
                i = function (c, d) {
                  if (
                    (a
                      .find(".lg-video")
                      .append(b.loadVideo(c, "", !1, b.core.index, d)),
                    d)
                  )
                    if (b.core.s.videojs)
                      try {
                        videojs(
                          b.core.$slide
                            .eq(b.core.index)
                            .find(".lg-html5")
                            .get(0),
                          b.core.s.videojsOptions,
                          function () {
                            this.play();
                          }
                        );
                      } catch (a) {
                        console.error("Make sure you have included videojs");
                      }
                    else
                      b.core.$slide
                        .eq(b.core.index)
                        .find(".lg-html5")
                        .get(0)
                        .play();
                };
              b.core.s.dynamic
                ? ((g = b.core.s.dynamicEl[b.core.index].src),
                  (h = b.core.s.dynamicEl[b.core.index].html),
                  i(g, h))
                : ((g =
                    b.core.$items.eq(b.core.index).attr("href") ||
                    b.core.$items.eq(b.core.index).attr("data-src")),
                  (h = b.core.$items.eq(b.core.index).attr("data-html")),
                  i(g, h));
              var j = a.find(".lg-object");
              a.find(".lg-video").append(j),
                a.find(".lg-video-object").hasClass("lg-html5") ||
                  (a.removeClass("lg-complete"),
                  a
                    .find(".lg-video-object")
                    .on("load.lg error.lg", function () {
                      a.addClass("lg-complete");
                    }));
            }
        }),
        (f.prototype.destroy = function () {
          this.videoLoaded = !1;
        }),
        (a.fn.lightGallery.modules.video = f);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = function () {
          var a = !1,
            b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
          return b && parseInt(b[2], 10) < 54 && (a = !0), a;
        },
        c = {
          scale: 1,
          zoom: !0,
          actualSize: !0,
          enableZoomAfter: 300,
          useLeftForZoom: b(),
        },
        d = function (b) {
          return (
            (this.core = a(b).data("lightGallery")),
            (this.core.s = a.extend({}, c, this.core.s)),
            this.core.s.zoom &&
              this.core.doCss() &&
              (this.init(),
              (this.zoomabletimeout = !1),
              (this.pageX = a(window).width() / 2),
              (this.pageY = a(window).height() / 2 + a(window).scrollTop())),
            this
          );
        };
      (d.prototype.init = function () {
        var b = this,
          c =
            '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
        b.core.s.actualSize &&
          (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
          b.core.s.useLeftForZoom
            ? b.core.$outer.addClass("lg-use-left-for-zoom")
            : b.core.$outer.addClass("lg-use-transition-for-zoom"),
          this.core.$outer.find(".lg-toolbar").append(c),
          b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (c, d, e) {
            var f = b.core.s.enableZoomAfter + e;
            a("body").hasClass("lg-from-hash") && e
              ? (f = 0)
              : a("body").removeClass("lg-from-hash"),
              (b.zoomabletimeout = setTimeout(function () {
                b.core.$slide.eq(d).addClass("lg-zoomable");
              }, f + 30));
          });
        var d = 1,
          e = function (c) {
            var d,
              e,
              f = b.core.$outer.find(".lg-current .lg-image"),
              g = (a(window).width() - f.prop("offsetWidth")) / 2,
              h =
                (a(window).height() - f.prop("offsetHeight")) / 2 +
                a(window).scrollTop();
            (d = b.pageX - g), (e = b.pageY - h);
            var i = (c - 1) * d,
              j = (c - 1) * e;
            f
              .css("transform", "scale3d(" + c + ", " + c + ", 1)")
              .attr("data-scale", c),
              b.core.s.useLeftForZoom
                ? f
                    .parent()
                    .css({ left: -i + "px", top: -j + "px" })
                    .attr("data-x", i)
                    .attr("data-y", j)
                : f
                    .parent()
                    .css(
                      "transform",
                      "translate3d(-" + i + "px, -" + j + "px, 0)"
                    )
                    .attr("data-x", i)
                    .attr("data-y", j);
          },
          f = function () {
            d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(),
              d < 1 && (d = 1),
              e(d);
          },
          g = function (c, e, g, h) {
            var i,
              j = e.prop("offsetWidth");
            i = b.core.s.dynamic
              ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j
              : b.core.$items.eq(g).attr("data-width") ||
                e[0].naturalWidth ||
                j;
            var k;
            b.core.$outer.hasClass("lg-zoomed")
              ? (d = 1)
              : i > j && ((k = i / j), (d = k || 2)),
              h
                ? ((b.pageX = a(window).width() / 2),
                  (b.pageY = a(window).height() / 2 + a(window).scrollTop()))
                : ((b.pageX =
                    c.pageX || c.originalEvent.targetTouches[0].pageX),
                  (b.pageY =
                    c.pageY || c.originalEvent.targetTouches[0].pageY)),
              f(),
              setTimeout(function () {
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
              }, 10);
          },
          h = !1;
        b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, c) {
          var d = b.core.$slide.eq(c).find(".lg-image");
          d.on("dblclick", function (a) {
            g(a, d, c);
          }),
            d.on("touchstart", function (a) {
              h
                ? (clearTimeout(h), (h = null), g(a, d, c))
                : (h = setTimeout(function () {
                    h = null;
                  }, 300)),
                a.preventDefault();
            });
        }),
          a(window).on(
            "resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",
            function () {
              (b.pageX = a(window).width() / 2),
                (b.pageY = a(window).height() / 2 + a(window).scrollTop()),
                e(d);
            }
          ),
          a("#lg-zoom-out").on("click.lg", function () {
            b.core.$outer.find(".lg-current .lg-image").length &&
              ((d -= b.core.s.scale), f());
          }),
          a("#lg-zoom-in").on("click.lg", function () {
            b.core.$outer.find(".lg-current .lg-image").length &&
              ((d += b.core.s.scale), f());
          }),
          a("#lg-actual-size").on("click.lg", function (a) {
            g(
              a,
              b.core.$slide.eq(b.core.index).find(".lg-image"),
              b.core.index,
              !0
            );
          }),
          b.core.$el.on("onBeforeSlide.lg.tm", function () {
            (d = 1), b.resetZoom();
          }),
          b.zoomDrag(),
          b.zoomSwipe();
      }),
        (d.prototype.resetZoom = function () {
          this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide
              .find(".lg-img-wrap")
              .removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            (this.pageX = a(window).width() / 2),
            (this.pageY = a(window).height() / 2 + a(window).scrollTop());
        }),
        (d.prototype.zoomSwipe = function () {
          var a = this,
            b = {},
            c = {},
            d = !1,
            e = !1,
            f = !1;
          a.core.$slide.on("touchstart.lg", function (c) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
              var d = a.core.$slide.eq(a.core.index).find(".lg-object");
              (f =
                d.prop("offsetHeight") * d.attr("data-scale") >
                a.core.$outer.find(".lg").height()),
                (e =
                  d.prop("offsetWidth") * d.attr("data-scale") >
                  a.core.$outer.find(".lg").width()),
                (e || f) &&
                  (c.preventDefault(),
                  (b = {
                    x: c.originalEvent.targetTouches[0].pageX,
                    y: c.originalEvent.targetTouches[0].pageY,
                  }));
            }
          }),
            a.core.$slide.on("touchmove.lg", function (g) {
              if (a.core.$outer.hasClass("lg-zoomed")) {
                var h,
                  i,
                  j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                g.preventDefault(),
                  (d = !0),
                  (c = {
                    x: g.originalEvent.targetTouches[0].pageX,
                    y: g.originalEvent.targetTouches[0].pageY,
                  }),
                  a.core.$outer.addClass("lg-zoom-dragging"),
                  (i = f
                    ? -Math.abs(j.attr("data-y")) + (c.y - b.y)
                    : -Math.abs(j.attr("data-y"))),
                  (h = e
                    ? -Math.abs(j.attr("data-x")) + (c.x - b.x)
                    : -Math.abs(j.attr("data-x"))),
                  (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) &&
                    (a.core.s.useLeftForZoom
                      ? j.css({ left: h + "px", top: i + "px" })
                      : j.css(
                          "transform",
                          "translate3d(" + h + "px, " + i + "px, 0)"
                        ));
              }
            }),
            a.core.$slide.on("touchend.lg", function () {
              a.core.$outer.hasClass("lg-zoomed") &&
                d &&
                ((d = !1),
                a.core.$outer.removeClass("lg-zoom-dragging"),
                a.touchendZoom(b, c, e, f));
            });
        }),
        (d.prototype.zoomDrag = function () {
          var b = this,
            c = {},
            d = {},
            e = !1,
            f = !1,
            g = !1,
            h = !1;
          b.core.$slide.on("mousedown.lg.zoom", function (d) {
            var f = b.core.$slide.eq(b.core.index).find(".lg-object");
            (h =
              f.prop("offsetHeight") * f.attr("data-scale") >
              b.core.$outer.find(".lg").height()),
              (g =
                f.prop("offsetWidth") * f.attr("data-scale") >
                b.core.$outer.find(".lg").width()),
              b.core.$outer.hasClass("lg-zoomed") &&
                a(d.target).hasClass("lg-object") &&
                (g || h) &&
                (d.preventDefault(),
                (c = { x: d.pageX, y: d.pageY }),
                (e = !0),
                (b.core.$outer.scrollLeft += 1),
                (b.core.$outer.scrollLeft -= 1),
                b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
          }),
            a(window).on("mousemove.lg.zoom", function (a) {
              if (e) {
                var i,
                  j,
                  k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                (f = !0),
                  (d = { x: a.pageX, y: a.pageY }),
                  b.core.$outer.addClass("lg-zoom-dragging"),
                  (j = h
                    ? -Math.abs(k.attr("data-y")) + (d.y - c.y)
                    : -Math.abs(k.attr("data-y"))),
                  (i = g
                    ? -Math.abs(k.attr("data-x")) + (d.x - c.x)
                    : -Math.abs(k.attr("data-x"))),
                  b.core.s.useLeftForZoom
                    ? k.css({ left: i + "px", top: j + "px" })
                    : k.css(
                        "transform",
                        "translate3d(" + i + "px, " + j + "px, 0)"
                      );
              }
            }),
            a(window).on("mouseup.lg.zoom", function (a) {
              e &&
                ((e = !1),
                b.core.$outer.removeClass("lg-zoom-dragging"),
                !f ||
                  (c.x === d.x && c.y === d.y) ||
                  ((d = { x: a.pageX, y: a.pageY }),
                  b.touchendZoom(c, d, g, h)),
                (f = !1)),
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
            });
        }),
        (d.prototype.touchendZoom = function (a, b, c, d) {
          var e = this,
            f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
            g = e.core.$slide.eq(e.core.index).find(".lg-object"),
            h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
            i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
            j =
              (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
            k = Math.abs(
              g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) -
                e.core.$outer.find(".lg").height() +
                j
            ),
            l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
            m = Math.abs(
              g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) -
                e.core.$outer.find(".lg").width() +
                l
            );
          (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) &&
            (d && (i <= -k ? (i = -k) : i >= -j && (i = -j)),
            c && (h <= -m ? (h = -m) : h >= -l && (h = -l)),
            d
              ? f.attr("data-y", Math.abs(i))
              : (i = -Math.abs(f.attr("data-y"))),
            c
              ? f.attr("data-x", Math.abs(h))
              : (h = -Math.abs(f.attr("data-x"))),
            e.core.s.useLeftForZoom
              ? f.css({ left: h + "px", top: i + "px" })
              : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"));
        }),
        (d.prototype.destroy = function () {
          var b = this;
          b.core.$el.off(".lg.zoom"),
            a(window).off(".lg.zoom"),
            b.core.$slide.off(".lg.zoom"),
            b.core.$el.off(".lg.tm.zoom"),
            b.resetZoom(),
            clearTimeout(b.zoomabletimeout),
            (b.zoomabletimeout = !1);
        }),
        (a.fn.lightGallery.modules.zoom = d);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = { hash: !0 },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.hash &&
              ((this.oldHash = window.location.hash), this.init()),
            this
          );
        };
      (c.prototype.init = function () {
        var b,
          c = this;
        c.core.$el.on("onAfterSlide.lg.tm", function (a, b, d) {
          history.replaceState
            ? history.replaceState(
                null,
                null,
                window.location.pathname +
                  window.location.search +
                  "#lg=" +
                  c.core.s.galleryId +
                  "&slide=" +
                  d
              )
            : (window.location.hash =
                "lg=" + c.core.s.galleryId + "&slide=" + d);
        }),
          a(window).on("hashchange.lg.hash", function () {
            b = window.location.hash;
            var a = parseInt(b.split("&slide=")[1], 10);
            b.indexOf("lg=" + c.core.s.galleryId) > -1
              ? c.core.slide(a, !1, !1)
              : c.core.lGalleryOn && c.core.destroy();
          });
      }),
        (c.prototype.destroy = function () {
          this.core.s.hash &&
            (this.oldHash &&
            this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0
              ? history.replaceState
                ? history.replaceState(null, null, this.oldHash)
                : (window.location.hash = this.oldHash)
              : history.replaceState
              ? history.replaceState(
                  null,
                  document.title,
                  window.location.pathname + window.location.search
                )
              : (window.location.hash = ""),
            this.core.$el.off(".lg.hash"));
        }),
        (a.fn.lightGallery.modules.hash = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = {
          share: !0,
          facebook: !0,
          facebookDropdownText: "Facebook",
          twitter: !0,
          twitterDropdownText: "Twitter",
          googlePlus: !0,
          googlePlusDropdownText: "GooglePlus",
          pinterest: !0,
          pinterestDropdownText: "Pinterest",
        },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.share && this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var b = this,
          c =
            '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
        (c += b.core.s.facebook
          ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
            this.core.s.facebookDropdownText +
            "</span></a></li>"
          : ""),
          (c += b.core.s.twitter
            ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.twitterDropdownText +
              "</span></a></li>"
            : ""),
          (c += b.core.s.googlePlus
            ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.googlePlusDropdownText +
              "</span></a></li>"
            : ""),
          (c += b.core.s.pinterest
            ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.pinterestDropdownText +
              "</span></a></li>"
            : ""),
          (c += "</ul></span>"),
          this.core.$outer.find(".lg-toolbar").append(c),
          this.core.$outer
            .find(".lg")
            .append('<div id="lg-dropdown-overlay"></div>'),
          a("#lg-share").on("click.lg", function () {
            b.core.$outer.toggleClass("lg-dropdown-active");
          }),
          a("#lg-dropdown-overlay").on("click.lg", function () {
            b.core.$outer.removeClass("lg-dropdown-active");
          }),
          b.core.$el.on("onAfterSlide.lg.tm", function (c, d, e) {
            setTimeout(function () {
              a("#lg-share-facebook").attr(
                "href",
                "https://www.facebook.com" +
                  encodeURIComponent(
                    b.getSahreProps(e, "facebookShareUrl") ||
                      window.location.href
                  )
              ),
                a("#lg-share-twitter").attr(
                  "href",
                  "https://twitter.com" +
                    b.getSahreProps(e, "tweetText") +
                    "&url=" +
                    encodeURIComponent(
                      b.getSahreProps(e, "twitterShareUrl") ||
                        window.location.href
                    )
                ),
                a("#lg-share-googleplus").attr(
                  "href",
                  "https://plus.google.com" +
                    encodeURIComponent(
                      b.getSahreProps(e, "googleplusShareUrl") ||
                        window.location.href
                    )
                ),
                a("#lg-share-pinterest").attr(
                  "href",
                  "http://www.pinterest.com" +
                    encodeURIComponent(
                      b.getSahreProps(e, "pinterestShareUrl") ||
                        window.location.href
                    ) +
                    "&media=" +
                    encodeURIComponent(b.getSahreProps(e, "src")) +
                    "&description=" +
                    b.getSahreProps(e, "pinterestText")
                );
            }, 100);
          });
      }),
        (c.prototype.getSahreProps = function (a, b) {
          var c = "";
          if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b];
          else {
            var d = this.core.$items.eq(a).attr("href"),
              e = this.core.$items.eq(a).data(b);
            c = "src" === b ? d || e : e;
          }
          return c;
        }),
        (c.prototype.destroy = function () {}),
        (a.fn.lightGallery.modules.share = c);
    })();
  });

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1);
          (this._clones = b),
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || "",
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass("center");
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      (this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass,
          }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find(".owl-item");
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var a, b, c;
        (a = this.$element.find("img")),
          (b = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                "left" === c && b > i - f && b < i + f
                  ? (e = a)
                  : "right" === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, "<", i) &&
                    this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = "left" === c ? a + 1 : a),
                -1 === e
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition:
                this.speed() / 1e3 +
                "s" +
                (this.settings.slideTransition
                  ? " " + this.settings.slideTransition
                  : ""),
            })
          : c
          ? this.$stage.animate(
              { left: b + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger("remove", { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function (a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function (a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf("owl"))
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
              }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src") ||
                  f.attr("data-srcset");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : f.is("source")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: f, url: g },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" === a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on("load", function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? "width:" + c.width + "px;height:" + c.height + "px;"
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function (c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a("<div/>", { class: "owl-video-tn " + j, srcType: c })
                : a("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + c + ")",
                  })),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
          ? a.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : "vzaar" === c.type &&
            a.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + c.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )),
          c.attr("height", h),
          c.attr("width", g),
          "youtube" === f.type
            ? c.attr(
                "src",
                "//www.youtube.com/embed/" +
                  f.id +
                  "?autoplay=1&rel=0&v=" +
                  f.id
              )
            : "vimeo" === f.type
            ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
            : "vzaar" === f.type &&
              c.attr(
                "src",
                "//view.vzaar.com/" + f.id + "/player?autoplay=true"
              ),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find(".owl-video")),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame");
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            a.proxy(function (a) {
              a.namespace && (this.swapping = "translated" == a.type);
            }, this),
          "translate.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function (d) {
        (this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (e.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function (a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a("<div>").addClass(c.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "button",
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          "$relative" === b && e.navContainer
            ? this._controls[b].html("")
            : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    "use strict";
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function (c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function (c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e("transform");
        },
        csstransforms3d: function () {
          return !!e("perspective");
        },
        csstransitions: function () {
          return !!e("transition");
        },
        cssanimations: function () {
          return !!e("animation");
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof exports
    ? (module.exports = a)
    : a(jQuery);
})(function (a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0;
    if (
      ((b = a.event.fix(g)),
      (b.type = "mousewheel"),
      "detail" in g && (m = -1 * g.detail),
      "wheelDelta" in g && (m = g.wheelDelta),
      "wheelDeltaY" in g && (m = g.wheelDeltaY),
      "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
      "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
      (j = 0 === m ? l : m),
      "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
      "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
      0 !== m || 0 !== l)
    ) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        (j *= q), (m *= q), (l *= q);
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        (j *= r), (m *= r), (l *= r);
      }
      if (
        ((n = Math.max(Math.abs(m), Math.abs(l))),
        (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
        d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
        (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
        (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
        (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
        k.settings.normalizeOffset && this.getBoundingClientRect)
      ) {
        var s = this.getBoundingClientRect();
        (o = b.clientX - s.left), (p = b.clientY - s.top);
      }
      return (
        (b.deltaX = l),
        (b.deltaY = m),
        (b.deltaFactor = f),
        (b.offsetX = o),
        (b.offsetY = p),
        (b.deltaMode = 0),
        h.unshift(b, j, l, m),
        e && clearTimeout(e),
        (e = setTimeout(c, 200)),
        (a.event.dispatch || a.event.handle).apply(this, h)
      );
    }
  }
  function c() {
    f = null;
  }
  function d(a, b) {
    return (
      k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    );
  }
  var e,
    f,
    g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    h =
      "onwheel" in document || document.documentMode >= 9
        ? ["wheel"]
        : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    i = Array.prototype.slice;
  if (a.event.fixHooks)
    for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = (a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function () {
      if (this.addEventListener)
        for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1);
      else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
        a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1);
      else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"),
        a.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function (b) {
      var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return (
        d.length || (d = a("body")),
        parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
      );
    },
    getPageHeight: function (b) {
      return a(b).height();
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
  });
  a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function (a) {
      return this.unbind("mousewheel", a);
    },
  });
});

/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (e) {
  "use strict";
  var o = !1,
    t = !1,
    r = 0,
    i = 2e3,
    s = 0,
    n = e,
    l = document,
    a = window,
    c = n(a),
    d = [],
    u =
      a.requestAnimationFrame ||
      a.webkitRequestAnimationFrame ||
      a.mozRequestAnimationFrame ||
      !1,
    h =
      a.cancelAnimationFrame ||
      a.webkitCancelAnimationFrame ||
      a.mozCancelAnimationFrame ||
      !1;
  if (u) a.cancelAnimationFrame || (h = function (e) {});
  else {
    var p = 0;
    (u = function (e, o) {
      var t = new Date().getTime(),
        r = Math.max(0, 16 - (t - p)),
        i = a.setTimeout(function () {
          e(t + r);
        }, r);
      return (p = t + r), i;
    }),
      (h = function (e) {
        a.clearTimeout(e);
      });
  }
  var m = a.MutationObserver || a.WebKitMutationObserver || !1,
    f =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    g = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#424242",
      cursorwidth: "6px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 40,
      mousescrollstep: 27,
      touchbehavior: !1,
      emulatetouch: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "",
      iframeautoresize: !0,
      cursorminheight: 32,
      preservenativescrolling: !0,
      railoffset: !1,
      railhoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: 0.3,
      rtlmode: "auto",
      cursordragontouch: !1,
      oneaxismousemode: "auto",
      scriptpath: (function () {
        var e =
            l.currentScript ||
            (function () {
              var e = l.getElementsByTagName("script");
              return !!e.length && e[e.length - 1];
            })(),
          o = e ? e.src.split("?")[0] : "";
        return o.split("/").length > 0
          ? o.split("/").slice(0, -1).join("/") + "/"
          : "";
      })(),
      preventmultitouchscrolling: !0,
      disablemutationobserver: !1,
      enableobserver: !0,
      scrollbarid: !1,
    },
    v = !1,
    w = function () {
      if (v) return v;
      var e = l.createElement("DIV"),
        o = e.style,
        t = navigator.userAgent,
        r = navigator.platform,
        i = {};
      return (
        (i.haspointerlock =
          "pointerLockElement" in l ||
          "webkitPointerLockElement" in l ||
          "mozPointerLockElement" in l),
        (i.isopera = "opera" in a),
        (i.isopera12 = i.isopera && "getUserMedia" in navigator),
        (i.isoperamini =
          "[object OperaMini]" === Object.prototype.toString.call(a.operamini)),
        (i.isie = "all" in l && "attachEvent" in e && !i.isopera),
        (i.isieold = i.isie && !("msInterpolationMode" in o)),
        (i.isie7 =
          i.isie &&
          !i.isieold &&
          (!("documentMode" in l) || 7 === l.documentMode)),
        (i.isie8 = i.isie && "documentMode" in l && 8 === l.documentMode),
        (i.isie9 = i.isie && "performance" in a && 9 === l.documentMode),
        (i.isie10 = i.isie && "performance" in a && 10 === l.documentMode),
        (i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11),
        (i.ismsedge = "msCredentials" in a),
        (i.ismozilla = "MozAppearance" in o),
        (i.iswebkit = !i.ismsedge && "WebkitAppearance" in o),
        (i.ischrome = i.iswebkit && "chrome" in a),
        (i.ischrome38 = i.ischrome && "touchAction" in o),
        (i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock),
        (i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o),
        (i.cantouch =
          "ontouchstart" in l.documentElement || "ontouchstart" in a),
        (i.hasw3ctouch =
          (a.PointerEvent || !1) &&
          (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)),
        (i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1)),
        (i.ismac = /^mac$/i.test(r)),
        (i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r)),
        (i.isios4 = i.isios && !("seal" in Object)),
        (i.isios7 = i.isios && "webkitHidden" in l),
        (i.isios8 = i.isios && "hidden" in l),
        (i.isios10 = i.isios && a.Proxy),
        (i.isandroid = /android/i.test(t)),
        (i.haseventlistener = "addEventListener" in e),
        (i.trstyle = !1),
        (i.hastransform = !1),
        (i.hastranslate3d = !1),
        (i.transitionstyle = !1),
        (i.hastransition = !1),
        (i.transitionend = !1),
        (i.trstyle = "transform"),
        (i.hastransform =
          "transform" in o ||
          (function () {
            for (
              var e = [
                  "msTransform",
                  "webkitTransform",
                  "MozTransform",
                  "OTransform",
                ],
                t = 0,
                r = e.length;
              t < r;
              t++
            )
              if (void 0 !== o[e[t]]) {
                i.trstyle = e[t];
                break;
              }
            i.hastransform = !!i.trstyle;
          })()),
        i.hastransform &&
          ((o[i.trstyle] = "translate3d(1px,2px,3px)"),
          (i.hastranslate3d = /translate3d/.test(o[i.trstyle]))),
        (i.transitionstyle = "transition"),
        (i.prefixstyle = ""),
        (i.transitionend = "transitionend"),
        (i.hastransition =
          "transition" in o ||
          (function () {
            i.transitionend = !1;
            for (
              var e = [
                  "webkitTransition",
                  "msTransition",
                  "MozTransition",
                  "OTransition",
                  "OTransition",
                  "KhtmlTransition",
                ],
                t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"],
                r = [
                  "webkitTransitionEnd",
                  "msTransitionEnd",
                  "transitionend",
                  "otransitionend",
                  "oTransitionEnd",
                  "KhtmlTransitionEnd",
                ],
                s = 0,
                n = e.length;
              s < n;
              s++
            )
              if (e[s] in o) {
                (i.transitionstyle = e[s]),
                  (i.prefixstyle = t[s]),
                  (i.transitionend = r[s]);
                break;
              }
            i.ischrome26 && (i.prefixstyle = t[1]),
              (i.hastransition = i.transitionstyle);
          })()),
        (i.cursorgrabvalue = (function () {
          var e = ["grab", "-webkit-grab", "-moz-grab"];
          ((i.ischrome && !i.ischrome38) || i.isie) && (e = []);
          for (var t = 0, r = e.length; t < r; t++) {
            var s = e[t];
            if (((o.cursor = s), o.cursor == s)) return s;
          }
          return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize";
        })()),
        (i.hasmousecapture = "setCapture" in e),
        (i.hasMutationObserver = !1 !== m),
        (e = null),
        (v = i),
        i
      );
    },
    b = function (e, p) {
      function v() {
        var e = T.doc.css(P.trstyle);
        return (
          !(!e || "matrix" != e.substr(0, 6)) &&
          e
            .replace(/^.*\((.*)\)$/g, "$1")
            .replace(/px/g, "")
            .split(/, +/)
        );
      }
      function b() {
        var e = T.win;
        if ("zIndex" in e) return e.zIndex();
        for (; e.length > 0; ) {
          if (9 == e[0].nodeType) return !1;
          var o = e.css("zIndex");
          if (!isNaN(o) && 0 !== o) return parseInt(o);
          e = e.parent();
        }
        return !1;
      }
      function x(e, o, t) {
        var r = e.css(o),
          i = parseFloat(r);
        if (isNaN(i)) {
          var s =
            3 == (i = I[r] || 0)
              ? t
                ? T.win.outerHeight() - T.win.innerHeight()
                : T.win.outerWidth() - T.win.innerWidth()
              : 1;
          return T.isie8 && i && (i += 1), s ? i : 0;
        }
        return i;
      }
      function S(e, o, t, r) {
        T._bind(
          e,
          o,
          function (r) {
            var i = {
              original: (r = r || a.event),
              target: r.target || r.srcElement,
              type: "wheel",
              deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
              deltaX: 0,
              deltaZ: 0,
              preventDefault: function () {
                return (
                  r.preventDefault ? r.preventDefault() : (r.returnValue = !1),
                  !1
                );
              },
              stopImmediatePropagation: function () {
                r.stopImmediatePropagation
                  ? r.stopImmediatePropagation()
                  : (r.cancelBubble = !0);
              },
            };
            return (
              "mousewheel" == o
                ? (r.wheelDeltaX && (i.deltaX = -0.025 * r.wheelDeltaX),
                  r.wheelDeltaY && (i.deltaY = -0.025 * r.wheelDeltaY),
                  !i.deltaY && !i.deltaX && (i.deltaY = -0.025 * r.wheelDelta))
                : (i.deltaY = r.detail),
              t.call(e, i)
            );
          },
          r
        );
      }
      function z(e, o, t, r) {
        T.scrollrunning ||
          ((T.newscrolly = T.getScrollTop()),
          (T.newscrollx = T.getScrollLeft()),
          (D = f()));
        var i = f() - D;
        if (
          ((D = f()),
          i > 350 ? (A = 1) : (A += (2 - A) / 10),
          (e = (e * A) | 0),
          (o = (o * A) | 0),
          e)
        ) {
          if (r)
            if (e < 0) {
              if (T.getScrollLeft() >= T.page.maxw) return !0;
            } else if (T.getScrollLeft() <= 0) return !0;
          var s = e > 0 ? 1 : -1;
          X !== s &&
            (T.scrollmom && T.scrollmom.stop(),
            (T.newscrollx = T.getScrollLeft()),
            (X = s)),
            (T.lastdeltax -= e);
        }
        if (o) {
          if (
            (function () {
              var e = T.getScrollTop();
              if (o < 0) {
                if (e >= T.page.maxh) return !0;
              } else if (e <= 0) return !0;
            })()
          ) {
            if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive)
              return !0;
            var n = T.view.h >> 1;
            T.newscrolly < -n
              ? ((T.newscrolly = -n), (o = -1))
              : T.newscrolly > T.page.maxh + n
              ? ((T.newscrolly = T.page.maxh + n), (o = 1))
              : (o = 0);
          }
          var l = o > 0 ? 1 : -1;
          B !== l &&
            (T.scrollmom && T.scrollmom.stop(),
            (T.newscrolly = T.getScrollTop()),
            (B = l)),
            (T.lastdeltay -= o);
        }
        (o || e) &&
          T.synched("relativexy", function () {
            var e = T.lastdeltay + T.newscrolly;
            T.lastdeltay = 0;
            var o = T.lastdeltax + T.newscrollx;
            (T.lastdeltax = 0), T.rail.drag || T.doScrollPos(o, e);
          });
      }
      function k(e, o, t) {
        var r, i;
        return (
          !(t || !q) ||
          (0 === e.deltaMode
            ? ((r = (-e.deltaX * (M.mousescrollstep / 54)) | 0),
              (i = (-e.deltaY * (M.mousescrollstep / 54)) | 0))
            : 1 === e.deltaMode &&
              ((r = ((-e.deltaX * M.mousescrollstep * 50) / 80) | 0),
              (i = ((-e.deltaY * M.mousescrollstep * 50) / 80) | 0)),
          o &&
            M.oneaxismousemode &&
            0 === r &&
            i &&
            ((r = i),
            (i = 0),
            t &&
              (r < 0
                ? T.getScrollLeft() >= T.page.maxw
                : T.getScrollLeft() <= 0) &&
              ((i = r), (r = 0))),
          T.isrtlmode && (r = -r),
          z(r, i, t, !0)
            ? void (t && (q = !0))
            : ((q = !1), e.stopImmediatePropagation(), e.preventDefault()))
        );
      }
      var T = this;
      (this.version = "3.7.6"), (this.name = "nicescroll"), (this.me = p);
      var E = n("body"),
        M = (this.opt = { doc: E, win: !1 });
      if ((n.extend(M, g), (M.snapbackspeed = 80), e))
        for (var L in M) void 0 !== e[L] && (M[L] = e[L]);
      if (
        (M.disablemutationobserver && (m = !1),
        (this.doc = M.doc),
        (this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : ""),
        (this.ispage = /^BODY|HTML/.test(
          M.win ? M.win[0].nodeName : this.doc[0].nodeName
        )),
        (this.haswrapper = !1 !== M.win),
        (this.win = M.win || (this.ispage ? c : this.doc)),
        (this.docscroll = this.ispage && !this.haswrapper ? c : this.win),
        (this.body = E),
        (this.viewport = !1),
        (this.isfixed = !1),
        (this.iframe = !1),
        (this.isiframe =
          "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName),
        (this.istextarea = "TEXTAREA" == this.win[0].nodeName),
        (this.forcescreen = !1),
        (this.canshowonmouseevent = "scroll" != M.autohidemode),
        (this.onmousedown = !1),
        (this.onmouseup = !1),
        (this.onmousemove = !1),
        (this.onmousewheel = !1),
        (this.onkeypress = !1),
        (this.ongesturezoom = !1),
        (this.onclick = !1),
        (this.onscrollstart = !1),
        (this.onscrollend = !1),
        (this.onscrollcancel = !1),
        (this.onzoomin = !1),
        (this.onzoomout = !1),
        (this.view = !1),
        (this.page = !1),
        (this.scroll = { x: 0, y: 0 }),
        (this.scrollratio = { x: 0, y: 0 }),
        (this.cursorheight = 20),
        (this.scrollvaluemax = 0),
        "auto" == M.rtlmode)
      ) {
        var C = this.win[0] == a ? this.body : this.win,
          N =
            C.css("writing-mode") ||
            C.css("-webkit-writing-mode") ||
            C.css("-ms-writing-mode") ||
            C.css("-moz-writing-mode");
        "horizontal-tb" == N || "lr-tb" == N || "" === N
          ? ((this.isrtlmode = "rtl" == C.css("direction")),
            (this.isvertical = !1))
          : ((this.isrtlmode =
              "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N),
            (this.isvertical =
              "vertical-rl" == N || "tb" == N || "tb-rl" == N));
      } else (this.isrtlmode = !0 === M.rtlmode), (this.isvertical = !1);
      if (
        ((this.scrollrunning = !1),
        (this.scrollmom = !1),
        (this.observer = !1),
        (this.observerremover = !1),
        (this.observerbody = !1),
        !1 !== M.scrollbarid)
      )
        this.id = M.scrollbarid;
      else
        do {
          this.id = "ascrail" + i++;
        } while (l.getElementById(this.id));
      (this.rail = !1),
        (this.cursor = !1),
        (this.cursorfreezed = !1),
        (this.selectiondrag = !1),
        (this.zoom = !1),
        (this.zoomactive = !1),
        (this.hasfocus = !1),
        (this.hasmousefocus = !1),
        (this.railslocked = !1),
        (this.locked = !1),
        (this.hidden = !1),
        (this.cursoractive = !0),
        (this.wheelprevented = !1),
        (this.overflowx = M.overflowx),
        (this.overflowy = M.overflowy),
        (this.nativescrollingarea = !1),
        (this.checkarea = 0),
        (this.events = []),
        (this.saved = {}),
        (this.delaylist = {}),
        (this.synclist = {}),
        (this.lastdeltax = 0),
        (this.lastdeltay = 0),
        (this.detected = w());
      var P = n.extend({}, this.detected);
      (this.canhwscroll = P.hastransform && M.hwacceleration),
        (this.ishwscroll = this.canhwscroll && T.haswrapper),
        this.isrtlmode
          ? this.isvertical
            ? (this.hasreversehr = !(P.iswebkit || P.isie || P.isie11))
            : (this.hasreversehr = !(
                P.iswebkit ||
                (P.isie && !P.isie10 && !P.isie11)
              ))
          : (this.hasreversehr = !1),
        (this.istouchcapable = !1),
        P.cantouch || (!P.hasw3ctouch && !P.hasmstouch)
          ? !P.cantouch ||
            P.isios ||
            P.isandroid ||
            (!P.iswebkit && !P.ismozilla) ||
            (this.istouchcapable = !0)
          : (this.istouchcapable = !0),
        M.enablemouselockapi ||
          ((P.hasmousecapture = !1), (P.haspointerlock = !1)),
        (this.debounced = function (e, o, t) {
          T &&
            (T.delaylist[e] ||
              !1 ||
              ((T.delaylist[e] = {
                h: u(function () {
                  T.delaylist[e].fn.call(T), (T.delaylist[e] = !1);
                }, t),
              }),
              o.call(T)),
            (T.delaylist[e].fn = o));
        }),
        (this.synched = function (e, o) {
          T.synclist[e]
            ? (T.synclist[e] = o)
            : ((T.synclist[e] = o),
              u(function () {
                T &&
                  (T.synclist[e] && T.synclist[e].call(T),
                  (T.synclist[e] = null));
              }));
        }),
        (this.unsynched = function (e) {
          T.synclist[e] && (T.synclist[e] = !1);
        }),
        (this.css = function (e, o) {
          for (var t in o) T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t]);
        }),
        (this.scrollTop = function (e) {
          return void 0 === e ? T.getScrollTop() : T.setScrollTop(e);
        }),
        (this.scrollLeft = function (e) {
          return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e);
        });
      var R = function (e, o, t, r, i, s, n) {
        (this.st = e),
          (this.ed = o),
          (this.spd = t),
          (this.p1 = r || 0),
          (this.p2 = i || 1),
          (this.p3 = s || 0),
          (this.p4 = n || 1),
          (this.ts = f()),
          (this.df = o - e);
      };
      if (
        ((R.prototype = {
          B2: function (e) {
            return 3 * (1 - e) * (1 - e) * e;
          },
          B3: function (e) {
            return 3 * (1 - e) * e * e;
          },
          B4: function (e) {
            return e * e * e;
          },
          getPos: function () {
            return (f() - this.ts) / this.spd;
          },
          getNow: function () {
            var e = (f() - this.ts) / this.spd,
              o = this.B2(e) + this.B3(e) + this.B4(e);
            return e >= 1 ? this.ed : (this.st + this.df * o) | 0;
          },
          update: function (e, o) {
            return (
              (this.st = this.getNow()),
              (this.ed = e),
              (this.spd = o),
              (this.ts = f()),
              (this.df = this.ed - this.st),
              this
            );
          },
        }),
        this.ishwscroll)
      ) {
        (this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" }),
          P.hastranslate3d &&
            P.isios &&
            this.doc.css("-webkit-backface-visibility", "hidden"),
          (this.getScrollTop = function (e) {
            if (!e) {
              var o = v();
              if (o) return 16 == o.length ? -o[13] : -o[5];
              if (T.timerscroll && T.timerscroll.bz)
                return T.timerscroll.bz.getNow();
            }
            return T.doc.translate.y;
          }),
          (this.getScrollLeft = function (e) {
            if (!e) {
              var o = v();
              if (o) return 16 == o.length ? -o[12] : -o[4];
              if (T.timerscroll && T.timerscroll.bh)
                return T.timerscroll.bh.getNow();
            }
            return T.doc.translate.x;
          }),
          (this.notifyScrollEvent = function (e) {
            var o = l.createEvent("UIEvents");
            o.initUIEvent("scroll", !1, !1, a, 1),
              (o.niceevent = !0),
              e.dispatchEvent(o);
          });
        var _ = this.isrtlmode ? 1 : -1;
        P.hastranslate3d && M.enabletranslate3d
          ? ((this.setScrollTop = function (e, o) {
              (T.doc.translate.y = e),
                (T.doc.translate.ty = -1 * e + "px"),
                T.doc.css(
                  P.trstyle,
                  "translate3d(" +
                    T.doc.translate.tx +
                    "," +
                    T.doc.translate.ty +
                    ",0)"
                ),
                o || T.notifyScrollEvent(T.win[0]);
            }),
            (this.setScrollLeft = function (e, o) {
              (T.doc.translate.x = e),
                (T.doc.translate.tx = e * _ + "px"),
                T.doc.css(
                  P.trstyle,
                  "translate3d(" +
                    T.doc.translate.tx +
                    "," +
                    T.doc.translate.ty +
                    ",0)"
                ),
                o || T.notifyScrollEvent(T.win[0]);
            }))
          : ((this.setScrollTop = function (e, o) {
              (T.doc.translate.y = e),
                (T.doc.translate.ty = -1 * e + "px"),
                T.doc.css(
                  P.trstyle,
                  "translate(" +
                    T.doc.translate.tx +
                    "," +
                    T.doc.translate.ty +
                    ")"
                ),
                o || T.notifyScrollEvent(T.win[0]);
            }),
            (this.setScrollLeft = function (e, o) {
              (T.doc.translate.x = e),
                (T.doc.translate.tx = e * _ + "px"),
                T.doc.css(
                  P.trstyle,
                  "translate(" +
                    T.doc.translate.tx +
                    "," +
                    T.doc.translate.ty +
                    ")"
                ),
                o || T.notifyScrollEvent(T.win[0]);
            }));
      } else
        (this.getScrollTop = function () {
          return T.docscroll.scrollTop();
        }),
          (this.setScrollTop = function (e) {
            T.docscroll.scrollTop(e);
          }),
          (this.getScrollLeft = function () {
            return T.hasreversehr
              ? T.detected.ismozilla
                ? T.page.maxw - Math.abs(T.docscroll.scrollLeft())
                : T.page.maxw - T.docscroll.scrollLeft()
              : T.docscroll.scrollLeft();
          }),
          (this.setScrollLeft = function (e) {
            return setTimeout(function () {
              if (T)
                return (
                  T.hasreversehr &&
                    (e = T.detected.ismozilla
                      ? -(T.page.maxw - e)
                      : T.page.maxw - e),
                  T.docscroll.scrollLeft(e)
                );
            }, 1);
          });
      (this.getTarget = function (e) {
        return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement);
      }),
        (this.hasParent = function (e, o) {
          if (!e) return !1;
          for (var t = e.target || e.srcElement || e || !1; t && t.id != o; )
            t = t.parentNode || !1;
          return !1 !== t;
        });
      var I = { thin: 1, medium: 3, thick: 5 };
      (this.getDocumentScrollOffset = function () {
        return {
          top: a.pageYOffset || l.documentElement.scrollTop,
          left: a.pageXOffset || l.documentElement.scrollLeft,
        };
      }),
        (this.getOffset = function () {
          if (T.isfixed) {
            var e = T.win.offset(),
              o = T.getDocumentScrollOffset();
            return (e.top -= o.top), (e.left -= o.left), e;
          }
          var t = T.win.offset();
          if (!T.viewport) return t;
          var r = T.viewport.offset();
          return { top: t.top - r.top, left: t.left - r.left };
        }),
        (this.updateScrollBar = function (e) {
          var o, t;
          if (T.ishwscroll)
            T.rail.css({
              height:
                T.win.innerHeight() -
                (M.railpadding.top + M.railpadding.bottom),
            }),
              T.railh &&
                T.railh.css({
                  width:
                    T.win.innerWidth() -
                    (M.railpadding.left + M.railpadding.right),
                });
          else {
            var r = T.getOffset();
            if (
              ((o = {
                top: r.top,
                left: r.left - (M.railpadding.left + M.railpadding.right),
              }),
              (o.top += x(T.win, "border-top-width", !0)),
              (o.left += T.rail.align
                ? T.win.outerWidth() -
                  x(T.win, "border-right-width") -
                  T.rail.width
                : x(T.win, "border-left-width")),
              (t = M.railoffset) &&
                (t.top && (o.top += t.top), t.left && (o.left += t.left)),
              T.railslocked ||
                T.rail.css({
                  top: o.top,
                  left: o.left,
                  height:
                    (e ? e.h : T.win.innerHeight()) -
                    (M.railpadding.top + M.railpadding.bottom),
                }),
              T.zoom &&
                T.zoom.css({
                  top: o.top + 1,
                  left:
                    1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4,
                }),
              T.railh && !T.railslocked)
            ) {
              (o = { top: r.top, left: r.left }),
                (t = M.railhoffset) &&
                  (t.top && (o.top += t.top), t.left && (o.left += t.left));
              var i = T.railh.align
                  ? o.top +
                    x(T.win, "border-top-width", !0) +
                    T.win.innerHeight() -
                    T.railh.height
                  : o.top + x(T.win, "border-top-width", !0),
                s = o.left + x(T.win, "border-left-width");
              T.railh.css({
                top: i - (M.railpadding.top + M.railpadding.bottom),
                left: s,
                width: T.railh.width,
              });
            }
          }
        }),
        (this.doRailClick = function (e, o, t) {
          var r, i, s, n;
          T.railslocked ||
            (T.cancelEvent(e),
            "pageY" in e ||
              ((e.pageX = e.clientX + l.documentElement.scrollLeft),
              (e.pageY = e.clientY + l.documentElement.scrollTop)),
            o
              ? ((r = t ? T.doScrollLeft : T.doScrollTop),
                (s = t
                  ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) *
                    T.scrollratio.x
                  : (e.pageY - T.rail.offset().top - T.cursorheight / 2) *
                    T.scrollratio.y),
                T.unsynched("relativexy"),
                r(0 | s))
              : ((r = t ? T.doScrollLeftBy : T.doScrollBy),
                (s = t ? T.scroll.x : T.scroll.y),
                (n = t
                  ? e.pageX - T.railh.offset().left
                  : e.pageY - T.rail.offset().top),
                (i = t ? T.view.w : T.view.h),
                r(s >= n ? i : -i)));
        }),
        (T.newscrolly = T.newscrollx = 0),
        (T.hasanimationframe = "requestAnimationFrame" in a),
        (T.hascancelanimationframe = "cancelAnimationFrame" in a),
        (T.hasborderbox = !1),
        (this.init = function () {
          if (((T.saved.css = []), P.isoperamini)) return !0;
          if (P.isandroid && !("hidden" in l)) return !0;
          (M.emulatetouch = M.emulatetouch || M.touchbehavior),
            (T.hasborderbox =
              a.getComputedStyle &&
              "border-box" === a.getComputedStyle(l.body)["box-sizing"]);
          var e = { "overflow-y": "hidden" };
          if (
            ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"),
            T.ishwscroll &&
              (this.doc.css(
                P.transitionstyle,
                P.prefixstyle + "transform 0ms ease-out"
              ),
              P.transitionend &&
                T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)),
            (T.zindex = "auto"),
            T.ispage || "auto" != M.zindex
              ? (T.zindex = M.zindex)
              : (T.zindex = b() || "auto"),
            !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex),
            T.isie &&
              0 === T.zindex &&
              "auto" == M.zindex &&
              (T.zindex = "auto"),
            !T.ispage || !P.isieold)
          ) {
            var i = T.docscroll;
            T.ispage && (i = T.haswrapper ? T.win : T.doc),
              T.css(i, e),
              T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e),
              !P.isios ||
                T.ispage ||
                T.haswrapper ||
                T.css(E, { "-webkit-overflow-scrolling": "touch" });
            var d = n(l.createElement("div"));
            d.css({
              position: "relative",
              top: 0,
              float: "right",
              width: M.cursorwidth,
              height: 0,
              "background-color": M.cursorcolor,
              border: M.cursorborder,
              "background-clip": "padding-box",
              "-webkit-border-radius": M.cursorborderradius,
              "-moz-border-radius": M.cursorborderradius,
              "border-radius": M.cursorborderradius,
            }),
              d.addClass("nicescroll-cursors"),
              (T.cursor = d);
            var u = n(l.createElement("div"));
            u.attr("id", T.id),
              u.addClass("nicescroll-rails nicescroll-rails-vr");
            var h,
              p,
              f = ["left", "right", "top", "bottom"];
            for (var g in f)
              (p = f[g]),
                (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
            u.append(d),
              (u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth())),
              u.css({
                width: u.width + "px",
                zIndex: T.zindex,
                background: M.background,
                cursor: "default",
              }),
              (u.visibility = !0),
              (u.scrollable = !0),
              (u.align = "left" == M.railalign ? 0 : 1),
              (T.rail = u),
              (T.rail.drag = !1);
            var v = !1;
            !M.boxzoom ||
              T.ispage ||
              P.isieold ||
              ((v = l.createElement("div")),
              T.bind(v, "click", T.doZoom),
              T.bind(v, "mouseenter", function () {
                T.zoom.css("opacity", M.cursoropacitymax);
              }),
              T.bind(v, "mouseleave", function () {
                T.zoom.css("opacity", M.cursoropacitymin);
              }),
              (T.zoom = n(v)),
              T.zoom.css({
                cursor: "pointer",
                zIndex: T.zindex,
                backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
                height: 18,
                width: 18,
                backgroundPosition: "0 0",
              }),
              M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom),
              P.cantouch &&
                M.gesturezoom &&
                ((T.ongesturezoom = function (e) {
                  return (
                    e.scale > 1.5 && T.doZoomIn(e),
                    e.scale < 0.8 && T.doZoomOut(e),
                    T.cancelEvent(e)
                  );
                }),
                T.bind(T.win, "gestureend", T.ongesturezoom))),
              (T.railh = !1);
            var w;
            if (
              (M.horizrailenabled &&
                (T.css(i, { overflowX: "hidden" }),
                (d = n(l.createElement("div"))).css({
                  position: "absolute",
                  top: 0,
                  height: M.cursorwidth,
                  width: 0,
                  backgroundColor: M.cursorcolor,
                  border: M.cursorborder,
                  backgroundClip: "padding-box",
                  "-webkit-border-radius": M.cursorborderradius,
                  "-moz-border-radius": M.cursorborderradius,
                  "border-radius": M.cursorborderradius,
                }),
                P.isieold && d.css("overflow", "hidden"),
                d.addClass("nicescroll-cursors"),
                (T.cursorh = d),
                (w = n(l.createElement("div"))).attr("id", T.id + "-hr"),
                w.addClass("nicescroll-rails nicescroll-rails-hr"),
                (w.height = Math.max(
                  parseFloat(M.cursorwidth),
                  d.outerHeight()
                )),
                w.css({
                  height: w.height + "px",
                  zIndex: T.zindex,
                  background: M.background,
                }),
                w.append(d),
                (w.visibility = !0),
                (w.scrollable = !0),
                (w.align = "top" == M.railvalign ? 0 : 1),
                (T.railh = w),
                (T.railh.drag = !1)),
              T.ispage)
            )
              u.css({ position: "fixed", top: 0, height: "100%" }),
                u.css(u.align ? { right: 0 } : { left: 0 }),
                T.body.append(u),
                T.railh &&
                  (w.css({ position: "fixed", left: 0, width: "100%" }),
                  w.css(w.align ? { bottom: 0 } : { top: 0 }),
                  T.body.append(w));
            else {
              if (T.ishwscroll) {
                "static" == T.win.css("position") &&
                  T.css(T.win, { position: "relative" });
                var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
                n(x).scrollTop(0).scrollLeft(0),
                  T.zoom &&
                    (T.zoom.css({
                      position: "absolute",
                      top: 1,
                      right: 0,
                      "margin-right": u.width + 4,
                    }),
                    x.append(T.zoom)),
                  u.css({ position: "absolute", top: 0 }),
                  u.css(u.align ? { right: 0 } : { left: 0 }),
                  x.append(u),
                  w &&
                    (w.css({ position: "absolute", left: 0, bottom: 0 }),
                    w.css(w.align ? { bottom: 0 } : { top: 0 }),
                    x.append(w));
              } else {
                T.isfixed = "fixed" == T.win.css("position");
                var S = T.isfixed ? "fixed" : "absolute";
                T.isfixed || (T.viewport = T.getViewport(T.win[0])),
                  T.viewport &&
                    ((T.body = T.viewport),
                    /fixed|absolute/.test(T.viewport.css("position")) ||
                      T.css(T.viewport, { position: "relative" })),
                  u.css({ position: S }),
                  T.zoom && T.zoom.css({ position: S }),
                  T.updateScrollBar(),
                  T.body.append(u),
                  T.zoom && T.body.append(T.zoom),
                  T.railh && (w.css({ position: S }), T.body.append(w));
              }
              P.isios &&
                T.css(T.win, {
                  "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                  "-webkit-touch-callout": "none",
                }),
                M.disableoutline &&
                  (P.isie && T.win.attr("hideFocus", "true"),
                  P.iswebkit && T.win.css("outline", "none"));
            }
            if (
              (!1 === M.autohidemode
                ? ((T.autohidedom = !1),
                  T.rail.css({ opacity: M.cursoropacitymax }),
                  T.railh && T.railh.css({ opacity: M.cursoropacitymax }))
                : !0 === M.autohidemode || "leave" === M.autohidemode
                ? ((T.autohidedom = n().add(T.rail)),
                  P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)),
                  T.railh && (T.autohidedom = T.autohidedom.add(T.railh)),
                  T.railh &&
                    P.isie8 &&
                    (T.autohidedom = T.autohidedom.add(T.cursorh)))
                : "scroll" == M.autohidemode
                ? ((T.autohidedom = n().add(T.rail)),
                  T.railh && (T.autohidedom = T.autohidedom.add(T.railh)))
                : "cursor" == M.autohidemode
                ? ((T.autohidedom = n().add(T.cursor)),
                  T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh)))
                : "hidden" == M.autohidemode &&
                  ((T.autohidedom = !1), T.hide(), (T.railslocked = !1)),
              P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch)
            ) {
              T.scrollmom = new y(T);
              (T.ontouchstart = function (e) {
                if (T.locked) return !1;
                if (
                  e.pointerType &&
                  ("mouse" === e.pointerType ||
                    e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                )
                  return !1;
                if (
                  ((T.hasmoving = !1),
                  T.scrollmom.timer &&
                    (T.triggerScrollEnd(), T.scrollmom.stop()),
                  !T.railslocked)
                ) {
                  var o = T.getTarget(e);
                  if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type))
                    return T.stopPropagation(e);
                  var t = "mousedown" === e.type;
                  if (
                    (!("clientX" in e) &&
                      "changedTouches" in e &&
                      ((e.clientX = e.changedTouches[0].clientX),
                      (e.clientY = e.changedTouches[0].clientY)),
                    T.forcescreen)
                  ) {
                    var r = e;
                    ((e = { original: e.original ? e.original : e }).clientX =
                      r.screenX),
                      (e.clientY = r.screenY);
                  }
                  if (
                    ((T.rail.drag = {
                      x: e.clientX,
                      y: e.clientY,
                      sx: T.scroll.x,
                      sy: T.scroll.y,
                      st: T.getScrollTop(),
                      sl: T.getScrollLeft(),
                      pt: 2,
                      dl: !1,
                      tg: o,
                    }),
                    T.ispage || !M.directionlockdeadzone)
                  )
                    T.rail.drag.dl = "f";
                  else {
                    var i = { w: c.width(), h: c.height() },
                      s = T.getContentSize(),
                      l = s.h - i.h,
                      a = s.w - i.w;
                    T.rail.scrollable && !T.railh.scrollable
                      ? (T.rail.drag.ck = l > 0 && "v")
                      : !T.rail.scrollable && T.railh.scrollable
                      ? (T.rail.drag.ck = a > 0 && "h")
                      : (T.rail.drag.ck = !1);
                  }
                  if (M.emulatetouch && T.isiframe && P.isie) {
                    var d = T.win.position();
                    (T.rail.drag.x += d.left), (T.rail.drag.y += d.top);
                  }
                  if (
                    ((T.hasmoving = !1),
                    (T.lastmouseup = !1),
                    T.scrollmom.reset(e.clientX, e.clientY),
                    o && t)
                  ) {
                    if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName))
                      return (
                        P.hasmousecapture && o.setCapture(),
                        M.emulatetouch
                          ? (o.onclick &&
                              !o._onclick &&
                              ((o._onclick = o.onclick),
                              (o.onclick = function (e) {
                                if (T.hasmoving) return !1;
                                o._onclick.call(this, e);
                              })),
                            T.cancelEvent(e))
                          : T.stopPropagation(e)
                      );
                    /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) &&
                      (T.preventclick = { tg: o, click: !1 });
                  }
                }
              }),
                (T.ontouchend = function (e) {
                  if (!T.rail.drag) return !0;
                  if (2 == T.rail.drag.pt) {
                    if (
                      e.pointerType &&
                      ("mouse" === e.pointerType ||
                        e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                    )
                      return !1;
                    T.rail.drag = !1;
                    var o = "mouseup" === e.type;
                    if (
                      T.hasmoving &&
                      (T.scrollmom.doMomentum(),
                      (T.lastmouseup = !0),
                      T.hideCursor(),
                      P.hasmousecapture && l.releaseCapture(),
                      o)
                    )
                      return T.cancelEvent(e);
                  } else if (1 == T.rail.drag.pt) return T.onmouseup(e);
                });
              var z = M.emulatetouch && T.isiframe && !P.hasmousecapture,
                k = (0.3 * M.directionlockdeadzone) | 0;
              (T.ontouchmove = function (e, o) {
                if (!T.rail.drag) return !0;
                if (
                  e.targetTouches &&
                  M.preventmultitouchscrolling &&
                  e.targetTouches.length > 1
                )
                  return !0;
                if (
                  e.pointerType &&
                  ("mouse" === e.pointerType ||
                    e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                )
                  return !0;
                if (2 == T.rail.drag.pt) {
                  "changedTouches" in e &&
                    ((e.clientX = e.changedTouches[0].clientX),
                    (e.clientY = e.changedTouches[0].clientY));
                  var t, r;
                  if (((r = t = 0), z && !o)) {
                    var i = T.win.position();
                    (r = -i.left), (t = -i.top);
                  }
                  var s = e.clientY + t,
                    n = s - T.rail.drag.y,
                    a = e.clientX + r,
                    c = a - T.rail.drag.x,
                    d = T.rail.drag.st - n;
                  if (T.ishwscroll && M.bouncescroll)
                    d < 0
                      ? (d = Math.round(d / 2))
                      : d > T.page.maxh &&
                        (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));
                  else if (
                    (d < 0
                      ? ((d = 0), (s = 0))
                      : d > T.page.maxh && ((d = T.page.maxh), (s = 0)),
                    0 === s && !T.hasmoving)
                  )
                    return T.ispage || (T.rail.drag = !1), !0;
                  var u = T.getScrollLeft();
                  if (
                    (T.railh &&
                      T.railh.scrollable &&
                      ((u = T.isrtlmode
                        ? c - T.rail.drag.sl
                        : T.rail.drag.sl - c),
                      T.ishwscroll && M.bouncescroll
                        ? u < 0
                          ? (u = Math.round(u / 2))
                          : u > T.page.maxw &&
                            (u =
                              T.page.maxw + Math.round((u - T.page.maxw) / 2))
                        : (u < 0 && ((u = 0), (a = 0)),
                          u > T.page.maxw && ((u = T.page.maxw), (a = 0)))),
                    !T.hasmoving)
                  ) {
                    if (
                      T.rail.drag.y === e.clientY &&
                      T.rail.drag.x === e.clientX
                    )
                      return T.cancelEvent(e);
                    var h = Math.abs(n),
                      p = Math.abs(c),
                      m = M.directionlockdeadzone;
                    if (
                      (T.rail.drag.ck
                        ? "v" == T.rail.drag.ck
                          ? p > m && h <= k
                            ? (T.rail.drag = !1)
                            : h > m && (T.rail.drag.dl = "v")
                          : "h" == T.rail.drag.ck &&
                            (h > m && p <= k
                              ? (T.rail.drag = !1)
                              : p > m && (T.rail.drag.dl = "h"))
                        : h > m && p > m
                        ? (T.rail.drag.dl = "f")
                        : h > m
                        ? (T.rail.drag.dl = p > k ? "f" : "v")
                        : p > m && (T.rail.drag.dl = h > k ? "f" : "h"),
                      !T.rail.drag.dl)
                    )
                      return T.cancelEvent(e);
                    T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                      (T.hasmoving = !0);
                  }
                  return (
                    T.preventclick &&
                      !T.preventclick.click &&
                      ((T.preventclick.click = T.preventclick.tg.onclick || !1),
                      (T.preventclick.tg.onclick = T.onpreventclick)),
                    T.rail.drag.dl &&
                      ("v" == T.rail.drag.dl
                        ? (u = T.rail.drag.sl)
                        : "h" == T.rail.drag.dl && (d = T.rail.drag.st)),
                    T.synched("touchmove", function () {
                      T.rail.drag &&
                        2 == T.rail.drag.pt &&
                        (T.prepareTransition && T.resetTransition(),
                        T.rail.scrollable && T.setScrollTop(d),
                        T.scrollmom.update(a, s),
                        T.railh && T.railh.scrollable
                          ? (T.setScrollLeft(u), T.showCursor(d, u))
                          : T.showCursor(d),
                        P.isie10 && l.selection.clear());
                    }),
                    T.cancelEvent(e)
                  );
                }
                return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0;
              }),
                (T.ontouchstartCursor = function (e, o) {
                  if (!T.rail.drag || 3 == T.rail.drag.pt) {
                    if (T.locked) return T.cancelEvent(e);
                    T.cancelScroll(),
                      (T.rail.drag = {
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY,
                        sx: T.scroll.x,
                        sy: T.scroll.y,
                        pt: 3,
                        hr: !!o,
                      });
                    var t = T.getTarget(e);
                    return (
                      !T.ispage && P.hasmousecapture && t.setCapture(),
                      T.isiframe &&
                        !P.hasmousecapture &&
                        ((T.saved.csspointerevents =
                          T.doc.css("pointer-events")),
                        T.css(T.doc, { "pointer-events": "none" })),
                      T.cancelEvent(e)
                    );
                  }
                }),
                (T.ontouchendCursor = function (e) {
                  if (T.rail.drag) {
                    if (
                      (P.hasmousecapture && l.releaseCapture(),
                      T.isiframe &&
                        !P.hasmousecapture &&
                        T.doc.css("pointer-events", T.saved.csspointerevents),
                      3 != T.rail.drag.pt)
                    )
                      return;
                    return (T.rail.drag = !1), T.cancelEvent(e);
                  }
                }),
                (T.ontouchmoveCursor = function (e) {
                  if (T.rail.drag) {
                    if (3 != T.rail.drag.pt) return;
                    if (((T.cursorfreezed = !0), T.rail.drag.hr)) {
                      (T.scroll.x =
                        T.rail.drag.sx +
                        (e.touches[0].clientX - T.rail.drag.x)),
                        T.scroll.x < 0 && (T.scroll.x = 0);
                      var o = T.scrollvaluemaxw;
                      T.scroll.x > o && (T.scroll.x = o);
                    } else {
                      (T.scroll.y =
                        T.rail.drag.sy +
                        (e.touches[0].clientY - T.rail.drag.y)),
                        T.scroll.y < 0 && (T.scroll.y = 0);
                      var t = T.scrollvaluemax;
                      T.scroll.y > t && (T.scroll.y = t);
                    }
                    return (
                      T.synched("touchmove", function () {
                        T.rail.drag &&
                          3 == T.rail.drag.pt &&
                          (T.showCursor(),
                          T.rail.drag.hr
                            ? T.doScrollLeft(
                                Math.round(T.scroll.x * T.scrollratio.x),
                                M.cursordragspeed
                              )
                            : T.doScrollTop(
                                Math.round(T.scroll.y * T.scrollratio.y),
                                M.cursordragspeed
                              ));
                      }),
                      T.cancelEvent(e)
                    );
                  }
                });
            }
            if (
              ((T.onmousedown = function (e, o) {
                if (!T.rail.drag || 1 == T.rail.drag.pt) {
                  if (T.railslocked) return T.cancelEvent(e);
                  T.cancelScroll(),
                    (T.rail.drag = {
                      x: e.clientX,
                      y: e.clientY,
                      sx: T.scroll.x,
                      sy: T.scroll.y,
                      pt: 1,
                      hr: o || !1,
                    });
                  var t = T.getTarget(e);
                  return (
                    P.hasmousecapture && t.setCapture(),
                    T.isiframe &&
                      !P.hasmousecapture &&
                      ((T.saved.csspointerevents = T.doc.css("pointer-events")),
                      T.css(T.doc, { "pointer-events": "none" })),
                    (T.hasmoving = !1),
                    T.cancelEvent(e)
                  );
                }
              }),
              (T.onmouseup = function (e) {
                if (T.rail.drag)
                  return (
                    1 != T.rail.drag.pt ||
                    (P.hasmousecapture && l.releaseCapture(),
                    T.isiframe &&
                      !P.hasmousecapture &&
                      T.doc.css("pointer-events", T.saved.csspointerevents),
                    (T.rail.drag = !1),
                    (T.cursorfreezed = !1),
                    T.hasmoving && T.triggerScrollEnd(),
                    T.cancelEvent(e))
                  );
              }),
              (T.onmousemove = function (e) {
                if (T.rail.drag) {
                  if (1 !== T.rail.drag.pt) return;
                  if (P.ischrome && 0 === e.which) return T.onmouseup(e);
                  if (
                    ((T.cursorfreezed = !0),
                    T.hasmoving ||
                      T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                    (T.hasmoving = !0),
                    T.rail.drag.hr)
                  ) {
                    (T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x)),
                      T.scroll.x < 0 && (T.scroll.x = 0);
                    var o = T.scrollvaluemaxw;
                    T.scroll.x > o && (T.scroll.x = o);
                  } else {
                    (T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y)),
                      T.scroll.y < 0 && (T.scroll.y = 0);
                    var t = T.scrollvaluemax;
                    T.scroll.y > t && (T.scroll.y = t);
                  }
                  return (
                    T.synched("mousemove", function () {
                      T.cursorfreezed &&
                        (T.showCursor(),
                        T.rail.drag.hr
                          ? T.scrollLeft(
                              Math.round(T.scroll.x * T.scrollratio.x)
                            )
                          : T.scrollTop(
                              Math.round(T.scroll.y * T.scrollratio.y)
                            ));
                    }),
                    T.cancelEvent(e)
                  );
                }
                T.checkarea = 0;
              }),
              P.cantouch || M.emulatetouch)
            )
              (T.onpreventclick = function (e) {
                if (T.preventclick)
                  return (
                    (T.preventclick.tg.onclick = T.preventclick.click),
                    (T.preventclick = !1),
                    T.cancelEvent(e)
                  );
              }),
                (T.onclick =
                  !P.isios &&
                  function (e) {
                    return (
                      !T.lastmouseup || ((T.lastmouseup = !1), T.cancelEvent(e))
                    );
                  }),
                M.grabcursorenabled &&
                  P.cursorgrabvalue &&
                  (T.css(T.ispage ? T.doc : T.win, {
                    cursor: P.cursorgrabvalue,
                  }),
                  T.css(T.rail, { cursor: P.cursorgrabvalue }));
            else {
              var L = function (e) {
                if (T.selectiondrag) {
                  if (e) {
                    var o = T.win.outerHeight(),
                      t = e.pageY - T.selectiondrag.top;
                    t > 0 && t < o && (t = 0),
                      t >= o && (t -= o),
                      (T.selectiondrag.df = t);
                  }
                  if (0 !== T.selectiondrag.df) {
                    var r = ((-2 * T.selectiondrag.df) / 6) | 0;
                    T.doScrollBy(r),
                      T.debounced(
                        "doselectionscroll",
                        function () {
                          L();
                        },
                        50
                      );
                  }
                }
              };
              (T.hasTextSelected =
                "getSelection" in l
                  ? function () {
                      return l.getSelection().rangeCount > 0;
                    }
                  : "selection" in l
                  ? function () {
                      return "None" != l.selection.type;
                    }
                  : function () {
                      return !1;
                    }),
                (T.onselectionstart = function (e) {
                  T.ispage || (T.selectiondrag = T.win.offset());
                }),
                (T.onselectionend = function (e) {
                  T.selectiondrag = !1;
                }),
                (T.onselectiondrag = function (e) {
                  T.selectiondrag &&
                    T.hasTextSelected() &&
                    T.debounced(
                      "selectionscroll",
                      function () {
                        L(e);
                      },
                      250
                    );
                });
            }
            if (
              (P.hasw3ctouch
                ? (T.css(T.ispage ? n("html") : T.win, {
                    "touch-action": "none",
                  }),
                  T.css(T.rail, { "touch-action": "none" }),
                  T.css(T.cursor, { "touch-action": "none" }),
                  T.bind(T.win, "pointerdown", T.ontouchstart),
                  T.bind(l, "pointerup", T.ontouchend),
                  T.delegate(l, "pointermove", T.ontouchmove))
                : P.hasmstouch
                ? (T.css(T.ispage ? n("html") : T.win, {
                    "-ms-touch-action": "none",
                  }),
                  T.css(T.rail, { "-ms-touch-action": "none" }),
                  T.css(T.cursor, { "-ms-touch-action": "none" }),
                  T.bind(T.win, "MSPointerDown", T.ontouchstart),
                  T.bind(l, "MSPointerUp", T.ontouchend),
                  T.delegate(l, "MSPointerMove", T.ontouchmove),
                  T.bind(T.cursor, "MSGestureHold", function (e) {
                    e.preventDefault();
                  }),
                  T.bind(T.cursor, "contextmenu", function (e) {
                    e.preventDefault();
                  }))
                : P.cantouch &&
                  (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0),
                  T.bind(l, "touchend", T.ontouchend, !1, !0),
                  T.bind(l, "touchcancel", T.ontouchend, !1, !0),
                  T.delegate(l, "touchmove", T.ontouchmove, !1, !0)),
              M.emulatetouch &&
                (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0),
                T.bind(l, "mouseup", T.ontouchend, !1, !0),
                T.bind(l, "mousemove", T.ontouchmove, !1, !0)),
              (M.cursordragontouch || (!P.cantouch && !M.emulatetouch)) &&
                (T.rail.css({ cursor: "default" }),
                T.railh && T.railh.css({ cursor: "default" }),
                T.jqbind(T.rail, "mouseenter", function () {
                  if (!T.ispage && !T.win.is(":visible")) return !1;
                  T.canshowonmouseevent && T.showCursor(), (T.rail.active = !0);
                }),
                T.jqbind(T.rail, "mouseleave", function () {
                  (T.rail.active = !1), T.rail.drag || T.hideCursor();
                }),
                M.sensitiverail &&
                  (T.bind(T.rail, "click", function (e) {
                    T.doRailClick(e, !1, !1);
                  }),
                  T.bind(T.rail, "dblclick", function (e) {
                    T.doRailClick(e, !0, !1);
                  }),
                  T.bind(T.cursor, "click", function (e) {
                    T.cancelEvent(e);
                  }),
                  T.bind(T.cursor, "dblclick", function (e) {
                    T.cancelEvent(e);
                  })),
                T.railh &&
                  (T.jqbind(T.railh, "mouseenter", function () {
                    if (!T.ispage && !T.win.is(":visible")) return !1;
                    T.canshowonmouseevent && T.showCursor(),
                      (T.rail.active = !0);
                  }),
                  T.jqbind(T.railh, "mouseleave", function () {
                    (T.rail.active = !1), T.rail.drag || T.hideCursor();
                  }),
                  M.sensitiverail &&
                    (T.bind(T.railh, "click", function (e) {
                      T.doRailClick(e, !1, !0);
                    }),
                    T.bind(T.railh, "dblclick", function (e) {
                      T.doRailClick(e, !0, !0);
                    }),
                    T.bind(T.cursorh, "click", function (e) {
                      T.cancelEvent(e);
                    }),
                    T.bind(T.cursorh, "dblclick", function (e) {
                      T.cancelEvent(e);
                    })))),
              M.cursordragontouch &&
                (this.istouchcapable || P.cantouch) &&
                (T.bind(T.cursor, "touchstart", T.ontouchstartCursor),
                T.bind(T.cursor, "touchmove", T.ontouchmoveCursor),
                T.bind(T.cursor, "touchend", T.ontouchendCursor),
                T.cursorh &&
                  T.bind(T.cursorh, "touchstart", function (e) {
                    T.ontouchstartCursor(e, !0);
                  }),
                T.cursorh &&
                  T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor),
                T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)),
              M.emulatetouch || P.isandroid || P.isios
                ? (T.bind(
                    P.hasmousecapture ? T.win : l,
                    "mouseup",
                    T.ontouchend
                  ),
                  T.onclick && T.bind(l, "click", T.onclick),
                  M.cursordragontouch
                    ? (T.bind(T.cursor, "mousedown", T.onmousedown),
                      T.bind(T.cursor, "mouseup", T.onmouseup),
                      T.cursorh &&
                        T.bind(T.cursorh, "mousedown", function (e) {
                          T.onmousedown(e, !0);
                        }),
                      T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup))
                    : (T.bind(T.rail, "mousedown", function (e) {
                        e.preventDefault();
                      }),
                      T.railh &&
                        T.bind(T.railh, "mousedown", function (e) {
                          e.preventDefault();
                        })))
                : (T.bind(
                    P.hasmousecapture ? T.win : l,
                    "mouseup",
                    T.onmouseup
                  ),
                  T.bind(l, "mousemove", T.onmousemove),
                  T.onclick && T.bind(l, "click", T.onclick),
                  T.bind(T.cursor, "mousedown", T.onmousedown),
                  T.bind(T.cursor, "mouseup", T.onmouseup),
                  T.railh &&
                    (T.bind(T.cursorh, "mousedown", function (e) {
                      T.onmousedown(e, !0);
                    }),
                    T.bind(T.cursorh, "mouseup", T.onmouseup)),
                  !T.ispage &&
                    M.enablescrollonselection &&
                    (T.bind(T.win[0], "mousedown", T.onselectionstart),
                    T.bind(l, "mouseup", T.onselectionend),
                    T.bind(T.cursor, "mouseup", T.onselectionend),
                    T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend),
                    T.bind(l, "mousemove", T.onselectiondrag)),
                  T.zoom &&
                    (T.jqbind(T.zoom, "mouseenter", function () {
                      T.canshowonmouseevent && T.showCursor(),
                        (T.rail.active = !0);
                    }),
                    T.jqbind(T.zoom, "mouseleave", function () {
                      (T.rail.active = !1), T.rail.drag || T.hideCursor();
                    }))),
              M.enablemousewheel &&
                (T.isiframe ||
                  T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel),
                T.mousewheel(T.rail, T.onmousewheel),
                T.railh && T.mousewheel(T.railh, T.onmousewheelhr)),
              T.ispage ||
                P.cantouch ||
                /HTML|^BODY/.test(T.win[0].nodeName) ||
                (T.win.attr("tabindex") || T.win.attr({ tabindex: ++r }),
                T.bind(T.win, "focus", function (e) {
                  (o = T.getTarget(e).id || T.getTarget(e) || !1),
                    (T.hasfocus = !0),
                    T.canshowonmouseevent && T.noticeCursor();
                }),
                T.bind(T.win, "blur", function (e) {
                  (o = !1), (T.hasfocus = !1);
                }),
                T.bind(T.win, "mouseenter", function (e) {
                  (t = T.getTarget(e).id || T.getTarget(e) || !1),
                    (T.hasmousefocus = !0),
                    T.canshowonmouseevent && T.noticeCursor();
                }),
                T.bind(T.win, "mouseleave", function (e) {
                  (t = !1),
                    (T.hasmousefocus = !1),
                    T.rail.drag || T.hideCursor();
                })),
              (T.onkeypress = function (e) {
                if (T.railslocked && 0 === T.page.maxh) return !0;
                e = e || a.event;
                var r = T.getTarget(e);
                if (
                  r &&
                  /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) &&
                  (!(r.getAttribute("type") || r.type || !1) ||
                    !/submit|button|cancel/i.tp)
                )
                  return !0;
                if (n(r).attr("contenteditable")) return !0;
                if (
                  T.hasfocus ||
                  (T.hasmousefocus && !o) ||
                  (T.ispage && !o && !t)
                ) {
                  var i = e.keyCode;
                  if (T.railslocked && 27 != i) return T.cancelEvent(e);
                  var s = e.ctrlKey || !1,
                    l = e.shiftKey || !1,
                    c = !1;
                  switch (i) {
                    case 38:
                    case 63233:
                      T.doScrollBy(72), (c = !0);
                      break;
                    case 40:
                    case 63235:
                      T.doScrollBy(-72), (c = !0);
                      break;
                    case 37:
                    case 63232:
                      T.railh &&
                        (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72),
                        (c = !0));
                      break;
                    case 39:
                    case 63234:
                      T.railh &&
                        (s
                          ? T.doScrollLeft(T.page.maxw)
                          : T.doScrollLeftBy(-72),
                        (c = !0));
                      break;
                    case 33:
                    case 63276:
                      T.doScrollBy(T.view.h), (c = !0);
                      break;
                    case 34:
                    case 63277:
                      T.doScrollBy(-T.view.h), (c = !0);
                      break;
                    case 36:
                    case 63273:
                      T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0),
                        (c = !0);
                      break;
                    case 35:
                    case 63275:
                      T.railh && s
                        ? T.doScrollPos(T.page.maxw, T.page.maxh)
                        : T.doScrollTo(T.page.maxh),
                        (c = !0);
                      break;
                    case 32:
                      M.spacebarenabled &&
                        (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h),
                        (c = !0));
                      break;
                    case 27:
                      T.zoomactive && (T.doZoom(), (c = !0));
                  }
                  if (c) return T.cancelEvent(e);
                }
              }),
              M.enablekeyboard &&
                T.bind(
                  l,
                  P.isopera && !P.isopera12 ? "keypress" : "keydown",
                  T.onkeypress
                ),
              T.bind(l, "keydown", function (e) {
                (e.ctrlKey || !1) && (T.wheelprevented = !0);
              }),
              T.bind(l, "keyup", function (e) {
                e.ctrlKey || !1 || (T.wheelprevented = !1);
              }),
              T.bind(a, "blur", function (e) {
                T.wheelprevented = !1;
              }),
              T.bind(a, "resize", T.onscreenresize),
              T.bind(a, "orientationchange", T.onscreenresize),
              T.bind(a, "load", T.lazyResize),
              P.ischrome && !T.ispage && !T.haswrapper)
            ) {
              var C = T.win.attr("style"),
                N = parseFloat(T.win.css("width")) + 1;
              T.win.css("width", N),
                T.synched("chromefix", function () {
                  T.win.attr("style", C);
                });
            }
            if (
              ((T.onAttributeChange = function (e) {
                T.lazyResize(T.isieold ? 250 : 30);
              }),
              M.enableobserver &&
                (T.isie11 ||
                  !1 === m ||
                  ((T.observerbody = new m(function (e) {
                    if (
                      (e.forEach(function (e) {
                        if ("attributes" == e.type)
                          return E.hasClass("modal-open") &&
                            E.hasClass("modal-dialog") &&
                            !n.contains(n(".modal-dialog")[0], T.doc[0])
                            ? T.hide()
                            : T.show();
                      }),
                      T.me.clientWidth != T.page.width ||
                        T.me.clientHeight != T.page.height)
                    )
                      return T.lazyResize(30);
                  })),
                  T.observerbody.observe(l.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"],
                  })),
                !T.ispage && !T.haswrapper))
            ) {
              var R = T.win[0];
              !1 !== m
                ? ((T.observer = new m(function (e) {
                    e.forEach(T.onAttributeChange);
                  })),
                  T.observer.observe(R, {
                    childList: !0,
                    characterData: !1,
                    attributes: !0,
                    subtree: !1,
                  }),
                  (T.observerremover = new m(function (e) {
                    e.forEach(function (e) {
                      if (e.removedNodes.length > 0)
                        for (var o in e.removedNodes)
                          if (T && e.removedNodes[o] === R) return T.remove();
                    });
                  })),
                  T.observerremover.observe(R.parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1,
                  }))
                : (T.bind(
                    R,
                    P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified",
                    T.onAttributeChange
                  ),
                  P.isie9 &&
                    R.attachEvent("onpropertychange", T.onAttributeChange),
                  T.bind(R, "DOMNodeRemoved", function (e) {
                    e.target === R && T.remove();
                  }));
            }
            !T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom),
              T.istextarea &&
                (T.bind(T.win, "keydown", T.lazyResize),
                T.bind(T.win, "mouseup", T.lazyResize)),
              T.lazyResize(30);
          }
          if ("IFRAME" == this.doc[0].nodeName) {
            var _ = function () {
              T.iframexd = !1;
              var o;
              try {
                (o =
                  "contentDocument" in this
                    ? this.contentDocument
                    : this.contentWindow._doc).domain;
              } catch (e) {
                (T.iframexd = !0), (o = !1);
              }
              if (T.iframexd)
                return (
                  "console" in a &&
                    console.log("NiceScroll error: policy restriced iframe"),
                  !0
                );
              if (
                ((T.forcescreen = !0),
                T.isiframe &&
                  ((T.iframe = {
                    doc: n(o),
                    html: T.doc.contents().find("html")[0],
                    body: T.doc.contents().find("body")[0],
                  }),
                  (T.getContentSize = function () {
                    return {
                      w: Math.max(
                        T.iframe.html.scrollWidth,
                        T.iframe.body.scrollWidth
                      ),
                      h: Math.max(
                        T.iframe.html.scrollHeight,
                        T.iframe.body.scrollHeight
                      ),
                    };
                  }),
                  (T.docscroll = n(T.iframe.body))),
                !P.isios && M.iframeautoresize && !T.isiframe)
              ) {
                T.win.scrollTop(0), T.doc.height("");
                var t = Math.max(
                  o.getElementsByTagName("html")[0].scrollHeight,
                  o.body.scrollHeight
                );
                T.doc.height(t);
              }
              T.lazyResize(30),
                T.css(n(T.iframe.body), e),
                P.isios &&
                  T.haswrapper &&
                  T.css(n(o.body), {
                    "-webkit-transform": "translate3d(0,0,0)",
                  }),
                "contentWindow" in this
                  ? T.bind(this.contentWindow, "scroll", T.onscroll)
                  : T.bind(o, "scroll", T.onscroll),
                M.enablemousewheel && T.mousewheel(o, T.onmousewheel),
                M.enablekeyboard &&
                  T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress),
                P.cantouch
                  ? (T.bind(o, "touchstart", T.ontouchstart),
                    T.bind(o, "touchmove", T.ontouchmove))
                  : M.emulatetouch &&
                    (T.bind(o, "mousedown", T.ontouchstart),
                    T.bind(o, "mousemove", function (e) {
                      return T.ontouchmove(e, !0);
                    }),
                    M.grabcursorenabled &&
                      P.cursorgrabvalue &&
                      T.css(n(o.body), { cursor: P.cursorgrabvalue })),
                T.bind(o, "mouseup", T.ontouchend),
                T.zoom &&
                  (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom),
                  T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom));
            };
            this.doc[0].readyState &&
              "complete" === this.doc[0].readyState &&
              setTimeout(function () {
                _.call(T.doc[0], !1);
              }, 500),
              T.bind(this.doc, "load", _);
          }
        }),
        (this.showCursor = function (e, o) {
          if (
            (T.cursortimeout &&
              (clearTimeout(T.cursortimeout), (T.cursortimeout = 0)),
            T.rail)
          ) {
            if (
              (T.autohidedom &&
                (T.autohidedom.stop().css({ opacity: M.cursoropacitymax }),
                (T.cursoractive = !0)),
              (T.rail.drag && 1 == T.rail.drag.pt) ||
                (void 0 !== e &&
                  !1 !== e &&
                  (T.scroll.y = (e / T.scrollratio.y) | 0),
                void 0 !== o && (T.scroll.x = (o / T.scrollratio.x) | 0)),
              T.cursor.css({ height: T.cursorheight, top: T.scroll.y }),
              T.cursorh)
            ) {
              var t = T.hasreversehr
                ? T.scrollvaluemaxw - T.scroll.x
                : T.scroll.x;
              T.cursorh.css({
                width: T.cursorwidth,
                left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t,
              }),
                (T.cursoractive = !0);
            }
            T.zoom && T.zoom.stop().css({ opacity: M.cursoropacitymax });
          }
        }),
        (this.hideCursor = function (e) {
          T.cursortimeout ||
            (T.rail &&
              T.autohidedom &&
              ((T.hasmousefocus && "leave" === M.autohidemode) ||
                (T.cursortimeout = setTimeout(function () {
                  (T.rail.active && T.showonmouseevent) ||
                    (T.autohidedom
                      .stop()
                      .animate({ opacity: M.cursoropacitymin }),
                    T.zoom &&
                      T.zoom.stop().animate({ opacity: M.cursoropacitymin }),
                    (T.cursoractive = !1)),
                    (T.cursortimeout = 0);
                }, e || M.hidecursordelay))));
        }),
        (this.noticeCursor = function (e, o, t) {
          T.showCursor(o, t), T.rail.active || T.hideCursor(e);
        }),
        (this.getContentSize = T.ispage
          ? function () {
              return {
                w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth),
                h: Math.max(
                  l.body.scrollHeight,
                  l.documentElement.scrollHeight
                ),
              };
            }
          : T.haswrapper
          ? function () {
              return { w: T.doc[0].offsetWidth, h: T.doc[0].offsetHeight };
            }
          : function () {
              return {
                w: T.docscroll[0].scrollWidth,
                h: T.docscroll[0].scrollHeight,
              };
            }),
        (this.onResize = function (e, o) {
          if (!T || !T.win) return !1;
          var t = T.page.maxh,
            r = T.page.maxw,
            i = T.view.h,
            s = T.view.w;
          if (
            ((T.view = {
              w: T.ispage ? T.win.width() : T.win[0].clientWidth,
              h: T.ispage ? T.win.height() : T.win[0].clientHeight,
            }),
            (T.page = o || T.getContentSize()),
            (T.page.maxh = Math.max(0, T.page.h - T.view.h)),
            (T.page.maxw = Math.max(0, T.page.w - T.view.w)),
            T.page.maxh == t &&
              T.page.maxw == r &&
              T.view.w == s &&
              T.view.h == i)
          ) {
            if (T.ispage) return T;
            var n = T.win.offset();
            if (T.lastposition) {
              var l = T.lastposition;
              if (l.top == n.top && l.left == n.left) return T;
            }
            T.lastposition = n;
          }
          return (
            0 === T.page.maxh
              ? (T.hideRail(),
                (T.scrollvaluemax = 0),
                (T.scroll.y = 0),
                (T.scrollratio.y = 0),
                (T.cursorheight = 0),
                T.setScrollTop(0),
                T.rail && (T.rail.scrollable = !1))
              : ((T.page.maxh -= M.railpadding.top + M.railpadding.bottom),
                (T.rail.scrollable = !0)),
            0 === T.page.maxw
              ? (T.hideRailHr(),
                (T.scrollvaluemaxw = 0),
                (T.scroll.x = 0),
                (T.scrollratio.x = 0),
                (T.cursorwidth = 0),
                T.setScrollLeft(0),
                T.railh && (T.railh.scrollable = !1))
              : ((T.page.maxw -= M.railpadding.left + M.railpadding.right),
                T.railh && (T.railh.scrollable = M.horizrailenabled)),
            (T.railslocked =
              T.locked || (0 === T.page.maxh && 0 === T.page.maxw)),
            T.railslocked
              ? (T.ispage || T.updateScrollBar(T.view), !1)
              : (T.hidden ||
                  (T.rail.visibility || T.showRail(),
                  T.railh && !T.railh.visibility && T.showRailHr()),
                T.istextarea &&
                  T.win.css("resize") &&
                  "none" != T.win.css("resize") &&
                  (T.view.h -= 20),
                (T.cursorheight = Math.min(
                  T.view.h,
                  Math.round(T.view.h * (T.view.h / T.page.h))
                )),
                (T.cursorheight = M.cursorfixedheight
                  ? M.cursorfixedheight
                  : Math.max(M.cursorminheight, T.cursorheight)),
                (T.cursorwidth = Math.min(
                  T.view.w,
                  Math.round(T.view.w * (T.view.w / T.page.w))
                )),
                (T.cursorwidth = M.cursorfixedheight
                  ? M.cursorfixedheight
                  : Math.max(M.cursorminheight, T.cursorwidth)),
                (T.scrollvaluemax =
                  T.view.h -
                  T.cursorheight -
                  (M.railpadding.top + M.railpadding.bottom)),
                T.hasborderbox ||
                  (T.scrollvaluemax -=
                    T.cursor[0].offsetHeight - T.cursor[0].clientHeight),
                T.railh &&
                  ((T.railh.width =
                    T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w),
                  (T.scrollvaluemaxw =
                    T.railh.width -
                    T.cursorwidth -
                    (M.railpadding.left + M.railpadding.right))),
                T.ispage || T.updateScrollBar(T.view),
                (T.scrollratio = {
                  x: T.page.maxw / T.scrollvaluemaxw,
                  y: T.page.maxh / T.scrollvaluemax,
                }),
                T.getScrollTop() > T.page.maxh
                  ? T.doScrollTop(T.page.maxh)
                  : ((T.scroll.y = (T.getScrollTop() / T.scrollratio.y) | 0),
                    (T.scroll.x = (T.getScrollLeft() / T.scrollratio.x) | 0),
                    T.cursoractive && T.noticeCursor()),
                T.scroll.y &&
                  0 === T.getScrollTop() &&
                  T.doScrollTo((T.scroll.y * T.scrollratio.y) | 0),
                T)
          );
        }),
        (this.resize = T.onResize);
      var O = 0;
      (this.onscreenresize = function (e) {
        clearTimeout(O);
        var o = !T.ispage && !T.haswrapper;
        o && T.hideRails(),
          (O = setTimeout(function () {
            T && (o && T.showRails(), T.resize()), (O = 0);
          }, 120));
      }),
        (this.lazyResize = function (e) {
          return (
            clearTimeout(O),
            (e = isNaN(e) ? 240 : e),
            (O = setTimeout(function () {
              T && T.resize(), (O = 0);
            }, e)),
            T
          );
        }),
        (this.jqbind = function (e, o, t) {
          T.events.push({ e: e, n: o, f: t, q: !0 }), n(e).on(o, t);
        }),
        (this.mousewheel = function (e, o, t) {
          var r = "jquery" in e ? e[0] : e;
          if ("onwheel" in l.createElement("div"))
            T._bind(r, "wheel", o, t || !1);
          else {
            var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
            S(r, i, o, t || !1),
              "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1);
          }
        });
      var Y = !1;
      if (P.haseventlistener) {
        try {
          var H = Object.defineProperty({}, "passive", {
            get: function () {
              Y = !0;
            },
          });
          a.addEventListener("test", null, H);
        } catch (e) {}
        (this.stopPropagation = function (e) {
          return (
            !!e && ((e = e.original ? e.original : e).stopPropagation(), !1)
          );
        }),
          (this.cancelEvent = function (e) {
            return (
              e.cancelable && e.preventDefault(),
              e.stopImmediatePropagation(),
              e.preventManipulation && e.preventManipulation(),
              !1
            );
          });
      } else
        (Event.prototype.preventDefault = function () {
          this.returnValue = !1;
        }),
          (Event.prototype.stopPropagation = function () {
            this.cancelBubble = !0;
          }),
          (a.constructor.prototype.addEventListener =
            l.constructor.prototype.addEventListener =
            Element.prototype.addEventListener =
              function (e, o, t) {
                this.attachEvent("on" + e, o);
              }),
          (a.constructor.prototype.removeEventListener =
            l.constructor.prototype.removeEventListener =
            Element.prototype.removeEventListener =
              function (e, o, t) {
                this.detachEvent("on" + e, o);
              }),
          (this.cancelEvent = function (e) {
            return (
              (e = e || a.event) &&
                ((e.cancelBubble = !0), (e.cancel = !0), (e.returnValue = !1)),
              !1
            );
          }),
          (this.stopPropagation = function (e) {
            return (e = e || a.event) && (e.cancelBubble = !0), !1;
          });
      (this.delegate = function (e, o, t, r, i) {
        var s = d[o] || !1;
        s ||
          ((s = {
            a: [],
            l: [],
            f: function (e) {
              for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--)
                if (!1 === (t = o[r].call(e.target, e))) return !1;
              return t;
            },
          }),
          T.bind(e, o, s.f, r, i),
          (d[o] = s)),
          T.ispage
            ? ((s.a = [T.id].concat(s.a)), (s.l = [t].concat(s.l)))
            : (s.a.push(T.id), s.l.push(t));
      }),
        (this.undelegate = function (e, o, t, r, i) {
          var s = d[o] || !1;
          if (s && s.l)
            for (var n = 0, l = s.l.length; n < l; n++)
              s.a[n] === T.id &&
                (s.a.splice(n),
                s.l.splice(n),
                0 === s.a.length && (T._unbind(e, o, s.l.f), (d[o] = null)));
        }),
        (this.bind = function (e, o, t, r, i) {
          var s = "jquery" in e ? e[0] : e;
          T._bind(s, o, t, r || !1, i || !1);
        }),
        (this._bind = function (e, o, t, r, i) {
          T.events.push({ e: e, n: o, f: t, b: r, q: !1 }),
            Y && i
              ? e.addEventListener(o, t, { passive: !1, capture: r })
              : e.addEventListener(o, t, r || !1);
        }),
        (this._unbind = function (e, o, t, r) {
          d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r);
        }),
        (this.unbindAll = function () {
          for (var e = 0; e < T.events.length; e++) {
            var o = T.events[e];
            o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b);
          }
        }),
        (this.showRails = function () {
          return T.showRail().showRailHr();
        }),
        (this.showRail = function () {
          return (
            0 === T.page.maxh ||
              (!T.ispage && "none" == T.win.css("display")) ||
              ((T.rail.visibility = !0), T.rail.css("display", "block")),
            T
          );
        }),
        (this.showRailHr = function () {
          return (
            T.railh &&
              (0 === T.page.maxw ||
                (!T.ispage && "none" == T.win.css("display")) ||
                ((T.railh.visibility = !0), T.railh.css("display", "block"))),
            T
          );
        }),
        (this.hideRails = function () {
          return T.hideRail().hideRailHr();
        }),
        (this.hideRail = function () {
          return (T.rail.visibility = !1), T.rail.css("display", "none"), T;
        }),
        (this.hideRailHr = function () {
          return (
            T.railh &&
              ((T.railh.visibility = !1), T.railh.css("display", "none")),
            T
          );
        }),
        (this.show = function () {
          return (T.hidden = !1), (T.railslocked = !1), T.showRails();
        }),
        (this.hide = function () {
          return (T.hidden = !0), (T.railslocked = !0), T.hideRails();
        }),
        (this.toggle = function () {
          return T.hidden ? T.show() : T.hide();
        }),
        (this.remove = function () {
          T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
          for (var e in T.delaylist) T.delaylist[e] && h(T.delaylist[e].h);
          T.doZoomOut(),
            T.unbindAll(),
            P.isie9 &&
              T.win[0].detachEvent("onpropertychange", T.onAttributeChange),
            !1 !== T.observer && T.observer.disconnect(),
            !1 !== T.observerremover && T.observerremover.disconnect(),
            !1 !== T.observerbody && T.observerbody.disconnect(),
            (T.events = null),
            T.cursor && T.cursor.remove(),
            T.cursorh && T.cursorh.remove(),
            T.rail && T.rail.remove(),
            T.railh && T.railh.remove(),
            T.zoom && T.zoom.remove();
          for (var o = 0; o < T.saved.css.length; o++) {
            var t = T.saved.css[o];
            t[0].css(t[1], void 0 === t[2] ? "" : t[2]);
          }
          (T.saved = !1), T.me.data("__nicescroll", "");
          var r = n.nicescroll;
          r.each(function (e) {
            if (this && this.id === T.id) {
              delete r[e];
              for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
              --r.length && delete r[r.length];
            }
          });
          for (var i in T) (T[i] = null), delete T[i];
          T = null;
        }),
        (this.scrollstart = function (e) {
          return (this.onscrollstart = e), T;
        }),
        (this.scrollend = function (e) {
          return (this.onscrollend = e), T;
        }),
        (this.scrollcancel = function (e) {
          return (this.onscrollcancel = e), T;
        }),
        (this.zoomin = function (e) {
          return (this.onzoomin = e), T;
        }),
        (this.zoomout = function (e) {
          return (this.onzoomout = e), T;
        }),
        (this.isScrollable = function (e) {
          var o = e.target ? e.target : e;
          if ("OPTION" == o.nodeName) return !0;
          for (
            ;
            o &&
            1 == o.nodeType &&
            o !== this.me[0] &&
            !/^BODY|HTML/.test(o.nodeName);

          ) {
            var t = n(o),
              r =
                t.css("overflowY") ||
                t.css("overflowX") ||
                t.css("overflow") ||
                "";
            if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
            o = !!o.parentNode && o.parentNode;
          }
          return !1;
        }),
        (this.getViewport = function (e) {
          for (
            var o = !(!e || !e.parentNode) && e.parentNode;
            o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);

          ) {
            var t = n(o);
            if (/fixed|absolute/.test(t.css("position"))) return t;
            var r =
              t.css("overflowY") ||
              t.css("overflowX") ||
              t.css("overflow") ||
              "";
            if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight)
              return t;
            if (t.getNiceScroll().length > 0) return t;
            o = !!o.parentNode && o.parentNode;
          }
          return !1;
        }),
        (this.triggerScrollStart = function (e, o, t, r, i) {
          if (T.onscrollstart) {
            var s = {
              type: "scrollstart",
              current: { x: e, y: o },
              request: { x: t, y: r },
              end: { x: T.newscrollx, y: T.newscrolly },
              speed: i,
            };
            T.onscrollstart.call(T, s);
          }
        }),
        (this.triggerScrollEnd = function () {
          if (T.onscrollend) {
            var e = T.getScrollLeft(),
              o = T.getScrollTop(),
              t = {
                type: "scrollend",
                current: { x: e, y: o },
                end: { x: e, y: o },
              };
            T.onscrollend.call(T, t);
          }
        });
      var B = 0,
        X = 0,
        D = 0,
        A = 1,
        q = !1;
      if (
        ((this.onmousewheel = function (e) {
          if (T.wheelprevented || T.locked) return !1;
          if (T.railslocked)
            return T.debounced("checkunlock", T.resize, 250), !1;
          if (T.rail.drag) return T.cancelEvent(e);
          if (
            ("auto" === M.oneaxismousemode &&
              0 !== e.deltaX &&
              (M.oneaxismousemode = !1),
            M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable)
          )
            return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
          var o = f(),
            t = !1;
          if (
            (M.preservenativescrolling &&
              T.checkarea + 600 < o &&
              ((T.nativescrollingarea = T.isScrollable(e)), (t = !0)),
            (T.checkarea = o),
            T.nativescrollingarea)
          )
            return !0;
          var r = k(e, !1, t);
          return r && (T.checkarea = 0), r;
        }),
        (this.onmousewheelhr = function (e) {
          if (!T.wheelprevented) {
            if (T.railslocked || !T.railh.scrollable) return !0;
            if (T.rail.drag) return T.cancelEvent(e);
            var o = f(),
              t = !1;
            return (
              M.preservenativescrolling &&
                T.checkarea + 600 < o &&
                ((T.nativescrollingarea = T.isScrollable(e)), (t = !0)),
              (T.checkarea = o),
              !!T.nativescrollingarea ||
                (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
            );
          }
        }),
        (this.stop = function () {
          return (
            T.cancelScroll(),
            T.scrollmon && T.scrollmon.stop(),
            (T.cursorfreezed = !1),
            (T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y))),
            T.noticeCursor(),
            T
          );
        }),
        (this.getTransitionSpeed = function (e) {
          return (80 + (e / 72) * M.scrollspeed) | 0;
        }),
        M.smoothscroll)
      )
        if (
          T.ishwscroll &&
          P.hastransition &&
          M.usetransition &&
          M.smoothscroll
        ) {
          var j = "";
          (this.resetTransition = function () {
            (j = ""), T.doc.css(P.prefixstyle + "transition-duration", "0ms");
          }),
            (this.prepareTransition = function (e, o) {
              var t = o ? e : T.getTransitionSpeed(e),
                r = t + "ms";
              return (
                j !== r &&
                  ((j = r),
                  T.doc.css(P.prefixstyle + "transition-duration", r)),
                t
              );
            }),
            (this.doScrollLeft = function (e, o) {
              var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
              T.doScrollPos(e, t, o);
            }),
            (this.doScrollTop = function (e, o) {
              var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
              T.doScrollPos(t, e, o);
            }),
            (this.cursorupdate = {
              running: !1,
              start: function () {
                var e = this;
                if (!e.running) {
                  e.running = !0;
                  var o = function () {
                    e.running && u(o),
                      T.showCursor(T.getScrollTop(), T.getScrollLeft()),
                      T.notifyScrollEvent(T.win[0]);
                  };
                  u(o);
                }
              },
              stop: function () {
                this.running = !1;
              },
            }),
            (this.doScrollPos = function (e, o, t) {
              var r = T.getScrollTop(),
                i = T.getScrollLeft();
              if (
                (((T.newscrolly - r) * (o - r) < 0 ||
                  (T.newscrollx - i) * (e - i) < 0) &&
                  T.cancelScroll(),
                M.bouncescroll
                  ? (o < 0
                      ? (o = (o / 2) | 0)
                      : o > T.page.maxh &&
                        (o = (T.page.maxh + (o - T.page.maxh) / 2) | 0),
                    e < 0
                      ? (e = (e / 2) | 0)
                      : e > T.page.maxw &&
                        (e = (T.page.maxw + (e - T.page.maxw) / 2) | 0))
                  : (o < 0 ? (o = 0) : o > T.page.maxh && (o = T.page.maxh),
                    e < 0 ? (e = 0) : e > T.page.maxw && (e = T.page.maxw)),
                T.scrollrunning && e == T.newscrollx && o == T.newscrolly)
              )
                return !1;
              (T.newscrolly = o), (T.newscrollx = e);
              var s = T.getScrollTop(),
                n = T.getScrollLeft(),
                l = {};
              (l.x = e - n), (l.y = o - s);
              var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
                c = T.prepareTransition(a);
              T.scrollrunning ||
                ((T.scrollrunning = !0),
                T.triggerScrollStart(n, s, e, o, c),
                T.cursorupdate.start()),
                (T.scrollendtrapped = !0),
                P.transitionend ||
                  (T.scrollendtrapped && clearTimeout(T.scrollendtrapped),
                  (T.scrollendtrapped = setTimeout(
                    T.onScrollTransitionEnd,
                    c
                  ))),
                T.setScrollTop(T.newscrolly),
                T.setScrollLeft(T.newscrollx);
            }),
            (this.cancelScroll = function () {
              if (!T.scrollendtrapped) return !0;
              var e = T.getScrollTop(),
                o = T.getScrollLeft();
              return (
                (T.scrollrunning = !1),
                P.transitionend || clearTimeout(P.transitionend),
                (T.scrollendtrapped = !1),
                T.resetTransition(),
                T.setScrollTop(e),
                T.railh && T.setScrollLeft(o),
                T.timerscroll &&
                  T.timerscroll.tm &&
                  clearInterval(T.timerscroll.tm),
                (T.timerscroll = !1),
                (T.cursorfreezed = !1),
                T.cursorupdate.stop(),
                T.showCursor(e, o),
                T
              );
            }),
            (this.onScrollTransitionEnd = function () {
              if (T.scrollendtrapped) {
                var e = T.getScrollTop(),
                  o = T.getScrollLeft();
                if (
                  (e < 0 ? (e = 0) : e > T.page.maxh && (e = T.page.maxh),
                  o < 0 ? (o = 0) : o > T.page.maxw && (o = T.page.maxw),
                  e != T.newscrolly || o != T.newscrollx)
                )
                  return T.doScrollPos(o, e, M.snapbackspeed);
                T.scrollrunning && T.triggerScrollEnd(),
                  (T.scrollrunning = !1),
                  (T.scrollendtrapped = !1),
                  T.resetTransition(),
                  (T.timerscroll = !1),
                  T.setScrollTop(e),
                  T.railh && T.setScrollLeft(o),
                  T.cursorupdate.stop(),
                  T.noticeCursor(!1, e, o),
                  (T.cursorfreezed = !1);
              }
            });
        } else
          (this.doScrollLeft = function (e, o) {
            var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
            T.doScrollPos(e, t, o);
          }),
            (this.doScrollTop = function (e, o) {
              var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
              T.doScrollPos(t, e, o);
            }),
            (this.doScrollPos = function (e, o, t) {
              var r = T.getScrollTop(),
                i = T.getScrollLeft();
              ((T.newscrolly - r) * (o - r) < 0 ||
                (T.newscrollx - i) * (e - i) < 0) &&
                T.cancelScroll();
              var s = !1;
              if (
                ((T.bouncescroll && T.rail.visibility) ||
                  (o < 0
                    ? ((o = 0), (s = !0))
                    : o > T.page.maxh && ((o = T.page.maxh), (s = !0))),
                (T.bouncescroll && T.railh.visibility) ||
                  (e < 0
                    ? ((e = 0), (s = !0))
                    : e > T.page.maxw && ((e = T.page.maxw), (s = !0))),
                T.scrollrunning && T.newscrolly === o && T.newscrollx === e)
              )
                return !0;
              (T.newscrolly = o),
                (T.newscrollx = e),
                (T.dst = {}),
                (T.dst.x = e - i),
                (T.dst.y = o - r),
                (T.dst.px = i),
                (T.dst.py = r);
              var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y),
                l = T.getTransitionSpeed(n);
              T.bzscroll = {};
              var a = s ? 1 : 0.58;
              (T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1)),
                (T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1));
              f();
              var c = function () {
                if (T.scrollrunning) {
                  var e = T.bzscroll.y.getPos();
                  T.setScrollLeft(T.bzscroll.x.getNow()),
                    T.setScrollTop(T.bzscroll.y.getNow()),
                    e <= 1
                      ? (T.timer = u(c))
                      : ((T.scrollrunning = !1),
                        (T.timer = 0),
                        T.triggerScrollEnd());
                }
              };
              T.scrollrunning ||
                (T.triggerScrollStart(i, r, e, o, l),
                (T.scrollrunning = !0),
                (T.timer = u(c)));
            }),
            (this.cancelScroll = function () {
              return (
                T.timer && h(T.timer),
                (T.timer = 0),
                (T.bzscroll = !1),
                (T.scrollrunning = !1),
                T
              );
            });
      else
        (this.doScrollLeft = function (e, o) {
          var t = T.getScrollTop();
          T.doScrollPos(e, t, o);
        }),
          (this.doScrollTop = function (e, o) {
            var t = T.getScrollLeft();
            T.doScrollPos(t, e, o);
          }),
          (this.doScrollPos = function (e, o, t) {
            var r = e > T.page.maxw ? T.page.maxw : e;
            r < 0 && (r = 0);
            var i = o > T.page.maxh ? T.page.maxh : o;
            i < 0 && (i = 0),
              T.synched("scroll", function () {
                T.setScrollTop(i), T.setScrollLeft(r);
              });
          }),
          (this.cancelScroll = function () {});
      (this.doScrollBy = function (e, o) {
        z(0, e);
      }),
        (this.doScrollLeftBy = function (e, o) {
          z(e, 0);
        }),
        (this.doScrollTo = function (e, o) {
          var t = o ? Math.round(e * T.scrollratio.y) : e;
          t < 0 ? (t = 0) : t > T.page.maxh && (t = T.page.maxh),
            (T.cursorfreezed = !1),
            T.doScrollTop(e);
        }),
        (this.checkContentSize = function () {
          var e = T.getContentSize();
          (e.h == T.page.h && e.w == T.page.w) || T.resize(!1, e);
        }),
        (T.onscroll = function (e) {
          T.rail.drag ||
            T.cursorfreezed ||
            T.synched("scroll", function () {
              (T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y)),
                T.railh &&
                  (T.scroll.x = Math.round(
                    T.getScrollLeft() / T.scrollratio.x
                  )),
                T.noticeCursor();
            });
        }),
        T.bind(T.docscroll, "scroll", T.onscroll),
        (this.doZoomIn = function (e) {
          if (!T.zoomactive) {
            (T.zoomactive = !0), (T.zoomrestore = { style: {} });
            var o = [
                "position",
                "top",
                "left",
                "zIndex",
                "backgroundColor",
                "marginTop",
                "marginBottom",
                "marginLeft",
                "marginRight",
              ],
              t = T.win[0].style;
            for (var r in o) {
              var i = o[r];
              T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : "";
            }
            (T.zoomrestore.style.width = T.win.css("width")),
              (T.zoomrestore.style.height = T.win.css("height")),
              (T.zoomrestore.padding = {
                w: T.win.outerWidth() - T.win.width(),
                h: T.win.outerHeight() - T.win.height(),
              }),
              P.isios4 &&
                ((T.zoomrestore.scrollTop = c.scrollTop()), c.scrollTop(0)),
              T.win.css({
                position: P.isios4 ? "absolute" : "fixed",
                top: 0,
                left: 0,
                zIndex: s + 100,
                margin: 0,
              });
            var n = T.win.css("backgroundColor");
            return (
              ("" === n ||
                /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) &&
                T.win.css("backgroundColor", "#fff"),
              T.rail.css({ zIndex: s + 101 }),
              T.zoom.css({ zIndex: s + 102 }),
              T.zoom.css("backgroundPosition", "0 -18px"),
              T.resizeZoom(),
              T.onzoomin && T.onzoomin.call(T),
              T.cancelEvent(e)
            );
          }
        }),
        (this.doZoomOut = function (e) {
          if (T.zoomactive)
            return (
              (T.zoomactive = !1),
              T.win.css("margin", ""),
              T.win.css(T.zoomrestore.style),
              P.isios4 && c.scrollTop(T.zoomrestore.scrollTop),
              T.rail.css({ "z-index": T.zindex }),
              T.zoom.css({ "z-index": T.zindex }),
              (T.zoomrestore = !1),
              T.zoom.css("backgroundPosition", "0 0"),
              T.onResize(),
              T.onzoomout && T.onzoomout.call(T),
              T.cancelEvent(e)
            );
        }),
        (this.doZoom = function (e) {
          return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e);
        }),
        (this.resizeZoom = function () {
          if (T.zoomactive) {
            var e = T.getScrollTop();
            T.win.css({
              width: c.width() - T.zoomrestore.padding.w + "px",
              height: c.height() - T.zoomrestore.padding.h + "px",
            }),
              T.onResize(),
              T.setScrollTop(Math.min(T.page.maxh, e));
          }
        }),
        this.init(),
        n.nicescroll.push(this);
    },
    y = function (e) {
      var o = this;
      (this.nc = e),
        (this.lastx = 0),
        (this.lasty = 0),
        (this.speedx = 0),
        (this.speedy = 0),
        (this.lasttime = 0),
        (this.steptime = 0),
        (this.snapx = !1),
        (this.snapy = !1),
        (this.demulx = 0),
        (this.demuly = 0),
        (this.lastscrollx = -1),
        (this.lastscrolly = -1),
        (this.chkx = 0),
        (this.chky = 0),
        (this.timer = 0),
        (this.reset = function (e, t) {
          o.stop(),
            (o.steptime = 0),
            (o.lasttime = f()),
            (o.speedx = 0),
            (o.speedy = 0),
            (o.lastx = e),
            (o.lasty = t),
            (o.lastscrollx = -1),
            (o.lastscrolly = -1);
        }),
        (this.update = function (e, t) {
          var r = f();
          (o.steptime = r - o.lasttime), (o.lasttime = r);
          var i = t - o.lasty,
            s = e - o.lastx,
            n = o.nc.getScrollTop() + i,
            l = o.nc.getScrollLeft() + s;
          (o.snapx = l < 0 || l > o.nc.page.maxw),
            (o.snapy = n < 0 || n > o.nc.page.maxh),
            (o.speedx = s),
            (o.speedy = i),
            (o.lastx = e),
            (o.lasty = t);
        }),
        (this.stop = function () {
          o.nc.unsynched("domomentum2d"),
            o.timer && clearTimeout(o.timer),
            (o.timer = 0),
            (o.lastscrollx = -1),
            (o.lastscrolly = -1);
        }),
        (this.doSnapy = function (e, t) {
          var r = !1;
          t < 0
            ? ((t = 0), (r = !0))
            : t > o.nc.page.maxh && ((t = o.nc.page.maxh), (r = !0)),
            e < 0
              ? ((e = 0), (r = !0))
              : e > o.nc.page.maxw && ((e = o.nc.page.maxw), (r = !0)),
            r
              ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed)
              : o.nc.triggerScrollEnd();
        }),
        (this.doMomentum = function (e) {
          var t = f(),
            r = e ? t + e : o.lasttime,
            i = o.nc.getScrollLeft(),
            s = o.nc.getScrollTop(),
            n = o.nc.page.maxh,
            l = o.nc.page.maxw;
          (o.speedx = l > 0 ? Math.min(60, o.speedx) : 0),
            (o.speedy = n > 0 ? Math.min(60, o.speedy) : 0);
          var a = r && t - r <= 60;
          (s < 0 || s > n || i < 0 || i > l) && (a = !1);
          var c = !(!o.speedy || !a) && o.speedy,
            d = !(!o.speedx || !a) && o.speedx;
          if (c || d) {
            var u = Math.max(16, o.steptime);
            if (u > 50) {
              var h = u / 50;
              (o.speedx *= h), (o.speedy *= h), (u = 50);
            }
            (o.demulxy = 0),
              (o.lastscrollx = o.nc.getScrollLeft()),
              (o.chkx = o.lastscrollx),
              (o.lastscrolly = o.nc.getScrollTop()),
              (o.chky = o.lastscrolly);
            var p = o.lastscrollx,
              m = o.lastscrolly,
              g = function () {
                var e = f() - t > 600 ? 0.04 : 0.02;
                o.speedx &&
                  ((p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy))),
                  (o.lastscrollx = p),
                  (p < 0 || p > l) && (e = 0.1)),
                  o.speedy &&
                    ((m = Math.floor(
                      o.lastscrolly - o.speedy * (1 - o.demulxy)
                    )),
                    (o.lastscrolly = m),
                    (m < 0 || m > n) && (e = 0.1)),
                  (o.demulxy = Math.min(1, o.demulxy + e)),
                  o.nc.synched("domomentum2d", function () {
                    if (o.speedx) {
                      o.nc.getScrollLeft();
                      (o.chkx = p), o.nc.setScrollLeft(p);
                    }
                    if (o.speedy) {
                      o.nc.getScrollTop();
                      (o.chky = m), o.nc.setScrollTop(m);
                    }
                    o.timer || (o.nc.hideCursor(), o.doSnapy(p, m));
                  }),
                  o.demulxy < 1
                    ? (o.timer = setTimeout(g, u))
                    : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m));
              };
            g();
          } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop());
        });
    },
    x = e.fn.scrollTop;
  (e.cssHooks.pageYOffset = {
    get: function (e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollTop() : x.call(e);
    },
    set: function (e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return (
        t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o), this
      );
    },
  }),
    (e.fn.scrollTop = function (e) {
      if (void 0 === e) {
        var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
        return o && o.ishwscroll ? o.getScrollTop() : x.call(this);
      }
      return this.each(function () {
        var o = n.data(this, "__nicescroll") || !1;
        o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e);
      });
    });
  var S = e.fn.scrollLeft;
  (n.cssHooks.pageXOffset = {
    get: function (e, o, t) {
      var r = n.data(e, "__nicescroll") || !1;
      return r && r.ishwscroll ? r.getScrollLeft() : S.call(e);
    },
    set: function (e, o) {
      var t = n.data(e, "__nicescroll") || !1;
      return (
        t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o), this
      );
    },
  }),
    (e.fn.scrollLeft = function (e) {
      if (void 0 === e) {
        var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
        return o && o.ishwscroll ? o.getScrollLeft() : S.call(this);
      }
      return this.each(function () {
        var o = n.data(this, "__nicescroll") || !1;
        o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e);
      });
    });
  var z = function (e) {
    var o = this;
    if (
      ((this.length = 0),
      (this.name = "nicescrollarray"),
      (this.each = function (e) {
        return n.each(o, e), o;
      }),
      (this.push = function (e) {
        (o[o.length] = e), o.length++;
      }),
      (this.eq = function (e) {
        return o[e];
      }),
      e)
    )
      for (var t = 0; t < e.length; t++) {
        var r = n.data(e[t], "__nicescroll") || !1;
        r && ((this[this.length] = r), this.length++);
      }
    return this;
  };
  !(function (e, o, t) {
    for (var r = 0, i = o.length; r < i; r++) t(e, o[r]);
  })(
    z.prototype,
    [
      "show",
      "hide",
      "toggle",
      "onResize",
      "resize",
      "remove",
      "stop",
      "doScrollPos",
    ],
    function (e, o) {
      e[o] = function () {
        var e = arguments;
        return this.each(function () {
          this[o].apply(this, e);
        });
      };
    }
  ),
    (e.fn.getNiceScroll = function (e) {
      return void 0 === e
        ? new z(this)
        : (this[e] && n.data(this[e], "__nicescroll")) || !1;
    }),
    ((e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
      return void 0 !== n.data(e, "__nicescroll");
    }),
    (n.fn.niceScroll = function (e, o) {
      void 0 !== o ||
        "object" != typeof e ||
        "jquery" in e ||
        ((o = e), (e = !1));
      var t = new z();
      return (
        this.each(function () {
          var r = n(this),
            i = n.extend({}, o);
          if (e) {
            var s = n(e);
            (i.doc = s.length > 1 ? n(e, r) : s), (i.win = r);
          }
          !("doc" in i) || "win" in i || (i.win = r);
          var l = r.data("__nicescroll") || !1;
          l ||
            ((i.doc = i.doc || r),
            (l = new b(i, r)),
            r.data("__nicescroll", l)),
            t.push(l);
        }),
        1 === t.length ? t[0] : t
      );
    }),
    (a.NiceScroll = {
      getjQuery: function () {
        return e;
      },
    }),
    n.nicescroll || ((n.nicescroll = new z()), (n.nicescroll.options = g));
});

/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */

(function ($) {
  $.fn.shuffleLetters = function (prop) {
    var options = $.extend(
      {
        step: 8, // How many times should the letters be changed
        fps: 25, // Frames Per Second
        text: "", // Use this text instead of the contents
        callback: function () {}, // Run once the animation is complete
      },
      prop
    );

    return this.each(function () {
      var el = $(this),
        str = "";

      // Preventing parallel animations using a flag;

      if (el.data("animated")) {
        return true;
      }

      el.data("animated", true);

      if (options.text) {
        str = options.text.split("");
      } else {
        str = el.text().split("");
      }

      // The types array holds the type for each character;
      // Letters holds the positions of non-space characters;

      var types = [],
        letters = [];

      // Looping through all the chars of the string

      for (var i = 0; i < str.length; i++) {
        var ch = str[i];

        if (ch == " ") {
          types[i] = "space";
          continue;
        } else if (/[a-z]/.test(ch)) {
          types[i] = "lowerLetter";
        } else if (/[A-Z]/.test(ch)) {
          types[i] = "upperLetter";
        } else {
          types[i] = "symbol";
        }

        letters.push(i);
      }

      el.html("");

      // Self executing named function expression:

      (function shuffle(start) {
        // This code is run options.fps times per second
        // and updates the contents of the page element

        var i,
          len = letters.length,
          strCopy = str.slice(0); // Fresh copy of the string

        if (start > len) {
          // The animation is complete. Updating the
          // flag and triggering the callback;

          el.data("animated", false);
          options.callback(el);
          return;
        }

        // All the work gets done here
        for (i = Math.max(start, 0); i < len; i++) {
          // The start argument and options.step limit
          // the characters we will be working on at once

          if (i < start + options.step) {
            // Generate a random character at thsi position
            strCopy[letters[i]] = randomChar(types[letters[i]]);
          } else {
            strCopy[letters[i]] = "";
          }
        }

        el.text(strCopy.join(""));

        setTimeout(function () {
          shuffle(start + 1);
        }, 1000 / options.fps);
      })(-options.step);
    });
  };

  function randomChar(type) {
    var pool = "";

    if (type == "lowerLetter") {
      pool = "abcdefghijklmnopqrstuvwxyz0123456789";
    } else if (type == "upperLetter") {
      pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (type == "symbol") {
      pool = ",.?/\\(^)![]{}*&^%$#'\"";
    }

    var arr = pool.split("");
    return arr[Math.floor(Math.random() * arr.length)];
  }
})(jQuery);

/* jQuery appear js */
(function ($) {
  var selectors = [];
  var check_binded = false;
  var check_lock = false;
  var defaults = { interval: 250, force_process: false };
  var $window = $(window);
  var $prior_appeared;
  function process() {
    check_lock = false;
    for (var index in selectors) {
      var $appeared = $(selectors[index]).filter(function () {
        return $(this).is(":appeared");
      });
      $appeared.trigger("appear", [$appeared]);
      if ($prior_appeared) {
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger("disappear", [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }
  $.expr[":"]["appeared"] = function (element) {
    var $element = $(element);
    if (!$element.is(":visible")) {
      return false;
    }
    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;
    if (
      top + $element.height() >= window_top &&
      top - ($element.data("appear-top-offset") || 0) <=
        window_top + $window.height() &&
      left + $element.width() >= window_left &&
      left - ($element.data("appear-left-offset") || 0) <=
        window_left + $window.width()
    ) {
      return true;
    } else {
      return false;
    }
  };
  $.fn.extend({
    appear: function (options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function () {
          if (check_lock) {
            return;
          }
          check_lock = true;
          setTimeout(process, opts.interval);
        };
        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }
      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    },
  });
  $.extend({
    force_appear: function () {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    },
  });
})(jQuery);

/*
 * YoutubeBackground - A wrapper for the Youtube API - Great for fullscreen background videos or just regular videos.
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Version:  1.0.5
 *
 */

// Chain of Responsibility pattern. Creates base class that can be overridden.
if (typeof Object.create !== "function") {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}

(function ($, window, document) {
  var loadAPI = function loadAPI(callback) {
      // Load Youtube API
      var tag = document.createElement("script"),
        head = document.getElementsByTagName("head")[0];

      if (window.location.origin == "file://") {
        tag.src = "http://www.youtube.com/iframe_api";
      } else {
        tag.src = "//www.youtube.com/iframe_api";
      }

      head.appendChild(tag);

      // Clean up Tags.
      head = null;
      tag = null;

      iframeIsReady(callback);
    },
    iframeIsReady = function iframeIsReady(callback) {
      // Listen for Gobal YT player callback
      if (
        typeof YT === "undefined" &&
        typeof window.loadingPlayer === "undefined"
      ) {
        // Prevents Ready Event from being called twice
        window.loadingPlayer = true;

        // Creates deferred so, other players know when to wait.
        window.dfd = $.Deferred();
        window.onYouTubeIframeAPIReady = function () {
          window.onYouTubeIframeAPIReady = null;
          window.dfd.resolve("done");
          callback();
        };
      } else if (typeof YT === "object") {
        callback();
      } else {
        window.dfd.done(function (name) {
          callback();
        });
      }
    };

  // YTPlayer Object
  YTPlayer = {
    player: null,

    // Defaults
    defaults: {
      ratio: 16 / 9,
      videoId: "LSmgKRx5pBo",
      mute: true,
      repeat: true,
      width: $(window).width(),
      playButtonClass: "YTPlayer-play",
      pauseButtonClass: "YTPlayer-pause",
      muteButtonClass: "YTPlayer-mute",
      volumeUpClass: "YTPlayer-volume-up",
      volumeDownClass: "YTPlayer-volume-down",
      start: 0,
      pauseOnScroll: false,
      fitToBackground: true,
      playerVars: {
        iv_load_policy: 3,
        modestbranding: 1,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        wmode: "opaque",
        branding: 0,
        autohide: 0,
      },
      events: null,
    },

    /**
     * @function init
     * Intializes YTPlayer object
     */
    init: function init(node, userOptions) {
      var self = this;

      self.userOptions = userOptions;

      (self.$body = $("body")),
        (self.$node = $(node)),
        (self.$window = $(window));

      // Setup event defaults with the reference to this
      self.defaults.events = {
        onReady: function (e) {
          self.onPlayerReady(e);

          // setup up pause on scroll
          if (self.options.pauseOnScroll) {
            self.pauseOnScroll();
          }

          // Callback for when finished
          if (typeof self.options.callback == "function") {
            self.options.callback.call(this);
          }
        },
        onStateChange: function (e) {
          if (e.data === 1) {
            self.$node.find("img").fadeOut(400);
            self.$node.addClass("loaded");
          } else if (e.data === 0 && self.options.repeat) {
            // video ended and repeat option is set true
            self.player.seekTo(self.options.start);
          }
        },
      };

      self.options = $.extend(true, {}, self.defaults, self.userOptions);
      self.options.height = Math.ceil(self.options.width / self.options.ratio);
      self.ID = new Date().getTime();
      self.holderID = "YTPlayer-ID-" + self.ID;

      if (self.options.fitToBackground) {
        self.createBackgroundVideo();
      } else {
        self.createContainerVideo();
      }
      // Listen for Resize Event
      self.$window.on("resize.YTplayer" + self.ID, function () {
        self.resize(self);
      });

      loadAPI(self.onYouTubeIframeAPIReady.bind(self));

      self.resize(self);

      return self;
    },

    /**
     * @function pauseOnScroll
     * Adds window events to pause video on scroll.
     */
    pauseOnScroll: function pauseOnScroll() {
      var self = this;
      self.$window.on("scroll.YTplayer" + self.ID, function () {
        var state = self.player.getPlayerState();
        if (state === 1) {
          self.player.pauseVideo();
        }
      });
      self.$window.scrollStopped(function () {
        var state = self.player.getPlayerState();
        if (state === 2) {
          self.player.playVideo();
        }
      });
    },
    /**
     * @function createContainerVideo
     * Adds HTML for video in a container
     */
    createContainerVideo: function createContainerVideo() {
      var self = this;

      /*jshint multistr: true */
      var $YTPlayerString = $(
        '<div id="ytplayer-container' +
          self.ID +
          '" >\
                                    <div id="' +
          self.holderID +
          '" class="ytplayer-player-inline"></div> \
                                    </div> \
                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>'
      );

      self.$node.append($YTPlayerString);
      self.$YTPlayerString = $YTPlayerString;
      $YTPlayerString = null;
    },

    /**
     * @function createBackgroundVideo
     * Adds HTML for video background
     */
    createBackgroundVideo: function createBackgroundVideo() {
      /*jshint multistr: true */
      var self = this,
        $YTPlayerString = $(
          '<div id="ytplayer-container' +
            self.ID +
            '" class="ytplayer-container background">\
                                    <div id="' +
            self.holderID +
            '" class="ytplayer-player"></div>\
                                    </div>\
                                    <div id="ytplayer-shield" class="ytplayer-shield"></div>'
        );

      self.$node.append($YTPlayerString);
      self.$YTPlayerString = $YTPlayerString;
      $YTPlayerString = null;
    },

    /**
     * @function resize
     * Resize event to change video size
     */
    resize: function resize(self) {
      //var self = this;
      var container = $(window);

      if (!self.options.fitToBackground) {
        container = self.$node;
      }

      var width = container.width(),
        pWidth, // player width, to be defined
        height = container.height(),
        pHeight, // player height, tbd
        $YTPlayerPlayer = $("#" + self.holderID);

      // when screen aspect ratio differs from video, video must center and underlay one dimension
      if (width / self.options.ratio < height) {
        pWidth = Math.ceil(height * self.options.ratio); // get new player width
        $YTPlayerPlayer
          .width(pWidth)
          .height(height)
          .css({
            left: (width - pWidth) / 2,
            top: 0,
          }); // player width is greater, offset left; reset top
      } else {
        // new video width < window width (gap to right)
        pHeight = Math.ceil(width / self.options.ratio); // get new player height
        $YTPlayerPlayer
          .width(width)
          .height(pHeight)
          .css({
            left: 0,
            top: (height - pHeight) / 2,
          }); // player height is greater, offset top; reset left
      }

      $YTPlayerPlayer = null;
      container = null;
    },

    /**
     * @function onYouTubeIframeAPIReady
     * @ params {object} YTPlayer object for access to options
     * Youtube API calls this function when the player is ready.
     */
    onYouTubeIframeAPIReady: function onYouTubeIframeAPIReady() {
      var self = this;
      self.player = new window.YT.Player(self.holderID, self.options);
    },

    /**
     * @function onPlayerReady
     * @ params {event} window event from youtube player
     */
    onPlayerReady: function onPlayerReady(e) {
      if (this.options.mute) {
        e.target.mute();
      }
    },

    /**
     * @function getPlayer
     * returns youtube player
     */
    getPlayer: function getPlayer() {
      return this.player;
    },

    /**
     * @function destroy
     * destroys all!
     */
    destroy: function destroy() {
      var self = this;

      self.$node
        .removeData("yt-init")
        .removeData("ytPlayer")
        .removeClass("loaded");

      self.$YTPlayerString.remove();

      $(window).off("resize.YTplayer" + self.ID);
      $(window).off("scroll.YTplayer" + self.ID);
      self.$body = null;
      self.$node = null;
      self.$YTPlayerString = null;
      self.player.destroy();
      self.player = null;
    },
  };

  // Scroll Stopped event.
  $.fn.scrollStopped = function (callback) {
    var $this = $(this),
      self = this;
    $this.scroll(function () {
      if ($this.data("scrollTimeout")) {
        clearTimeout($this.data("scrollTimeout"));
      }
      $this.data("scrollTimeout", setTimeout(callback, 250, self));
    });
  };

  // Create plugin
  $.fn.YTPlayer = function (options) {
    return this.each(function () {
      var el = this;

      $(el).data("yt-init", true);
      var player = Object.create(YTPlayer);
      player.init(el, options);
      $.data(el, "ytPlayer", player);
    });
  };
})(jQuery, window, document);

/*! owl.carousel2.thumbs - v0.1.8 | (c) 2016 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
!(function (a, b, c, d) {
  "use strict";
  var e = function (b) {
    (this.owl = b),
      (this._thumbcontent = []),
      (this._identifier = 0),
      (this.owl_currentitem = this.owl.options.startPosition),
      (this.$element = this.owl.$element),
      (this._handlers = {
        "prepared.owl.carousel": a.proxy(function (b) {
          if (
            !b.namespace ||
            !this.owl.options.thumbs ||
            this.owl.options.thumbImage ||
            this.owl.options.thumbsPrerendered ||
            this.owl.options.thumbImage
          ) {
            if (
              b.namespace &&
              this.owl.options.thumbs &&
              this.owl.options.thumbImage
            ) {
              var c = a(b.content).find("img");
              this._thumbcontent.push(c);
            }
          } else a(b.content).find("[data-thumb]").attr("data-thumb") !== d && this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"));
        }, this),
        "initialized.owl.carousel": a.proxy(function (a) {
          a.namespace &&
            this.owl.options.thumbs &&
            (this.render(),
            this.listen(),
            (this._identifier = this.owl.$element.data("slider-id")),
            this.setActive());
        }, this),
        "changed.owl.carousel": a.proxy(function (a) {
          a.namespace &&
            "position" === a.property.name &&
            this.owl.options.thumbs &&
            ((this._identifier = this.owl.$element.data("slider-id")),
            this.setActive());
        }, this),
      }),
      (this.owl.options = a.extend({}, e.Defaults, this.owl.options)),
      this.owl.$element.on(this._handlers);
  };
  (e.Defaults = {
    thumbs: !0,
    thumbImage: !1,
    thumbContainerClass: "owl-thumbs",
    thumbItemClass: "owl-thumb-item",
    moveThumbsInside: !1,
  }),
    (e.prototype.listen = function () {
      var b = this.owl.options;
      b.thumbsPrerendered &&
        (this._thumbcontent._thumbcontainer = a("." + b.thumbContainerClass)),
        a(this._thumbcontent._thumbcontainer).on(
          "click",
          this._thumbcontent._thumbcontainer.children(),
          a.proxy(function (c) {
            this._identifier = a(c.target)
              .closest("." + b.thumbContainerClass)
              .data("slider-id");
            var d = a(c.target).parent().is(this._thumbcontent._thumbcontainer)
              ? a(c.target).index()
              : a(c.target)
                  .closest("." + b.thumbItemClass)
                  .index();
            b.thumbsPrerendered
              ? a("[data-slider-id=" + this._identifier + "]").trigger(
                  "to.owl.carousel",
                  [d, b.dotsSpeed, !0]
                )
              : this.owl.to(d, b.dotsSpeed),
              c.preventDefault();
          }, this)
        );
    }),
    (e.prototype.render = function () {
      var b = this.owl.options;
      b.thumbsPrerendered
        ? ((this._thumbcontent._thumbcontainer = a(
            "." + b.thumbContainerClass
          )),
          b.moveThumbsInside &&
            this._thumbcontent._thumbcontainer.appendTo(this.$element))
        : (this._thumbcontent._thumbcontainer = a("<div>")
            .addClass(b.thumbContainerClass)
            .appendTo(this.$element));
      var c;
      if (b.thumbImage)
        for (c = 0; c < this._thumbcontent.length; ++c)
          this._thumbcontent._thumbcontainer.append(
            "<button class=" +
              b.thumbItemClass +
              '><img src="' +
              this._thumbcontent[c].attr("src") +
              '" alt="' +
              this._thumbcontent[c].attr("alt") +
              '" /></button>'
          );
      else
        for (c = 0; c < this._thumbcontent.length; ++c)
          this._thumbcontent._thumbcontainer.append(
            "<button class=" +
              b.thumbItemClass +
              ">" +
              this._thumbcontent[c] +
              "</button>"
          );
    }),
    (e.prototype.setActive = function () {
      (this.owl_currentitem = this.owl._current - this.owl._clones.length / 2),
        this.owl_currentitem === this.owl._items.length &&
          (this.owl_currentitem = 0);
      var b = this.owl.options,
        c = b.thumbsPrerendered
          ? a(
              "." +
                b.thumbContainerClass +
                '[data-slider-id="' +
                this._identifier +
                '"]'
            )
          : this._thumbcontent._thumbcontainer;
      c.children().filter(".active").removeClass("active"),
        c.children().eq(this.owl_currentitem).addClass("active");
    }),
    (e.prototype.destroy = function () {
      var a, b;
      for (a in this._handlers) this.owl.$element.off(a, this._handlers[a]);
      for (b in Object.getOwnPropertyNames(this))
        "function" != typeof this[b] && (this[b] = null);
    }),
    (a.fn.owlCarousel.Constructor.Plugins.Thumbs = e);
})(window.Zepto || window.jQuery, window, document);

/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 1.9.8
 **/
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof exports
    ? (module.exports = b(require("jquery")))
    : b(jQuery);
})(this, function (a) {
  var b = function (a, b) {
      var c,
        d = document.createElement("canvas");
      a.appendChild(d),
        "object" == typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(d);
      var e = d.getContext("2d");
      d.width = d.height = b.size;
      var f = 1;
      window.devicePixelRatio > 1 &&
        ((f = window.devicePixelRatio),
        (d.style.width = d.style.height = [b.size, "px"].join("")),
        (d.width = d.height = b.size * f),
        e.scale(f, f)),
        e.translate(b.size / 2, b.size / 2),
        e.rotate((-0.5 + b.rotate / 180) * Math.PI);
      var g = (b.size - b.lineWidth) / 2;
      b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2),
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          });
      var h = function (a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(),
            e.arc(0, 0, g, 0, 2 * Math.PI * c, d),
            (e.strokeStyle = a),
            (e.lineWidth = b),
            e.stroke();
        },
        i = function () {
          var a, c;
          (e.lineWidth = 1), (e.fillStyle = b.scaleColor), e.save();
          for (var d = 24; d > 0; --d)
            d % 6 === 0
              ? ((c = b.scaleLength), (a = 0))
              : ((c = 0.6 * b.scaleLength), (a = b.scaleLength - c)),
              e.fillRect(-b.size / 2 + a, 0, c, 1),
              e.rotate(Math.PI / 12);
          e.restore();
        },
        j = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (a) {
              window.setTimeout(a, 1e3 / 60);
            }
          );
        })(),
        k = function () {
          b.scaleColor && i(),
            b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1);
        };
      (this.getCanvas = function () {
        return d;
      }),
        (this.getCtx = function () {
          return e;
        }),
        (this.clear = function () {
          e.clearRect(b.size / -2, b.size / -2, b.size, b.size);
        }),
        (this.draw = function (a) {
          b.scaleColor || b.trackColor
            ? e.getImageData && e.putImageData
              ? c
                ? e.putImageData(c, 0, 0)
                : (k(), (c = e.getImageData(0, 0, b.size * f, b.size * f)))
              : (this.clear(), k())
            : this.clear(),
            (e.lineCap = b.lineCap);
          var d;
          (d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor),
            h(d, b.lineWidth, a / 100);
        }.bind(this)),
        (this.animate = function (a, c) {
          var d = Date.now();
          b.onStart(a, c);
          var e = function () {
            var f = Math.min(Date.now() - d, b.animate.duration),
              g = b.easing(this, f, a, c - a, b.animate.duration);
            this.draw(g),
              b.onStep(a, c, g),
              f >= b.animate.duration ? b.onStop(a, c) : j(e);
          }.bind(this);
          j(e);
        }.bind(this));
    },
    c = function (a, c) {
      var d = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        trackWidth: void 0,
        size: 110,
        rotate: 0,
        animate: { duration: 1e3, enabled: !0 },
        easing: function (a, b, c, d, e) {
          return (
            (b /= e / 2),
            1 > b ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c
          );
        },
        onStart: function (a, b) {},
        onStep: function (a, b, c) {},
        onStop: function (a, b) {},
      };
      if ("undefined" != typeof b) d.renderer = b;
      else {
        if ("undefined" == typeof SVGRenderer)
          throw new Error("Please load either the SVG- or the CanvasRenderer");
        d.renderer = SVGRenderer;
      }
      var e = {},
        f = 0,
        g = function () {
          (this.el = a), (this.options = e);
          for (var b in d)
            d.hasOwnProperty(b) &&
              ((e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b]),
              "function" == typeof e[b] && (e[b] = e[b].bind(this)));
          "string" == typeof e.easing &&
          "undefined" != typeof jQuery &&
          jQuery.isFunction(jQuery.easing[e.easing])
            ? (e.easing = jQuery.easing[e.easing])
            : (e.easing = d.easing),
            "number" == typeof e.animate &&
              (e.animate = { duration: e.animate, enabled: !0 }),
            "boolean" != typeof e.animate ||
              e.animate ||
              (e.animate = { duration: 1e3, enabled: e.animate }),
            (this.renderer = new e.renderer(a, e)),
            this.renderer.draw(f),
            a.dataset && a.dataset.percent
              ? this.update(parseFloat(a.dataset.percent))
              : a.getAttribute &&
                a.getAttribute("data-percent") &&
                this.update(parseFloat(a.getAttribute("data-percent")));
        }.bind(this);
      (this.update = function (a) {
        return (
          (a = parseFloat(a)),
          e.animate.enabled
            ? this.renderer.animate(f, a)
            : this.renderer.draw(a),
          (f = a),
          this
        );
      }.bind(this)),
        (this.disableAnimation = function () {
          return (e.animate.enabled = !1), this;
        }),
        (this.enableAnimation = function () {
          return (e.animate.enabled = !0), this;
        }),
        g();
    };
  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") ||
        ((d = a.extend({}, b, a(this).data())),
        a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});

/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <cpw1485@gmail.com>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.9.8
 */
"function" != typeof Object.create &&
  (Object.create = function (a) {
    function b() {}
    return (b.prototype = a), new b();
  }),
  (function (a, b, c, d) {
    "use strict";
    var e = {
      init: function (c, d) {
        (this.options = a.extend({}, a.fn.singlePageNav.defaults, c)),
          (this.container = d),
          (this.$container = a(d)),
          (this.$links = this.$container.find("a")),
          "" !== this.options.filter &&
            (this.$links = this.$links.filter(this.options.filter)),
          (this.$window = a(b)),
          (this.$htmlbody = a("html, body")),
          this.$links.on(
            "click.singlePageNav",
            a.proxy(this.handleClick, this)
          ),
          (this.didScroll = !1),
          this.checkPosition(),
          this.setTimer();
      },
      handleClick: function (b) {
        var c = this,
          d = b.currentTarget,
          e = a(d.hash);
        b.preventDefault(),
          e.length &&
            (c.clearTimer(),
            "function" == typeof c.options.beforeStart &&
              c.options.beforeStart(),
            c.setActiveLink(d.hash),
            c.scrollTo(e, function () {
              c.options.updateHash &&
                history.pushState &&
                history.pushState(null, null, d.hash),
                c.setTimer(),
                "function" == typeof c.options.onComplete &&
                  c.options.onComplete();
            }));
      },
      scrollTo: function (a, b) {
        var c = this,
          d = c.getCoords(a).top,
          e = !1;
        c.$htmlbody.stop().animate(
          { scrollTop: d },
          {
            duration: c.options.speed,
            easing: c.options.easing,
            complete: function () {
              "function" != typeof b || e || b(), (e = !0);
            },
          }
        );
      },
      setTimer: function () {
        var a = this;
        a.$window.on("scroll.singlePageNav", function () {
          a.didScroll = !0;
        }),
          (a.timer = setInterval(function () {
            a.didScroll && ((a.didScroll = !1), a.checkPosition());
          }, 250));
      },
      clearTimer: function () {
        clearInterval(this.timer),
          this.$window.off("scroll.singlePageNav"),
          (this.didScroll = !1);
      },
      checkPosition: function () {
        var a = this.$window.scrollTop(),
          b = this.getCurrentSection(a);
        null !== b && this.setActiveLink(b);
      },
      getCoords: function (a) {
        return { top: Math.round(a.offset().top) - this.options.offset };
      },
      setActiveLink: function (a) {
        var b = this.$container.find("a[href$='" + a + "']");
        b.hasClass(this.options.currentClass) ||
          (this.$links.removeClass(this.options.currentClass),
          b.addClass(this.options.currentClass));
      },
      getCurrentSection: function (d) {
        var e, f, g, h;
        for (e = 0; e < this.$links.length; e++)
          (f = this.$links[e].hash),
            a(f).length &&
              ((g = this.getCoords(a(f))),
              d >= g.top - this.options.threshold && (h = f));
        var i = a(c).height() - a(b).height();
        if (d == i) {
          var j = this.$links.length;
          j > 0 && (h = this.$links[j - 1].hash);
        }
        return h || (0 === this.$links.length ? null : this.$links[0].hash);
      },
    };
    (a.fn.singlePageNav = function (a) {
      return this.each(function () {
        var b = Object.create(e);
        b.init(a, this);
      });
    }),
      (a.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: "current",
        easing: "swing",
        updateHash: !1,
        filter: "",
        onComplete: !1,
        beforeStart: !1,
      });
  })(jQuery, window, document);

/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!(function (a, b, c) {
  "use strict";
  function d(c) {
    if (
      ((e = b.documentElement),
      (f = b.body),
      T(),
      (ha = this),
      (c = c || {}),
      (ma = c.constants || {}),
      c.easing)
    )
      for (var d in c.easing) W[d] = c.easing[d];
    (ta = c.edgeStrategy || "set"),
      (ka = {
        beforerender: c.beforerender,
        render: c.render,
        keyframe: c.keyframe,
      }),
      (la = c.forceHeight !== !1),
      la && (Ka = c.scale || 1),
      (na = c.mobileDeceleration || y),
      (pa = c.smoothScrolling !== !1),
      (qa = c.smoothScrollingDuration || A),
      (ra = { targetTop: ha.getScrollTop() }),
      (Sa = (
        c.mobileCheck ||
        function () {
          return /Android|iPhone|iPad|iPod|BlackBerry/i.test(
            navigator.userAgent || navigator.vendor || a.opera
          );
        }
      )()),
      Sa
        ? ((ja = b.getElementById(c.skrollrBody || z)),
          ja && ga(),
          X(),
          Ea(e, [s, v], [t]))
        : Ea(e, [s, u], [t]),
      ha.refresh(),
      wa(a, "resize orientationchange", function () {
        var a = e.clientWidth,
          b = e.clientHeight;
        (b !== Pa || a !== Oa) && ((Pa = b), (Oa = a), (Qa = !0));
      });
    var g = U();
    return (
      (function h() {
        $(), (va = g(h));
      })(),
      ha
    );
  }
  var e,
    f,
    g = {
      get: function () {
        return ha;
      },
      init: function (a) {
        return ha || new d(a);
      },
      VERSION: "0.6.30",
    },
    h = Object.prototype.hasOwnProperty,
    i = a.Math,
    j = a.getComputedStyle,
    k = "touchstart",
    l = "touchmove",
    m = "touchcancel",
    n = "touchend",
    o = "skrollable",
    p = o + "-before",
    q = o + "-between",
    r = o + "-after",
    s = "skrollr",
    t = "no-" + s,
    u = s + "-desktop",
    v = s + "-mobile",
    w = "linear",
    x = 1e3,
    y = 0.004,
    z = "skrollr-body",
    A = 200,
    B = "start",
    C = "end",
    D = "center",
    E = "bottom",
    F = "___skrollable_id",
    G = /^(?:input|textarea|button|select)$/i,
    H = /^\s+|\s+$/g,
    I =
      /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    K = /^(@?[a-z\-]+)\[(\w+)\]$/,
    L = /-([a-z0-9_])/g,
    M = function (a, b) {
      return b.toUpperCase();
    },
    N = /[\-+]?[\d]*\.?[\d]+/g,
    O = /\{\?\}/g,
    P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    Q = /[a-z\-]+-gradient/g,
    R = "",
    S = "",
    T = function () {
      var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
      if (j) {
        var b = j(f, null);
        for (var c in b)
          if ((R = c.match(a) || (+c == c && b[c].match(a)))) break;
        if (!R) return void (R = S = "");
        (R = R[0]),
          "-" === R.slice(0, 1)
            ? ((S = R),
              (R = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O",
              }[R]))
            : (S = "-" + R.toLowerCase() + "-");
      }
    },
    U = function () {
      var b =
          a.requestAnimationFrame ||
          a[R.toLowerCase() + "RequestAnimationFrame"],
        c = Ha();
      return (
        (Sa || !b) &&
          (b = function (b) {
            var d = Ha() - c,
              e = i.max(0, 1e3 / 60 - d);
            return a.setTimeout(function () {
              (c = Ha()), b();
            }, e);
          }),
        b
      );
    },
    V = function () {
      var b =
        a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
      return (
        (Sa || !b) &&
          (b = function (b) {
            return a.clearTimeout(b);
          }),
        b
      );
    },
    W = {
      begin: function () {
        return 0;
      },
      end: function () {
        return 1;
      },
      linear: function (a) {
        return a;
      },
      quadratic: function (a) {
        return a * a;
      },
      cubic: function (a) {
        return a * a * a;
      },
      swing: function (a) {
        return -i.cos(a * i.PI) / 2 + 0.5;
      },
      sqrt: function (a) {
        return i.sqrt(a);
      },
      outCubic: function (a) {
        return i.pow(a - 1, 3) + 1;
      },
      bounce: function (a) {
        var b;
        if (0.5083 >= a) b = 3;
        else if (0.8489 >= a) b = 9;
        else if (0.96208 >= a) b = 27;
        else {
          if (!(0.99981 >= a)) return 1;
          b = 91;
        }
        return 1 - i.abs((3 * i.cos(a * b * 1.028)) / b);
      },
    };
  (d.prototype.refresh = function (a) {
    var d,
      e,
      f = !1;
    for (
      a === c
        ? ((f = !0), (ia = []), (Ra = 0), (a = b.getElementsByTagName("*")))
        : a.length === c && (a = [a]),
        d = 0,
        e = a.length;
      e > d;
      d++
    ) {
      var g = a[d],
        h = g,
        i = [],
        j = pa,
        k = ta,
        l = !1;
      if ((f && F in g && delete g[F], g.attributes)) {
        for (var m = 0, n = g.attributes.length; n > m; m++) {
          var p = g.attributes[m];
          if ("data-anchor-target" !== p.name)
            if ("data-smooth-scrolling" !== p.name)
              if ("data-edge-strategy" !== p.name)
                if ("data-emit-events" !== p.name) {
                  var q = p.name.match(I);
                  if (null !== q) {
                    var r = {
                      props: p.value,
                      element: g,
                      eventType: p.name.replace(L, M),
                    };
                    i.push(r);
                    var s = q[1];
                    s && (r.constant = s.substr(1));
                    var t = q[2];
                    /p$/.test(t)
                      ? ((r.isPercentage = !0),
                        (r.offset = (0 | t.slice(0, -1)) / 100))
                      : (r.offset = 0 | t);
                    var u = q[3],
                      v = q[4] || u;
                    u && u !== B && u !== C
                      ? ((r.mode = "relative"), (r.anchors = [u, v]))
                      : ((r.mode = "absolute"),
                        u === C
                          ? (r.isEnd = !0)
                          : r.isPercentage || (r.offset = r.offset * Ka));
                  }
                } else l = !0;
              else k = p.value;
            else j = "off" !== p.value;
          else if (((h = b.querySelector(p.value)), null === h))
            throw 'Unable to find anchor target "' + p.value + '"';
        }
        if (i.length) {
          var w, x, y;
          !f && F in g
            ? ((y = g[F]), (w = ia[y].styleAttr), (x = ia[y].classAttr))
            : ((y = g[F] = Ra++), (w = g.style.cssText), (x = Da(g))),
            (ia[y] = {
              element: g,
              styleAttr: w,
              classAttr: x,
              anchorTarget: h,
              keyFrames: i,
              smoothScrolling: j,
              edgeStrategy: k,
              emitEvents: l,
              lastFrameIndex: -1,
            }),
            Ea(g, [o], []);
        }
      }
    }
    for (Aa(), d = 0, e = a.length; e > d; d++) {
      var z = ia[a[d][F]];
      z !== c && (_(z), ba(z));
    }
    return ha;
  }),
    (d.prototype.relativeToAbsolute = function (a, b, c) {
      var d = e.clientHeight,
        f = a.getBoundingClientRect(),
        g = f.top,
        h = f.bottom - f.top;
      return (
        b === E ? (g -= d) : b === D && (g -= d / 2),
        c === E ? (g += h) : c === D && (g += h / 2),
        (g += ha.getScrollTop()),
        (g + 0.5) | 0
      );
    }),
    (d.prototype.animateTo = function (a, b) {
      b = b || {};
      var d = Ha(),
        e = ha.getScrollTop(),
        f = b.duration === c ? x : b.duration;
      return (
        (oa = {
          startTop: e,
          topDiff: a - e,
          targetTop: a,
          duration: f,
          startTime: d,
          endTime: d + f,
          easing: W[b.easing || w],
          done: b.done,
        }),
        oa.topDiff || (oa.done && oa.done.call(ha, !1), (oa = c)),
        ha
      );
    }),
    (d.prototype.stopAnimateTo = function () {
      oa && oa.done && oa.done.call(ha, !0), (oa = c);
    }),
    (d.prototype.isAnimatingTo = function () {
      return !!oa;
    }),
    (d.prototype.isMobile = function () {
      return Sa;
    }),
    (d.prototype.setScrollTop = function (b, c) {
      return (
        (sa = c === !0),
        Sa ? (Ta = i.min(i.max(b, 0), Ja)) : a.scrollTo(0, b),
        ha
      );
    }),
    (d.prototype.getScrollTop = function () {
      return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0;
    }),
    (d.prototype.getMaxScrollTop = function () {
      return Ja;
    }),
    (d.prototype.on = function (a, b) {
      return (ka[a] = b), ha;
    }),
    (d.prototype.off = function (a) {
      return delete ka[a], ha;
    }),
    (d.prototype.destroy = function () {
      var a = V();
      a(va), ya(), Ea(e, [t], [s, u, v]);
      for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
      (e.style.overflow = f.style.overflow = ""),
        (e.style.height = f.style.height = ""),
        ja && g.setStyle(ja, "transform", "none"),
        (ha = c),
        (ja = c),
        (ka = c),
        (la = c),
        (Ja = 0),
        (Ka = 1),
        (ma = c),
        (na = c),
        (La = "down"),
        (Ma = -1),
        (Oa = 0),
        (Pa = 0),
        (Qa = !1),
        (oa = c),
        (pa = c),
        (qa = c),
        (ra = c),
        (sa = c),
        (Ra = 0),
        (ta = c),
        (Sa = !1),
        (Ta = 0),
        (ua = c);
    });
  var X = function () {
      var d, g, h, j, o, p, q, r, s, t, u, v;
      wa(e, [k, l, m, n].join(" "), function (a) {
        var e = a.changedTouches[0];
        for (j = a.target; 3 === j.nodeType; ) j = j.parentNode;
        switch (
          ((o = e.clientY),
          (p = e.clientX),
          (t = a.timeStamp),
          G.test(j.tagName) || a.preventDefault(),
          a.type)
        ) {
          case k:
            d && d.blur(),
              ha.stopAnimateTo(),
              (d = j),
              (g = q = o),
              (h = p),
              (s = t);
            break;
          case l:
            G.test(j.tagName) && b.activeElement !== j && a.preventDefault(),
              (r = o - q),
              (v = t - u),
              ha.setScrollTop(Ta - r, !0),
              (q = o),
              (u = t);
            break;
          default:
          case m:
          case n:
            var f = g - o,
              w = h - p,
              x = w * w + f * f;
            if (49 > x) {
              if (!G.test(d.tagName)) {
                d.focus();
                var y = b.createEvent("MouseEvents");
                y.initMouseEvent(
                  "click",
                  !0,
                  !0,
                  a.view,
                  1,
                  e.screenX,
                  e.screenY,
                  e.clientX,
                  e.clientY,
                  a.ctrlKey,
                  a.altKey,
                  a.shiftKey,
                  a.metaKey,
                  0,
                  null
                ),
                  d.dispatchEvent(y);
              }
              return;
            }
            d = c;
            var z = r / v;
            z = i.max(i.min(z, 3), -3);
            var A = i.abs(z / na),
              B = z * A + 0.5 * na * A * A,
              C = ha.getScrollTop() - B,
              D = 0;
            C > Ja
              ? ((D = (Ja - C) / B), (C = Ja))
              : 0 > C && ((D = -C / B), (C = 0)),
              (A *= 1 - D),
              ha.animateTo((C + 0.5) | 0, { easing: "outCubic", duration: A });
        }
      }),
        a.scrollTo(0, 0),
        (e.style.overflow = f.style.overflow = "hidden");
    },
    Y = function () {
      var a,
        b,
        c,
        d,
        f,
        g,
        h,
        j,
        k,
        l,
        m,
        n = e.clientHeight,
        o = Ba();
      for (j = 0, k = ia.length; k > j; j++)
        for (
          a = ia[j],
            b = a.element,
            c = a.anchorTarget,
            d = a.keyFrames,
            f = 0,
            g = d.length;
          g > f;
          f++
        )
          (h = d[f]),
            (l = h.offset),
            (m = o[h.constant] || 0),
            (h.frame = l),
            h.isPercentage && ((l *= n), (h.frame = l)),
            "relative" === h.mode &&
              (fa(b),
              (h.frame =
                ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l),
              fa(b, !0)),
            (h.frame += m),
            la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
      for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
        for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++)
          (h = d[f]),
            (m = o[h.constant] || 0),
            h.isEnd && (h.frame = Ja - h.offset + m);
        a.keyFrames.sort(Ia);
      }
    },
    Z = function (a, b) {
      for (var c = 0, d = ia.length; d > c; c++) {
        var e,
          f,
          i = ia[c],
          j = i.element,
          k = i.smoothScrolling ? a : b,
          l = i.keyFrames,
          m = l.length,
          n = l[0],
          s = l[l.length - 1],
          t = k < n.frame,
          u = k > s.frame,
          v = t ? n : s,
          w = i.emitEvents,
          x = i.lastFrameIndex;
        if (t || u) {
          if ((t && -1 === i.edge) || (u && 1 === i.edge)) continue;
          switch (
            (t
              ? (Ea(j, [p], [r, q]),
                w &&
                  x > -1 &&
                  (za(j, n.eventType, La), (i.lastFrameIndex = -1)))
              : (Ea(j, [r], [p, q]),
                w && m > x && (za(j, s.eventType, La), (i.lastFrameIndex = m))),
            (i.edge = t ? -1 : 1),
            i.edgeStrategy)
          ) {
            case "reset":
              fa(j);
              continue;
            case "ease":
              k = v.frame;
              break;
            default:
            case "set":
              var y = v.props;
              for (e in y)
                h.call(y, e) &&
                  ((f = ea(y[e].value)),
                  0 === e.indexOf("@")
                    ? j.setAttribute(e.substr(1), f)
                    : g.setStyle(j, e, f));
              continue;
          }
        } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), (i.edge = 0));
        for (var z = 0; m - 1 > z; z++)
          if (k >= l[z].frame && k <= l[z + 1].frame) {
            var A = l[z],
              B = l[z + 1];
            for (e in A.props)
              if (h.call(A.props, e)) {
                var C = (k - A.frame) / (B.frame - A.frame);
                (C = A.props[e].easing(C)),
                  (f = da(A.props[e].value, B.props[e].value, C)),
                  (f = ea(f)),
                  0 === e.indexOf("@")
                    ? j.setAttribute(e.substr(1), f)
                    : g.setStyle(j, e, f);
              }
            w &&
              x !== z &&
              ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La),
              (i.lastFrameIndex = z));
            break;
          }
      }
    },
    $ = function () {
      Qa && ((Qa = !1), Aa());
      var a,
        b,
        d = ha.getScrollTop(),
        e = Ha();
      if (oa)
        e >= oa.endTime
          ? ((d = oa.targetTop), (a = oa.done), (oa = c))
          : ((b = oa.easing((e - oa.startTime) / oa.duration)),
            (d = (oa.startTop + b * oa.topDiff) | 0)),
          ha.setScrollTop(d, !0);
      else if (!sa) {
        var f = ra.targetTop - d;
        f &&
          (ra = {
            startTop: Ma,
            topDiff: d - Ma,
            targetTop: d,
            startTime: Na,
            endTime: Na + qa,
          }),
          e <= ra.endTime &&
            ((b = W.sqrt((e - ra.startTime) / qa)),
            (d = (ra.startTop + b * ra.topDiff) | 0));
      }
      if (sa || Ma !== d) {
        (La = d > Ma ? "down" : Ma > d ? "up" : La), (sa = !1);
        var h = { curTop: d, lastTop: Ma, maxTop: Ja, direction: La },
          i = ka.beforerender && ka.beforerender.call(ha, h);
        i !== !1 &&
          (Z(d, ha.getScrollTop()),
          Sa &&
            ja &&
            g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua),
          (Ma = d),
          ka.render && ka.render.call(ha, h)),
          a && a.call(ha, !1);
      }
      Na = e;
    },
    _ = function (a) {
      for (var b = 0, c = a.keyFrames.length; c > b; b++) {
        for (
          var d, e, f, g, h = a.keyFrames[b], i = {};
          null !== (g = J.exec(h.props));

        )
          (f = g[1]),
            (e = g[2]),
            (d = f.match(K)),
            null !== d ? ((f = d[1]), (d = d[2])) : (d = w),
            (e = e.indexOf("!") ? aa(e) : [e.slice(1)]),
            (i[f] = { value: e, easing: W[d] });
        h.props = i;
      }
    },
    aa = function (a) {
      var b = [];
      return (
        (P.lastIndex = 0),
        (a = a.replace(P, function (a) {
          return a.replace(N, function (a) {
            return (a / 255) * 100 + "%";
          });
        })),
        S &&
          ((Q.lastIndex = 0),
          (a = a.replace(Q, function (a) {
            return S + a;
          }))),
        (a = a.replace(N, function (a) {
          return b.push(+a), "{?}";
        })),
        b.unshift(a),
        b
      );
    },
    ba = function (a) {
      var b,
        c,
        d = {};
      for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
      for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--)
        ca(a.keyFrames[b], d);
    },
    ca = function (a, b) {
      var c;
      for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
      for (c in a.props) b[c] = a.props[c];
    },
    da = function (a, b, c) {
      var d,
        e = a.length;
      if (e !== b.length)
        throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
      var f = [a[0]];
      for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
      return f;
    },
    ea = function (a) {
      var b = 1;
      return (
        (O.lastIndex = 0),
        a[0].replace(O, function () {
          return a[b++];
        })
      );
    },
    fa = function (a, b) {
      a = [].concat(a);
      for (var c, d, e = 0, f = a.length; f > e; e++)
        (d = a[e]),
          (c = ia[d[F]]),
          c &&
            (b
              ? ((d.style.cssText = c.dirtyStyleAttr), Ea(d, c.dirtyClassAttr))
              : ((c.dirtyStyleAttr = d.style.cssText),
                (c.dirtyClassAttr = Da(d)),
                (d.style.cssText = c.styleAttr),
                Ea(d, c.classAttr)));
    },
    ga = function () {
      (ua = "translateZ(0)"), g.setStyle(ja, "transform", ua);
      var a = j(ja),
        b = a.getPropertyValue("transform"),
        c = a.getPropertyValue(S + "transform"),
        d = (b && "none" !== b) || (c && "none" !== c);
      d || (ua = "");
    };
  g.setStyle = function (a, b, c) {
    var d = a.style;
    if (((b = b.replace(L, M).replace("-", "")), "zIndex" === b))
      isNaN(c) ? (d[b] = c) : (d[b] = "" + (0 | c));
    else if ("float" === b) d.styleFloat = d.cssFloat = c;
    else
      try {
        R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), (d[b] = c);
      } catch (e) {}
  };
  var ha,
    ia,
    ja,
    ka,
    la,
    ma,
    na,
    oa,
    pa,
    qa,
    ra,
    sa,
    ta,
    ua,
    va,
    wa = (g.addEvent = function (b, c, d) {
      var e = function (b) {
        return (
          (b = b || a.event),
          b.target || (b.target = b.srcElement),
          b.preventDefault ||
            (b.preventDefault = function () {
              (b.returnValue = !1), (b.defaultPrevented = !0);
            }),
          d.call(this, b)
        );
      };
      c = c.split(" ");
      for (var f, g = 0, h = c.length; h > g; g++)
        (f = c[g]),
          b.addEventListener
            ? b.addEventListener(f, d, !1)
            : b.attachEvent("on" + f, e),
          Ua.push({ element: b, name: f, listener: d });
    }),
    xa = (g.removeEvent = function (a, b, c) {
      b = b.split(" ");
      for (var d = 0, e = b.length; e > d; d++)
        a.removeEventListener
          ? a.removeEventListener(b[d], c, !1)
          : a.detachEvent("on" + b[d], c);
    }),
    ya = function () {
      for (var a, b = 0, c = Ua.length; c > b; b++)
        (a = Ua[b]), xa(a.element, a.name, a.listener);
      Ua = [];
    },
    za = function (a, b, c) {
      ka.keyframe && ka.keyframe.call(ha, a, b, c);
    },
    Aa = function () {
      var a = ha.getScrollTop();
      (Ja = 0),
        la && !Sa && (f.style.height = ""),
        Y(),
        la && !Sa && (f.style.height = Ja + e.clientHeight + "px"),
        Sa
          ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja))
          : ha.setScrollTop(a, !0),
        (sa = !0);
    },
    Ba = function () {
      var a,
        b,
        c = e.clientHeight,
        d = {};
      for (a in ma)
        (b = ma[a]),
          "function" == typeof b
            ? (b = b.call(ha))
            : /p$/.test(b) && (b = (b.slice(0, -1) / 100) * c),
          (d[a] = b);
      return d;
    },
    Ca = function () {
      var a,
        b = 0;
      return (
        ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)),
        (a = i.max(
          b,
          f.scrollHeight,
          f.offsetHeight,
          e.scrollHeight,
          e.offsetHeight,
          e.clientHeight
        )),
        a - e.clientHeight
      );
    },
    Da = function (b) {
      var c = "className";
      return (
        a.SVGElement &&
          b instanceof a.SVGElement &&
          ((b = b[c]), (c = "baseVal")),
        b[c]
      );
    },
    Ea = function (b, d, e) {
      var f = "className";
      if (
        (a.SVGElement &&
          b instanceof a.SVGElement &&
          ((b = b[f]), (f = "baseVal")),
        e === c)
      )
        return void (b[f] = d);
      for (var g = b[f], h = 0, i = e.length; i > h; h++)
        g = Ga(g).replace(Ga(e[h]), " ");
      g = Fa(g);
      for (var j = 0, k = d.length; k > j; j++)
        -1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
      b[f] = Fa(g);
    },
    Fa = function (a) {
      return a.replace(H, "");
    },
    Ga = function (a) {
      return " " + a + " ";
    },
    Ha =
      Date.now ||
      function () {
        return +new Date();
      },
    Ia = function (a, b) {
      return a.frame - b.frame;
    },
    Ja = 0,
    Ka = 1,
    La = "down",
    Ma = -1,
    Na = Ha(),
    Oa = 0,
    Pa = 0,
    Qa = !1,
    Ra = 0,
    Sa = !1,
    Ta = 0,
    Ua = [];
  "function" == typeof define && define.amd
    ? define([], function () {
        return g;
      })
    : "undefined" != typeof module && module.exports
    ? (module.exports = g)
    : (a.skrollr = g);
})(window, document);
