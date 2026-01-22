(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    8350: function(e, t, l) {
        Promise.resolve().then(l.bind(l, 6117))
    },
    7648: function(e, t, l) {
        "use strict";
        l.d(t, {
            default: function() {
                return r.a
            }
        });
        var n = l(2972)
          , r = l.n(n)
    },
    6117: function(e, t, l) {
        "use strict";
        l.r(t),
        l.d(t, {
            default: function() {
                return d
            }
        });
        var n = l(7437)
          , r = l(2265)
          , s = l(7944)
          , c = l(6511)
          , a = l(754);
        let o = "holstube_videos_cache"
          , i = "holstube_last_viewed";
        function d() {
            let[e,t] = (0,
            r.useState)([])
              , [l,d] = (0,
            r.useState)(!0)
              , [u,m] = (0,
            r.useState)(null);
            return ((0,
            r.useEffect)( () => {
                let e = !1;
                return (async () => {
                    let l = function() {
                        try {
                            let e = sessionStorage.getItem(i);
                            if (e)
                                return sessionStorage.removeItem(i),
                                e;
                            return null
                        } catch (e) {
                            return null
                        }
                    }();
                    l && function(e) {
                        try {
                            let t = localStorage.getItem(o);
                            if (!t)
                                return;
                            let {videos: l, timestamp: n} = JSON.parse(t)
                              , r = l.map(t => t.id === e ? {
                                ...t,
                                views: t.views + 1
                            } : t);
                            localStorage.setItem(o, JSON.stringify({
                                videos: r,
                                timestamp: n
                            }))
                        } catch (e) {}
                    }(l);
                    let n = function() {
                        try {
                            let e = localStorage.getItem(o);
                            if (!e)
                                return null;
                            let {videos: t, timestamp: l} = JSON.parse(e);
                            if (Date.now() - l < 3e5)
                                return t;
                            return null
                        } catch (e) {
                            return null
                        }
                    }();
                    n && n.length > 0 && (t(n.filter(e => {
                        var t;
                        return !(null === (t = e.description) || void 0 === t ? void 0 : t.includes("[кинотеатр]"))
                    }
                    )),
                    d(!1));
                    try {
                        let l = await s.X9();
                        if (!e) {
                            if (l && l.length > 0) {
                                let e = l.filter(e => {
                                    var t;
                                    return !(null === (t = e.description) || void 0 === t ? void 0 : t.includes("[кинотеатр]"))
                                }
                                );
                                t(e),
                                function(e) {
                                    try {
                                        let t = {
                                            videos: e,
                                            timestamp: Date.now()
                                        };
                                        localStorage.setItem(o, JSON.stringify(t))
                                    } catch (e) {}
                                }(e)
                            }
                            d(!1)
                        }
                    } catch (t) {
                        console.error("Error loading videos:", t),
                        e || n || (m("Ошибка загрузки"),
                        d(!1))
                    }
                }
                )(),
                () => {
                    e = !0
                }
            }
            , []),
            l) ? (0,
            n.jsx)("main", {
                className: "min-h-screen bg-background",
                children: (0,
                n.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 py-6",
                    children: [(0,
                    n.jsx)("div", {
                        className: "flex flex-col items-center justify-center py-20",
                        children: (0,
                        n.jsx)(a.Z, {
                            size: "lg",
                            delay: 800
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8",
                        children: Array.from({
                            length: 8
                        }).map( (e, t) => (0,
                        n.jsxs)("div", {
                            className: "animate-fade-in",
                            style: {
                                animationDelay: "".concat(50 * t, "ms")
                            },
                            children: [(0,
                            n.jsx)("div", {
                                className: "aspect-video skeleton rounded-xl mb-2"
                            }), (0,
                            n.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0,
                                n.jsx)("div", {
                                    className: "w-9 h-9 rounded-full skeleton flex-shrink-0"
                                }), (0,
                                n.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "h-4 skeleton rounded mb-2"
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "h-3 skeleton rounded w-2/3"
                                    })]
                                })]
                            })]
                        }, t))
                    })]
                })
            }) : u ? (0,
            n.jsx)("main", {
                className: "min-h-screen bg-background",
                children: (0,
                n.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 py-6",
                    children: (0,
                    n.jsxs)("div", {
                        className: "text-center py-12",
                        children: [(0,
                        n.jsx)("p", {
                            className: "text-text-secondary",
                            children: u
                        }), (0,
                        n.jsx)("button", {
                            onClick: () => window.location.reload(),
                            className: "mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg",
                            children: "Обновить"
                        })]
                    })
                })
            }) : (0,
            n.jsxs)("main", {
                className: "min-h-screen bg-background",
                children: [(0,
                n.jsx)("div", {
                    className: "max-w-7xl mx-auto px-4 py-6",
                    children: 0 === e.length ? (0,
                    n.jsxs)("div", {
                        className: "text-center py-12",
                        children: [(0,
                        n.jsx)("h2", {
                            className: "text-xl font-semibold text-text-primary mb-2",
                            children: "Пока нет видео"
                        }), (0,
                        n.jsx)("p", {
                            className: "text-text-secondary",
                            children: "Будьте первым кто загрузит видео!"
                        })]
                    }) : (0,
                    n.jsx)("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                        children: e.map(e => (0,
                        n.jsx)(c.ZP, {
                            id: e.id,
                            title: e.title,
                            thumbnailUrl: e.thumbnailUrl,
                            authorName: e.authorName,
                            authorId: e.authorId,
                            views: e.views,
                            createdAt: e.createdAt
                        }, e.id))
                    })
                }), (0,
                n.jsxs)("footer", {
                    className: "mt-12 py-6 border-t border-zinc-800 text-center text-sm text-zinc-500",
                    children: [(0,
                    n.jsx)("a", {
                        href: "/terms",
                        className: "hover:text-purple-400 transition-colors",
                        children: "Условия использования"
                    }), (0,
                    n.jsx)("span", {
                        className: "mx-2",
                        children: "•"
                    }), (0,
                    n.jsxs)("span", {
                        children: ["\xa9 ", new Date().getFullYear(), " HolsTube"]
                    })]
                })]
            })
        }
    },
    754: function(e, t, l) {
        "use strict";
        l.d(t, {
            Z: function() {
                return c
            }
        });
        var n = l(7437)
          , r = l(2265);
        let s = ["Скачиваем вам вирус... (шутка)", "Ищем смысл жизни...", "Кормим хомячков в серверной...", "Уговариваем сервер работать...", "Загружаем пиксели по одному...", "Считаем овечек...", "Ждём пока закипит чайник...", "Отправляем голубей с данными...", "Разматываем интернет-кабель...", "Просим сервер по-хорошему...", "Ловим биты в сети...", "Переводим с машинного языка...", "Заряжаем кристаллы данных...", "Будим спящие процессы...", "Собираем пазл из байтов..."];
        function c(e) {
            let {delay: t=500, interval: l=2500, size: c="md", spinnerOnly: a=!1} = e
              , [o,i] = (0,
            r.useState)(!1)
              , [d,u] = (0,
            r.useState)(0)
              , [m,x] = (0,
            r.useState)(!1);
            return (0,
            r.useEffect)( () => {
                if (a)
                    return;
                let e = setTimeout( () => {
                    i(!0),
                    u(Math.floor(Math.random() * s.length))
                }
                , t);
                return () => clearTimeout(e)
            }
            , [t, a]),
            (0,
            r.useEffect)( () => {
                if (!o || a)
                    return;
                let e = setInterval( () => {
                    x(!0),
                    setTimeout( () => {
                        u(e => (e + 1) % s.length),
                        x(!1)
                    }
                    , 300)
                }
                , l);
                return () => clearInterval(e)
            }
            , [o, l, a]),
            (0,
            n.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-4",
                children: [(0,
                n.jsx)("div", {
                    className: "".concat({
                        sm: "w-5 h-5 border-2",
                        md: "w-8 h-8 border-3",
                        lg: "w-12 h-12 border-4"
                    }[c], " border-purple-500/30 border-t-purple-500 rounded-full animate-spin")
                }), o && !a && (0,
                n.jsx)("p", {
                    className: "".concat({
                        sm: "text-xs",
                        md: "text-sm",
                        lg: "text-base"
                    }[c], " text-text-secondary text-center transition-opacity duration-300 ").concat(m ? "opacity-0" : "opacity-100"),
                    children: s[d]
                })]
            })
        }
    },
    9853: function(e, t, l) {
        "use strict";
        l.d(t, {
            Z: function() {
                return s
            }
        });
        var n = l(7437);
        let r = {
            blue: {
                color: "text-blue-500",
                bgColor: "bg-blue-500",
                title: "Подписчик канала",
                icon: "check"
            },
            gold: {
                color: "text-yellow-400",
                bgColor: "bg-yellow-400",
                title: "Популярный автор (50+ подписчиков, 5+ видео)",
                icon: "star"
            },
            purple: {
                color: "text-purple-500",
                bgColor: "bg-purple-500",
                title: "Верифицирован администрацией",
                icon: "verified"
            }
        };
        function s(e) {
            let {size: t="md", level: l="none", showTooltip: s=!0} = e
              , c = {
                sm: "w-3.5 h-3.5",
                md: "w-4 h-4",
                lg: "w-5 h-5"
            };
            if (!l || "none" === l)
                return null;
            let a = r[l] || r.blue;
            return (0,
            n.jsx)("span", {
                title: s ? a.title : void 0,
                children: "gold" === l ? (0,
                n.jsx)("svg", {
                    className: "".concat(c[t], " ").concat(a.color, " inline-block ml-1"),
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0,
                    n.jsx)("path", {
                        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    })
                }) : (0,
                n.jsx)("svg", {
                    className: "".concat(c[t], " ").concat(a.color, " inline-block ml-1"),
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0,
                    n.jsx)("path", {
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    })
                })
            })
        }
    },
    6511: function(e, t, l) {
        "use strict";
        l.d(t, {
            BK: function() {
                return o
            },
            ZP: function() {
                return i
            },
            xR: function() {
                return a
            }
        });
        var n = l(7437)
          , r = l(7648)
          , s = l(2265)
          , c = l(9853);
        function a(e) {
            return e >= 1e6 ? "".concat((e / 1e6).toFixed(1), "M просмотров") : e >= 1e3 ? "".concat((e / 1e3).toFixed(1), "K просмотров") : "".concat(e, " просмотров")
        }
        function o(e) {
            let t;
            let l = new Date;
            t = e instanceof Date ? e : e && "function" == typeof e.toDate ? e.toDate() : e && "seconds"in e ? new Date(1e3 * e.seconds) : new Date;
            let n = Math.floor(Math.floor((l.getTime() - t.getTime()) / 1e3) / 60)
              , r = Math.floor(n / 60)
              , s = Math.floor(r / 24)
              , c = Math.floor(s / 30)
              , a = Math.floor(s / 365);
            return a > 0 ? "".concat(a, " ").concat(1 === a ? "год" : a < 5 ? "года" : "лет", " назад") : c > 0 ? "".concat(c, " ").concat(1 === c ? "месяц" : c < 5 ? "месяца" : "месяцев", " назад") : s > 0 ? "".concat(s, " ").concat(1 === s ? "день" : s < 5 ? "дня" : "дней", " назад") : r > 0 ? "".concat(r, " ").concat(1 === r ? "час" : r < 5 ? "часа" : "часов", " назад") : n > 0 ? "".concat(n, " ").concat(1 === n ? "минуту" : n < 5 ? "минуты" : "минут", " назад") : "Только что"
        }
        function i(e) {
            let {id: t, title: l, thumbnailUrl: i, authorName: d, authorId: u, views: m, createdAt: x, isAuthorVerified: h} = e
              , [f,p] = (0,
            s.useState)(!1)
              , g = function(e) {
                for (let t of [/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/, /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/]) {
                    let l = e.match(t);
                    if (l)
                        return "https://img.youtube.com/vi/".concat(l[1], "/hqdefault.jpg")
                }
                return null
            }(i)
              , v = i.includes("drive.google.com") || i.includes("docs.google.com") || i.includes("vk.com/video") || i.includes("rutube.ru")
              , j = g || (v ? null : i)
              , b = !j || f || v;
            return (0,
            n.jsx)(r.default, {
                href: "/watch/".concat(t),
                className: "group block",
                children: (0,
                n.jsxs)("article", {
                    className: "flex flex-col gap-2",
                    children: [(0,
                    n.jsx)("div", {
                        className: "relative aspect-video bg-surface-light rounded-xl overflow-hidden",
                        children: b ? (0,
                        n.jsxs)("div", {
                            className: "absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/50 to-zinc-900",
                            children: [(0,
                            n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-12 h-12 text-purple-400",
                                children: (0,
                                n.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
                                    clipRule: "evenodd"
                                })
                            }), (0,
                            n.jsx)("span", {
                                className: "text-xs text-zinc-400 mt-2 px-2 text-center line-clamp-2 max-w-[90%]",
                                children: l
                            })]
                        }) : (0,
                        n.jsx)("img", {
                            src: j,
                            alt: l,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-200",
                            onError: () => p(!0)
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex gap-3",
                        children: [(0,
                        n.jsx)(r.default, {
                            href: "/channel/".concat(u),
                            className: "flex-shrink-0",
                            onClick: e => e.stopPropagation(),
                            children: (0,
                            n.jsx)("div", {
                                className: "w-9 h-9 rounded-full bg-surface-light flex items-center justify-center text-text-secondary text-sm font-medium",
                                children: d.charAt(0).toUpperCase()
                            })
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex-1 min-w-0",
                            children: [(0,
                            n.jsx)("h3", {
                                className: "text-text-primary font-medium line-clamp-2 text-sm leading-5 group-hover:text-primary transition-colors",
                                children: l
                            }), (0,
                            n.jsxs)(r.default, {
                                href: "/channel/".concat(u),
                                className: "text-text-secondary text-xs hover:text-text-primary transition-colors mt-1 flex items-center",
                                onClick: e => e.stopPropagation(),
                                children: [d, h && (0,
                                n.jsx)(c.Z, {
                                    size: "sm"
                                })]
                            }), (0,
                            n.jsxs)("p", {
                                className: "text-text-secondary text-xs mt-0.5",
                                children: [a(m), " • ", o(x)]
                            })]
                        })]
                    })]
                })
            })
        }
    }
}, function(e) {
    e.O(0, [972, 53, 944, 971, 117, 744], function() {
        return e(e.s = 8350)
    }),
    _N_E = e.O()
}
]);
