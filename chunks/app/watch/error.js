(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[676], {
    3134: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 6657))
    },
    7648: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return i.a
            }
        });
        var a = r(2972)
          , i = r.n(a)
    },
    9376: function(e, t, r) {
        "use strict";
        var a = r(5475);
        r.o(a, "useParams") && r.d(t, {
            useParams: function() {
                return a.useParams
            }
        }),
        r.o(a, "useRouter") && r.d(t, {
            useRouter: function() {
                return a.useRouter
            }
        }),
        r.o(a, "useSearchParams") && r.d(t, {
            useSearchParams: function() {
                return a.useSearchParams
            }
        })
    },
    6657: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return m
            }
        });
        var a = r(7437)
          , i = r(2265)
          , s = r(9376)
          , n = r(7648)
          , l = r(1896)
          , o = r(7944)
          , u = r(6153);
        let d = [{
            id: "action",
            name: "Боевик",
            icon: "\uD83D\uDCA5"
        }, {
            id: "comedy",
            name: "Комедия",
            icon: "\uD83D\uDE02"
        }, {
            id: "drama",
            name: "Драма",
            icon: "\uD83C\uDFAD"
        }, {
            id: "horror",
            name: "Ужасы",
            icon: "\uD83D\uDC7B"
        }, {
            id: "scifi",
            name: "Фантастика",
            icon: "\uD83D\uDE80"
        }, {
            id: "romance",
            name: "Мелодрама",
            icon: "\uD83D\uDC95"
        }, {
            id: "thriller",
            name: "Триллер",
            icon: "\uD83D\uDE31"
        }, {
            id: "animation",
            name: "Мультфильм",
            icon: "\uD83C\uDFA8"
        }, {
            id: "documentary",
            name: "Документальный",
            icon: "\uD83D\uDCF9"
        }];
        function c(e, t) {
            let r = "".concat(e, " ").concat(t).toLowerCase();
            for (let e of u.C)
                if (r.includes(e.toLowerCase()))
                    return {
                        isClean: !1,
                        reason: "Обнаружен запрещённый контент. Пожалуйста, измените название или описание."
                    };
            return {
                isClean: !0
            }
        }
        function m() {
            let {user: e, isLoading: t, isAuthenticated: r} = (0,
            l.Q)("/login")
              , u = (0,
            s.useRouter)()
              , m = (0,
            i.useRef)(null)
              , [x,h] = (0,
            i.useState)("video")
              , [p,b] = (0,
            i.useState)("")
              , [f,v] = (0,
            i.useState)("")
              , [g,y] = (0,
            i.useState)("")
              , [j,w] = (0,
            i.useState)("")
              , [N,C] = (0,
            i.useState)(!1)
              , [D,S] = (0,
            i.useState)("")
              , [k,_] = (0,
            i.useState)("")
              , [A,E] = (0,
            i.useState)(!1)
              , [P,L] = (0,
            i.useState)("url")
              , [R,F] = (0,
            i.useState)(null)
              , [U,O] = (0,
            i.useState)(null)
              , [T,z] = (0,
            i.useState)("")
              , [I,V] = (0,
            i.useState)("")
              , [Z,M] = (0,
            i.useState)("")
              , [W,J] = (0,
            i.useState)("")
              , [K,Y] = (0,
            i.useState)("movie")
              , q = e => {
                for (let t of [/rutube\.ru\/video\/([a-zA-Z0-9]+)/, /rutube\.ru\/play\/embed\/([a-zA-Z0-9]+)/]) {
                    let r = e.match(t);
                    if (r)
                        return r[1]
                }
                return null
            }
              , G = e => {
                let t = q(e);
                return t ? "https://rutube.ru/play/embed/".concat(t, "/?skinColor=8e24aa") : e
            }
              , Q = e => {
                let t = q(e);
                return t ? "https://pic.rutube.ru/video/".concat(t) : ""
            }
              , B = e => null !== q(e)
              , H = async e => {
                let t = new FormData;
                t.append("file", e),
                t.append("upload_preset", "holstube_videos"),
                t.append("cloud_name", "dwvzwugpy");
                let r = await fetch("https://api.cloudinary.com/v1_1/dwvzwugpy/image/upload", {
                    method: "POST",
                    body: t
                });
                if (!r.ok)
                    throw Error("Ошибка загрузки на сервер");
                return (await r.json()).secure_url
            }
              , X = async t => {
                if (t.preventDefault(),
                _(""),
                !e) {
                    _("Войдите в аккаунт чтобы загружать видео");
                    return
                }
                if (!p.trim()) {
                    _("Введите название видео");
                    return
                }
                if (!g.trim()) {
                    _("Введите ссылку на видео");
                    return
                }
                let r = D.trim();
                if (!r) {
                    _("Добавьте хотя бы один тег (например: #игры #музыка)");
                    return
                }
                if (0 === r.split(/\s+/).filter(e => e.startsWith("#")).length) {
                    _("Теги должны начинаться с # (например: #игры #музыка)");
                    return
                }
                let a = function(e) {
                    let t = e.trim().toLowerCase();
                    if (t.includes("youtube.com") || t.includes("youtu.be")) {
                        for (let t of [/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/i, /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i])
                            if (t.test(e))
                                return {
                                    valid: !0,
                                    platform: "youtube"
                                };
                        return {
                            valid: !1,
                            error: "Неверный формат ссылки YouTube"
                        }
                    }
                    if (t.includes("rutube.ru")) {
                        for (let t of [/rutube\.ru\/video\/([a-zA-Z0-9]+)/i, /rutube\.ru\/play\/embed\/([a-zA-Z0-9]+)/i])
                            if (t.test(e))
                                return {
                                    valid: !0,
                                    platform: "rutube"
                                };
                        return {
                            valid: !1,
                            error: "Неверный формат ссылки RuTube"
                        }
                    }
                    if (t.includes("vk.com") || t.includes("vkvideo.ru")) {
                        for (let t of [/vk\.com\/video(-?\d+_\d+)/i, /vk\.com\/clip(-?\d+_\d+)/i, /vk\.com\/video\?z=video(-?\d+_\d+)/i, /vkvideo\.ru\/video(-?\d+_\d+)/i])
                            if (t.test(e))
                                return {
                                    valid: !0,
                                    platform: "vk"
                                };
                        return {
                            valid: !1,
                            error: "Неверный формат ссылки VK. Используйте формат: vk.com/video-123_456"
                        }
                    }
                    return {
                        valid: !1,
                        error: "Разрешены только ссылки с YouTube, RuTube или VK"
                    }
                }(g);
                if (!a.valid) {
                    _(a.error || "Неверная ссылка на видео");
                    return
                }
                let i = c(p, f);
                if (!i.isClean) {
                    _(i.reason || "Контент не прошёл модерацию");
                    return
                }
                try {
                    new URL(g.trim())
                } catch (e) {
                    _("Введите корректную ссылку на видео");
                    return
                }
                try {
                    E(!0);
                    let t = await o.aI(e.id);
                    if (!t.canUpload) {
                        _("Лимит загрузок: ".concat(t.limit, " видео в день. Вы уже загрузили ").concat(t.todayCount, ".")),
                        E(!1);
                        return
                    }
                    let r = j.trim();
                    if ("file" === P && R)
                        try {
                            r = await H(R)
                        } catch (e) {
                            console.error("Thumbnail upload failed:", e)
                        }
                    let a = await o.Ty({
                        title: p.trim(),
                        description: "".concat(D.trim(), "\n\n").concat(f.trim()).trim(),
                        videoUrl: g.trim(),
                        thumbnailUrl: r || g.trim(),
                        authorId: e.id,
                        authorName: e.displayName || "Пользователь",
                        isShort: N
                    });
                    N ? u.push("/shorts") : u.push("/watch/".concat(a))
                } catch (t) {
                    console.error("Upload error:", t);
                    let e = t instanceof Error ? t.message : "Ошибка загрузки";
                    e.includes("fetch") || e.includes("network") || e.includes("timeout") ? _("Сервер просыпается... Попробуйте через 10 секунд") : _(e),
                    E(!1)
                }
            }
              , $ = async t => {
                if (t.preventDefault(),
                _(""),
                !e) {
                    _("Войдите в аккаунт");
                    return
                }
                if (!T.trim()) {
                    _("Введите название фильма");
                    return
                }
                if (!Z.trim()) {
                    _("Введите ссылку на Rutube");
                    return
                }
                if (!B(Z)) {
                    _("Ссылка должна быть с Rutube (rutube.ru/video/...)");
                    return
                }
                if (!W) {
                    _("Выберите жанр");
                    return
                }
                let r = c(T, I);
                if (!r.isClean) {
                    _(r.reason || "Контент не прошёл модерацию");
                    return
                }
                try {
                    E(!0);
                    let t = await o.aI(e.id);
                    if (!t.canUpload) {
                        _("Лимит загрузок: ".concat(t.limit, " видео в день. Вы уже загрузили ").concat(t.todayCount, ".")),
                        E(!1);
                        return
                    }
                    let r = G(Z)
                      , a = Q(Z)
                      , i = d.find(e => e.id === W)
                      , s = "[кинотеатр] [rutube] #".concat("movie" === K ? "фильм" : "сериал", " #").concat((null == i ? void 0 : i.name.toLowerCase()) || W, "\n\n").concat(I)
                      , n = await o.Ty({
                        title: T.trim(),
                        description: s,
                        videoUrl: r,
                        thumbnailUrl: a || "https://via.placeholder.com/400x600/1a1a2e/9333EA?text=" + encodeURIComponent(T),
                        authorId: e.id,
                        authorName: e.displayName || "Пользователь",
                        isShort: !1
                    });
                    u.push("/watch/".concat(n))
                } catch (e) {
                    console.error("Movie upload error:", e),
                    _(e instanceof Error ? e.message : "Ошибка загрузки"),
                    E(!1)
                }
            }
            ;
            return t ? (0,
            a.jsx)("div", {
                className: "min-h-screen bg-background flex items-center justify-center",
                children: (0,
                a.jsx)("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"
                })
            }) : r && e ? (0,
            a.jsx)("div", {
                className: "min-h-screen bg-background py-8",
                children: (0,
                a.jsxs)("div", {
                    className: "max-w-2xl mx-auto px-4",
                    children: [(0,
                    a.jsx)("h1", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "Загрузить контент"
                    }), (0,
                    a.jsx)("p", {
                        className: "text-text-secondary mb-6",
                        children: "Поделитесь видео или фильмом"
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex gap-2 p-1 bg-surface rounded-xl mb-6",
                        children: [(0,
                        a.jsxs)("button", {
                            type: "button",
                            onClick: () => {
                                h("video"),
                                _("")
                            }
                            ,
                            className: "flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ".concat("video" === x ? "bg-purple-600 text-white" : "text-text-secondary hover:text-white"),
                            children: [(0,
                            a.jsx)("span", {
                                children: "\uD83D\uDCF9"
                            }), " Видео"]
                        }), (0,
                        a.jsxs)("button", {
                            type: "button",
                            onClick: () => {
                                h("movie"),
                                _("")
                            }
                            ,
                            className: "flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ".concat("movie" === x ? "bg-purple-600 text-white" : "text-text-secondary hover:text-white"),
                            children: [(0,
                            a.jsx)("span", {
                                children: "\uD83C\uDFAC"
                            }), " Фильм"]
                        })]
                    }), k && (0,
                    a.jsx)("div", {
                        className: "bg-red-900/30 border border-red-600/50 rounded-lg p-3 text-red-400 mb-6",
                        children: k
                    }), "video" === x && (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            className: "bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-3 mb-4",
                            children: (0,
                            a.jsx)("p", {
                                className: "text-yellow-400 text-sm",
                                children: "\uD83D\uDCCE Загрузка только по ссылке (YouTube, VK, RuTube). Лимит: 5 видео в день."
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "bg-red-900/20 border border-red-600/30 rounded-lg p-3 mb-6",
                            children: (0,
                            a.jsx)("p", {
                                className: "text-red-400 text-sm",
                                children: "⚠️ Запрещено: 18+ контент, насилие, спам, казино"
                            })
                        }), (0,
                        a.jsxs)("form", {
                            onSubmit: X,
                            className: "space-y-6",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "bg-surface-light rounded-xl p-6",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-3",
                                    children: "Ссылка на видео *"
                                }), (0,
                                a.jsx)("input", {
                                    type: "url",
                                    value: g,
                                    onChange: e => y(e.target.value),
                                    disabled: A,
                                    placeholder: "https://youtube.com/watch?v=...",
                                    className: "input-field disabled:opacity-50"
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "bg-surface-light rounded-xl p-6",
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-3",
                                    children: "Превью (необязательно)"
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex gap-2 p-1 bg-surface rounded-lg mb-4",
                                    children: [(0,
                                    a.jsx)("button", {
                                        type: "button",
                                        onClick: () => L("url"),
                                        className: "flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ".concat("url" === P ? "bg-purple-600 text-white" : "text-text-secondary hover:text-white"),
                                        children: "По ссылке"
                                    }), (0,
                                    a.jsx)("button", {
                                        type: "button",
                                        onClick: () => L("file"),
                                        className: "flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-colors ".concat("file" === P ? "bg-purple-600 text-white" : "text-text-secondary hover:text-white"),
                                        children: "Загрузить файл"
                                    })]
                                }), "url" === P ? (0,
                                a.jsx)("input", {
                                    type: "url",
                                    value: j,
                                    onChange: e => w(e.target.value),
                                    disabled: A,
                                    placeholder: "https://example.com/thumbnail.jpg",
                                    className: "input-field disabled:opacity-50"
                                }) : (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsx)("input", {
                                        ref: m,
                                        type: "file",
                                        accept: "image/*",
                                        onChange: e => {
                                            var t;
                                            let r = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
                                            if (!r)
                                                return;
                                            if (!r.type.startsWith("image/")) {
                                                _("Выберите изображение");
                                                return
                                            }
                                            if (r.size > 3145728) {
                                                _("Максимальный размер превью: 3 МБ");
                                                return
                                            }
                                            F(r),
                                            _("");
                                            let a = new FileReader;
                                            a.onload = e => {
                                                var t;
                                                O(null === (t = e.target) || void 0 === t ? void 0 : t.result)
                                            }
                                            ,
                                            a.readAsDataURL(r)
                                        }
                                        ,
                                        disabled: A,
                                        className: "hidden"
                                    }), (0,
                                    a.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            var e;
                                            return null === (e = m.current) || void 0 === e ? void 0 : e.click()
                                        }
                                        ,
                                        disabled: A,
                                        className: "w-full py-4 border-2 border-dashed border-border rounded-lg hover:border-purple-500 transition-colors disabled:opacity-50",
                                        children: U ? (0,
                                        a.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0,
                                            a.jsx)("img", {
                                                src: U,
                                                alt: "Preview",
                                                className: "max-h-32 mx-auto rounded-lg mb-2"
                                            }), (0,
                                            a.jsx)("p", {
                                                className: "text-green-400 text-sm",
                                                children: null == R ? void 0 : R.name
                                            })]
                                        }) : (0,
                                        a.jsxs)("div", {
                                            className: "text-center",
                                            children: [(0,
                                            a.jsx)("p", {
                                                className: "text-text-secondary text-sm",
                                                children: "Нажмите чтобы выбрать изображение"
                                            }), (0,
                                            a.jsx)("p", {
                                                className: "text-text-secondary text-xs mt-1",
                                                children: "JPG, PNG, WebP (макс. 3 МБ)"
                                            })]
                                        })
                                    })]
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Название *"
                                }), (0,
                                a.jsx)("input", {
                                    type: "text",
                                    value: p,
                                    onChange: e => b(e.target.value),
                                    disabled: A,
                                    placeholder: "Введите название видео",
                                    className: "input-field disabled:opacity-50",
                                    maxLength: 100
                                }), (0,
                                a.jsxs)("div", {
                                    className: "text-right text-text-secondary text-xs mt-1",
                                    children: [p.length, "/100"]
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Описание"
                                }), (0,
                                a.jsx)("textarea", {
                                    value: f,
                                    onChange: e => v(e.target.value),
                                    disabled: A,
                                    placeholder: "Расскажите о вашем видео",
                                    rows: 4,
                                    className: "input-field resize-none disabled:opacity-50",
                                    maxLength: 5e3
                                }), (0,
                                a.jsxs)("div", {
                                    className: "text-right text-text-secondary text-xs mt-1",
                                    children: [f.length, "/5000"]
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Теги *"
                                }), (0,
                                a.jsx)("input", {
                                    type: "text",
                                    value: D,
                                    onChange: e => S(e.target.value),
                                    disabled: A,
                                    placeholder: "#игры #музыка #влог #обзор",
                                    className: "input-field disabled:opacity-50",
                                    maxLength: 200
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-text-secondary text-xs mt-1",
                                    children: "Добавьте теги через пробел (начинаются с #)"
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0,
                                a.jsx)("input", {
                                    type: "checkbox",
                                    id: "isShort",
                                    checked: N,
                                    onChange: e => C(e.target.checked),
                                    disabled: A,
                                    className: "w-5 h-5 rounded border-border bg-surface text-purple-600 focus:ring-purple-500"
                                }), (0,
                                a.jsx)("label", {
                                    htmlFor: "isShort",
                                    className: "text-text-primary cursor-pointer",
                                    children: "Это Short (вертикальное видео до 60 сек)"
                                })]
                            }), (0,
                            a.jsx)("button", {
                                type: "submit",
                                disabled: A || !p.trim() || !g.trim() || !D.trim(),
                                className: "w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                children: A ? (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"
                                    }), "Загрузка..."]
                                }) : "\uD83D\uDE80 Опубликовать"
                            })]
                        })]
                    }), "movie" === x && (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            className: "bg-blue-900/20 border border-blue-600/30 rounded-lg p-4 mb-6",
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "text-2xl",
                                    children: "\uD83C\uDFAC"
                                }), (0,
                                a.jsxs)("div", {
                                    children: [(0,
                                    a.jsx)("p", {
                                        className: "text-blue-400 font-medium",
                                        children: "Загрузка фильмов"
                                    }), (0,
                                    a.jsx)("p", {
                                        className: "text-blue-400/70 text-sm",
                                        children: "Вставьте ссылку или код плеера с Rutube"
                                    })]
                                })]
                            })
                        }), (0,
                        a.jsxs)("form", {
                            onSubmit: $,
                            className: "space-y-6",
                            children: [(0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-3",
                                    children: "Тип контента"
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex gap-3",
                                    children: [(0,
                                    a.jsxs)("button", {
                                        type: "button",
                                        onClick: () => Y("movie"),
                                        className: "flex-1 py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ".concat("movie" === K ? "bg-purple-600 text-white" : "bg-surface text-text-secondary hover:bg-surface-light"),
                                        children: [(0,
                                        a.jsx)("span", {
                                            children: "\uD83C\uDFAC"
                                        }), " Фильм"]
                                    }), (0,
                                    a.jsxs)("button", {
                                        type: "button",
                                        onClick: () => Y("series"),
                                        className: "flex-1 py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ".concat("series" === K ? "bg-purple-600 text-white" : "bg-surface text-text-secondary hover:bg-surface-light"),
                                        children: [(0,
                                        a.jsx)("span", {
                                            children: "\uD83D\uDCFA"
                                        }), " Сериал"]
                                    })]
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Название *"
                                }), (0,
                                a.jsx)("input", {
                                    type: "text",
                                    value: T,
                                    onChange: e => z(e.target.value),
                                    disabled: A,
                                    placeholder: "Например: Интерстеллар (2014)",
                                    className: "input-field disabled:opacity-50",
                                    maxLength: 100
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Ссылка или код плеера Rutube *"
                                }), (0,
                                a.jsx)("textarea", {
                                    value: Z,
                                    onChange: e => M(e.target.value),
                                    disabled: A,
                                    placeholder: "Вставьте ссылку (rutube.ru/video/...) или код плеера (<iframe ...>)",
                                    rows: 3,
                                    className: "input-field resize-none disabled:opacity-50 font-mono text-sm"
                                }), Z && q(Z) && (0,
                                a.jsxs)("div", {
                                    className: "mt-3 p-3 bg-surface rounded-lg",
                                    children: [(0,
                                    a.jsx)("p", {
                                        className: "text-green-400 text-sm mb-2",
                                        children: "✓ Видео найдено! Превью загружено автоматически"
                                    }), (0,
                                    a.jsx)("img", {
                                        src: Q(Z),
                                        alt: "Preview",
                                        className: "w-32 h-20 object-cover rounded",
                                        onError: e => e.target.style.display = "none"
                                    })]
                                }), Z && !q(Z) && (0,
                                a.jsx)("p", {
                                    className: "text-red-400 text-sm mt-2",
                                    children: "⚠️ Не удалось найти ID видео. Проверьте ссылку."
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-3",
                                    children: "Жанр *"
                                }), (0,
                                a.jsx)("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: d.map(e => (0,
                                    a.jsxs)("button", {
                                        type: "button",
                                        onClick: () => J(e.id),
                                        className: "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ".concat(W === e.id ? "bg-purple-600 text-white" : "bg-surface text-text-secondary hover:bg-surface-light"),
                                        children: [(0,
                                        a.jsx)("span", {
                                            children: e.icon
                                        }), e.name]
                                    }, e.id))
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsx)("label", {
                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                    children: "Описание"
                                }), (0,
                                a.jsx)("textarea", {
                                    value: I,
                                    onChange: e => V(e.target.value),
                                    disabled: A,
                                    placeholder: "Краткое описание фильма...",
                                    rows: 3,
                                    className: "input-field resize-none disabled:opacity-50",
                                    maxLength: 2e3
                                })]
                            }), (0,
                            a.jsx)("button", {
                                type: "submit",
                                disabled: A || !T.trim() || !Z.trim() || !W,
                                className: "w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                children: A ? (0,
                                a.jsxs)(a.Fragment, {
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"
                                    }), "Загрузка..."]
                                }) : "\uD83C\uDFAC Добавить в кинотеатр"
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "mt-6 text-center",
                            children: (0,
                            a.jsx)(n.default, {
                                href: "/cinema",
                                className: "text-purple-400 hover:text-purple-300 text-sm",
                                children: "Перейти в кинотеатр →"
                            })
                        })]
                    })]
                })
            }) : null
        }
    },
    4362: function(e, t, r) {
        "use strict";
        r.d(t, {
            AuthProvider: function() {
                return d
            },
            a: function() {
                return u
            }
        });
        var a = r(7437)
          , i = r(2265)
          , s = r(5526);
        let n = "holstube_user_cache";
        function l(e) {
            try {
                e ? localStorage.setItem(n, JSON.stringify(e)) : localStorage.removeItem(n)
            } catch (e) {}
        }
        let o = (0,
        i.createContext)(void 0);
        function u() {
            let e = (0,
            i.useContext)(o);
            if (void 0 === e)
                throw Error("useAuth must be used within an AuthProvider");
            return e
        }
        function d(e) {
            let {children: t} = e
              , [r,u] = (0,
            i.useState)(null)
              , [d,c] = (0,
            i.useState)(null)
              , [m,x] = (0,
            i.useState)(null)
              , [h,p] = (0,
            i.useState)(!0)
              , [b,f] = (0,
            i.useState)(!1)
              , [v,g] = (0,
            i.useState)(null)
              , y = async e => {
                var t, r, a, i, o;
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
                d && d.id === e.id && u(d);
                try {
                    let a = s.O.from("users").select("*").or("auth_id.eq.".concat(e.id, ",id.eq.").concat(e.id)).single()
                      , i = new Promise(e => setTimeout( () => e({
                        data: null,
                        error: Error("Timeout")
                    }), 3e3))
                      , {data: n, error: c} = await Promise.race([a, i]);
                    if (!c && n) {
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
                        u(t),
                        l(t);
                        return
                    }
                    if (d && d.id === e.id)
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
                    u(x),
                    l(x)
                } catch (r) {
                    if (console.error("loadUserProfile error:", r),
                    d && d.id === e.id)
                        return;
                    let t = (null === (a = e.user_metadata) || void 0 === a ? void 0 : a.display_name) || (null === (i = e.email) || void 0 === i ? void 0 : i.split("@")[0]) || "User";
                    u({
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
            i.useEffect)( () => {
                let e = !0;
                (async () => {
                    try {
                        var t;
                        let {data: {session: r}} = await s.O.auth.getSession();
                        if (!e)
                            return;
                        x(r),
                        c(null !== (t = null == r ? void 0 : r.user) && void 0 !== t ? t : null),
                        (null == r ? void 0 : r.user) && await y(r.user)
                    } catch (e) {
                        console.error("Session init error:", e)
                    } finally {
                        e && p(!1)
                    }
                }
                )();
                let {data: {subscription: t}} = s.O.auth.onAuthStateChange(async (t, r) => {
                    var a;
                    if (e) {
                        if (x(r),
                        c(null !== (a = null == r ? void 0 : r.user) && void 0 !== a ? a : null),
                        null == r ? void 0 : r.user)
                            try {
                                await y(r.user)
                            } catch (e) {
                                console.error("Load profile error:", e)
                            }
                        else
                            u(null);
                        p(!1)
                    }
                }
                )
                  , r = () => {
                    "visible" === document.visibilityState && e && s.O.auth.refreshSession().catch( () => {
                        s.O.auth.getSession().catch( () => {}
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
            let j = async (e, t, r) => {
                if (t.length < 6)
                    throw Error("Пароль должен быть минимум 6 символов");
                let {data: a, error: i} = await s.O.auth.signUp({
                    email: e.toLowerCase(),
                    password: t,
                    options: {
                        data: {
                            display_name: r
                        }
                    }
                });
                if (i) {
                    if (i.message.includes("already registered"))
                        throw Error("Аккаунт с этим email уже существует");
                    if (i.message.includes("rate limit") || 429 === i.status)
                        throw Error("Слишком много попыток. Подождите несколько минут и попробуйте снова.");
                    throw Error(i.message)
                }
                if (!a.user)
                    throw Error("Ошибка регистрации");
                return await new Promise(e => setTimeout(e, 1500)),
                await y(a.user),
                {
                    needsConfirmation: !1
                }
            }
              , w = async e => {
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
                l(null);
                let {data: r, error: a} = await s.O.auth.signInWithPassword({
                    email: e.toLowerCase(),
                    password: t
                });
                if (a)
                    throw Error("Неверный email или пароль");
                r.user && await y(r.user)
            }
              , C = async () => {
                await s.O.auth.signOut(),
                u(null),
                c(null),
                x(null),
                l(null)
            }
              , D = async () => {
                d && await y(d)
            }
            ;
            return (0,
            a.jsx)(o.Provider, {
                value: {
                    user: r,
                    supabaseUser: d,
                    session: m,
                    loading: h,
                    needsEmailConfirmation: b,
                    pendingEmail: v,
                    register: j,
                    login: N,
                    logout: C,
                    refreshUser: D,
                    resendConfirmation: w,
                    clearPendingEmail: () => {
                        f(!1),
                        g(null)
                    }
                },
                children: t
            })
        }
    },
    1896: function(e, t, r) {
        "use strict";
        r.d(t, {
            Q: function() {
                return n
            },
            v: function() {
                return l
            }
        });
        var a = r(2265)
          , i = r(9376)
          , s = r(4362);
        function n() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/login"
              , {user: t, loading: r} = (0,
            s.a)()
              , n = (0,
            i.useRouter)();
            return (0,
            a.useEffect)( () => {
                r || t || n.push(e)
            }
            , [t, r, n, e]),
            {
                isAuthenticated: !!t,
                isLoading: r,
                user: t
            }
        }
        function l() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/"
              , {user: t, loading: r} = (0,
            s.a)()
              , n = (0,
            i.useRouter)();
            return (0,
            a.useEffect)( () => {
                !r && t && n.push(e)
            }
            , [t, r, n, e]),
            {
                isAuthenticated: !!t,
                isLoading: r
            }
        }
    },
    6153: function(e, t, r) {
        "use strict";
        r.d(t, {
            C: function() {
                return a
            },
            u: function() {
                return i
            }
        });
        let a = ["porn", "xxx", "sex", "nude", "naked", "nsfw", "18+", "gore", "blood", "kill", "murder", "death", "torture", "порно", "секс", "голый", "голая", "эротика", "xxx", "кровь", "убийство", "насилие", "жесть", "шок", "смерть", "casino", "казино", "ставки", "bet", "gambling"]
          , i = {
            adult: "18+ контент",
            violence: "Насилие / жестокость",
            spam: "Спам / реклама",
            harassment: "Оскорбления / травля",
            copyright: "Нарушение авторских прав",
            other: "Другое"
        }
    }
}, function(e) {
    e.O(0, [972, 53, 944, 971, 117, 744], function() {
        return e(e.s = 3134)
    }),
    _N_E = e.O()
}
]);
