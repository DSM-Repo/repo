import {
  Devtools,
  PiPProvider,
  QueryDevtoolsContext,
  THEME_PREFERENCE,
  ThemeContext,
  createLocalStorage
} from "./chunk-3P2M3F55.js";
import {
  createComponent,
  createMemo,
  getPreferredColorScheme
} from "./chunk-656MNHVL.js";
import "./chunk-WOOG5QLI.js";

// ../../.yarn/cache/@tanstack-query-devtools-npm-5.58.0-7c6cb7a798-3b0ad21503.zip/node_modules/@tanstack/query-devtools/build/DevtoolsComponent/H3J5RHJ6.js
var DevtoolsComponent = (props) => {
  const [localStore, setLocalStore] = createLocalStorage({
    prefix: "TanstackQueryDevtools"
  });
  const colorScheme = getPreferredColorScheme();
  const theme = createMemo(() => {
    const preference = localStore.theme_preference || THEME_PREFERENCE;
    if (preference !== "system")
      return preference;
    return colorScheme();
  });
  return createComponent(QueryDevtoolsContext.Provider, {
    value: props,
    get children() {
      return createComponent(PiPProvider, {
        localStore,
        setLocalStore,
        get children() {
          return createComponent(ThemeContext.Provider, {
            value: theme,
            get children() {
              return createComponent(Devtools, {
                localStore,
                setLocalStore
              });
            }
          });
        }
      });
    }
  });
};
var DevtoolsComponent_default = DevtoolsComponent;
export {
  DevtoolsComponent_default as default
};
//# sourceMappingURL=H3J5RHJ6-AGYEEESS.js.map
