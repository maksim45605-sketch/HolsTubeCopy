(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    933: function(e, t, r) {
        Promise.resolve().then(r.t.bind(r, 2778, 23)),
        Promise.resolve().then(r.bind(r, 5258)),
        Promise.resolve().then(r.bind(r, 4362))
    },
    7648: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return a.a
            }
        });
        var s = r(2972)
          , a = r.n(s)
    },
    9376: function(e, t, r) {
        "use strict";
        var s = r(5475);
        r.o(s, "useParams") && r.d(t, {
            useParams: function() {
                return s.useParams
            }
        }),
        r.o(s, "useRouter") && r.d(t, {
            useRouter: function() {
                return s.useRouter
            }
        }),
        r.o(s, "useSearchParams") && r.d(t, {
            useSearchParams: function() {
                return s.useSearchParams
            }
        })
    },
    5258: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return c
            }
        });
        var s = r(7437)
          , a = r(7648)
          , i = r(2265)
          , n = r(9376)
          , o = r(4362);
        function l(e) {
            let {isOpen: t, onClose: r} = e
              , {user: n} = (0,
            o.a)()
              , [l,c] = (0,
            i.useState)("main")
              , [d,u] = (0,
            i.useState)([])
              , [h,x] = (0,
            i.useState)([])
              , [m,p] = (0,
            i.useState)([])
              , [f,v] = (0,
            i.useState)(!1)
              , g = (0,
            i.useRef)(null);
            (0,
            i.useEffect)( () => {
                if (n) {
                    let e = localStorage.getItem("watchHistory_".concat(n.id));
                    e && u(JSON.parse(e).slice(0, 20));
                    let t = localStorage.getItem("likedVideos_".concat(n.id));
                    t && x(JSON.parse(t).slice(0, 20));
                    let r = localStorage.getItem("subscriptions_".concat(n.id));
                    r && p(JSON.parse(r).slice(0, 10))
                }
            }
            , [n, t]);
            let j = () => {
                v(!0),
                setTimeout( () => {
                    v(!1),
                    r()
                }
                , 350)
            }
            ;
            if (!t && !f)
                return null;
            let b = e => {
                let {href: t, icon: r, label: i, onClick: n, badge: o, index: l=0} = e
                  , c = (0,
                s.jsxs)("div", {
                    className: "menu-item sidebar-item flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.06] rounded-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden",
                    style: {
                        animationDelay: "".concat(50 * l, "ms")
                    },
                    children: [(0,
                    s.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    }), (0,
                    s.jsx)("div", {
                        className: "relative text-text-secondary group-hover:text-purple-400 transition-all duration-300 group-hover:scale-110",
                        children: r
                    }), (0,
                    s.jsx)("span", {
                        className: "relative text-text-primary group-hover:text-white transition-colors duration-300 font-medium",
                        children: i
                    }), void 0 !== o && o > 0 && (0,
                    s.jsx)("span", {
                        className: "relative ml-auto px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs rounded-full font-semibold border border-purple-500/20",
                        children: o
                    })]
                });
                return t ? (0,
                s.jsx)(a.default, {
                    href: t,
                    onClick: j,
                    children: c
                }) : (0,
                s.jsx)("button", {
                    onClick: n,
                    className: "w-full text-left",
                    children: c
                })
            }
            ;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("div", {
                    className: "fixed inset-0 bg-black/70 z-40 ".concat(f ? "backdrop-animate-out" : "backdrop-animate"),
                    onClick: j,
                    style: {
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)"
                    }
                }), (0,
                s.jsxs)("aside", {
                    ref: g,
                    className: "fixed left-0 top-0 h-full w-80 glass z-50 overflow-hidden \n          shadow-2xl shadow-purple-500/20 border-r border-white/10\n          ".concat(f ? "sidebar-exit" : "sidebar-enter"),
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex items-center justify-between p-6 border-b border-white/5 relative",
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
                        }), (0,
                        s.jsxs)(a.default, {
                            href: "/",
                            className: "flex items-center gap-3 group",
                            onClick: j,
                            children: [(0,
                            s.jsxs)("div", {
                                className: "relative",
                                children: [(0,
                                s.jsxs)("svg", {
                                    viewBox: "0 0 32 32",
                                    className: "h-9 w-9 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                                    fill: "none",
                                    children: [(0,
                                    s.jsx)("rect", {
                                        x: "2",
                                        y: "6",
                                        width: "28",
                                        height: "20",
                                        rx: "6",
                                        fill: "url(#sidebarGradient)"
                                    }), (0,
                                    s.jsx)("path", {
                                        d: "M13 11L21 16L13 21V11Z",
                                        fill: "white"
                                    }), (0,
                                    s.jsx)("defs", {
                                        children: (0,
                                        s.jsxs)("linearGradient", {
                                            id: "sidebarGradient",
                                            x1: "2",
                                            y1: "6",
                                            x2: "30",
                                            y2: "26",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0,
                                            s.jsx)("stop", {
                                                stopColor: "#a855f7"
                                            }), (0,
                                            s.jsx)("stop", {
                                                offset: "1",
                                                stopColor: "#ec4899"
                                            })]
                                        })
                                    })]
                                }), (0,
                                s.jsx)("div", {
                                    className: "absolute inset-0 bg-purple-500/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150"
                                })]
                            }), (0,
                            s.jsxs)("span", {
                                className: "text-text-primary text-xl font-bold tracking-tight",
                                children: ["Hols", (0,
                                s.jsx)("span", {
                                    className: "gradient-text-animated",
                                    children: "Tube"
                                })]
                            })]
                        }), (0,
                        s.jsx)("button", {
                            onClick: j,
                            className: "p-3 hover:bg-white/5 rounded-2xl transition-all duration-300 hover:rotate-90 hover:scale-110 group",
                            children: (0,
                            s.jsx)("svg", {
                                className: "w-5 h-5 text-text-secondary group-hover:text-white transition-colors",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0,
                                s.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                })
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "overflow-y-auto h-[calc(100%-88px)] py-4 px-3",
                        children: [(0,
                        s.jsxs)("nav", {
                            className: "space-y-1",
                            children: [(0,
                            s.jsx)(b, {
                                href: "/",
                                icon: (0,
                                s.jsx)("svg", {
                                    className: "w-6 h-6",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                                    })
                                }),
                                label: "Главная",
                                index: 0
                            }), (0,
                            s.jsx)(b, {
                                href: "/shorts",
                                icon: (0,
                                s.jsxs)("svg", {
                                    className: "w-6 h-6",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [(0,
                                    s.jsx)("rect", {
                                        x: "6",
                                        y: "3",
                                        width: "12",
                                        height: "18",
                                        rx: "6",
                                        fill: "currentColor",
                                        transform: "rotate(10 12 12)"
                                    }), (0,
                                    s.jsx)("path", {
                                        d: "M10 8.5v7l5.5-3.5L10 8.5z",
                                        fill: "#0a0a0a"
                                    })]
                                }),
                                label: "Shorts",
                                index: 1
                            }), (0,
                            s.jsx)(b, {
                                href: "/cinema",
                                icon: (0,
                                s.jsx)("span", {
                                    className: "text-2xl",
                                    children: "\uD83C\uDFAC"
                                }),
                                label: "Кинотеатр",
                                index: 2
                            })]
                        }), n && m.length > 0 && (0,
                        s.jsxs)("div", {
                            className: "mt-8",
                            children: [(0,
                            s.jsx)("div", {
                                className: "px-5 mb-3",
                                children: (0,
                                s.jsx)("h3", {
                                    className: "text-text-muted text-xs font-bold uppercase tracking-widest",
                                    children: "Подписки"
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: "space-y-1",
                                children: m.slice(0, 5).map( (e, t) => (0,
                                s.jsxs)(a.default, {
                                    href: "/channel/".concat(e.channelId),
                                    onClick: j,
                                    className: "sidebar-item flex items-center gap-3 px-5 py-3 hover:bg-white/[0.06] rounded-2xl transition-all duration-300 group",
                                    style: {
                                        animationDelay: "".concat((t + 3) * 50, "ms")
                                    },
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-9 h-9 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300",
                                        children: e.channelName.charAt(0).toUpperCase()
                                    }), (0,
                                    s.jsx)("span", {
                                        className: "text-text-primary text-sm truncate group-hover:text-white transition-colors font-medium",
                                        children: e.channelName
                                    })]
                                }, e.channelId))
                            })]
                        }), n && (0,
                        s.jsxs)("div", {
                            className: "mt-8",
                            children: [(0,
                            s.jsx)("div", {
                                className: "px-5 mb-3",
                                children: (0,
                                s.jsx)("h3", {
                                    className: "text-text-muted text-xs font-bold uppercase tracking-widest",
                                    children: "Вы"
                                })
                            }), (0,
                            s.jsxs)("div", {
                                className: "space-y-1",
                                children: [(0,
                                s.jsx)(b, {
                                    href: "/channel/".concat(n.id),
                                    icon: (0,
                                    s.jsx)("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        })
                                    }),
                                    label: "Ваш канал",
                                    index: 8
                                }), (0,
                                s.jsx)(b, {
                                    onClick: () => c("history" === l ? "main" : "history"),
                                    icon: (0,
                                    s.jsx)("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        })
                                    }),
                                    label: "История",
                                    badge: d.length,
                                    index: 9
                                }), (0,
                                s.jsx)(b, {
                                    href: "/studio/playlists",
                                    icon: (0,
                                    s.jsx)("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 10h16M4 14h16M4 18h16"
                                        })
                                    }),
                                    label: "Плейлисты",
                                    index: 10
                                }), (0,
                                s.jsx)(b, {
                                    onClick: () => c("liked" === l ? "main" : "liked"),
                                    icon: (0,
                                    s.jsx)("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        })
                                    }),
                                    label: "Понравившиеся",
                                    badge: h.length,
                                    index: 11
                                }), (0,
                                s.jsx)(b, {
                                    href: "/studio",
                                    icon: (0,
                                    s.jsx)("svg", {
                                        className: "w-6 h-6",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            d: "M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"
                                        })
                                    }),
                                    label: "Ваши видео",
                                    index: 12
                                })]
                            })]
                        }), "history" === l && (0,
                        s.jsxs)("div", {
                            className: "mt-6 mx-2 p-5 glass-card rounded-3xl animate-spring",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex items-center justify-between mb-5",
                                children: [(0,
                                s.jsx)("h3", {
                                    className: "text-text-primary font-bold text-lg",
                                    children: "История просмотров"
                                }), (0,
                                s.jsx)("button", {
                                    onClick: () => c("main"),
                                    className: "p-2 hover:bg-white/10 rounded-xl transition-all duration-300 hover:rotate-90",
                                    children: (0,
                                    s.jsx)("svg", {
                                        className: "w-5 h-5 text-text-secondary",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })]
                            }), 0 === d.length ? (0,
                            s.jsx)("p", {
                                className: "text-text-secondary text-sm text-center py-6",
                                children: "История пуста"
                            }) : (0,
                            s.jsx)("div", {
                                className: "space-y-2 max-h-72 overflow-y-auto pr-1",
                                children: d.map( (e, t) => (0,
                                s.jsxs)(a.default, {
                                    href: "/watch/".concat(e.id),
                                    onClick: j,
                                    className: "flex gap-3 p-3 hover:bg-white/[0.06] rounded-2xl transition-all duration-300 group animate-smooth-appear",
                                    style: {
                                        animationDelay: "".concat(40 * t, "ms")
                                    },
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-24 h-14 rounded-xl bg-white/5 overflow-hidden flex-shrink-0 group-hover:ring-2 ring-purple-500/30 transition-all duration-300",
                                        children: (0,
                                        s.jsx)("img", {
                                            src: e.thumbnailUrl,
                                            alt: "",
                                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [(0,
                                        s.jsx)("p", {
                                            className: "text-text-primary text-sm line-clamp-2 font-medium group-hover:text-white transition-colors",
                                            children: e.title
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-text-muted text-xs mt-1",
                                            children: e.authorName
                                        })]
                                    })]
                                }, e.id))
                            })]
                        }), "liked" === l && (0,
                        s.jsxs)("div", {
                            className: "mt-6 mx-2 p-5 glass-card rounded-3xl animate-spring",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex items-center justify-between mb-5",
                                children: [(0,
                                s.jsx)("h3", {
                                    className: "text-text-primary font-bold text-lg",
                                    children: "Понравившиеся"
                                }), (0,
                                s.jsx)("button", {
                                    onClick: () => c("main"),
                                    className: "p-2 hover:bg-white/10 rounded-xl transition-all duration-300 hover:rotate-90",
                                    children: (0,
                                    s.jsx)("svg", {
                                        className: "w-5 h-5 text-text-secondary",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })]
                            }), 0 === h.length ? (0,
                            s.jsx)("p", {
                                className: "text-text-secondary text-sm text-center py-6",
                                children: "Нет понравившихся видео"
                            }) : (0,
                            s.jsx)("div", {
                                className: "space-y-2 max-h-72 overflow-y-auto pr-1",
                                children: h.map( (e, t) => (0,
                                s.jsxs)(a.default, {
                                    href: "/watch/".concat(e.id),
                                    onClick: j,
                                    className: "flex gap-3 p-3 hover:bg-white/[0.06] rounded-2xl transition-all duration-300 group animate-smooth-appear",
                                    style: {
                                        animationDelay: "".concat(40 * t, "ms")
                                    },
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-24 h-14 rounded-xl bg-white/5 overflow-hidden flex-shrink-0 group-hover:ring-2 ring-purple-500/30 transition-all duration-300",
                                        children: (0,
                                        s.jsx)("img", {
                                            src: e.thumbnailUrl,
                                            alt: "",
                                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [(0,
                                        s.jsx)("p", {
                                            className: "text-text-primary text-sm line-clamp-2 font-medium group-hover:text-white transition-colors",
                                            children: e.title
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-text-muted text-xs mt-1",
                                            children: e.authorName
                                        })]
                                    })]
                                }, e.id))
                            })]
                        }), !n && (0,
                        s.jsxs)("div", {
                            className: "mt-8 mx-2 p-6 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent rounded-3xl border border-purple-500/20 animate-smooth-appear",
                            children: [(0,
                            s.jsx)("p", {
                                className: "text-text-secondary text-sm mb-5 leading-relaxed",
                                children: "Войдите, чтобы ставить лайки, комментировать и подписываться."
                            }), (0,
                            s.jsxs)(a.default, {
                                href: "/login",
                                onClick: j,
                                className: "flex items-center justify-center gap-3 w-full px-5 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white rounded-2xl font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] hover:-translate-y-0.5",
                                children: [(0,
                                s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0,
                                    s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    })
                                }), "Войти"]
                            })]
                        })]
                    })]
                })]
            })
        }
        function c() {
            let {user: e, loading: t, logout: r} = (0,
            o.a)()
              , c = (0,
            n.useRouter)()
              , [d,u] = (0,
            i.useState)("")
              , [h,x] = (0,
            i.useState)(!1)
              , [m,p] = (0,
            i.useState)(!1)
              , f = async () => {
                try {
                    await r()
                } catch (e) {
                    console.error("Logout error:", e)
                }
            }
              , v = e => {
                e.preventDefault(),
                d.trim() && c.push("/search?q=".concat(encodeURIComponent(d.trim())))
            }
            ;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(l, {
                    isOpen: m,
                    onClose: () => p(!1)
                }), (0,
                s.jsxs)("header", {
                    className: "bg-surface border-b border-border sticky top-0 z-40",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4 h-14 flex items-center justify-between",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0,
                            s.jsx)("button", {
                                onClick: () => p(!0),
                                className: "p-2 hover:bg-surface-hover rounded-full transition-colors",
                                title: "Меню",
                                children: (0,
                                s.jsx)("svg", {
                                    className: "w-6 h-6 text-text-primary",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0,
                                    s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                                })
                            }), (0,
                            s.jsxs)(a.default, {
                                href: "/",
                                className: "flex items-center gap-2",
                                children: [(0,
                                s.jsxs)("svg", {
                                    viewBox: "0 0 32 32",
                                    className: "h-8 w-8",
                                    fill: "none",
                                    children: [(0,
                                    s.jsx)("rect", {
                                        x: "2",
                                        y: "6",
                                        width: "28",
                                        height: "20",
                                        rx: "4",
                                        fill: "url(#purpleGradient)"
                                    }), (0,
                                    s.jsx)("path", {
                                        d: "M13 11L21 16L13 21V11Z",
                                        fill: "white"
                                    }), (0,
                                    s.jsx)("defs", {
                                        children: (0,
                                        s.jsxs)("linearGradient", {
                                            id: "purpleGradient",
                                            x1: "2",
                                            y1: "6",
                                            x2: "30",
                                            y2: "26",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [(0,
                                            s.jsx)("stop", {
                                                stopColor: "#9333EA"
                                            }), (0,
                                            s.jsx)("stop", {
                                                offset: "1",
                                                stopColor: "#7C3AED"
                                            })]
                                        })
                                    })]
                                }), (0,
                                s.jsxs)("span", {
                                    className: "text-text-primary text-xl font-bold tracking-tight",
                                    children: ["Hols", (0,
                                    s.jsx)("span", {
                                        className: "text-purple-500",
                                        children: "Tube"
                                    })]
                                })]
                            })]
                        }), (0,
                        s.jsxs)(a.default, {
                            href: "/shorts",
                            className: "group flex items-center gap-2 px-3 py-1.5 hover:bg-surface-hover rounded-lg transition-all ml-4",
                            children: [(0,
                            s.jsxs)("svg", {
                                className: "w-6 h-6",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: [(0,
                                s.jsx)("rect", {
                                    x: "6",
                                    y: "3",
                                    width: "12",
                                    height: "18",
                                    rx: "6",
                                    fill: "url(#shortsGradient)",
                                    transform: "rotate(10 12 12)"
                                }), (0,
                                s.jsx)("path", {
                                    d: "M10 8.5v7l5.5-3.5L10 8.5z",
                                    fill: "white"
                                }), (0,
                                s.jsx)("defs", {
                                    children: (0,
                                    s.jsxs)("linearGradient", {
                                        id: "shortsGradient",
                                        x1: "6",
                                        y1: "3",
                                        x2: "18",
                                        y2: "21",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0,
                                        s.jsx)("stop", {
                                            stopColor: "#FF0050"
                                        }), (0,
                                        s.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#FF4D4D"
                                        })]
                                    })
                                })]
                            }), (0,
                            s.jsx)("span", {
                                className: "text-text-secondary group-hover:text-white font-medium text-sm hidden sm:inline",
                                children: "Shorts"
                            })]
                        }), (0,
                        s.jsx)("form", {
                            onSubmit: v,
                            className: "hidden md:flex flex-1 max-w-xl mx-4",
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex w-full",
                                children: [(0,
                                s.jsx)("input", {
                                    type: "text",
                                    value: d,
                                    onChange: e => u(e.target.value),
                                    placeholder: "Поиск",
                                    className: "flex-1 px-4 py-2 bg-surface-light border border-border rounded-l-full text-text-primary placeholder-text-secondary focus:outline-none focus:border-purple-500"
                                }), (0,
                                s.jsx)("button", {
                                    type: "submit",
                                    className: "px-5 py-2 bg-surface-light border border-l-0 border-border rounded-r-full hover:bg-surface text-text-secondary hover:text-text-primary transition-colors",
                                    children: (0,
                                    s.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        })
                                    })
                                })]
                            })
                        }), (0,
                        s.jsx)("button", {
                            onClick: () => x(!h),
                            className: "md:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-full transition-colors ml-auto mr-2",
                            children: (0,
                            s.jsx)("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0,
                                s.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                })
                            })
                        }), (0,
                        s.jsx)("nav", {
                            className: "flex items-center gap-3",
                            children: t ? (0,
                            s.jsx)("div", {
                                className: "h-8 w-20 bg-surface-light rounded animate-pulse"
                            }) : e ? (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsxs)(a.default, {
                                    href: "/upload",
                                    className: "flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors font-medium",
                                    children: [(0,
                                    s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "w-5 h-5",
                                        children: (0,
                                        s.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",
                                            clipRule: "evenodd"
                                        })
                                    }), (0,
                                    s.jsx)("span", {
                                        className: "hidden sm:inline",
                                        children: "Upload"
                                    })]
                                }), (0,
                                s.jsxs)(a.default, {
                                    href: "/studio",
                                    className: "flex items-center gap-2 px-3 py-2 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-full transition-colors",
                                    title: "Creative Studio",
                                    children: [(0,
                                    s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "w-5 h-5",
                                        children: (0,
                                        s.jsx)("path", {
                                            d: "M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"
                                        })
                                    }), (0,
                                    s.jsx)("span", {
                                        className: "hidden md:inline",
                                        children: "Studio"
                                    })]
                                }), (0,
                                s.jsxs)(a.default, {
                                    href: "/channel/".concat(e.id),
                                    className: "flex items-center gap-2 px-3 py-2 text-text-primary hover:bg-surface-hover rounded-full transition-colors",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-medium",
                                        children: e.displayName.charAt(0).toUpperCase()
                                    }), (0,
                                    s.jsx)("span", {
                                        className: "hidden sm:inline",
                                        children: e.displayName
                                    })]
                                }), (0,
                                s.jsx)(a.default, {
                                    href: "/settings",
                                    className: "p-2 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-full transition-colors",
                                    title: "Настройки",
                                    children: (0,
                                    s.jsxs)("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: [(0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        }), (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        })]
                                    })
                                }), (0,
                                s.jsx)("button", {
                                    onClick: f,
                                    className: "p-2 text-text-secondary hover:text-text-primary hover:bg-surface-hover rounded-full transition-colors",
                                    title: "Выйти",
                                    children: (0,
                                    s.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        })
                                    })
                                }), e.isAdmin && (0,
                                s.jsx)(a.default, {
                                    href: "/admin",
                                    className: "p-2 text-orange-400 hover:text-orange-300 hover:bg-surface-hover rounded-full transition-colors",
                                    title: "Админ-панель",
                                    children: (0,
                                    s.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: (0,
                                        s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        })
                                    })
                                })]
                            }) : (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)(a.default, {
                                    href: "/login",
                                    className: "px-4 py-2 text-text-primary hover:bg-surface-hover rounded-full transition-colors",
                                    children: "Login"
                                }), (0,
                                s.jsx)(a.default, {
                                    href: "/register",
                                    className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors font-medium",
                                    children: "Register"
                                })]
                            })
                        })]
                    }), h && (0,
                    s.jsx)("div", {
                        className: "md:hidden px-4 pb-3 border-t border-border",
                        children: (0,
                        s.jsxs)("form", {
                            onSubmit: v,
                            className: "flex mt-3",
                            children: [(0,
                            s.jsx)("input", {
                                type: "text",
                                value: d,
                                onChange: e => u(e.target.value),
                                placeholder: "Поиск",
                                className: "flex-1 px-4 py-2 bg-surface-light border border-border rounded-l-full text-text-primary placeholder-text-secondary focus:outline-none focus:border-purple-500",
                                autoFocus: !0
                            }), (0,
                            s.jsx)("button", {
                                type: "submit",
                                className: "px-5 py-2 bg-surface-light border border-l-0 border-border rounded-r-full hover:bg-surface text-text-secondary hover:text-text-primary transition-colors",
                                children: (0,
                                s.jsx)("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0,
                                    s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    })
                                })
                            })]
                        })
                    })]
                })]
            })
        }
    },
    4362: function(e, t, r) {
        "use strict";
        r.d(t, {
            AuthProvider: function() {
                return d
            },
            a: function() {
                return c
            }
        });
        var s = r(7437)
          , a = r(2265)
          , i = r(5526);
        let n = "holstube_user_cache";
        function o(e) {
            try {
                e ? localStorage.setItem(n, JSON.stringify(e)) : localStorage.removeItem(n)
            } catch (e) {}
        }
        let l = (0,
        a.createContext)(void 0);
        function c() {
            let e = (0,
            a.useContext)(l);
            if (void 0 === e)
                throw Error("useAuth must be used within an AuthProvider");
            return e
        }
        function d(e) {
            let {children: t} = e
              , [r,c] = (0,
            a.useState)(null)
              , [d,u] = (0,
            a.useState)(null)
              , [h,x] = (0,
            a.useState)(null)
              , [m,p] = (0,
            a.useState)(!0)
              , [f,v] = (0,
            a.useState)(!1)
              , [g,j] = (0,
            a.useState)(null)
              , b = async e => {
                var t, r, s, a, l;
                let d = function() {
                    try {
                        let e = localStorage.getItem(n);
                        if (!e)
                            return null;
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                }();
                d && d.id === e.id && c(d);
                try {
                    let s = i.O.from("users").select("*").or("auth_id.eq.".concat(e.id, ",id.eq.").concat(e.id)).single()
                      , a = new Promise(e => setTimeout( () => e({
                        data: null,
                        error: Error("Timeout")
                    }), 3e3))
                      , {data: n, error: u} = await Promise.race([s, a]);
                    if (!u && n) {
                        let t = {
                            id: (l = {
                                ...n,
                                email: e.email || ""
                            }).id,
                            email: l.email,
                            displayName: l.display_name,
                            avatarUrl: l.avatar_url,
                            bannerUrl: l.banner_url,
                            subscriberCount: l.subscriber_count || 0,
                            isVerified: l.is_verified || !1,
                            verificationProofUrl: l.verification_proof_url,
                            isAdmin: l.is_admin || !1,
                            createdAt: {
                                seconds: Math.floor(new Date(l.created_at).getTime() / 1e3),
                                nanoseconds: 0,
                                toDate: () => new Date(l.created_at)
                            }
                        };
                        c(t),
                        o(t);
                        return
                    }
                    if (d && d.id === e.id)
                        return;
                    let h = (null === (t = e.user_metadata) || void 0 === t ? void 0 : t.display_name) || (null === (r = e.email) || void 0 === r ? void 0 : r.split("@")[0]) || "User"
                      , x = {
                        id: e.id,
                        email: e.email || "",
                        displayName: h,
                        subscriberCount: 0,
                        isVerified: !1,
                        isAdmin: !1,
                        createdAt: {
                            seconds: Math.floor(Date.now() / 1e3),
                            nanoseconds: 0,
                            toDate: () => new Date
                        }
                    };
                    c(x),
                    o(x)
                } catch (r) {
                    if (console.error("loadUserProfile error:", r),
                    d && d.id === e.id)
                        return;
                    let t = (null === (s = e.user_metadata) || void 0 === s ? void 0 : s.display_name) || (null === (a = e.email) || void 0 === a ? void 0 : a.split("@")[0]) || "User";
                    c({
                        id: e.id,
                        email: e.email || "",
                        displayName: t,
                        subscriberCount: 0,
                        isVerified: !1,
                        isAdmin: !1,
                        createdAt: {
                            seconds: Math.floor(Date.now() / 1e3),
                            nanoseconds: 0,
                            toDate: () => new Date
                        }
                    })
                }
            }
            ;
            (0,
            a.useEffect)( () => {
                let e = !0;
                (async () => {
                    try {
                        var t;
                        let {data: {session: r}} = await i.O.auth.getSession();
                        if (!e)
                            return;
                        x(r),
                        u(null !== (t = null == r ? void 0 : r.user) && void 0 !== t ? t : null),
                        (null == r ? void 0 : r.user) && await b(r.user)
                    } catch (e) {
                        console.error("Session init error:", e)
                    } finally {
                        e && p(!1)
                    }
                }
                )();
                let {data: {subscription: t}} = i.O.auth.onAuthStateChange(async (t, r) => {
                    var s;
                    if (e) {
                        if (x(r),
                        u(null !== (s = null == r ? void 0 : r.user) && void 0 !== s ? s : null),
                        null == r ? void 0 : r.user)
                            try {
                                await b(r.user)
                            } catch (e) {
                                console.error("Load profile error:", e)
                            }
                        else
                            c(null);
                        p(!1)
                    }
                }
                )
                  , r = () => {
                    "visible" === document.visibilityState && e && i.O.auth.refreshSession().catch( () => {
                        i.O.auth.getSession().catch( () => {}
                        )
                    }
                    )
                }
                ;
                return document.addEventListener("visibilitychange", r),
                () => {
                    e = !1,
                    t.unsubscribe(),
                    document.removeEventListener("visibilitychange", r)
                }
            }
            , []);
            let w = async (e, t, r) => {
                if (t.length < 6)
                    throw Error("Пароль должен быть минимум 6 символов");
                let {data: s, error: a} = await i.O.auth.signUp({
                    email: e.toLowerCase(),
                    password: t,
                    options: {
                        data: {
                            display_name: r
                        }
                    }
                });
                if (a) {
                    if (a.message.includes("already registered"))
                        throw Error("Аккаунт с этим email уже существует");
                    if (a.message.includes("rate limit") || 429 === a.status)
                        throw Error("Слишком много попыток. Подождите несколько минут и попробуйте снова.");
                    throw Error(a.message)
                }
                if (!s.user)
                    throw Error("Ошибка регистрации");
                return await new Promise(e => setTimeout(e, 1500)),
                await b(s.user),
                {
                    needsConfirmation: !1
                }
            }
              , y = async e => {
                let {error: t} = await i.O.auth.resend({
                    type: "signup",
                    email: e.toLowerCase(),
                    options: {
                        emailRedirectTo: "".concat(window.location.origin, "/auth/callback")
                    }
                });
                if (t)
                    throw Error("Не удалось отправить письмо. Попробуйте позже.")
            }
              , N = async (e, t) => {
                o(null);
                let {data: r, error: s} = await i.O.auth.signInWithPassword({
                    email: e.toLowerCase(),
                    password: t
                });
                if (s)
                    throw Error("Неверный email или пароль");
                r.user && await b(r.user)
            }
              , k = async () => {
                await i.O.auth.signOut(),
                c(null),
                u(null),
                x(null),
                o(null)
            }
              , C = async () => {
                d && await b(d)
            }
            ;
            return (0,
            s.jsx)(l.Provider, {
                value: {
                    user: r,
                    supabaseUser: d,
                    session: h,
                    loading: m,
                    needsEmailConfirmation: f,
                    pendingEmail: g,
                    register: w,
                    login: N,
                    logout: k,
                    refreshUser: C,
                    resendConfirmation: y,
                    clearPendingEmail: () => {
                        v(!1),
                        j(null)
                    }
                },
                children: t
            })
        }
    },
    5526: function(e, t, r) {
        "use strict";
        r.d(t, {
            O: function() {
                return a
            }
        });
        var s = r(3053);
        r(257);
        let a = (0,
        s.eI)("https://rkwgctfqvtyoalfibpyk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrd2djdGZxdnR5b2FsZmlicHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0NDE0MTMsImV4cCI6MjA4MzAxNzQxM30.CCRzdRWeTGCMvJCiIJ5XTohDNXKR7RORF2oEMKEhsN8", {
            auth: {
                persistSession: !0,
                storageKey: "holstube-auth",
                storage: window.localStorage,
                autoRefreshToken: !0,
                detectSessionInUrl: !0
            }
        })
    },
    2778: function() {}
}, function(e) {
    e.O(0, [461, 972, 53, 971, 117, 744], function() {
        return e(e.s = 933)
    }),
    _N_E = e.O()
}
]);
