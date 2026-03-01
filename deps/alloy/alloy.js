/**
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

(function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = true,
        o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = true, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = false,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = true, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), true), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      r ? i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
    }, _regeneratorDefine(e, r, n, t);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createInstanceFunction = (function (executeCommand) {
    return function (_ref) {
      var _ref2 = _slicedToArray(_ref, 3),
        resolve = _ref2[0],
        reject = _ref2[1],
        _ref2$ = _slicedToArray(_ref2[2], 2),
        commandName = _ref2$[0],
        options = _ref2$[1];
      executeCommand(commandName, options).then(resolve, reject);
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Returns true when the value is null.
   * @param {*} value
   * @returns {boolean}
   */
  var isNil = (function (value) {
    return value == null;
  });

  /**
   * Returns whether the value is an object.
   * @param {*} value
   * @returns {boolean}
   */
  var isObject = (function (value) {
    return !isNil(value) && !Array.isArray(value) && _typeof(value) === "object";
  });

  var assignConcatArrayValues = (function () {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }
    if (values.length < 2) {
      // if the number of args is 0 or 1, just use the default behavior from Object.assign
      return Object.assign.apply(Object, values);
    }
    return values.reduce(function (accumulator, currentValue) {
      if (isObject(currentValue)) {
        Object.keys(currentValue).forEach(function (key) {
          if (Array.isArray(currentValue[key])) {
            if (Array.isArray(accumulator[key])) {
              var _accumulator$key;
              (_accumulator$key = accumulator[key]).push.apply(_accumulator$key, _toConsumableArray(currentValue[key]));
            } else {
              // clone the array so the original isn't modified.
              accumulator[key] = _toConsumableArray(currentValue[key]);
            }
          } else {
            accumulator[key] = currentValue[key];
          }
        });
      }
      return accumulator;
    }); // no default value to pass into reduce because we want to skip the first value
  });

  /*
  Copyright 2025 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Takes a base64 string of bytes and returns a Uint8Array.
   * @param {string} base64String
   * @returns {Uint8Array}
   */
  var base64ToBytes = function base64ToBytes(base64String) {
    // Add padding if needed
    var padding = "=".repeat((4 - base64String.length % 4) % 4);

    // Convert URL-safe base64 to regular base64
    var base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    var binString = atob(base64);
    return Uint8Array.from(binString, function (m) {
      return m.codePointAt(0);
    });
  };

  /*! js-cookie v3.0.5 | MIT */
  /* eslint-disable no-var */
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target;
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function read(value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function write(value) {
      return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init(converter, defaultAttributes) {
    function set(name, value, attributes) {
      if (typeof document === 'undefined') {
        return;
      }
      attributes = assign({}, defaultAttributes, attributes);
      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }
      name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }
        stringifiedAttributes += '; ' + attributeName;
        if (attributes[attributeName] === true) {
          continue;
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }
      return document.cookie = name + '=' + converter.write(value, name) + stringifiedAttributes;
    }
    function get(name) {
      if (typeof document === 'undefined' || arguments.length && !name) {
        return;
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');
        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);
          if (name === found) {
            break;
          }
        } catch (e) {}
      }
      return name ? jar[name] : jar;
    }
    return Object.create({
      set: set,
      get: get,
      remove: function remove(name, attributes) {
        set(name, '', assign({}, attributes, {
          expires: -1
        }));
      },
      withAttributes: function withAttributes(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function withConverter(converter) {
        return init(assign({}, this.converter, converter), this.attributes);
      }
    }, {
      attributes: {
        value: Object.freeze(defaultAttributes)
      },
      converter: {
        value: Object.freeze(converter)
      }
    });
  }
  var api = init(defaultConverter, {
    path: '/'
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var cookieJar = {
    get: api.get.bind(api),
    set: api.set.bind(api),
    remove: api.remove.bind(api),
    withConverter: api.withConverter.bind(api)
  };

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  // Keys that should never be copied to prevent prototype pollution.
  var DANGEROUS_KEYS = ["__proto__", "constructor", "prototype"];
  var _deepAssignObject = function deepAssignObject(target, source) {
    Object.keys(source).forEach(function (key) {
      if (DANGEROUS_KEYS.includes(key)) {
        return;
      }
      if (isObject(target[key]) && isObject(source[key])) {
        _deepAssignObject(target[key], source[key]);
        return;
      }
      target[key] = source[key];
    });
  };

  /**
   * Recursively copy the values of all enumerable own properties from a source item to a target item if the both items are objects
   * @param {Object} target - a target object
   * @param {...Object} source - an array of source objects
   * @example
   * deepAssign({ a: 'a', b: 'b' }, { b: 'B', c: 'c' });
   * // { a: 'a', b: 'B', c: 'c' }
   */
  var deepAssign = (function (target) {
    if (isNil(target)) {
      throw new TypeError('deepAssign "target" cannot be null or undefined');
    }
    var result = Object(target);
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }
    sources.forEach(function (source) {
      return _deepAssignObject(result, Object(source));
    });
    return result;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Creates a function that, when passed an object of updates, will merge
   * the updates onto the current value of a payload property.
   *
   * @param {object} content The base object to modify
   * @param {string} key The property to merge updates into. This can be a dot-notation property path.
   *
   * @returns {function(object): void}
   */
  var createMerger = (function (content, key) {
    return function (updates) {
      var propertyPath = key.split(".");
      var hostObjectForUpdates = propertyPath.reduce(function (obj, propertyName) {
        obj[propertyName] = obj[propertyName] || {};
        return obj[propertyName];
      }, content);
      deepAssign(hostObjectForUpdates, updates);
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Allows callbacks to be registered and then later called. When the
   * callbacks are called, their responses are combined into a single promise.
   */
  var createCallbackAggregator = (function () {
    var callbacks = [];
    return {
      add: function add(callback) {
        callbacks.push(callback);
      },
      call: function call() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        // While this utility doesn't necessarily need to be doing the
        // Promise.all, it's currently useful everywhere this is used and
        // reduces repetitive code. We can factor it out later if we want
        // to make this utility more "pure".
        return Promise.all(callbacks.map(function (callback) {
          return callback.apply(void 0, args);
        }));
      }
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /** @import { Logger } from '../core/types.js' */
  /** @import { CookieJar } from './types.js' */

  /**
   * Creates a logging wrapper around a cookie jar that logs cookie operations.
   *
   * @function
   *
   * @param {object} options
   * @param {Logger} options.logger
   * @param {CookieJar} options.cookieJar
   *
   * @returns {CookieJar}
   */
  var createLoggingCookieJar = (function (_ref) {
    var logger = _ref.logger,
      cookieJar = _ref.cookieJar;
    return _objectSpread2(_objectSpread2({}, cookieJar), {}, {
      set: function set(key, value, options) {
        logger.info("Setting cookie", _objectSpread2({
          name: key,
          value: value
        }, options));
        return cookieJar.set(key, value, options);
      }
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * A simple utility for managing a promise's state outside of
   * the promise's "executor" (the function passed into the constructor).
   */
  var defer = (function () {
    var deferred = {};
    deferred.promise = new Promise(function (resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var REFERENCE_EQUALITY = function REFERENCE_EQUALITY(a, b) {
    return a === b;
  };
  var findIndex = function findIndex(array, item, isEqual) {
    for (var i = 0; i < array.length; i += 1) {
      if (isEqual(array[i], item)) {
        return i;
      }
    }
    return -1;
  };
  var deduplicateArray = (function (array) {
    var isEqual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : REFERENCE_EQUALITY;
    return array.filter(function (item, index) {
      return findIndex(array, item, isEqual) === index;
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var appendNode = (function (parent, node) {
    return parent.appendChild(node);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var populateElementProperties = function populateElementProperties(element, props) {
    Object.keys(props).forEach(function (key) {
      // The following is to support setting style properties to avoid CSP errors.
      if (key === "style" && isObject(props[key])) {
        var styleProps = props[key];
        Object.keys(styleProps).forEach(function (styleKey) {
          element.style[styleKey] = styleProps[styleKey];
        });
      } else {
        element[key] = props[key];
      }
    });
  };
  var createNode = (function (tag) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var children = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var doc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document;
    var result = doc.createElement(tag);
    Object.keys(attrs).forEach(function (key) {
      // TODO: To highlight CSP problems consider throwing a descriptive error
      //       if nonce is available and key is style.
      result.setAttribute(key, attrs[key]);
    });
    populateElementProperties(result, props);
    children.forEach(function (child) {
      return appendNode(result, child);
    });
    return result;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var BODY = "BODY";
  var IFRAME = "IFRAME";
  var IMG = "IMG";
  var DIV = "DIV";
  var STYLE = "STYLE";
  var SCRIPT = "SCRIPT";
  var HEAD = "HEAD";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Fires an image pixel from the current document's window.
   * @param {object} currentDocument
   * @param {string} src
   * @returns {Promise}
   */
  var fireImageInDocument = (function (_ref) {
    var src = _ref.src,
      _ref$currentDocument = _ref.currentDocument,
      currentDocument = _ref$currentDocument === void 0 ? document : _ref$currentDocument;
    return new Promise(function (resolve, reject) {
      var attrs = {
        src: src
      };
      var props = {
        onload: resolve,
        onerror: reject,
        onabort: reject
      };
      createNode(IMG, attrs, props, [], currentDocument);
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Returns whether the value is a function.
   * @param {*} value
   * @returns {boolean}
   */
  var isFunction = (function (value) {
    return typeof value === "function";
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Returns whether the value is a non-empty array.
   * @param {*} value
   * @returns {boolean}
   */
  var isNonEmptyArray = (function (value) {
    return Array.isArray(value) && value.length > 0;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var toArray = (function (value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (value == null) {
      return [];
    }
    return [].slice.call(value);
  });

  /*
  Copyright 2021 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var SIBLING_PATTERN = /^\s*>/;
  var querySelectorAll = (function (context, selector) {
    if (!SIBLING_PATTERN.test(selector)) {
      return toArray(context.querySelectorAll(selector));
    }
    return toArray(context.querySelectorAll(":scope " + selector));
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var SHADOW_SEPARATOR = ":shadow";

  /*
  Copyright 2021 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var splitWithShadow = function splitWithShadow(selector) {
    return selector.split(SHADOW_SEPARATOR);
  };
  var transformPrefix = function transformPrefix(parent, selector) {
    var result = selector;
    var hasChildCombinatorPrefix = result.startsWith(">");
    if (!hasChildCombinatorPrefix) {
      return result;
    }
    var prefix = parent instanceof Element || parent instanceof Document ? ":scope" : ":host"; // see https://bugs.webkit.org/show_bug.cgi?id=233380

    return prefix + " " + result;
  };
  var selectNodesWithShadow = (function (context, selector) {
    var parts = splitWithShadow(selector);
    if (parts.length < 2) {
      return querySelectorAll(context, selector);
    }

    // split the selector into parts separated by :shadow pseudo-selectors
    // find each subselector element based on the previously selected node's shadowRoot
    var parent = context;
    for (var i = 0; i < parts.length; i += 1) {
      var part = parts[i].trim();
      // if part is empty, it means there's a chained :eq:shadow selector
      if (part === "" && parent.shadowRoot) {
        parent = parent.shadowRoot;
        continue;
      }
      var prefixed = transformPrefix(parent, part);
      var partNode = querySelectorAll(parent, prefixed);
      if (partNode.length === 0 || !partNode[0] || !partNode[0].shadowRoot) {
        return partNode;
      }
      parent = partNode[0].shadowRoot;
    }
    return undefined;
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isShadowSelector = (function (str) {
    return str.indexOf(SHADOW_SEPARATOR) !== -1;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Returns an array of matched DOM nodes.
   * @param {String} selector
   * @param {Node} [context=document] defaults to document
   * @returns {Array} an array of DOM nodes
   */
  var selectNodes = (function (selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    if (!isShadowSelector(selector)) {
      return querySelectorAll(context, selector);
    }
    return selectNodesWithShadow(context, selector);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var MUTATION_OBSERVER = "MutationObserver";
  var RAF = "requestAnimationFrame";
  var MUTATION_OBSERVER_CONFIG = {
    childList: true,
    subtree: true
  };
  var VISIBILITY_STATE = "visibilityState";
  var VISIBLE = "visible";
  var DELAY = 100;
  var MAX_POLLING_TIMEOUT = 5000;
  var createError = function createError(selector) {
    return new Error("Could not find: " + selector);
  };
  var createPromise = function createPromise(executor) {
    return new Promise(executor);
  };
  var canUseMutationObserver = function canUseMutationObserver(win) {
    return isFunction(win[MUTATION_OBSERVER]);
  };
  var awaitUsingMutationObserver = function awaitUsingMutationObserver(win, doc, selector, timeout, selectFunc) {
    return createPromise(function (resolve, reject) {
      var timer;
      var mutationObserver = new win[MUTATION_OBSERVER](function () {
        var nodes = selectFunc(selector);
        if (isNonEmptyArray(nodes)) {
          mutationObserver.disconnect();
          if (timer) {
            clearTimeout(timer);
          }
          resolve(nodes);
        }
      });
      timer = setTimeout(function () {
        mutationObserver.disconnect();
        reject(createError(selector));
      }, timeout);
      mutationObserver.observe(doc, MUTATION_OBSERVER_CONFIG);
    });
  };
  var canUseRequestAnimationFrame = function canUseRequestAnimationFrame(doc) {
    return doc[VISIBILITY_STATE] === VISIBLE;
  };
  var awaitUsingRequestAnimation = function awaitUsingRequestAnimation(win, selector, timeout, selectFunc) {
    return createPromise(function (resolve, reject) {
      var _execute = function execute() {
        var nodes = selectFunc(selector);
        if (isNonEmptyArray(nodes)) {
          resolve(nodes);
          return;
        }
        win[RAF](_execute);
      };
      _execute();
      setTimeout(function () {
        reject(createError(selector));
      }, timeout);
    });
  };
  var awaitUsingTimer = function awaitUsingTimer(selector, timeout, selectFunc) {
    return createPromise(function (resolve, reject) {
      var _execute2 = function execute() {
        var nodes = selectFunc(selector);
        if (isNonEmptyArray(nodes)) {
          resolve(nodes);
          return;
        }
        setTimeout(_execute2, DELAY);
      };
      _execute2();
      setTimeout(function () {
        reject(createError(selector));
      }, timeout);
    });
  };
  var awaitSelector = (function (selector) {
    var selectFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectNodes;
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MAX_POLLING_TIMEOUT;
    var win = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;
    var doc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document;
    var nodes = selectFunc(selector);
    if (isNonEmptyArray(nodes)) {
      return Promise.resolve(nodes);
    }
    if (canUseMutationObserver(win)) {
      return awaitUsingMutationObserver(win, doc, selector, timeout, selectFunc);
    }
    if (canUseRequestAnimationFrame(doc)) {
      return awaitUsingRequestAnimation(win, selector, timeout, selectFunc);
    }
    return awaitUsingTimer(selector, timeout, selectFunc);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Returns true if element matches the selector.
   * @param {String} selector
   * @param {Node} [element]
   * @returns {Boolean}
   */
  var matchesSelector = (function (selector, element) {
    if (element.matches) {
      return element.matches(selector);
    }

    // Making IE 11 happy
    return element.msMatchesSelector(selector);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var removeNode = (function (node) {
    var parent = node.parentNode;
    if (parent) {
      return parent.removeChild(node);
    }
    return null;
  });

  var IFRAME_ATTRS = {
    name: "Adobe Alloy"
  };
  var IFRAME_PROPS = {
    style: {
      display: "none",
      width: 0,
      height: 0
    }
  };
  var injectFireReferrerHideableImage = (function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$appendNode = _ref.appendNode,
      appendNode$1 = _ref$appendNode === void 0 ? appendNode : _ref$appendNode,
      _ref$awaitSelector = _ref.awaitSelector,
      awaitSelector$1 = _ref$awaitSelector === void 0 ? awaitSelector : _ref$awaitSelector,
      _ref$createNode = _ref.createNode,
      createNode$1 = _ref$createNode === void 0 ? createNode : _ref$createNode,
      _ref$fireImage = _ref.fireImage,
      fireImage = _ref$fireImage === void 0 ? fireImageInDocument : _ref$fireImage;
    var fireOnPage = fireImage;
    var hiddenIframe;
    var createIframe = function createIframe() {
      return awaitSelector$1(BODY).then(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
          body = _ref3[0];
        if (hiddenIframe) {
          return hiddenIframe;
        }
        hiddenIframe = createNode$1(IFRAME, IFRAME_ATTRS, IFRAME_PROPS);
        return appendNode$1(body, hiddenIframe);
      });
    };
    var fireInIframe = function fireInIframe(_ref4) {
      var src = _ref4.src;
      return createIframe().then(function (iframe) {
        var currentDocument = iframe.contentWindow.document;
        return fireImage({
          src: src,
          currentDocument: currentDocument
        });
      });
    };
    return function (request) {
      var hideReferrer = request.hideReferrer,
        url = request.url;
      return hideReferrer ? fireInIframe({
        src: url
      }) : fireOnPage({
        src: url
      });
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Returns whether the value is an empty object.
   * @param {*} value
   * @returns {boolean}
   */
  var isEmptyObject = (function (value) {
    return isObject(value) && Object.keys(value).length === 0;
  });

  /**
   * Given an object and a function that takes a value and returns a predicate, filter out
   * all non-object deeply nested values that do not pass the predicate.
   *
   * Example: filterObject({ a: 2, b: { c: 6 } }, (val) => val > 5) returns { b { c: 6 } }
   *
   * @param {*} obj
   * @param {* => boolean} predicate a function that takes a value and return a boolean,
   * representing if it should be included in the result object or not.
   * @returns A copy of the original object with the values that fail the predicate, filtered out.
   */
  var _filterObject = function filterObject(obj, predicate) {
    if (isNil(obj) || !isObject(obj)) {
      return obj;
    }
    return Object.keys(obj).reduce(function (result, key) {
      var value = obj[key];
      if (isObject(value)) {
        // value is object, go deeper
        var filteredValue = _filterObject(value, predicate);
        if (isEmptyObject(filteredValue)) {
          return result;
        }
        return _objectSpread2(_objectSpread2({}, result), {}, _defineProperty({}, key, filteredValue));
      }
      // value is not an object, test predicate
      if (predicate(value, key)) {
        return _objectSpread2(_objectSpread2({}, result), {}, _defineProperty({}, key, value));
      }
      return result;
    }, {});
  };

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var baseNamespace = "com.adobe.alloy.";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Returns the last N number of items from an array.
   * @param {Array} arr
   * @param {number} itemCount
   * @returns {Array}
   */
  var getLastArrayItems = (function (arr, itemCount) {
    return arr.slice(-itemCount);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var cookieName = baseNamespace + "getTld";

  /**
   * Of the current web page's hostname, this is the top-most domain that is
   * not a "public suffix" as outlined in https://publicsuffix.org/. In other
   * words, this is top-most domain that is able to accept cookies.
   * @param {Object} window
   * @param {Object} cookieJar
   * @returns {string}
   */
  var getApexDomain = (function (window, cookieJar) {
    var topLevelCookieDomain = "";

    // If hostParts.length === 1, we may be on localhost.
    var hostParts = window.location.hostname.toLowerCase().split(".");
    var i = 1;
    while (i < hostParts.length && !cookieJar.get(cookieName)) {
      i += 1;
      topLevelCookieDomain = getLastArrayItems(hostParts, i).join(".");
      cookieJar.set(cookieName, cookieName, {
        domain: topLevelCookieDomain
      });
    }
    cookieJar.remove(cookieName, {
      domain: topLevelCookieDomain
    });
    return topLevelCookieDomain;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  // Remember to also incorporate the org ID wherever cookies are read or written.
  var COOKIE_NAME_PREFIX = "kndctr";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var sanitizeOrgIdForCookieName = (function (orgId) {
    return orgId.replace("@", "_");
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getNamespacedCookieName = (function (orgId, key) {
    return COOKIE_NAME_PREFIX + "_" + sanitizeOrgIdForCookieName(orgId) + "_" + key;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Group an array by a key getter provided
   * @param {Array} arr Array to iterate over.
   * @param {Function} keyGetter The key getter by which to group.
   * @returns {Object}
   */
  var groupBy = (function (arr, keyGetter) {
    var result = {};
    arr.forEach(function (item) {
      var key = keyGetter(item);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
    });
    return result;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var CHROME = "Chrome";
  var EDGE$1 = "Edge";
  var EDGE_CHROMIUM = "EdgeChromium";
  var FIREFOX = "Firefox";
  var IE = "IE";
  var SAFARI = "Safari";
  var UNKNOWN = "Unknown";

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var lazy = (function (fn) {
    var called = false;
    var result;
    return function () {
      if (!called) {
        called = true;
        result = fn();
      }
      return result;
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  // Users could have also disabled third-party cookies within these browsers, but
  // we don't know. We also assume "unknown" browsers support third-party cookies,
  // though we don't really know that either. We're making best guesses.
  var browsersSupportingThirdPartyCookie = [CHROME, EDGE$1, EDGE_CHROMIUM, IE, UNKNOWN];
  var injectAreThirdPartyCookiesSupportedByDefault = (function (_ref) {
    var getBrowser = _ref.getBrowser;
    return lazy(function () {
      return browsersSupportingThirdPartyCookie.includes(getBrowser());
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var IDENTITY = "identity";
  var CLUSTER = "cluster";

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectDoesIdentityCookieExist = (function (_ref) {
    var orgId = _ref.orgId;
    var identityCookieName = getNamespacedCookieName(orgId, IDENTITY);
    /**
     * Returns whether the identity cookie exists.
     */
    return function () {
      return Boolean(cookieJar.get(identityCookieName));
    };
  });

  var matchUserAgent = function matchUserAgent(regexs, userAgent) {
    var keys = Object.keys(regexs);
    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      var regex = regexs[key];
      if (regex.test(userAgent)) {
        return key;
      }
    }
    return UNKNOWN;
  };
  var injectGetBrowser = (function (_ref) {
    var userAgent = _ref.userAgent;
    return lazy(function () {
      return matchUserAgent(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, EDGE$1, /Edge\/([0-9\._]+)/), EDGE_CHROMIUM, /Edg\/([0-9\.]+)/), CHROME, /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/), FIREFOX, /Firefox\/([0-9\.]+)(?:\s|$)/), IE, /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/), SAFARI, /Version\/([0-9\._]+).*Safari/), userAgent);
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Creates a storage interface for a specific storage type with namespaced keys.
   *
   * @param {Object} context - The context object (typically window) that provides storage APIs.
   * @param {string} storageType - The type of storage to use ('localStorage' or 'sessionStorage').
   * @param {string} namespace - The namespace prefix to prepend to all storage keys.
   * @returns {Storage}
   */
  var getStorageByType = function getStorageByType(context, storageType, namespace) {
    // When storage is disabled on Safari, the mere act of referencing
    // window.localStorage or window.sessionStorage throws an error.
    // For this reason, we wrap in a try-catch.
    return {
      /**
       * Reads a value from storage.
       * @param {string} name The name of the item to be read.
       * @returns {string}
       */
      getItem: function getItem(name) {
        try {
          return context[storageType].getItem(namespace + name);
        } catch (_unused) {
          return null;
        }
      },
      /**
       * Saves a value to storage.
       * @param {string} name The name of the item to be saved.
       * @param {string} value The value of the item to be saved.
       * @returns {boolean} Whether the item was successfully saved to storage.
       */
      setItem: function setItem(name, value) {
        try {
          context[storageType].setItem(namespace + name, value);
          return true;
        } catch (_unused2) {
          return false;
        }
      },
      /**
       * Clear all values in storage that match the namespace.
       */
      clear: function clear() {
        try {
          Object.keys(context[storageType]).forEach(function (key) {
            if (key.startsWith(namespace)) {
              context[storageType].removeItem(key);
            }
          });
          return true;
        } catch (_unused3) {
          return false;
        }
      }
    };
  };

  /**
   * Creates a storage factory function that provides access to both session and persistent storage
   * with namespaced keys. This is a higher-order function that returns a function which can be
   * used to create storage instances with additional namespace suffixes.
   *
   * @param {Object} context - The context object (typically window) that provides storage APIs.
   * @returns {StorageCreator}
   */
  var injectStorage = (function (context) {
    return function (additionalNamespace) {
      var finalNamespace = baseNamespace + additionalNamespace;
      return {
        session: getStorageByType(context, "sessionStorage", finalNamespace),
        persistent: getStorageByType(context, "localStorage", finalNamespace)
      };
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  /**
   * Returns items that are found within both arrays.
   * @param {Array} a
   * @param {Array} b
   * @returns {Array}
   */
  var intersection = (function (a, b) {
    return a.filter(function (x) {
      return b.includes(x);
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Returns whether the value is a boolean.
   * @param {*} value
   * @returns {boolean}
   */
  var isBoolean = (function (value) {
    return typeof value === "boolean";
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Returns whether the value is a number.
   * @param {*} value
   * @returns {boolean}
   */
  var isNumber$1 = (function (value) {
    return typeof value === "number" && !Number.isNaN(value);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Returns whether the value is an integer.
   * @param {*} value
   * @returns {boolean}
   */
  var isInteger = (function (value) {
    var parsed = parseInt(value, 10);
    return isNumber$1(parsed) && value === parsed;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Determines whether a cookie name is namespaced according to the contract
   * defined by the server.
   * @param {String} orgId The org ID configured for the Alloy instance.
   * @param {String} name The cookie name.
   * @returns {boolean}
   */
  var isNamespacedCookieName = (function (orgId, name) {
    return name.indexOf(COOKIE_NAME_PREFIX + "_" + sanitizeOrgIdForCookieName(orgId) + "_") === 0;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Returns whether the value is a string.
   * @param {*} value
   * @returns {boolean}
   */
  var isString = (function (value) {
    return typeof value === "string";
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Returns whether the value is a populated string.
   * @param {*} value
   * @returns {boolean}
   */
  var isNonEmptyString = (function (value) {
    return isString(value) && value.length > 0;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * A function that performs no operations.
   */
  var noop = (function () {});

  // We want to avoid mapping between specific keys because we want Konductor
  // to be able to add overrides in the future without us needing to make
  // any changes to the Web SDK
  var prepareConfigOverridesForEdge = (function (configuration) {
    if (isNil(configuration) || _typeof(configuration) !== "object") {
      return null;
    }
    // remove entries that are empty strings or arrays
    var configOverrides = _filterObject(configuration, function (value, key) {
      if (isNil(value)) {
        return false;
      }
      // We want to remove all the { enabled: true } values, but leave any other boolean values.
      // Experience Edge will not accept { enabled: true } values as true is the default for "enabled".
      if (isBoolean(value) && (key !== "enabled" || value === false)) {
        return true;
      }
      if (isNumber$1(value)) {
        return true;
      }
      if (isNonEmptyString(value)) {
        return true;
      }
      if (isNonEmptyArray(value)) {
        return true;
      }
      return false;
    });
    if (isEmptyObject(configOverrides)) {
      return null;
    }
    return configOverrides;
  });

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var reactorQueryString;
  var hasRequiredReactorQueryString;
  function requireReactorQueryString() {
    if (hasRequiredReactorQueryString) return reactorQueryString;
    hasRequiredReactorQueryString = 1;

    /**
     * Parse a query string into an object. Leading `?` or `#` are ignored, so you
     * can pass `location.search` or `location.hash` directly.
     *
     * URL components are decoded with decode-uri-component.
     *
     * Parse arrays with elements using duplicate keys, e.g. ?a=1&a=2 becomes
     * {a: ['1', '2']}.
     *
     * Query keys are sorted alphabetically.
     *
     * Numbers and booleans are NOT parsed; they are left as strings.
     * @param {string} query the query part of a url
     * @returns {{ [key: string]: string | string[] | undefined }} the parsed query string
     */
    var parseQueryString = function parseQueryString(query) {
      /** @type {{[key: string]: string | string[] | undefined }} */
      var result = {};
      if (!query || typeof query !== 'string') {
        return result;
      }
      var cleanQuery = query.trim().replace(/^[?#&]/, '');
      var params = new URLSearchParams(cleanQuery);
      var iter = params.keys();
      do {
        var v = iter.next();
        var key = v.value;
        if (key) {
          var values = params.getAll(key);
          if (values.length === 1) {
            result[key] = values[0];
          } else {
            result[key] = values;
          }
        }
      } while (v.done === false);
      return result;
    };

    /**
     * Transform an object into a query string.
     *
     * Keys having object values are ignored.
     *
     * @param {object} the object to transform into a query string
     * @returns {string} the parsed query string
     */

    var stringifyObject = function stringifyObject(object) {
      var spaceToken = '{{space}}';
      var params = new URLSearchParams();
      Object.keys(object).forEach(function (key) {
        var value = object[key];
        if (typeof object[key] === 'string') {
          value = value.replace(/ /g, spaceToken);
        } else if (['object', 'undefined'].includes(_typeof(value)) && !Array.isArray(value)) {
          value = '';
        }
        if (Array.isArray(value)) {
          value.forEach(function (arrayValue) {
            params.append(key, arrayValue);
          });
        } else {
          params.append(key, value);
        }
      });
      return params.toString().replace(new RegExp(encodeURIComponent(spaceToken), 'g'), '%20');
    };

    // We proxy the underlying querystring module so we can limit the API we expose.
    // This allows us to more easily make changes to the underlying implementation later without
    // having to worry about breaking extensions. If extensions demand additional functionality, we
    // can make adjustments as needed.
    reactorQueryString = {
      parse: function parse(string) {
        return parseQueryString(string);
      },
      stringify: function stringify(object) {
        return stringifyObject(object);
      }
    };
    return reactorQueryString;
  }

  var reactorQueryStringExports = requireReactorQueryString();
  var queryString = /*@__PURE__*/getDefaultExportFromCjs(reactorQueryStringExports);

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Creates and returns a new error using the provided value as a message.
   * If the provided value is already an Error, it will be returned unmodified.
   * @param {*} value
   * @returns {Error}
   */
  var toError = (function (value) {
    return value instanceof Error ? value : new Error(value);
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var updateErrorMessage = (function (_ref) {
    var error = _ref.error,
      message = _ref.message;
    try {
      error.message = message;
    } catch (_unused) {
      // We'll set a new message when we can, but some errors, like DOMException,
      // have a read-only message property, which limits our options.
    }
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Augments an error's message with additional context as it bubbles up the call stack.
   * @param {Object} options
   * @param {String} options.message The message to be added to the error.
   * @param {Error} options.error Optimally, this is an instance of Error. If it is not,
   * this is used as the basis for the message of a newly created Error instance.
   * @returns {*}
   */
  var stackError = (function (_ref) {
    var error = _ref.error,
      message = _ref.message;
    var errorToStack = toError(error);
    var newMessage = message + "\nCaused by: " + errorToStack.message;
    updateErrorMessage({
      error: errorToStack,
      message: newMessage
    });
    return errorToStack;
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var stringToBoolean = (function (str) {
    return isString(str) && str.toLowerCase() === "true";
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /*
   * coerce `value` to a number or return `defaultValue` if it cannot be.
   *
   * The coersion is attempted if value is a number or string.
   */
  var toInteger = (function (value, defaultValue) {
    if (isNumber$1(value) || isString(value)) {
      var n = Math.round(Number(value));
      if (!Number.isNaN(n)) {
        return n;
      }
    }
    return defaultValue;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Add padString to the start of the string until it reaches the target length
   *
   * Different from String.prototype.padStart because this function coerces the
   * input to a string before padding.
   * @param {any} string
   * @param {number} targetLength
   * @param {string} padString
   * @returns {string}
   */
  var padStart = function padStart(string, targetLength, padString) {
    return ("" + string).padStart(targetLength, padString);
  };

  /**
   * Formats the date into an ISO date-time string in the local timezone
   * @param {Date} date
   * @returns {string}
   */
  var toISOStringLocal = (function (date) {
    var YYYY = date.getFullYear();
    var MM = padStart(date.getMonth() + 1, 2, "0");
    var DD = padStart(date.getDate(), 2, "0");
    var hh = padStart(date.getHours(), 2, "0");
    var mm = padStart(date.getMinutes(), 2, "0");
    var ss = padStart(date.getSeconds(), 2, "0");
    var mmm = padStart(date.getMilliseconds(), 3, "0");

    // The time-zone offset is the difference, in minutes, from local time to UTC. Note that this
    // means that the offset is positive if the local timezone is behind UTC and negative if it is
    // ahead. For example, for time zone UTC+10:00, -600 will be returned.
    var timezoneOffset = toInteger(date.getTimezoneOffset(), 0);
    var ts = timezoneOffset > 0 ? "-" : "+";
    var th = padStart(Math.floor(Math.abs(timezoneOffset) / 60), 2, "0");
    var tm = padStart(Math.abs(timezoneOffset) % 60, 2, "0");
    return YYYY + "-" + MM + "-" + DD + "T" + hh + ":" + mm + ":" + ss + "." + mmm + ts + th + ":" + tm;
  });

  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
  }
  function unsafeStringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  }

  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
      }
      getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
  }

  var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var _native = {
    randomUUID: randomUUID
  };

  function _v4(options, buf, offset) {
    var _ref, _options$random, _options$rng, _options;
    options = options || {};
    var rnds = (_ref = (_options$random = options.random) !== null && _options$random !== void 0 ? _options$random : (_options$rng = (_options = options).rng) === null || _options$rng === void 0 ? void 0 : _options$rng.call(_options)) !== null && _ref !== void 0 ? _ref : rng();
    if (rnds.length < 16) {
      throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    return unsafeStringify(rnds);
  }
  function v4(options, buf, offset) {
    if (_native.randomUUID && true && !options) {
      return _native.randomUUID();
    }
    return _v4(options);
  }

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Wraps a validator returning the value if it is null or undefined, otherwise
   * it will call the original validator and return the result.
   *
   * @param {function} validator - the validator to call if the value is not null
   */
  var skipIfNull = function skipIfNull(validator) {
    return function skipIfNullValidator(value, path) {
      return value == null ? value : validator.call(this, value, path);
    };
  };

  /**
   * Returns a new validator that calls the first validator and then calls the second
   * validator with the result of the first validator. The result of the second validator
   * is returned.
   *
   * @param {function} firstValidator - validator to call first
   * @param {function} secondValidator - validator to call second
   * @returns {function} - a new validator that calls the first and second validators
   */
  var callSequentially = function callSequentially(firstValidator, secondValidator) {
    return function callSequentiallyValidator(value, path) {
      return secondValidator.call(this, firstValidator.call(this, value, path), path);
    };
  };

  /**
   * Just like callSequentially, but if either validator throws an error, the errors
   * are collected and thrown at the end.
   *
   * @param {function} firstValidator
   * @param {function} secondValidator
   * @returns {function}
   */
  var callSequentiallyJoinErrors = function callSequentiallyJoinErrors(firstValidator, secondValidator) {
    return function callSequentiallyJoinErrorsValidator(value, path) {
      var _this = this;
      var errors = [];
      var newValue = [firstValidator, secondValidator].reduce(function (memo, validator) {
        try {
          return validator.call(_this, memo, path);
        } catch (e) {
          errors.push(e);
          return memo;
        }
      }, value);
      if (errors.length) {
        throw new Error(errors.join("\n"));
      }
      return newValue;
    };
  };

  /**
   * Chains two validators together. In addition to calling the validators in
   * sequence, this will also copy over methods from the base validator to the
   * resulting validator and include any additional methods.
   *
   * @param {function} baseValidator - This validator will be called first, and its
   * methods will be copied over to the returned validator.
   * @param {function} newValidator - This validator will be called second.
   * @param {object} additionalMethods - Additional methods to include on the returned
   * validator.
   * @returns {function}
   */
  var chain = function chain(baseValidator, newValidator, additionalMethods) {
    return Object.assign(callSequentially(baseValidator, newValidator), baseValidator, additionalMethods);
  };

  /**
   * Chains two validators together, but skips the second validator if the value
   * is null. In addition to calling the validators in sequence, this will also
   * copy over methods from the base validator to the resulting validator and
   * include any additional methods.
   *
   * @param {function} baseValidator - This validator will be called first, and its
   * methods will be copied over to the returned validator.
   * @param {function} newValidator - This validator will be called second. If the value
   * is null after the first validator is called, this validator will not be
   * called.
   * @param {object} additionalMethods - Additional methods to include on the returned
   * validator.
   * @returns {function}
   */
  var nullSafeChain = function nullSafeChain(baseValidator, newValidator, additionalMethods) {
    return Object.assign(callSequentially(baseValidator, skipIfNull(newValidator)), baseValidator, additionalMethods);
  };

  /**
   * Same as nullSafeChain, but calls the new validator first.
   *
   * @param {function} baseValidator - This validator will be called second, and its
   * methods will be copied over to the returned validator.
   * @param {function} newValidator - This validator will be called first. If the value
   * is null, this validator will not be called.
   * @param {function} additionalMethods - Additional methods to include on the returned
   * validator.
   * @returns {function}
   */
  var reverseNullSafeChainJoinErrors = function reverseNullSafeChainJoinErrors(baseValidator, newValidator, additionalMethods) {
    return Object.assign(callSequentiallyJoinErrors(skipIfNull(newValidator), baseValidator), baseValidator, additionalMethods);
  };

  /**
   * Throws an error if the value is not valid.
   *
   * @param {boolean} isValid - Whether or not the value is valid.
   * @param {*} value - The value to validate.
   * @param {string} path - The path to the value.
   * @param {string} message - The expected part of the error message.
   * @throws {Error} - Throws an error if the value is not valid.
   * @returns {void}
   */
  var assertValid = function assertValid(isValid, value, path, message) {
    if (!isValid) {
      throw new Error("'" + path + "': Expected " + message + ", but got " + JSON.stringify(value) + ".");
    }
  };

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var booleanValidator = (function (value, path) {
    assertValid(isBoolean(value), value, path, "true or false");
    return value;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var callbackValidator = (function (value, path) {
    assertValid(isFunction(value), value, path, "a function");
    return value;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createAnyOfValidator = (function (validators, message) {
    return function anyOf(value, path) {
      var _this = this;
      var newValue;
      var valid = validators.find(function (validator) {
        try {
          newValue = validator.call(_this, value, path);
          return true;
        } catch (_unused) {
          return false;
        }
      });
      assertValid(valid, value, path, message);
      return newValue;
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createArrayOfValidator = (function (elementValidator) {
    return function arrayOf(value, path) {
      var _this = this;
      assertValid(Array.isArray(value), value, path, "an array");
      var errors = [];
      var validatedArray = value.map(function (subValue, i) {
        try {
          return elementValidator.call(_this, subValue, path + "[" + i + "]", value);
        } catch (e) {
          errors.push(e.message);
          return undefined;
        }
      });
      if (errors.length) {
        throw new Error(errors.join("\n"));
      }
      return validatedArray;
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createDefaultValidator = (function (defaultValue) {
    return function (value) {
      if (value == null) {
        return defaultValue;
      }
      return value;
    };
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createDeprecatedValidator = (function () {
    var warning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "This field has been deprecated";
    return function deprecated(value, path) {
      var message = warning;
      if (value !== undefined) {
        if (path) {
          message = "'" + path + "': " + message;
        }
        if (this && this.logger) {
          this.logger.warn(message);
        }
      }
      return value;
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createLiteralValidator = (function (literalValue) {
    return function (value, path) {
      assertValid(value === literalValue, value, path, "" + literalValue);
      return value;
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createMapOfValuesValidator = (function (valueValidator) {
    return function mapOfValues(value, path) {
      var _this = this;
      assertValid(isObject(value), value, path, "an object");
      var errors = [];
      var validatedObject = {};
      Object.keys(value).forEach(function (subKey) {
        var subValue = value[subKey];
        var subPath = path ? path + "." + subKey : subKey;
        try {
          var validatedValue = valueValidator.call(_this, subValue, subPath);
          if (validatedValue !== undefined) {
            validatedObject[subKey] = validatedValue;
          }
        } catch (e) {
          errors.push(e.message);
        }
      });
      if (errors.length) {
        throw new Error(errors.join("\n"));
      }
      return validatedObject;
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createMinimumValidator = (function (typeName, minimum) {
    return function (value, path) {
      assertValid(value >= minimum, value, path, typeName + " greater than or equal to " + minimum);
      return value;
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createMaximumValidator = (function (typeName, maximum) {
    return function (value, path) {
      assertValid(value <= maximum, value, path, typeName + " less than or equal to " + maximum);
      return value;
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createNoUnknownFieldsValidator = (function (schema) {
    return function (value, path) {
      var errors = [];
      Object.keys(value).forEach(function (subKey) {
        if (!schema[subKey]) {
          var subPath = path ? path + "." + subKey : subKey;
          errors.push("'" + subPath + "': Unknown field.");
        }
      });
      if (errors.length) {
        throw new Error(errors.join("\n"));
      }
      return value;
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createNonEmptyValidator = (function (message) {
    return function (value, path) {
      if (isObject(value)) {
        assertValid(!isEmptyObject(value), value, path, message);
      } else {
        assertValid(value.length > 0, value, path, message);
      }
      return value;
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createObjectOfValidator = (function (schema) {
    return function objectOf(value, path) {
      var _this = this;
      assertValid(isObject(value), value, path, "an object");
      var errors = [];
      var validatedObject = {};
      Object.keys(schema).forEach(function (subKey) {
        var subValue = value[subKey];
        var subSchema = schema[subKey];
        var subPath = path ? path + "." + subKey : subKey;
        try {
          var validatedValue = subSchema.call(_this, subValue, subPath);
          if (validatedValue !== undefined) {
            validatedObject[subKey] = validatedValue;
          }
        } catch (e) {
          errors.push(e.message);
        }
      });

      // copy over unknown properties
      Object.keys(value).forEach(function (subKey) {
        if (!Object.prototype.hasOwnProperty.call(validatedObject, subKey)) {
          validatedObject[subKey] = value[subKey];
        }
      });
      if (errors.length) {
        throw new Error(errors.join("\n"));
      }
      return validatedObject;
    };
  });

  var createRenamedValidator = (function (oldField, oldSchema, newField) {
    return function deprecated(value, path) {
      assertValid(isObject(value), value, path, "an object");
      var oldValue = value[oldField],
        newValue = value[newField],
        otherValues = _objectWithoutProperties(value, [oldField, newField].map(_toPropertyKey));
      var validatedOldValue = oldSchema(oldValue, path);
      if (validatedOldValue !== undefined) {
        var message = "The field '" + oldField + "' is deprecated. Use '" + newField + "' instead.";
        if (path) {
          message = "'" + path + "': " + message;
        }
        if (newValue !== undefined && newValue !== validatedOldValue) {
          throw new Error(message);
        } else if (this && this.logger) {
          this.logger.warn(message);
        }
      }
      return _objectSpread2(_defineProperty({}, newField, newValue || validatedOldValue), otherValues);
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createUniqueValidator = (function () {
    var values = [];
    return function (value, path) {
      assertValid(values.indexOf(value) === -1, value, path, "a unique value across instances");
      values.push(value);
      return value;
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  /**
   * Returns whether an array contains unique values.
   * @param {*} value
   * @returns {boolean}
   */
  var isUnique = (function (values) {
    var storedVals = Object.create(null);
    for (var i = 0; i < values.length; i += 1) {
      var item = values[i];
      if (item in storedVals) {
        return false;
      }
      storedVals[item] = true;
    }
    return true;
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createUniqueItemsValidator = (function () {
    return function (value, path) {
      assertValid(isUnique(value), value, path, "array values to be unique");
      return value;
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var DOMAIN_REGEX = /^[a-z0-9.-]{1,}$/i;
  var domainValidator = (function (value, path) {
    assertValid(DOMAIN_REGEX.test(value), value, path, "a valid domain");
    return value;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var integerValidator = (function (value, path) {
    assertValid(isInteger(value), value, path, "an integer");
    return value;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var numberValidator = (function (value, path) {
    assertValid(isNumber$1(value), value, path, "a number");
    return value;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Determines whether the value is a valid regular expression.
   * @param {*} value
   * @returns {boolean}
   */
  var isValidRegExp = (function (value) {
    try {
      return RegExp(value) !== null;
    } catch (_unused) {
      return false;
    }
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var regexpValidator = (function (value, path) {
    assertValid(isValidRegExp(value), value, path, "a regular expression");
    return value;
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var requiredValidator = (function (value, path) {
    if (value == null) {
      throw new Error("'" + path + "' is a required option");
    }
    return value;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var stringValidator = (function (value, path) {
    assertValid(isString(value), value, path, "a string");
    return value;
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var matchesRegexpValidator = (function (regexp) {
    return function (value, path) {
      assertValid(regexp.test(value), value, path, "does not match the " + regexp.toString());
      return value;
    };
  });

  // The base validator does no validation and just returns the value unchanged
  var base = function base(value) {
    return value;
  };

  // The 'default', 'required', and 'deprecated' methods are available after any
  // data-type method. Don't use the nullSafeChain on 'default' or 'required'
  // because they need to handle the null or undefined case
  base["default"] = function _default(defaultValue) {
    return chain(this, createDefaultValidator(defaultValue));
  };
  base.required = function required() {
    return chain(this, requiredValidator);
  };
  base.deprecated = function deprecated(message) {
    return chain(this, createDeprecatedValidator(message));
  };

  // helper validators
  var domain = function domain() {
    return nullSafeChain(this, domainValidator);
  };
  var minimumInteger = function minimumInteger(minValue) {
    return nullSafeChain(this, createMinimumValidator("an integer", minValue));
  };
  var minimumNumber = function minimumNumber(minValue) {
    return nullSafeChain(this, createMinimumValidator("a number", minValue));
  };
  var maximumNumber = function maximumNumber(maxValue) {
    return nullSafeChain(this, createMaximumValidator("a number", maxValue));
  };
  var integer = function integer() {
    return nullSafeChain(this, integerValidator, {
      minimum: minimumInteger
    });
  };
  var nonEmptyString = function nonEmptyString() {
    return nullSafeChain(this, createNonEmptyValidator("a non-empty string"));
  };
  var nonEmptyArray = function nonEmptyArray() {
    return nullSafeChain(this, createNonEmptyValidator("a non-empty array"));
  };
  var nonEmptyObject = function nonEmptyObject() {
    return nullSafeChain(this, createNonEmptyValidator("a non-empty object"));
  };
  var regexp = function regexp() {
    return nullSafeChain(this, regexpValidator);
  };
  var matches = function matches(regexpPattern) {
    return nullSafeChain(this, matchesRegexpValidator(regexpPattern));
  };
  var unique = function createUnique() {
    return nullSafeChain(this, createUniqueValidator());
  };
  var uniqueItems = function createUniqueItems() {
    return nullSafeChain(this, createUniqueItemsValidator());
  };

  // top-level validators.  These are the first functions that are called to create a validator.
  var anyOf = function anyOf(validators, message) {
    // use chain here because we don't want to accept null or undefined unless at least
    // one of the validators accept null or undefined.
    return chain(this, createAnyOfValidator(validators, message));
  };
  var anything = function anything() {
    return this;
  };
  var arrayOf = function arrayOf(elementValidator) {
    return nullSafeChain(this, createArrayOfValidator(elementValidator), {
      nonEmpty: nonEmptyArray,
      uniqueItems: uniqueItems
    });
  };
  var _boolean = function _boolean2() {
    return nullSafeChain(this, booleanValidator);
  };
  var callback = function callback() {
    return nullSafeChain(this, callbackValidator);
  };
  var literal = function literal(literalValue) {
    return nullSafeChain(this, createLiteralValidator(literalValue));
  };
  var number = function number() {
    return nullSafeChain(this, numberValidator, {
      minimum: minimumNumber,
      maximum: maximumNumber,
      integer: integer,
      unique: unique
    });
  };
  var mapOfValues = function mapOfValues(valuesValidator) {
    return nullSafeChain(this, createMapOfValuesValidator(valuesValidator), {
      nonEmpty: nonEmptyObject
    });
  };
  var _createObjectOfAdditionalProperties = function createObjectOfAdditionalProperties(schema) {
    return {
      noUnknownFields: function noUnknownFields() {
        return nullSafeChain(this, createNoUnknownFieldsValidator(schema));
      },
      nonEmpty: nonEmptyObject,
      concat: function concat(otherObjectOfValidator) {
        // combine the schema so that noUnknownFields, and concat have the combined schema
        var newSchema = _objectSpread2(_objectSpread2({}, schema), otherObjectOfValidator.schema);
        return nullSafeChain(this, otherObjectOfValidator, _createObjectOfAdditionalProperties(newSchema));
      },
      renamed: function renamed(oldField, oldSchema, newField) {
        // Run the deprecated validator first so that the deprecated field is removed
        // before the objectOf validator runs.
        return reverseNullSafeChainJoinErrors(this, createRenamedValidator(oldField, oldSchema, newField));
      },
      schema: schema
    };
  };
  var objectOf = function objectOf(schema) {
    return nullSafeChain(this, createObjectOfValidator(schema), _createObjectOfAdditionalProperties(schema));
  };
  var string = function string() {
    return nullSafeChain(this, stringValidator, {
      regexp: regexp,
      domain: domain,
      nonEmpty: nonEmptyString,
      unique: unique,
      matches: matches
    });
  };
  var boundAnyOf = anyOf.bind(base);
  var boundAnything = anything.bind(base);
  var boundArrayOf = arrayOf.bind(base);
  var boundBoolean = _boolean.bind(base);
  var boundCallback = callback.bind(base);
  var boundLiteral = literal.bind(base);
  var boundNumber = number.bind(base);
  var boundMapOfValues = mapOfValues.bind(base);
  var boundObjectOf = objectOf.bind(base);
  var boundString = string.bind(base);

  // compound validators
  var boundEnumOf = function boundEnumOf() {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }
    return boundAnyOf(values.map(boundLiteral), "one of these values: " + JSON.stringify(values));
  };

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var AMBIGUOUS = "ambiguous";
  var AUTHENTICATED = "authenticated";
  var LOGGED_OUT = "loggedOut";

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var validateIdentityMap = boundMapOfValues(boundArrayOf(boundObjectOf({
    authenticatedState: boundEnumOf(AMBIGUOUS, AUTHENTICATED, LOGGED_OUT),
    id: boundString(),
    namespace: boundObjectOf({
      code: boundString()
    }).noUnknownFields(),
    primary: boundBoolean(),
    xid: boundString()
  }).noUnknownFields()).required());

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var validateConfigOverride = boundObjectOf({});

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var debugQueryParam = "alloy_debug";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createLogController = (function (_ref) {
    var console = _ref.console,
      locationSearch = _ref.locationSearch,
      createLogger = _ref.createLogger,
      instanceName = _ref.instanceName,
      createNamespacedStorage = _ref.createNamespacedStorage,
      getMonitors = _ref.getMonitors;
    var parsedQueryString = queryString.parse(locationSearch);
    var storage = createNamespacedStorage("instance." + instanceName + ".");
    var debugSessionValue = storage.session.getItem("debug");
    var debugEnabled = debugSessionValue === "true";
    var debugEnabledWritableFromConfig = debugSessionValue === null;
    var getDebugEnabled = function getDebugEnabled() {
      return debugEnabled;
    };
    var setDebugEnabled = function setDebugEnabled(value, _ref2) {
      var fromConfig = _ref2.fromConfig;
      if (!fromConfig || debugEnabledWritableFromConfig) {
        debugEnabled = value;
      }
      if (!fromConfig) {
        // Web storage only allows strings, so we explicitly convert to string.
        storage.session.setItem("debug", value.toString());
        debugEnabledWritableFromConfig = false;
      }
    };
    if (parsedQueryString[debugQueryParam] !== undefined) {
      setDebugEnabled(stringToBoolean(parsedQueryString[debugQueryParam]), {
        fromConfig: false
      });
    }
    return {
      setDebugEnabled: setDebugEnabled,
      logger: createLogger({
        getDebugEnabled: getDebugEnabled,
        context: {
          instanceName: instanceName
        },
        getMonitors: getMonitors,
        console: console
      }),
      createComponentLogger: function createComponentLogger(componentName) {
        return createLogger({
          getDebugEnabled: getDebugEnabled,
          context: {
            instanceName: instanceName,
            componentName: componentName
          },
          getMonitors: getMonitors,
          console: console
        });
      }
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  // TO-DOCUMENT: Lifecycle hooks and their params.
  var hookNames = [
  // Called after all components have been registered.
  "onComponentsRegistered",
  // Called before an event is sent on a data collection request
  "onBeforeEvent",
  // Called before each request is made to the edge.
  "onBeforeRequest",
  // Called after each response is returned from the edge with a successful
  // status code
  "onResponse",
  // Called after a network request to the edge fails. Either the request
  // didn't make it to the edge, didn't make it to Konductor, or Konductor
  // failed to return a regularly-structured response. (In this case { error }
  // is passed as the parameter)
  // Also called when the respone returns a 400 or 500 error. (In this case
  // { response } is passed as the parameter)
  "onRequestFailure",
  // A user clicked on an element.
  "onClick",
  // Called by RulesEngine when a ruleset is satisfied with a list of
  // propositions
  "onDecision"];
  var createHook = function createHook(componentRegistry, hookName) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return Promise.all(componentRegistry.getLifecycleCallbacks(hookName).map(function (callback) {
        return new Promise(function (resolve) {
          resolve(callback.apply(void 0, args));
        });
      }));
    };
  };

  /**
   * This ensures that if a component's lifecycle method X
   * attempts to execute lifecycle method Y, that all X methods on all components
   * will have been called before any of their Y methods are called. It does
   * this by kicking the call to the Y method to the next JavaScript tick.
   * @returns {function}
   */
  var guardHook = function guardHook(fn) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return Promise.resolve().then(function () {
        return fn.apply(void 0, args);
      });
    };
  };
  var createLifecycle = (function (componentRegistry) {
    return hookNames.reduce(function (memo, hookName) {
      memo[hookName] = guardHook(createHook(componentRegistry, hookName));
      return memo;
    }, {});
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var wrapForErrorHandling = function wrapForErrorHandling(fn, stackMessage) {
    return function () {
      var result;
      try {
        result = fn.apply(void 0, arguments);
      } catch (error) {
        throw stackError({
          error: error,
          message: stackMessage
        });
      }
      if (result instanceof Promise) {
        result = result["catch"](function (error) {
          throw stackError({
            error: error,
            message: stackMessage
          });
        });
      }
      return result;
    };
  };

  // TO-DOCUMENT: All public commands and their signatures.
  var createComponentRegistry = (function () {
    var componentsByNamespace = {};
    var commandsByName = {};
    var lifecycleCallbacksByName = {};
    var registerComponentCommands = function registerComponentCommands(namespace) {
      var componentCommandsByName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var conflictingCommandNames = intersection(Object.keys(commandsByName), Object.keys(componentCommandsByName));
      if (conflictingCommandNames.length) {
        throw new Error("[ComponentRegistry] Could not register " + namespace + " " + ("because it has existing command(s): " + conflictingCommandNames.join(",")));
      }
      Object.keys(componentCommandsByName).forEach(function (commandName) {
        var command = componentCommandsByName[commandName];
        command.commandName = commandName;
        command.run = wrapForErrorHandling(command.run, "[" + namespace + "] An error occurred while executing the " + commandName + " command.");
        commandsByName[commandName] = command;
      });
    };
    var registerLifecycleCallbacks = function registerLifecycleCallbacks(namespace) {
      var componentLifecycleCallbacksByName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Object.keys(componentLifecycleCallbacksByName).forEach(function (hookName) {
        lifecycleCallbacksByName[hookName] = lifecycleCallbacksByName[hookName] || [];
        lifecycleCallbacksByName[hookName].push(wrapForErrorHandling(componentLifecycleCallbacksByName[hookName], "[" + namespace + "] An error occurred while executing the " + hookName + " lifecycle hook."));
      });
    };
    return {
      register: function register(namespace, component) {
        var commands = component.commands,
          lifecycle = component.lifecycle;
        registerComponentCommands(namespace, commands);
        registerLifecycleCallbacks(namespace, lifecycle);
        componentsByNamespace[namespace] = component;
      },
      getCommand: function getCommand(commandName) {
        return commandsByName[commandName];
      },
      getCommandNames: function getCommandNames() {
        return Object.keys(commandsByName);
      },
      getLifecycleCallbacks: function getLifecycleCallbacks(hookName) {
        return lifecycleCallbacksByName[hookName] || [];
      },
      getComponentNames: function getComponentNames() {
        return Object.keys(componentsByNamespace);
      }
    };
  });

  var injectSendNetworkRequest = (function (_ref) {
    var logger = _ref.logger,
      sendFetchRequest = _ref.sendFetchRequest,
      sendBeaconRequest = _ref.sendBeaconRequest,
      isRequestRetryable = _ref.isRequestRetryable,
      getRequestRetryDelay = _ref.getRequestRetryDelay;
    /**
     * Send a network request and returns details about the response.
     */
    return function (_ref2) {
      var requestId = _ref2.requestId,
        url = _ref2.url,
        payload = _ref2.payload,
        useSendBeacon = _ref2.useSendBeacon;
      // We want to log raw payload and event data rather than
      // our fancy wrapper objects. Calling payload.toJSON() is
      // insufficient to get all the nested raw data, because it's
      // not recursive (it doesn't call toJSON() on the event objects).
      // Parsing the result of JSON.stringify(), however, gives the
      // fully recursive raw data.
      var stringifiedPayload = JSON.stringify(payload);
      var parsedPayload = JSON.parse(stringifiedPayload);
      logger.logOnBeforeNetworkRequest({
        url: url,
        requestId: requestId,
        payload: parsedPayload
      });
      var _executeRequest = function executeRequest() {
        var retriesAttempted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var requestMethod = useSendBeacon ? sendBeaconRequest : sendFetchRequest;
        return requestMethod(url, stringifiedPayload).then(function (response) {
          var requestIsRetryable = isRequestRetryable({
            response: response,
            retriesAttempted: retriesAttempted
          });
          if (requestIsRetryable) {
            var requestRetryDelay = getRequestRetryDelay({
              response: response,
              retriesAttempted: retriesAttempted
            });
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve(_executeRequest(retriesAttempted + 1));
              }, requestRetryDelay);
            });
          }
          var parsedBody;
          try {
            parsedBody = JSON.parse(response.body);
          } catch (_unused) {
            // Non-JSON. Something went wrong.
          }
          logger.logOnNetworkResponse(_objectSpread2(_objectSpread2({
            requestId: requestId,
            url: url,
            payload: parsedPayload
          }, response), {}, {
            parsedBody: parsedBody,
            retriesAttempted: retriesAttempted
          }));
          return {
            statusCode: response.statusCode,
            body: response.body,
            parsedBody: parsedBody,
            getHeader: response.getHeader
          };
        });
      };
      return _executeRequest()["catch"](function (error) {
        logger.logOnNetworkError({
          requestId: requestId,
          url: url,
          payload: parsedPayload,
          error: error
        });
        throw stackError({
          error: error,
          message: "Network request failed."
        });
      });
    };
  });

  /*
  Copyright 2021 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectExtractEdgeInfo = (function (_ref) {
    var logger = _ref.logger;
    return function (adobeEdgeHeader) {
      if (adobeEdgeHeader) {
        var headerParts = adobeEdgeHeader.split(";");
        if (headerParts.length >= 2 && headerParts[1].length > 0) {
          try {
            var regionId = parseInt(headerParts[1], 10);
            if (!Number.isNaN(regionId)) {
              return {
                regionId: regionId
              };
            }
          } catch (_unused) {
            // No need to do anything. The log statement below will log an error
          }
        }
        logger.warn("Invalid adobe edge: \"" + adobeEdgeHeader + "\"");
      }
      return {};
    };
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  /* eslint-disable no-bitwise */

  // #region decode protobuf

  /** Decoding bytes is not something commonly done in vanilla JavaScript work, and as such
   * this file will strive to explain each step of decoding a protobuf in detail.
   * It leans heavily on the protobuf documentation https://protobuf.dev/programming-guides/encoding/,
   * often quoting directly from it without citation.
   */

  /**
   * The kndctr cookie protobuf format
   * From https://git.corp.adobe.com/pages/experience-edge/konductor/#/api/identifying-visitors?id=device-identifiers
   * and https://git.corp.adobe.com/experience-edge/konductor/blob/master/feature-identity/src/main/kotlin/com/adobe/edge/features/identity/data/StoredIdentity.kt#L16

   * syntax = "proto3";
   *
   * // Device-level identity for Experience Edge
   * message Identity {
   *   // The Experience Cloud ID value
   *   string ecid = 1;
   *
   *   IdentityMetadata metadata = 10;
   *
   *   // Used only in the 3rd party domain context.
   *   // It stores the UNIX timestamp and some metadata about the last identity sync triggered by Experience Edge.
   *   int64 last_sync = 20;
   *   int64 sync_hash = 21;
   *   int32 id_sync_container_id = 22;
   *
   *   // UNIX timestamp when the Identity was last returned in a `state:store` instruction.
   *   // The Identity is written at most once every 24h with a large TTL, to ensure it does not expire.
   *   int64 write_time = 30;
   * }
   *
   * message IdentityMetadata {
   *   // UNIX timestamp when this identity was minted.
   *   int64 created_at = 1;
   *
   *   // Whether or not the identity is random (new) or based on an existing seed.
   *   bool is_new = 2;
   *
   *   // Type of device for which the identity was generated.
   *   // 0 = UNKNOWN, 1 = BROWSER, 2 = MOBILE
   *   int32 device_type = 3;
   *
   *   // The Experience Edge region in which the identity was minted.
   *   string region = 5;
   *
   *   // More details on the source of the ECID identity.
   *   // Invariant: when `is_new` = true, the source must be set to `RANDOM`.
   *   // 0 = RANDOM, 1 = THIRD_PARTY_ID, 2 = FIRST_PARTY_ID, 3 = RECEIVED_IN_REQUEST
   *   int32 source = 6;
   * }
   */

  var ECID_FIELD_NUMBER = 1;

  /**
   * Decodes a varint from a buffer starting at the given offset.
   *
   * Variable-width integers, or varints, are at the core of the wire format. They
   * allow encoding unsigned 64-bit integers using anywhere between one and ten
   * bytes, with small values using fewer bytes.
   *
   * Each byte in the varint has a continuation bit that indicates if the byte
   * that follows it is part of the varint. This is the most significant bit (MSB)
   * of the byte (sometimes also called the sign bit). The lower 7 bits are a
   * payload; the resulting integer is built by appending together the 7-bit
   * payloads of its constituent bytes.
   *
   * 10010110 00000001        // Original inputs.
   *  0010110  0000001        // Drop continuation bits.
   *  0000001  0010110        // Convert to big-endian.
   *    00000010010110        // Concatenate.
   *  128 + 16 + 4 + 2 = 150  // Interpret as an unsigned 64-bit integer.
   *
   * @example decodeVarint(new Uint8Array([0b0, 0b1]), 0) // { value: 1, length: 2 }
   * @example decodeVarint(new Uint8Array([0b10010110, 0b00000001], 0) // { value: 150, length: 2 })
   * @param {Uint8Array} buffer
   * @param {number} offset
   * @returns {{ value: number, length: number }} The value of the varint and the
   * number of bytes it takes up.
   */
  var decodeVarint = function decodeVarint(buffer, offset) {
    var value = 0;
    var length = 0;
    var _byte;
    do {
      if (offset < 0 || offset + length >= buffer.length) {
        throw new Error("Invalid varint: buffer ended unexpectedly");
      }
      _byte = buffer[offset + length];
      // Drop the continuation bit (the most significant bit), convert it from
      // little endian to big endian, and add it to the accumulator `value`.
      value |= (_byte & 127) << 7 * length;
      // Increase the length of the varint by one byte.
      length += 1;
      // A varint can be at most 10 bytes long for a 64-bit integer.
      if (length > 10) {
        throw new Error("Invalid varint: too long");
      }
    } while (_byte & 128);
    return {
      value: value,
      length: length
    };
  };

  /**
   * | ID | Name   | Used for                                                 |
   * |----|--------|----------------------------------------------------------|
   * | 0  | varint | int32, int64, uint32, uint64, sint32, sint64, bool, enum |
   * | 1  | I64    | fixed64, sfixed64, double                                |
   * | 2  | LEN    | string, bytes                                            |
   * | 3  | SGROUP | group start (deprecated)                                 |
   * | 4  | EGROUP | group end (deprecated)                                   |
   * | 5  | I32    | fixed32, sfixed32, float                                 |
   */
  var WIRE_TYPES = Object.freeze({
    VARINT: 0,
    I64: 1,
    LEN: 2,
    SGROUP: 3,
    EGROUP: 4,
    I32: 5
  });

  /**
   * Given a protobuf as a Uint8Array and based on the protobuf definition for the
   * kndctr cookie provided at https://git.corp.adobe.com/pages/experience-edge/konductor/#/api/identifying-visitors?id=device-identifiers,
   * this function should return the ECID as a string.
   * The decoding of the protobuf is hand-crafted in order to save on size
   * compared to the full protobuf.js library.
   * @param {Uint8Array} buffer
   * @returns {string}
   */
  var decodeKndctrProtobuf = function decodeKndctrProtobuf(buffer) {
    var offset = 0;
    var ecid = null;
    while (offset < buffer.length && !ecid) {
      // A protobuf message is a series of records. Each record is a tag, the length,
      // and the value.
      // A record always starts with the tag. The “tag” of a record is encoded as
      // a varint formed from the field number and the wire type via the formula
      // `(field_number << 3) | wire_type`. In other words, after decoding the
      // varint representing a field, the low 3 bits tell us the wire type, and the rest of the integer tells us the field number.
      // So the first step is to decode the varint
      var _decodeVarint = decodeVarint(buffer, offset),
        tag = _decodeVarint.value,
        tagLength = _decodeVarint.length;
      offset += tagLength;
      // Next, we get the wire type and the field number.
      // You take the last three bits to get the wire type and then right-shift by
      // three to get the field number.
      var wireType = tag & 7;
      var fieldNumber = tag >> 3;
      // We only care about the ECID field, so we will skip any other fields until
      // we find it.
      if (fieldNumber === ECID_FIELD_NUMBER) {
        // The wire type for the ECID field is 2, which means it is a length-delimited field.
        if (wireType === WIRE_TYPES.LEN) {
          // The next varint will tell us the length of the ECID.
          var fieldValueLength = decodeVarint(buffer, offset);
          offset += fieldValueLength.length;
          // The ECID is a UTF-8 encoded string, so we will decode it as such.
          ecid = new TextDecoder().decode(buffer.slice(offset, offset + fieldValueLength.value));
          offset += fieldValueLength.value;
          return ecid;
        }
      } else {
        // If we don't care about the field, we skip it.
        // The wire type tells us how to skip the field.
        switch (wireType) {
          case WIRE_TYPES.VARINT:
            // Skip the varint
            offset += decodeVarint(buffer, offset).length;
            break;
          case WIRE_TYPES.I64:
            // Skip the 64-bit integer
            offset += 8;
            break;
          case WIRE_TYPES.LEN:
            {
              // Find the value that represents the length of the vield
              var _fieldValueLength = decodeVarint(buffer, offset);
              offset += _fieldValueLength.length + _fieldValueLength.value;
              break;
            }
          case WIRE_TYPES.SGROUP:
            // Skip the start group
            break;
          case WIRE_TYPES.EGROUP:
            // Skip the end group
            break;
          case WIRE_TYPES.I32:
            // Skip the 32-bit integer
            offset += 4;
            break;
          default:
            throw new Error("Malformed kndctr cookie. Unknown wire type: " + wireType);
        }
      }
    }

    // No ECID was found. Maybe the cookie is malformed, maybe the format was changed.
    throw new Error("No ECID found in cookie.");
  };

  // #endregion

  // #region decode cookie
  var createGetEcidFromCookie = (function (_ref) {
    var orgId = _ref.orgId,
      cookieJar = _ref.cookieJar,
      logger = _ref.logger;
    var kndctrCookieName = getNamespacedCookieName(orgId, "identity");
    /**
     * Returns the ECID from the kndctr cookie.
     * @returns {string|null}
     */
    return function () {
      var cookie = cookieJar.get(kndctrCookieName);
      if (!cookie) {
        return null;
      }
      try {
        var decodedCookie = decodeURIComponent(cookie).replace(/_/g, "/").replace(/-/g, "+");
        // cookie is a base64 encoded byte representation of a Identity protobuf message
        // and we need to get it to a Uint8Array in order to decode it

        var cookieBytes = base64ToBytes(decodedCookie);
        return decodeKndctrProtobuf(cookieBytes);
      } catch (error) {
        logger.warn("Unable to decode ECID from " + kndctrCookieName + " cookie", error);
        return null;
      }
    };
  });
  // #endregion

  /*
  Copyright 2025 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Creates an identity management service for handling ECID (Experience Cloud ID) resolution and tracking.
   *
   * This factory function creates an identity manager service that manages the state of identity resolution,
   * provides methods to check for existing identity cookies, and handles the asynchronous nature
   * of identity acquisition in Adobe Experience Platform Web SDK.
   *
   * @function
   *
   * @param {Object} options
   * @param {Logger} options.logger
   * @param {CookieJar} options.loggingCookieJar
   * @param {{orgId: string}} options.config
   *
   * @returns {IdentityManager}
   *
   * @example
   * // Create an identity service
   * const identityManager = createIdentity({
   *   logger: myLogger,
   *   loggingCookieJar: myCookieJar,
   *   config: { orgId: 'myOrgId@AdobeOrg' }
   * });
   *
   * // Initialize and check for existing identity
   * identityManager.initialize();
   *
   * // Wait for identity to be available
   * await identityManager.awaitIdentity();
   *
   * // Get ECID from cookie
   * const ecid = identityManager.getEcidFromCookie();
   */
  var createIdentity$1 = (function (_ref) {
    var logger = _ref.logger,
      loggingCookieJar = _ref.loggingCookieJar,
      config = _ref.config;
    var awaitIdentityResolve = null;
    var awaitIdentityPromise = new Promise(function (resolve) {
      awaitIdentityResolve = resolve;
    });
    var decodeKndctrCookie = createGetEcidFromCookie({
      orgId: config.orgId,
      cookieJar: loggingCookieJar,
      logger: logger
    });
    return {
      initialize: function initialize() {
        var ecidFromCookie = decodeKndctrCookie();
        if (ecidFromCookie) {
          this.setIdentityAcquired();
        }
      },
      setIdentityAcquired: function setIdentityAcquired() {
        awaitIdentityResolve();
      },
      awaitIdentity: function awaitIdentity() {
        return awaitIdentityPromise;
      },
      getEcidFromCookie: function getEcidFromCookie() {
        return decodeKndctrCookie();
      }
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var IN = "in";
  var OUT = "out";
  var PENDING = "pending";
  var DISABLED = "disabled";
  var WAIT = "wait";
  var AUTO = "auto";

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var GENERAL = "general";

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var DECLINED_CONSENT_ERROR_CODE = "declinedConsent";
  var CONSENT_SOURCE_DEFAULT = "default";
  var CONSENT_SOURCE_INITIAL = "initial";
  var CONSENT_SOURCE_NEW = "new";

  /**
   * @private
   * @param {string} errorMessage
   * @returns {Error}
   */
  var createDeclinedConsentError = function createDeclinedConsentError(errorMessage) {
    var error = new Error(errorMessage);
    error.code = DECLINED_CONSENT_ERROR_CODE;
    error.message = errorMessage;
    return error;
  };

  /**
   * Creates a consent state machine that manages user consent preferences and
   * coordinates deferred operations that require consent.
   *
   * The state machine supports the following states:
   * - "in": User has provided consent (with default or explicit consent)
   * - "out": User has declined consent (with default or explicit decline)
   * - "pending": Consent decision is awaiting user input
   *
   * @param {object} options
   * @param {Logger} options.logger
   *
   * @returns {ConsentStateMachine}
   *
   * @example
   * const consentStateMachine = createConsentStateMachine({ logger });
   *
   * // Set consent state
   * consentStateMachine.in('new');
   *
   * // Wait for consent
   * await consentStateMachine.awaitConsent();
   *
   * // Check current state
   * const { state, wasSet } = consentStateMachine.current();
   */
  var createConsentStateMachine = (function (_ref) {
    var logger = _ref.logger;
    var deferreds = [];
    var runAll = function runAll() {
      while (deferreds.length) {
        deferreds.shift().resolve();
      }
    };
    var discardAll = function discardAll() {
      while (deferreds.length) {
        deferreds.shift().reject(createDeclinedConsentError("The user declined consent."));
      }
    };
    var awaitInitial = function awaitInitial() {
      return Promise.resolve();
    };
    var awaitInDefault = function awaitInDefault() {
      return Promise.resolve();
    };
    var awaitIn = function awaitIn() {
      return Promise.resolve();
    };
    var awaitOutDefault = function awaitOutDefault() {
      return Promise.reject(createDeclinedConsentError("No consent preferences have been set."));
    };
    var awaitOut = function awaitOut() {
      return Promise.reject(createDeclinedConsentError("The user declined consent."));
    };
    var awaitPending = function awaitPending(returnImmediately) {
      if (returnImmediately) {
        return Promise.reject(new Error("Consent is pending."));
      }
      var deferred = defer();
      deferreds.push(deferred);
      return deferred.promise;
    };
    return {
      "in": function _in(source) {
        if (source === CONSENT_SOURCE_DEFAULT) {
          this.awaitConsent = awaitInDefault;
        } else {
          if (source === CONSENT_SOURCE_INITIAL) {
            logger.info("Loaded user consent preferences. The user previously consented.");
          } else if (source === CONSENT_SOURCE_NEW && this.awaitConsent !== awaitIn) {
            logger.info("User consented.");
          }
          runAll();
          this.awaitConsent = awaitIn;
        }
      },
      out: function out(source) {
        if (source === CONSENT_SOURCE_DEFAULT) {
          logger.warn("User consent preferences not found. Default consent of out will be used.");
          this.awaitConsent = awaitOutDefault;
        } else {
          if (source === CONSENT_SOURCE_INITIAL) {
            logger.warn("Loaded user consent preferences. The user previously declined consent.");
          } else if (source === CONSENT_SOURCE_NEW && this.awaitConsent !== awaitOut) {
            logger.warn("User declined consent.");
          }
          discardAll();
          this.awaitConsent = awaitOut;
        }
      },
      pending: function pending(source) {
        if (source === CONSENT_SOURCE_DEFAULT) {
          logger.info("User consent preferences not found. Default consent of pending will be used. Some commands may be delayed.");
        }
        this.awaitConsent = awaitPending;
      },
      awaitConsent: awaitInitial,
      withConsent: function withConsent() {
        return this.awaitConsent(true);
      },
      current: function current() {
        switch (this.awaitConsent) {
          case awaitInDefault:
            return {
              state: "in",
              wasSet: false
            };
          case awaitIn:
            return {
              state: "in",
              wasSet: true
            };
          case awaitOutDefault:
            return {
              state: "out",
              wasSet: false
            };
          case awaitOut:
            return {
              state: "out",
              wasSet: true
            };
          case awaitPending:
            return {
              state: "pending",
              wasSet: false
            };
          default:
            return {
              state: "in",
              wasSet: false
            };
        }
      }
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * @function
   *
   * @param {Object} options
   * @param {ConsentStateMachine} options.generalConsentState
   * @param {Logger} options.logger
   *
   * @returns {ConsentManager}
   */
  var createConsent = (function (_ref) {
    var generalConsentState = _ref.generalConsentState,
      logger = _ref.logger;
    var _setConsent = function setConsent(consentByPurpose, source) {
      switch (consentByPurpose[GENERAL]) {
        case IN:
          generalConsentState["in"](source);
          break;
        case OUT:
          generalConsentState.out(source);
          break;
        case PENDING:
          generalConsentState.pending(source);
          break;
        default:
          logger.warn("Unknown consent value: " + consentByPurpose[GENERAL]);
          break;
      }
    };
    return {
      initializeConsent: function initializeConsent(defaultConsentByPurpose, storedConsentByPurpose) {
        if (storedConsentByPurpose[GENERAL]) {
          _setConsent(storedConsentByPurpose, CONSENT_SOURCE_INITIAL);
        } else {
          _setConsent(defaultConsentByPurpose, CONSENT_SOURCE_DEFAULT);
        }
      },
      setConsent: function setConsent(consentByPurpose) {
        _setConsent(consentByPurpose, CONSENT_SOURCE_NEW);
      },
      suspend: function suspend() {
        generalConsentState.pending();
      },
      awaitConsent: function awaitConsent() {
        return generalConsentState.awaitConsent();
      },
      withConsent: function withConsent() {
        return generalConsentState.withConsent();
      },
      current: function current() {
        return generalConsentState.current();
      }
    };
  });

  var getXdmPropositions = function getXdmPropositions(xdm) {
    return xdm &&
    // eslint-disable-next-line no-underscore-dangle
    xdm._experience &&
    // eslint-disable-next-line no-underscore-dangle
    xdm._experience.decisioning &&
    // eslint-disable-next-line no-underscore-dangle
    isNonEmptyArray(xdm._experience.decisioning.propositions) ?
    // eslint-disable-next-line no-underscore-dangle
    xdm._experience.decisioning.propositions : [];
  };
  var createEvent = (function () {
    var content = {};
    var createdAt = Date.now();
    var userXdm;
    var userData;
    var _documentMayUnload = false;
    var isFinalized = false;
    var shouldSendEvent = true;
    var throwIfEventFinalized = function throwIfEventFinalized(methodName) {
      if (isFinalized) {
        throw new Error(methodName + " cannot be called after event is finalized.");
      }
    };
    var event = {
      hasQuery: function hasQuery() {
        return Object.prototype.hasOwnProperty.call(this.getContent(), "query");
      },
      getContent: function getContent() {
        var currentContent = JSON.parse(JSON.stringify(content));
        if (userXdm) {
          deepAssign(currentContent, {
            xdm: userXdm
          });
        }
        if (userData) {
          deepAssign(currentContent, {
            data: userData
          });
        }
        return currentContent;
      },
      setUserXdm: function setUserXdm(value) {
        throwIfEventFinalized("setUserXdm");
        userXdm = value;
      },
      setUserData: function setUserData(value) {
        throwIfEventFinalized("setUserData");
        userData = value;
      },
      mergeXdm: function mergeXdm(xdm) {
        throwIfEventFinalized("mergeXdm");
        if (xdm) {
          deepAssign(content, {
            xdm: xdm
          });
        }
      },
      mergeData: function mergeData(data) {
        throwIfEventFinalized("mergeData");
        if (data) {
          deepAssign(content, {
            data: data
          });
        }
      },
      mergeMeta: function mergeMeta(meta) {
        throwIfEventFinalized("mergeMeta");
        if (meta) {
          deepAssign(content, {
            meta: meta
          });
        }
      },
      mergeQuery: function mergeQuery(query) {
        throwIfEventFinalized("mergeQuery");
        if (query) {
          deepAssign(content, {
            query: query
          });
        }
      },
      documentMayUnload: function documentMayUnload() {
        _documentMayUnload = true;
      },
      finalize: function finalize(onBeforeEventSend) {
        if (isFinalized) {
          return;
        }
        var newPropositions = deduplicateArray([].concat(_toConsumableArray(getXdmPropositions(userXdm)), _toConsumableArray(getXdmPropositions(content.xdm))), function (a, b) {
          return a === b || a.id && b.id && a.id === b.id && a.scope && b.scope && a.scope === b.scope;
        });
        if (userXdm) {
          this.mergeXdm(userXdm);
        }
        if (newPropositions.length > 0) {
          // eslint-disable-next-line no-underscore-dangle
          content.xdm._experience.decisioning.propositions = newPropositions;
        }
        if (userData) {
          event.mergeData(userData);
        }

        // the event should already be considered finalized in case onBeforeEventSend throws an error
        isFinalized = true;
        if (onBeforeEventSend) {
          // assume that the onBeforeEventSend callback will fail (in-case of an error)
          shouldSendEvent = false;

          // this allows the user to replace the xdm and data properties
          // on the object passed to the callback
          var tempContent = {
            xdm: content.xdm || {},
            data: content.data || {}
          };
          var result = onBeforeEventSend(tempContent);
          shouldSendEvent = result !== false;
          content.xdm = tempContent.xdm || {};
          content.data = tempContent.data || {};
          if (isEmptyObject(content.xdm)) {
            delete content.xdm;
          }
          if (isEmptyObject(content.data)) {
            delete content.data;
          }
        }
      },
      getDocumentMayUnload: function getDocumentMayUnload() {
        return _documentMayUnload;
      },
      getCreatedAt: function getCreatedAt() {
        return createdAt;
      },
      isEmpty: function isEmpty() {
        return isEmptyObject(content) && (!userXdm || isEmptyObject(userXdm)) && (!userData || isEmptyObject(userData));
      },
      shouldSend: function shouldSend() {
        return shouldSendEvent;
      },
      getViewName: function getViewName() {
        if (!userXdm || !userXdm.web || !userXdm.web.webPageDetails) {
          return undefined;
        }
        return userXdm.web.webPageDetails.viewName;
      },
      getUserIdentityMap: function getUserIdentityMap() {
        var _userXdm;
        return (_userXdm = userXdm) === null || _userXdm === void 0 ? void 0 : _userXdm.identityMap;
      },
      toJSON: function toJSON() {
        if (!isFinalized) {
          throw new Error("toJSON called before finalize");
        }
        return content;
      }
    };
    return event;
  });

  /*
  Copyright 2021 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var RETRY_AFTER = "Retry-After";
  var ADOBE_EDGE = "x-adobe-edge";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Creates a representation of a gateway response with the addition of
   * helper methods.
   *
   * @function
   *
   * @param {object} options
   * @param {function(string): Object} options.extractEdgeInfo
   *
   * @returns {ResponseCreator}
   */
  var injectCreateResponse = (function (_ref) {
    var extractEdgeInfo = _ref.extractEdgeInfo;
    return function (_ref2) {
      var _ref2$content = _ref2.content,
        content = _ref2$content === void 0 ? {} : _ref2$content,
        getHeader = _ref2.getHeader;
      var _content$handle = content.handle,
        handle = _content$handle === void 0 ? [] : _content$handle,
        _content$errors = content.errors,
        errors = _content$errors === void 0 ? [] : _content$errors,
        _content$warnings = content.warnings,
        warnings = _content$warnings === void 0 ? [] : _content$warnings;
      return {
        /**
         * Returns matching fragments of the response by type.
         * @param {string} type A string with the current format: <namespace:action>
         *
         * @example
         * getPayloadsByType("identity:persist")
         */
        getPayloadsByType: function getPayloadsByType(type) {
          return handle.filter(function (fragment) {
            return fragment.type === type;
          }).flatMap(function (fragment) {
            return fragment.payload;
          });
        },
        /**
         * Returns all errors.
         */
        getErrors: function getErrors() {
          return errors;
        },
        /**
         * Returns all warnings.
         */
        getWarnings: function getWarnings() {
          return warnings;
        },
        /**
         * Returns an object containing the regionId from the x-adobe-edge header
         */
        getEdge: function getEdge() {
          return extractEdgeInfo(getHeader(ADOBE_EDGE));
        },
        toJSON: function toJSON() {
          return content;
        }
      };
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var CONFIGURE = "configure";
  var SET_DEBUG = "setDebug";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectExecuteCommand = (function (_ref) {
    var logger = _ref.logger,
      configureCommand = _ref.configureCommand,
      setDebugCommand = _ref.setDebugCommand,
      handleError = _ref.handleError,
      validateCommandOptions = _ref.validateCommandOptions;
    var configurePromise;
    var getExecutor = function getExecutor(commandName, options) {
      var executor;
      if (commandName === CONFIGURE) {
        if (configurePromise) {
          throw new Error("The library has already been configured and may only be configured once.");
        }
        executor = function executor() {
          configurePromise = configureCommand(options);
          return configurePromise.then(function () {
            // Don't expose internals to the user.
          });
        };
      } else {
        if (!configurePromise) {
          throw new Error("The library must be configured first. Please do so by executing the configure command.");
        }
        if (commandName === SET_DEBUG) {
          executor = function executor() {
            var optionsValidator = boundObjectOf({
              enabled: boundBoolean().required()
            }).noUnknownFields();
            var validatedOptions = validateCommandOptions({
              command: {
                commandName: SET_DEBUG,
                optionsValidator: optionsValidator
              },
              options: options
            });
            setDebugCommand(validatedOptions);
          };
        } else {
          executor = function executor() {
            return configurePromise.then(function (componentRegistry) {
              var command = componentRegistry.getCommand(commandName);
              if (!command || !isFunction(command.run)) {
                var commandNames = [CONFIGURE, SET_DEBUG].concat(componentRegistry.getCommandNames()).join(", ");
                throw new Error("The " + commandName + " command does not exist. List of available commands: " + commandNames + ".");
              }
              var validatedOptions = validateCommandOptions({
                command: command,
                options: options
              });
              return command.run(validatedOptions);
            }, function () {
              logger.warn("An error during configuration is preventing the " + commandName + " command from executing.");
              // If configuration failed, we prevent the configuration
              // error from bubbling here because we don't want the
              // configuration error to be reported in the console every
              // time any command is executed. Only having it bubble
              // once when the configure command runs is sufficient.
              // Instead, for this command, we'll just return a promise
              // that never gets resolved.
              return new Promise(function () {});
            });
          };
        }
      }
      return executor;
    };
    return function (commandName) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve) {
        // We have to wrap the getExecutor() call in the promise so the promise
        // will be rejected if getExecutor() throws errors.
        var executor = getExecutor(commandName, options);
        logger.logOnBeforeCommand({
          commandName: commandName,
          options: options
        });
        resolve(executor());
      })["catch"](function (error) {
        return handleError(error, commandName + " command");
      })["catch"](function (error) {
        logger.logOnCommandRejected({
          commandName: commandName,
          options: options,
          error: error
        });
        throw error;
      }).then(function (rawResult) {
        // We should always be returning an object from every command.
        var result = isObject(rawResult) ? rawResult : {};
        logger.logOnCommandResolved({
          commandName: commandName,
          options: options,
          result: result
        });
        return result;
      });
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var COMMAND_DOC_URI = "https://adobe.ly/3sHgQHb";
  var validateCommandOptions = (function (_ref) {
    var command = _ref.command,
      options = _ref.options;
    var commandName = command.commandName,
      _command$documentatio = command.documentationUri,
      documentationUri = _command$documentatio === void 0 ? COMMAND_DOC_URI : _command$documentatio,
      optionsValidator = command.optionsValidator;
    var validatedOptions = options;
    if (optionsValidator) {
      try {
        validatedOptions = optionsValidator(options);
      } catch (validationError) {
        var invalidOptionsMessage = "Invalid " + commandName + " command options:\n\t - " + validationError + " For command documentation see: " + documentationUri;
        throw new Error(invalidOptionsMessage);
      }
    }
    return validatedOptions;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var CONFIG_DOC_URI = "https://adobe.ly/3sHh553";
  var transformOptions = function transformOptions(_ref) {
    var combinedConfigValidator = _ref.combinedConfigValidator,
      options = _ref.options,
      logger = _ref.logger;
    try {
      var validator = combinedConfigValidator.noUnknownFields().required();
      return validator.call({
        logger: logger
      }, options);
    } catch (e) {
      throw new Error("Resolve these configuration problems:\n\t - " + e.message.split("\n").join("\n\t - ") + "\nFor configuration documentation see: " + CONFIG_DOC_URI);
    }
  };
  var buildAllOnInstanceConfiguredExtraParams = function buildAllOnInstanceConfiguredExtraParams(config, logger, componentCreators) {
    return componentCreators.reduce(function (memo, _ref2) {
      var buildOnInstanceConfiguredExtraParams = _ref2.buildOnInstanceConfiguredExtraParams;
      if (buildOnInstanceConfiguredExtraParams) {
        memo = _objectSpread2(_objectSpread2({}, memo), buildOnInstanceConfiguredExtraParams({
          config: config,
          logger: logger
        }));
      }
      return memo;
    }, {});
  };
  var wrapLoggerInQueue = function wrapLoggerInQueue(logger) {
    var queue = [];
    var queuedLogger = {
      get enabled() {
        return logger.enabled;
      },
      flush: function flush() {
        queue.forEach(function (_ref3) {
          var method = _ref3.method,
            args = _ref3.args;
          return logger[method].apply(logger, _toConsumableArray(args));
        });
      }
    };
    Object.keys(logger).filter(function (key) {
      return typeof logger[key] === "function";
    }).forEach(function (method) {
      queuedLogger[method] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        queue.push({
          method: method,
          args: args
        });
      };
    });
    return queuedLogger;
  };
  var buildAndValidateConfig = (function (_ref4) {
    var options = _ref4.options,
      componentCreators = _ref4.componentCreators,
      coreConfigValidators = _ref4.coreConfigValidators,
      createConfig = _ref4.createConfig,
      logger = _ref4.logger,
      setDebugEnabled = _ref4.setDebugEnabled;
    // We wrap the logger in a queue in case debugEnabled is set in the config
    // but we need to log something before the config is created.
    var queuedLogger = wrapLoggerInQueue(logger);
    var combinedConfigValidator = componentCreators.map(function (_ref5) {
      var configValidators = _ref5.configValidators;
      return configValidators;
    }).filter(function (configValidators) {
      return configValidators;
    }).reduce(function (validator, configValidators) {
      return validator.concat(configValidators);
    }, coreConfigValidators);
    var config = createConfig(transformOptions({
      combinedConfigValidator: combinedConfigValidator,
      options: options,
      logger: queuedLogger
    }));
    setDebugEnabled(config.debugEnabled, {
      fromConfig: true
    });
    queuedLogger.flush();
    var extraParams = buildAllOnInstanceConfiguredExtraParams(config, logger, componentCreators);
    logger.logOnInstanceConfigured(_objectSpread2(_objectSpread2({}, extraParams), {}, {
      config: config
    }));
    return config;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var initializeComponents = (function (_ref) {
    var componentCreators = _ref.componentCreators,
      lifecycle = _ref.lifecycle,
      componentRegistry = _ref.componentRegistry,
      getImmediatelyAvailableTools = _ref.getImmediatelyAvailableTools;
    componentCreators.forEach(function (createComponent) {
      var namespace = createComponent.namespace;
      // TO-DOCUMENT: Helpers that we inject into factories.
      var tools = getImmediatelyAvailableTools(namespace);
      var component;
      try {
        component = createComponent(tools);
      } catch (error) {
        throw stackError({
          error: error,
          message: "[" + namespace + "] An error occurred during component creation."
        });
      }
      componentRegistry.register(namespace, component);
    });
    return lifecycle.onComponentsRegistered({
      lifecycle: lifecycle
    }).then(function () {
      return componentRegistry;
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createConfig = function createConfig(options) {
    return _objectSpread2({}, options);
  };

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var EDGE = "edge.adobedc.net";
  var ID_THIRD_PARTY = "adobedc.demdex.net";

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var EDGE_BASE_PATH = "ee";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createCoreConfigs = (function () {
    return boundObjectOf({
      debugEnabled: boundBoolean()["default"](false),
      datastreamId: boundString().unique().required(),
      edgeDomain: boundString().domain()["default"](EDGE),
      edgeBasePath: boundString().nonEmpty()["default"](EDGE_BASE_PATH),
      orgId: boundString().unique().required(),
      onBeforeEventSend: boundCallback()["default"](noop),
      edgeConfigOverrides: validateConfigOverride
    }).renamed("edgeConfigId", boundString().unique(), "datastreamId");
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectHandleError = (function (_ref) {
    var errorPrefix = _ref.errorPrefix,
      logger = _ref.logger;
    return function (error, operation) {
      var err = toError(error);

      // In the case of declined consent, we've opted to not reject the promise
      // returned to the customer, but instead resolve the promise with an
      // empty result object.
      if (err.code === DECLINED_CONSENT_ERROR_CODE) {
        logger.warn("The " + operation + " could not fully complete. " + err.message);
        return {};
      }
      updateErrorMessage({
        error: err,
        message: errorPrefix + " " + err.message
      });
      throw err;
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectSendFetchRequest = (function (_ref) {
    var fetch = _ref.fetch;
    return function (url, body) {
      return fetch(url, {
        method: "POST",
        cache: "no-cache",
        credentials: "include",
        // To set the cookie header in the request.
        headers: {
          "Content-Type": "text/plain; charset=UTF-8"
        },
        referrerPolicy: "no-referrer-when-downgrade",
        body: body
      }).then(function (response) {
        return response.text().then(function (responseBody) {
          return {
            statusCode: response.status,
            // We expose headers through a function instead of creating an object
            // with all the headers up front largely because the native
            // request.getResponseHeader method is case-insensitive.
            getHeader: function getHeader(name) {
              return response.headers.get(name);
            },
            body: responseBody
          };
        });
      });
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectSendBeaconRequest = (function (_ref) {
    var sendBeacon = _ref.sendBeacon,
      sendFetchRequest = _ref.sendFetchRequest,
      logger = _ref.logger;
    return function (url, body) {
      var blob = new Blob([body], {
        type: "text/plain; charset=UTF-8"
      });
      if (!sendBeacon(url, blob)) {
        logger.info("Unable to use `sendBeacon`; falling back to `fetch`.");
        return sendFetchRequest(url, body);
      }

      // Using sendBeacon, we technically don't get a response back from
      // the server, but we'll resolve the promise with an object to maintain
      // consistency with other network strategies.
      return Promise.resolve({
        statusCode: 204,
        getHeader: function getHeader() {
          return null;
        },
        body: ""
      });
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createLogger = (function (_ref) {
    var getDebugEnabled = _ref.getDebugEnabled,
      console = _ref.console,
      getMonitors = _ref.getMonitors,
      context = _ref.context;
    var prefix = "[" + context.instanceName + "]";
    if (context.componentName) {
      prefix += " [" + context.componentName + "]";
    }
    var notifyMonitors = function notifyMonitors(method, data) {
      var monitors = getMonitors();
      if (monitors.length > 0) {
        var dataWithContext = _objectSpread2(_objectSpread2({}, context), data);
        monitors.forEach(function (monitor) {
          if (monitor[method]) {
            monitor[method](dataWithContext);
          }
        });
      }
    };
    var log = function log(level) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      notifyMonitors("onBeforeLog", {
        level: level,
        arguments: rest
      });
      if (getDebugEnabled()) {
        console[level].apply(console, [prefix].concat(rest));
      }
    };
    return {
      get enabled() {
        return getMonitors().length > 0 || getDebugEnabled();
      },
      logOnInstanceCreated: function logOnInstanceCreated(data) {
        notifyMonitors("onInstanceCreated", data);
        log("info", "Instance initialized.");
      },
      logOnInstanceConfigured: function logOnInstanceConfigured(data) {
        notifyMonitors("onInstanceConfigured", data);
        log("info", "Instance configured. Computed configuration:", data.config);
      },
      logOnBeforeCommand: function logOnBeforeCommand(data) {
        notifyMonitors("onBeforeCommand", data);
        log("info", "Executing " + data.commandName + " command. Options:", data.options);
      },
      logOnCommandResolved: function logOnCommandResolved(data) {
        notifyMonitors("onCommandResolved", data);
        log("info", data.commandName + " command resolved. Result:", data.result);
      },
      logOnCommandRejected: function logOnCommandRejected(data) {
        notifyMonitors("onCommandRejected", data);
        log("error", data.commandName + " command was rejected. Error:", data.error);
      },
      logOnBeforeNetworkRequest: function logOnBeforeNetworkRequest(data) {
        notifyMonitors("onBeforeNetworkRequest", data);
        log("info", "Request " + data.requestId + ": Sending request.", data.payload);
      },
      logOnNetworkResponse: function logOnNetworkResponse(data) {
        notifyMonitors("onNetworkResponse", data);
        var messagesSuffix = data.parsedBody || data.body ? "response body:" : "no response body.";
        log("info", "Request " + data.requestId + ": Received response with status code " + data.statusCode + " and " + messagesSuffix, data.parsedBody || data.body);
      },
      logOnNetworkError: function logOnNetworkError(data) {
        notifyMonitors("onNetworkError", data);
        log("error", "Request " + data.requestId + ": Network request failed.", data.error);
      },
      logOnContentHiding: function logOnContentHiding(data) {
        notifyMonitors("onContentHiding", {
          status: data.status
        });
        log(data.logLevel, data.message);
      },
      logOnContentRendering: function logOnContentRendering(data) {
        notifyMonitors("onContentRendering", {
          status: data.status,
          payload: data.detail
        });
        log(data.logLevel, data.message);
      },
      /**
       * Outputs informational message to the web console. In some
       * browsers a small "i" icon is displayed next to these items
       * in the web console's log.
       * @param {...*} arg Any argument to be logged.
       */
      info: log.bind(null, "info"),
      /**
       * Outputs a warning message to the web console.
       * @param {...*} arg Any argument to be logged.
       */
      warn: log.bind(null, "warn"),
      /**
       * Outputs an error message to the web console.
       * @param {...*} arg Any argument to be logged.
       */
      error: log.bind(null, "error")
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var PAGE_WIDE_SCOPE = "__view__";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createAddIdentity = (function (content) {
    return function (namespaceCode, identity) {
      content.xdm = content.xdm || {};
      content.xdm.identityMap = content.xdm.identityMap || {};
      content.xdm.identityMap[namespaceCode] = content.xdm.identityMap[namespaceCode] || [];
      content.xdm.identityMap[namespaceCode].push(identity);
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Creates a request object with methods to access and modify request properties.
   *
   * @function
   *
   * @param {Object} options
   * @param {RequestPayload} options.payload
   * @param {function({isIdentityEstablished: boolean}): string} options.getAction
   * @param {function({isIdentityEstablished: boolean}): boolean} options.getUseSendBeacon
   * @param {string} [options.datastreamIdOverride]
   * @param {string} [options.edgeSubPath]
   *
   * @returns {Request}
   *
   * @example
   * const request = createRequest({
   *   payload: { event: 'pageView' },
   *   getAction: ({ isIdentityEstablished }) => isIdentityEstablished ? 'send' : 'queue',
   *   getUseSendBeacon: ({ isIdentityEstablished }) => isIdentityEstablished,
   *   datastreamIdOverride: 'custom-datastream-id',
   *   edgeSubPath: 'custom/path'
   * });
   *
   * console.log(request.getId()); // Returns unique UUID
   * request.setIsIdentityEstablished();
   * console.log(request.getAction()); // Returns action based on identity status
   */
  var createRequest = (function (options) {
    var payload = options.payload,
      _getAction = options.getAction,
      _getUseSendBeacon = options.getUseSendBeacon,
      datastreamIdOverride = options.datastreamIdOverride,
      edgeSubPath = options.edgeSubPath,
      _options$requestParam = options.requestParams,
      requestParams = _options$requestParam === void 0 ? {} : _options$requestParam;
    var id = v4();
    var shouldUseThirdPartyDomain = false;
    var isIdentityEstablished = false;
    return {
      getId: function getId() {
        return id;
      },
      getPayload: function getPayload() {
        return payload;
      },
      getAction: function getAction() {
        return _getAction({
          isIdentityEstablished: isIdentityEstablished
        });
      },
      getDatastreamIdOverride: function getDatastreamIdOverride() {
        return datastreamIdOverride;
      },
      getUseSendBeacon: function getUseSendBeacon() {
        return _getUseSendBeacon({
          isIdentityEstablished: isIdentityEstablished
        });
      },
      getEdgeSubPath: function getEdgeSubPath() {
        if (edgeSubPath) {
          return edgeSubPath;
        }
        return "";
      },
      getUseIdThirdPartyDomain: function getUseIdThirdPartyDomain() {
        return shouldUseThirdPartyDomain;
      },
      setUseIdThirdPartyDomain: function setUseIdThirdPartyDomain() {
        shouldUseThirdPartyDomain = true;
      },
      setIsIdentityEstablished: function setIsIdentityEstablished() {
        isIdentityEstablished = true;
      },
      getRequestParams: function getRequestParams() {
        return requestParams;
      }
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createDataCollectionRequest = (function (_ref) {
    var dataCollectionRequestPayload = _ref.payload,
      datastreamIdOverride = _ref.datastreamIdOverride;
    var getUseSendBeacon = function getUseSendBeacon(_ref2) {
      var isIdentityEstablished = _ref2.isIdentityEstablished;
      // When the document may be unloading, we still hit the interact endpoint
      // using fetch if an identity has not been established. If we were instead
      // to hit the collect endpoint using sendBeacon in this case, one of three
      // things would occur:
      //
      // 1. The document ultimately isn't unloaded and Alloy receives an empty
      // response back from the collect endpoint, resulting in an error being
      // thrown by Alloy because we weren't able to establish an identity.
      // This is bad.
      // 2. The document is unloaded, but Alloy receives the empty
      // response back from the collect endpoint before navigation is completed,
      // resulting in an error being thrown by Alloy because we weren't able to
      // establish an identity. This is bad.
      // 3. The document is unloaded and Alloy does not receive the empty response
      // back from the collect endpoint before navigation is completed. No error
      // will be thrown, but no identity was established either. This is okay,
      // though no identity was established.
      //
      // By hitting the interact endpoint using fetch, one of the three things
      // would occur:
      //
      // 1. The document ultimately isn't unloaded and Alloy receives a
      // response with an identity back from the interact endpoint. No
      // error will be thrown and an identity is established. This is good.
      // 2. The document is unloaded and Alloy receives a response with an
      // identity back from the interact endpoint before navigation is completed.
      // No error will be thrown and an identity is established. This is good.
      // 3. The document is unloaded and Alloy does not receive the empty response
      // back from the collect endpoint before navigation is completed. In this
      // case, no error is thrown, but no identity was established and it's
      // more likely that the request never makes it to the server because we're
      // using fetch instead of sendBeacon.
      //
      // The second approach seemed preferable.
      return dataCollectionRequestPayload.getDocumentMayUnload() && isIdentityEstablished;
    };
    return createRequest({
      payload: dataCollectionRequestPayload,
      getAction: function getAction(_ref3) {
        var isIdentityEstablished = _ref3.isIdentityEstablished;
        return getUseSendBeacon({
          isIdentityEstablished: isIdentityEstablished
        }) ? "collect" : "interact";
      },
      getUseSendBeacon: getUseSendBeacon,
      datastreamIdOverride: datastreamIdOverride
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * createMerger creates a function that does a deep merge. Example:
   * ```js
   * payload.mergeConfigOverride({
   *   com_adobe_analytics: {
   *     reportSuites: ["reportSuite1"],
   *   },
   * });
   *
   * payload.mergeConfigOverride({
   *   com_adobe_analytics: {
   *     enabled: false,
   *   },
   * });
   *
   *
   * // payload.meta.configOverrides is now:
   * // {
   * //   com_adobe_analytics: {
   * //     enabled: false,
   * //     reportSuites: ["reportSuite1"],
   * //   },
   * // }
   * ```
   * however, we need the result to be:
   * ```js
   * // {
   * //   com_adobe_analytics: {
   * //     enabled: false,
   * //   },
   * // }
   * ```
   * aka a shallow merge, where the second object overwrites the first.
   * This is because order matters and we don't want to send reportSuites when something is
   * disabled.
   * This function does that.
   *
   * @param {Object} content
   * @param {string} key
   * @returns {(updates: Object) => void}
   */
  var createMergeConfigOverride = function createMergeConfigOverride(content, key) {
    return function (updates) {
      var propertyPath = key.split(".");
      var hostObjectForUpdates = propertyPath.reduce(function (obj, propertyName) {
        obj[propertyName] = obj[propertyName] || {};
        return obj[propertyName];
      }, content);
      Object.assign(hostObjectForUpdates, updates);
    };
  };

  /**
   * Creates a request payload object with methods for merging different types of data.
   * This provides the base functionality that all types of request payloads share.
   *
   * @function
   *
   * @param {Object} options
   * @param {Object} options.content
   * @param {function(string, Identity): void} options.addIdentity
   * @param {function(string):  boolean} options.hasIdentity
   *
   * @returns {RequestPayload}
   */
  var createRequestPayload = (function (options) {
    var content = options.content,
      addIdentity = options.addIdentity,
      hasIdentity = options.hasIdentity;
    var mergeConfigOverrides = createMergeConfigOverride(content, "meta.configOverrides");
    return {
      mergeMeta: createMerger(content, "meta"),
      mergeState: createMerger(content, "meta.state"),
      mergeQuery: createMerger(content, "query"),
      mergeConfigOverride: function mergeConfigOverride(updates) {
        return mergeConfigOverrides(updates);
      },
      finalizeConfigOverrides: function finalizeConfigOverrides() {
        var _content$meta;
        if ((_content$meta = content.meta) !== null && _content$meta !== void 0 && _content$meta.configOverrides) {
          var prepared = prepareConfigOverridesForEdge(content.meta.configOverrides);
          if (prepared === null) {
            delete content.meta.configOverrides;
          } else {
            content.meta.configOverrides = prepared;
          }
        }
      },
      addIdentity: addIdentity,
      hasIdentity: hasIdentity,
      toJSON: function toJSON() {
        return content;
      }
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createHasIdentity = (function (content) {
    return function (namespaceCode) {
      return (content.xdm && content.xdm.identityMap && content.xdm.identityMap[namespaceCode]) !== undefined;
    };
  });

  /**
   * @function
   *
   * @returns {DataCollectionRequestPayload}
   */
  var createDataCollectionRequestPayload = (function () {
    var content = {};
    var requestPayload = createRequestPayload({
      content: content,
      addIdentity: createAddIdentity(content),
      hasIdentity: createHasIdentity(content)
    });
    return _objectSpread2(_objectSpread2({}, requestPayload), {}, {
      addEvent: function addEvent(event) {
        content.events = content.events || [];
        content.events.push(event);
      },
      getEvents: function getEvents() {
        return content.events || [];
      },
      getDocumentMayUnload: function getDocumentMayUnload() {
        return (content.events || []).some(function (event) {
          return event.getDocumentMayUnload();
        });
      }
    });
  });

  var _excluded$6 = ["datastreamId"];

  /**
   * @typedef {{ datastreamId: string, [k: string]: Object }} Override
   * @typedef {Object} RequestPayload
   * @property {function(Override): void} mergeConfigOverride
   * @param {Object} params
   * @param {Override} params.localConfigOverrides
   * @param {Override} params.globalConfigOverrides
   * @param {RequestPayload} params.payload
   * @returns {{ payload: RequestPayload, datastreamIdOverride: string }}
   */
  var createRequestParams = (function (_ref) {
    var localConfigOverrides = _ref.localConfigOverrides,
      globalConfigOverrides = _ref.globalConfigOverrides,
      payload = _ref.payload;
    var requestParams = {
      payload: payload
    };
    var _ref2 = localConfigOverrides || {},
      datastreamId = _ref2.datastreamId,
      localConfigOverridesWithoutDatastreamId = _objectWithoutProperties(_ref2, _excluded$6);
    if (datastreamId) {
      requestParams.datastreamIdOverride = datastreamId;
    }
    if (globalConfigOverrides && !isEmptyObject(globalConfigOverrides)) {
      payload.mergeConfigOverride(globalConfigOverrides);
    }
    if (localConfigOverridesWithoutDatastreamId && !isEmptyObject(localConfigOverridesWithoutDatastreamId)) {
      payload.mergeConfigOverride(localConfigOverridesWithoutDatastreamId);
    }
    payload.finalizeConfigOverrides();
    return requestParams;
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var ASSURANCE_VALIDATION_SESSION_URL_PARAM = "adb_validation_sessionid";
  var ASSURANCE_VALIDATION_NAMESPACE = "validation.";
  var CLIENT_ID = "clientId";
  var getOrCreateAssuranceClientId = function getOrCreateAssuranceClientId(storage) {
    var clientId = storage.persistent.getItem(CLIENT_ID);
    if (!clientId) {
      clientId = v4();
      storage.persistent.setItem(CLIENT_ID, clientId);
    }
    return clientId;
  };
  var createGetAssuranceValidationTokenParams = (function (_ref) {
    var window = _ref.window,
      createNamespacedStorage = _ref.createNamespacedStorage;
    var storage = createNamespacedStorage(ASSURANCE_VALIDATION_NAMESPACE);
    return function () {
      var parsedQuery = queryString.parse(window.location.search);
      var validationSessionId = parsedQuery[ASSURANCE_VALIDATION_SESSION_URL_PARAM];
      if (!validationSessionId) {
        return "";
      }
      var clientId = getOrCreateAssuranceClientId(storage);
      var validationToken = validationSessionId + "|" + clientId;
      return "&" + queryString.stringify({
        adobeAepValidationToken: validationToken
      });
    };
  });

  var _excluded$5 = ["edgeConfigOverrides"];
  var EVENT_CANCELLATION_MESSAGE = "Event was canceled because the onBeforeEventSend callback returned false.";
  var createEventManager = (function (_ref) {
    var config = _ref.config,
      logger = _ref.logger,
      lifecycle = _ref.lifecycle,
      consent = _ref.consent,
      createEvent = _ref.createEvent,
      createDataCollectionRequestPayload = _ref.createDataCollectionRequestPayload,
      createDataCollectionRequest = _ref.createDataCollectionRequest,
      sendEdgeNetworkRequest = _ref.sendEdgeNetworkRequest,
      _applyResponse = _ref.applyResponse;
    var onBeforeEventSend = config.onBeforeEventSend,
      globalConfigOverrides = config.edgeConfigOverrides;
    return {
      createEvent: createEvent,
      /**
       * Sends an event. This includes running the event and payload through the
       * appropriate lifecycle hooks, sending the request to the server, and
       * handling the response.
       * @param {Object} event This will be JSON stringified and used inside the
       * request payload.
       * @param {Object} [options] Options to pass on to the onBeforeEvent
       * lifecycle method
       * @param {Object} [options.edgeConfigOverrides] Settings that take
       * precedence over the global datastream configuration, including which
       * datastream to use.
       * @returns {*}
       */
      sendEvent: function sendEvent(event) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var localConfigOverrides = options.edgeConfigOverrides,
          otherOptions = _objectWithoutProperties(options, _excluded$5);
        var requestParams = createRequestParams({
          payload: createDataCollectionRequestPayload(),
          localConfigOverrides: localConfigOverrides,
          globalConfigOverrides: globalConfigOverrides
        });
        var request = createDataCollectionRequest(requestParams);
        var onResponseCallbackAggregator = createCallbackAggregator();
        var onRequestFailureCallbackAggregator = createCallbackAggregator();
        return lifecycle.onBeforeEvent(_objectSpread2(_objectSpread2({}, otherOptions), {}, {
          event: event,
          onResponse: onResponseCallbackAggregator.add,
          onRequestFailure: onRequestFailureCallbackAggregator.add
        })).then(function () {
          requestParams.payload.addEvent(event);
          return consent.awaitConsent();
        }).then(function () {
          try {
            // NOTE: this calls onBeforeEventSend callback (if configured)
            event.finalize(onBeforeEventSend);
          } catch (error) {
            var throwError = function throwError() {
              throw error;
            };
            onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
            return onRequestFailureCallbackAggregator.call({
              error: error
            }).then(throwError, throwError);
          }

          // if the callback returns false, the event should not be sent
          if (!event.shouldSend()) {
            onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
            logger.info(EVENT_CANCELLATION_MESSAGE);
            var error = new Error(EVENT_CANCELLATION_MESSAGE);
            return onRequestFailureCallbackAggregator.call({
              error: error
            }).then(function () {
              // Ensure the promise gets resolved with undefined instead
              // of an array of return values from the callbacks.
            });
          }
          return sendEdgeNetworkRequest({
            request: request,
            runOnResponseCallbacks: onResponseCallbackAggregator.call,
            runOnRequestFailureCallbacks: onRequestFailureCallbackAggregator.call
          });
        });
      },
      applyResponse: function applyResponse(event) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$renderDecisi = options.renderDecisions,
          renderDecisions = _options$renderDecisi === void 0 ? false : _options$renderDecisi,
          _options$decisionCont = options.decisionContext,
          decisionContext = _options$decisionCont === void 0 ? {} : _options$decisionCont,
          _options$responseHead = options.responseHeaders,
          responseHeaders = _options$responseHead === void 0 ? {} : _options$responseHead,
          _options$responseBody = options.responseBody,
          responseBody = _options$responseBody === void 0 ? {
            handle: []
          } : _options$responseBody,
          personalization = options.personalization;
        var payload = createDataCollectionRequestPayload();
        var request = createDataCollectionRequest({
          payload: payload
        });
        var onResponseCallbackAggregator = createCallbackAggregator();
        return lifecycle.onBeforeEvent({
          event: event,
          renderDecisions: renderDecisions,
          decisionContext: decisionContext,
          decisionScopes: [PAGE_WIDE_SCOPE],
          personalization: personalization,
          onResponse: onResponseCallbackAggregator.add,
          onRequestFailure: noop
        }).then(function () {
          payload.addEvent(event);
          return _applyResponse({
            request: request,
            responseHeaders: responseHeaders,
            responseBody: responseBody,
            runOnResponseCallbacks: onResponseCallbackAggregator.call
          });
        });
      }
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var STATE_STORE_HANDLE_TYPE = "state:store";
  var createCookieTransfer = (function (_ref) {
    var cookieJar = _ref.cookieJar,
      shouldTransferCookie = _ref.shouldTransferCookie,
      apexDomain = _ref.apexDomain,
      dateProvider = _ref.dateProvider;
    return {
      /**
       * When sending to a third-party endpoint, the endpoint won't be able to
       * access first-party cookies, therefore we transfer cookies into
       * the request body so they can be read by the server.
       */
      cookiesToPayload: function cookiesToPayload(payload, endpointDomain) {
        // localhost is a special case where the apexDomain is ""
        // We want to treat localhost as a third-party domain.
        var isEndpointFirstParty = apexDomain !== "" && endpointDomain.endsWith(apexDomain);
        var state = {
          domain: apexDomain,
          cookiesEnabled: true
        };

        // If the endpoint is first-party, there's no need to transfer cookies
        // to the payload since they'll be automatically passed through cookie
        // headers.
        if (!isEndpointFirstParty) {
          var cookies = cookieJar.get();
          var entries = Object.keys(cookies).filter(shouldTransferCookie).map(function (qualifyingCookieName) {
            return {
              key: qualifyingCookieName,
              value: cookies[qualifyingCookieName]
            };
          });
          if (entries.length) {
            state.entries = entries;
          }
        }
        payload.mergeState(state);
      },
      /**
       * When receiving from a third-party endpoint, the endpoint won't be able to
       * write first-party cookies, therefore we write first-party cookies
       * as directed in the response body.
       */
      responseToCookies: function responseToCookies(response) {
        response.getPayloadsByType(STATE_STORE_HANDLE_TYPE).forEach(function (stateItem) {
          var options = {
            domain: apexDomain
          };
          var sameSite = stateItem.attrs && stateItem.attrs.SameSite && stateItem.attrs.SameSite.toLowerCase();
          if (stateItem.maxAge !== undefined) {
            // cookieJar expects "expires" as a date object
            options.expires = new Date(dateProvider().getTime() + stateItem.maxAge * 1000);
          }
          if (sameSite !== undefined) {
            options.sameSite = sameSite;
          }
          // When sameSite is set to none, the secure flag must be set.
          // Experience edge will not set the secure flag in these cases.
          if (sameSite === "none") {
            options.secure = true;
          }
          cookieJar.set(stateItem.key, stateItem.value, options);
        });
      }
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var MBOX_EDGE_CLUSTER = "mboxEdgeCluster";
  var AT_QA_MODE = "at_qa_mode";
  var MBOX = "mbox";

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectShouldTransferCookie = (function (_ref) {
    var orgId = _ref.orgId,
      targetMigrationEnabled = _ref.targetMigrationEnabled;
    return function (name) {
      // We have a contract with the server that we will pass
      // all cookies whose names are namespaced according to the
      // logic in isNamespacedCookieName as well as any legacy
      // cookie names (so that the server can handle migrating
      // identities on websites previously using Visitor.js)
      return isNamespacedCookieName(orgId, name) || name === AT_QA_MODE || targetMigrationEnabled && name === MBOX;
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var apiVersion = "v1";

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var TYPE_ERROR = "TypeError";
  var NETWORK_ERROR = "NetworkError";

  /**
   * Checks if the error is a network-related error
   * @param {Error} error The error to check
   * @returns {boolean} True if the error is network-related
   */
  var isNetworkError = function isNetworkError(error) {
    return error.name === TYPE_ERROR || error.name === NETWORK_ERROR || error.status === 0;
  };

  /*
  Copyright 2025 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Clamps a value between a minimum and maximum value.
   * @param {number} value - The value to clamp.
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @returns {number} The clamped value.
   */
  var clamp = (function (value, min, max) {
    return Math.max(min, Math.min(value, max));
  });

  var mergeLifecycleResponses = (function (returnValues) {
    // Merges all returned objects from all `onResponse` callbacks into
    // a single object that can later be returned to the customer.
    var lifecycleOnResponseReturnValues = returnValues.shift() || [];
    var consumerOnResponseReturnValues = returnValues.shift() || [];
    var lifecycleOnBeforeRequestReturnValues = returnValues;
    return assignConcatArrayValues.apply(void 0, [{}].concat(_toConsumableArray(lifecycleOnResponseReturnValues), _toConsumableArray(consumerOnResponseReturnValues), _toConsumableArray(lifecycleOnBeforeRequestReturnValues)));
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var handleRequestFailure = (function (onRequestFailureCallbackAggregator) {
    return function (error) {
      // Regardless of whether the network call failed, an unexpected status
      // code was returned, or the response body was malformed, we want to call
      // the onRequestFailure callbacks, but still throw the exception.
      var throwError = function throwError() {
        throw error;
      };
      return onRequestFailureCallbackAggregator.call({
        error: error
      }).then(throwError, throwError);
    };
  });

  var MAX_QUEUE_TIME_MILLIS = 300000; // 5 minutes

  var calculateQueueTimeMillis = function calculateQueueTimeMillis(payload) {
    if (typeof payload.getEvents !== "function") {
      return undefined;
    }
    var events = payload.getEvents();
    if (events.length === 0) {
      return undefined;
    }

    // In practice, there should only be one event in the payload, in the future if this changes we'll need to
    // evaluate what timestamp to use (earliest, average, latest), or move the queueTime to the event meta
    var earliestCreatedAt = Math.min.apply(Math, _toConsumableArray(events.map(function (event) {
      return event.getCreatedAt();
    })));
    return clamp(Date.now() - earliestCreatedAt, 0, MAX_QUEUE_TIME_MILLIS);
  };
  var isDemdexBlockedError = function isDemdexBlockedError(error, request) {
    return request.getUseIdThirdPartyDomain() && isNetworkError(error);
  };

  /**
   * @function
   *
   * @param {object} options
   * @param {{edgeDomain: string, edgeBasePath: string, datastreamId: string}} options.config
   * @param {object} options.lifecycle
   * @param {object} options.cookieTransfer
   * @param {function(object): Promise<Object>} options.sendNetworkRequest
   * @param {ResponseCreator} options.createResponse
   * @param {function(object): void} options.processWarningsAndErrors
   * @param {function(): string|undefined} options.getLocationHint
   * @param {function(): string} options.getAssuranceValidationTokenParams

   *
   * @returns {EdgeRequestExecutor} A function that sends edge network requests with lifecycle management
   */
  var injectSendEdgeNetworkRequest = (function (_ref) {
    var config = _ref.config,
      lifecycle = _ref.lifecycle,
      cookieTransfer = _ref.cookieTransfer,
      sendNetworkRequest = _ref.sendNetworkRequest,
      createResponse = _ref.createResponse,
      processWarningsAndErrors = _ref.processWarningsAndErrors,
      getLocationHint = _ref.getLocationHint,
      getAssuranceValidationTokenParams = _ref.getAssuranceValidationTokenParams;
    var edgeDomain = config.edgeDomain,
      edgeBasePath = config.edgeBasePath,
      datastreamId = config.datastreamId;
    var hasDemdexFailed = false;
    var buildEndpointUrl = function buildEndpointUrl(endpointDomain, request) {
      var locationHint = getLocationHint();
      var edgeBasePathWithLocationHint = locationHint ? edgeBasePath + "/" + locationHint + request.getEdgeSubPath() : "" + edgeBasePath + request.getEdgeSubPath();
      var configId = request.getDatastreamIdOverride() || datastreamId;
      if (configId !== datastreamId) {
        request.getPayload().mergeMeta({
          sdkConfig: {
            datastream: {
              original: datastreamId
            }
          }
        });
      }
      return "https://" + endpointDomain + "/" + edgeBasePathWithLocationHint + "/" + apiVersion + "/" + request.getAction() + "?configId=" + configId + "&requestId=" + request.getId() + getAssuranceValidationTokenParams();
    };

    /**
     * Sends a network request that is aware of payload interfaces,
     * lifecycle methods, configured edge domains, response structures, etc.
     */
    return function (_ref2) {
      var request = _ref2.request,
        _ref2$runOnResponseCa = _ref2.runOnResponseCallbacks,
        runOnResponseCallbacks = _ref2$runOnResponseCa === void 0 ? noop : _ref2$runOnResponseCa,
        _ref2$runOnRequestFai = _ref2.runOnRequestFailureCallbacks,
        runOnRequestFailureCallbacks = _ref2$runOnRequestFai === void 0 ? noop : _ref2$runOnRequestFai;
      var onResponseCallbackAggregator = createCallbackAggregator();
      onResponseCallbackAggregator.add(lifecycle.onResponse);
      onResponseCallbackAggregator.add(runOnResponseCallbacks);
      var onRequestFailureCallbackAggregator = createCallbackAggregator();
      onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
      onRequestFailureCallbackAggregator.add(runOnRequestFailureCallbacks);
      return lifecycle.onBeforeRequest({
        request: request,
        onResponse: onResponseCallbackAggregator.add,
        onRequestFailure: onRequestFailureCallbackAggregator.add
      }).then(function () {
        var endpointDomain = hasDemdexFailed || !request.getUseIdThirdPartyDomain() ? edgeDomain : ID_THIRD_PARTY;
        var url = buildEndpointUrl(endpointDomain, request);
        var payload = request.getPayload();
        var queueTimeMillis = calculateQueueTimeMillis(payload);
        if (queueTimeMillis !== undefined) {
          payload.mergeMeta({
            queueTimeMillis: queueTimeMillis
          });
        }
        cookieTransfer.cookiesToPayload(payload, endpointDomain);
        return sendNetworkRequest({
          requestId: request.getId(),
          url: url,
          payload: payload,
          useSendBeacon: request.getUseSendBeacon()
        });
      }).then(function (networkResponse) {
        processWarningsAndErrors(networkResponse);
        return networkResponse;
      })["catch"](function (error) {
        if (isDemdexBlockedError(error, request)) {
          hasDemdexFailed = true;
          request.setUseIdThirdPartyDomain(false);
          var url = buildEndpointUrl(edgeDomain, request);
          var payload = request.getPayload();
          cookieTransfer.cookiesToPayload(payload, edgeDomain);
          return sendNetworkRequest({
            requestId: request.getId(),
            url: url,
            payload: payload,
            useSendBeacon: request.getUseSendBeacon()
          });
        }
        return handleRequestFailure(onRequestFailureCallbackAggregator)(error);
      }).then(function (_ref3) {
        var parsedBody = _ref3.parsedBody,
          getHeader = _ref3.getHeader;
        // Note that networkResponse.parsedBody may be undefined if it was a
        // 204 No Content response. That's fine.
        var response = createResponse({
          content: parsedBody,
          getHeader: getHeader
        });
        cookieTransfer.responseToCookies(response);

        // Notice we're calling the onResponse lifecycle method even if there are errors
        // inside the response body. This is because the full request didn't actually fail--
        // only portions of it that are considered non-fatal (a specific, non-critical
        // Konductor plugin, for example).
        return onResponseCallbackAggregator.call({
          response: response
        }).then(mergeLifecycleResponses);
      });
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var NO_CONTENT = 204;
  var TOO_MANY_REQUESTS = 429;
  var BAD_GATEWAY = 502;
  var SERVICE_UNAVAILABLE = 503;
  var GATEWAY_TIMEOUT = 504;

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var MESSAGE_PREFIX = "The server responded with a";
  var injectProcessWarningsAndErrors = (function (_ref) {
    var logger = _ref.logger;
    return function (networkResponse) {
      var statusCode = networkResponse.statusCode,
        body = networkResponse.body,
        parsedBody = networkResponse.parsedBody;
      if (statusCode < 200 || statusCode >= 300 || !parsedBody && statusCode !== NO_CONTENT || parsedBody && !Array.isArray(parsedBody.handle)) {
        var bodyToLog = parsedBody ? JSON.stringify(parsedBody, null, 2) : body;
        var messageSuffix = bodyToLog ? "response body:\n" + bodyToLog : "no response body.";
        throw new Error(MESSAGE_PREFIX + " status code " + statusCode + " and " + messageSuffix);
      }
      if (parsedBody) {
        var _parsedBody$warnings = parsedBody.warnings,
          warnings = _parsedBody$warnings === void 0 ? [] : _parsedBody$warnings,
          _parsedBody$errors = parsedBody.errors,
          errors = _parsedBody$errors === void 0 ? [] : _parsedBody$errors;
        warnings.forEach(function (warning) {
          logger.warn(MESSAGE_PREFIX + " warning:", warning);
        });
        errors.forEach(function (error) {
          logger.error(MESSAGE_PREFIX + " non-fatal error:", error);
        });
      }
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectGetLocationHint = (function (_ref) {
    var orgId = _ref.orgId,
      cookieJar = _ref.cookieJar;
    var clusterCookieName = getNamespacedCookieName(orgId, CLUSTER);
    var fromClusterCookie = function fromClusterCookie() {
      return cookieJar.get(clusterCookieName);
    };
    var fromTarget = function fromTarget() {
      var mboxEdgeCluster = cookieJar.get(MBOX_EDGE_CLUSTER);
      if (mboxEdgeCluster) {
        return "t" + mboxEdgeCluster;
      }
      return undefined;
    };
    return function () {
      return fromClusterCookie() || fromTarget();
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var MAX_RETRIES = 3;
  var RETRYABLE_STATUS_CODES = [TOO_MANY_REQUESTS, SERVICE_UNAVAILABLE, BAD_GATEWAY, GATEWAY_TIMEOUT];

  // These rules are in accordance with
  // https://git.corp.adobe.com/pages/experience-edge/konductor/#/apis/errors?id=handling-4xx-and-5xx-responses
  var isRequestRetryable = (function (_ref) {
    var response = _ref.response,
      retriesAttempted = _ref.retriesAttempted;
    return retriesAttempted < MAX_RETRIES && RETRYABLE_STATUS_CODES.includes(response.statusCode);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  // The retry gets incrementally (but not exponentially) longer for each retry.
  var FIRST_DELAY_MILLIS = 1000;
  var INCREMENTAL_DELAY_MILLIS = 1000;

  // When the target delay is randomized, make it within the range of this percentage above or below the target delay.
  var MAX_RANDOM_VARIANCE_PERCENTAGE = 0.3;
  var calculateRetryDelay = function calculateRetryDelay(retriesAttempted) {
    var targetDelay = FIRST_DELAY_MILLIS + retriesAttempted * INCREMENTAL_DELAY_MILLIS;
    var maxVariance = targetDelay * MAX_RANDOM_VARIANCE_PERCENTAGE;
    var minDelay = targetDelay - maxVariance;
    var maxDelay = targetDelay + maxVariance;
    var randomizedDelayWithinRange = Math.round(minDelay + Math.random() * (maxDelay - minDelay));
    return randomizedDelayWithinRange;
  };
  var getDelayFromHeader = function getDelayFromHeader(response) {
    // According to the HTTP spec, if the header is defined, its value will be a string that
    // represents either:
    //  * An integer indicating the number of seconds to delay.
    //  * A date after which a retry may occur. The date would be in HTTP-date
    //    format (https://tools.ietf.org/html/rfc7231#section-7.1.1.1). When debugging, it can
    //    be helpful to know that this is the same format that a JavaScript date's
    //    toGMTString() returns.
    var headerValue = response.getHeader(RETRY_AFTER);
    var delayInMillis;
    if (headerValue) {
      var headerValueInt = parseInt(headerValue, 10);
      if (isInteger(headerValueInt)) {
        delayInMillis = headerValueInt * 1000;
      } else {
        delayInMillis = Math.max(0, new Date(headerValue).getTime() - new Date().getTime());
      }
    }
    return delayInMillis;
  };

  // These rules are in accordance with
  // https://git.corp.adobe.com/pages/experience-edge/konductor/#/apis/errors?id=handling-4xx-and-5xx-responses
  // For retry delays that don't come from a Retry-After response header, we try to stick with the following best
  // practices outlined in https://docs.microsoft.com/en-us/azure/architecture/best-practices/transient-faults:
  //  * Incremental retry
  //  * Random interval
  var getRequestRetryDelay = (function (_ref) {
    var response = _ref.response,
      retriesAttempted = _ref.retriesAttempted;
    // Technically, only 429 or 503 responses should have a Retry-After header, but we'll respect the
    // header if we find it on any response.
    var delayInMillis = getDelayFromHeader(response);

    // Note that the value of delay may be 0 at this point, which would be a valid delay we want to use
    // and not override, which is why we don't do:
    // if (!delay) { ... }
    if (delayInMillis === undefined) {
      delayInMillis = calculateRetryDelay(retriesAttempted);
    }
    return delayInMillis;
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var HTTP_STATUS_OK = 200;
  var injectApplyResponse = (function (_ref) {
    var cookieTransfer = _ref.cookieTransfer,
      lifecycle = _ref.lifecycle,
      createResponse = _ref.createResponse,
      processWarningsAndErrors = _ref.processWarningsAndErrors;
    return function (_ref2) {
      var request = _ref2.request,
        responseHeaders = _ref2.responseHeaders,
        responseBody = _ref2.responseBody,
        _ref2$runOnResponseCa = _ref2.runOnResponseCallbacks,
        runOnResponseCallbacks = _ref2$runOnResponseCa === void 0 ? noop : _ref2$runOnResponseCa,
        _ref2$runOnRequestFai = _ref2.runOnRequestFailureCallbacks,
        runOnRequestFailureCallbacks = _ref2$runOnRequestFai === void 0 ? noop : _ref2$runOnRequestFai;
      var onResponseCallbackAggregator = createCallbackAggregator();
      onResponseCallbackAggregator.add(lifecycle.onResponse);
      onResponseCallbackAggregator.add(runOnResponseCallbacks);
      var onRequestFailureCallbackAggregator = createCallbackAggregator();
      onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
      onRequestFailureCallbackAggregator.add(runOnRequestFailureCallbacks);
      var getHeader = function getHeader(key) {
        return responseHeaders[key];
      };
      return lifecycle.onBeforeRequest({
        request: request,
        onResponse: onResponseCallbackAggregator.add,
        onRequestFailure: onRequestFailureCallbackAggregator.add
      }).then(function () {
        return processWarningsAndErrors({
          statusCode: HTTP_STATUS_OK,
          getHeader: getHeader,
          body: JSON.stringify(responseBody),
          parsedBody: responseBody
        });
      })["catch"](handleRequestFailure(onRequestFailureCallbackAggregator)).then(function () {
        var response = createResponse({
          content: responseBody,
          getHeader: getHeader
        });

        // This will clobber any cookies set via HTTP from the server.  So care should be given to remove any state:store handles if that is not desirable
        cookieTransfer.responseToCookies(response);
        return onResponseCallbackAggregator.call({
          response: response
        }).then(mergeLifecycleResponses);
      });
    };
  });

  /*
  Copyright 2025 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /* eslint-disable dot-notation */

  /** @import { AlloyMonitor } from './types.js' */

  /**
   * This factory function creates a getter that combines both provided monitors
   * and any monitors found in the global window.__alloyMonitors array.
   *
   * @param {Array<AlloyMonitor>} [monitors] - Optional array of monitor objects to append to the current one
   * @returns {Function} A function that when called, returns all available monitors
   */
  var getMonitors = (function (monitors) {
    /** @type {Array<AlloyMonitor>} */
    var alloyMonitors = window["__alloyMonitors"] || [];
    if (monitors) {
      alloyMonitors = alloyMonitors.concat(monitors);
    }
    return alloyMonitors;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectWeb = (function (window) {
    return function (event) {
      event.mergeXdm({
        web: {
          webPageDetails: {
            URL: window.location.href || window.location
          },
          webReferrer: {
            URL: window.document.referrer
          }
        }
      });
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getScreenOrientationViaProperty = function getScreenOrientationViaProperty(window) {
    var orientation = window.screen.orientation;
    if (orientation == null || orientation.type == null) {
      return null;
    }
    var parts = orientation.type.split("-");
    if (parts.length === 0) {
      return null;
    }
    if (parts[0] !== "portrait" && parts[0] !== "landscape") {
      return null;
    }
    return parts[0];
  };
  var getScreenOrientationViaMediaQuery = function getScreenOrientationViaMediaQuery(window) {
    if (isFunction(window.matchMedia)) {
      if (window.matchMedia("(orientation: portrait)").matches) {
        return "portrait";
      }
      if (window.matchMedia("(orientation: landscape)").matches) {
        return "landscape";
      }
    }
    return null;
  };
  var injectDevice = (function (window) {
    return function (event) {
      var _window$screen = window.screen,
        width = _window$screen.width,
        height = _window$screen.height;
      var device = {};
      var screenHeight = toInteger(height);
      if (screenHeight >= 0) {
        device.screenHeight = screenHeight;
      }
      var screenWidth = toInteger(width);
      if (screenWidth >= 0) {
        device.screenWidth = screenWidth;
      }
      var orientation = getScreenOrientationViaProperty(window) || getScreenOrientationViaMediaQuery(window);
      if (orientation) {
        device.screenOrientation = orientation;
      }
      if (Object.keys(device).length > 0) {
        event.mergeXdm({
          device: device
        });
      }
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectEnvironment = (function (window) {
    return function (event) {
      var _window$document$docu = window.document.documentElement,
        _window$document$docu2 = _window$document$docu === void 0 ? {} : _window$document$docu,
        clientWidth = _window$document$docu2.clientWidth,
        clientHeight = _window$document$docu2.clientHeight;
      var environment = {
        type: "browser"
      };
      var viewportWidth = toInteger(clientWidth);
      if (viewportWidth >= 0) {
        environment.browserDetails = {
          viewportWidth: viewportWidth
        };
      }
      var viewportHeight = toInteger(clientHeight);
      if (viewportHeight >= 0) {
        environment.browserDetails = environment.browserDetails || {};
        environment.browserDetails.viewportHeight = viewportHeight;
      }
      event.mergeXdm({
        environment: environment
      });
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var injectPlaceContext = (function (dateProvider) {
    return function (event) {
      var date = dateProvider();
      var placeContext = {};
      var localTimezoneOffset = toInteger(date.getTimezoneOffset());
      if (localTimezoneOffset !== undefined) {
        placeContext.localTimezoneOffset = localTimezoneOffset;
      }
      // make sure the timezone offset only uses two digits
      if (localTimezoneOffset === undefined || Math.abs(localTimezoneOffset) < 6000) {
        placeContext.localTime = toISOStringLocal(date);
      }
      event.mergeXdm({
        placeContext: placeContext
      });
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectTimestamp = (function (dateProvider) {
    return function (event) {
      var timestamp = dateProvider().toISOString();
      event.mergeXdm({
        timestamp: timestamp
      });
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var libraryName = "https://ns.adobe.com/experience/alloy";

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  // The __VERSION__ keyword will be replace at alloy build time with the package.json version.
  // see babel-plugin-version

  var libraryVersion = "2.31.1";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var implementationDetails = (function (event) {
    event.mergeXdm({
      implementationDetails: {
        name: libraryName,
        version: libraryVersion,
        environment: "browser"
      }
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createComponent$2 = (function (config, logger, optionalContexts, requiredContexts) {
    var configuredContexts = config.context;
    var contexts = configuredContexts.flatMap(function (context, i) {
      if (optionalContexts[context]) {
        return [optionalContexts[context]];
      }
      logger.warn("Invalid context[" + i + "]: '" + context + "' is not available.");
      return [];
    }).concat(requiredContexts);
    return {
      namespace: "Context",
      lifecycle: {
        onBeforeEvent: function onBeforeEvent(_ref) {
          var event = _ref.event;
          return Promise.all(contexts.map(function (context) {
            return Promise.resolve(context(event, logger));
          }));
        }
      }
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var highEntropyUserAgentHints$1 = [["architecture", "string"], ["bitness", "string"], ["model", "string"], ["platformVersion", "string"], ["wow64", "boolean"]];

  var browserSupportsUserAgentClientHints = function browserSupportsUserAgentClientHints(navigator) {
    return "userAgentData" in navigator;
  };
  var injectHighEntropyUserAgentHints = (function (navigator) {
    if (!browserSupportsUserAgentClientHints(navigator)) {
      return noop;
    }
    return function (event, logger) {
      try {
        // eslint-disable-next-line compat/compat -- userAgentData support is checked before calling
        return navigator.userAgentData.getHighEntropyValues(highEntropyUserAgentHints$1.map(function (hint) {
          return hint[0];
        })).then(function (hints) {
          var userAgentClientHints = {};
          highEntropyUserAgentHints$1.forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              hintName = _ref2[0],
              hintType = _ref2[1];
            if (Object.prototype.hasOwnProperty.call(hints, hintName) && /* eslint-disable-next-line valid-typeof */
            _typeof(hints[hintName]) === hintType) {
              userAgentClientHints[hintName] = hints[hintName];
            }
          });
          event.mergeXdm({
            environment: {
              browserDetails: {
                userAgentClientHints: userAgentClientHints
              }
            }
          });
        });
      } catch (error) {
        logger.warn("Unable to collect user-agent client hints. " + error.message);
        return noop;
      }
    };
  });

  /*
  Copyright 2025 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  // Because these events are originated by the SDK rather than user actions, don't change the referrer
  var IGNORED_EVENT_TYPES = new Set(["decisioning.propositionFetch", "decisioning.propositionDisplay", "decisioning.propositionInteract"]);
  var injectOneTimeAnalyticsReferrer = (function (window) {
    var lastReferrerSent = null;
    return function (event) {
      var _content$xdm, _content$data;
      var content = event.getContent();
      var eventType = (_content$xdm = content.xdm) === null || _content$xdm === void 0 ? void 0 : _content$xdm.eventType;
      if (IGNORED_EVENT_TYPES.has(eventType)) {
        return;
      }

      // Allow customers to explicitly set the referrer (for SPA view changes)
      // Otherwise, use document.referrer
      // eslint-disable-next-line no-underscore-dangle
      var explicitReferrer = (_content$data = content.data) === null || _content$data === void 0 || (_content$data = _content$data.__adobe) === null || _content$data === void 0 || (_content$data = _content$data.analytics) === null || _content$data === void 0 ? void 0 : _content$data.referrer;
      var currentReferrer = explicitReferrer !== undefined ? explicitReferrer : window.document.referrer;
      if (currentReferrer === lastReferrerSent) {
        event.mergeData({
          __adobe: {
            analytics: {
              referrer: ""
            }
          }
        });
        return;
      }
      event.mergeData({
        __adobe: {
          analytics: {
            referrer: currentReferrer
          }
        }
      });
      lastReferrerSent = currentReferrer;
    };
  });

  var web = injectWeb(window);
  var device = injectDevice(window);
  var environment = injectEnvironment(window);
  var placeContext = injectPlaceContext(function () {
    return new Date();
  });
  var timestamp = injectTimestamp(function () {
    return new Date();
  });
  var highEntropyUserAgentHints = injectHighEntropyUserAgentHints(navigator);
  var oneTimeAnalyticsReferrer = injectOneTimeAnalyticsReferrer(window);
  var defaultEnabledContexts = {
    web: web,
    device: device,
    environment: environment,
    placeContext: placeContext
  };
  var defaultDisabledContexts = {
    highEntropyUserAgentHints: highEntropyUserAgentHints,
    oneTimeAnalyticsReferrer: oneTimeAnalyticsReferrer
  };
  var optionalContexts = _objectSpread2(_objectSpread2({}, defaultEnabledContexts), defaultDisabledContexts);
  var requiredContexts = [timestamp, implementationDetails];
  var createContext = function createContext(_ref) {
    var config = _ref.config,
      logger = _ref.logger;
    return createComponent$2(config, logger, optionalContexts, requiredContexts);
  };
  createContext.namespace = "Context";
  createContext.configValidators = boundObjectOf({
    context: boundArrayOf(boundString())["default"](Object.keys(defaultEnabledContexts))
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Verifies user provided event options.
   * @param {*} options The user event options to validate
   * @returns {*} Validated options
   */
  var validateUserEventOptions = (function (_ref) {
    var options = _ref.options;
    var eventOptionsValidator = boundObjectOf({
      type: boundString(),
      xdm: boundObjectOf({
        eventType: boundString(),
        identityMap: validateIdentityMap
      }),
      data: boundObjectOf({}),
      documentUnloading: boundBoolean(),
      renderDecisions: boundBoolean(),
      decisionScopes: boundArrayOf(boundString()).uniqueItems(),
      personalization: boundObjectOf({
        decisionScopes: boundArrayOf(boundString()).uniqueItems(),
        surfaces: boundArrayOf(boundString()).uniqueItems(),
        sendDisplayEvent: boundBoolean()["default"](true),
        includeRenderedPropositions: boundBoolean()["default"](false),
        defaultPersonalizationEnabled: boundBoolean(),
        decisionContext: boundObjectOf({})
      })["default"]({
        sendDisplayEvent: true
      }),
      datasetId: boundString(),
      mergeId: boundString(),
      edgeConfigOverrides: validateConfigOverride,
      advertising: boundObjectOf({
        handleAdvertisingData: boundEnumOf(DISABLED, WAIT, AUTO)["default"](DISABLED)
      })
    }).required().noUnknownFields();
    return eventOptionsValidator(options);
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var validateApplyResponse = (function (_ref) {
    var options = _ref.options;
    var validator = boundObjectOf({
      renderDecisions: boundBoolean(),
      responseHeaders: boundMapOfValues(boundString().required()),
      responseBody: boundObjectOf({
        handle: boundArrayOf(boundObjectOf({
          type: boundString().required(),
          payload: boundAnything().required()
        })).required()
      }).required(),
      personalization: boundObjectOf({
        sendDisplayEvent: boundBoolean()["default"](true),
        decisionContext: boundObjectOf({})
      })["default"]({
        sendDisplayEvent: true
      })
    }).noUnknownFields();
    return validator(options);
  });

  var _excluded$4 = ["xdm", "data", "documentUnloading", "type", "mergeId", "datasetId", "edgeConfigOverrides"];
  var createDataCollector = function createDataCollector(_ref) {
    var eventManager = _ref.eventManager,
      logger = _ref.logger;
    return {
      commands: {
        sendEvent: {
          documentationUri: "https://adobe.ly/3GQ3Q7t",
          optionsValidator: function optionsValidator(options) {
            return validateUserEventOptions({
              options: options
            });
          },
          run: function run(options) {
            var xdm = options.xdm,
              data = options.data,
              documentUnloading = options.documentUnloading,
              type = options.type,
              mergeId = options.mergeId,
              datasetId = options.datasetId,
              edgeConfigOverrides = options.edgeConfigOverrides,
              eventManagerOptions = _objectWithoutProperties(options, _excluded$4);
            var event = eventManager.createEvent();
            if (documentUnloading) {
              event.documentMayUnload();
            }
            event.setUserXdm(xdm);
            event.setUserData(data);
            if (type) {
              event.mergeXdm({
                eventType: type
              });
            }
            if (mergeId) {
              event.mergeXdm({
                eventMergeId: mergeId
              });
            }
            if (edgeConfigOverrides) {
              eventManagerOptions.edgeConfigOverrides = edgeConfigOverrides;
            }
            if (datasetId) {
              logger.warn("The 'datasetId' option has been deprecated. Please use 'edgeConfigOverrides.com_adobe_experience_platform.datasets.event.datasetId' instead.");
              eventManagerOptions.edgeConfigOverrides = edgeConfigOverrides || {};
              deepAssign(eventManagerOptions.edgeConfigOverrides, {
                com_adobe_experience_platform: {
                  datasets: {
                    event: {
                      datasetId: datasetId
                    }
                  }
                }
              });
            }
            return eventManager.sendEvent(event, eventManagerOptions);
          }
        },
        applyResponse: {
          documentationUri: "",
          optionsValidator: function optionsValidator(options) {
            return validateApplyResponse({
              options: options
            });
          },
          run: function run(options) {
            var _options$renderDecisi = options.renderDecisions,
              renderDecisions = _options$renderDecisi === void 0 ? false : _options$renderDecisi,
              _options$decisionCont = options.decisionContext,
              decisionContext = _options$decisionCont === void 0 ? {} : _options$decisionCont,
              _options$responseHead = options.responseHeaders,
              responseHeaders = _options$responseHead === void 0 ? {} : _options$responseHead,
              _options$responseBody = options.responseBody,
              responseBody = _options$responseBody === void 0 ? {
                handle: []
              } : _options$responseBody,
              personalization = options.personalization;
            var event = eventManager.createEvent();
            return eventManager.applyResponse(event, {
              renderDecisions: renderDecisions,
              decisionContext: decisionContext,
              responseHeaders: responseHeaders,
              responseBody: responseBody,
              personalization: personalization
            });
          }
        }
      }
    };
  };
  createDataCollector.namespace = "DataCollector";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createResultLogMessage$1 = function createResultLogMessage(idSync, success) {
    return "ID sync " + (success ? "succeeded" : "failed") + ": " + idSync.spec.url;
  };
  var injectProcessIdSyncs = (function (_ref) {
    var fireReferrerHideableImage = _ref.fireReferrerHideableImage,
      logger = _ref.logger;
    return function (idSyncs) {
      var urlIdSyncs = idSyncs.filter(function (idSync) {
        return idSync.type === "url";
      });
      if (!urlIdSyncs.length) {
        return Promise.resolve();
      }
      return Promise.all(urlIdSyncs.map(function (idSync) {
        return fireReferrerHideableImage(idSync.spec).then(function () {
          logger.info(createResultLogMessage$1(idSync, true));
        })["catch"](function () {
          // We intentionally do not throw an error if id syncs fail. We
          // consider it a non-critical failure and therefore do not want it to
          // reject the promise handed back to the customer.
          logger.error(createResultLogMessage$1(idSync, false));
        });
      })).then(noop);
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var configValidators = boundObjectOf({
    thirdPartyCookiesEnabled: boundBoolean()["default"](true),
    idMigrationEnabled: boundBoolean()["default"](true)
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Verifies user provided event options.
   * @param {*} options The user event options to validate
   * @returns {*} Validated options
   */
  var appendIdentityToUrlOptionsValidator = boundObjectOf({
    url: boundString().required().nonEmpty(),
    edgeConfigOverrides: validateConfigOverride
  }).required().noUnknownFields();

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var ecidNamespace = "ECID";

  var createComponent$1 = (function (_ref) {
    var addEcidQueryToPayload = _ref.addEcidQueryToPayload,
      addQueryStringIdentityToPayload = _ref.addQueryStringIdentityToPayload,
      ensureSingleIdentity = _ref.ensureSingleIdentity,
      setLegacyEcid = _ref.setLegacyEcid,
      handleResponseForIdSyncs = _ref.handleResponseForIdSyncs,
      getNamespacesFromResponse = _ref.getNamespacesFromResponse,
      getIdentity = _ref.getIdentity,
      consent = _ref.consent,
      appendIdentityToUrl = _ref.appendIdentityToUrl,
      logger = _ref.logger,
      identity = _ref.identity,
      getIdentityOptionsValidator = _ref.getIdentityOptionsValidator;
    var namespaces;
    var edge = {};
    return {
      lifecycle: {
        onBeforeRequest: function onBeforeRequest(_ref2) {
          var request = _ref2.request,
            onResponse = _ref2.onResponse,
            onRequestFailure = _ref2.onRequestFailure;
          // Querying the ECID on every request to be able to set the legacy cookie, and make it
          // available for the `getIdentity` command.
          addEcidQueryToPayload(request.getPayload());
          addQueryStringIdentityToPayload(request.getPayload());
          return ensureSingleIdentity({
            request: request,
            onResponse: onResponse,
            onRequestFailure: onRequestFailure
          });
        },
        onResponse: function onResponse(_ref3) {
          var response = _ref3.response;
          var newNamespaces = getNamespacesFromResponse(response);
          if ((!namespaces || !namespaces[ecidNamespace]) && newNamespaces && newNamespaces[ecidNamespace]) {
            // Only data collection calls will have an ECID in the response.
            // https://jira.corp.adobe.com/browse/EXEG-1234
            setLegacyEcid(newNamespaces[ecidNamespace]);
          }
          if (newNamespaces && Object.keys(newNamespaces).length > 0) {
            namespaces = _objectSpread2(_objectSpread2({}, namespaces), newNamespaces);
          }
          // For sendBeacon requests, getEdge() will return {}, so we are using assign here
          // so that sendBeacon requests don't override the edge info from before.
          edge = _objectSpread2(_objectSpread2({}, edge), response.getEdge());
          identity.setIdentityAcquired();
          return handleResponseForIdSyncs(response);
        }
      },
      commands: {
        getIdentity: {
          optionsValidator: getIdentityOptionsValidator,
          run: function run(options) {
            var requestedNamespaces = options.namespaces;
            return consent.awaitConsent().then(function () {
              if (namespaces) {
                return undefined;
              }
              var ecidFromCookie = identity.getEcidFromCookie();
              if (ecidFromCookie && requestedNamespaces.includes(ecidNamespace)) {
                if (!namespaces) {
                  namespaces = {};
                }
                namespaces[ecidNamespace] = ecidFromCookie;
                if (requestedNamespaces.length === 1) {
                  // If only ECID is requested, we don't need to make an acquire request
                  // and can return immediately
                  return undefined;
                }
              }
              return getIdentity(options);
            }).then(function () {
              return {
                identity: requestedNamespaces.reduce(function (acc, namespace) {
                  acc[namespace] = namespaces[namespace] || null;
                  return acc;
                }, {}),
                edge: edge
              };
            });
          }
        },
        appendIdentityToUrl: {
          optionsValidator: appendIdentityToUrlOptionsValidator,
          run: function run(options) {
            return consent.withConsent().then(function () {
              if (namespaces) {
                return undefined;
              }
              var ecidFromCookie = identity.getEcidFromCookie();
              if (ecidFromCookie) {
                if (!namespaces) {
                  namespaces = {};
                }
                namespaces[ecidNamespace] = ecidFromCookie;
                return undefined;
              }
              return getIdentity(options);
            }).then(function () {
              return {
                url: appendIdentityToUrl(namespaces[ecidNamespace], options.url)
              };
            })["catch"](function (error) {
              logger.warn("Unable to append identity to url. " + error.message);
              return options;
            });
          }
        }
      }
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Handles migration of ECID to and from Visitor.js.
   */
  var createLegacyIdentity = (function (_ref) {
    var config = _ref.config,
      getEcidFromVisitor = _ref.getEcidFromVisitor,
      apexDomain = _ref.apexDomain,
      isPageSsl = _ref.isPageSsl,
      cookieJar = _ref.cookieJar;
    var idMigrationEnabled = config.idMigrationEnabled,
      orgId = config.orgId;
    var amcvCookieName = "AMCV_" + orgId;
    var getEcidFromLegacyCookies = function getEcidFromLegacyCookies() {
      var ecid = null;
      var secidCookieName = "s_ecid";
      var legacyEcidCookieValue = cookieJar.get(secidCookieName) || cookieJar.get(amcvCookieName);
      if (legacyEcidCookieValue) {
        var reg = /(^|\|)MCMID\|(\d+)($|\|)/;
        var matches = legacyEcidCookieValue.match(reg);
        if (matches) {
          // Destructuring arrays breaks in IE
          ecid = matches[2];
        }
      }
      return ecid;
    };
    return {
      getEcid: function getEcid() {
        if (idMigrationEnabled) {
          var ecid = getEcidFromLegacyCookies();
          if (ecid) {
            return Promise.resolve(ecid);
          }
          return getEcidFromVisitor();
        }
        return Promise.resolve();
      },
      setEcid: function setEcid(ecid) {
        if (idMigrationEnabled && getEcidFromLegacyCookies() !== ecid) {
          var extraOptions = isPageSsl ? {
            sameSite: "none",
            secure: true
          } : {};
          cookieJar.set(amcvCookieName, "MCMID|" + ecid, _objectSpread2({
            domain: apexDomain,
            // Without `expires` this will be a session cookie.
            expires: 390
          }, extraOptions));
        }
      }
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var awaitVisitorOptIn = (function (_ref) {
    var logger = _ref.logger;
    return new Promise(function (resolve, reject) {
      if (isObject(window.adobe) && isObject(window.adobe.optIn)) {
        var optInOld = window.adobe.optIn;
        logger.info("Delaying request while waiting for legacy opt-in to let Visitor retrieve ECID from server.");
        optInOld.fetchPermissions(function () {
          if (optInOld.isApproved([optInOld.Categories.ECID])) {
            logger.info("Received legacy opt-in approval to let Visitor retrieve ECID from server.");
            resolve();
          } else {
            reject(new Error("Legacy opt-in was declined."));
          }
        }, true);
      } else {
        resolve();
      }
    });
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getVisitor = (function (window) {
    var Visitor = window.Visitor;
    return isFunction(Visitor) && isFunction(Visitor.getInstance) && Visitor;
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectGetEcidFromVisitor = (function (_ref) {
    var logger = _ref.logger,
      orgId = _ref.orgId,
      awaitVisitorOptIn = _ref.awaitVisitorOptIn;
    return function () {
      var Visitor = getVisitor(window);
      if (Visitor) {
        // Need to explicitly wait for optIn because visitor will call callback
        // with invalid values prior to optIn being approved
        return awaitVisitorOptIn({
          logger: logger
        }).then(function () {
          logger.info("Delaying request while using Visitor to retrieve ECID from server.");
          return new Promise(function (resolve) {
            var visitor = Visitor.getInstance(orgId, {});
            visitor.getMarketingCloudVisitorID(function (ecid) {
              logger.info("Resuming previously delayed request that was waiting for ECID from Visitor.");
              resolve(ecid);
            }, true);
          });
        })["catch"](function (error) {
          // If consent was denied, get the ECID from experience edge. OptIn and AEP Web SDK
          // consent should operate independently, but during id migration AEP Web SDK needs
          // to wait for optIn object consent resolution so that only one ECID is generated.
          if (error) {
            logger.info(error.message + ", retrieving ECID from experience edge");
          } else {
            logger.info("An error occurred while obtaining the ECID from Visitor.");
          }
        });
      }
      return Promise.resolve();
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectHandleResponseForIdSyncs = (function (_ref) {
    var processIdSyncs = _ref.processIdSyncs;
    return function (response) {
      return processIdSyncs(response.getPayloadsByType("identity:exchange"));
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  // TO-DOCUMENT: We queue subsequent requests until we have an identity cookie.
  var injectEnsureSingleIdentity = (function (_ref) {
    var doesIdentityCookieExist = _ref.doesIdentityCookieExist,
      setDomainForInitialIdentityPayload = _ref.setDomainForInitialIdentityPayload,
      addLegacyEcidToPayload = _ref.addLegacyEcidToPayload,
      awaitIdentityCookie = _ref.awaitIdentityCookie,
      logger = _ref.logger;
    var obtainedIdentityPromise;
    var allowRequestToGoWithoutIdentity = function allowRequestToGoWithoutIdentity(request) {
      setDomainForInitialIdentityPayload(request);
      return addLegacyEcidToPayload(request.getPayload());
    };

    /**
     * Ensures that if no identity cookie exists, we only let one request at a
     * time without an identity until its response returns. In the meantime,
     * we queue all other requests, otherwise the requests could result in
     * multiple ECIDs being minted for the user. Once we get an identity
     * cookie, we can let the queued requests be sent all at once, since they
     * will have the newly minted ECID.
     *
     * Konductor should make every effort to return an identity, but in
     * certain scenarios it may not. For example, in cases where the
     * request does not match what Konductor is expecting (ie 400s).
     * In cases where Konductor does not set an identity, there should be
     * no events recorded so we don't need to worry about multiple ECIDs
     * being minted for each user.
     *
     * The reason we allow for multiple sequential requests to be sent without
     * an identity is to prevent a single malformed request causing all other
     * requests to never send.
     */
    return function (_ref2) {
      var request = _ref2.request,
        onResponse = _ref2.onResponse,
        onRequestFailure = _ref2.onRequestFailure;
      if (doesIdentityCookieExist()) {
        request.setIsIdentityEstablished();
        return Promise.resolve();
      }
      if (obtainedIdentityPromise) {
        // We don't have an identity cookie, but at least one request has
        // been sent to get it. Konductor may set the identity cookie in the
        // response. We will hold up this request until the previous request
        // returns and awaitIdentityCookie confirms the identity was set.
        logger.info("Delaying request while retrieving ECID from server.");
        var previousObtainedIdentityPromise = obtainedIdentityPromise;

        // This promise resolves when we have an identity cookie. Additional
        // requests are chained together so that only one is sent at a time
        // until we have the identity cookie.
        obtainedIdentityPromise = previousObtainedIdentityPromise["catch"](function () {
          return awaitIdentityCookie({
            onResponse: onResponse,
            onRequestFailure: onRequestFailure
          });
        });
        // This prevents an un-caught promise in the console when the identity isn't set.
        obtainedIdentityPromise["catch"](function () {});

        // When this returned promise resolves, the request will go out.
        return previousObtainedIdentityPromise.then(function () {
          logger.info("Resuming previously delayed request.");
          request.setIsIdentityEstablished();
        })
        // If Konductor did not set the identity cookie on the previous
        // request, then awaitIdentityCookie will reject its promise.
        // Catch the rejection here and allow this request to go out.
        ["catch"](function () {
          return allowRequestToGoWithoutIdentity(request);
        });
      }

      // For Alloy+Konductor communication to be as robust as possible and
      // to ensure we don't mint new ECIDs for requests that would otherwise
      // be sent in parallel, we'll let this request go out to fetch the
      // cookie
      obtainedIdentityPromise = awaitIdentityCookie({
        onResponse: onResponse,
        onRequestFailure: onRequestFailure
      });
      // This prevents an un-caught promise in the console when the identity isn't set.
      obtainedIdentityPromise["catch"](function () {});
      return allowRequestToGoWithoutIdentity(request);
    };
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var coreNamespace = "CORE";

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectAddEcidQueryToPayload = (function (_ref) {
    var thirdPartyCookiesEnabled = _ref.thirdPartyCookiesEnabled,
      areThirdPartyCookiesSupportedByDefault = _ref.areThirdPartyCookiesSupportedByDefault;
    var query = {
      identity: {
        fetch: [ecidNamespace]
      }
    };
    if (thirdPartyCookiesEnabled && areThirdPartyCookiesSupportedByDefault()) {
      query.identity.fetch.push(coreNamespace);
    }
    return function (payload) {
      payload.mergeQuery(query);
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectSetDomainForInitialIdentityPayload = (function (_ref) {
    var thirdPartyCookiesEnabled = _ref.thirdPartyCookiesEnabled,
      areThirdPartyCookiesSupportedByDefault = _ref.areThirdPartyCookiesSupportedByDefault;
    return function (request) {
      if (thirdPartyCookiesEnabled && areThirdPartyCookiesSupportedByDefault()) {
        // If third-party cookies are enabled by the customer and
        // supported by the browser, we will send the request to a
        // a third-party identification domain that allows for more accurate
        // identification of the user through use of a third-party cookie.
        // If we have an identity to migrate, we still want to hit the
        // third-party identification domain because the third-party identification
        // domain will use our ECID to set the third-party cookie if the third-party
        // cookie isn't already set, which provides for better cross-domain
        // identification for future requests.
        request.setUseIdThirdPartyDomain();
      }
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectAddLegacyEcidToPayload = (function (_ref) {
    var getLegacyEcid = _ref.getLegacyEcid,
      addEcidToPayload = _ref.addEcidToPayload;
    return function (payload) {
      if (payload.hasIdentity(ecidNamespace)) {
        // don't get the legacy identity if we already have the query string identity or if
        // the user specified it in the identity map
        return Promise.resolve();
      }
      return getLegacyEcid().then(function (ecidToMigrate) {
        if (ecidToMigrate) {
          addEcidToPayload(payload, ecidToMigrate);
        }
      });
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var queryStringIdentityParam = "adobe_mc";

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var decodeUriComponentSafely = (function (v) {
    try {
      return decodeURIComponent(v);
    } catch (_unused) {
      return "";
    }
  });

  var LINK_TTL_SECONDS = 300; // 5 minute link time to live

  var injectAddQueryStringIdentityToPayload = (function (_ref) {
    var locationSearch = _ref.locationSearch,
      dateProvider = _ref.dateProvider,
      orgId = _ref.orgId,
      logger = _ref.logger;
    return function (payload) {
      if (payload.hasIdentity(ecidNamespace)) {
        // don't overwrite a user provided ecid identity
        return;
      }
      var parsedQueryString = queryString.parse(locationSearch);
      var queryStringValue = parsedQueryString[queryStringIdentityParam];
      if (queryStringValue === undefined) {
        return;
      }
      if (Array.isArray(queryStringValue)) {
        logger.warn("Found multiple adobe_mc query string paramters, only using the last one.");
        queryStringValue = queryStringValue[queryStringValue.length - 1];
      }
      var properties = queryStringValue.split("|").reduce(function (memo, keyValue) {
        var _keyValue$split = keyValue.split("="),
          _keyValue$split2 = _slicedToArray(_keyValue$split, 2),
          key = _keyValue$split2[0],
          value = _keyValue$split2[1];
        memo[key] = decodeUriComponentSafely(value);
        memo[key] = memo[key].replace(/[^a-zA-Z0-9@.]/g, ""); // sanitization
        return memo;
      }, {});
      // We are using MCMID and MCORGID to be compatible with Visitor.
      var ts = parseInt(properties.TS, 10);
      var mcmid = properties.MCMID;
      var mcorgid = decodeUriComponentSafely(properties.MCORGID);
      if (
      // When TS is not specified or not a number, the following inequality returns false.
      // All inequalities with NaN variables are false.
      dateProvider().getTime() / 1000 <= ts + LINK_TTL_SECONDS && mcorgid === orgId && mcmid) {
        logger.info("Found valid ECID identity " + mcmid + " from the adobe_mc query string parameter.");
        payload.addIdentity(ecidNamespace, {
          id: mcmid
        });
      } else {
        logger.info("Detected invalid or expired adobe_mc query string parameter.");
      }
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var addEcidToPayload = (function (payload, ecid) {
    payload.addIdentity(ecidNamespace, {
      id: ecid
    });
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectAwaitIdentityCookie = (function (_ref) {
    var doesIdentityCookieExist = _ref.doesIdentityCookieExist,
      orgId = _ref.orgId,
      logger = _ref.logger;
    /**
     * Returns a promise that will be resolved once an identity cookie exists.
     * If an identity cookie doesn't already exist, it should always exist after
     * the first response.
     */
    return function (_ref2) {
      var onResponse = _ref2.onResponse,
        onRequestFailure = _ref2.onRequestFailure;
      return new Promise(function (resolve, reject) {
        onResponse(function () {
          if (doesIdentityCookieExist()) {
            resolve();
          } else {
            // This logic assumes that the code setting the cookie is working as expected and that
            // the cookie was missing from the response.
            logger.warn("Identity cookie not found. This could be caused by any of the following issues:\n" + ("\t* The org ID " + orgId + " configured in Alloy doesn't match the org ID specified in the edge configuration.\n") + "\t* Experience edge was not able to set the identity cookie due to domain or cookie restrictions.\n" + "\t* The request was canceled by the browser and not fully processed.");

            // Rejecting the promise will tell queued events to still go out
            // one at a time.
            reject(new Error("Identity cookie not found."));
          }
        });
        onRequestFailure(function () {
          if (doesIdentityCookieExist()) {
            resolve();
          } else {
            // The error from the request failure will be logged separately. Rejecting this here
            // will tell ensureSingleIdentity to send the next request without identity
            reject(new Error("Identity cookie not found."));
          }
        });
      });
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var getNamespacesFromResponse = (function (response) {
    var identityResultPayloads = response.getPayloadsByType("identity:result");
    return identityResultPayloads.reduce(function (acc, payload) {
      if (payload.namespace && payload.namespace.code) {
        acc[payload.namespace.code] = payload.id;
      }
      return acc;
    }, {});
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createGetIdentity = (function (_ref) {
    var sendEdgeNetworkRequest = _ref.sendEdgeNetworkRequest,
      createIdentityRequestPayload = _ref.createIdentityRequestPayload,
      createIdentityRequest = _ref.createIdentityRequest,
      globalConfigOverrides = _ref.globalConfigOverrides;
    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        namespaces = _ref2.namespaces,
        localConfigOverrides = _ref2.edgeConfigOverrides;
      var requestParams = createRequestParams({
        payload: createIdentityRequestPayload(namespaces),
        globalConfigOverrides: globalConfigOverrides,
        localConfigOverrides: localConfigOverrides
      });
      var request = createIdentityRequest(requestParams);
      return sendEdgeNetworkRequest({
        request: request
      });
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createIdentityRequest = (function (_ref) {
    var payload = _ref.payload,
      datastreamIdOverride = _ref.datastreamIdOverride;
    return createRequest({
      payload: payload,
      datastreamIdOverride: datastreamIdOverride,
      getAction: function getAction() {
        return "identity/acquire";
      },
      getUseSendBeacon: function getUseSendBeacon() {
        return false;
      }
    });
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createIdentityRequestPayload = (function (namespaces) {
    var content = {
      query: {
        identity: {
          fetch: namespaces
        }
      }
    };
    return createRequestPayload({
      content: content,
      addIdentity: createAddIdentity(content),
      hasIdentity: createHasIdentity(content)
    });
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var URL_REGEX = /^([^?#]*)(\??[^#]*)(#?.*)$/;
  var getSeparator = function getSeparator(queryString) {
    if (queryString === "") {
      return "?";
    }
    if (queryString === "?") {
      return "";
    }
    return "&";
  };
  var injectAppendIdentityToUrl = (function (_ref) {
    var dateProvider = _ref.dateProvider,
      orgId = _ref.orgId;
    return function (ecid, url) {
      var ts = Math.round(dateProvider().getTime() / 1000);
      var adobemc = encodeURIComponent("TS=" + ts + "|MCMID=" + ecid + "|MCORGID=" + encodeURIComponent(orgId));
      var _url$match = url.match(URL_REGEX),
        _url$match2 = _slicedToArray(_url$match, 4),
        location = _url$match2[1],
        queryString = _url$match2[2],
        fragment = _url$match2[3];
      var separator = getSeparator(queryString);
      return "" + location + queryString + separator + "adobe_mc=" + adobemc + fragment;
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Verifies user provided event options.
   * @param {*} options The user event options to validate
   * @returns {*} Validated options
   */

  var validator = boundObjectOf({
    namespaces: boundArrayOf(boundEnumOf(ecidNamespace, coreNamespace)).nonEmpty().uniqueItems()["default"]([ecidNamespace]),
    edgeConfigOverrides: validateConfigOverride
  }).noUnknownFields()["default"]({
    namespaces: [ecidNamespace]
  });
  var createGetIdentityOptionsValidator = (function (_ref) {
    var thirdPartyCookiesEnabled = _ref.thirdPartyCookiesEnabled;
    return function (options) {
      var validatedOptions = validator(options);
      if (!thirdPartyCookiesEnabled && validatedOptions.namespaces.includes(coreNamespace)) {
        throw new Error("namespaces: The " + coreNamespace + " namespace cannot be requested when third-party cookies are disabled.");
      }
      return validatedOptions;
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createIdentity = function createIdentity(_ref) {
    var config = _ref.config,
      logger = _ref.logger,
      consent = _ref.consent,
      fireReferrerHideableImage = _ref.fireReferrerHideableImage,
      sendEdgeNetworkRequest = _ref.sendEdgeNetworkRequest,
      apexDomain = _ref.apexDomain,
      getBrowser = _ref.getBrowser,
      identity = _ref.identity;
    var orgId = config.orgId,
      thirdPartyCookiesEnabled = config.thirdPartyCookiesEnabled,
      globalConfigOverrides = config.edgeConfigOverrides;
    var getEcidFromVisitor = injectGetEcidFromVisitor({
      logger: logger,
      orgId: orgId,
      awaitVisitorOptIn: awaitVisitorOptIn
    });
    var loggingCookieJar = createLoggingCookieJar({
      logger: logger,
      cookieJar: cookieJar
    });
    var legacyIdentity = createLegacyIdentity({
      config: config,
      getEcidFromVisitor: getEcidFromVisitor,
      apexDomain: apexDomain,
      cookieJar: loggingCookieJar,
      isPageSsl: window.location.protocol === "https:"
    });
    var doesIdentityCookieExist = injectDoesIdentityCookieExist({
      orgId: orgId
    });
    var getIdentity = createGetIdentity({
      sendEdgeNetworkRequest: sendEdgeNetworkRequest,
      createIdentityRequestPayload: createIdentityRequestPayload,
      createIdentityRequest: createIdentityRequest,
      globalConfigOverrides: globalConfigOverrides
    });
    var areThirdPartyCookiesSupportedByDefault = injectAreThirdPartyCookiesSupportedByDefault({
      getBrowser: getBrowser
    });
    var setDomainForInitialIdentityPayload = injectSetDomainForInitialIdentityPayload({
      thirdPartyCookiesEnabled: thirdPartyCookiesEnabled,
      areThirdPartyCookiesSupportedByDefault: areThirdPartyCookiesSupportedByDefault
    });
    var addLegacyEcidToPayload = injectAddLegacyEcidToPayload({
      getLegacyEcid: legacyIdentity.getEcid,
      addEcidToPayload: addEcidToPayload
    });
    var addQueryStringIdentityToPayload = injectAddQueryStringIdentityToPayload({
      locationSearch: window.document.location.search,
      dateProvider: function dateProvider() {
        return new Date();
      },
      orgId: orgId,
      logger: logger
    });
    var awaitIdentityCookie = injectAwaitIdentityCookie({
      doesIdentityCookieExist: doesIdentityCookieExist,
      orgId: orgId,
      logger: logger
    });
    var ensureSingleIdentity = injectEnsureSingleIdentity({
      doesIdentityCookieExist: doesIdentityCookieExist,
      setDomainForInitialIdentityPayload: setDomainForInitialIdentityPayload,
      addLegacyEcidToPayload: addLegacyEcidToPayload,
      awaitIdentityCookie: awaitIdentityCookie,
      logger: logger
    });
    var processIdSyncs = injectProcessIdSyncs({
      fireReferrerHideableImage: fireReferrerHideableImage,
      logger: logger
    });
    var handleResponseForIdSyncs = injectHandleResponseForIdSyncs({
      processIdSyncs: processIdSyncs
    });
    var appendIdentityToUrl = injectAppendIdentityToUrl({
      dateProvider: function dateProvider() {
        return new Date();
      },
      orgId: orgId});
    var getIdentityOptionsValidator = createGetIdentityOptionsValidator({
      thirdPartyCookiesEnabled: thirdPartyCookiesEnabled
    });
    var addEcidQueryToPayload = injectAddEcidQueryToPayload({
      thirdPartyCookiesEnabled: thirdPartyCookiesEnabled,
      areThirdPartyCookiesSupportedByDefault: areThirdPartyCookiesSupportedByDefault
    });
    return createComponent$1({
      addEcidQueryToPayload: addEcidQueryToPayload,
      addQueryStringIdentityToPayload: addQueryStringIdentityToPayload,
      ensureSingleIdentity: ensureSingleIdentity,
      setLegacyEcid: legacyIdentity.setEcid,
      handleResponseForIdSyncs: handleResponseForIdSyncs,
      getNamespacesFromResponse: getNamespacesFromResponse,
      getIdentity: getIdentity,
      consent: consent,
      identity: identity,
      appendIdentityToUrl: appendIdentityToUrl,
      logger: logger,
      getIdentityOptionsValidator: getIdentityOptionsValidator
    });
  };
  createIdentity.namespace = "Identity";
  createIdentity.configValidators = configValidators;

  var prepareLibraryInfo = function prepareLibraryInfo(_ref) {
    var config = _ref.config,
      componentRegistry = _ref.componentRegistry;
    var allCommands = [].concat(_toConsumableArray(componentRegistry.getCommandNames()), [CONFIGURE, SET_DEBUG]).sort();
    var resultConfig = _objectSpread2({}, config);
    Object.keys(config).forEach(function (key) {
      var value = config[key];
      if (typeof value !== "function") {
        return;
      }
      resultConfig[key] = value.toString();
    });
    var components = componentRegistry.getComponentNames();
    return {
      version: libraryVersion,
      configs: resultConfig,
      commands: allCommands,
      components: components
    };
  };
  var createLibraryInfo = function createLibraryInfo(_ref2) {
    var config = _ref2.config,
      componentRegistry = _ref2.componentRegistry;
    return {
      commands: {
        getLibraryInfo: {
          run: function run() {
            return {
              libraryInfo: prepareLibraryInfo({
                config: config,
                componentRegistry: componentRegistry
              })
            };
          }
        }
      }
    };
  };
  createLibraryInfo.namespace = "LibraryInfo";

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var requiredComponents = /*#__PURE__*/Object.freeze({
    __proto__: null,
    context: createContext,
    dataCollector: createDataCollector,
    identity: createIdentity,
    libraryInfo: createLibraryInfo
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createNamespacedStorage = injectStorage(window);
  var _window = window,
    console = _window.console,
    fetch = _window.fetch,
    navigator$1 = _window.navigator;
  var coreConfigValidators = createCoreConfigs();
  var apexDomain = getApexDomain(window, cookieJar);
  var sendFetchRequest = injectSendFetchRequest({
    fetch: fetch
  });
  var fireReferrerHideableImage = injectFireReferrerHideableImage();
  var getAssuranceValidationTokenParams = createGetAssuranceValidationTokenParams({
    window: window,
    createNamespacedStorage: createNamespacedStorage
  });
  var getBrowser = injectGetBrowser({
    userAgent: window.navigator.userAgent
  });
  var createExecuteCommand = function createExecuteCommand(_ref) {
    var instanceName = _ref.instanceName,
      _ref$logController = _ref.logController,
      setDebugEnabled = _ref$logController.setDebugEnabled,
      logger = _ref$logController.logger,
      createComponentLogger = _ref$logController.createComponentLogger,
      components = _ref.components;
    var componentRegistry = createComponentRegistry();
    var lifecycle = createLifecycle(componentRegistry);
    var componentCreators = components.concat(Object.values(requiredComponents));
    var setDebugCommand = function setDebugCommand(options) {
      setDebugEnabled(options.enabled, {
        fromConfig: false
      });
    };
    var loggingCookieJar = createLoggingCookieJar({
      logger: logger,
      cookieJar: cookieJar
    });
    var configureCommand = function configureCommand(options) {
      var config = buildAndValidateConfig({
        options: options,
        componentCreators: componentCreators,
        coreConfigValidators: coreConfigValidators,
        createConfig: createConfig,
        logger: logger,
        setDebugEnabled: setDebugEnabled
      });
      var orgId = config.orgId,
        targetMigrationEnabled = config.targetMigrationEnabled;
      var shouldTransferCookie = injectShouldTransferCookie({
        orgId: orgId,
        targetMigrationEnabled: targetMigrationEnabled
      });
      var cookieTransfer = createCookieTransfer({
        cookieJar: loggingCookieJar,
        shouldTransferCookie: shouldTransferCookie,
        apexDomain: apexDomain,
        dateProvider: function dateProvider() {
          return new Date();
        }
      });
      var sendBeaconRequest = isFunction(navigator$1.sendBeacon) ? injectSendBeaconRequest({
        // Without the bind(), the browser will complain about an
        // illegal invocation.
        sendBeacon: navigator$1.sendBeacon.bind(navigator$1),
        sendFetchRequest: sendFetchRequest,
        logger: logger
      }) : sendFetchRequest;
      var sendNetworkRequest = injectSendNetworkRequest({
        logger: logger,
        sendFetchRequest: sendFetchRequest,
        sendBeaconRequest: sendBeaconRequest,
        isRequestRetryable: isRequestRetryable,
        getRequestRetryDelay: getRequestRetryDelay
      });
      var processWarningsAndErrors = injectProcessWarningsAndErrors({
        logger: logger
      });
      var extractEdgeInfo = injectExtractEdgeInfo({
        logger: logger
      });
      var createResponse = injectCreateResponse({
        extractEdgeInfo: extractEdgeInfo
      });
      var getLocationHint = injectGetLocationHint({
        orgId: orgId,
        cookieJar: cookieJar
      });
      var sendEdgeNetworkRequest = injectSendEdgeNetworkRequest({
        config: config,
        lifecycle: lifecycle,
        cookieTransfer: cookieTransfer,
        sendNetworkRequest: sendNetworkRequest,
        createResponse: createResponse,
        processWarningsAndErrors: processWarningsAndErrors,
        getLocationHint: getLocationHint,
        getAssuranceValidationTokenParams: getAssuranceValidationTokenParams
      });
      var applyResponse = injectApplyResponse({
        lifecycle: lifecycle,
        cookieTransfer: cookieTransfer,
        createResponse: createResponse,
        processWarningsAndErrors: processWarningsAndErrors
      });
      var generalConsentState = createConsentStateMachine({
        logger: logger
      });
      var consent = createConsent({
        generalConsentState: generalConsentState,
        logger: logger
      });
      var identity = createIdentity$1({
        config: config,
        logger: logger,
        loggingCookieJar: loggingCookieJar
      });
      identity.initialize();
      var eventManager = createEventManager({
        config: config,
        logger: logger,
        lifecycle: lifecycle,
        consent: consent,
        createEvent: createEvent,
        createDataCollectionRequestPayload: createDataCollectionRequestPayload,
        createDataCollectionRequest: createDataCollectionRequest,
        sendEdgeNetworkRequest: sendEdgeNetworkRequest,
        applyResponse: applyResponse
      });
      return initializeComponents({
        componentCreators: componentCreators,
        lifecycle: lifecycle,
        componentRegistry: componentRegistry,
        getImmediatelyAvailableTools: function getImmediatelyAvailableTools(componentName) {
          var componentLogger = createComponentLogger(componentName);
          return {
            loggingCookieJar: loggingCookieJar,
            instanceName: instanceName,
            config: config,
            componentRegistry: componentRegistry,
            consent: consent,
            identity: identity,
            eventManager: eventManager,
            fireReferrerHideableImage: fireReferrerHideableImage,
            logger: componentLogger,
            lifecycle: lifecycle,
            sendEdgeNetworkRequest: sendEdgeNetworkRequest,
            handleError: injectHandleError({
              errorPrefix: "[" + instanceName + "] [" + componentName + "]",
              logger: componentLogger
            }),
            createNamespacedStorage: createNamespacedStorage,
            apexDomain: apexDomain,
            getBrowser: getBrowser,
            cookieTransfer: cookieTransfer,
            createResponse: createResponse
          };
        }
      });
    };
    var handleError = injectHandleError({
      errorPrefix: "[" + instanceName + "]",
      logger: logger
    });
    var executeCommand = injectExecuteCommand({
      logger: logger,
      configureCommand: configureCommand,
      setDebugCommand: setDebugCommand,
      handleError: handleError,
      validateCommandOptions: validateCommandOptions
    });
    return executeCommand;
  };
  var core = (function (_ref2) {
    var components = _ref2.components;
    // eslint-disable-next-line no-underscore-dangle
    var instanceNames = window.__alloyNS;
    if (instanceNames) {
      instanceNames.forEach(function (instanceName) {
        var logController = createLogController({
          console: console,
          locationSearch: window.location.search,
          createLogger: createLogger,
          instanceName: instanceName,
          createNamespacedStorage: createNamespacedStorage,
          getMonitors: getMonitors
        });
        var executeCommand = createExecuteCommand({
          instanceName: instanceName,
          logController: logController,
          components: components
        });
        var instance = createInstanceFunction(executeCommand);
        var queue = window[instanceName].q;
        queue.push = instance;
        logController.logger.logOnInstanceCreated({
          instance: instance
        });
        queue.forEach(instance);
      });
    }
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createClickHandler = function createClickHandler(_ref) {
    var eventManager = _ref.eventManager,
      lifecycle = _ref.lifecycle,
      handleError = _ref.handleError;
    return function (clickEvent) {
      // Ignore repropagated clicks from AppMeasurement
      if (clickEvent.s_fe) {
        return Promise.resolve();
      }
      // TODO: Consider safeguarding from the same object being clicked multiple times in rapid succession?
      var clickedElement = "composedPath" in clickEvent && clickEvent.composedPath().length > 0 ? clickEvent.composedPath()[0] : clickEvent.target;
      var event = eventManager.createEvent();
      // this is to make sure a exit link personalization metric use send beacon
      event.documentMayUnload();
      return lifecycle.onClick({
        event: event,
        clickedElement: clickedElement
      }).then(function () {
        if (event.isEmpty()) {
          return Promise.resolve();
        }
        return eventManager.sendEvent(event);
      })
      // eventManager.sendEvent() will return a promise resolved to an
      // object and we want to avoid returning any value to the customer
      .then(noop)["catch"](function (error) {
        handleError(error, "click collection");
      });
    };
  };
  var attachClickActivityCollector = (function (_ref2) {
    var eventManager = _ref2.eventManager,
      lifecycle = _ref2.lifecycle,
      handleError = _ref2.handleError;
    var clickHandler = createClickHandler({
      eventManager: eventManager,
      lifecycle: lifecycle,
      handleError: handleError
    });
    document.addEventListener("click", clickHandler, true);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var DEFAULT_DOWNLOAD_QUALIFIER = "\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$";
  var downloadLinkQualifier = boundString().regexp()["default"](DEFAULT_DOWNLOAD_QUALIFIER);
  var validators = boundObjectOf({
    clickCollectionEnabled: boundBoolean()["default"](true),
    clickCollection: boundObjectOf({
      internalLinkEnabled: boundBoolean()["default"](true),
      externalLinkEnabled: boundBoolean()["default"](true),
      downloadLinkEnabled: boundBoolean()["default"](true),
      // TODO: Consider moving downloadLinkQualifier here.
      sessionStorageEnabled: boundBoolean()["default"](false),
      eventGroupingEnabled: boundBoolean()["default"](false),
      filterClickProperties: boundCallback()
    })["default"]({
      internalLinkEnabled: true,
      externalLinkEnabled: true,
      downloadLinkEnabled: true,
      sessionStorageEnabled: false,
      eventGroupingEnabled: false
    }),
    downloadLinkQualifier: downloadLinkQualifier,
    onBeforeLinkClickSend: boundCallback().deprecated('The field "onBeforeLinkClickSend" has been deprecated. Use "clickCollection.filterClickDetails" instead.')
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var ACTIVITY_MAP_EXTENSION_ID = "cppXYctnr";
  var activityMapExtensionEnabled = (function () {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    return context.getElementById(ACTIVITY_MAP_EXTENSION_ID) !== null;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var extractDomain = (function (uri) {
    var fullUrl = uri;
    if (!/^https?:\/\//i.test(fullUrl)) {
      fullUrl = window.location.protocol + "//" + uri;
    }
    var url = new URL(fullUrl);
    return url.hostname;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isDifferentDomains = (function (uri1, uri2) {
    var domain1 = extractDomain(uri1);
    var domain2 = extractDomain(uri2);
    return domain1 !== domain2;
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isDissallowedLinkType = function isDissallowedLinkType(clickCollection, linkType) {
    return linkType && (linkType === "download" && !clickCollection.downloadLinkEnabled || linkType === "exit" && !clickCollection.externalLinkEnabled || linkType === "other" && !clickCollection.internalLinkEnabled);
  };
  var createInjectClickedElementProperties = (function (_ref) {
    var config = _ref.config,
      logger = _ref.logger,
      getClickedElementProperties = _ref.getClickedElementProperties,
      clickActivityStorage = _ref.clickActivityStorage;
    var clickCollectionEnabled = config.clickCollectionEnabled,
      clickCollection = config.clickCollection;
    if (!clickCollectionEnabled) {
      return function () {
        return undefined;
      };
    }
    return function (_ref2) {
      var event = _ref2.event,
        clickedElement = _ref2.clickedElement;
      var elementProperties = getClickedElementProperties({
        clickActivityStorage: clickActivityStorage,
        clickedElement: clickedElement,
        config: config,
        logger: logger
      });
      var linkType = elementProperties.linkType;
      // Avoid clicks to be collected for the ActivityMap interface
      if (activityMapExtensionEnabled()) {
        return;
      }
      if (elementProperties.isValidLink() && isDissallowedLinkType(clickCollection, linkType)) {
        logger.info("Cancelling link click event due to clickCollection." + linkType + "LinkEnabled = false.");
      } else if (
      // Determine if element properties should be sent with event now, or be saved
      // and grouped with a future page view event.
      // Event grouping is not supported for the deprecated onBeforeLinkClickSend callback
      // because only click properties is saved and not XDM and DATA (which could have been modified).
      // However, if the filterClickDetails callback is available we group events because it takes
      // priority over onBeforeLinkClickSend and only supports processing click properties.
      elementProperties.isInternalLink() && clickCollection.eventGroupingEnabled && (!config.onBeforeLinkClickSend || clickCollection.filterClickDetails) && !isDifferentDomains(window.location.hostname, elementProperties.linkUrl)) {
        clickActivityStorage.save(elementProperties.properties);
      } else if (elementProperties.isValidLink()) {
        // Event will be sent
        event.mergeXdm(elementProperties.xdm);
        event.mergeData(elementProperties.data);
        clickActivityStorage.save({
          pageName: elementProperties.pageName,
          pageIDType: elementProperties.pageIDType
        });
      } else if (elementProperties.isValidActivityMapData()) {
        clickActivityStorage.save(elementProperties.properties);
      }
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var buildXdmFromClickedElementProperties = function buildXdmFromClickedElementProperties(props) {
    return {
      eventType: "web.webinteraction.linkClicks",
      web: {
        webInteraction: {
          name: props.linkName,
          region: props.linkRegion,
          type: props.linkType,
          URL: props.linkUrl,
          linkClicks: {
            value: 1
          }
        }
      }
    };
  };
  var buildDataFromClickedElementProperties = function buildDataFromClickedElementProperties(props) {
    return {
      __adobe: {
        analytics: {
          contextData: {
            a: {
              activitymap: {
                page: props.pageName,
                link: props.linkName,
                region: props.linkRegion,
                pageIDType: props.pageIDType
              }
            }
          }
        }
      }
    };
  };
  var populateClickedElementPropertiesFromOptions = function populateClickedElementPropertiesFromOptions(options, props) {
    var xdm = options.xdm,
      data = options.data,
      clickedElement = options.clickedElement;
    props.clickedElement = clickedElement;
    if (xdm && xdm.web && xdm.web.webInteraction) {
      var _xdm$web$webInteracti = xdm.web.webInteraction,
        name = _xdm$web$webInteracti.name,
        region = _xdm$web$webInteracti.region,
        type = _xdm$web$webInteracti.type,
        URL = _xdm$web$webInteracti.URL;
      props.linkName = name;
      props.linkRegion = region;
      props.linkType = type;
      props.linkUrl = URL;
    }
    // DATA has priority over XDM
    /* eslint no-underscore-dangle: 0 */
    if (data && data.__adobe && data.__adobe.analytics) {
      var contextData = data.__adobe.analytics.contextData;
      if (contextData && contextData.a && contextData.a.activitymap) {
        // Set the properties if they exists
        var _contextData$a$activi = contextData.a.activitymap,
          page = _contextData$a$activi.page,
          link = _contextData$a$activi.link,
          _region = _contextData$a$activi.region,
          pageIDType = _contextData$a$activi.pageIDType;
        props.pageName = page || props.pageName;
        props.linkName = link || props.linkName;
        props.linkRegion = _region || props.linkRegion;
        if (pageIDType !== undefined) {
          props.pageIDType = pageIDType;
        }
      }
    }
  };
  var createClickedElementProperties = (function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      properties = _ref.properties,
      logger = _ref.logger;
    var props = properties || {};
    var clickedElementProperties = {
      get pageName() {
        return props.pageName;
      },
      set pageName(value) {
        props.pageName = value;
      },
      get linkName() {
        return props.linkName;
      },
      set linkName(value) {
        props.linkName = value;
      },
      get linkRegion() {
        return props.linkRegion;
      },
      set linkRegion(value) {
        props.linkRegion = value;
      },
      get linkType() {
        return props.linkType;
      },
      set linkType(value) {
        props.linkType = value;
      },
      get linkUrl() {
        return props.linkUrl;
      },
      set linkUrl(value) {
        props.linkUrl = value;
      },
      get pageIDType() {
        return props.pageIDType;
      },
      set pageIDType(value) {
        props.pageIDType = value;
      },
      get clickedElement() {
        return props.clickedElement;
      },
      set clickedElement(value) {
        props.clickedElement = value;
      },
      get properties() {
        return {
          pageName: props.pageName,
          linkName: props.linkName,
          linkRegion: props.linkRegion,
          linkType: props.linkType,
          linkUrl: props.linkUrl,
          pageIDType: props.pageIDType
        };
      },
      isValidLink: function isValidLink() {
        return !!props.linkUrl && !!props.linkType && !!props.linkName && !!props.linkRegion;
      },
      isInternalLink: function isInternalLink() {
        return this.isValidLink() && props.linkType === "other";
      },
      isValidActivityMapData: function isValidActivityMapData() {
        return !!props.pageName && !!props.linkName && !!props.linkRegion && props.pageIDType !== undefined;
      },
      get xdm() {
        if (props.filteredXdm) {
          return props.filteredXdm;
        }
        return buildXdmFromClickedElementProperties(this);
      },
      get data() {
        if (props.filteredData) {
          return props.filteredData;
        }
        return buildDataFromClickedElementProperties(this);
      },
      applyPropertyFilter: function applyPropertyFilter(filter) {
        if (filter && filter(props) === false) {
          if (logger) {
            logger.info("Clicked element properties were rejected by filter function: " + JSON.stringify(this.properties, null, 2));
          }
          props = {};
        }
      },
      applyOptionsFilter: function applyOptionsFilter(filter) {
        var opts = this.options;
        if (opts && opts.clickedElement && (opts.xdm || opts.data)) {
          // Properties are rejected if filter is explicitly false.
          if (filter && filter(opts) === false) {
            if (logger) {
              logger.info("Clicked element properties were rejected by filter function: " + JSON.stringify(this.properties, null, 2));
            }
            this.options = undefined;
            return;
          }
          this.options = opts;
          // This is just to ensure that any fields outside clicked element properties
          // set by the user filter persists.
          props.filteredXdm = opts.xdm;
          props.filteredData = opts.data;
        }
      },
      get options() {
        var opts = {};
        if (this.isValidLink()) {
          opts.xdm = this.xdm;
        }
        if (this.isValidActivityMapData()) {
          opts.data = this.data;
        }
        if (this.clickedElement) {
          opts.clickedElement = this.clickedElement;
        }
        if (!opts.xdm && !opts.data) {
          return undefined;
        }
        return opts;
      },
      set options(value) {
        props = {};
        if (value) {
          populateClickedElementPropertiesFromOptions(value, props);
        }
      }
    };
    return clickedElementProperties;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createRecallAndInjectClickedElementProperties = (function (_ref) {
    var clickActivityStorage = _ref.clickActivityStorage;
    return function (event) {
      // Avoid clicks to be collected for the ActivityMap interface
      if (activityMapExtensionEnabled()) {
        return;
      }
      var properties = clickActivityStorage.load();
      var elementProperties = createClickedElementProperties({
        properties: properties
      });
      if (elementProperties.isValidLink() || elementProperties.isValidActivityMapData()) {
        if (elementProperties.isValidLink()) {
          var xdm = elementProperties.xdm;
          // Have to delete the eventType not to override the page view
          delete xdm.eventType;
          event.mergeXdm(xdm);
        }
        if (elementProperties.isValidActivityMapData()) {
          event.mergeData(elementProperties.data);
        }
        // NOTE: We can't clear out all the storage here because we might still need to
        // keep a page-name for multiple link-clicks (e.g. downloads) on the same page.
        clickActivityStorage.save({
          pageName: elementProperties.pageName,
          pageIDType: elementProperties.pageIDType
        });
      }
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createGetClickedElementProperties = (function (_ref) {
    var window = _ref.window,
      getLinkName = _ref.getLinkName,
      getLinkRegion = _ref.getLinkRegion,
      getAbsoluteUrlFromAnchorElement = _ref.getAbsoluteUrlFromAnchorElement,
      findClickableElement = _ref.findClickableElement,
      determineLinkType = _ref.determineLinkType;
    return function (_ref2) {
      var clickedElement = _ref2.clickedElement,
        config = _ref2.config,
        logger = _ref2.logger,
        clickActivityStorage = _ref2.clickActivityStorage;
      var optionsFilter = config.onBeforeLinkClickSend,
        clickCollection = config.clickCollection;
      var propertyFilter = clickCollection.filterClickDetails;
      var elementProperties = createClickedElementProperties({
        logger: logger
      });
      if (clickedElement) {
        var clickableElement = findClickableElement(clickedElement);
        if (clickableElement) {
          elementProperties.clickedElement = clickedElement;
          elementProperties.linkUrl = getAbsoluteUrlFromAnchorElement(window, clickableElement);
          elementProperties.linkType = determineLinkType(window, config, elementProperties.linkUrl, clickableElement);
          elementProperties.linkRegion = getLinkRegion(clickableElement);
          elementProperties.linkName = getLinkName(clickableElement);
          elementProperties.pageIDType = 0;
          elementProperties.pageName = window.location.href;
          // Check if we have a page-name stored from an earlier page view event
          var storedLinkData = clickActivityStorage.load();
          if (storedLinkData && storedLinkData.pageName) {
            elementProperties.pageName = storedLinkData.pageName;
            // Perhaps pageIDType should be established after customer filter is applied
            // Like if pageName starts with "http" then pageIDType = 0
            elementProperties.pageIDType = 1;
          }
          // If defined, run user provided filter function
          if (propertyFilter) {
            // clickCollection.filterClickDetails
            elementProperties.applyPropertyFilter(propertyFilter);
          } else if (optionsFilter) {
            // onBeforeLinkClickSend
            elementProperties.applyOptionsFilter(optionsFilter);
          }
        }
      }
      return elementProperties;
    };
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var CLICK_ACTIVITY_DATA = "clickData";

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createClickActivityStorage = (function (_ref) {
    var storage = _ref.storage;
    return {
      save: function save(data) {
        var jsonData = JSON.stringify(data);
        storage.setItem(CLICK_ACTIVITY_DATA, jsonData);
      },
      load: function load() {
        var jsonData = null;
        var data = storage.getItem(CLICK_ACTIVITY_DATA);
        if (data) {
          jsonData = JSON.parse(data);
        }
        return jsonData;
      },
      remove: function remove() {
        storage.removeItem(CLICK_ACTIVITY_DATA);
      }
    };
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createStorePageViewProperties = (function (_ref) {
    var clickActivityStorage = _ref.clickActivityStorage;
    return function (event) {
      clickActivityStorage.save({
        pageName: event.getContent().xdm.web.webPageDetails.name,
        pageIDType: 1 // 1 = name, 0 = URL
      });
    };
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  // src/components/ActivityCollector/validateClickCollectionConfig.js
  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var validateClickCollectionConfig = (function (config, logger) {
    var clickCollectionEnabled = config.clickCollectionEnabled,
      onBeforeLinkClickSend = config.onBeforeLinkClickSend,
      dlq = config.downloadLinkQualifier;
    if (clickCollectionEnabled === false) {
      if (onBeforeLinkClickSend) {
        logger.warn("The 'onBeforeLinkClickSend' configuration was provided but will be ignored because clickCollectionEnabled is false.");
      }
      if (dlq && dlq !== DEFAULT_DOWNLOAD_QUALIFIER) {
        logger.warn("The 'downloadLinkQualifier' configuration was provided but will be ignored because clickCollectionEnabled is false.");
      }
    }
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Reduces repeated whitespace within a string. Whitespace surrounding the string
   * is trimmed and any occurrence of whitespace within the string is replaced with
   * a single space.
   * @param {string} str String to be formatted.
   * @returns {string} Formatted string.
   */
  var truncateWhiteSpace = (function (str) {
    return str && str.replace(/\s+/g, " ").trim();
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var unsupportedNodeNames = /^(SCRIPT|STYLE|LINK|CANVAS|NOSCRIPT|#COMMENT)$/i;

  /**
   * Determines if a node qualifies as a supported link text node.
   * @param {*} node Node to determine support for.
   * @returns {boolean}
   */
  var isSupportedTextNode = (function (node) {
    if (node && node.nodeName) {
      if (node.nodeName.match(unsupportedNodeNames)) {
        return false;
      }
    }
    return true;
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Orders and returns specified node and its child nodes in arrays of supported
   * and unsupported nodes.
   * @param {*} node The node to extract supported and unsupported nodes from.
   * @returns {{supportedNodes: Array, includesUnsupportedNodes: boolean}} Node support object.
   */
  var _extractSupportedNodes = function extractSupportedNodes(node) {
    var supportedNodes = [];
    var includesUnsupportedNodes = false;
    if (isSupportedTextNode(node)) {
      supportedNodes.push(node);
      if (node.childNodes) {
        var childNodes = Array.prototype.slice.call(node.childNodes);
        childNodes.forEach(function (childNode) {
          var nodes = _extractSupportedNodes(childNode);
          supportedNodes = supportedNodes.concat(nodes.supportedNodes);
          includesUnsupportedNodes = includesUnsupportedNodes || nodes.includesUnsupportedNodes;
        });
      }
    } else {
      includesUnsupportedNodes = true;
    }
    return {
      supportedNodes: supportedNodes,
      includesUnsupportedNodes: includesUnsupportedNodes
    };
  };

  /**
   * Returns the value of a node attribute.
   * @param {*} node The node holding the attribute.
   * @param {string} attributeName The name of the attribute.
   * @param {string} nodeName Optional node name constraint.
   * @returns {string} Attribute value or undefined.
   */
  var getNodeAttributeValue = function getNodeAttributeValue(node, attributeName, nodeName) {
    var attributeValue;
    if (!nodeName || nodeName === node.nodeName.toUpperCase()) {
      attributeValue = node.getAttribute(attributeName);
    }
    return attributeValue;
  };

  /**
   * Extracts the children supported nodes attributes map
   * @param {*} nodes The nodes array holding the children nodes.
   * The returned map contains the supported not empty children attributes values.
   * */
  var getChildrenAttributes = function getChildrenAttributes(nodes) {
    var attributes = {
      texts: []
    };
    nodes.supportedNodes.forEach(function (supportedNode) {
      if (supportedNode.getAttribute) {
        if (!attributes.alt) {
          attributes.alt = truncateWhiteSpace(supportedNode.getAttribute("alt"));
        }
        if (!attributes.title) {
          attributes.title = truncateWhiteSpace(supportedNode.getAttribute("title"));
        }
        if (!attributes.inputValue) {
          attributes.inputValue = truncateWhiteSpace(getNodeAttributeValue(supportedNode, "value", "INPUT"));
        }
        if (!attributes.imgSrc) {
          attributes.imgSrc = truncateWhiteSpace(getNodeAttributeValue(supportedNode, "src", "IMG"));
        }
        if (!attributes.ariaLabel) {
          attributes.ariaLabel = truncateWhiteSpace(supportedNode.getAttribute("aria-label"));
        }
        if (!attributes.name) {
          attributes.name = truncateWhiteSpace(supportedNode.getAttribute("name"));
        }
      }
      if (supportedNode.nodeValue) {
        attributes.texts.push(supportedNode.nodeValue);
      }
    });
    return attributes;
  };

  /**
   * Extracts a link-name from a given node.
   *
   * The returned link-name is set to one of the following (in order of priority):
   *
   * 1. Clicked node innerText
   * 2. Clicked node textContent
   * 3. Clicked node and its child nodes nodeValue appended together.
   * 4. Clicked node alt attribute or node descendant alt attribute.
   *    Whichever is found first.
   * 5. Clicked node text attribute or node descendant text attribute.
   *    Whichever is found first.
   * 6. Clicked node INPUT descendant value attribute.
   *    Whichever is found first.
   * 7. Clicked node IMG descendant src attribute.
   *    Whichever is found first.
   *
   * @param {*} node The node to find link text for.
   * @returns {string} link-name or an empty string if not link-name is found.
   */
  var getLinkName = (function (node) {
    var nodeText = truncateWhiteSpace(node.innerText || node.textContent);
    var nodes = _extractSupportedNodes(node);
    // if contains unsupported nodes we want children node attributes
    if (!nodeText || nodes.includesUnsupportedNodes) {
      var attributesMap = getChildrenAttributes(nodes);
      nodeText = truncateWhiteSpace(attributesMap.texts.join(""));
      if (!nodeText) {
        nodeText = attributesMap.alt || attributesMap.title || attributesMap.inputValue || attributesMap.imgSrc || attributesMap.ariaLabel || attributesMap.name;
      }
    }
    return nodeText || "";
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var semanticElements = /^(HEADER|MAIN|FOOTER|NAV)$/i;
  var getAriaRegionLabel = function getAriaRegionLabel(node) {
    var regionLabel;
    if (node.role === "region" && isNonEmptyString(node["aria-label"])) {
      regionLabel = node["aria-label"];
    }
    return regionLabel;
  };
  var getSectionNodeName = function getSectionNodeName(node) {
    var nodeName;
    if (node && node.nodeName) {
      if (node.nodeName.match(semanticElements)) {
        nodeName = node.nodeName;
      }
    }
    return nodeName;
  };

  /**
   * Extracts a node link-region.
   *
   * The link-region is determined by traversing up the DOM
   * looking for a region that is determined in order of priority:
   *
   * 1. element.id
   * 2. Aria region label
   * 3. Semantic element name
   * 4. BODY (if no other link-region is found).
   *
   * @param {*} node The node to find link region for.
   * @returns {string} link-region.
   */
  var getLinkRegion = (function (node) {
    var linkParentNode = node.parentNode;
    var regionName;
    while (linkParentNode) {
      regionName = truncateWhiteSpace(linkParentNode.id || getAriaRegionLabel(linkParentNode) || getSectionNodeName(linkParentNode));
      if (regionName) {
        return regionName;
      }
      linkParentNode = linkParentNode.parentNode;
    }
    return "BODY";
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getAbsoluteUrlFromAnchorElement = (function (window, element) {
    var base = window.location.href;
    var href = element.href || "";
    // Some objects (like SVG animations) can contain a href object instead of a string
    if (typeof href !== "string") {
      href = "";
    }
    try {
      return new URL(href, base).href;
    } catch (_unused) {
      return base;
    }
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isSupportedAnchorElement = (function (element) {
    if (element.href && (element.tagName === "A" || element.tagName === "AREA") && (!element.onclick || !element.protocol || element.protocol.toLowerCase().indexOf("javascript") < 0)) {
      return true;
    }
    return false;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var elementHasClickHandler = (function (element) {
    return !element ? false : !!element.onclick;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isInputSubmitElement = (function (element) {
    if (element.tagName === "INPUT") {
      var type = element.getAttribute("type");
      if (type === "submit") {
        return true;
      }
      // Image type input elements are considered submit elements.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image
      if (type === "image" && element.src) {
        return true;
      }
    }
    return false;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isButtonSubmitElement = (function (element) {
    return element.tagName === "BUTTON" && element.type === "submit";
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var findClickableElement = (function (element) {
    var node = element;
    while (node) {
      // Stop looking when BODY is reached
      if (node.nodeName && node.nodeName === "BODY") {
        break;
      }
      if (isSupportedAnchorElement(node) || elementHasClickHandler(node) || isInputSubmitElement(node) || isButtonSubmitElement(node)) {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Trims the query from the URL.
   * @param {string} url
   * @returns {string}
   */
  var trimQueryFromUrl = (function (url) {
    var questionMarkIndex = url.indexOf("?");
    var hashIndex = url.indexOf("#");
    if (questionMarkIndex >= 0 && (questionMarkIndex < hashIndex || hashIndex < 0)) {
      return url.substring(0, questionMarkIndex);
    }
    if (hashIndex >= 0) {
      return url.substring(0, hashIndex);
    }
    return url;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isDownloadLink = (function (downloadLinkQualifier, linkUrl, clickedObj) {
    var result = false;
    if (linkUrl) {
      if (clickedObj && clickedObj.download) {
        result = true;
      } else if (downloadLinkQualifier) {
        var re = new RegExp(downloadLinkQualifier);
        var trimmedLinkUrl = trimQueryFromUrl(linkUrl).toLowerCase();
        result = re.test(trimmedLinkUrl);
      }
    }
    return result;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isExitLink = (function (window, linkUrl) {
    var result = false;
    // window.location.hostname should always be defined, but checking just in case
    if (linkUrl && window.location.hostname) {
      var currentHostname = window.location.hostname.toLowerCase();
      var trimmedLinkUrl = trimQueryFromUrl(linkUrl).toLowerCase();
      result = trimmedLinkUrl.indexOf(currentHostname) < 0;
    }
    return result;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var determineLinkType = (function (window, config, linkUrl, clickedObj) {
    var linkType = "other";
    if (isNonEmptyString(linkUrl)) {
      if (isDownloadLink(config.downloadLinkQualifier, linkUrl, clickedObj)) {
        linkType = "download";
      } else if (isExitLink(window, linkUrl)) {
        linkType = "exit";
      }
    }
    return linkType;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var hasPageName = (function (event) {
    var content = event.getContent();
    return content.xdm !== undefined &&
    // NOTE: A page view event should "ideally" include the pageViews type
    // && event.xdm.eventType === "web.webpagedetails.pageViews"
    content.xdm.web !== undefined && content.xdm.web.webPageDetails !== undefined && content.xdm.web.webPageDetails.name !== undefined;
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createTransientStorage = (function () {
    var storage = {};
    return {
      getItem: function getItem(key) {
        return storage[key];
      },
      setItem: function setItem(key, value) {
        storage[key] = value;
      },
      removeItem: function removeItem(key) {
        delete storage[key];
      }
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getClickedElementProperties = createGetClickedElementProperties({
    window: window,
    getLinkName: getLinkName,
    getLinkRegion: getLinkRegion,
    getAbsoluteUrlFromAnchorElement: getAbsoluteUrlFromAnchorElement,
    findClickableElement: findClickableElement,
    determineLinkType: determineLinkType
  });
  var clickActivityStorage;
  var initClickActivityStorage = function initClickActivityStorage(config) {
    if (!clickActivityStorage) {
      var createNamespacedStorage = injectStorage(window);
      var nameSpacedStorage = createNamespacedStorage(config.orgId || "");
      // Use transient in-memory if sessionStorage is disabled
      var transientStorage = createTransientStorage();
      var storage = config.clickCollection.sessionStorageEnabled ? nameSpacedStorage.session : transientStorage;
      clickActivityStorage = createClickActivityStorage({
        storage: storage
      });
    }
  };
  var createActivityCollector = function createActivityCollector(_ref) {
    var config = _ref.config,
      eventManager = _ref.eventManager,
      handleError = _ref.handleError,
      logger = _ref.logger;
    validateClickCollectionConfig(config, logger);
    var clickCollection = config.clickCollection;
    if (!clickActivityStorage) {
      initClickActivityStorage(config);
    }
    var injectClickedElementProperties = createInjectClickedElementProperties({
      config: config,
      logger: logger,
      clickActivityStorage: clickActivityStorage,
      getClickedElementProperties: getClickedElementProperties
    });
    var recallAndInjectClickedElementProperties = createRecallAndInjectClickedElementProperties({
      clickActivityStorage: clickActivityStorage
    });
    var storePageViewProperties = createStorePageViewProperties({
      clickActivityStorage: clickActivityStorage
    });
    return {
      lifecycle: {
        onComponentsRegistered: function onComponentsRegistered(tools) {
          var lifecycle = tools.lifecycle;
          attachClickActivityCollector({
            eventManager: eventManager,
            lifecycle: lifecycle,
            handleError: handleError
          });
          // TODO: createScrollActivityCollector ...
        },
        onClick: function onClick(_ref2) {
          var event = _ref2.event,
            clickedElement = _ref2.clickedElement;
          injectClickedElementProperties({
            event: event,
            clickedElement: clickedElement
          });
        },
        onBeforeEvent: function onBeforeEvent(_ref3) {
          var event = _ref3.event;
          if (hasPageName(event)) {
            if (clickCollection.eventGroupingEnabled) {
              recallAndInjectClickedElementProperties(event);
            }
            storePageViewProperties(event, logger, clickActivityStorage);
          }
        }
      }
    };
  };
  createActivityCollector.namespace = "ActivityCollector";
  createActivityCollector.configValidators = validators;
  createActivityCollector.buildOnInstanceConfiguredExtraParams = function (_ref4) {
    var config = _ref4.config,
      logger = _ref4.logger;
    if (!clickActivityStorage) {
      initClickActivityStorage(config);
    }
    return {
      getLinkDetails: function getLinkDetails(targetElement) {
        return getClickedElementProperties({
          clickActivityStorage: clickActivityStorage,
          clickedElement: targetElement,
          config: config,
          logger: logger
        }).properties;
      }
    };
  };

  var createResultLogMessage = function createResultLogMessage(urlDestination, success) {
    return "URL destination " + ("succeeded" ) + ": " + urlDestination.spec.url;
  };
  var injectProcessDestinations = (function (_ref) {
    var fireReferrerHideableImage = _ref.fireReferrerHideableImage,
      logger = _ref.logger,
      cookieJar = _ref.cookieJar,
      isPageSsl = _ref.isPageSsl;
    var extraCookieOptions = isPageSsl ? {
      sameSite: "none",
      secure: true
    } : {};
    var processCookies = function processCookies(destinations) {
      var cookieDestinations = destinations.filter(function (dest) {
        return dest.type === "cookie";
      });
      cookieDestinations.forEach(function (dest) {
        var _dest$spec = dest.spec,
          name = _dest$spec.name,
          value = _dest$spec.value,
          domain = _dest$spec.domain,
          ttlDays = _dest$spec.ttlDays;
        cookieJar.set(name, value || "", _objectSpread2({
          domain: domain || "",
          expires: ttlDays || 10
        }, extraCookieOptions));
      });
    };
    var processUrls = function processUrls(destinations) {
      var urlDestinations = destinations.filter(function (dest) {
        return dest.type === "url";
      });
      return Promise.all(urlDestinations.map(function (urlDestination) {
        return fireReferrerHideableImage(urlDestination.spec).then(function () {
          logger.info(createResultLogMessage(urlDestination));
        })["catch"](function () {
          // We intentionally do not throw an error if destinations fail. We
          // consider it a non-critical failure and therefore do not want it to
          // reject the promise handed back to the customer.
        });
      })).then(noop);
    };
    return function (destinations) {
      processCookies(destinations);
      return processUrls(destinations);
    };
  });

  /*
  Copyright 2021 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var injectProcessResponse = (function (_ref) {
    var processDestinations = _ref.processDestinations;
    var processPushDestinations = function processPushDestinations(_ref2) {
      var response = _ref2.response;
      var destinations = response.getPayloadsByType("activation:push");
      return processDestinations(destinations);
    };
    var retrievePullDestinations = function retrievePullDestinations(_ref3) {
      var response = _ref3.response;
      return {
        destinations: response.getPayloadsByType("activation:pull")
      };
    };
    return function (_ref4) {
      var response = _ref4.response;
      return processPushDestinations({
        response: response
      }).then(function () {
        return retrievePullDestinations({
          response: response
        });
      });
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createAudiences = function createAudiences(_ref) {
    var logger = _ref.logger,
      fireReferrerHideableImage = _ref.fireReferrerHideableImage;
    // we override the js-cookie converter to encode the cookie value similar on how it is in DIL (PDCL-10238)
    var cookieJarWithEncoding = cookieJar.withConverter({
      write: function write(value) {
        return encodeURIComponent(value);
      }
    });
    var loggingCookieJar = createLoggingCookieJar({
      logger: logger,
      cookieJar: cookieJarWithEncoding
    });
    var processDestinations = injectProcessDestinations({
      fireReferrerHideableImage: fireReferrerHideableImage,
      logger: logger,
      cookieJar: loggingCookieJar,
      isPageSsl: window.location.protocol === "https:"
    });
    var processResponse = injectProcessResponse({
      processDestinations: processDestinations
    });
    return {
      lifecycle: {
        onResponse: processResponse
      },
      commands: {}
    };
  };
  createAudiences.namespace = "Audiences";

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  boundObjectOf({
    consent: boundArrayOf(boundAnything()).required().nonEmpty(),
    identityMap: validateIdentityMap,
    edgeConfigOverrides: validateConfigOverride
  }).noUnknownFields().required();

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  boundObjectOf({
    defaultConsent: boundEnumOf(IN, OUT, PENDING)["default"](IN)
  });

  /*
  Copyright 2021 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  /**
   * Returns whether a string value is blank. Also returns true if the value is not a string.
   * @param {*} value
   * @returns {boolean}
   */
  var isBlankString = (function (value) {
    return isString(value) ? !value.trim() : true;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var DEFAULT_CONTENT_ITEM = "https://ns.adobe.com/personalization/default-content-item";
  var DOM_ACTION = "https://ns.adobe.com/personalization/dom-action";
  var HTML_CONTENT_ITEM = "https://ns.adobe.com/personalization/html-content-item";
  var JSON_CONTENT_ITEM = "https://ns.adobe.com/personalization/json-content-item";
  var RULESET_ITEM = "https://ns.adobe.com/personalization/ruleset-item";
  var REDIRECT_ITEM = "https://ns.adobe.com/personalization/redirect-item";
  var MESSAGE_IN_APP = "https://ns.adobe.com/personalization/message/in-app";
  var MESSAGE_CONTENT_CARD = "https://ns.adobe.com/personalization/message/content-card";

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var WEB = "web";
  var WEBAPP = "webapp";
  var SURFACE_TYPE_DELIMITER = "://";
  var FRAGMENT_DELIMITER = "#";

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var SURFACE_REGEX = /^(\w+):\/\/([^/#]+)(\/[^#]*)?(#.*)?$/;
  var AUTHORITY_REGEX = /^(?:.*@)?(?:[a-z\d\u00a1-\uffff.-]+|\[[a-f\d:]+])(?::\d+)?$/;
  var PATH_REGEX = /^\/(?:[/\w\u00a1-\uffff-.~]|%[a-fA-F\d]{2})*$/;
  var FRAGMENT_REGEX = /^#(?:[/\w\u00a1-\uffff-.~]|%[a-fA-F\d]{2})+$/;
  var normalizePath = function normalizePath() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
    var end = path.length;
    while (end > 0 && "/".indexOf(path.charAt(end - 1)) !== -1) {
      end -= 1;
    }
    return path.substring(0, end) || "/";
  };
  var getSurfaceType = function getSurfaceType(surfaceTypeMatch) {
    return isNonEmptyString(surfaceTypeMatch) ? surfaceTypeMatch.toLowerCase() : "";
  };
  var getAuthority = function getAuthority(authorityMatch) {
    return isNonEmptyString(authorityMatch) ? authorityMatch.toLowerCase() : "";
  };
  var getPath = function getPath(pathMatch) {
    return isNonEmptyString(pathMatch) ? normalizePath(pathMatch) : "/";
  };
  var parseSurface = function parseSurface(surfaceString) {
    var matched = surfaceString.match(SURFACE_REGEX);
    return matched ? {
      surfaceType: getSurfaceType(matched[1]),
      authority: getAuthority(matched[2]),
      path: getPath(matched[3]),
      fragment: matched[4]
    } : null;
  };
  var stringifySurface = function stringifySurface(surface) {
    return "" + surface.surfaceType + SURFACE_TYPE_DELIMITER + surface.authority + (surface.path || "") + (surface.fragment || "");
  };
  var buildPageSurface = function buildPageSurface(getPageLocation) {
    var location = getPageLocation();
    var host = location.host.toLowerCase();
    var path = location.pathname;
    return WEB + SURFACE_TYPE_DELIMITER + host + normalizePath(path);
  };
  var expandFragmentSurface = function expandFragmentSurface(surface, getPageLocation) {
    return surface.startsWith(FRAGMENT_DELIMITER) ? buildPageSurface(getPageLocation) + surface : surface;
  };
  var validateSurface = function validateSurface(surface, getPageLocation, logger) {
    var invalidateSurface = function invalidateSurface(validationError) {
      logger.warn(validationError);
      return null;
    };
    if (!isNonEmptyString(surface)) {
      return invalidateSurface("Invalid surface: " + surface);
    }
    var expanded = expandFragmentSurface(surface, getPageLocation);
    var parsed = parseSurface(expanded);
    if (parsed === null) {
      return invalidateSurface("Invalid surface: " + surface);
    }
    if (![WEB, WEBAPP].includes(parsed.surfaceType)) {
      return invalidateSurface("Unsupported surface type " + parsed.surfaceType + " in surface: " + surface);
    }
    if (!parsed.authority || !AUTHORITY_REGEX.test(parsed.authority)) {
      return invalidateSurface("Invalid authority " + parsed.authority + " in surface: " + surface);
    }
    if (parsed.path && !PATH_REGEX.test(parsed.path)) {
      return invalidateSurface("Invalid path " + parsed.path + " in surface: " + surface);
    }
    if (parsed.fragment && !FRAGMENT_REGEX.test(parsed.fragment)) {
      return invalidateSurface("Invalid fragment " + parsed.fragment + " in surface: " + surface);
    }
    return parsed;
  };
  var isPageWideSurface = function isPageWideSurface(scope) {
    return !!scope && scope.indexOf(WEB + SURFACE_TYPE_DELIMITER) === 0 && scope.indexOf(FRAGMENT_DELIMITER) === -1;
  };

  // eslint-disable-next-line default-param-last
  var normalizeSurfaces = function normalizeSurfaces() {
    var surfaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var getPageLocation = arguments.length > 1 ? arguments[1] : undefined;
    var logger = arguments.length > 2 ? arguments[2] : undefined;
    return surfaces.map(function (surface) {
      return validateSurface(surface, getPageLocation, logger);
    }).filter(function (surface) {
      return !isNil(surface);
    }).map(stringifySurface);
  };

  var addPageWideScope = function addPageWideScope(scopes) {
    if (!scopes.includes(PAGE_WIDE_SCOPE)) {
      scopes.push(PAGE_WIDE_SCOPE);
    }
  };
  var addPageSurface = function addPageSurface(surfaces, getPageLocation) {
    var pageSurface = buildPageSurface(getPageLocation);
    if (!surfaces.includes(pageSurface)) {
      surfaces.push(pageSurface);
    }
  };
  var dedupe = function dedupe(array) {
    return array.filter(function (item, pos) {
      return array.indexOf(item) === pos;
    });
  };
  var createPersonalizationDetails = (function (_ref) {
    var getPageLocation = _ref.getPageLocation,
      renderDecisions = _ref.renderDecisions,
      decisionScopes = _ref.decisionScopes,
      personalization = _ref.personalization,
      event = _ref.event,
      _isCacheInitialized = _ref.isCacheInitialized,
      logger = _ref.logger;
    var viewName = event.getViewName();
    return {
      isRenderDecisions: function isRenderDecisions() {
        return renderDecisions;
      },
      isSendDisplayEvent: function isSendDisplayEvent() {
        return !!personalization.sendDisplayEvent;
      },
      shouldIncludeRenderedPropositions: function shouldIncludeRenderedPropositions() {
        return !!personalization.includeRenderedPropositions;
      },
      getViewName: function getViewName() {
        return viewName;
      },
      hasScopes: function hasScopes() {
        return decisionScopes.length > 0 || isNonEmptyArray(personalization.decisionScopes);
      },
      hasSurfaces: function hasSurfaces() {
        return isNonEmptyArray(personalization.surfaces);
      },
      hasViewName: function hasViewName() {
        return isNonEmptyString(viewName);
      },
      createQueryDetails: function createQueryDetails() {
        var scopes = _toConsumableArray(decisionScopes);
        if (isNonEmptyArray(personalization.decisionScopes)) {
          scopes.push.apply(scopes, _toConsumableArray(personalization.decisionScopes));
        }
        var eventSurfaces = normalizeSurfaces(personalization.surfaces, getPageLocation, logger);
        if (this.shouldRequestDefaultPersonalization()) {
          addPageWideScope(scopes);
          addPageSurface(eventSurfaces, getPageLocation);
        }
        var schemas = [DEFAULT_CONTENT_ITEM, HTML_CONTENT_ITEM, JSON_CONTENT_ITEM, REDIRECT_ITEM, RULESET_ITEM, MESSAGE_IN_APP, MESSAGE_CONTENT_CARD];
        if (scopes.includes(PAGE_WIDE_SCOPE)) {
          schemas.push(DOM_ACTION);
        }
        return {
          schemas: schemas,
          decisionScopes: dedupe(scopes),
          surfaces: dedupe(eventSurfaces)
        };
      },
      isCacheInitialized: function isCacheInitialized() {
        return _isCacheInitialized;
      },
      shouldFetchData: function shouldFetchData() {
        return this.hasScopes() || this.hasSurfaces() || this.shouldRequestDefaultPersonalization();
      },
      shouldUseCachedData: function shouldUseCachedData() {
        return this.hasViewName() && !this.shouldFetchData();
      },
      shouldRequestDefaultPersonalization: function shouldRequestDefaultPersonalization() {
        return personalization.defaultPersonalizationEnabled || !this.isCacheInitialized() && personalization.defaultPersonalizationEnabled !== false;
      }
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var AUTHORING_ENABLED = "Rendering is disabled for authoring mode.";

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var DISPLAY = "decisioning.propositionDisplay";
  var INTERACT = "decisioning.propositionInteract";
  var TRIGGER = "decisioning.propositionTrigger";
  var DISMISS = "decisioning.propositionDismiss";
  var SUPPRESS = "decisioning.propositionSuppressDisplay";
  var EVENT_TYPE_TRUE = 1;

  var PropositionEventType = {
    DISPLAY: "display",
    INTERACT: "interact",
    TRIGGER: "trigger",
    DISMISS: "dismiss",
    SUPPRESS: "suppressDisplay"
  };
  var eventTypeToPropositionEventTypeMapping = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, DISPLAY, PropositionEventType.DISPLAY), INTERACT, PropositionEventType.INTERACT), TRIGGER, PropositionEventType.TRIGGER), DISMISS, PropositionEventType.DISMISS), SUPPRESS, PropositionEventType.SUPPRESS);
  _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, PropositionEventType.DISPLAY, DISPLAY), PropositionEventType.INTERACT, INTERACT), PropositionEventType.TRIGGER, TRIGGER), PropositionEventType.DISMISS, DISMISS), PropositionEventType.SUPPRESS, SUPPRESS);
  var getPropositionEventType = function getPropositionEventType(eventType) {
    return eventTypeToPropositionEventTypeMapping[eventType];
  };

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var EMPTY_PROPOSITIONS = {
    propositions: []
  };
  var validateApplyPropositionsOptions = (function (_ref) {
    var logger = _ref.logger,
      options = _ref.options;
    var applyPropositionsOptionsValidator = boundObjectOf({
      propositions: boundArrayOf(boundObjectOf({
        id: boundString().required(),
        scope: boundString().required(),
        scopeDetails: boundObjectOf({
          decisionProvider: boundString().required()
        }).required(),
        items: boundArrayOf(boundObjectOf({
          id: boundString().required(),
          schema: boundString().required(),
          data: boundObjectOf(boundAnything())
        })).nonEmpty().required()
      }).required()).nonEmpty().required(),
      metadata: boundObjectOf(boundAnything()),
      viewName: boundString()
    }).required();
    try {
      return applyPropositionsOptionsValidator(options);
    } catch (e) {
      logger.warn("Invalid options for applyPropositions. No propositions will be applied.", e);
      return EMPTY_PROPOSITIONS;
    }
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createComponent = (function (_ref) {
    var getPageLocation = _ref.getPageLocation,
      logger = _ref.logger,
      fetchDataHandler = _ref.fetchDataHandler,
      viewChangeHandler = _ref.viewChangeHandler,
      onClickHandler = _ref.onClickHandler,
      isAuthoringModeEnabled = _ref.isAuthoringModeEnabled,
      mergeQuery = _ref.mergeQuery,
      viewCache = _ref.viewCache,
      showContainers = _ref.showContainers,
      applyPropositions = _ref.applyPropositions,
      setTargetMigration = _ref.setTargetMigration,
      mergeDecisionsMeta = _ref.mergeDecisionsMeta,
      renderedPropositions = _ref.renderedPropositions,
      onDecisionHandler = _ref.onDecisionHandler,
      handleConsentFlicker = _ref.handleConsentFlicker;
    return {
      lifecycle: {
        onComponentsRegistered: function onComponentsRegistered() {
          handleConsentFlicker();
        },
        onDecision: onDecisionHandler,
        onBeforeRequest: function onBeforeRequest(_ref2) {
          var request = _ref2.request;
          setTargetMigration(request);
          return Promise.resolve();
        },
        onBeforeEvent: function onBeforeEvent(_ref3) {
          var event = _ref3.event,
            renderDecisions = _ref3.renderDecisions,
            _ref3$decisionScopes = _ref3.decisionScopes,
            decisionScopes = _ref3$decisionScopes === void 0 ? [] : _ref3$decisionScopes,
            _ref3$personalization = _ref3.personalization,
            personalization = _ref3$personalization === void 0 ? {} : _ref3$personalization,
            _ref3$onResponse = _ref3.onResponse,
            onResponse = _ref3$onResponse === void 0 ? noop : _ref3$onResponse,
            _ref3$onRequestFailur = _ref3.onRequestFailure,
            onRequestFailure = _ref3$onRequestFailur === void 0 ? noop : _ref3$onRequestFailur;
          // Include propositions on all responses, overridden with data as needed
          onResponse(function () {
            return {
              propositions: []
            };
          });
          onRequestFailure(function () {
            return showContainers();
          });
          if (isAuthoringModeEnabled()) {
            logger.warn(AUTHORING_ENABLED);

            // If we are in authoring mode we disable personalization
            mergeQuery(event, {
              enabled: false
            });
            return Promise.resolve();
          }
          var personalizationDetails = createPersonalizationDetails({
            getPageLocation: getPageLocation,
            renderDecisions: renderDecisions,
            decisionScopes: decisionScopes,
            personalization: personalization,
            event: event,
            isCacheInitialized: viewCache.isInitialized(),
            logger: logger
          });
          var decisionsMetaPromises = [];
          if (personalizationDetails.shouldIncludeRenderedPropositions()) {
            decisionsMetaPromises.push(renderedPropositions.clear());
          }
          if (personalizationDetails.shouldFetchData()) {
            var cacheUpdate = viewCache.createCacheUpdate(personalizationDetails.getViewName());
            onRequestFailure(function () {
              return cacheUpdate.cancel();
            });
            var identityMap = event.getUserIdentityMap();
            fetchDataHandler({
              cacheUpdate: cacheUpdate,
              personalizationDetails: personalizationDetails,
              event: event,
              onResponse: onResponse,
              identityMap: identityMap
            });
          } else if (personalizationDetails.shouldUseCachedData()) {
            decisionsMetaPromises.push(viewChangeHandler({
              personalizationDetails: personalizationDetails,
              event: event,
              onResponse: onResponse,
              onRequestFailure: onRequestFailure
            }));
          }

          // This promise.all waits for both the pending display notifications to be resolved
          // (i.e. the top of page call to finish rendering) and the view change handler to
          // finish rendering anything for this view.
          return Promise.all(decisionsMetaPromises).then(function (decisionsMetas) {
            // We only want to call mergeDecisionsMeta once, but we can get the propositions
            // from two places: the pending display notifications and the view change handler.
            var decisionsMeta = decisionsMetas.flatMap(function (dms) {
              return dms;
            });
            if (isNonEmptyArray(decisionsMeta)) {
              mergeDecisionsMeta(event, decisionsMeta, [PropositionEventType.DISPLAY]);
            }
          });
        },
        onClick: function onClick(_ref4) {
          var event = _ref4.event,
            clickedElement = _ref4.clickedElement;
          onClickHandler({
            event: event,
            clickedElement: clickedElement
          });
        }
      },
      commands: {
        applyPropositions: {
          optionsValidator: function optionsValidator(options) {
            return validateApplyPropositionsOptions({
              logger: logger,
              options: options
            });
          },
          run: applyPropositions
        }
      }
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createFragment = (function () {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "undefined";
    return createNode(DIV, {}, {
      innerHTML: content
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var EQ_START = ":eq(";
  var EQ_PATTERN = /:eq\((\d+)\)/g;
  var isNotEqSelector = function isNotEqSelector(str) {
    return str.indexOf(EQ_START) === -1;
  };
  var splitWithEq = function splitWithEq(selector) {
    return selector.split(EQ_PATTERN).filter(isNonEmptyString);
  };

  // Trying to match ID or CSS class
  var CSS_IDENTIFIER_PATTERN = /(#|\.)(-?\w+)/g;
  // Here we use CSS.escape() to make sure we get
  // correct values for ID and CSS class
  // Please check:  https://www.w3.org/TR/css-syntax-3/#escaping
  var replaceIdentifier = function replaceIdentifier(_, $1, $2) {
    return "" + $1 + CSS.escape($2);
  };
  var escapeIdentifiersInSelector = function escapeIdentifiersInSelector(selector) {
    return selector.replace(CSS_IDENTIFIER_PATTERN, replaceIdentifier);
  };
  var parseSelector = function parseSelector(rawSelector) {
    var result = [];
    var selector = escapeIdentifiersInSelector(rawSelector.trim());
    var parts = splitWithEq(selector);
    var length = parts.length;
    var i = 0;
    while (i < length) {
      var sel = parts[i];
      var eq = parts[i + 1];
      if (eq) {
        result.push({
          sel: sel,
          eq: Number(eq)
        });
      } else {
        result.push({
          sel: sel
        });
      }
      i += 2;
    }
    return result;
  };

  /**
   * Returns an array of matched DOM nodes.
   * @param {String} selector that contains Sizzle "eq(...)" pseudo selector
   * @returns {Array} an array of DOM nodes
   */
  var selectNodesWithEq = function selectNodesWithEq(selector) {
    var doc = document;
    if (isNotEqSelector(selector)) {
      return selectNodes(selector, doc);
    }
    var parts = parseSelector(selector);
    var length = parts.length;
    var result = [];
    var context = doc;
    var i = 0;
    while (i < length) {
      var _parts$i = parts[i],
        sel = _parts$i.sel,
        eq = _parts$i.eq;
      var nodes = selectNodes(sel, context);
      var nodesCount = nodes.length;
      if (nodesCount === 0) {
        break;
      }
      if (eq != null && eq > nodesCount - 1) {
        break;
      }
      if (i < length - 1) {
        if (eq == null) {
          var _nodes = _slicedToArray(nodes, 1);
          context = _nodes[0];
        } else {
          context = nodes[eq];
        }
      }
      if (i === length - 1) {
        if (eq == null) {
          result = nodes;
        } else {
          result = [nodes[eq]];
        }
      }
      i += 1;
    }
    return result;
  };

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Returns an array of matched DOM nodes.
   * @param {String} id
   * @param {Node} [context=document] defaults to document
   * @returns {HTMLElement} an element of null
   */
  var getElementById = (function (id) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return context.getElementById(id);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var setAttribute = (function (element, name, value) {
    element.setAttribute(name, value);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getAttribute = (function (element, name) {
    return element.getAttribute(name);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var removeAttribute = (function (element, name) {
    element.removeAttribute(name);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var setStyle = (function (element, name, value, priority) {
    var css;
    if (priority) {
      css = name + ":" + value + " !" + priority + ";";
    } else {
      css = name + ":" + value + ";";
    }
    element.style.cssText += ";" + css;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getParent = (function (element) {
    return element.parentNode;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getNextSibling = (function (element) {
    return element.nextElementSibling;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var insertAfter = (function (container, element) {
    if (!container) {
      return;
    }
    var parent = getParent(container);
    if (parent) {
      parent.insertBefore(element, getNextSibling(container));
    }
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var insertBefore = (function (container, element) {
    if (!container) {
      return;
    }
    var parent = getParent(container);
    if (parent) {
      parent.insertBefore(element, container);
    }
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getChildren = (function (element) {
    var children = element.children;
    if (children) {
      return toArray(children);
    }
    return [];
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getChildNodes = (function (element) {
    var childNodes = element.childNodes;
    if (childNodes) {
      return toArray(childNodes);
    }
    return [];
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var getFirstChild = (function (element) {
    return element.firstElementChild;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var nonce;

  /**
   * Returns the nonce if available.
   * @param {Node} [context=document] defaults to document
   * @returns {(String|undefined)} the nonce or undefined if not available
   */
  var getNonce = (function () {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    if (nonce === undefined) {
      var n = context.querySelector("[nonce]");
      // NOTE: We're keeping n.getAttribute("nonce") until it is safe to remove:
      //   ref: https://github.com/whatwg/html/issues/2369#issuecomment-280853946
      nonce = n && (n.nonce || n.getAttribute("nonce"));
    }
    return nonce;
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var SRC = "src";

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isImage = function isImage(element) {
    return element.tagName === IMG;
  };
  var loadImage = function loadImage(url) {
    return createNode(IMG, {
      src: url
    });
  };
  var loadImages = function loadImages(fragment) {
    var images = selectNodes(IMG, fragment);
    images.forEach(function (image) {
      var url = getAttribute(image, SRC);
      if (url) {
        loadImage(url);
      }
    });
  };

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var is$1 = function is(element, tagName) {
    return element.tagName === tagName;
  };
  var isInlineStyleElement = function isInlineStyleElement(element) {
    return is$1(element, STYLE) && !getAttribute(element, SRC);
  };
  var addNonceToInlineStyleElements = (function (fragment) {
    var styleNodes = selectNodes(STYLE, fragment);
    var length = styleNodes.length;
    var nonce = getNonce();
    if (!nonce) {
      return;
    }
    for (var i = 0; i < length; i += 1) {
      var element = styleNodes[i];
      if (!isInlineStyleElement(element)) {
        continue;
      }
      element.nonce = nonce;
    }
  });

  var getPromise = function getPromise(url, script) {
    return new Promise(function (resolve, reject) {
      script.onload = function () {
        resolve(script);
      };
      script.onerror = function () {
        reject(new Error("Failed to load script: " + url));
      };
    });
  };
  var loadScript = function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    script.async = true;
    var promise = getPromise(url, script);
    document.head.appendChild(script);
    return promise;
  };
  var is = function is(element, tagName) {
    return !!element && element.tagName === tagName;
  };
  var isInlineScript = function isInlineScript(element) {
    return is(element, SCRIPT) && !getAttribute(element, SRC);
  };
  var isRemoteScript = function isRemoteScript(element) {
    return is(element, SCRIPT) && getAttribute(element, SRC);
  };
  var getInlineScripts = function getInlineScripts(fragment) {
    var scripts = selectNodes(SCRIPT, fragment);
    var result = [];
    var length = scripts.length;
    var nonce = getNonce();
    var attributes = _objectSpread2({}, nonce && {
      nonce: nonce
    });
    for (var i = 0; i < length; i += 1) {
      var element = scripts[i];
      if (!isInlineScript(element)) {
        continue;
      }
      var textContent = element.textContent;
      if (!textContent) {
        continue;
      }
      result.push(createNode(SCRIPT, attributes, {
        textContent: textContent
      }));
    }
    return result;
  };
  var getRemoteScriptsUrls = function getRemoteScriptsUrls(fragment) {
    var scripts = selectNodes(SCRIPT, fragment);
    var result = [];
    var length = scripts.length;
    for (var i = 0; i < length; i += 1) {
      var element = scripts[i];
      if (!isRemoteScript(element)) {
        continue;
      }
      var url = getAttribute(element, SRC);
      if (!url) {
        continue;
      }
      result.push(url);
    }
    return result;
  };
  var executeInlineScripts = function executeInlineScripts(parent, scripts) {
    scripts.forEach(function (script) {
      parent.appendChild(script);
      parent.removeChild(script);
    });
  };
  var executeRemoteScripts = function executeRemoteScripts(urls) {
    return Promise.all(urls.map(loadScript));
  };

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var appendHtml = (function (container, html, decorateProposition) {
    var fragment = createFragment(html);
    addNonceToInlineStyleElements(fragment);
    var elements = getChildNodes(fragment);
    var scripts = getInlineScripts(fragment);
    var scriptsUrls = getRemoteScriptsUrls(fragment);
    loadImages(fragment);
    elements.forEach(function (element) {
      appendNode(container, element);
    });
    decorateProposition(container);
    executeInlineScripts(container, scripts);
    return executeRemoteScripts(scriptsUrls);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var clear = function clear(container) {
    // We want to remove ALL nodes, text, comments etc
    var childNodes = getChildNodes(container);
    childNodes.forEach(removeNode);
  };
  var setHtml = (function (container, html, decorateProposition) {
    clear(container);
    return appendHtml(container, html, decorateProposition);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var prependHtml = (function (container, html, decorateProposition) {
    var fragment = createFragment(html);
    addNonceToInlineStyleElements(fragment);
    var elements = getChildNodes(fragment);
    var scripts = getInlineScripts(fragment);
    var scriptsUrls = getRemoteScriptsUrls(fragment);
    var length = elements.length;
    var i = length - 1;

    // We have to proactively load images to avoid flicker
    loadImages(fragment);

    // We are inserting elements in reverse order
    while (i >= 0) {
      var element = elements[i];
      decorateProposition(element);
      var firstChild = getFirstChild(container);
      if (firstChild) {
        insertBefore(firstChild, element);
      } else {
        appendNode(container, element);
      }
      i -= 1;
    }
    executeInlineScripts(container, scripts);
    return executeRemoteScripts(scriptsUrls);
  });

  var PREHIDING_ID = "alloy-prehiding";
  var HIDING_STYLE_DEFINITION = "{ visibility: hidden }";

  // Using global is OK since we have a single DOM
  // so storing nodes even for multiple Alloy instances is fine
  var styleNodes = {};
  var hideElements = function hideElements(prehidingSelector) {
    // if we have different events with the same
    // prehiding selector we don't want to recreate
    // the style tag
    if (styleNodes[prehidingSelector]) {
      return;
    }
    var nonce = getNonce();
    var attrs = _objectSpread2({}, nonce && {
      nonce: nonce
    });
    var props = {
      textContent: prehidingSelector + " " + HIDING_STYLE_DEFINITION
    };
    var node = createNode(STYLE, attrs, props);
    appendNode(document.head, node);
    styleNodes[prehidingSelector] = node;
  };
  var showElements = function showElements(prehidingSelector) {
    var node = styleNodes[prehidingSelector];
    if (node) {
      removeNode(node);
      delete styleNodes[prehidingSelector];
    }
  };
  var createHideContainers = function createHideContainers(logger) {
    return function (prehidingStyle) {
      if (!prehidingStyle) {
        return;
      }

      // If containers prehiding style has been added
      // by customer's prehiding snippet we don't
      // want to add the same node
      var node = getElementById(PREHIDING_ID);
      if (node) {
        return;
      }
      var nonce = getNonce();
      var attrs = _objectSpread2({
        id: PREHIDING_ID
      }, nonce && {
        nonce: nonce
      });
      var props = {
        textContent: prehidingStyle
      };
      var styleNode = createNode(STYLE, attrs, props);
      logger.logOnContentHiding({
        status: "hide-containers",
        message: "Prehiding style applied to hide containers.",
        logLevel: "info"
      });
      appendNode(document.head, styleNode);
    };
  };
  var createShowContainers = function createShowContainers(logger) {
    return function () {
      // If containers prehiding style exists
      // we will remove it
      var node = getElementById(PREHIDING_ID);
      if (!node) {
        return;
      }
      logger.logOnContentHiding({
        status: "show-containers",
        message: "Prehiding style removed to show containers.",
        logLevel: "info"
      });
      removeNode(node);
    };
  };

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var setText = (function (container, text, decorateProposition) {
    decorateProposition(container);
    container.textContent = text;
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var insertHtmlBefore = (function (container, html, decorateProposition) {
    var fragment = createFragment(html);
    addNonceToInlineStyleElements(fragment);
    var elements = getChildNodes(fragment);
    var scripts = getInlineScripts(fragment);
    var scriptsUrls = getRemoteScriptsUrls(fragment);
    loadImages(fragment);
    elements.forEach(function (element) {
      decorateProposition(element);
      insertBefore(container, element);
    });
    executeInlineScripts(container, scripts);
    return executeRemoteScripts(scriptsUrls);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var replaceHtml = (function (container, html, decorateProposition) {
    return insertHtmlBefore(container, html, decorateProposition).then(function () {
      removeNode(container);
    });
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var insertHtmlAfter = (function (container, html, decorateProposition) {
    var fragment = createFragment(html);
    addNonceToInlineStyleElements(fragment);
    var elements = getChildNodes(fragment);
    var scripts = getInlineScripts(fragment);
    var scriptsUrls = getRemoteScriptsUrls(fragment);
    loadImages(fragment);
    var insertionPoint = container;
    elements.forEach(function (element) {
      decorateProposition(element);
      insertAfter(insertionPoint, element);
      insertionPoint = element;
    });
    executeInlineScripts(container, scripts);
    return executeRemoteScripts(scriptsUrls);
  });

  var _excluded$3 = ["priority"];
  var setStyles = (function (container, styles, decorateProposition) {
    var priority = styles.priority,
      style = _objectWithoutProperties(styles, _excluded$3);
    Object.keys(style).forEach(function (key) {
      setStyle(container, key, style[key], priority);
    });
    decorateProposition(container);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var setAttributes = (function (container, attributes, decorateProposition) {
    Object.keys(attributes).forEach(function (key) {
      setAttribute(container, key, attributes[key]);
    });
    decorateProposition(container);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var swapImage = (function (container, url, decorateProposition) {
    if (!isImage(container)) {
      return;
    }

    // Start downloading the image
    loadImage(url);
    decorateProposition(container);

    // Remove "src" so there is no flicker
    removeAttribute(container, SRC);

    // Replace the image "src"
    setAttribute(container, SRC, url);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var rearrangeChildren = (function (container, _ref, decorateProposition) {
    var from = _ref.from,
      to = _ref.to;
    var children = getChildren(container);
    var elementFrom = children[from];
    var elementTo = children[to];
    if (!elementFrom || !elementTo) {
      // TODO: We will need to add logging
      // to ease troubleshooting
      return;
    }
    if (from < to) {
      insertAfter(elementTo, elementFrom);
    } else {
      insertBefore(elementTo, elementFrom);
    }
    decorateProposition(elementTo);
    decorateProposition(elementFrom);
  });

  /**
   * Renders content into a container element.
   *
   * @param {Object} params
   * @param {Element[]} params.containers
   * @param {string} params.content
   * @param {(element: Element) => void} params.decorateProposition
   * @param {(container: Element, content: string, decorateProposition: (element: Element) => void) => Promise<void>} params.renderFunc
   * @returns {Promise<void>} A promise that resolves when the content is rendered.
   */
  var renderContent = function renderContent(_ref) {
    var containers = _ref.containers,
      content = _ref.content,
      decorateProposition = _ref.decorateProposition,
      renderFunc = _ref.renderFunc,
      renderStatusHandler = _ref.renderStatusHandler,
      alwaysRender = _ref.alwaysRender;
    var executions = containers.filter(function (element) {
      return alwaysRender || renderStatusHandler.shouldRender(element);
    }).map(/*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(container) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return renderFunc(container, content, decorateProposition);
            case 1:
              renderStatusHandler.markAsRendered(container);
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    return Promise.all(executions);
  };

  /**
   * Creates an action function that renders content into a container element.
   *
   * @param {Function} renderFunc - The function that performs the rendering.
   * @param {boolean} alwaysRender - Whether to always render the content, even if it has already been rendered.
   */
  var createAction = function createAction(renderFunc) {
    var alwaysRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    /**
     * Renders content into a container element.
     *
     * @param {{ selector: string, prehidingSelector: string, content: string }} itemData - The item data containing the container selector and prehiding selector.
     * @param {(element: Element) => void} createDecorateProposition
     * @param {{ shouldRender: (element: Element) => boolean, markAsRendered: (element: Element) => void }} renderStatusHandler
     */
    return /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(itemData, decorateProposition, renderStatusHandler) {
        var containerSelector, prehidingSelector, content, containers;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              containerSelector = itemData.selector, prehidingSelector = itemData.prehidingSelector, content = itemData.content;
              hideElements(prehidingSelector);
              _context2.p = 1;
              _context2.n = 2;
              return awaitSelector(containerSelector, selectNodesWithEq);
            case 2:
              containers = _context2.v;
              renderContent({
                containers: containers,
                content: content,
                decorateProposition: decorateProposition,
                renderFunc: renderFunc,
                renderStatusHandler: renderStatusHandler,
                alwaysRender: alwaysRender
              });
            case 3:
              _context2.p = 3;
              showElements(prehidingSelector);
              return _context2.f(3);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[1,, 3, 4]]);
      }));
      return function (_x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }();
  };

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var addPxIfMissing = function addPxIfMissing(value) {
    var hasPx = ("" + value).endsWith("px");
    return hasPx ? value : value + "px";
  };

  var _excluded$2 = ["priority"];
  var move = (function (container, styles, decorateProposition) {
    var priority = styles.priority,
      style = _objectWithoutProperties(styles, _excluded$2);
    Object.keys(style).forEach(function (key) {
      var value = style[key];
      if (key === "left" || key === "top") {
        value = addPxIfMissing(value);
      }
      setStyle(container, key, value, priority);
    });
    decorateProposition(container);
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var collectInteractions$1 = (function (container, content, decorateProposition) {
    decorateProposition(container);
  });

  var _excluded$1 = ["priority"];
  var resize = (function (container, styles, decorateProposition) {
    var priority = styles.priority,
      style = _objectWithoutProperties(styles, _excluded$1);
    Object.keys(style).forEach(function (key) {
      var value = style[key];
      if (key === "width" || key === "height") {
        value = addPxIfMissing(value);
      }
      setStyle(container, key, value, priority);
    });
    decorateProposition(container);
  });

  var DOM_ACTION_SET_HTML = "setHtml";
  var DOM_ACTION_CUSTOM_CODE = "customCode";
  var DOM_ACTION_SET_TEXT = "setText";
  var DOM_ACTION_SET_ATTRIBUTE = "setAttribute";
  var DOM_ACTION_SET_IMAGE_SOURCE = "setImageSource";
  var DOM_ACTION_SET_STYLE = "setStyle";
  var DOM_ACTION_MOVE = "move";
  var DOM_ACTION_RESIZE = "resize";
  var DOM_ACTION_REARRANGE = "rearrange";
  var DOM_ACTION_REMOVE = "remove";
  var DOM_ACTION_INSERT_AFTER = "insertAfter";
  var DOM_ACTION_INSERT_BEFORE = "insertBefore";
  var DOM_ACTION_REPLACE_HTML = "replaceHtml";
  var DOM_ACTION_PREPEND_HTML = "prependHtml";
  var DOM_ACTION_APPEND_HTML = "appendHtml";
  var DOM_ACTION_CLICK = "click";
  var DOM_ACTION_COLLECT_INTERACTIONS = "collectInteractions";
  var initDomActionsModules = (function () {
    var _ref;
    return _ref = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, DOM_ACTION_SET_HTML, createAction(setHtml, true)), DOM_ACTION_CUSTOM_CODE, createAction(prependHtml, true)), DOM_ACTION_SET_TEXT, createAction(setText, true)), DOM_ACTION_SET_ATTRIBUTE, createAction(setAttributes, true)), DOM_ACTION_SET_IMAGE_SOURCE, createAction(swapImage, true)), DOM_ACTION_SET_STYLE, createAction(setStyles, true)), DOM_ACTION_MOVE, createAction(move, true)), DOM_ACTION_RESIZE, createAction(resize, true)), DOM_ACTION_REARRANGE, createAction(rearrangeChildren)), DOM_ACTION_REMOVE, createAction(removeNode, true)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, DOM_ACTION_INSERT_AFTER, createAction(insertHtmlAfter)), DOM_ACTION_INSERT_BEFORE, createAction(insertHtmlBefore)), DOM_ACTION_REPLACE_HTML, createAction(replaceHtml, true)), DOM_ACTION_PREPEND_HTML, createAction(prependHtml)), DOM_ACTION_APPEND_HTML, createAction(appendHtml)), DOM_ACTION_COLLECT_INTERACTIONS, createAction(collectInteractions$1, true));
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createCollect = (function (_ref) {
    var eventManager = _ref.eventManager,
      mergeDecisionsMeta = _ref.mergeDecisionsMeta;
    // Called when a decision is auto-rendered for the __view__ scope or a SPA view(display and empty display notification)
    return function (_ref2) {
      var _ref2$decisionsMeta = _ref2.decisionsMeta,
        decisionsMeta = _ref2$decisionsMeta === void 0 ? [] : _ref2$decisionsMeta,
        propositionAction = _ref2.propositionAction,
        _ref2$documentMayUnlo = _ref2.documentMayUnload,
        documentMayUnload = _ref2$documentMayUnlo === void 0 ? false : _ref2$documentMayUnlo,
        _ref2$eventType = _ref2.eventType,
        eventType = _ref2$eventType === void 0 ? DISPLAY : _ref2$eventType,
        _ref2$propositionEven = _ref2.propositionEventTypes,
        propositionEventTypes = _ref2$propositionEven === void 0 ? [getPropositionEventType(eventType)] : _ref2$propositionEven,
        viewName = _ref2.viewName,
        identityMap = _ref2.identityMap;
      var event = eventManager.createEvent();
      var data = {
        eventType: eventType,
        identityMap: identityMap
      };
      if (viewName) {
        data.web = {
          webPageDetails: {
            viewName: viewName
          }
        };
      }
      if (isNonEmptyArray(decisionsMeta)) {
        mergeDecisionsMeta(event, decisionsMeta, propositionEventTypes, propositionAction);
      }
      event.mergeXdm(data);
      if (documentMayUnload) {
        event.documentMayUnload();
      }
      return eventManager.sendEvent(event);
    };
  });

  var DECISIONS_HANDLE = "personalization:decisions";
  var createFetchDataHandler = (function (_ref) {
    var logger = _ref.logger,
      prehidingStyle = _ref.prehidingStyle,
      showContainers = _ref.showContainers,
      hideContainers = _ref.hideContainers,
      mergeQuery = _ref.mergeQuery,
      processPropositions = _ref.processPropositions,
      createProposition = _ref.createProposition,
      notificationHandler = _ref.notificationHandler,
      consent = _ref.consent;
    return function (_ref2) {
      var cacheUpdate = _ref2.cacheUpdate,
        personalizationDetails = _ref2.personalizationDetails,
        event = _ref2.event,
        onResponse = _ref2.onResponse,
        identityMap = _ref2.identityMap;
      var _consent$current = consent.current(),
        state = _consent$current.state,
        wasSet = _consent$current.wasSet;
      if (!(state === "out" && wasSet)) {
        if (personalizationDetails.isRenderDecisions()) {
          hideContainers(prehidingStyle);
        } else {
          showContainers();
        }
      }
      mergeQuery(event, personalizationDetails.createQueryDetails());

      // This needs to be called before the response so that future sendEvent calls
      // can know to wait until this request is complete for pending display notifications.
      var handleNotifications = notificationHandler(personalizationDetails.isRenderDecisions(), personalizationDetails.isSendDisplayEvent(), personalizationDetails.getViewName(), identityMap);
      onResponse(function (_ref3) {
        var response = _ref3.response;
        var handles = response.getPayloadsByType(DECISIONS_HANDLE);
        if (!isNonEmptyArray(handles)) {
          logger.logOnContentRendering({
            status: "no-offers",
            message: "No offers were returned.",
            logLevel: "info",
            detail: {
              query: personalizationDetails.createQueryDetails()
            }
          });
        }
        var propositions = handles.map(function (handle) {
          return createProposition(handle, true, false, identityMap);
        });
        var _groupBy = groupBy(propositions, function (p) {
            return p.getScopeType();
          }),
          _groupBy$page = _groupBy.page,
          pagePropositions = _groupBy$page === void 0 ? [] : _groupBy$page,
          _groupBy$view = _groupBy.view,
          viewPropositions = _groupBy$view === void 0 ? [] : _groupBy$view,
          _groupBy$proposition = _groupBy.proposition,
          nonRenderedPropositions = _groupBy$proposition === void 0 ? [] : _groupBy$proposition;
        var currentViewPropositions = cacheUpdate.update(viewPropositions);
        var render;
        var returnedPropositions;
        var returnedDecisions;
        if (personalizationDetails.isRenderDecisions()) {
          var _processPropositions = processPropositions([].concat(_toConsumableArray(pagePropositions), _toConsumableArray(currentViewPropositions)), nonRenderedPropositions);
          render = _processPropositions.render;
          returnedPropositions = _processPropositions.returnedPropositions;
          returnedDecisions = _processPropositions.returnedDecisions;
          if (isNonEmptyArray(pagePropositions)) {
            logger.logOnContentRendering({
              status: "rendering-started",
              message: "Started rendering propositions for page-wide scope.",
              logLevel: "info",
              detail: {
                scope: PAGE_WIDE_SCOPE,
                propositions: pagePropositions.map(function (proposition) {
                  return proposition.toJSON();
                })
              }
            });
          }
          if (isNonEmptyArray(currentViewPropositions)) {
            logger.logOnContentRendering({
              status: "rendering-started",
              message: "Rendering propositions started for view scope - " + personalizationDetails.getViewName() + ".",
              logLevel: "info",
              detail: {
                scope: personalizationDetails.getViewName(),
                propositions: currentViewPropositions.map(function (proposition) {
                  return proposition.toJSON();
                })
              }
            });
          }
          render().then(handleNotifications);

          // Render could take a long time especially if one of the renders
          // is waiting for html to appear on the page. We show the containers
          // immediately, and whatever renders quickly will not have flicker.
          // However, skip showing containers if there's only one page proposition with a single REDIRECT_ITEM
          var shouldSkipShowContainers = pagePropositions.length === 1 && pagePropositions[0].getItems().every(function (p) {
            return p.getSchema() === REDIRECT_ITEM;
          });
          if (!shouldSkipShowContainers) {
            showContainers();
          }
        } else {
          var _processPropositions2 = processPropositions([], [].concat(_toConsumableArray(pagePropositions), _toConsumableArray(currentViewPropositions), _toConsumableArray(nonRenderedPropositions)));
          returnedPropositions = _processPropositions2.returnedPropositions;
          returnedDecisions = _processPropositions2.returnedDecisions;
        }
        return {
          propositions: returnedPropositions,
          decisions: returnedDecisions
        };
      });
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var matchesSelectorWithEq = (function (selector, element) {
    if (isNotEqSelector(selector)) {
      return matchesSelector(selector, element);
    }

    // Using node selection vs matches selector, because of :eq()
    // Find all nodes using document as context
    var nodes = selectNodesWithEq(selector);
    var result = false;

    // Iterate through all the identified elements
    // and reference compare with element
    for (var i = 0; i < nodes.length; i += 1) {
      if (nodes[i] === element) {
        result = true;
        break;
      }
    }
    return result;
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var VIEW_SCOPE_TYPE = "view";
  var PAGE_SCOPE_TYPE = "page";
  var PROPOSITION_SCOPE_TYPE = "proposition";

  var _excluded = ["trackingLabel", "scopeType"];
  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var cleanMetas = function cleanMetas(metas) {
    return metas.map(function (meta) {
      meta.trackingLabel;
        meta.scopeType;
        var rest = _objectWithoutProperties(meta, _excluded);
      return rest;
    });
  };
  var dedupeMetas = function dedupeMetas(metas) {
    return metas.filter(function (meta, index) {
      var stringifiedMeta = JSON.stringify(meta);
      return index === metas.findIndex(function (innerMeta) {
        return JSON.stringify(innerMeta) === stringifiedMeta;
      });
    });
  };

  var getMetasIfMatches = function getMetasIfMatches(clickedElement, selector, getClickMetas) {
    var _document = document,
      documentElement = _document.documentElement;
    var element = clickedElement;
    var i = 0;
    while (element && element !== documentElement) {
      if (matchesSelectorWithEq(selector, element)) {
        var matchedMetas = getClickMetas(selector);
        var returnValue = {
          metas: matchedMetas
        };
        var foundMetaWithLabel = matchedMetas.find(function (meta) {
          return meta.trackingLabel;
        });
        if (foundMetaWithLabel) {
          returnValue.label = foundMetaWithLabel.trackingLabel;
          returnValue.weight = i;
        }
        var foundMetaWithScopeTypeView = matchedMetas.find(function (meta) {
          return meta.scopeType === VIEW_SCOPE_TYPE;
        });
        if (foundMetaWithScopeTypeView) {
          returnValue.viewName = foundMetaWithScopeTypeView.scope;
          returnValue.weight = i;
        }
        return returnValue;
      }
      element = element.parentNode;
      i += 1;
    }
    return {
      metas: null
    };
  };
  var collectClicks = (function (clickedElement, selectors, getClickMetas) {
    var result = [];
    var resultLabel = "";
    var resultLabelWeight = Number.MAX_SAFE_INTEGER;
    var resultViewName;
    var resultViewNameWeight = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < selectors.length; i += 1) {
      var _getMetasIfMatches = getMetasIfMatches(clickedElement, selectors[i], getClickMetas),
        metas = _getMetasIfMatches.metas,
        label = _getMetasIfMatches.label,
        weight = _getMetasIfMatches.weight,
        viewName = _getMetasIfMatches.viewName;
      if (!metas) {
        continue;
      }
      if (label && weight <= resultLabelWeight) {
        resultLabel = label;
        resultLabelWeight = weight;
      }
      if (viewName && weight <= resultViewNameWeight) {
        resultViewName = viewName;
        resultViewNameWeight = weight;
      }
      result.push.apply(result, _toConsumableArray(cleanMetas(metas)));
    }
    return {
      decisionsMeta: dedupeMetas(result),
      propositionActionLabel: resultLabel,
      propositionActionToken: undefined,
      viewName: resultViewName
    };
  });

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var isAuthoringModeEnabled = (function () {
    var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    return doc.location.href.indexOf("adobe_authoring_enabled") !== -1;
  });

  /* eslint-disable no-underscore-dangle */
  var mergeDecisionsMeta = function mergeDecisionsMeta(event, decisionsMeta, propositionEventTypes, propositionAction) {
    // Do not send a display notification with no decisions. Even empty view changes
    // should include a proposition.
    if (decisionsMeta.length === 0) {
      return;
    }
    var propositionEventType = {};
    propositionEventTypes.forEach(function (type) {
      propositionEventType[type] = EVENT_TYPE_TRUE;
    });
    var xdm = {
      _experience: {
        decisioning: {
          propositions: decisionsMeta,
          propositionEventType: propositionEventType
        }
      }
    };
    if (propositionAction) {
      xdm._experience.decisioning.propositionAction = propositionAction;
    }
    event.mergeXdm(xdm);
  };
  var mergeQuery = function mergeQuery(event, details) {
    event.mergeQuery({
      personalization: _objectSpread2({}, details)
    });
  };

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createPropositionAction = function createPropositionAction(clickLabel, clickToken) {
    if (!clickToken && !clickLabel) {
      return undefined;
    }
    var propositionAction = {};
    if (clickLabel) {
      propositionAction.label = clickLabel;
    }
    if (clickToken) {
      propositionAction.tokens = [clickToken];
    }
    return propositionAction;
  };
  var createOnClickHandler = (function (_ref) {
    var mergeDecisionsMeta = _ref.mergeDecisionsMeta,
      collectInteractions = _ref.collectInteractions,
      collectClicks = _ref.collectClicks,
      getInteractionMetas = _ref.getInteractionMetas,
      getClickMetas = _ref.getClickMetas,
      getClickSelectors = _ref.getClickSelectors,
      autoCollectPropositionInteractions = _ref.autoCollectPropositionInteractions;
    // Called when an element qualifying for conversion within an offer is clicked.
    return function (_ref2) {
      var event = _ref2.event,
        clickedElement = _ref2.clickedElement;
      var decisionsMeta = [];
      var propositionActionLabel;
      var propositionActionToken;
      var viewName;
      [collectInteractions(clickedElement, getInteractionMetas, autoCollectPropositionInteractions), collectClicks(clickedElement, getClickSelectors(), getClickMetas)].forEach(function (_ref3) {
        var curDecisionsMeta = _ref3.decisionsMeta,
          curPropositionActionLabel = _ref3.propositionActionLabel,
          curPropositionActionToken = _ref3.propositionActionToken,
          curViewName = _ref3.viewName;
        Array.prototype.push.apply(decisionsMeta, curDecisionsMeta);
        if (!propositionActionLabel && curPropositionActionLabel) {
          propositionActionLabel = curPropositionActionLabel;
        }
        if (!propositionActionToken && curPropositionActionToken) {
          propositionActionToken = curPropositionActionToken;
        }
        if (!viewName && curViewName) {
          viewName = curViewName;
        }
      });
      if (isNonEmptyArray(decisionsMeta)) {
        var xdm = {
          eventType: INTERACT
        };
        if (viewName) {
          xdm.web = {
            webPageDetails: {
              viewName: viewName
            }
          };
        }
        event.mergeXdm(xdm);
        mergeDecisionsMeta(event, decisionsMeta, [PropositionEventType.INTERACT], createPropositionAction(propositionActionLabel, propositionActionToken));
      }
    };
  });

  var createViewCacheManager = (function (_ref) {
    var createProposition = _ref.createProposition;
    var cacheUpdateCreatedAtLeastOnce = false;
    var viewStoragePromise = Promise.resolve({});
    var getViewPropositions = function getViewPropositions(viewStorage, viewName) {
      var viewPropositions = viewStorage[viewName.toLowerCase()];
      if (viewPropositions && viewPropositions.length > 0) {
        return viewPropositions;
      }
      var emptyViewProposition = createProposition({
        scope: viewName,
        scopeDetails: {
          characteristics: {
            scopeType: VIEW_SCOPE_TYPE
          }
        },
        items: [{
          schema: DEFAULT_CONTENT_ITEM
        }]
      }, false);
      return [emptyViewProposition];
    };

    // This should be called before making the request to experience edge.
    var createCacheUpdate = function createCacheUpdate(viewName) {
      var updateCacheDeferred = defer();
      cacheUpdateCreatedAtLeastOnce = true;

      // Additional updates will merge the new view propositions with the old.
      // i.e. if there are new "cart" view propositions they will overwrite the
      // old "cart" view propositions, but if there are no new "cart" view
      // propositions the old "cart" view propositions will remain.
      viewStoragePromise = viewStoragePromise.then(function (oldViewStorage) {
        return updateCacheDeferred.promise.then(function (newViewStorage) {
          return _objectSpread2(_objectSpread2({}, oldViewStorage), newViewStorage);
        })["catch"](function () {
          return oldViewStorage;
        });
      });
      return {
        update: function update(viewPropositions) {
          var viewPropositionsWithScope = viewPropositions.filter(function (proposition) {
            return proposition.getScope();
          });
          var newViewStorage = groupBy(viewPropositionsWithScope, function (proposition) {
            return proposition.getScope().toLowerCase();
          });
          updateCacheDeferred.resolve(newViewStorage);
          if (viewName) {
            return getViewPropositions(newViewStorage, viewName);
          }
          return [];
        },
        cancel: function cancel() {
          updateCacheDeferred.reject();
        }
      };
    };
    var getView = function getView(viewName) {
      return viewStoragePromise.then(function (viewStorage) {
        return getViewPropositions(viewStorage, viewName);
      });
    };
    var isInitialized = function isInitialized() {
      return cacheUpdateCreatedAtLeastOnce;
    };
    return {
      createCacheUpdate: createCacheUpdate,
      getView: getView,
      isInitialized: isInitialized
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createViewChangeHandler = (function (_ref) {
    var processPropositions = _ref.processPropositions,
      viewCache = _ref.viewCache,
      logger = _ref.logger;
    return function (_ref2) {
      var personalizationDetails = _ref2.personalizationDetails,
        onResponse = _ref2.onResponse;
      var returnedPropositions;
      var returnedDecisions;
      var viewName = personalizationDetails.getViewName();
      onResponse(function () {
        return {
          propositions: returnedPropositions,
          decisions: returnedDecisions
        };
      });
      return viewCache.getView(viewName).then(function (propositions) {
        var render;
        if (personalizationDetails.isRenderDecisions()) {
          var _processPropositions = processPropositions(propositions);
          render = _processPropositions.render;
          returnedPropositions = _processPropositions.returnedPropositions;
          returnedDecisions = _processPropositions.returnedDecisions;
          logger.logOnContentRendering({
            status: "rendering-started",
            message: "Started rendering propositions for view scope - " + viewName + ".",
            logLevel: "info",
            detail: {
              scope: viewName,
              propositions: propositions.map(function (proposition) {
                return proposition.toJSON();
              })
            }
          });
          return render();
        }
        var _processPropositions2 = processPropositions([], propositions);
        returnedPropositions = _processPropositions2.returnedPropositions;
        returnedDecisions = _processPropositions2.returnedDecisions;
        return [];
      });
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var metasToArray = function metasToArray(metas) {
    return Object.keys(metas).map(function (key) {
      return _objectSpread2({
        id: key
      }, metas[key]);
    });
  };
  var createClickStorage = (function () {
    var clickStorage = {};
    var storeClickMeta = function storeClickMeta(_ref) {
      var selector = _ref.selector,
        _ref$meta = _ref.meta,
        id = _ref$meta.id,
        scope = _ref$meta.scope,
        scopeDetails = _ref$meta.scopeDetails,
        trackingLabel = _ref$meta.trackingLabel,
        scopeType = _ref$meta.scopeType;
      if (!clickStorage[selector]) {
        clickStorage[selector] = {};
      }
      clickStorage[selector][id] = {
        scope: scope,
        scopeDetails: scopeDetails,
        trackingLabel: trackingLabel,
        scopeType: scopeType
      };
    };
    var getClickSelectors = function getClickSelectors() {
      return Object.keys(clickStorage);
    };
    var getClickMetas = function getClickMetas(selector) {
      var metas = clickStorage[selector];
      if (!metas) {
        return {};
      }
      return metasToArray(clickStorage[selector]);
    };
    return {
      storeClickMeta: storeClickMeta,
      getClickSelectors: getClickSelectors,
      getClickMetas: getClickMetas
    };
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createInteractionStorage = (function () {
    var clickMetaStorage = {};
    /*
          clickMetaStorage example.
          `abc' and 'def' are proposition IDs.  1 is an interact id.  The object with an id, scope and scopeDetails
          is the notification.
             {
              1: {
                "abc": { "id": "abc", "scope": "proposition", "scopeDetails": {} },
                "def": { "id": "def", "scope": "proposition", "scopeDetails": {} }
              }
            }
    */

    var clickItemStorage = {};
    /*
          clickItemStorage example.
          `abc' and 'def' are proposition IDs.  1 is an interact id.  The sets contain proposition-item IDs which
          are used in notifications that are sent.
             {
              1: {
                abc: new Set(["itemAAA", "itemCCC"]),
                def: new Set(["itemEEE", "itemFFF"]),
              },
            }
    */

    var storeInteractionMeta = function storeInteractionMeta(propositionId, itemId, scopeType, notification, interactId) {
      interactId = parseInt(interactId, 10);
      if (!clickMetaStorage[interactId]) {
        clickMetaStorage[interactId] = {};
        clickItemStorage[interactId] = {};
      }
      if (!clickItemStorage[interactId][propositionId]) {
        clickItemStorage[interactId][propositionId] = new Set();
      }
      clickItemStorage[interactId][propositionId].add(itemId);
      clickMetaStorage[interactId][propositionId] = _objectSpread2(_objectSpread2({}, notification), {}, {
        scopeType: scopeType
      });
    };
    var getInteractionMetas = function getInteractionMetas(interactIds) {
      if (!Array.isArray(interactIds) || interactIds.length === 0) {
        return [];
      }
      return Object.values(interactIds.map(function (value) {
        return parseInt(value, 10);
      }).reduce(function (metaMap, interactId) {
        Object.keys(clickMetaStorage[interactId] || {}).forEach(function (propositionId) {
          if (!metaMap[propositionId]) {
            metaMap[propositionId] = {
              proposition: clickMetaStorage[interactId][propositionId],
              items: new Set()
            };
          }
          metaMap[propositionId].items = new Set([].concat(_toConsumableArray(metaMap[propositionId].items), _toConsumableArray(clickItemStorage[interactId][propositionId])));
        });
        return metaMap;
      }, {})).map(function (_ref) {
        var proposition = _ref.proposition,
          items = _ref.items;
        return _objectSpread2(_objectSpread2({}, proposition), {}, {
          items: Array.from(items).map(function (id) {
            return {
              id: id
            };
          })
        });
      });
    };
    return {
      storeInteractionMeta: storeInteractionMeta,
      getInteractionMetas: getInteractionMetas
    };
  });

  var isInteractionTrackingItem = function isInteractionTrackingItem(schema, actionType) {
    return schema === JSON_CONTENT_ITEM && actionType === DOM_ACTION_COLLECT_INTERACTIONS;
  };
  var SUPPORTED_SCHEMAS = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, DOM_ACTION, function () {
    return true;
  }), HTML_CONTENT_ITEM, function () {
    return true;
  }), JSON_CONTENT_ITEM, isInteractionTrackingItem), MESSAGE_IN_APP, function () {
    return true;
  }), DEFAULT_CONTENT_ITEM, function () {
    return true;
  });
  var filterItemsPredicate = function filterItemsPredicate(schema, actionType) {
    return typeof SUPPORTED_SCHEMAS[schema] === "function" && SUPPORTED_SCHEMAS[schema](schema, actionType);
  };
  var createApplyPropositions = (function (_ref) {
    var processPropositions = _ref.processPropositions,
      createProposition = _ref.createProposition,
      renderedPropositions = _ref.renderedPropositions,
      viewCache = _ref.viewCache;
    var updatePropositionItems = function updatePropositionItems(_ref2) {
      var items = _ref2.items,
        _ref2$metadataForScop = _ref2.metadataForScope,
        metadataForScope = _ref2$metadataForScop === void 0 ? {} : _ref2$metadataForScop;
      var actionType = metadataForScope.actionType,
        selector = metadataForScope.selector;
      return items.filter(function (item) {
        return filterItemsPredicate(item.schema, actionType);
      }).map(function (item) {
        var schema = item.schema;
        if (schema !== HTML_CONTENT_ITEM && !isInteractionTrackingItem(schema, actionType)) {
          return _objectSpread2({}, item);
        }
        if (!isEmptyObject(metadataForScope)) {
          return _objectSpread2(_objectSpread2({}, item), {}, {
            schema: isInteractionTrackingItem(schema, actionType) ? DOM_ACTION : schema,
            data: _objectSpread2(_objectSpread2({}, item.data), {}, {
              selector: selector,
              type: actionType
            })
          });
        }
        return undefined;
      }).filter(function (item) {
        return item;
      });
    };
    var filterPropositionsPredicate = function filterPropositionsPredicate(proposition) {
      return !(proposition.scope === PAGE_WIDE_SCOPE && proposition.renderAttempted);
    };
    var preparePropositions = function preparePropositions(_ref3) {
      var propositions = _ref3.propositions,
        metadata = _ref3.metadata;
      return propositions.filter(filterPropositionsPredicate).map(function (proposition) {
        if (isNonEmptyArray(proposition.items)) {
          var id = proposition.id,
            scope = proposition.scope,
            scopeDetails = proposition.scopeDetails;
          return {
            id: id,
            scope: scope,
            scopeDetails: scopeDetails,
            items: updatePropositionItems({
              items: proposition.items,
              metadataForScope: metadata[proposition.scope]
            })
          };
        }
        return proposition;
      }).filter(function (proposition) {
        return isNonEmptyArray(proposition.items);
      });
    };
    return function (_ref4) {
      var _ref4$propositions = _ref4.propositions,
        propositions = _ref4$propositions === void 0 ? [] : _ref4$propositions,
        _ref4$metadata = _ref4.metadata,
        metadata = _ref4$metadata === void 0 ? {} : _ref4$metadata,
        viewName = _ref4.viewName;
      // We need to immediately call concat so that subsequent sendEvent
      // calls will wait for applyPropositions to complete before executing.
      var renderedPropositionsDeferred = defer();
      renderedPropositions.concat(renderedPropositionsDeferred.promise);
      var propositionsToExecute = preparePropositions({
        propositions: propositions,
        metadata: metadata
      }).map(function (proposition) {
        return createProposition(proposition);
      });
      return Promise.resolve().then(function () {
        if (viewName) {
          return viewCache.getView(viewName);
        }
        return [];
      }).then(function (additionalPropositions) {
        var _processPropositions = processPropositions([].concat(_toConsumableArray(propositionsToExecute), _toConsumableArray(additionalPropositions))),
          render = _processPropositions.render,
          returnedPropositions = _processPropositions.returnedPropositions;
        render().then(renderedPropositionsDeferred.resolve);
        return {
          propositions: returnedPropositions
        };
      });
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createGetPageLocation = (function (_ref) {
    var window = _ref.window;
    return function () {
      return window.location;
    };
  });

  /*
  Copyright 2022 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createSetTargetMigration = (function (_ref) {
    var targetMigrationEnabled = _ref.targetMigrationEnabled;
    if (targetMigrationEnabled) {
      return function (request) {
        request.getPayload().mergeMeta({
          target: {
            migration: true
          }
        });
      };
    }
    return noop;
  });

  var TARGET_BODY_SELECTOR = "BODY > *:eq(0)";
  var remapCustomCodeOffers = (function (action) {
    var selector = action.selector,
      type = action.type;
    if (type !== DOM_ACTION_CUSTOM_CODE) {
      return action;
    }
    if (selector !== TARGET_BODY_SELECTOR) {
      return action;
    }
    return _objectSpread2(_objectSpread2({}, action), {
      selector: "BODY"
    });
  });

  var HEAD_TAGS_SELECTOR = "SCRIPT,LINK,STYLE";
  var filterHeadContent = function filterHeadContent(content) {
    var container = createFragment(content);
    var headNodes = selectNodes(HEAD_TAGS_SELECTOR, container);
    return headNodes.map(function (node) {
      return node.outerHTML;
    }).join("");
  };
  var remapHeadOffers = (function (action) {
    var result = _objectSpread2({}, action);
    var content = result.content,
      selector = result.selector;

    // Custom code actions have a "HEAD" selector, but are handled differently.
    if (result.type === DOM_ACTION_CUSTOM_CODE) {
      return result;
    }
    if (isBlankString(content)) {
      return result;
    }
    if (selector == null) {
      return result;
    }
    var container = selectNodesWithEq(selector);
    if (!is(container[0], HEAD)) {
      return result;
    }
    result.type = DOM_ACTION_APPEND_HTML;
    result.content = filterHeadContent(content);
    return result;
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createPreprocess = (function (preprocessors) {
    return function (action) {
      if (!action) {
        return action;
      }
      return preprocessors.reduce(function (processed, fn) {
        return _objectSpread2(_objectSpread2({}, processed), fn(processed));
      }, action);
    };
  });

  var injectCreateProposition = (function (_ref) {
    var preprocess = _ref.preprocess,
      isPageWideSurface = _ref.isPageWideSurface;
    var createItem = function createItem(item, proposition) {
      var id = item.id,
        schema = item.schema,
        data = item.data,
        _item$characteristics = item.characteristics,
        _item$characteristics2 = _item$characteristics === void 0 ? {} : _item$characteristics,
        trackingLabel = _item$characteristics2.trackingLabel;
      var schemaType = data ? data.type : undefined;
      var processedData = preprocess(data);
      return {
        getId: function getId() {
          return id;
        },
        getSchema: function getSchema() {
          return schema;
        },
        getSchemaType: function getSchemaType() {
          return schemaType;
        },
        getData: function getData() {
          return processedData;
        },
        getProposition: function getProposition() {
          return proposition;
        },
        getTrackingLabel: function getTrackingLabel() {
          return trackingLabel;
        },
        getOriginalItem: function getOriginalItem() {
          return item;
        },
        toString: function toString() {
          return JSON.stringify(item);
        },
        toJSON: function toJSON() {
          return item;
        }
      };
    };
    return function (payload) {
      var visibleInReturnedItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _shouldSuppressDisplay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var identityMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var id = payload.id,
        scope = payload.scope,
        scopeDetails = payload.scopeDetails,
        _payload$items = payload.items,
        items = _payload$items === void 0 ? [] : _payload$items;
      var _ref2 = scopeDetails || {},
        _ref2$characteristics = _ref2.characteristics,
        _ref2$characteristics2 = _ref2$characteristics === void 0 ? {} : _ref2$characteristics,
        scopeType = _ref2$characteristics2.scopeType;
      return {
        getScope: function getScope() {
          return scope;
        },
        getScopeType: function getScopeType() {
          if (scope === PAGE_WIDE_SCOPE || isPageWideSurface(scope)) {
            return PAGE_SCOPE_TYPE;
          }
          if (scopeType === VIEW_SCOPE_TYPE) {
            return VIEW_SCOPE_TYPE;
          }
          return PROPOSITION_SCOPE_TYPE;
        },
        getItems: function getItems() {
          var _this = this;
          return items.map(function (item) {
            return createItem(item, _this);
          });
        },
        getNotification: function getNotification() {
          return {
            id: id,
            scope: scope,
            scopeDetails: scopeDetails
          };
        },
        getId: function getId() {
          return id;
        },
        getIdentityMap: function getIdentityMap() {
          return identityMap;
        },
        toJSON: function toJSON() {
          return payload;
        },
        shouldSuppressDisplay: function shouldSuppressDisplay() {
          return _shouldSuppressDisplay;
        },
        addToReturnValues: function addToReturnValues(propositions, decisions, includedItems, renderAttempted) {
          if (visibleInReturnedItems) {
            propositions.push(_objectSpread2(_objectSpread2({}, payload), {}, {
              items: includedItems.map(function (i) {
                return i.getOriginalItem();
              }),
              renderAttempted: renderAttempted
            }));
            if (!renderAttempted) {
              decisions.push(_objectSpread2(_objectSpread2({}, payload), {}, {
                items: includedItems.map(function (i) {
                  return i.getOriginalItem();
                })
              }));
            }
          }
        }
      };
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createAsyncArray = (function () {
    var latest = Promise.resolve([]);
    return {
      concat: function concat(promise) {
        latest = latest.then(function (existingPropositions) {
          return promise.then(function (newPropositions) {
            return existingPropositions.concat(newPropositions);
          })["catch"](function () {
            return existingPropositions;
          });
        });
      },
      /**
       * Clears the saved propositions, waiting until the next propositions are resolved and available.
       *
       * @returns {Promise<Array>} A promise that resolves to the latest propositions.
       */
      clear: function clear() {
        var oldLatest = latest;
        latest = Promise.resolve([]);
        return oldLatest;
      }
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var processDefaultContent = (function () {
    return {
      render: noop,
      setRenderAttempted: true,
      includeInNotification: true
    };
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var ALWAYS = "always";
  var NEVER = "never";
  var DECORATED_ELEMENTS_ONLY = "decoratedElementsOnly";
  var PROPOSITION_INTERACTION_TYPES = [ALWAYS, NEVER, DECORATED_ELEMENTS_ONLY];

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var INTERACT_ID_DATA_ATTRIBUTE = "data-aep-interact-id";
  var CLICK_LABEL_DATA_ATTRIBUTE = "data-aep-click-label";
  var CLICK_TOKEN_DATA_ATTRIBUTE = "data-aep-click-token";
  var lastInteractId = 0;
  var getInteractId = function getInteractId(propositionId, existingInteractId) {
    if (existingInteractId) {
      return parseInt(existingInteractId, 10);
    }
    return ++lastInteractId;
  };
  var interactionTrackingSupported = function interactionTrackingSupported(autoCollectPropositionInteractions, decisionProvider) {
    if (!autoCollectPropositionInteractions) {
      return false;
    }
    if (!autoCollectPropositionInteractions[decisionProvider]) {
      return false;
    }
    return [ALWAYS, DECORATED_ELEMENTS_ONLY].includes(autoCollectPropositionInteractions[decisionProvider]);
  };
  var createDecorateProposition = function createDecorateProposition(autoCollectPropositionInteractions, type, propositionId, itemId, trackingLabel, scopeType, notification, storeInteractionMeta) {
    var _notification$scopeDe = notification.scopeDetails,
      scopeDetails = _notification$scopeDe === void 0 ? {} : _notification$scopeDe;
    var decisionProvider = scopeDetails.decisionProvider;
    if (!interactionTrackingSupported(autoCollectPropositionInteractions, decisionProvider) && type !== DOM_ACTION_CLICK) {
      return noop;
    }
    return function (element) {
      if (!element.tagName) {
        return;
      }
      var interactId = getInteractId(propositionId, getAttribute(element, INTERACT_ID_DATA_ATTRIBUTE));
      storeInteractionMeta(propositionId, itemId, scopeType, notification, interactId);
      setAttribute(element, INTERACT_ID_DATA_ATTRIBUTE, interactId);
      if (trackingLabel && !getAttribute(element, CLICK_LABEL_DATA_ATTRIBUTE)) {
        setAttribute(element, CLICK_LABEL_DATA_ATTRIBUTE, trackingLabel);
      }
    };
  };

  /*
  Copyright 2025 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  /**
   * Creates a handler to manage the rendering status of elements in personalization
   *
   * @param {string} scopeType - The type of scope (e.g. 'view', 'page')
   * @param {string} itemId - The unique identifier for the item being rendered
   */
  var createRenderStatusHandler = (function (scopeType, itemId) {
    // We only care about tracking renders for view scope
    if (scopeType !== VIEW_SCOPE_TYPE) {
      return {
        shouldRender: function shouldRender() {
          return true;
        },
        markAsRendered: function markAsRendered() {}
      };
    }
    return {
      /**
       * Determines if an element should be rendered based on scopeType and previous render status
       *
       * @param {Element|null} propositionContainer - The DOM element to check
       * @returns {boolean} True if the element should be rendered, false otherwise
       */
      shouldRender: function shouldRender(propositionContainer) {
        var _propositionContainer;
        if (!propositionContainer) {
          return true;
        }
        var previouslyRendered = ((_propositionContainer = propositionContainer.dataset.adobePropositionIds) !== null && _propositionContainer !== void 0 ? _propositionContainer : "").split(",");
        return !previouslyRendered.includes(itemId);
      },
      /**
       * Marks an element as rendered by setting a data attribute
       *
       * @param {Element} propositionContainer - The DOM element to mark as rendered
       * @returns {void}
       */
      markAsRendered: function markAsRendered(propositionContainer) {
        var _propositionContainer2;
        var previouslyRendered = ((_propositionContainer2 = propositionContainer.dataset.adobePropositionIds) !== null && _propositionContainer2 !== void 0 ? _propositionContainer2 : "").split(",");
        if (!previouslyRendered.includes(itemId)) {
          previouslyRendered.push(itemId);
        }
        propositionContainer.dataset.adobePropositionIds = previouslyRendered.sort().join(",");
      }
    };
  });

  var createProcessDomAction = (function (_ref) {
    var modules = _ref.modules,
      logger = _ref.logger,
      storeInteractionMeta = _ref.storeInteractionMeta,
      storeClickMeta = _ref.storeClickMeta,
      autoCollectPropositionInteractions = _ref.autoCollectPropositionInteractions;
    return function (item) {
      var _ref2 = item.getData() || {},
        type = _ref2.type,
        selector = _ref2.selector;
      if (!type) {
        logger.warn("Invalid DOM action data: missing type.", item.getData());
        return {
          setRenderAttempted: false,
          includeInNotification: false
        };
      }
      if (type === DOM_ACTION_CLICK) {
        if (!selector) {
          logger.warn("Invalid DOM action data: missing selector.", item.getData());
          return {
            setRenderAttempted: false,
            includeInNotification: false
          };
        }
        storeClickMeta({
          selector: selector,
          meta: _objectSpread2(_objectSpread2({}, item.getProposition().getNotification()), {}, {
            trackingLabel: item.getTrackingLabel(),
            scopeType: item.getProposition().getScopeType()
          })
        });
        return {
          setRenderAttempted: true,
          includeInNotification: false
        };
      }
      if (!modules[type]) {
        logger.warn("Invalid DOM action data: unknown type.", item.getData());
        return {
          setRenderAttempted: false,
          includeInNotification: false
        };
      }
      var renderStatusHandler = createRenderStatusHandler(item.getProposition().getScopeType(), item.getId());
      var decorateProposition = createDecorateProposition(autoCollectPropositionInteractions, type, item.getProposition().getId(), item.getId(), item.getTrackingLabel(), item.getProposition().getScopeType(), item.getProposition().getNotification(), storeInteractionMeta);
      return {
        render: function render() {
          return modules[type](item.getData(), decorateProposition, renderStatusHandler);
        },
        setRenderAttempted: true,
        includeInNotification: true
      };
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createProcessHtmlContent = (function (_ref) {
    var modules = _ref.modules,
      logger = _ref.logger,
      storeInteractionMeta = _ref.storeInteractionMeta,
      autoCollectPropositionInteractions = _ref.autoCollectPropositionInteractions;
    return function (item) {
      var _ref2 = item.getData() || {},
        type = _ref2.type,
        selector = _ref2.selector;
      if (!selector || !type) {
        return {
          setRenderAttempted: false,
          includeInNotification: false
        };
      }
      if (!modules[type]) {
        logger.warn("Invalid HTML content data", item.getData());
        return {
          setRenderAttempted: false,
          includeInNotification: false
        };
      }
      var decorateProposition = createDecorateProposition(autoCollectPropositionInteractions, type, item.getProposition().getId(), item.getId(), item.getTrackingLabel(), item.getProposition().getScopeType(), item.getProposition().getNotification(), storeInteractionMeta);
      var renderStatusHandler = createRenderStatusHandler(item.getProposition().getScopeType(), item.getId());
      return {
        render: function render() {
          return modules[type](item.getData(), decorateProposition, renderStatusHandler);
        },
        setRenderAttempted: true,
        includeInNotification: true
      };
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var REDIRECT_HIDING_ELEMENT = "BODY";
  var createProcessRedirect = (function (_ref) {
    var logger = _ref.logger,
      executeRedirect = _ref.executeRedirect,
      collect = _ref.collect;
    return function (item) {
      var _ref2 = item.getData() || {},
        content = _ref2.content;
      if (!content) {
        logger.warn("Invalid Redirect data", item.getData());
        return {};
      }
      var render = function render() {
        hideElements(REDIRECT_HIDING_ELEMENT);
        return collect({
          decisionsMeta: [item.getProposition().getNotification()],
          documentMayUnload: true,
          identityMap: item.getProposition().getIdentityMap()
        }).then(function () {
          logger.logOnContentRendering({
            status: "rendering-redirect",
            detail: {
              propositionDetails: item.getProposition().getNotification(),
              redirect: content
            },
            message: "Redirect action " + item.toString() + " executed.",
            logLevel: "info"
          });
          return executeRedirect(content);
          // Execute redirect will never resolve. If there are bottom of page events that are waiting
          // for display notifications from this request, they will never run because this promise will
          // not resolve. This is intentional because we don't want to run bottom of page events if
          // there is a redirect.
        })["catch"](function (error) {
          showElements(REDIRECT_HIDING_ELEMENT);
          throw error;
        });
      };
      return {
        render: render,
        setRenderAttempted: true,
        onlyRenderThis: true
      };
    };
  });

  var createProcessPropositions = (function (_ref) {
    var schemaProcessors = _ref.schemaProcessors,
      logger = _ref.logger;
    var wrapRenderWithLogging = function wrapRenderWithLogging(render, item) {
      return function () {
        return Promise.resolve().then(render).then(function () {
          if (logger.enabled) {
            logger.info("Action " + item.toString() + " executed.");
          }
          return item.toJSON();
        })["catch"](function (error) {
          var message = error.message,
            stack = error.stack;
          var warning = "Failed to execute action " + item.toString() + ". " + message + " " + stack;
          logger.logOnContentRendering({
            status: "rendering-failed",
            detail: {
              propositionDetails: item.getProposition().getNotification(),
              item: item.toJSON()
            },
            error: error,
            message: warning,
            logLevel: "warn"
          });
          return undefined;
        });
      };
    };
    var renderItems = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(renderers, meta) {
        var results, successes;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return Promise.allSettled(renderers.map(function (renderer) {
                return renderer();
              }));
            case 1:
              results = _context.v;
              successes = results.filter(function (result) {
                return result.status === "fulfilled";
              }).map(function (result) {
                return result.value;
              }); // as long as at least one renderer succeeds, we want to add the notification
              // to the display notifications
              if (!(meta && isNonEmptyArray(successes))) {
                _context.n = 2;
                break;
              }
              return _context.a(2, _objectSpread2(_objectSpread2({}, meta), {}, {
                items: successes
              }));
            case 2:
              return _context.a(2, undefined);
          }
        }, _callee);
      }));
      return function renderItems(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    var processItem = function processItem(item) {
      var processor = schemaProcessors[item.getSchema()];
      if (!processor) {
        return {};
      }
      return processor(item);
    };
    var processItems = function processItems(_ref3) {
      var existingRenderers = _ref3.renderers,
        existingReturnedPropositions = _ref3.returnedPropositions,
        existingReturnedDecisions = _ref3.returnedDecisions,
        items = _ref3.items,
        proposition = _ref3.proposition;
      var renderers = _toConsumableArray(existingRenderers);
      var returnedPropositions = _toConsumableArray(existingReturnedPropositions);
      var returnedDecisions = _toConsumableArray(existingReturnedDecisions);
      var renderedItems = [];
      var nonRenderedItems = [];
      var itemRenderers = [];
      var atLeastOneWithNotification = false;
      var render;
      var setRenderAttempted;
      var includeInNotification;
      var onlyRenderThis = false;
      var i = 0;
      var item;
      while (items.length > i) {
        item = items[i];
        var _processItem = processItem(item);
        render = _processItem.render;
        setRenderAttempted = _processItem.setRenderAttempted;
        includeInNotification = _processItem.includeInNotification;
        onlyRenderThis = _processItem.onlyRenderThis;
        if (onlyRenderThis) {
          returnedPropositions = [];
          returnedDecisions = [];
          if (setRenderAttempted) {
            renderedItems = [item];
            nonRenderedItems = [];
          } else {
            renderedItems = [];
            nonRenderedItems = [item];
          }
          renderers = [];
          itemRenderers = [render];
          atLeastOneWithNotification = includeInNotification;
          break;
        }
        if (render) {
          itemRenderers.push(wrapRenderWithLogging(render, item));
        }
        if (includeInNotification) {
          atLeastOneWithNotification = true;
        }
        if (setRenderAttempted) {
          renderedItems.push(item);
        } else {
          nonRenderedItems.push(item);
        }
        i += 1;
      }
      if (itemRenderers.length > 0) {
        var meta = atLeastOneWithNotification ? proposition.getNotification() : undefined;
        renderers.push(function () {
          return renderItems(itemRenderers, meta);
        });
      } else if (atLeastOneWithNotification) {
        renderers.push(function () {
          return Promise.resolve(proposition.getNotification());
        });
      }
      if (renderedItems.length > 0) {
        proposition.addToReturnValues(returnedPropositions, returnedDecisions, renderedItems, true);
      }
      if (nonRenderedItems.length > 0) {
        proposition.addToReturnValues(returnedPropositions, returnedDecisions, nonRenderedItems, false);
      }
      return {
        renderers: renderers,
        returnedPropositions: returnedPropositions,
        returnedDecisions: returnedDecisions,
        onlyRenderThis: onlyRenderThis
      };
    };
    return function (renderPropositions) {
      var nonRenderPropositions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var renderers = [];
      var returnedPropositions = [];
      var returnedDecisions = [];
      var onlyRenderThis;
      var i = 0;
      var proposition;
      var items;
      while (renderPropositions.length > i) {
        proposition = renderPropositions[i];
        items = proposition.getItems();
        var _processItems = processItems({
          renderers: renderers,
          returnedPropositions: returnedPropositions,
          returnedDecisions: returnedDecisions,
          items: items,
          proposition: proposition
        });
        renderers = _processItems.renderers;
        returnedPropositions = _processItems.returnedPropositions;
        returnedDecisions = _processItems.returnedDecisions;
        onlyRenderThis = _processItems.onlyRenderThis;
        if (onlyRenderThis) {
          break;
        }
        i += 1;
      }
      if (onlyRenderThis) {
        // if onlyRenderThis is true, that means returnedPropositions and returnedDecisions
        // only contains the proposition that triggered only rendering this. We need to
        // add the other propositions to the returnedPropositions and returnedDecisions.
        renderPropositions.forEach(function (p, index) {
          if (index !== i) {
            p.addToReturnValues(returnedPropositions, returnedDecisions, p.getItems(), false);
          }
        });
      }
      nonRenderPropositions.forEach(function (p) {
        p.addToReturnValues(returnedPropositions, returnedDecisions, p.getItems(), false);
      });
      var render = function render() {
        return Promise.all(renderers.map(function (renderer) {
          return renderer();
        })).then(function (metas) {
          var propositions = metas.filter(function (meta) {
            return meta;
          });
          var renderedPropositions = propositions.map(function (prop) {
            var id = prop.id,
              scope = prop.scope,
              scopeDetails = prop.scopeDetails;
            return {
              id: id,
              scope: scope,
              scopeDetails: scopeDetails
            };
          });
          if (isNonEmptyArray(propositions)) {
            var propsByScope = groupBy(propositions, function (p) {
              return p.scope;
            });
            logger.logOnContentRendering({
              status: "rendering-succeeded",
              detail: _objectSpread2({}, propsByScope),
              message: "Scopes: " + JSON.stringify(propsByScope) + " successfully executed.",
              logLevel: "info"
            });
          }
          return renderedPropositions;
        });
      };
      return {
        returnedPropositions: returnedPropositions,
        returnedDecisions: returnedDecisions,
        render: render
      };
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  // When multiple In-App messages propositions are returned, we need to show only one
  // of them (the one with lowest rank). This function keep track of the number of
  // times it was called. It returns false for the first proposition that contains
  // In-App messages items, true afterwards.
  var createShouldSuppressDisplay = function createShouldSuppressDisplay() {
    var count = 0;
    return function (proposition) {
      var _proposition$items = proposition.items,
        items = _proposition$items === void 0 ? [] : _proposition$items;
      if (!items.some(function (item) {
        return item.schema === MESSAGE_IN_APP;
      })) {
        return false;
      }
      count += 1;
      return count > 1;
    };
  };
  var createOnDecisionHandler = (function (_ref) {
    var processPropositions = _ref.processPropositions,
      createProposition = _ref.createProposition,
      notificationHandler = _ref.notificationHandler;
    return function (_ref2) {
      var renderDecisions = _ref2.renderDecisions,
        propositions = _ref2.propositions,
        event = _ref2.event,
        _ref2$personalization = _ref2.personalization,
        personalization = _ref2$personalization === void 0 ? {} : _ref2$personalization,
        identityMap = _ref2.identityMap;
      if (!renderDecisions) {
        return Promise.resolve();
      }
      var _personalization$send = personalization.sendDisplayEvent,
        sendDisplayEvent = _personalization$send === void 0 ? true : _personalization$send;
      var viewName = event ? event.getViewName() : undefined;
      var shouldSuppressDisplay = createShouldSuppressDisplay();
      var propositionsToExecute = propositions.map(function (proposition) {
        return createProposition(proposition, true, shouldSuppressDisplay(proposition), identityMap);
      });
      var _processPropositions = processPropositions(propositionsToExecute),
        render = _processPropositions.render,
        returnedPropositions = _processPropositions.returnedPropositions;
      var handleNotifications = notificationHandler(renderDecisions, sendDisplayEvent, viewName, identityMap);
      var propositionsById = propositionsToExecute.reduce(function (tot, proposition) {
        tot[proposition.getId()] = proposition;
        return tot;
      }, {});
      render().then(function (decisionsMeta) {
        var decisionsMetaDisplay = decisionsMeta.filter(function (meta) {
          return !propositionsById[meta.id].shouldSuppressDisplay();
        });
        var decisionsMetaSuppressed = decisionsMeta.filter(function (meta) {
          return propositionsById[meta.id].shouldSuppressDisplay();
        });
        handleNotifications(decisionsMetaDisplay, decisionsMetaSuppressed);
      });
      return Promise.resolve({
        propositions: returnedPropositions
      });
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var TEXT_HTML = "text/html";
  var APPLICATION_JSON = "application/json";

  var DEFAULT_CONTENT = "defaultContent";
  var expectedProps = ["content", "contentType"];
  var expectedContentProps = ["mobileParameters", "webParameters", "html"];
  var isValidInAppMessage = function isValidInAppMessage(data, logger) {
    for (var i = 0; i < expectedProps.length; i += 1) {
      var prop = expectedProps[i];
      if (!Object.prototype.hasOwnProperty.call(data, prop)) {
        logger.warn("Invalid in-app message data: missing property '" + prop + "'.", data);
        return false;
      }
    }
    var content = data.content,
      contentType = data.contentType;
    if (contentType === APPLICATION_JSON) {
      for (var _i = 0; _i < expectedContentProps.length; _i += 1) {
        var _prop = expectedContentProps[_i];
        if (!Object.prototype.hasOwnProperty.call(content, _prop)) {
          logger.warn("Invalid in-app message data.content: missing property '" + _prop + "'.", data);
          return false;
        }
      }
    }
    return true;
  };
  var createProcessInAppMessage = (function (_ref) {
    var modules = _ref.modules,
      logger = _ref.logger;
    return function (item) {
      var data = item.getData();
      var proposition = item.getProposition();
      var meta = _objectSpread2({}, proposition.getNotification());
      var shouldSuppressDisplay = proposition.shouldSuppressDisplay();
      if (!data) {
        logger.warn("Invalid in-app message data: undefined.", data);
        return {};
      }
      var _data$type = data.type,
        type = _data$type === void 0 ? DEFAULT_CONTENT : _data$type;
      if (!modules[type]) {
        logger.warn("Invalid in-app message data: unknown type.", data);
        return {};
      }
      if (!isValidInAppMessage(data, logger)) {
        return {};
      }
      if (!meta) {
        logger.warn("Invalid in-app message meta: undefined.", meta);
        return {};
      }
      return {
        render: function render() {
          return shouldSuppressDisplay ? null : modules[type](_objectSpread2(_objectSpread2({}, data), {}, {
            meta: meta,
            identityMap: proposition.getIdentityMap()
          }));
        },
        setRenderAttempted: true,
        includeInNotification: true
      };
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var removeElementById = function removeElementById(id) {
    var element = selectNodes("#" + id, document);
    if (element && element.length > 0) {
      removeNode(element[0]);
    }
  };
  var parseAnchor = function parseAnchor(anchor) {
    var nothing = {};
    if (!anchor || anchor.tagName.toLowerCase() !== "a") {
      return nothing;
    }
    var href = anchor.href;
    if (!href || !href.startsWith("adbinapp://")) {
      return nothing;
    }
    var hrefParts = href.split("?");
    var action = hrefParts[0].split("://")[1];
    var label = anchor.innerText;
    var uuid = anchor.getAttribute("data-uuid") || "";
    var interaction;
    var link;
    if (isNonEmptyArray(hrefParts)) {
      var queryParams = queryString.parse(hrefParts[1]);
      interaction = queryParams.interaction || "";
      link = decodeUriComponentSafely(queryParams.link || "");
    }
    return {
      action: action,
      interaction: interaction,
      link: link,
      label: label,
      uuid: uuid
    };
  };

  /*
  Copyright 2019 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var createRedirect = (function (window) {
    return function (url) {
      var preserveHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (preserveHistory) {
        window.location.href = url;
      } else {
        window.location.replace(url);
      }
      // Return a promise that never resolves because redirects never complete
      // within the current page.
      return new Promise(function () {});
    };
  });

  var MESSAGING_CONTAINER_ID = "alloy-messaging-container";
  var OVERLAY_CONTAINER_ID = "alloy-overlay-container";
  var IFRAME_ID = "alloy-content-iframe";
  var dismissMessage = function dismissMessage() {
    return [MESSAGING_CONTAINER_ID, OVERLAY_CONTAINER_ID].forEach(removeElementById);
  };
  var createIframeClickHandler = function createIframeClickHandler(interact) {
    var navigateToUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createRedirect(window);
    return function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      var target = event.target;
      var anchor = target.tagName.toLowerCase() === "a" ? target : target.closest("a");
      if (!anchor) {
        return;
      }
      var _parseAnchor = parseAnchor(anchor),
        action = _parseAnchor.action,
        interaction = _parseAnchor.interaction,
        link = _parseAnchor.link,
        label = _parseAnchor.label,
        uuid = _parseAnchor.uuid;
      interact(action, {
        label: label,
        id: interaction,
        uuid: uuid,
        link: link
      });
      if (action === "dismiss") {
        dismissMessage();
      }
      if (isNonEmptyString(link) && link.length > 0) {
        navigateToUrl(link, true);
      }
    };
  };
  var createIframe = function createIframe(htmlContent, clickHandler) {
    var parser = new DOMParser();
    var htmlDocument = parser.parseFromString(htmlContent, TEXT_HTML);
    var scriptTag = htmlDocument.querySelector("script");
    if (scriptTag) {
      scriptTag.setAttribute("nonce", getNonce());
    }
    var element = createNode("iframe", {
      src: URL.createObjectURL(new Blob([htmlDocument.documentElement.outerHTML], {
        type: "text/html"
      })),
      id: IFRAME_ID
    });
    element.addEventListener("load", function () {
      var _ref = element.contentDocument || element.contentWindow.document,
        addEventListener = _ref.addEventListener;
      addEventListener("click", clickHandler);
    });
    return element;
  };
  var renderMessage = function renderMessage(iframe, webParameters, container, overlay) {
    [{
      id: OVERLAY_CONTAINER_ID,
      element: overlay
    }, {
      id: MESSAGING_CONTAINER_ID,
      element: container
    }, {
      id: IFRAME_ID,
      element: iframe
    }].forEach(function (_ref2) {
      var id = _ref2.id,
        element = _ref2.element;
      var _webParameters$id = webParameters[id],
        _webParameters$id$sty = _webParameters$id.style,
        style = _webParameters$id$sty === void 0 ? {} : _webParameters$id$sty,
        _webParameters$id$par = _webParameters$id.params,
        params = _webParameters$id$par === void 0 ? {} : _webParameters$id$par;
      Object.assign(element.style, style);
      var _params$parentElement = params.parentElement,
        parentElement = _params$parentElement === void 0 ? "body" : _params$parentElement,
        _params$insertionMeth = params.insertionMethod,
        insertionMethod = _params$insertionMeth === void 0 ? "appendChild" : _params$insertionMeth,
        _params$enabled = params.enabled,
        enabled = _params$enabled === void 0 ? true : _params$enabled;
      var parent = document.querySelector(parentElement);
      if (enabled && parent && typeof parent[insertionMethod] === "function") {
        parent[insertionMethod](element);
      }
    });
  };
  var buildStyleFromMobileParameters = function buildStyleFromMobileParameters(mobileParameters) {
    var verticalAlign = mobileParameters.verticalAlign,
      width = mobileParameters.width,
      horizontalAlign = mobileParameters.horizontalAlign,
      backdropColor = mobileParameters.backdropColor,
      height = mobileParameters.height,
      cornerRadius = mobileParameters.cornerRadius,
      horizontalInset = mobileParameters.horizontalInset,
      verticalInset = mobileParameters.verticalInset,
      _mobileParameters$uiT = mobileParameters.uiTakeover,
      uiTakeover = _mobileParameters$uiT === void 0 ? false : _mobileParameters$uiT;
    var style = {
      width: width ? width + "%" : "100%",
      backgroundColor: backdropColor || "rgba(0, 0, 0, 0.5)",
      borderRadius: cornerRadius ? cornerRadius + "px" : "0px",
      border: "none",
      position: uiTakeover ? "fixed" : "relative",
      overflow: "hidden"
    };
    if (horizontalAlign === "left") {
      style.left = horizontalInset ? horizontalInset + "%" : "0";
    } else if (horizontalAlign === "right") {
      style.right = horizontalInset ? horizontalInset + "%" : "0";
    } else if (horizontalAlign === "center") {
      style.left = "50%";
      style.transform = "translateX(-50%)";
    }
    if (verticalAlign === "top") {
      style.top = verticalInset ? verticalInset + "%" : "0";
    } else if (verticalAlign === "bottom") {
      style.position = "fixed";
      style.bottom = verticalInset ? verticalInset + "%" : "0";
    } else if (verticalAlign === "center") {
      style.top = "50%";
      style.transform = (horizontalAlign === "center" ? style.transform + " " : "") + "translateY(-50%)";
      style.display = "flex";
      style.alignItems = "center";
      style.justifyContent = "center";
    }
    if (height) {
      style.height = height + "vh";
    } else {
      style.height = "100%";
    }
    return style;
  };
  var mobileOverlay = function mobileOverlay(mobileParameters) {
    var backdropOpacity = mobileParameters.backdropOpacity,
      backdropColor = mobileParameters.backdropColor;
    var opacity = backdropOpacity || 0.5;
    var color = backdropColor || "#FFFFFF";
    var style = {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "transparent",
      opacity: opacity,
      backgroundColor: color
    };
    return style;
  };
  var REQUIRED_PARAMS = ["enabled", "parentElement", "insertionMethod"];
  var isValidWebParameters = function isValidWebParameters(webParameters) {
    if (!webParameters) {
      return false;
    }
    var ids = Object.keys(webParameters);
    if (!ids.includes(MESSAGING_CONTAINER_ID)) {
      return false;
    }
    if (!ids.includes(OVERLAY_CONTAINER_ID)) {
      return false;
    }
    var valuesArray = Object.values(webParameters);
    for (var i = 0; i < valuesArray.length; i += 1) {
      if (!boundObjectOf(valuesArray[i], "style")) {
        return false;
      }
      if (!boundObjectOf(valuesArray[i], "params")) {
        return false;
      }
      for (var j = 0; j < REQUIRED_PARAMS.length; j += 1) {
        if (!boundObjectOf(valuesArray[i].params, REQUIRED_PARAMS[j])) {
          return false;
        }
      }
    }
    return true;
  };
  var generateWebParameters = function generateWebParameters(mobileParameters) {
    if (!mobileParameters) {
      return undefined;
    }
    var _mobileParameters$uiT2 = mobileParameters.uiTakeover,
      uiTakeover = _mobileParameters$uiT2 === void 0 ? false : _mobileParameters$uiT2;
    return _defineProperty(_defineProperty(_defineProperty({}, IFRAME_ID, {
      style: {
        border: "none",
        width: "100%",
        height: "100%"
      },
      params: {
        enabled: true,
        parentElement: "#alloy-messaging-container",
        insertionMethod: "appendChild"
      }
    }), MESSAGING_CONTAINER_ID, {
      style: buildStyleFromMobileParameters(mobileParameters),
      params: {
        enabled: true,
        parentElement: "body",
        insertionMethod: "appendChild"
      }
    }), OVERLAY_CONTAINER_ID, {
      style: mobileOverlay(mobileParameters),
      params: {
        enabled: uiTakeover === true,
        parentElement: "body",
        insertionMethod: "appendChild"
      }
    });
  };

  // eslint-disable-next-line default-param-last
  var displayHTMLContentInIframe = function displayHTMLContentInIframe() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var interact = arguments.length > 1 ? arguments[1] : undefined;
    dismissMessage();
    var content = settings.content,
      contentType = settings.contentType,
      mobileParameters = settings.mobileParameters;
    var webParameters = settings.webParameters;
    if (contentType !== TEXT_HTML) {
      return;
    }
    var container = createNode("div", {
      id: MESSAGING_CONTAINER_ID
    });
    var iframe = createIframe(content, createIframeClickHandler(interact));
    var overlay = createNode("div", {
      id: OVERLAY_CONTAINER_ID
    });
    if (!isValidWebParameters(webParameters)) {
      webParameters = generateWebParameters(mobileParameters);
    }
    if (!webParameters) {
      return;
    }
    renderMessage(iframe, webParameters, container, overlay);
  };
  var displayIframeContent = (function (settings, collect) {
    return new Promise(function (resolve) {
      var meta = settings.meta,
        identityMap = settings.identityMap;
      displayHTMLContentInIframe(settings, function (action, propositionAction) {
        var propositionEventTypes = {};
        propositionEventTypes[PropositionEventType.INTERACT] = EVENT_TYPE_TRUE;
        if (Object.values(PropositionEventType).indexOf(action) !== -1) {
          propositionEventTypes[action] = EVENT_TYPE_TRUE;
        }
        collect({
          decisionsMeta: [meta],
          propositionAction: propositionAction,
          eventType: INTERACT,
          propositionEventTypes: Object.keys(propositionEventTypes),
          identityMap: identityMap
        });
      });
      resolve({
        meta: meta
      });
    });
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var initInAppMessageActionsModules = (function (collect) {
    return {
      defaultContent: function defaultContent(settings) {
        return displayIframeContent(settings, collect);
      }
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createNotificationHandler = (function (collect, renderedPropositions) {
    return function (isRenderDecisions, isSendDisplayEvent, viewName, identityMap) {
      if (!isRenderDecisions) {
        // If we aren't rendering anything, then we don't need to sendDisplayEvents.
        return function () {
          return undefined;
        };
      }
      if (!isSendDisplayEvent) {
        var renderedPropositionsDeferred = defer();
        renderedPropositions.concat(renderedPropositionsDeferred.promise);
        return renderedPropositionsDeferred.resolve;
      }
      return function () {
        var decisionsMetaDisplay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var decisionsMetaSuppressed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        if (isNonEmptyArray(decisionsMetaDisplay)) {
          collect({
            decisionsMeta: decisionsMetaDisplay,
            viewName: viewName,
            identityMap: identityMap
          });
        }
        if (isNonEmptyArray(decisionsMetaSuppressed)) {
          collect({
            decisionsMeta: decisionsMetaSuppressed,
            eventType: SUPPRESS,
            propositionAction: {
              reason: "Conflict"
            },
            viewName: viewName,
            identityMap: identityMap
          });
        }
      };
    };
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var createHandleConsentFlicker = (function (_ref) {
    var showContainers = _ref.showContainers,
      consent = _ref.consent;
    return function () {
      var _consent$current = consent.current(),
        state = _consent$current.state,
        wasSet = _consent$current.wasSet;
      if (state === OUT && wasSet) {
        showContainers();
      } else {
        consent.awaitConsent()["catch"](showContainers);
      }
    };
  });

  var getInteractionDetail = function getInteractionDetail(clickedElement) {
    var _document = document,
      documentElement = _document.documentElement;
    var element = clickedElement;
    var interactIds = new Set();
    var clickLabel;
    var clickToken;
    while (element && element !== documentElement && !(element instanceof ShadowRoot)) {
      var interactId = getAttribute(element, INTERACT_ID_DATA_ATTRIBUTE);
      if (interactId) {
        interactIds.add(interactId);
      }
      clickLabel = clickLabel || getAttribute(element, CLICK_LABEL_DATA_ATTRIBUTE);
      clickToken = clickToken || getAttribute(element, CLICK_TOKEN_DATA_ATTRIBUTE);
      element = element.parentNode;
    }
    return {
      interactIds: _toConsumableArray(interactIds),
      clickLabel: clickLabel,
      clickToken: clickToken
    };
  };
  var extractViewName = function extractViewName(metas) {
    var foundMetaWithScopeTypeView = metas.find(function (meta) {
      return meta.scopeType === VIEW_SCOPE_TYPE;
    });
    return foundMetaWithScopeTypeView ? foundMetaWithScopeTypeView.scope : undefined;
  };
  var createMetaFilter = function createMetaFilter(autoCollectPropositionInteractions, clickLabel, clickToken) {
    return function (meta) {
      var _meta$scopeDetails = meta.scopeDetails,
        scopeDetails = _meta$scopeDetails === void 0 ? {} : _meta$scopeDetails;
      var decisionProvider = scopeDetails.decisionProvider;
      if (autoCollectPropositionInteractions[decisionProvider] === ALWAYS) {
        return true;
      }
      return autoCollectPropositionInteractions[decisionProvider] === DECORATED_ELEMENTS_ONLY && (clickLabel || clickToken);
    };
  };
  var collectInteractions = (function (clickedElement, getInteractionMetas, autoCollectPropositionInteractions) {
    var _getInteractionDetail = getInteractionDetail(clickedElement),
      interactIds = _getInteractionDetail.interactIds,
      _getInteractionDetail2 = _getInteractionDetail.clickLabel,
      clickLabel = _getInteractionDetail2 === void 0 ? "" : _getInteractionDetail2,
      clickToken = _getInteractionDetail.clickToken;
    var metasMatchingConfigurationOptions = createMetaFilter(autoCollectPropositionInteractions, clickLabel, clickToken);
    if (interactIds.length === 0) {
      return {};
    }
    var metas = getInteractionMetas(interactIds).filter(metasMatchingConfigurationOptions);
    return {
      decisionsMeta: cleanMetas(metas),
      propositionActionLabel: clickLabel,
      propositionActionToken: clickToken,
      viewName: extractViewName(metas)
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var ADOBE_JOURNEY_OPTIMIZER = "AJO";
  var ADOBE_TARGET = "TGT";

  var createPersonalization = function createPersonalization(_ref) {
    var config = _ref.config,
      logger = _ref.logger,
      eventManager = _ref.eventManager,
      consent = _ref.consent;
    var targetMigrationEnabled = config.targetMigrationEnabled,
      prehidingStyle = config.prehidingStyle,
      autoCollectPropositionInteractions = config.autoCollectPropositionInteractions;
    var collect = createCollect({
      eventManager: eventManager,
      mergeDecisionsMeta: mergeDecisionsMeta
    });
    var showContainers = createShowContainers(logger);
    var hideContainers = createHideContainers(logger);
    var _createInteractionSto = createInteractionStorage(),
      storeInteractionMeta = _createInteractionSto.storeInteractionMeta,
      getInteractionMetas = _createInteractionSto.getInteractionMetas;
    var _createClickStorage = createClickStorage(),
      storeClickMeta = _createClickStorage.storeClickMeta,
      getClickSelectors = _createClickStorage.getClickSelectors,
      getClickMetas = _createClickStorage.getClickMetas;
    var getPageLocation = createGetPageLocation({
      window: window
    });
    var domActionsModules = initDomActionsModules();
    var preprocess = createPreprocess([remapHeadOffers, remapCustomCodeOffers]);
    var createProposition = injectCreateProposition({
      preprocess: preprocess,
      isPageWideSurface: isPageWideSurface
    });
    var viewCache = createViewCacheManager({
      createProposition: createProposition
    });
    var executeRedirect = createRedirect(window);
    var schemaProcessors = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, DEFAULT_CONTENT_ITEM, processDefaultContent), DOM_ACTION, createProcessDomAction({
      modules: domActionsModules,
      logger: logger,
      storeInteractionMeta: storeInteractionMeta,
      storeClickMeta: storeClickMeta,
      autoCollectPropositionInteractions: autoCollectPropositionInteractions
    })), HTML_CONTENT_ITEM, createProcessHtmlContent({
      modules: domActionsModules,
      logger: logger,
      storeInteractionMeta: storeInteractionMeta,
      autoCollectPropositionInteractions: autoCollectPropositionInteractions
    })), REDIRECT_ITEM, createProcessRedirect({
      logger: logger,
      executeRedirect: executeRedirect,
      collect: collect
    })), MESSAGE_IN_APP, createProcessInAppMessage({
      modules: initInAppMessageActionsModules(collect),
      logger: logger
    }));
    var processPropositions = createProcessPropositions({
      schemaProcessors: schemaProcessors,
      logger: logger
    });
    var renderedPropositions = createAsyncArray();
    var notificationHandler = createNotificationHandler(collect, renderedPropositions);
    var fetchDataHandler = createFetchDataHandler({
      prehidingStyle: prehidingStyle,
      showContainers: showContainers,
      hideContainers: hideContainers,
      mergeQuery: mergeQuery,
      processPropositions: processPropositions,
      createProposition: createProposition,
      notificationHandler: notificationHandler,
      consent: consent,
      logger: logger
    });
    var onClickHandler = createOnClickHandler({
      mergeDecisionsMeta: mergeDecisionsMeta,
      collectInteractions: collectInteractions,
      collectClicks: collectClicks,
      getInteractionMetas: getInteractionMetas,
      getClickMetas: getClickMetas,
      getClickSelectors: getClickSelectors,
      autoCollectPropositionInteractions: autoCollectPropositionInteractions
    });
    var viewChangeHandler = createViewChangeHandler({
      processPropositions: processPropositions,
      viewCache: viewCache,
      logger: logger
    });
    var applyPropositions = createApplyPropositions({
      processPropositions: processPropositions,
      createProposition: createProposition,
      renderedPropositions: renderedPropositions,
      viewCache: viewCache
    });
    var setTargetMigration = createSetTargetMigration({
      targetMigrationEnabled: targetMigrationEnabled
    });
    var onDecisionHandler = createOnDecisionHandler({
      processPropositions: processPropositions,
      createProposition: createProposition,
      notificationHandler: notificationHandler
    });
    var handleConsentFlicker = createHandleConsentFlicker({
      showContainers: showContainers,
      consent: consent
    });
    return createComponent({
      getPageLocation: getPageLocation,
      logger: logger,
      fetchDataHandler: fetchDataHandler,
      viewChangeHandler: viewChangeHandler,
      onClickHandler: onClickHandler,
      isAuthoringModeEnabled: isAuthoringModeEnabled,
      mergeQuery: mergeQuery,
      viewCache: viewCache,
      showContainers: showContainers,
      applyPropositions: applyPropositions,
      setTargetMigration: setTargetMigration,
      mergeDecisionsMeta: mergeDecisionsMeta,
      renderedPropositions: renderedPropositions,
      onDecisionHandler: onDecisionHandler,
      handleConsentFlicker: handleConsentFlicker
    });
  };
  createPersonalization.namespace = "Personalization";
  var interactionConfigOptions = PROPOSITION_INTERACTION_TYPES.map(function (propositionInteractionType) {
    return boundLiteral(propositionInteractionType);
  });
  createPersonalization.configValidators = boundObjectOf({
    prehidingStyle: boundString().nonEmpty(),
    targetMigrationEnabled: boundBoolean()["default"](false),
    autoCollectPropositionInteractions: boundObjectOf(_defineProperty(_defineProperty({}, ADOBE_JOURNEY_OPTIMIZER, boundAnyOf(interactionConfigOptions)["default"](ALWAYS)), ADOBE_TARGET, boundAnyOf(interactionConfigOptions)["default"](NEVER)))["default"](_defineProperty(_defineProperty({}, ADOBE_JOURNEY_OPTIMIZER, ALWAYS), ADOBE_TARGET, NEVER)).noUnknownFields()
  });

  var _MATCHERS;
  var MatcherType = {
    EQUALS: "eq",
    NOT_EQUALS: "ne",
    EXISTS: "ex",
    NOT_EXISTS: "nx",
    GREATER_THAN: "gt",
    GREATER_THAN_OR_EQUAL_TO: "ge",
    LESS_THAN: "lt",
    LESS_THAN_OR_EQUAL_TO: "le",
    CONTAINS: "co",
    NOT_CONTAINS: "nc",
    STARTS_WITH: "sw",
    ENDS_WITH: "ew"
  };
  function isObjectOrUndefined(value) {
    return _typeof(value) === "object" || typeof value === "undefined";
  }
  function createEquals() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (isObjectOrUndefined(context[key])) {
          return false;
        }
        var contextValue = String(context[key]).toLowerCase();
        for (var i = 0; i < values.length; i += 1) {
          if (!isObjectOrUndefined(values[i]) && contextValue === String(values[i]).toLowerCase()) {
            return true;
          }
        }
        return false;
      }
    };
  }
  function createNotEquals() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (isObjectOrUndefined(context[key])) {
          return false;
        }
        var contextValue = String(context[key]).toLowerCase();
        for (var i = 0; i < values.length; i += 1) {
          if (!isObjectOrUndefined(values[i]) && contextValue === String(values[i]).toLowerCase()) {
            return false;
          }
        }
        return true;
      }
    };
  }
  function createExists() {
    return {
      matches: function matches(context, key) {
        return typeof context[key] !== "undefined" && context[key] !== null;
      }
    };
  }
  function createNotExists() {
    return {
      matches: function matches(context, key) {
        return typeof context[key] === "undefined" || context[key] === null;
      }
    };
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function createGreaterThan() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var needle = context[key];
        if (!isNumber(needle)) {
          return false;
        }
        for (var i = 0; i < values.length; i += 1) {
          if (isNumber(values[i]) && needle > values[i]) {
            return true;
          }
        }
        return false;
      }
    };
  }
  function createGreaterThanEquals() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var needle = context[key];
        if (!isNumber(needle)) {
          return false;
        }
        for (var i = 0; i < values.length; i += 1) {
          if (isNumber(values[i]) && needle >= values[i]) {
            return true;
          }
        }
        return false;
      }
    };
  }
  function createLessThan() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var needle = context[key];
        if (!isNumber(needle)) {
          return false;
        }
        for (var i = 0; i < values.length; i += 1) {
          if (isNumber(values[i]) && needle < values[i]) {
            return true;
          }
        }
        return false;
      }
    };
  }
  function createLessThanEquals() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var needle = context[key];
        if (!isNumber(needle)) {
          return false;
        }
        for (var i = 0; i < values.length; i += 1) {
          if (isNumber(values[i]) && needle <= values[i]) {
            return true;
          }
        }
        return false;
      }
    };
  }
  function createContains() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (isObjectOrUndefined(context[key])) {
          return false;
        }
        var contextValue = String(context[key]).toLowerCase();
        for (var i = 0; i < values.length; i += 1) {
          if (!isObjectOrUndefined(values[i]) && contextValue.indexOf(String(values[i]).toLowerCase()) !== -1) {
            return true;
          }
        }
        return false;
      }
    };
  }
  function createNotContains() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (isObjectOrUndefined(context[key])) {
          return false;
        }
        var contextValue = String(context[key]).toLowerCase();
        for (var i = 0; i < values.length; i += 1) {
          if (!isObjectOrUndefined(values[i]) && contextValue.indexOf(String(values[i]).toLowerCase()) !== -1) {
            return false;
          }
        }
        return true;
      }
    };
  }
  function createStartsWith() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (isObjectOrUndefined(context[key])) {
          return false;
        }
        var contextValue = String(context[key]).toLowerCase();
        for (var i = 0; i < values.length; i += 1) {
          if (!isObjectOrUndefined(values[i]) && contextValue.startsWith(String(values[i]).toLowerCase())) {
            return true;
          }
        }
        return false;
      }
    };
  }
  function createEndsWith() {
    return {
      matches: function matches(context, key) {
        var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        if (isObjectOrUndefined(context[key])) {
          return false;
        }
        var contextValue = String(context[key]).toLowerCase();
        for (var i = 0; i < values.length; i += 1) {
          if (!isObjectOrUndefined(values[i]) && contextValue.endsWith(values[i].toLowerCase())) {
            return true;
          }
        }
        return false;
      }
    };
  }
  (_MATCHERS = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_MATCHERS, MatcherType.EQUALS, createEquals()), MatcherType.NOT_EQUALS, createNotEquals()), MatcherType.EXISTS, createExists()), MatcherType.NOT_EXISTS, createNotExists()), MatcherType.GREATER_THAN, createGreaterThan()), MatcherType.GREATER_THAN_OR_EQUAL_TO, createGreaterThanEquals()), MatcherType.LESS_THAN, createLessThan()), MatcherType.LESS_THAN_OR_EQUAL_TO, createLessThanEquals()), MatcherType.CONTAINS, createContains()), MatcherType.NOT_CONTAINS, createNotContains()), _defineProperty(_defineProperty(_MATCHERS, MatcherType.STARTS_WITH, createStartsWith()), MatcherType.ENDS_WITH, createEndsWith()));

  /*
  Copyright 2025 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var CJM_IN_APP_MESSAGE_TYPE = "cjmiam";
  var SCHEMA = "schema";

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var inAppMessageConsequenceAdapter = (function (id, type, detail) {
    var html = detail.html,
      mobileParameters = detail.mobileParameters;
    var webParameters = {};
    return {
      schema: MESSAGE_IN_APP,
      data: {
        mobileParameters: mobileParameters,
        webParameters: webParameters,
        content: html,
        contentType: TEXT_HTML
      },
      id: id
    };
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  var schemaTypeConsequenceAdapter = (function (id, type, detail) {
    var schema = detail.schema,
      data = detail.data,
      detailId = detail.id;
    return {
      schema: schema,
      data: data,
      id: detailId || id
    };
  });

  _defineProperty(_defineProperty({}, CJM_IN_APP_MESSAGE_TYPE, inAppMessageConsequenceAdapter), SCHEMA, schemaTypeConsequenceAdapter);

  boundObjectOf({
    personalizationStorageEnabled: boundBoolean()["default"](false)
  });

  /*
  Copyright 2024 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  boundObjectOf({
    streamingMedia: boundObjectOf({
      channel: boundString().nonEmpty().required(),
      playerName: boundString().nonEmpty().required(),
      appVersion: boundString(),
      mainPingInterval: boundNumber().minimum(10).maximum(50)["default"](10),
      adPingInterval: boundNumber().minimum(1).maximum(10)["default"](10)
    }).noUnknownFields()
  });

  /*
  Copyright 2023 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */

  boundObjectOf({
    advertising: boundObjectOf({
      id5PartnerId: boundString(),
      rampIdJSPath: boundString(),
      dspEnabled: boundBoolean(),
      advertiserSettings: boundArrayOf(boundObjectOf({
        advertiserId: boundString().required(),
        enabled: boundBoolean().required()
      }).noUnknownFields())
    }).noUnknownFields()
  });

  boundObjectOf({
    pushNotifications: boundObjectOf({
      vapidPublicKey: boundString().required(),
      appId: boundString().required(),
      trackingDatasetId: boundString().required()
    }).noUnknownFields()
  });

  /*
  Copyright 2025 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  var STREAM_START_TIMEOUT_MS = 10000;

  /*
  Copyright 2026 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */
  boundObjectOf({
    conversation: boundObjectOf({
      stickyConversationSession: boundBoolean()["default"](false),
      streamTimeout: boundNumber().integer().minimum(STREAM_START_TIMEOUT_MS)["default"](STREAM_START_TIMEOUT_MS)
    })["default"]({
      stickyConversationSession: false,
      streamTimeout: STREAM_START_TIMEOUT_MS
    })
  });

  /*
  Copyright 2020 Adobe. All rights reserved.
  This file is licensed to you under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License. You may obtain a copy
  of the License at http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under
  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
  OF ANY KIND, either express or implied. See the License for the specific language
  governing permissions and limitations under the License.
  */


  // If you change this line, check if the custom build script is still working.
  // You might need to change the babel plugin in scripts/helpers/entryPointGeneratorBabelPlugin.js.
  core({
    components: [createActivityCollector, createAudiences, createPersonalization]
  });

})();
