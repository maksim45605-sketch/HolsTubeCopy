(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[90], {
    1411: function(e, t, l) {
        Promise.resolve().then(l.bind(l, 3925))
    },
    7648: function(e, t, l) {
        "use strict";
        l.d(t, {
            default: function() {
                return a.a
            }
        });
        var r = l(2972)
          , a = l.n(r)
    },
    3925: function(e, t, l) {
        "use strict";
        l.r(t),
        l.d(t, {
            default: function() {
                return c
            }
        });
        var r = l(7437)
          , a = l(2265)
          , s = l(7648)
          , n = l(7944)
          , i = l(4362)
          , o = l(6511);
        function c() {
            let {user: e} = (0,
            i.a)()
              , [t,l] = (0,
            a.useState)([])
              , [o,c] = (0,
            a.useState)(0)
              , [u,h] = (0,
            a.useState)(!0)
              , [m,f] = (0,
            a.useState)(null)
              , x = (0,
            a.useRef)(null);
            (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        let e = await n.rT();
                        l(e)
                    } catch (e) {
                        console.error("Error loading shorts:", e),
                        f("Ошибка загрузки")
                    } finally {
                        h(!1)
                    }
                }
                )()
            }
            , []);
            let p = (0,
            a.useCallback)( () => {
                if (!x.current)
                    return;
                let e = Math.round(x.current.scrollTop / x.current.clientHeight);
                e !== o && e < t.length && c(e)
            }
            , [o, t.length])
              , v = e => {
                if (!x.current)
                    return;
                let t = x.current.clientHeight;
                x.current.scrollTo({
                    top: e * t,
                    behavior: "smooth"
                })
            }
              , g = () => {
                o < t.length - 1 && v(o + 1)
            }
              , b = () => {
                o > 0 && v(o - 1)
            }
            ;
            return ((0,
            a.useEffect)( () => {
                let e = e => {
                    ("ArrowDown" === e.key || "j" === e.key) && g(),
                    ("ArrowUp" === e.key || "k" === e.key) && b()
                }
                ;
                return window.addEventListener("keydown", e),
                () => window.removeEventListener("keydown", e)
            }
            , [o, t.length]),
            u) ? (0,
            r.jsx)("div", {
                className: "h-screen flex items-center justify-center bg-black",
                children: (0,
                r.jsxs)("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"
                    }), (0,
                    r.jsx)("span", {
                        className: "text-white/60 text-sm",
                        children: "Загрузка Shorts..."
                    })]
                })
            }) : m ? (0,
            r.jsx)("div", {
                className: "h-screen flex items-center justify-center bg-black",
                children: (0,
                r.jsxs)("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center",
                        children: (0,
                        r.jsx)("span", {
                            className: "text-3xl",
                            children: "\uD83D\uDD0C"
                        })
                    }), (0,
                    r.jsx)("span", {
                        className: "text-white text-lg",
                        children: m
                    }), (0,
                    r.jsx)("button", {
                        onClick: () => window.location.reload(),
                        className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",
                        children: "Обновить"
                    })]
                })
            }) : 0 === t.length ? (0,
            r.jsxs)("div", {
                className: "h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white",
                children: [(0,
                r.jsx)("div", {
                    className: "w-24 h-24 mb-6 bg-purple-600/20 rounded-full flex items-center justify-center",
                    children: (0,
                    r.jsx)("svg", {
                        className: "w-12 h-12 text-purple-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0,
                        r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        })
                    })
                }), (0,
                r.jsx)("h2", {
                    className: "text-2xl font-bold mb-2",
                    children: "Пока нет Shorts"
                }), (0,
                r.jsx)("p", {
                    className: "text-gray-400 mb-6 text-center px-4",
                    children: "Будьте первым кто загрузит вертикальное видео!"
                }), (0,
                r.jsx)(s.default, {
                    href: "/upload",
                    className: "px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all hover:scale-105 font-medium",
                    children: "Загрузить Short"
                }), (0,
                r.jsx)(s.default, {
                    href: "/",
                    className: "mt-4 text-gray-400 hover:text-white transition-colors",
                    children: "← Вернуться на главную"
                })]
            }) : (0,
            r.jsxs)("div", {
                className: "h-screen bg-black overflow-hidden",
                children: [(0,
                r.jsx)("div", {
                    className: "fixed top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/80 to-transparent p-4",
                    children: (0,
                    r.jsxs)("div", {
                        className: "flex items-center justify-between max-w-lg mx-auto",
                        children: [(0,
                        r.jsxs)(s.default, {
                            href: "/",
                            className: "flex items-center gap-2 text-white hover:text-purple-400 transition-colors",
                            children: [(0,
                            r.jsx)("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0,
                                r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                })
                            }), (0,
                            r.jsx)("span", {
                                className: "font-medium",
                                children: "Назад"
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0,
                            r.jsx)("div", {
                                className: "px-3 py-1 bg-purple-600 rounded-full",
                                children: (0,
                                r.jsx)("span", {
                                    className: "text-white text-sm font-medium",
                                    children: "Shorts"
                                })
                            })
                        })]
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-3",
                    children: [(0,
                    r.jsx)("button", {
                        onClick: b,
                        disabled: 0 === o,
                        className: "group p-4 bg-white/10 hover:bg-purple-600 rounded-full disabled:opacity-30 disabled:hover:bg-white/10 transition-all hover:scale-110",
                        title: "Предыдущий (↑)",
                        children: (0,
                        r.jsx)("svg", {
                            className: "w-6 h-6 text-white",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0,
                            r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 15l7-7 7 7"
                            })
                        })
                    }), (0,
                    r.jsx)("button", {
                        onClick: g,
                        disabled: o === t.length - 1,
                        className: "group p-4 bg-white/10 hover:bg-purple-600 rounded-full disabled:opacity-30 disabled:hover:bg-white/10 transition-all hover:scale-110",
                        title: "Следующий (↓)",
                        children: (0,
                        r.jsx)("svg", {
                            className: "w-6 h-6 text-white",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0,
                            r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7"
                            })
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    ref: x,
                    onScroll: p,
                    className: "h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide",
                    style: {
                        scrollSnapType: "y mandatory"
                    },
                    children: t.map( (a, s) => (0,
                    r.jsx)(d, {
                        short: a,
                        isActive: s === o,
                        user: e,
                        onUpdate: e => {
                            l(t => t.map(t => t.id === e.id ? e : t))
                        }
                        ,
                        index: s,
                        total: t.length
                    }, a.id))
                }), (0,
                r.jsx)("div", {
                    className: "md:hidden fixed right-2 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-1",
                    children: t.slice(Math.max(0, o - 2), Math.min(t.length, o + 3)).map( (e, t) => {
                        let l = Math.max(0, o - 2) + t;
                        return (0,
                        r.jsx)("button", {
                            onClick: () => v(l),
                            className: "w-1.5 rounded-full transition-all ".concat(l === o ? "h-8 bg-purple-500" : "h-4 bg-white/30 hover:bg-white/50")
                        }, l)
                    }
                    )
                }), (0,
                r.jsx)("div", {
                    className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full",
                    children: (0,
                    r.jsxs)("span", {
                        className: "text-white/80 text-sm",
                        children: [o + 1, " / ", t.length]
                    })
                })]
            })
        }
        function d(e) {
            let {short: t, isActive: l, user: i, onUpdate: c, index: d, total: u} = e
              , h = (0,
            a.useRef)(null)
              , [m,f] = (0,
            a.useState)(!1)
              , [x,p] = (0,
            a.useState)(!1)
              , [v,g] = (0,
            a.useState)(!1)
              , [b,w] = (0,
            a.useState)(!0)
              , [j,y] = (0,
            a.useState)(!1)
              , [N,k] = (0,
            a.useState)(!1)
              , C = function(e) {
                for (let t of [/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/, /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/]) {
                    let l = e.match(t);
                    if (l)
                        return l[1]
                }
                return null
            }(t.videoUrl)
              , S = function(e) {
                let t = e.match(/vk\.com\/video(-?\d+_\d+)/);
                return t ? "oid=".concat(t[1].split("_")[0], "&id=").concat(t[1].split("_")[1]) : null
            }(t.videoUrl)
              , L = function(e) {
                let t = e.match(/rutube\.ru\/video\/([a-zA-Z0-9]+)/);
                return t ? t[1] : null
            }(t.videoUrl)
              , M = !!(C || S || L);
            (0,
            a.useEffect)( () => {
                (async () => {
                    if (i) {
                        let[e,l] = await Promise.all([n.YK(i.id, t.authorId), n._q(t.id, i.id)]);
                        p(e),
                        f("like" === l)
                    }
                }
                )()
            }
            , [i, t.authorId, t.id]),
            (0,
            a.useEffect)( () => {
                if (M) {
                    l && n.Yh(t.id);
                    return
                }
                h.current && (l ? (h.current.play().then( () => y(!0)).catch( () => {}
                ),
                n.Yh(t.id)) : (h.current.pause(),
                h.current.currentTime = 0,
                y(!1)))
            }
            , [l, t.id, M]);
            let _ = async () => {
                if (!i)
                    return;
                let e = !m;
                f(e),
                e ? await n.E6(t.id, i.id, "like") : await n.WO(t.id, i.id);
                let l = e ? t.likes + 1 : Math.max(0, t.likes - 1);
                c({
                    ...t,
                    likes: l
                })
            }
              , z = async () => {
                if (i && !v) {
                    g(!0);
                    try {
                        if (x) {
                            if ((await n.r1(i.id, t.authorId)).success || !x) {
                                p(!1);
                                let e = "subscriptions_".concat(i.id)
                                  , l = localStorage.getItem(e);
                                if (l) {
                                    let r = JSON.parse(l);
                                    r = r.filter(e => e.channelId !== t.authorId),
                                    localStorage.setItem(e, JSON.stringify(r))
                                }
                            }
                        } else if ((await n.Ld(i.id, t.authorId)).success || x) {
                            p(!0);
                            let e = "subscriptions_".concat(i.id)
                              , l = localStorage.getItem(e)
                              , r = l ? JSON.parse(l) : [];
                            (r = r.filter(e => e.channelId !== t.authorId)).unshift({
                                channelId: t.authorId,
                                channelName: t.authorName,
                                avatarUrl: void 0
                            }),
                            localStorage.setItem(e, JSON.stringify(r))
                        }
                    } catch (e) {
                        console.error("Error toggling subscription:", e)
                    } finally {
                        g(!1)
                    }
                }
            }
            ;
            return (0,
            r.jsxs)("div", {
                className: "h-screen w-full snap-start relative flex items-center justify-center bg-black",
                children: [C ? (0,
                r.jsx)("iframe", {
                    className: "h-full w-full object-contain",
                    src: "https://www.youtube.com/embed/".concat(C, "?autoplay=").concat(l ? 1 : 0, "&mute=1&loop=1&playlist=").concat(C, "&playsinline=1"),
                    title: t.title,
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0
                }) : S ? (0,
                r.jsx)("iframe", {
                    className: "h-full w-full object-contain",
                    src: "https://vk.com/video_ext.php?".concat(S, "&autoplay=").concat(l ? 1 : 0, "&loop=1"),
                    title: t.title,
                    frameBorder: "0",
                    allow: "autoplay; encrypted-media; fullscreen; picture-in-picture",
                    allowFullScreen: !0
                }) : L ? (0,
                r.jsx)("iframe", {
                    className: "h-full w-full object-contain",
                    src: "https://rutube.ru/play/embed/".concat(L, "?autoplay=").concat(l ? 1 : 0),
                    title: t.title,
                    frameBorder: "0",
                    allow: "autoplay; encrypted-media; fullscreen",
                    allowFullScreen: !0
                }) : (0,
                r.jsx)("video", {
                    ref: h,
                    src: t.videoUrl,
                    className: "h-full max-h-screen w-auto max-w-full object-contain cursor-pointer",
                    loop: !0,
                    muted: b,
                    playsInline: !0,
                    onClick: () => {
                        !M && h.current && (j ? (h.current.pause(),
                        y(!1)) : (h.current.play(),
                        y(!0)),
                        k(!0),
                        setTimeout( () => k(!1), 500))
                    }
                }), (0,
                r.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"
                }), (0,
                r.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none"
                }), N && (0,
                r.jsx)("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-ping",
                    children: (0,
                    r.jsx)("div", {
                        className: "bg-black/60 rounded-full p-6",
                        children: j ? (0,
                        r.jsx)("svg", {
                            className: "w-12 h-12 text-white",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0,
                            r.jsx)("path", {
                                d: "M8 5v14l11-7z"
                            })
                        }) : (0,
                        r.jsx)("svg", {
                            className: "w-12 h-12 text-white",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0,
                            r.jsx)("path", {
                                d: "M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                            })
                        })
                    })
                }), (0,
                r.jsx)("button", {
                    onClick: e => {
                        e.stopPropagation(),
                        !M && h.current && (h.current.muted = !b,
                        w(!b))
                    }
                    ,
                    className: "absolute top-20 right-4 p-3 bg-black/40 hover:bg-black/60 rounded-full transition-colors z-10",
                    children: b ? (0,
                    r.jsxs)("svg", {
                        className: "w-5 h-5 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [(0,
                        r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        }), (0,
                        r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                        })]
                    }) : (0,
                    r.jsx)("svg", {
                        className: "w-5 h-5 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0,
                        r.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        })
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "absolute right-4 bottom-36 flex flex-col items-center gap-5",
                    children: [(0,
                    r.jsxs)("button", {
                        onClick: _,
                        className: "flex flex-col items-center gap-1 group",
                        children: [(0,
                        r.jsx)("div", {
                            className: "p-3.5 rounded-full transition-all group-hover:scale-110 ".concat(m ? "bg-red-500" : "bg-white/10 group-hover:bg-white/20"),
                            children: (0,
                            r.jsx)("svg", {
                                className: "w-7 h-7 text-white",
                                fill: m ? "currentColor" : "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0,
                                r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                })
                            })
                        }), (0,
                        r.jsx)("span", {
                            className: "text-white text-xs font-medium",
                            children: t.likes
                        })]
                    }), (0,
                    r.jsxs)(s.default, {
                        href: "/watch/".concat(t.id),
                        className: "flex flex-col items-center gap-1 group",
                        children: [(0,
                        r.jsx)("div", {
                            className: "p-3.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-all group-hover:scale-110",
                            children: (0,
                            r.jsx)("svg", {
                                className: "w-7 h-7 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0,
                                r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                })
                            })
                        }), (0,
                        r.jsx)("span", {
                            className: "text-white text-xs font-medium",
                            children: "Комм."
                        })]
                    }), (0,
                    r.jsxs)("button", {
                        className: "flex flex-col items-center gap-1 group",
                        children: [(0,
                        r.jsx)("div", {
                            className: "p-3.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-all group-hover:scale-110",
                            children: (0,
                            r.jsx)("svg", {
                                className: "w-7 h-7 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0,
                                r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                })
                            })
                        }), (0,
                        r.jsx)("span", {
                            className: "text-white text-xs font-medium",
                            children: "Поделиться"
                        })]
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "absolute bottom-8 left-4 right-20",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [(0,
                        r.jsx)(s.default, {
                            href: "/channel/".concat(t.authorId),
                            className: "relative",
                            children: (0,
                            r.jsx)("div", {
                                className: "w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5",
                                children: (0,
                                r.jsx)("div", {
                                    className: "w-full h-full rounded-full bg-black flex items-center justify-center text-white font-bold text-lg",
                                    children: t.authorName.charAt(0).toUpperCase()
                                })
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: "flex-1",
                            children: (0,
                            r.jsx)(s.default, {
                                href: "/channel/".concat(t.authorId),
                                className: "flex items-center gap-2",
                                children: (0,
                                r.jsx)("span", {
                                    className: "text-white font-semibold",
                                    children: t.authorName
                                })
                            })
                        }), i && i.id !== t.authorId && (0,
                        r.jsx)("button", {
                            onClick: z,
                            disabled: v,
                            className: "px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ".concat(x ? "bg-white/20 text-white border border-white/30" : "bg-purple-500 hover:bg-purple-600 text-white"),
                            children: v ? "..." : x ? "✓ Подписан" : "Подписаться"
                        })]
                    }), (0,
                    r.jsx)("p", {
                        className: "text-white text-sm font-medium mb-1 line-clamp-2",
                        children: t.title
                    }), (0,
                    r.jsx)("p", {
                        className: "text-white/60 text-xs",
                        children: (0,
                        o.xR)(t.views)
                    })]
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
        var r = l(7437);
        let a = {
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
              , n = {
                sm: "w-3.5 h-3.5",
                md: "w-4 h-4",
                lg: "w-5 h-5"
            };
            if (!l || "none" === l)
                return null;
            let i = a[l] || a.blue;
            return (0,
            r.jsx)("span", {
                title: s ? i.title : void 0,
                children: "gold" === l ? (0,
                r.jsx)("svg", {
                    className: "".concat(n[t], " ").concat(i.color, " inline-block ml-1"),
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0,
                    r.jsx)("path", {
                        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    })
                }) : (0,
                r.jsx)("svg", {
                    className: "".concat(n[t], " ").concat(i.color, " inline-block ml-1"),
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0,
                    r.jsx)("path", {
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
                return c
            },
            xR: function() {
                return i
            }
        });
        var r = l(7437)
          , a = l(7648)
          , s = l(2265)
          , n = l(9853);
        function i(e) {
            return e >= 1e6 ? "".concat((e / 1e6).toFixed(1), "M просмотров") : e >= 1e3 ? "".concat((e / 1e3).toFixed(1), "K просмотров") : "".concat(e, " просмотров")
        }
        function o(e) {
            let t;
            let l = new Date;
            t = e instanceof Date ? e : e && "function" == typeof e.toDate ? e.toDate() : e && "seconds"in e ? new Date(1e3 * e.seconds) : new Date;
            let r = Math.floor(Math.floor((l.getTime() - t.getTime()) / 1e3) / 60)
              , a = Math.floor(r / 60)
              , s = Math.floor(a / 24)
              , n = Math.floor(s / 30)
              , i = Math.floor(s / 365);
            return i > 0 ? "".concat(i, " ").concat(1 === i ? "год" : i < 5 ? "года" : "лет", " назад") : n > 0 ? "".concat(n, " ").concat(1 === n ? "месяц" : n < 5 ? "месяца" : "месяцев", " назад") : s > 0 ? "".concat(s, " ").concat(1 === s ? "день" : s < 5 ? "дня" : "дней", " назад") : a > 0 ? "".concat(a, " ").concat(1 === a ? "час" : a < 5 ? "часа" : "часов", " назад") : r > 0 ? "".concat(r, " ").concat(1 === r ? "минуту" : r < 5 ? "минуты" : "минут", " назад") : "Только что"
        }
        function c(e) {
            let {id: t, title: l, thumbnailUrl: c, authorName: d, authorId: u, views: h, createdAt: m, isAuthorVerified: f} = e
              , [x,p] = (0,
            s.useState)(!1)
              , v = function(e) {
                for (let t of [/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/, /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/]) {
                    let l = e.match(t);
                    if (l)
                        return "https://img.youtube.com/vi/".concat(l[1], "/hqdefault.jpg")
                }
                return null
            }(c)
              , g = c.includes("drive.google.com") || c.includes("docs.google.com") || c.includes("vk.com/video") || c.includes("rutube.ru")
              , b = v || (g ? null : c)
              , w = !b || x || g;
            return (0,
            r.jsx)(a.default, {
                href: "/watch/".concat(t),
                className: "group block",
                children: (0,
                r.jsxs)("article", {
                    className: "flex flex-col gap-2",
                    children: [(0,
                    r.jsx)("div", {
                        className: "relative aspect-video bg-surface-light rounded-xl overflow-hidden",
                        children: w ? (0,
                        r.jsxs)("div", {
                            className: "absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/50 to-zinc-900",
                            children: [(0,
                            r.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-12 h-12 text-purple-400",
                                children: (0,
                                r.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
                                    clipRule: "evenodd"
                                })
                            }), (0,
                            r.jsx)("span", {
                                className: "text-xs text-zinc-400 mt-2 px-2 text-center line-clamp-2 max-w-[90%]",
                                children: l
                            })]
                        }) : (0,
                        r.jsx)("img", {
                            src: b,
                            alt: l,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-200",
                            onError: () => p(!0)
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex gap-3",
                        children: [(0,
                        r.jsx)(a.default, {
                            href: "/channel/".concat(u),
                            className: "flex-shrink-0",
                            onClick: e => e.stopPropagation(),
                            children: (0,
                            r.jsx)("div", {
                                className: "w-9 h-9 rounded-full bg-surface-light flex items-center justify-center text-text-secondary text-sm font-medium",
                                children: d.charAt(0).toUpperCase()
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: "flex-1 min-w-0",
                            children: [(0,
                            r.jsx)("h3", {
                                className: "text-text-primary font-medium line-clamp-2 text-sm leading-5 group-hover:text-primary transition-colors",
                                children: l
                            }), (0,
                            r.jsxs)(a.default, {
                                href: "/channel/".concat(u),
                                className: "text-text-secondary text-xs hover:text-text-primary transition-colors mt-1 flex items-center",
                                onClick: e => e.stopPropagation(),
                                children: [d, f && (0,
                                r.jsx)(n.Z, {
                                    size: "sm"
                                })]
                            }), (0,
                            r.jsxs)("p", {
                                className: "text-text-secondary text-xs mt-0.5",
                                children: [i(h), " • ", o(m)]
                            })]
                        })]
                    })]
                })
            })
        }
    },
    4362: function(e, t, l) {
        "use strict";
        l.d(t, {
            AuthProvider: function() {
                return d
            },
            a: function() {
                return c
            }
        });
        var r = l(7437)
          , a = l(2265)
          , s = l(5526);
        let n = "holstube_user_cache";
        function i(e) {
            try {
                e ? localStorage.setItem(n, JSON.stringify(e)) : localStorage.removeItem(n)
            } catch (e) {}
        }
        let o = (0,
        a.createContext)(void 0);
        function c() {
            let e = (0,
            a.useContext)(o);
            if (void 0 === e)
                throw Error("useAuth must be used within an AuthProvider");
            return e
        }
        function d(e) {
            let {children: t} = e
              , [l,c] = (0,
            a.useState)(null)
              , [d,u] = (0,
            a.useState)(null)
              , [h,m] = (0,
            a.useState)(null)
              , [f,x] = (0,
            a.useState)(!0)
              , [p,v] = (0,
            a.useState)(!1)
              , [g,b] = (0,
            a.useState)(null)
              , w = async e => {
                var t, l, r, a, o;
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
                    let r = s.O.from("users").select("*").or("auth_id.eq.".concat(e.id, ",id.eq.").concat(e.id)).single()
                      , a = new Promise(e => setTimeout( () => e({
                        data: null,
                        error: Error("Timeout")
                    }), 3e3))
                      , {data: n, error: u} = await Promise.race([r, a]);
                    if (!u && n) {
                        let t = {
                            id: (o = {
                                ...n,
                                email: e.email || ""
                            }).id,
                            email: o.email,
                            displayName: o.display_name,
                            avatarUrl: o.avatar_url,
                            bannerUrl: o.banner_url,
                            subscriberCount: o.subscriber_count || 0,
                            isVerified: o.is_verified || !1,
                            verificationProofUrl: o.verification_proof_url,
                            isAdmin: o.is_admin || !1,
                            createdAt: {
                                seconds: Math.floor(new Date(o.created_at).getTime() / 1e3),
                                nanoseconds: 0,
                                toDate: () => new Date(o.created_at)
                            }
                        };
                        c(t),
                        i(t);
                        return
                    }
                    if (d && d.id === e.id)
                        return;
                    let h = (null === (t = e.user_metadata) || void 0 === t ? void 0 : t.display_name) || (null === (l = e.email) || void 0 === l ? void 0 : l.split("@")[0]) || "User"
                      , m = {
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
                    c(m),
                    i(m)
                } catch (l) {
                    if (console.error("loadUserProfile error:", l),
                    d && d.id === e.id)
                        return;
                    let t = (null === (r = e.user_metadata) || void 0 === r ? void 0 : r.display_name) || (null === (a = e.email) || void 0 === a ? void 0 : a.split("@")[0]) || "User";
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
                        let {data: {session: l}} = await s.O.auth.getSession();
                        if (!e)
                            return;
                        m(l),
                        u(null !== (t = null == l ? void 0 : l.user) && void 0 !== t ? t : null),
                        (null == l ? void 0 : l.user) && await w(l.user)
                    } catch (e) {
                        console.error("Session init error:", e)
                    } finally {
                        e && x(!1)
                    }
                }
                )();
                let {data: {subscription: t}} = s.O.auth.onAuthStateChange(async (t, l) => {
                    var r;
                    if (e) {
                        if (m(l),
                        u(null !== (r = null == l ? void 0 : l.user) && void 0 !== r ? r : null),
                        null == l ? void 0 : l.user)
                            try {
                                await w(l.user)
                            } catch (e) {
                                console.error("Load profile error:", e)
                            }
                        else
                            c(null);
                        x(!1)
                    }
                }
                )
                  , l = () => {
                    "visible" === document.visibilityState && e && s.O.auth.refreshSession().catch( () => {
                        s.O.auth.getSession().catch( () => {}
                        )
                    }
                    )
                }
                ;
                return document.addEventListener("visibilitychange", l),
                () => {
                    e = !1,
                    t.unsubscribe(),
                    document.removeEventListener("visibilitychange", l)
                }
            }
            , []);
            let j = async (e, t, l) => {
                if (t.length < 6)
                    throw Error("Пароль должен быть минимум 6 символов");
                let {data: r, error: a} = await s.O.auth.signUp({
                    email: e.toLowerCase(),
                    password: t,
                    options: {
                        data: {
                            display_name: l
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
                if (!r.user)
                    throw Error("Ошибка регистрации");
                return await new Promise(e => setTimeout(e, 1500)),
                await w(r.user),
                {
                    needsConfirmation: !1
                }
            }
              , y = async e => {
                let {error: t} = await s.O.auth.resend({
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
                i(null);
                let {data: l, error: r} = await s.O.auth.signInWithPassword({
                    email: e.toLowerCase(),
                    password: t
                });
                if (r)
                    throw Error("Неверный email или пароль");
                l.user && await w(l.user)
            }
              , k = async () => {
                await s.O.auth.signOut(),
                c(null),
                u(null),
                m(null),
                i(null)
            }
              , C = async () => {
                d && await w(d)
            }
            ;
            return (0,
            r.jsx)(o.Provider, {
                value: {
                    user: l,
                    supabaseUser: d,
                    session: h,
                    loading: f,
                    needsEmailConfirmation: p,
                    pendingEmail: g,
                    register: j,
                    login: N,
                    logout: k,
                    refreshUser: C,
                    resendConfirmation: y,
                    clearPendingEmail: () => {
                        v(!1),
                        b(null)
                    }
                },
                children: t
            })
        }
    }
}, function(e) {
    e.O(0, [972, 53, 944, 971, 117, 744], function() {
        return e(e.s = 1411)
    }),
    _N_E = e.O()
}
]);
