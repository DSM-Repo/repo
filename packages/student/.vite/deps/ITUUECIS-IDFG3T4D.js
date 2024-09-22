import {
  Devtools,
  PiPProvider,
  QueryDevtoolsContext,
  THEME_PREFERENCE,
  ThemeContext,
  createLocalStorage
} from "./chunk-M6RRUTQI.js";
import {
  createComponent,
  createMemo,
  getPreferredColorScheme
} from "./chunk-MUGWC2D5.js";
import "./chunk-WOOG5QLI.js";

// ../../.yarn/cache/@tanstack-query-devtools-npm-5.56.1-46be28e173-4f50fccf9e.zip/node_modules/@tanstack/query-devtools/build/DevtoolsComponent/ITUUECIS.js
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
//# sourceMappingURL=ITUUECIS-IDFG3T4D.js.map
