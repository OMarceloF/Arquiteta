var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
!(function (r, l) {
  var c = r(l);
  function s(i, t) {
    var e = r(i),
      n = i.getContext("2d"),
      s = {
        star: { color: "rgba(255, 255, 255, .5)", width: 1, randomWidth: !0 },
        line: { color: "rgba(255, 255, 255, .5)", width: 0.2 },
        position: { x: 0, y: 0 },
        width: l.innerWidth,
        height: l.innerHeight,
        velocity: 0.1,
        length: 100,
        distance: 120,
        radius: 150,
        stars: [],
      },
      a = r.extend(!0, {}, s, t);
    function o() {
      (this.x = Math.random() * i.width),
        (this.y = Math.random() * i.height),
        (this.vx = a.velocity - 0.5 * Math.random()),
        (this.vy = a.velocity - 0.5 * Math.random()),
        (this.radius = a.star.randomWidth
          ? Math.random() * a.star.width
          : a.star.width);
    }
    (o.prototype = {
      create: function () {
        n.beginPath(),
          n.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1),
          n.fill();
      },
      animate: function () {
        var t;
        for (t = 0; t < a.length; t++) {
          var e = a.stars[t];
          e.y < 0 || e.y > i.height
            ? ((e.vx = e.vx), (e.vy = -e.vy))
            : (e.x < 0 || e.x > i.width) && ((e.vx = -e.vx), (e.vy = e.vy)),
            (e.x += e.vx),
            (e.y += e.vy);
        }
      },
      line: function () {
        var t,
          e,
          s,
          i,
          o = a.length;
        for (s = 0; s < o; s++)
          for (i = 0; i < o; i++)
            (t = a.stars[s]),
              (e = a.stars[i]),
              t.x - e.x < a.distance &&
                t.y - e.y < a.distance &&
                t.x - e.x > -a.distance &&
                t.y - e.y > -a.distance &&
                t.x - a.position.x < a.radius &&
                t.y - a.position.y < a.radius &&
                t.x - a.position.x > -a.radius &&
                t.y - a.position.y > -a.radius &&
                (n.beginPath(),
                n.moveTo(t.x, t.y),
                n.lineTo(e.x, e.y),
                n.stroke(),
                n.closePath());
      },
    }),
      (this.createStars = function () {
        var t,
          e,
          s = a.length;
        for (n.clearRect(0, 0, i.width, i.height), e = 0; e < s; e++)
          a.stars.push(new o()), (t = a.stars[e]).create();
        t.line(), t.animate();
      }),
      (this.setCanvas = function () {
        (i.width = a.width), (i.height = a.height);
      }),
      (this.setContext = function () {
        (n.fillStyle = a.star.color),
          (n.strokeStyle = a.line.color),
          (n.lineWidth = a.line.width);
      }),
      (this.setInitialPosition = function () {
        (t && t.hasOwnProperty("position")) ||
          (a.position = { x: 0.5 * i.width, y: 0.5 * i.height });
      }),
      (this.loop = function (t) {
        t(),
          (this.rAF = l.requestAnimationFrame(
            function () {
              this.loop(t);
            }.bind(this)
          ));
      }),
      (this.handlers = {
        window: {
          mousemove: function (t) {
            (a.position.x = t.pageX - e.offset().left),
              (a.position.y = t.pageY - e.offset().top);
          },
          resize: function () {
            l.cancelAnimationFrame(this.rAF);
          },
        },
      }),
      (this.bind = function () {
        c.on("mousemove", this.handlers.window.mousemove).on(
          "resize",
          this.handlers.window.resize.bind(this)
        );
      }),
      (this.unbind = function () {
        c.off("mousemove", this.handlers.window.mousemove).off(
          "resize",
          this.handlers.window.resize
        );
      }),
      (this.init = function () {
        this.setCanvas(),
          this.setContext(),
          this.setInitialPosition(),
          this.loop(this.createStars),
          this.bind();
      });
  }
  function i(t, e) {
    new s(t, e).init();
  }
  r.fn.constellation = function (e) {
    return this.each(function () {
      var t = this;
      c.on("resize", function () {
        i(t, e);
      }),
        i(this, e);
    });
  };
})(jQuery, window),
  (function (f, g) {
    var s = g.document;
    (f.fn.share = function (t) {
      var e = {
          init: function (t) {
            this.share.settings = f.extend({}, this.share.defaults, t);
            var a = (this.share.settings, this.share.settings.networks),
              r = this.share.settings.theme,
              l = this.share.settings.orientation,
              c = this.share.settings.affix,
              d = this.share.settings.margin,
              h = this.share.settings.title || f(s).attr("title"),
              u = this.share.settings.urlToShare || f(location).attr("href"),
              m = "";
            return (
              f.each(f(s).find('meta[name="description"]'), function (t, e) {
                m = f(e).attr("content");
              }),
              this.each(function () {
                var e,
                  s = f(this),
                  t = s.attr("id"),
                  i = encodeURIComponent(u),
                  o = h.replace("|", ""),
                  n = m.substring(0, 250);
                a.forEach(function (t) {
                  void 0 !== p.networkDefs[t] &&
                    ((e = (e = p.networkDefs[t].url)
                      .replace("|u|", i)
                      .replace("|t|", o)
                      .replace("|d|", n)
                      .replace("|140|", o.substring(0, 130))),
                    f(
                      "<a href='" +
                        e +
                        "' title='Share this page on " +
                        t +
                        "' class='pop share-" +
                        r +
                        " share-" +
                        r +
                        "-" +
                        t +
                        "'></a>"
                    ).appendTo(s));
                }),
                  f("#" + t + ".share-" + r).css("margin", d),
                  "horizontal" != l
                    ? f("#" + t + " a.share-" + r).css("display", "block")
                    : f("#" + t + " a.share-" + r).css(
                        "display",
                        "inline-block"
                      ),
                  void 0 !== c &&
                    (s.addClass("share-affix"),
                    -1 != c.indexOf("right")
                      ? (s.css("left", "auto"),
                        s.css("right", "0px"),
                        -1 != c.indexOf("center") && s.css("top", "40%"))
                      : -1 != c.indexOf("left center") && s.css("top", "40%"),
                    -1 != c.indexOf("bottom") &&
                      (s.css("bottom", "0px"),
                      s.css("top", "auto"),
                      -1 != c.indexOf("center") && s.css("left", "40%"))),
                  f(".pop").click(function () {
                    return (
                      g.open(
                        f(this).attr("href"),
                        "t",
                        "toolbar=0,resizable=1,status=0,width=640,height=528"
                      ),
                      !1
                    );
                  });
              })
            );
          },
        },
        p = {
          networkDefs: {
            facebook: { url: "http://www.facebook.com/share.php?u=|u|" },
            twitter: {
              url: "https://twitter.com/share?via=in1.com&text=|140|",
            },
            linkedin: {
              url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com",
            },
            in1: { url: "http://www.in1.com/cast?u=|u|", w: "490", h: "529" },
            tumblr: { url: "http://www.tumblr.com/share?v=3&u=|u|" },
            digg: { url: "http://digg.com/submit?url=|u|&title=|t|" },
            googleplus: {
              url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|",
            },
            reddit: { url: "http://reddit.com/submit?url=|u|" },
            pinterest: {
              url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|",
            },
            posterous: {
              url: "http://posterous.com/share?linkto=|u|&title=|t|",
            },
            stumbleupon: {
              url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|",
            },
            email: { url: "mailto:?subject=|t|" },
            vk: {
              url: "http://vk.com/share.php?url=|u|&title=|t|&description=|d|",
            },
          },
        };
      return e[t]
        ? e[t].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != (void 0 === t ? "undefined" : _typeof(t)) && t
        ? void f.error('Method "' + t + '" does not exist in social plugin')
        : e.init.apply(this, arguments);
    }),
      (f.fn.share.defaults = {
        networks: ["in1", "facebook", "twitter", "linkedin"],
        theme: "icon",
        autoShow: !0,
        margin: "3px",
        orientation: "horizontal",
        useIn1: !0,
      }),
      (f.fn.share.settings = {});
  })(jQuery, window),
  (function (n) {
    "use strict";
    var s, i, o;
    n(function () {
      var t = n(".share-container"),
        e = t.data("share");
      "string" == typeof e &&
        (e = (e = e.split(",")).map(function (t) {
          return t.trim();
        })).length &&
        t.share({ networks: e });
    }),
      (window.cthCaptchaCallback = function () {
        document.getElementById("loginCaptcha") &&
          (s = grecaptcha.render("loginCaptcha", {
            sitekey: _monolit_add_ons.gcaptcha_key,
          })),
          document.getElementById("regCaptcha") &&
            (i = grecaptcha.render("regCaptcha", {
              sitekey: _monolit_add_ons.gcaptcha_key,
            })),
          document.getElementById("adRegCaptcha") &&
            (o = grecaptcha.render("adRegCaptcha", {
              sitekey: _monolit_add_ons.gcaptcha_key,
            }));
      }),
      n("form#rsUserLogin").on("submit", function (t) {
        t.preventDefault(), n("#logmessage").removeClass("show success");
        var e = n(this).serialize();
        return (
          n("#logsubmit").attr("disabled", !0).addClass("submitted"),
          n
            .ajax({
              method: "POST",
              url: _monolit_add_ons.url,
              data: e + "&action=monolit-login",
            })
            .done(function (t) {
              n("#logsubmit").removeClass("submitted"),
                0 == t.success
                  ? (null != t.error &&
                      n("#logmessage").html(t.error).addClass("show"),
                    n("#logsubmit")
                      .attr("disabled", !1)
                      .removeClass("submitted"),
                    _monolit_add_ons.gcaptcha && grecaptcha.reset(s))
                  : (null != t.message &&
                      n("#logmessage").html(t.message).addClass("show success"),
                    setTimeout(function () {
                      null != t.redirection
                        ? (window.location.href = t.redirection)
                        : _monolit_add_ons.gcaptcha && grecaptcha.reset(s);
                    }, 5e3));
            })
            .fail(function (t, e, s) {
              console.log(t);
            }),
          !1
        );
      }),
      n("form#rsUserRegistration").on("submit", function (t) {
        t.preventDefault(), n("#regmessage").removeClass("show success");
        var e = n(this).serialize();
        return (
          n("#regsubmit").attr("disabled", !0).addClass("submitted"),
          n
            .ajax({
              method: "POST",
              url: _monolit_add_ons.url,
              data: e + "&action=monolit-register",
            })
            .done(function (t) {
              n("#regsubmit").removeClass("submitted"),
                0 == t.success
                  ? (null != t.error &&
                      n("#regmessage").html(t.error).addClass("show"),
                    n("#regsubmit")
                      .attr("disabled", !1)
                      .removeClass("submitted"),
                    _monolit_add_ons.gcaptcha && grecaptcha.reset(i))
                  : (null != t.message &&
                      n("#regmessage").html(t.message).addClass("show success"),
                    setTimeout(function () {
                      null != t.redirection
                        ? (window.location.href = t.redirection)
                        : _monolit_add_ons.gcaptcha && grecaptcha.reset(i);
                    }, 5e3));
            })
            .fail(function (t, e, s) {
              console.log(t);
            }),
          !1
        );
      }),
      n("form#advancedUserRegistration").on("submit", function (t) {
        t.preventDefault(), n("#advregmessage").removeClass("show success");
        var e = n(this).serialize();
        return (
          n("#advregsubmit").attr("disabled", !0).addClass("submitted"),
          n
            .ajax({
              method: "POST",
              url: _monolit_add_ons.url,
              data: e + "&action=monolit-register",
            })
            .done(function (t) {
              n("#advregsubmit").removeClass("submitted"),
                0 == t.success
                  ? (null != t.error &&
                      n("#advregmessage").html(t.error).addClass("show"),
                    n("#advregsubmit")
                      .attr("disabled", !1)
                      .removeClass("submitted"),
                    _monolit_add_ons.gcaptcha && grecaptcha.reset(o))
                  : (null != t.message &&
                      n("#advregmessage")
                        .html(t.message)
                        .addClass("show success"),
                    setTimeout(function () {
                      null != t.redirection
                        ? (window.location.href = t.redirection)
                        : _monolit_add_ons.gcaptcha && grecaptcha.reset(o);
                    }, 5e3));
            })
            .fail(function (t, e, s) {
              console.log(t);
            }),
          !1
        );
      }),
      n(document).on("click", ".monolit_addons-like-button", function (t) {
        t.preventDefault();
        var i = n(this),
          e = i.attr("data-post-id"),
          s = i.attr("data-nonce"),
          o = i.attr("data-iscomment");
        return (
          "" !== e &&
            n.ajax({
              type: "POST",
              url: _monolit_add_ons.url,
              data: {
                action: "monolit_addons_like",
                post_id: e,
                nonce: s,
                is_comment: o,
              },
              beforeSend: function () {
                i.addClass("like-process");
              },
              success: function (t) {
                if ((i.html(t.icon + t.count), "unliked" === t.status)) {
                  var e = _monolit_add_ons.like;
                  i.prop("title", e), i.removeClass("liked");
                } else {
                  var s = _monolit_add_ons.unlike;
                  i.prop("title", s), i.addClass("liked");
                }
                i.removeClass("like-process");
              },
            }),
          !1
        );
      });
  })(jQuery);
