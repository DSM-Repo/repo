import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

"use client";
import {
  createComponent,
  createSignal,
  lazy,
  mergeProps,
  render,
  setupStyleSheet
} from "./chunk-FJ6PQSLO.js";
import {
  onlineManager,
  useQueryClient
} from "./chunk-AKS6AMB6.js";
import {
  require_jsx_runtime
} from "./chunk-DOVVW7WR.js";
import {
  require_react
} from "./chunk-YB44LMLZ.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-7DBM7V7E.js";

// ../../.yarn/__virtual__/@tanstack-react-query-devtools-virtual-1174dfeaef/0/cache/@tanstack-react-query-devtools-npm-5.51.15-08d1994d17-cafe075d66.zip/node_modules/@tanstack/react-query-devtools/build/modern/index.js
var import_dist7 = __toESM(require_dist());
var import_dist8 = __toESM(require_dist2());
var import_dist9 = __toESM(require_dist3());

// ../../.yarn/__virtual__/@tanstack-react-query-devtools-virtual-1174dfeaef/0/cache/@tanstack-react-query-devtools-npm-5.51.15-08d1994d17-cafe075d66.zip/node_modules/@tanstack/react-query-devtools/build/modern/devtools.js
var import_dist4 = __toESM(require_dist(), 1);
var import_dist5 = __toESM(require_dist2(), 1);
var import_dist6 = __toESM(require_dist3(), 1);
var React = __toESM(require_react(), 1);

// ../../.yarn/cache/@tanstack-query-devtools-npm-5.51.15-3f226c52fa-9f7d8cbaf8.zip/node_modules/@tanstack/query-devtools/build/dev.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var import_dist3 = __toESM(require_dist3());
var _client, _onlineManager, _queryFlavor, _version, _isMounted, _styleNonce, _shadowDOMTarget, _buttonPosition, _position, _initialIsOpen, _errorTypes, _Component, _dispose, _a;
var TanstackQueryDevtools = (_a = class {
  constructor(config) {
    __privateAdd(this, _client);
    __privateAdd(this, _onlineManager);
    __privateAdd(this, _queryFlavor);
    __privateAdd(this, _version);
    __privateAdd(this, _isMounted, false);
    __privateAdd(this, _styleNonce);
    __privateAdd(this, _shadowDOMTarget);
    __privateAdd(this, _buttonPosition);
    __privateAdd(this, _position);
    __privateAdd(this, _initialIsOpen);
    __privateAdd(this, _errorTypes);
    __privateAdd(this, _Component);
    __privateAdd(this, _dispose);
    const {
      client,
      queryFlavor,
      version,
      onlineManager: onlineManager2,
      buttonPosition,
      position,
      initialIsOpen,
      errorTypes,
      styleNonce,
      shadowDOMTarget
    } = config;
    __privateSet(this, _client, createSignal(client));
    __privateSet(this, _queryFlavor, queryFlavor);
    __privateSet(this, _version, version);
    __privateSet(this, _onlineManager, onlineManager2);
    __privateSet(this, _styleNonce, styleNonce);
    __privateSet(this, _shadowDOMTarget, shadowDOMTarget);
    __privateSet(this, _buttonPosition, createSignal(buttonPosition));
    __privateSet(this, _position, createSignal(position));
    __privateSet(this, _initialIsOpen, createSignal(initialIsOpen));
    __privateSet(this, _errorTypes, createSignal(errorTypes));
  }
  setButtonPosition(position) {
    __privateGet(this, _buttonPosition)[1](position);
  }
  setPosition(position) {
    __privateGet(this, _position)[1](position);
  }
  setInitialIsOpen(isOpen) {
    __privateGet(this, _initialIsOpen)[1](isOpen);
  }
  setErrorTypes(errorTypes) {
    __privateGet(this, _errorTypes)[1](errorTypes);
  }
  setClient(client) {
    __privateGet(this, _client)[1](client);
  }
  mount(el) {
    if (__privateGet(this, _isMounted)) {
      throw new Error("Devtools is already mounted");
    }
    const dispose = render(() => {
      const _self$ = this;
      const [btnPosition] = __privateGet(this, _buttonPosition);
      const [pos] = __privateGet(this, _position);
      const [isOpen] = __privateGet(this, _initialIsOpen);
      const [errors] = __privateGet(this, _errorTypes);
      const [queryClient] = __privateGet(this, _client);
      let Devtools;
      if (__privateGet(this, _Component)) {
        Devtools = __privateGet(this, _Component);
      } else {
        Devtools = lazy(() => import("./Q436JGP5-UQ2G3ML4.js"));
        __privateSet(this, _Component, Devtools);
      }
      setupStyleSheet(__privateGet(this, _styleNonce), __privateGet(this, _shadowDOMTarget));
      return createComponent(Devtools, mergeProps({
        get queryFlavor() {
          return __privateGet(_self$, _queryFlavor);
        },
        get version() {
          return __privateGet(_self$, _version);
        },
        get onlineManager() {
          return __privateGet(_self$, _onlineManager);
        },
        get shadowDOMTarget() {
          return __privateGet(_self$, _shadowDOMTarget);
        }
      }, {
        get client() {
          return queryClient();
        },
        get buttonPosition() {
          return btnPosition();
        },
        get position() {
          return pos();
        },
        get initialIsOpen() {
          return isOpen();
        },
        get errorTypes() {
          return errors();
        }
      }));
    }, el);
    __privateSet(this, _isMounted, true);
    __privateSet(this, _dispose, dispose);
  }
  unmount() {
    var _a2;
    if (!__privateGet(this, _isMounted)) {
      throw new Error("Devtools is not mounted");
    }
    (_a2 = __privateGet(this, _dispose)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _isMounted, false);
  }
}, _client = new WeakMap(), _onlineManager = new WeakMap(), _queryFlavor = new WeakMap(), _version = new WeakMap(), _isMounted = new WeakMap(), _styleNonce = new WeakMap(), _shadowDOMTarget = new WeakMap(), _buttonPosition = new WeakMap(), _position = new WeakMap(), _initialIsOpen = new WeakMap(), _errorTypes = new WeakMap(), _Component = new WeakMap(), _dispose = new WeakMap(), _a);

// ../../.yarn/__virtual__/@tanstack-react-query-devtools-virtual-1174dfeaef/0/cache/@tanstack-react-query-devtools-npm-5.51.15-08d1994d17-cafe075d66.zip/node_modules/@tanstack/react-query-devtools/build/modern/devtools.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function ReactQueryDevtools(props) {
  const queryClient = useQueryClient(props.client);
  const ref = React.useRef(null);
  const {
    buttonPosition,
    position,
    initialIsOpen,
    errorTypes,
    styleNonce,
    shadowDOMTarget
  } = props;
  const [devtools] = React.useState(
    new TanstackQueryDevtools({
      client: queryClient,
      queryFlavor: "React Query",
      version: "5",
      onlineManager,
      buttonPosition,
      position,
      initialIsOpen,
      errorTypes,
      styleNonce,
      shadowDOMTarget
    })
  );
  React.useEffect(() => {
    devtools.setClient(queryClient);
  }, [queryClient, devtools]);
  React.useEffect(() => {
    if (buttonPosition) {
      devtools.setButtonPosition(buttonPosition);
    }
  }, [buttonPosition, devtools]);
  React.useEffect(() => {
    if (position) {
      devtools.setPosition(position);
    }
  }, [position, devtools]);
  React.useEffect(() => {
    devtools.setInitialIsOpen(initialIsOpen || false);
  }, [initialIsOpen, devtools]);
  React.useEffect(() => {
    devtools.setErrorTypes(errorTypes || []);
  }, [errorTypes, devtools]);
  React.useEffect(() => {
    if (ref.current) {
      devtools.mount(ref.current);
    }
    return () => {
      devtools.unmount();
    };
  }, [devtools]);
  return (0, import_jsx_runtime.jsx)("div", { className: "tsqd-parent-container", ref });
}

// ../../.yarn/__virtual__/@tanstack-react-query-devtools-virtual-1174dfeaef/0/cache/@tanstack-react-query-devtools-npm-5.51.15-08d1994d17-cafe075d66.zip/node_modules/@tanstack/react-query-devtools/build/modern/index.js
var ReactQueryDevtools2 = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : ReactQueryDevtools;
export {
  ReactQueryDevtools2 as ReactQueryDevtools
};
//# sourceMappingURL=@tanstack_react-query-devtools.js.map
