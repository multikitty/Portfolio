!(function (n) {
  var e = {};
  function r(t) {
    if (e[t]) return e[t].exports;
    var o = (e[t] = { i: t, l: !1, exports: {} });
    return n[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = n),
    (r.c = e),
    (r.d = function (n, e, t) {
      r.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (r.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (r.t = function (n, e) {
      if ((1 & e && (n = r(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (r.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var o in n)
          r.d(
            t,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (r.p = "/"),
    r((r.s = 3));
})({
  3: function (n, e) {
    var r = [
        ["#FFDA7A", "#FF6969"],
        ["#F29FFF", "#7C99FF"],
        ["#6491D6", "#43F0C7"],
      ],
      t = function () {
        return r[Math.floor(Math.random() * r.length)];
      },
      o = function (n) {
        return "linear-gradient(90deg, "
          .concat(n[0], " 0%, ")
          .concat(n[1], " 100%)");
      },
      c = function (n) {
        return "background: ".concat(o(n), ";");
      };
    [].slice
      .call(document.querySelectorAll(".gg-symbol--gradient"))
      .forEach(function (n) {
        n.style.background = o(t());
      });
    var u = "font-size: 8px; ";
    console.log(
      [
        "",
        "%c              %c %c      ",
        "%c                  ",
        "%c    Bryan Smith ",
        "%c         ",
        "%c      %c %c             ",
        "",
      ].join("\n"),
      u + c(t()),
      u + "background: none;",
      u + "background: #888;",
      u + c(t()),
      "color: #555; font-size: 20px;",
      u + c(t()),
      u + "background: #888;",
      u + "background: none;",
      u + c(t())
    );
  },
});
