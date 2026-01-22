(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[601], {
    1988: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 376))
    },
    376: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return r
            }
        });
        var s = n(7437);
        function r(e) {
            let {error: t, reset: n} = e;
            return (0,
            s.jsx)("div", {
                className: "min-h-screen bg-background flex items-center justify-center p-4",
                children: (0,
                s.jsxs)("div", {
                    className: "text-center max-w-md",
                    children: [(0,
                    s.jsx)("h2", {
                        className: "text-xl font-semibold text-text-primary mb-2",
                        children: "Ошибка"
                    }), (0,
                    s.jsx)("p", {
                        className: "text-text-secondary mb-6",
                        children: "Произошла ошибка при загрузке страницы"
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex gap-3 justify-center",
                        children: [(0,
                        s.jsx)("button", {
                            onClick: n,
                            className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",
                            children: "Попробовать снова"
                        }), (0,
                        s.jsx)("a", {
                            href: "/",
                            className: "px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700",
                            children: "На главную"
                        })]
                    })]
                })
            })
        }
    }
}, function(e) {
    e.O(0, [971, 117, 744], function() {
        return e(e.s = 1988)
    }),
    _N_E = e.O()
}
]);
