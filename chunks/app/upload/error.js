(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[818], {
    2413: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 3002))
    },
    7648: function(e, t, n) {
        "use strict";
        n.d(t, {
            default: function() {
                return l.a
            }
        });
        var r = n(2972)
          , l = n.n(r)
    },
    3002: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return s
            }
        });
        var r = n(7437)
          , l = n(2265)
          , a = n(7648);
        function s(e) {
            let {error: t, reset: n} = e;
            return (0,
            l.useEffect)( () => {
                console.error("Upload page error:", t)
            }
            , [t]),
            (0,
            r.jsx)("div", {
                className: "min-h-[60vh] flex flex-col items-center justify-center px-4",
                children: (0,
                r.jsxs)("div", {
                    className: "text-center max-w-md",
                    children: [(0,
                    r.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-16 h-16 mx-auto text-text-secondary mb-4",
                        children: (0,
                        r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.69a.75.75 0 001.5 0v-4.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z",
                            clipRule: "evenodd"
                        })
                    }), (0,
                    r.jsx)("h1", {
                        className: "text-2xl font-bold text-text-primary mb-2",
                        children: "Upload failed"
                    }), (0,
                    r.jsx)("p", {
                        className: "text-text-secondary mb-6",
                        children: "We couldn't complete your upload. Please check your connection and try again."
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex flex-col sm:flex-row gap-3 justify-center",
                        children: [(0,
                        r.jsx)("button", {
                            onClick: n,
                            className: "px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors",
                            children: "Try again"
                        }), (0,
                        r.jsx)(a.default, {
                            href: "/",
                            className: "px-6 py-3 bg-surface-light text-text-primary font-medium rounded-lg hover:bg-surface transition-colors",
                            children: "Go back home"
                        })]
                    })]
                })
            })
        }
    }
}, function(e) {
    e.O(0, [972, 971, 117, 744], function() {
        return e(e.s = 2413)
    }),
    _N_E = e.O()
}
]);
