import {
  defineComponent,
  h,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  ref,
  watch
} from "./chunk-VJWGEPT5.js";

// node_modules/vitepress-theme-async/main.ts
import "E:/Project/blog_vitePress/node_modules/vitepress-theme-async/styles/index.less";
import Layout from "E:/Project/blog_vitePress/node_modules/vitepress-theme-async/layouts/Layout.vue";
import NotFound from "E:/Project/blog_vitePress/node_modules/vitepress-theme-async/layouts/NotFound.vue";

// node_modules/vitepress-theme-async/blog.ts
import { useData, useRoute, useRouter, withBase } from "vitepress";
import failure from "E:/Project/blog_vitePress/node_modules/vitepress-theme-async/assets/failure.ico";
import errimg from "E:/Project/blog_vitePress/node_modules/vitepress-theme-async/assets/404.jpg";

// node_modules/vitepress-theme-async/package.json
var package_default = {
  name: "vitepress-theme-async",
  version: "0.0.23",
  repository: "git@github.com:MaLuns/vitepress-theme-async.git",
  author: "白云苍狗 <admin@imalun.com>",
  homepage: "https://vitepress-theme-async.imalun.com",
  bugs: {
    url: "https://github.com/MaLuns/vitepress-theme-async/issues"
  },
  license: "MIT",
  type: "module",
  main: "./main.ts",
  types: "./types/index.d.ts",
  exports: {
    ".": {
      default: "./main.ts"
    },
    "./config": {
      default: "./config/index.js"
    },
    "./plugin/page": {
      default: "./plugin/page.js"
    }
  },
  files: [
    "assets",
    "components",
    "composables",
    "config/index.js",
    "config/index.d.ts",
    "plugin/page.js",
    "plugin/page.d.ts",
    "layouts",
    "styles",
    "types",
    "utils",
    "blog.ts",
    "main.ts",
    "README_zh-CN.md",
    "README.md",
    "tsconfig.json"
  ],
  keywords: [
    "vitepress-theme",
    "blog-theme"
  ],
  scripts: {
    "config:dev": "tsup --watch",
    "config:build": "tsup"
  },
  dependencies: {
    "@vueuse/core": "^9.6.0",
    "gray-matter": "^4.0.3",
    feed: "^4.2.2",
    less: "^4.1.3"
  },
  devDependencies: {
    "@types/node": "^17.0.35",
    typescript: "^4.6.4",
    vue: "^3.2.45",
    vitepress: "^1.0.0-rc.21"
  }
};

// node_modules/vitepress-theme-async/utils/shared.ts
var dataPath = (data, paths) => {
  const keys = paths.split(".");
  if (!isObject(data)) return;
  const len = keys.length;
  for (let index = 0; index < len; index++) {
    const key = keys[index];
    if (!isObject(data[key]) && index < len - 1) {
      return;
    } else {
      data = data[key];
    }
  }
  return data;
};
var stringFormat = (str, ...vals) => {
  return vals.reduce((s, v, i) => s.replace(new RegExp("\\{" + i + "\\}", "g"), v), str);
};
var isObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
var isEmpty = (val) => val == null || !(Object.keys(val) || val).length;
var log = (str) => console.log(
  str,
  "color: white; background: #0078E7; padding:5px 0;margin: 0 0 2px 0;border-radius: 4px 0 0 4px;",
  "padding: 4px;border:1px solid #0078E7;border-radius: 0 4px 4px 0; background: linear-gradient(70deg, #e3f9eb, #d1dbff);"
);

// node_modules/vitepress-theme-async/utils/client/index.ts
var loadScript = (url, condition) => {
  return new Promise((resolve, reject) => {
    if (condition) {
      resolve();
    } else {
      const script = document.createElement("script");
      script.src = url;
      script.setAttribute("async", "false");
      script.onerror = reject;
      script.onload = () => resolve();
      document.head.appendChild(script);
    }
  });
};
var wrap = (el, wrapper, options = {}) => {
  var _a;
  if (typeof wrapper === "string") {
    wrapper = document.createElement(wrapper);
    for (const [key, value] of Object.entries(options)) {
      wrapper.setAttribute(key, value);
    }
  }
  (_a = el == null ? void 0 : el.parentNode) == null ? void 0 : _a.insertBefore(wrapper, el);
  wrapper.appendChild(el);
};
var initPictures = (url) => {
  const picts = () => {
    document.querySelectorAll("#article-container img:not(.no-fancybox)").forEach((img) => {
      var _a, _b;
      if (!((_b = (_a = img == null ? void 0 : img.parentElement) == null ? void 0 : _a.dataset) == null ? void 0 : _b.fancybox)) {
        let fancybox = "article";
        if (img.classList.contains("trm-light-icon")) {
          fancybox = "light";
        } else if (img.classList.contains("trm-dark-icon")) {
          fancybox = "dark";
        }
        wrap(img, "div", {
          "data-src": img.dataset.src || img.src,
          "data-fancybox": fancybox
        });
      }
    });
  };
  if (window.Fancybox) {
    picts();
  } else {
    loadScript(url, window.Fancybox).then(() => {
      window == null ? void 0 : window.Fancybox.bind("[data-fancybox]");
      window == null ? void 0 : window.Fancybox.bind('[data-fancybox="dark"],[data-fancybox="article"]', { groupAll: true });
      window == null ? void 0 : window.Fancybox.bind('[data-fancybox="light"],[data-fancybox="article"]', { groupAll: true });
      window.Fancybox.defaults.Hash = false;
      picts();
    });
  }
};
var intersectionObserver;
var initScrollAnimation = () => {
  intersectionObserver == null ? void 0 : intersectionObserver.disconnect();
  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.add("trm-active-el");
          intersectionObserver == null ? void 0 : intersectionObserver.unobserve(target);
        }
      });
    },
    { threshold: [0, 1], rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".trm-scroll-animation").forEach((element) => element && (intersectionObserver == null ? void 0 : intersectionObserver.observe(element)));
};
var initPostErrorImg = (url) => {
  const imgs = document.querySelectorAll("#article-container img");
  imgs.forEach((img) => img.setAttribute("onerror", `this.onerror=null;this.src="${url}";`));
  return imgs.length > 0;
};
var initVisibilitychange = (failure2, showText, hideText) => {
  const originTitle = document.title;
  const iconEls = Array.from(document.querySelectorAll('[rel="icon"]'));
  const icons = iconEls.map((item) => item.href);
  let titleTime;
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      iconEls.forEach((item) => {
        item.href = failure2;
      });
      document.title = hideText ?? "";
      clearTimeout(titleTime);
    } else {
      iconEls.forEach((item, index) => {
        item.href = icons[index];
      });
      document.title = showText + originTitle;
      titleTime = setTimeout(function() {
        document.title = originTitle;
      }, 2e3);
    }
  });
};
var initClipboard = (config) => {
  document.addEventListener("copy", function(event) {
    var _a;
    const clipboardData = event.clipboardData;
    if (!clipboardData) {
      return;
    }
    let author = config.author || "";
    const text = ((_a = window.getSelection()) == null ? void 0 : _a.toString()) || "";
    if (text) {
      event.preventDefault();
      const authorEl = document.getElementById("post-author");
      if (authorEl) {
        author = authorEl.innerText.replace("\n", "");
      }
      const license = config.license || "by-nc-sa";
      const ccVersion = config.license == "zero" ? "1.0" : "4.0";
      let originalLink = location.href;
      const originalLinkEl = document.getElementById("original-link");
      if (originalLinkEl) {
        originalLink = originalLinkEl.innerText.replace("\n", "");
      }
      const copyrightText = stringFormat(config.text, author, originalLink, license.toUpperCase(), ccVersion);
      clipboardData.setData("text/plain", text + copyrightText);
    }
  });
};

// node_modules/vitepress-theme-async/composables/mitt.ts
function mitt(all) {
  all = all || /* @__PURE__ */ new Map();
  return {
    /**
     * A Map of event names to registered handler functions.
     */
    all,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(type, handler) {
      const handlers = all.get(type);
      if (handlers) {
        handlers.push(handler);
      } else {
        all.set(type, [handler]);
      }
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(type, handler) {
      const handlers = all.get(type);
      if (handlers) {
        if (handler) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        } else {
          all.set(type, []);
        }
      }
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(type, evt) {
      let handlers = all.get(type);
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(evt);
        });
      }
      handlers = all.get("*");
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(type, evt);
        });
      }
    }
  };
}
var _mitt;
var getMitt = () => {
  if (_mitt) return _mitt;
  _mitt = mitt();
  return _mitt;
};

// node_modules/vitepress-theme-async/blog.ts
var useLang = () => inject("AsyncLanguageSymbol");
var useCurrentLang = () => {
  const lang = useLang();
  const { theme: theme2 } = useData();
  const languages = theme2.value.languages ?? {};
  const langData = languages[lang == null ? void 0 : lang.value] ?? languages["zh-Hans"];
  return langData;
};
var getLangText = (k, ...pras) => {
  const langData = useCurrentLang();
  let text = dataPath(langData, k) ?? k;
  if (pras.length) text = stringFormat(text, ...pras);
  return text;
};
function withConfigProvider(App) {
  return defineComponent({
    name: "ConfigProvider",
    setup(_, { slots }) {
      const { theme: theme2, site } = useData();
      const router = useRouter();
      const route = useRoute();
      const mitt2 = getMitt();
      const showMenu = ref(false);
      const language = ref(site.value.lang ?? "zh-Hans");
      let watcher;
      provide("AsyncShowMenuSymbol", showMenu);
      provide("AsyncLanguageSymbol", language);
      const favicon = theme2.value.favicon;
      const getCurLangText = (k, ...pras) => {
        const languages = theme2.value.languages ?? {};
        const langData = languages[language.value] ?? languages["zh-Hans"];
        let text = dataPath(langData, k) ?? k;
        if (pras.length) text = stringFormat(text, ...pras);
        return text;
      };
      const hideText = getCurLangText((favicon == null ? void 0 : favicon.hideText) ?? "");
      const showText = getCurLangText((favicon == null ? void 0 : favicon.showText) ?? "");
      const initPageUpdate = () => {
        var _a, _b;
        const eimg = ((_a = theme2.value.errorImg) == null ? void 0 : _a.postPage) ? withBase((_b = theme2.value.errorImg) == null ? void 0 : _b.postPage) : errimg;
        const flag = initPostErrorImg(eimg);
        nextTick(() => {
          var _a2, _b2, _c, _d;
          initScrollAnimation();
          !flag && initPostErrorImg(eimg);
          if ((_c = (_b2 = (_a2 = theme2.value.plugin) == null ? void 0 : _a2.plugins) == null ? void 0 : _b2.fancybox) == null ? void 0 : _c.js) {
            initPictures(((_d = theme2.value.plugin) == null ? void 0 : _d.thirdPartyProvider) + theme2.value.plugin.plugins.fancybox.js);
          }
        });
      };
      onMounted(() => {
        var _a, _b;
        log(`%c 🚀 Vitepress-Theme-Async ${package_default.version == "0.0.0" ? "Github" : package_default.version} %c https://github.com/MaLuns/hexo-theme-async `);
        log(`%c 📑 Vitepress-Theme-Async Docs %c ${package_default.homepage}`);
        mitt2.on("page:update", initPageUpdate);
        if (theme2.value.pageLoading) {
          const beforeRoute = router.onBeforeRouteChange;
          let lastDate;
          router.onBeforeRouteChange = function(to) {
            if (beforeRoute && beforeRoute(to) === false) return false;
            showMenu.value = false;
            document.documentElement.classList.add("page-animating");
            lastDate = (/* @__PURE__ */ new Date()).getTime();
          };
          const afterRoute = router.onAfterRouteChanged;
          router.onAfterRouteChanged = function(to) {
            afterRoute && afterRoute(to);
            const times = Math.max(600 - ((/* @__PURE__ */ new Date()).getTime() - lastDate), 0);
            setTimeout(() => document.documentElement.classList.remove("page-animating"), times);
          };
        }
        if (favicon == null ? void 0 : favicon.visibilitychange) {
          initVisibilitychange((favicon == null ? void 0 : favicon.hidden) ? withBase(favicon == null ? void 0 : favicon.hidden) : failure, showText, hideText);
        }
        if ((_a = theme2.value.creativeCommons) == null ? void 0 : _a.clipboard) {
          const authorTitle = getCurLangText("post.copyright.author");
          const linkTitle = getCurLangText("post.copyright.link");
          const licenseTitle = getCurLangText("post.copyright.licenseTitle");
          const licenseContent = getCurLangText("post.copyright.licenseContent", `CC {2} {3}`);
          const colon = getCurLangText("symbol.colon");
          initClipboard({
            author: theme2.value.author,
            license: (_b = theme2.value.creativeCommons) == null ? void 0 : _b.license,
            text: `

//${authorTitle}${colon}{0}
//${linkTitle}${colon}{1}
//${licenseTitle}${colon}${licenseContent}`
          });
        }
        watcher = watch(
          () => route.path,
          () => mitt2.emit("page:update"),
          { immediate: true, deep: true }
        );
      });
      onUnmounted(() => {
        mitt2.off("page:update", initPageUpdate);
        watcher == null ? void 0 : watcher();
      });
      return () => h(App, null, slots);
    }
  });
}

// node_modules/vitepress-theme-async/main.ts
var theme = {
  Layout: withConfigProvider(Layout),
  NotFound,
  enhanceApp({ app, siteData }) {
    app.config.globalProperties.$t = getLangText;
    const globalComponents = siteData.value.themeConfig.globalComponents;
    if (globalComponents) {
      let e = true;
      let modulesFiles = import.meta.glob("./components/global/*.vue", { import: "default", eager: true });
      e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob("../node_modules/vitepress-theme-async/components/global/*.vue", { import: "default", eager: true }));
      e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob("../../node_modules/vitepress-theme-async/components/global/*.vue", { import: "default", eager: true }));
      e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob("../../../node_modules/vitepress-theme-async/components/global/*.vue", { import: "default", eager: true }));
      e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob("../../../../node_modules/vitepress-theme-async/components/global/*.vue", { import: "default", eager: true }));
      e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob("../../../../../node_modules/vitepress-theme-async/components/global/*.vue", { import: "default", eager: true }));
      e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob("../../../../../../node_modules/vitepress-theme-async/components/global/*.vue", { import: "default", eager: true }));
      e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob("../../../../../../../node_modules/vitepress-theme-async/components/global/*.vue", { import: "default", eager: true }));
      e && (e = isEmpty(modulesFiles)) && (modulesFiles = import.meta.glob("../../../../../../../../node_modules/vitepress-theme-async/components/global/*.vue", { import: "default", eager: true }));
      const flag = Array.isArray(globalComponents);
      for (const path in modulesFiles) {
        const componentName = path.split("/").reverse()[0].replace(/.vue$/, "");
        if (!flag || flag && globalComponents.includes(componentName)) {
          app.component(componentName, modulesFiles[path]);
        }
      }
    }
  }
};
var defineTheme = (userTheme) => {
  return {
    ...theme,
    ...userTheme,
    async enhanceApp(ctx) {
      var _a, _b;
      (_a = userTheme.enhanceApp) == null ? void 0 : _a.call(userTheme, ctx);
      (_b = theme.enhanceApp) == null ? void 0 : _b.call(theme, ctx);
    }
  };
};
var main_default = theme;
export {
  main_default as default,
  defineTheme
};
//# sourceMappingURL=vitepress-theme-async.js.map
