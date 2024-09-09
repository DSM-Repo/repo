import {
  ContentView,
  ParentPanel,
  PiPProvider,
  QueryDevtoolsContext,
  THEME_PREFERENCE,
  ThemeContext,
  createLocalStorage
} from "./chunk-KT3G2FSQ.js";
import {
  createComponent,
  createMemo,
  getPreferredColorScheme
} from "./chunk-3KT6LMAR.js";
import "./chunk-WOOG5QLI.js";

// ../../.yarn/cache/@tanstack-query-devtools-npm-5.55.1-a8003a2b08-ff37d9b372.zip/node_modules/@tanstack/query-devtools/build/DevtoolsPanelComponent/CNBMJT5I.js
var DevtoolsPanelComponent = (props) => {
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
        disabled: true,
        localStore,
        setLocalStore,
        get children() {
          return createComponent(ThemeContext.Provider, {
            value: theme,
            get children() {
              return createComponent(ParentPanel, {
                get children() {
                  return createComponent(ContentView, {
                    localStore,
                    setLocalStore,
                    get onClose() {
                      return props.onClose;
                    },
                    showPanelViewOnly: true
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};
var DevtoolsPanelComponent_default = DevtoolsPanelComponent;
export {
  DevtoolsPanelComponent_default as default
};
//# sourceMappingURL=CNBMJT5I-II5NSIP7.js.map
