"use client";
import {
  createComponent,
  createSignal,
  lazy,
  mergeProps,
  render,
  setupStyleSheet
} from "./chunk-656MNHVL.js";
import {
  onlineManager,
  useQueryClient
} from "./chunk-APZCIQOW.js";
import {
  require_jsx_runtime
} from "./chunk-T626GWXX.js";
import {
  require_react
} from "./chunk-ZK6F47AF.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __toESM
} from "./chunk-WOOG5QLI.js";

// ../../.yarn/__virtual__/@tanstack-react-query-devtools-virtual-7b4cb07e81/0/cache/@tanstack-react-query-devtools-npm-5.58.0-8b4ae6b037-6a3ad49938.zip/node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtools.js
var React = __toESM(require_react(), 1);

// ../../.yarn/cache/@tanstack-query-devtools-npm-5.58.0-7c6cb7a798-3b0ad21503.zip/node_modules/@tanstack/query-devtools/build/dev.js
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
        Devtools = lazy(() => import("./H3J5RHJ6-AGYEEESS.js"));
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
    var _a3;
    if (!__privateGet(this, _isMounted)) {
      throw new Error("Devtools is not mounted");
    }
    (_a3 = __privateGet(this, _dispose)) == null ? void 0 : _a3.call(this);
    __privateSet(this, _isMounted, false);
  }
}, _client = new WeakMap(), _onlineManager = new WeakMap(), _queryFlavor = new WeakMap(), _version = new WeakMap(), _isMounted = new WeakMap(), _styleNonce = new WeakMap(), _shadowDOMTarget = new WeakMap(), _buttonPosition = new WeakMap(), _position = new WeakMap(), _initialIsOpen = new WeakMap(), _errorTypes = new WeakMap(), _Component = new WeakMap(), _dispose = new WeakMap(), _a);
var _client2, _onlineManager2, _queryFlavor2, _version2, _isMounted2, _styleNonce2, _shadowDOMTarget2, _buttonPosition2, _position2, _initialIsOpen2, _errorTypes2, _onClose, _Component2, _dispose2, _a2;
var TanstackQueryDevtoolsPanel = (_a2 = class {
  constructor(config) {
    __privateAdd(this, _client2);
    __privateAdd(this, _onlineManager2);
    __privateAdd(this, _queryFlavor2);
    __privateAdd(this, _version2);
    __privateAdd(this, _isMounted2, false);
    __privateAdd(this, _styleNonce2);
    __privateAdd(this, _shadowDOMTarget2);
    __privateAdd(this, _buttonPosition2);
    __privateAdd(this, _position2);
    __privateAdd(this, _initialIsOpen2);
    __privateAdd(this, _errorTypes2);
    __privateAdd(this, _onClose);
    __privateAdd(this, _Component2);
    __privateAdd(this, _dispose2);
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
      shadowDOMTarget,
      onClose
    } = config;
    __privateSet(this, _client2, createSignal(client));
    __privateSet(this, _queryFlavor2, queryFlavor);
    __privateSet(this, _version2, version);
    __privateSet(this, _onlineManager2, onlineManager2);
    __privateSet(this, _styleNonce2, styleNonce);
    __privateSet(this, _shadowDOMTarget2, shadowDOMTarget);
    __privateSet(this, _buttonPosition2, createSignal(buttonPosition));
    __privateSet(this, _position2, createSignal(position));
    __privateSet(this, _initialIsOpen2, createSignal(initialIsOpen));
    __privateSet(this, _errorTypes2, createSignal(errorTypes));
    __privateSet(this, _onClose, createSignal(onClose));
  }
  setButtonPosition(position) {
    __privateGet(this, _buttonPosition2)[1](position);
  }
  setPosition(position) {
    __privateGet(this, _position2)[1](position);
  }
  setInitialIsOpen(isOpen) {
    __privateGet(this, _initialIsOpen2)[1](isOpen);
  }
  setErrorTypes(errorTypes) {
    __privateGet(this, _errorTypes2)[1](errorTypes);
  }
  setClient(client) {
    __privateGet(this, _client2)[1](client);
  }
  setOnClose(onClose) {
    __privateGet(this, _onClose)[1](() => onClose);
  }
  mount(el) {
    if (__privateGet(this, _isMounted2)) {
      throw new Error("Devtools is already mounted");
    }
    const dispose = render(() => {
      const _self$ = this;
      const [btnPosition] = __privateGet(this, _buttonPosition2);
      const [pos] = __privateGet(this, _position2);
      const [isOpen] = __privateGet(this, _initialIsOpen2);
      const [errors] = __privateGet(this, _errorTypes2);
      const [queryClient] = __privateGet(this, _client2);
      const [onClose] = __privateGet(this, _onClose);
      let Devtools;
      if (__privateGet(this, _Component2)) {
        Devtools = __privateGet(this, _Component2);
      } else {
        Devtools = lazy(() => import("./XV5R7GGF-MWSPN2YB.js"));
        __privateSet(this, _Component2, Devtools);
      }
      setupStyleSheet(__privateGet(this, _styleNonce2), __privateGet(this, _shadowDOMTarget2));
      return createComponent(Devtools, mergeProps({
        get queryFlavor() {
          return __privateGet(_self$, _queryFlavor2);
        },
        get version() {
          return __privateGet(_self$, _version2);
        },
        get onlineManager() {
          return __privateGet(_self$, _onlineManager2);
        },
        get shadowDOMTarget() {
          return __privateGet(_self$, _shadowDOMTarget2);
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
        },
        get onClose() {
          return onClose();
        }
      }));
    }, el);
    __privateSet(this, _isMounted2, true);
    __privateSet(this, _dispose2, dispose);
  }
  unmount() {
    var _a3;
    if (!__privateGet(this, _isMounted2)) {
      throw new Error("Devtools is not mounted");
    }
    (_a3 = __privateGet(this, _dispose2)) == null ? void 0 : _a3.call(this);
    __privateSet(this, _isMounted2, false);
  }
}, _client2 = new WeakMap(), _onlineManager2 = new WeakMap(), _queryFlavor2 = new WeakMap(), _version2 = new WeakMap(), _isMounted2 = new WeakMap(), _styleNonce2 = new WeakMap(), _shadowDOMTarget2 = new WeakMap(), _buttonPosition2 = new WeakMap(), _position2 = new WeakMap(), _initialIsOpen2 = new WeakMap(), _errorTypes2 = new WeakMap(), _onClose = new WeakMap(), _Component2 = new WeakMap(), _dispose2 = new WeakMap(), _a2);

// ../../.yarn/__virtual__/@tanstack-react-query-devtools-virtual-7b4cb07e81/0/cache/@tanstack-react-query-devtools-npm-5.58.0-8b4ae6b037-6a3ad49938.zip/node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtools.js
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

// ../../.yarn/__virtual__/@tanstack-react-query-devtools-virtual-7b4cb07e81/0/cache/@tanstack-react-query-devtools-npm-5.58.0-8b4ae6b037-6a3ad49938.zip/node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtoolsPanel.js
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function ReactQueryDevtoolsPanel(props) {
  const queryClient = useQueryClient(props.client);
  const ref = React2.useRef(null);
  const { errorTypes, styleNonce, shadowDOMTarget } = props;
  const [devtools] = React2.useState(
    new TanstackQueryDevtoolsPanel({
      client: queryClient,
      queryFlavor: "React Query",
      version: "5",
      onlineManager,
      buttonPosition: "bottom-left",
      position: "bottom",
      initialIsOpen: true,
      errorTypes,
      styleNonce,
      shadowDOMTarget,
      onClose: props.onClose
    })
  );
  React2.useEffect(() => {
    devtools.setClient(queryClient);
  }, [queryClient, devtools]);
  React2.useEffect(() => {
    devtools.setOnClose(props.onClose ?? (() => {
    }));
  }, [props.onClose, devtools]);
  React2.useEffect(() => {
    devtools.setErrorTypes(errorTypes || []);
  }, [errorTypes, devtools]);
  React2.useEffect(() => {
    if (ref.current) {
      devtools.mount(ref.current);
    }
    return () => {
      devtools.unmount();
    };
  }, [devtools]);
  return (0, import_jsx_runtime2.jsx)(
    "div",
    {
      style: { height: "500px", ...props.style },
      className: "tsqd-parent-container",
      ref
    }
  );
}

// ../../.yarn/__virtual__/@tanstack-react-query-devtools-virtual-7b4cb07e81/0/cache/@tanstack-react-query-devtools-npm-5.58.0-8b4ae6b037-6a3ad49938.zip/node_modules/@tanstack/react-query-devtools/build/modern/index.js
var ReactQueryDevtools2 = false ? function() {
  return null;
} : ReactQueryDevtools;
var ReactQueryDevtoolsPanel2 = false ? function() {
  return null;
} : ReactQueryDevtoolsPanel;
export {
  ReactQueryDevtools2 as ReactQueryDevtools,
  ReactQueryDevtoolsPanel2 as ReactQueryDevtoolsPanel
};
//# sourceMappingURL=@tanstack_react-query-devtools.js.map
