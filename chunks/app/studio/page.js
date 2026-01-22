(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[348], {
    2560: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 680))
    },
    680: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return x
            }
        });
        var l = s(7437)
          , r = s(2265)
          , i = s(7648)
          , a = s(3145)
          , n = s(4362)
          , o = s(7944)
          , c = s(6511);
        let d = "holstube_studio_";
        function x() {
            let {user: e, loading: t} = (0,
            n.a)()
              , [s,x] = (0,
            r.useState)("dashboard")
              , [h,m] = (0,
            r.useState)([])
              , [f,p] = (0,
            r.useState)(!0)
              , [g,v] = (0,
            r.useState)({
                totalViews: 0,
                totalLikes: 0,
                totalVideos: 0,
                subscriberCount: 0
            })
              , [j,b] = (0,
            r.useState)(null)
              , [w,N] = (0,
            r.useState)({
                title: "",
                description: ""
            })
              , [y,k] = (0,
            r.useState)(!1);
            (0,
            r.useEffect)( () => {
                async function s() {
                    if (!e)
                        return;
                    let t = function(e) {
                        try {
                            let t = localStorage.getItem(d + e);
                            if (!t)
                                return null;
                            let s = JSON.parse(t);
                            return Date.now() - s.ts < 18e4 ? s : null
                        } catch (e) {
                            return null
                        }
                    }(e.id);
                    t && (m(t.videos),
                    v(t.stats),
                    p(!1));
                    try {
                        let[t,s] = await Promise.all([o.Uk(e.id), o.Mx(e.id)]);
                        m(t),
                        v(s),
                        function(e, t, s) {
                            try {
                                localStorage.setItem(d + e, JSON.stringify({
                                    videos: t,
                                    stats: s,
                                    ts: Date.now()
                                }))
                            } catch (e) {}
                        }(e.id, t, s)
                    } catch (e) {
                        console.error("Error fetching data:", e)
                    } finally {
                        p(!1)
                    }
                }
                t || s()
            }
            , [e, t]);
            let C = (0,
            r.useCallback)(e => {
                b(e),
                N({
                    title: e.title,
                    description: e.description
                })
            }
            , [])
              , D = (0,
            r.useCallback)(async () => {
                if (j) {
                    k(!0);
                    try {
                        await o.HH(j.id, {
                            title: w.title,
                            description: w.description
                        }),
                        m(e => e.map(e => e.id === j.id ? {
                            ...e,
                            title: w.title,
                            description: w.description
                        } : e)),
                        b(null)
                    } catch (e) {
                        console.error("Error updating video:", e),
                        alert("Ошибка сохранения")
                    }
                    k(!1)
                }
            }
            , [j, w])
              , L = (0,
            r.useCallback)(async e => {
                if (confirm("Удалить это видео навсегда?"))
                    try {
                        await o.FM(e),
                        m(t => t.filter(t => t.id !== e)),
                        v(e => ({
                            ...e,
                            totalVideos: e.totalVideos - 1
                        }))
                    } catch (e) {
                        console.error("Error deleting video:", e)
                    }
            }
            , []);
            if (t || f)
                return (0,
                l.jsx)("div", {
                    className: "flex items-center justify-center min-h-[50vh]",
                    children: (0,
                    l.jsx)("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"
                    })
                });
            if (!e)
                return (0,
                l.jsxs)("div", {
                    className: "flex flex-col items-center justify-center min-h-[50vh] gap-4",
                    children: [(0,
                    l.jsx)("h1", {
                        className: "text-2xl font-bold text-text-primary",
                        children: "Требуется авторизация"
                    }), (0,
                    l.jsx)("p", {
                        className: "text-text-secondary",
                        children: "Войдите чтобы открыть студию."
                    }), (0,
                    l.jsx)(i.default, {
                        href: "/login",
                        className: "btn-primary",
                        children: "Войти"
                    })]
                });
            let S = h.length > 0 ? Math.round(g.totalViews / h.length) : 0
              , M = h.length > 0 ? Math.round(g.totalLikes / h.length) : 0
              , _ = g.totalViews > 0 ? (g.totalLikes / g.totalViews * 100).toFixed(1) : "0"
              , A = [...h].sort( (e, t) => t.views - e.views).slice(0, 5)
              , E = [...h].sort( (e, t) => new Date(t.createdAt.toDate()).getTime() - new Date(e.createdAt.toDate()).getTime()).slice(0, 5);
            return (0,
            l.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 py-6",
                children: [(0,
                l.jsxs)("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [(0,
                        l.jsx)("div", {
                            className: "w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center",
                            children: (0,
                            l.jsx)("svg", {
                                className: "w-6 h-6 text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: (0,
                                l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                })
                            })
                        }), (0,
                        l.jsxs)("div", {
                            children: [(0,
                            l.jsx)("h1", {
                                className: "text-2xl font-bold text-white",
                                children: "Творческая студия"
                            }), (0,
                            l.jsx)("p", {
                                className: "text-text-secondary text-sm",
                                children: "Управляйте каналом и отслеживайте статистику"
                            })]
                        })]
                    }), (0,
                    l.jsxs)(i.default, {
                        href: "/upload",
                        className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2",
                        children: [(0,
                        l.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0,
                            l.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 4v16m8-8H4"
                            })
                        }), "Загрузить"]
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "flex gap-3 mb-6",
                    children: [(0,
                    l.jsxs)(i.default, {
                        href: "/studio/playlists",
                        className: "px-4 py-2 bg-surface hover:bg-surface-light text-white rounded-lg font-medium transition-colors flex items-center gap-2",
                        children: [(0,
                        l.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0,
                            l.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            })
                        }), "Плейлисты"]
                    }), (0,
                    l.jsxs)(i.default, {
                        href: "/channel/".concat(e.id),
                        className: "px-4 py-2 bg-surface hover:bg-surface-light text-white rounded-lg font-medium transition-colors flex items-center gap-2",
                        children: [(0,
                        l.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0,
                            l.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            })
                        }), "Мой канал"]
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "flex gap-2 mb-6 border-b border-border pb-2",
                    children: [(0,
                    l.jsx)("button", {
                        onClick: () => x("dashboard"),
                        className: "px-4 py-2 rounded-lg font-medium transition-colors ".concat("dashboard" === s ? "bg-purple-600 text-white" : "text-text-secondary hover:text-white"),
                        children: "Обзор"
                    }), (0,
                    l.jsxs)("button", {
                        onClick: () => x("videos"),
                        className: "px-4 py-2 rounded-lg font-medium transition-colors ".concat("videos" === s ? "bg-purple-600 text-white" : "text-text-secondary hover:text-white"),
                        children: ["Видео (", h.length, ")"]
                    }), (0,
                    l.jsx)("button", {
                        onClick: () => x("analytics"),
                        className: "px-4 py-2 rounded-lg font-medium transition-colors ".concat("analytics" === s ? "bg-purple-600 text-white" : "text-text-secondary hover:text-white"),
                        children: "Аналитика"
                    })]
                }), "dashboard" === s && (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsxs)("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
                        children: [(0,
                        l.jsx)(u, {
                            title: "Просмотры",
                            value: (0,
                            c.xR)(g.totalViews),
                            icon: "\uD83D\uDC41️",
                            color: "bg-blue-500/10 text-blue-400"
                        }), (0,
                        l.jsx)(u, {
                            title: "Лайки",
                            value: (0,
                            c.xR)(g.totalLikes),
                            icon: "❤️",
                            color: "bg-red-500/10 text-red-400"
                        }), (0,
                        l.jsx)(u, {
                            title: "Видео",
                            value: g.totalVideos.toString(),
                            icon: "\uD83C\uDFAC",
                            color: "bg-purple-500/10 text-purple-400"
                        }), (0,
                        l.jsx)(u, {
                            title: "Подписчики",
                            value: (0,
                            c.xR)(g.subscriberCount),
                            icon: "\uD83D\uDC65",
                            color: "bg-green-500/10 text-green-400"
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "bg-surface rounded-xl p-4",
                            children: [(0,
                            l.jsx)("h3", {
                                className: "text-lg font-bold text-white mb-4 flex items-center gap-2",
                                children: "\uD83C\uDFC6 Топ видео"
                            }), 0 === A.length ? (0,
                            l.jsx)("p", {
                                className: "text-text-secondary text-center py-4",
                                children: "Нет видео"
                            }) : (0,
                            l.jsx)("div", {
                                className: "space-y-3",
                                children: A.map( (e, t) => (0,
                                l.jsxs)(i.default, {
                                    href: "/watch/".concat(e.id),
                                    className: "flex items-center gap-3 p-2 rounded-lg hover:bg-surface-light transition-colors",
                                    children: [(0,
                                    l.jsx)("span", {
                                        className: "text-2xl font-bold text-text-secondary w-8",
                                        children: t + 1
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [(0,
                                        l.jsx)("p", {
                                            className: "text-white text-sm truncate",
                                            children: e.title
                                        }), (0,
                                        l.jsxs)("p", {
                                            className: "text-text-secondary text-xs",
                                            children: [(0,
                                            c.xR)(e.views), " просмотров"]
                                        })]
                                    })]
                                }, e.id))
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "bg-surface rounded-xl p-4",
                            children: [(0,
                            l.jsx)("h3", {
                                className: "text-lg font-bold text-white mb-4 flex items-center gap-2",
                                children: "\uD83D\uDD50 Недавние видео"
                            }), 0 === E.length ? (0,
                            l.jsx)("p", {
                                className: "text-text-secondary text-center py-4",
                                children: "Нет видео"
                            }) : (0,
                            l.jsx)("div", {
                                className: "space-y-3",
                                children: E.map(e => (0,
                                l.jsxs)(i.default, {
                                    href: "/watch/".concat(e.id),
                                    className: "flex items-center gap-3 p-2 rounded-lg hover:bg-surface-light transition-colors",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "w-16 h-10 bg-surface-light rounded overflow-hidden flex-shrink-0",
                                        children: e.thumbnailUrl ? (0,
                                        l.jsx)(a.default, {
                                            src: e.thumbnailUrl,
                                            alt: "",
                                            width: 64,
                                            height: 40,
                                            className: "object-cover w-full h-full",
                                            unoptimized: !0
                                        }) : (0,
                                        l.jsx)("div", {
                                            className: "w-full h-full flex items-center justify-center text-purple-400",
                                            children: "\uD83C\uDFAC"
                                        })
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [(0,
                                        l.jsx)("p", {
                                            className: "text-white text-sm truncate",
                                            children: e.title
                                        }), (0,
                                        l.jsx)("p", {
                                            className: "text-text-secondary text-xs",
                                            children: (0,
                                            c.BK)(e.createdAt)
                                        })]
                                    })]
                                }, e.id))
                            })]
                        })]
                    })]
                }), "videos" === s && (0,
                l.jsx)("div", {
                    className: "bg-surface rounded-xl overflow-hidden",
                    children: 0 === h.length ? (0,
                    l.jsxs)("div", {
                        className: "p-8 text-center",
                        children: [(0,
                        l.jsx)("p", {
                            className: "text-text-secondary mb-4",
                            children: "Вы ещё не загрузили видео."
                        }), (0,
                        l.jsx)(i.default, {
                            href: "/upload",
                            className: "px-4 py-2 bg-purple-600 text-white rounded-lg",
                            children: "Загрузить первое видео"
                        })]
                    }) : (0,
                    l.jsx)("div", {
                        className: "divide-y divide-border",
                        children: h.map(e => (0,
                        l.jsxs)("div", {
                            className: "flex items-center gap-4 p-4 hover:bg-surface-light transition-colors",
                            children: [(0,
                            l.jsx)(i.default, {
                                href: "/watch/".concat(e.id),
                                className: "flex-shrink-0",
                                children: (0,
                                l.jsx)("div", {
                                    className: "relative w-32 h-20 rounded-lg overflow-hidden bg-surface-light",
                                    children: e.thumbnailUrl ? (0,
                                    l.jsx)(a.default, {
                                        src: e.thumbnailUrl,
                                        alt: e.title,
                                        fill: !0,
                                        className: "object-cover",
                                        unoptimized: !0
                                    }) : (0,
                                    l.jsx)("div", {
                                        className: "w-full h-full flex items-center justify-center text-text-secondary",
                                        children: "\uD83C\uDFAC"
                                    })
                                })
                            }), (0,
                            l.jsxs)("div", {
                                className: "flex-1 min-w-0",
                                children: [(0,
                                l.jsx)(i.default, {
                                    href: "/watch/".concat(e.id),
                                    children: (0,
                                    l.jsx)("h3", {
                                        className: "font-medium text-white truncate hover:text-purple-400 transition-colors",
                                        children: e.title
                                    })
                                }), (0,
                                l.jsx)("p", {
                                    className: "text-sm text-text-secondary line-clamp-1",
                                    children: e.description || "Без описания"
                                }), (0,
                                l.jsx)("p", {
                                    className: "text-xs text-text-secondary mt-1",
                                    children: (0,
                                    c.BK)(e.createdAt)
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "hidden md:flex items-center gap-6 text-sm",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0,
                                    l.jsx)("p", {
                                        className: "text-text-secondary text-xs",
                                        children: "Просмотры"
                                    }), (0,
                                    l.jsx)("p", {
                                        className: "font-medium text-white",
                                        children: (0,
                                        c.xR)(e.views)
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0,
                                    l.jsx)("p", {
                                        className: "text-text-secondary text-xs",
                                        children: "Лайки"
                                    }), (0,
                                    l.jsx)("p", {
                                        className: "font-medium text-white",
                                        children: (0,
                                        c.xR)(e.likes)
                                    })]
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0,
                                l.jsx)("button", {
                                    onClick: () => C(e),
                                    className: "p-2 text-text-secondary hover:text-white hover:bg-surface-light rounded-lg transition-colors",
                                    title: "Редактировать",
                                    children: (0,
                                    l.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0,
                                        l.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        })
                                    })
                                }), (0,
                                l.jsx)("button", {
                                    onClick: () => L(e.id),
                                    className: "p-2 text-text-secondary hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors",
                                    title: "Удалить",
                                    children: (0,
                                    l.jsx)("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0,
                                        l.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        })
                                    })
                                })]
                            })]
                        }, e.id))
                    })
                }), "analytics" === s && (0,
                l.jsxs)("div", {
                    className: "space-y-6",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                        children: [(0,
                        l.jsx)(u, {
                            title: "Всего просмотров",
                            value: (0,
                            c.xR)(g.totalViews),
                            icon: "\uD83D\uDC41️",
                            color: "bg-blue-500/10 text-blue-400"
                        }), (0,
                        l.jsx)(u, {
                            title: "Среднее на видео",
                            value: (0,
                            c.xR)(S),
                            icon: "\uD83D\uDCCA",
                            color: "bg-cyan-500/10 text-cyan-400"
                        }), (0,
                        l.jsx)(u, {
                            title: "Вовлечённость",
                            value: "".concat(_, "%"),
                            icon: "\uD83D\uDCAB",
                            color: "bg-yellow-500/10 text-yellow-400"
                        }), (0,
                        l.jsx)(u, {
                            title: "Ср. лайков",
                            value: (0,
                            c.xR)(M),
                            icon: "❤️",
                            color: "bg-red-500/10 text-red-400"
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "bg-surface rounded-xl overflow-hidden",
                        children: [(0,
                        l.jsx)("div", {
                            className: "p-4 border-b border-border",
                            children: (0,
                            l.jsx)("h3", {
                                className: "text-lg font-bold text-white",
                                children: "Эффективность видео"
                            })
                        }), (0,
                        l.jsxs)("div", {
                            className: "overflow-x-auto",
                            children: [(0,
                            l.jsxs)("table", {
                                className: "w-full",
                                children: [(0,
                                l.jsx)("thead", {
                                    className: "bg-surface-light",
                                    children: (0,
                                    l.jsxs)("tr", {
                                        children: [(0,
                                        l.jsx)("th", {
                                            className: "text-left px-4 py-3 text-text-secondary text-sm font-medium",
                                            children: "Видео"
                                        }), (0,
                                        l.jsx)("th", {
                                            className: "text-right px-4 py-3 text-text-secondary text-sm font-medium",
                                            children: "Просмотры"
                                        }), (0,
                                        l.jsx)("th", {
                                            className: "text-right px-4 py-3 text-text-secondary text-sm font-medium",
                                            children: "Лайки"
                                        }), (0,
                                        l.jsx)("th", {
                                            className: "text-right px-4 py-3 text-text-secondary text-sm font-medium",
                                            children: "Вовлечённость"
                                        }), (0,
                                        l.jsx)("th", {
                                            className: "text-right px-4 py-3 text-text-secondary text-sm font-medium",
                                            children: "Дата"
                                        })]
                                    })
                                }), (0,
                                l.jsx)("tbody", {
                                    className: "divide-y divide-border",
                                    children: h.map(e => {
                                        let t = e.views > 0 ? (e.likes / e.views * 100).toFixed(1) : "0";
                                        return (0,
                                        l.jsxs)("tr", {
                                            className: "hover:bg-surface-light/50",
                                            children: [(0,
                                            l.jsx)("td", {
                                                className: "px-4 py-3",
                                                children: (0,
                                                l.jsx)(i.default, {
                                                    href: "/watch/".concat(e.id),
                                                    className: "text-white text-sm hover:text-purple-400 line-clamp-1",
                                                    children: e.title
                                                })
                                            }), (0,
                                            l.jsx)("td", {
                                                className: "px-4 py-3 text-right text-white text-sm",
                                                children: (0,
                                                c.xR)(e.views)
                                            }), (0,
                                            l.jsx)("td", {
                                                className: "px-4 py-3 text-right text-white text-sm",
                                                children: (0,
                                                c.xR)(e.likes)
                                            }), (0,
                                            l.jsx)("td", {
                                                className: "px-4 py-3 text-right",
                                                children: (0,
                                                l.jsxs)("span", {
                                                    className: "text-sm ".concat(parseFloat(t) > 5 ? "text-green-400" : "text-text-secondary"),
                                                    children: [t, "%"]
                                                })
                                            }), (0,
                                            l.jsx)("td", {
                                                className: "px-4 py-3 text-right text-text-secondary text-sm",
                                                children: (0,
                                                c.BK)(e.createdAt)
                                            })]
                                        }, e.id)
                                    }
                                    )
                                })]
                            }), 0 === h.length && (0,
                            l.jsx)("p", {
                                className: "text-center text-text-secondary py-8",
                                children: "Нет данных"
                            })]
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6",
                        children: [(0,
                        l.jsx)("h3", {
                            className: "text-lg font-bold text-white mb-3",
                            children: "\uD83D\uDCA1 Советы для роста"
                        }), (0,
                        l.jsxs)("ul", {
                            className: "space-y-2 text-text-secondary text-sm",
                            children: [(0,
                            l.jsx)("li", {
                                children: "• Загружайте видео регулярно (минимум 1-2 раза в неделю)"
                            }), (0,
                            l.jsx)("li", {
                                children: "• Используйте яркие превью для привлечения внимания"
                            }), (0,
                            l.jsx)("li", {
                                children: "• Отвечайте на комментарии для повышения вовлечённости"
                            }), (0,
                            l.jsx)("li", {
                                children: "• Делитесь видео в социальных сетях"
                            })]
                        })]
                    })]
                }), j && (0,
                l.jsx)("div", {
                    className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",
                    children: (0,
                    l.jsxs)("div", {
                        className: "bg-surface rounded-xl p-6 max-w-lg w-full",
                        children: [(0,
                        l.jsx)("h3", {
                            className: "text-xl font-bold text-white mb-4",
                            children: "Редактировать видео"
                        }), (0,
                        l.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0,
                            l.jsxs)("div", {
                                children: [(0,
                                l.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Название"
                                }), (0,
                                l.jsx)("input", {
                                    type: "text",
                                    value: w.title,
                                    onChange: e => N(t => ({
                                        ...t,
                                        title: e.target.value
                                    })),
                                    className: "w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-white focus:outline-none focus:border-purple-500"
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                children: [(0,
                                l.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Описание"
                                }), (0,
                                l.jsx)("textarea", {
                                    value: w.description,
                                    onChange: e => N(t => ({
                                        ...t,
                                        description: e.target.value
                                    })),
                                    rows: 4,
                                    className: "w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-white focus:outline-none focus:border-purple-500 resize-none"
                                })]
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex gap-3 mt-6",
                            children: [(0,
                            l.jsx)("button", {
                                onClick: () => b(null),
                                className: "flex-1 py-2 px-4 bg-surface-light text-white rounded-lg hover:bg-border transition-colors",
                                children: "Отмена"
                            }), (0,
                            l.jsx)("button", {
                                onClick: D,
                                disabled: !w.title.trim() || y,
                                className: "flex-1 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50",
                                children: y ? "Сохранение..." : "Сохранить"
                            })]
                        })]
                    })
                })]
            })
        }
        function u(e) {
            let {title: t, value: s, icon: r, color: i} = e;
            return (0,
            l.jsxs)("div", {
                className: "bg-surface rounded-xl p-4",
                children: [(0,
                l.jsx)("div", {
                    className: "w-10 h-10 rounded-lg ".concat(i, " flex items-center justify-center text-xl mb-3"),
                    children: r
                }), (0,
                l.jsx)("p", {
                    className: "text-text-secondary text-sm",
                    children: t
                }), (0,
                l.jsx)("p", {
                    className: "text-2xl font-bold text-white",
                    children: s
                })]
            })
        }
    },
    9853: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return i
            }
        });
        var l = s(7437);
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
        function i(e) {
            let {size: t="md", level: s="none", showTooltip: i=!0} = e
              , a = {
                sm: "w-3.5 h-3.5",
                md: "w-4 h-4",
                lg: "w-5 h-5"
            };
            if (!s || "none" === s)
                return null;
            let n = r[s] || r.blue;
            return (0,
            l.jsx)("span", {
                title: i ? n.title : void 0,
                children: "gold" === s ? (0,
                l.jsx)("svg", {
                    className: "".concat(a[t], " ").concat(n.color, " inline-block ml-1"),
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0,
                    l.jsx)("path", {
                        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    })
                }) : (0,
                l.jsx)("svg", {
                    className: "".concat(a[t], " ").concat(n.color, " inline-block ml-1"),
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0,
                    l.jsx)("path", {
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    })
                })
            })
        }
    },
    6511: function(e, t, s) {
        "use strict";
        s.d(t, {
            BK: function() {
                return o
            },
            ZP: function() {
                return c
            },
            xR: function() {
                return n
            }
        });
        var l = s(7437)
          , r = s(7648)
          , i = s(2265)
          , a = s(9853);
        function n(e) {
            return e >= 1e6 ? "".concat((e / 1e6).toFixed(1), "M просмотров") : e >= 1e3 ? "".concat((e / 1e3).toFixed(1), "K просмотров") : "".concat(e, " просмотров")
        }
        function o(e) {
            let t;
            let s = new Date;
            t = e instanceof Date ? e : e && "function" == typeof e.toDate ? e.toDate() : e && "seconds"in e ? new Date(1e3 * e.seconds) : new Date;
            let l = Math.floor(Math.floor((s.getTime() - t.getTime()) / 1e3) / 60)
              , r = Math.floor(l / 60)
              , i = Math.floor(r / 24)
              , a = Math.floor(i / 30)
              , n = Math.floor(i / 365);
            return n > 0 ? "".concat(n, " ").concat(1 === n ? "год" : n < 5 ? "года" : "лет", " назад") : a > 0 ? "".concat(a, " ").concat(1 === a ? "месяц" : a < 5 ? "месяца" : "месяцев", " назад") : i > 0 ? "".concat(i, " ").concat(1 === i ? "день" : i < 5 ? "дня" : "дней", " назад") : r > 0 ? "".concat(r, " ").concat(1 === r ? "час" : r < 5 ? "часа" : "часов", " назад") : l > 0 ? "".concat(l, " ").concat(1 === l ? "минуту" : l < 5 ? "минуты" : "минут", " назад") : "Только что"
        }
        function c(e) {
            let {id: t, title: s, thumbnailUrl: c, authorName: d, authorId: x, views: u, createdAt: h, isAuthorVerified: m} = e
              , [f,p] = (0,
            i.useState)(!1)
              , g = function(e) {
                for (let t of [/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/, /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/]) {
                    let s = e.match(t);
                    if (s)
                        return "https://img.youtube.com/vi/".concat(s[1], "/hqdefault.jpg")
                }
                return null
            }(c)
              , v = c.includes("drive.google.com") || c.includes("docs.google.com") || c.includes("vk.com/video") || c.includes("rutube.ru")
              , j = g || (v ? null : c)
              , b = !j || f || v;
            return (0,
            l.jsx)(r.default, {
                href: "/watch/".concat(t),
                className: "group block",
                children: (0,
                l.jsxs)("article", {
                    className: "flex flex-col gap-2",
                    children: [(0,
                    l.jsx)("div", {
                        className: "relative aspect-video bg-surface-light rounded-xl overflow-hidden",
                        children: b ? (0,
                        l.jsxs)("div", {
                            className: "absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/50 to-zinc-900",
                            children: [(0,
                            l.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-12 h-12 text-purple-400",
                                children: (0,
                                l.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
                                    clipRule: "evenodd"
                                })
                            }), (0,
                            l.jsx)("span", {
                                className: "text-xs text-zinc-400 mt-2 px-2 text-center line-clamp-2 max-w-[90%]",
                                children: s
                            })]
                        }) : (0,
                        l.jsx)("img", {
                            src: j,
                            alt: s,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-200",
                            onError: () => p(!0)
                        })
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex gap-3",
                        children: [(0,
                        l.jsx)(r.default, {
                            href: "/channel/".concat(x),
                            className: "flex-shrink-0",
                            onClick: e => e.stopPropagation(),
                            children: (0,
                            l.jsx)("div", {
                                className: "w-9 h-9 rounded-full bg-surface-light flex items-center justify-center text-text-secondary text-sm font-medium",
                                children: d.charAt(0).toUpperCase()
                            })
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex-1 min-w-0",
                            children: [(0,
                            l.jsx)("h3", {
                                className: "text-text-primary font-medium line-clamp-2 text-sm leading-5 group-hover:text-primary transition-colors",
                                children: s
                            }), (0,
                            l.jsxs)(r.default, {
                                href: "/channel/".concat(x),
                                className: "text-text-secondary text-xs hover:text-text-primary transition-colors mt-1 flex items-center",
                                onClick: e => e.stopPropagation(),
                                children: [d, m && (0,
                                l.jsx)(a.Z, {
                                    size: "sm"
                                })]
                            }), (0,
                            l.jsxs)("p", {
                                className: "text-text-secondary text-xs mt-0.5",
                                children: [n(u), " • ", o(h)]
                            })]
                        })]
                    })]
                })
            })
        }
    },
    4362: function(e, t, s) {
        "use strict";
        s.d(t, {
            AuthProvider: function() {
                return d
            },
            a: function() {
                return c
            }
        });
        var l = s(7437)
          , r = s(2265)
          , i = s(5526);
        let a = "holstube_user_cache";
        function n(e) {
            try {
                e ? localStorage.setItem(a, JSON.stringify(e)) : localStorage.removeItem(a)
            } catch (e) {}
        }
        let o = (0,
        r.createContext)(void 0);
        function c() {
            let e = (0,
            r.useContext)(o);
            if (void 0 === e)
                throw Error("useAuth must be used within an AuthProvider");
            return e
        }
        function d(e) {
            let {children: t} = e
              , [s,c] = (0,
            r.useState)(null)
              , [d,x] = (0,
            r.useState)(null)
              , [u,h] = (0,
            r.useState)(null)
              , [m,f] = (0,
            r.useState)(!0)
              , [p,g] = (0,
            r.useState)(!1)
              , [v,j] = (0,
            r.useState)(null)
              , b = async e => {
                var t, s, l, r, o;
                let d = function() {
                    try {
                        let e = localStorage.getItem(a);
                        if (!e)
                            return null;
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                }();
                d && d.id === e.id && c(d);
                try {
                    let l = i.O.from("users").select("*").or("auth_id.eq.".concat(e.id, ",id.eq.").concat(e.id)).single()
                      , r = new Promise(e => setTimeout( () => e({
                        data: null,
                        error: Error("Timeout")
                    }), 3e3))
                      , {data: a, error: x} = await Promise.race([l, r]);
                    if (!x && a) {
                        let t = {
                            id: (o = {
                                ...a,
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
                        n(t);
                        return
                    }
                    if (d && d.id === e.id)
                        return;
                    let u = (null === (t = e.user_metadata) || void 0 === t ? void 0 : t.display_name) || (null === (s = e.email) || void 0 === s ? void 0 : s.split("@")[0]) || "User"
                      , h = {
                        id: e.id,
                        email: e.email || "",
                        displayName: u,
                        subscriberCount: 0,
                        isVerified: !1,
                        isAdmin: !1,
                        createdAt: {
                            seconds: Math.floor(Date.now() / 1e3),
                            nanoseconds: 0,
                            toDate: () => new Date
                        }
                    };
                    c(h),
                    n(h)
                } catch (s) {
                    if (console.error("loadUserProfile error:", s),
                    d && d.id === e.id)
                        return;
                    let t = (null === (l = e.user_metadata) || void 0 === l ? void 0 : l.display_name) || (null === (r = e.email) || void 0 === r ? void 0 : r.split("@")[0]) || "User";
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
            r.useEffect)( () => {
                let e = !0;
                (async () => {
                    try {
                        var t;
                        let {data: {session: s}} = await i.O.auth.getSession();
                        if (!e)
                            return;
                        h(s),
                        x(null !== (t = null == s ? void 0 : s.user) && void 0 !== t ? t : null),
                        (null == s ? void 0 : s.user) && await b(s.user)
                    } catch (e) {
                        console.error("Session init error:", e)
                    } finally {
                        e && f(!1)
                    }
                }
                )();
                let {data: {subscription: t}} = i.O.auth.onAuthStateChange(async (t, s) => {
                    var l;
                    if (e) {
                        if (h(s),
                        x(null !== (l = null == s ? void 0 : s.user) && void 0 !== l ? l : null),
                        null == s ? void 0 : s.user)
                            try {
                                await b(s.user)
                            } catch (e) {
                                console.error("Load profile error:", e)
                            }
                        else
                            c(null);
                        f(!1)
                    }
                }
                )
                  , s = () => {
                    "visible" === document.visibilityState && e && i.O.auth.refreshSession().catch( () => {
                        i.O.auth.getSession().catch( () => {}
                        )
                    }
                    )
                }
                ;
                return document.addEventListener("visibilitychange", s),
                () => {
                    e = !1,
                    t.unsubscribe(),
                    document.removeEventListener("visibilitychange", s)
                }
            }
            , []);
            let w = async (e, t, s) => {
                if (t.length < 6)
                    throw Error("Пароль должен быть минимум 6 символов");
                let {data: l, error: r} = await i.O.auth.signUp({
                    email: e.toLowerCase(),
                    password: t,
                    options: {
                        data: {
                            display_name: s
                        }
                    }
                });
                if (r) {
                    if (r.message.includes("already registered"))
                        throw Error("Аккаунт с этим email уже существует");
                    if (r.message.includes("rate limit") || 429 === r.status)
                        throw Error("Слишком много попыток. Подождите несколько минут и попробуйте снова.");
                    throw Error(r.message)
                }
                if (!l.user)
                    throw Error("Ошибка регистрации");
                return await new Promise(e => setTimeout(e, 1500)),
                await b(l.user),
                {
                    needsConfirmation: !1
                }
            }
              , N = async e => {
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
              , y = async (e, t) => {
                n(null);
                let {data: s, error: l} = await i.O.auth.signInWithPassword({
                    email: e.toLowerCase(),
                    password: t
                });
                if (l)
                    throw Error("Неверный email или пароль");
                s.user && await b(s.user)
            }
              , k = async () => {
                await i.O.auth.signOut(),
                c(null),
                x(null),
                h(null),
                n(null)
            }
              , C = async () => {
                d && await b(d)
            }
            ;
            return (0,
            l.jsx)(o.Provider, {
                value: {
                    user: s,
                    supabaseUser: d,
                    session: u,
                    loading: m,
                    needsEmailConfirmation: p,
                    pendingEmail: v,
                    register: w,
                    login: y,
                    logout: k,
                    refreshUser: C,
                    resendConfirmation: N,
                    clearPendingEmail: () => {
                        g(!1),
                        j(null)
                    }
                },
                children: t
            })
        }
    }
}, function(e) {
    e.O(0, [972, 53, 726, 944, 971, 117, 744], function() {
        return e(e.s = 2560)
    }),
    _N_E = e.O()
}
]);
