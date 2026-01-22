(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[938], {
    6770: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 8301))
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
    8301: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return o
            }
        });
        var s = r(7437)
          , a = r(2265)
          , l = r(9376)
          , i = r(4362)
          , n = r(7944);
        function o() {
            let {user: e, refreshUser: t, loading: r, logout: o} = (0,
            i.a)()
              , d = (0,
            l.useRouter)()
              , [c,u] = (0,
            a.useState)("")
              , [m,x] = (0,
            a.useState)(!1)
              , [h,f] = (0,
            a.useState)("")
              , [p,b] = (0,
            a.useState)(!1)
              , [g,v] = (0,
            a.useState)("")
              , [y,w] = (0,
            a.useState)(!1);
            if ((0,
            a.useEffect)( () => {
                e && u(e.displayName)
            }
            , [e]),
            r)
                return (0,
                s.jsx)("div", {
                    className: "min-h-screen flex items-center justify-center",
                    children: (0,
                    s.jsx)("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"
                    })
                });
            if (!e)
                return d.push("/login"),
                null;
            let j = async () => {
                if (!c.trim()) {
                    f("Имя не может быть пустым");
                    return
                }
                x(!0);
                try {
                    await n.Nq(e.id, {
                        displayName: c.trim()
                    }),
                    await t(),
                    f("Настройки сохранены!"),
                    setTimeout( () => f(""), 3e3)
                } catch (e) {
                    console.error("Error saving settings:", e),
                    f("Ошибка сохранения")
                } finally {
                    x(!1)
                }
            }
            ;
            return (0,
            s.jsx)("div", {
                className: "min-h-screen bg-background py-8",
                children: (0,
                s.jsxs)("div", {
                    className: "max-w-2xl mx-auto px-4",
                    children: [(0,
                    s.jsx)("h1", {
                        className: "text-2xl font-bold text-text-primary mb-6",
                        children: "Настройки"
                    }), (0,
                    s.jsxs)("div", {
                        className: "bg-surface rounded-xl p-6 mb-6",
                        children: [(0,
                        s.jsx)("h2", {
                            className: "text-lg font-semibold text-text-primary mb-4",
                            children: "Профиль"
                        }), (0,
                        s.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0,
                            s.jsxs)("div", {
                                children: [(0,
                                s.jsx)("label", {
                                    className: "block text-sm text-text-secondary mb-2",
                                    children: "Email"
                                }), (0,
                                s.jsx)("input", {
                                    type: "email",
                                    value: e.email,
                                    disabled: !0,
                                    className: "w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-text-secondary cursor-not-allowed"
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                children: [(0,
                                s.jsx)("label", {
                                    className: "block text-sm text-text-secondary mb-2",
                                    children: "Имя канала"
                                }), (0,
                                s.jsx)("input", {
                                    type: "text",
                                    value: c,
                                    onChange: e => u(e.target.value.slice(0, 30)),
                                    className: "w-full px-4 py-3 bg-surface-light border border-border rounded-lg text-text-primary focus:outline-none focus:border-purple-500",
                                    maxLength: 30
                                }), (0,
                                s.jsxs)("div", {
                                    className: "text-right text-text-secondary text-xs mt-1",
                                    children: [c.length, "/30"]
                                })]
                            }), h && (0,
                            s.jsx)("p", {
                                className: "text-sm ".concat(h.includes("сохранены") ? "text-green-500" : "text-red-500"),
                                children: h
                            }), (0,
                            s.jsx)("button", {
                                onClick: j,
                                disabled: m,
                                className: "px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium disabled:opacity-50",
                                children: m ? "Сохранение..." : "Сохранить"
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "bg-surface rounded-xl p-6",
                        children: [(0,
                        s.jsx)("h2", {
                            className: "text-lg font-semibold text-text-primary mb-4",
                            children: "Галочки верификации"
                        }), (0,
                        s.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg",
                                children: [(0,
                                s.jsx)("svg", {
                                    className: "w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                    })
                                }), (0,
                                s.jsxs)("div", {
                                    children: [(0,
                                    s.jsx)("p", {
                                        className: "text-blue-400 font-medium",
                                        children: "Синяя галочка"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-text-secondary text-sm",
                                        children: "Подпишитесь на Telegram канал @Holsivsedela и подтвердите через бота @HolsTubeVerifyBot на странице своего канала."
                                    })]
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex items-start gap-3 p-3 bg-yellow-500/10 rounded-lg",
                                children: [(0,
                                s.jsx)("svg", {
                                    className: "w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                    })
                                }), (0,
                                s.jsxs)("div", {
                                    children: [(0,
                                    s.jsx)("p", {
                                        className: "text-yellow-400 font-medium",
                                        children: "Золотая галочка"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-text-secondary text-sm",
                                        children: "Выдаётся автоматически при достижении 50+ подписчиков и 5+ видео на канале."
                                    })]
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex items-start gap-3 p-3 bg-purple-500/10 rounded-lg",
                                children: [(0,
                                s.jsx)("svg", {
                                    className: "w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                    })
                                }), (0,
                                s.jsxs)("div", {
                                    children: [(0,
                                    s.jsx)("p", {
                                        className: "text-purple-400 font-medium",
                                        children: "Фиолетовая галочка"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-text-secondary text-sm",
                                        children: "Выдаётся администрацией вручную известным авторам и партнёрам."
                                    })]
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "bg-surface rounded-xl p-6 mt-6",
                        children: [(0,
                        s.jsx)("h2", {
                            className: "text-lg font-semibold text-text-primary mb-4",
                            children: "Информация"
                        }), (0,
                        s.jsxs)("div", {
                            className: "space-y-3 text-text-secondary text-sm",
                            children: [(0,
                            s.jsx)("p", {
                                children: "• Тёмная тема всегда включена"
                            }), (0,
                            s.jsx)("p", {
                                children: "• Количество подписчиков видно всем"
                            }), (0,
                            s.jsx)("p", {
                                children: "• Аватар и баннер можно менять раз в 7 дней"
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "bg-red-900/20 border border-red-600/30 rounded-xl p-6 mt-6",
                        children: [(0,
                        s.jsx)("h2", {
                            className: "text-lg font-semibold text-red-400 mb-4",
                            children: "Опасная зона"
                        }), p ? (0,
                        s.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0,
                            s.jsxs)("p", {
                                className: "text-red-400 text-sm",
                                children: ["Для подтверждения введите ", (0,
                                s.jsx)("span", {
                                    className: "font-bold",
                                    children: "УДАЛИТЬ"
                                })]
                            }), (0,
                            s.jsx)("input", {
                                type: "text",
                                value: g,
                                onChange: e => v(e.target.value),
                                placeholder: "Введите УДАЛИТЬ",
                                className: "w-full px-4 py-3 bg-surface-light border border-red-600/50 rounded-lg text-text-primary focus:outline-none focus:border-red-500"
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0,
                                s.jsx)("button", {
                                    onClick: () => {
                                        b(!1),
                                        v("")
                                    }
                                    ,
                                    className: "px-4 py-2 bg-surface-light hover:bg-border text-text-primary rounded-lg font-medium transition-colors",
                                    children: "Отмена"
                                }), (0,
                                s.jsx)("button", {
                                    onClick: async () => {
                                        if ("УДАЛИТЬ" !== g) {
                                            f("Введите УДАЛИТЬ для подтверждения");
                                            return
                                        }
                                        w(!0);
                                        try {
                                            await n.tm(e.id),
                                            o(),
                                            d.push("/")
                                        } catch (e) {
                                            console.error("Error deleting account:", e),
                                            f("Ошибка удаления аккаунта"),
                                            w(!1)
                                        }
                                    }
                                    ,
                                    disabled: y || "УДАЛИТЬ" !== g,
                                    className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: y ? "Удаление..." : "Подтвердить удаление"
                                })]
                            })]
                        }) : (0,
                        s.jsxs)("div", {
                            children: [(0,
                            s.jsx)("p", {
                                className: "text-text-secondary text-sm mb-4",
                                children: "Удаление аккаунта необратимо. Все ваши видео, комментарии и подписки будут удалены."
                            }), (0,
                            s.jsx)("button", {
                                onClick: () => b(!0),
                                className: "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors",
                                children: "Удалить аккаунт"
                            })]
                        })]
                    })]
                })
            })
        }
    },
    4362: function(e, t, r) {
        "use strict";
        r.d(t, {
            AuthProvider: function() {
                return c
            },
            a: function() {
                return d
            }
        });
        var s = r(7437)
          , a = r(2265)
          , l = r(5526);
        let i = "holstube_user_cache";
        function n(e) {
            try {
                e ? localStorage.setItem(i, JSON.stringify(e)) : localStorage.removeItem(i)
            } catch (e) {}
        }
        let o = (0,
        a.createContext)(void 0);
        function d() {
            let e = (0,
            a.useContext)(o);
            if (void 0 === e)
                throw Error("useAuth must be used within an AuthProvider");
            return e
        }
        function c(e) {
            let {children: t} = e
              , [r,d] = (0,
            a.useState)(null)
              , [c,u] = (0,
            a.useState)(null)
              , [m,x] = (0,
            a.useState)(null)
              , [h,f] = (0,
            a.useState)(!0)
              , [p,b] = (0,
            a.useState)(!1)
              , [g,v] = (0,
            a.useState)(null)
              , y = async e => {
                var t, r, s, a, o;
                let c = function() {
                    try {
                        let e = localStorage.getItem(i);
                        if (!e)
                            return null;
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                }();
                c && c.id === e.id && d(c);
                try {
                    let s = l.O.from("users").select("*").or("auth_id.eq.".concat(e.id, ",id.eq.").concat(e.id)).single()
                      , a = new Promise(e => setTimeout( () => e({
                        data: null,
                        error: Error("Timeout")
                    }), 3e3))
                      , {data: i, error: u} = await Promise.race([s, a]);
                    if (!u && i) {
                        let t = {
                            id: (o = {
                                ...i,
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
                        d(t),
                        n(t);
                        return
                    }
                    if (c && c.id === e.id)
                        return;
                    let m = (null === (t = e.user_metadata) || void 0 === t ? void 0 : t.display_name) || (null === (r = e.email) || void 0 === r ? void 0 : r.split("@")[0]) || "User"
                      , x = {
                        id: e.id,
                        email: e.email || "",
                        displayName: m,
                        subscriberCount: 0,
                        isVerified: !1,
                        isAdmin: !1,
                        createdAt: {
                            seconds: Math.floor(Date.now() / 1e3),
                            nanoseconds: 0,
                            toDate: () => new Date
                        }
                    };
                    d(x),
                    n(x)
                } catch (r) {
                    if (console.error("loadUserProfile error:", r),
                    c && c.id === e.id)
                        return;
                    let t = (null === (s = e.user_metadata) || void 0 === s ? void 0 : s.display_name) || (null === (a = e.email) || void 0 === a ? void 0 : a.split("@")[0]) || "User";
                    d({
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
                        let {data: {session: r}} = await l.O.auth.getSession();
                        if (!e)
                            return;
                        x(r),
                        u(null !== (t = null == r ? void 0 : r.user) && void 0 !== t ? t : null),
                        (null == r ? void 0 : r.user) && await y(r.user)
                    } catch (e) {
                        console.error("Session init error:", e)
                    } finally {
                        e && f(!1)
                    }
                }
                )();
                let {data: {subscription: t}} = l.O.auth.onAuthStateChange(async (t, r) => {
                    var s;
                    if (e) {
                        if (x(r),
                        u(null !== (s = null == r ? void 0 : r.user) && void 0 !== s ? s : null),
                        null == r ? void 0 : r.user)
                            try {
                                await y(r.user)
                            } catch (e) {
                                console.error("Load profile error:", e)
                            }
                        else
                            d(null);
                        f(!1)
                    }
                }
                )
                  , r = () => {
                    "visible" === document.visibilityState && e && l.O.auth.refreshSession().catch( () => {
                        l.O.auth.getSession().catch( () => {}
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
                let {data: s, error: a} = await l.O.auth.signUp({
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
                await y(s.user),
                {
                    needsConfirmation: !1
                }
            }
              , j = async e => {
                let {error: t} = await l.O.auth.resend({
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
                n(null);
                let {data: r, error: s} = await l.O.auth.signInWithPassword({
                    email: e.toLowerCase(),
                    password: t
                });
                if (s)
                    throw Error("Неверный email или пароль");
                r.user && await y(r.user)
            }
              , S = async () => {
                await l.O.auth.signOut(),
                d(null),
                u(null),
                x(null),
                n(null)
            }
              , _ = async () => {
                c && await y(c)
            }
            ;
            return (0,
            s.jsx)(o.Provider, {
                value: {
                    user: r,
                    supabaseUser: c,
                    session: m,
                    loading: h,
                    needsEmailConfirmation: p,
                    pendingEmail: g,
                    register: w,
                    login: N,
                    logout: S,
                    refreshUser: _,
                    resendConfirmation: j,
                    clearPendingEmail: () => {
                        b(!1),
                        v(null)
                    }
                },
                children: t
            })
        }
    }
}, function(e) {
    e.O(0, [53, 944, 971, 117, 744], function() {
        return e(e.s = 6770)
    }),
    _N_E = e.O()
}
]);
