(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(window, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === 'object' &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = '';
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(1);

        /***/
      },
      /* 1 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, 'UserMedia', function () {
          return /* reexport */ UserMedia;
        });
        __webpack_require__.d(__webpack_exports__, 'Persona', function () {
          return /* reexport */ Persona_Persona;
        });
        __webpack_require__.d(__webpack_exports__, 'Scene', function () {
          return /* reexport */ Scene_Scene;
        });
        __webpack_require__.d(__webpack_exports__, 'SceneOptions', function () {
          return /* reexport */ /* Cannot get final name for export "SceneOptions" in "./src/Scene.ts" (known exports: Scene, known reexports: ) */ undefined;
        });
        __webpack_require__.d(
          __webpack_exports__,
          'ConnectOptions',
          function () {
            return /* reexport */ /* Cannot get final name for export "ConnectOptions" in "./src/Scene.ts" (known exports: Scene, known reexports: ) */ undefined;
          }
        );
        __webpack_require__.d(__webpack_exports__, 'SmEvent', function () {
          return /* reexport */ SmEvent;
        });
        __webpack_require__.d(
          __webpack_exports__,
          'WebsocketKind',
          function () {
            return /* reexport */ WebsocketKind;
          }
        );
        __webpack_require__.d(
          __webpack_exports__,
          'ContentAwareness',
          function () {
            return /* reexport */ ContentAwareness_ContentAwareness;
          }
        );
        __webpack_require__.d(__webpack_exports__, 'smwebsdk', function () {
          return /* reexport */ smwebsdk;
        });

        // CONCATENATED MODULE: ./src/SmEvent.ts
        /**
         * @module smwebsdk
         */
        /*
         * Copyright 2017-2020 Soul Machines Ltd. All Rights Reserved.
         */
        /**
         * An event which can have a set of listeners registered against it using addListener().
         * @public
         */
        var SmEvent = /** @class */ (function () {
          function SmEvent() {
            // eslint-disable-next-line @typescript-eslint/ban-types
            this._callbacks = [];
          }
          /**
           * Register a new listener for this event.
           * @param callback - Function called each time the event is triggered.
           */
          // eslint-disable-next-line @typescript-eslint/ban-types
          SmEvent.prototype.addListener = function (callback) {
            this._callbacks.push(callback);
          };
          /**
           * Deregister a existing listener for this event.
           * @param callback - Previously registered function to be removed. It is a safe no-op to pass
           * a callback which was never registered against this event.
           */
          // eslint-disable-next-line @typescript-eslint/ban-types
          SmEvent.prototype.removeListener = function (callback) {
            var callbackIndex = this._callbacks.indexOf(callback);
            if (callbackIndex > -1) {
              this._callbacks.splice(callbackIndex, 1);
            }
          };
          /**
           * Trigger the event, calling each registered listener, and passing on any parameters.
           */
          SmEvent.prototype.call = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            this._callbacks.forEach(function (callback) {
              callback.apply(callback, args);
            }, this);
          };
          return SmEvent;
        })();

        // CONCATENATED MODULE: ./src/Persona.ts
        /**
         * @module smwebsdk
         */

        /**
         * Persona class to control a scene persona
         * @public
         */
        var Persona_Persona = /** @class */ (function () {
          /**
           * @param scene - The scene the persona resides in
           * @param personaId - The id of the persona as received in a state callback
           */
          function Persona(scene, personaId) {
            this._scene = scene;
            this._personaId = personaId;
            if (!this._scene.onConversationResultEvents[personaId]) {
              this._scene.onConversationResultEvents[personaId] = new SmEvent();
            }
            // /** Event which will be triggered whenever conversation results are received. Use
            //   *  onConversationResultEvents.addListener() to register a callback for this event.
            //   *  The single parameter to the callback will be an object with the fields:
            //   *    - **status**        - Status code
            //   *    - **errorMessage**  - Optional error strubg
            //   *    - **personaId**     - Numeric ID of Persona
            //   *    - **output:**
            //   *      - **text**        - Textual response from the converstation backend
            //   *    - **context**       - Dictionary of public conversation variables
            //   *    - **provider:**
            //   *      - **kind**        - Conversation backend name, eg "watson"
            //   *      - **meta**        - Conversation backend specific metadata
            //   */
            this._onConversationResultEvent =
              this._scene.onConversationResultEvents[personaId];
            if (!this._scene.onSpeechMarkerEvents[personaId]) {
              this._scene.onSpeechMarkerEvents[personaId] = new SmEvent();
            }
            // /** Event which will be triggered whenever a speech marker is reached. Use
            //   * onSpeechMarkerEvents.addListener() to register a callback for this event.
            //   * A speech marker is triggered using the format @marker(markername, param0,... paramn)
            //   * in speech. There are also other verbs which establish speech markers.
            //   * Eg @showcards(cardA, cardB). When using a speech marker with Watson Assistant,
            //   * the @ symbol must be escaped with a backslash, as follows:
            //   * \@marker(markername, param0,... paramn)
            //   * The single parameter to the callback will be an object with the fields:
            //   *    - **personaId**     - Numeric ID of Persona
            //   *    - **name**          - Kind of speech marker, eg, "showcards", "hidecards"
            //   *    - **arguements**    - Marker specific arguements.
            //   */
            this._onSpeechMarkerEvent =
              this._scene.onSpeechMarkerEvents[personaId];
          }
          /**
           * Start speaking the given text
           * @param text - The text to speak
           * @param context - The context included in the transcript
           * @param optionalArgs - Optional start speaking arguments or null
           */
          Persona.prototype.startSpeaking = function (
            text,
            context,
            optionalArgs
          ) {
            if (context === void 0) {
              context = null;
            }
            if (optionalArgs === void 0) {
              optionalArgs = null;
            }
            var body = {
              personaId: this._personaId,
              text: text,
            };
            if (context) {
              body.context = context;
            }
            if (optionalArgs) {
              body.optionalArgs = optionalArgs;
            }
            return this._scene.sendRequest('startSpeaking', body);
          };
          /**
           * Stop speaking
           */
          Persona.prototype.stopSpeaking = function () {
            var body = {
              personaId: this._personaId,
            };
            return this._scene.sendRequest('stopSpeaking', body);
          };
          /**
           * Send a chat message to conversation
           * @param text - Text to send to conversation
           * @param variables - Variables to send to the conversation provider
           * @param optionalArgs - Optional arguments object (none currently supported)
           */
          Persona.prototype.conversationSend = function (
            text,
            variables,
            optionalArgs
          ) {
            var body = {
              personaId: this._personaId,
              text: text,
              variables: variables,
              optionalArgs: optionalArgs,
            };
            return this._scene.sendRequest('conversationSend', body);
          };
          /**
           * Set variables that will be applied on the next conversation request
           * triggered by speech to text or a conversationSend()
           * @param variables - Variables to send to the conversation provider
           */
          Persona.prototype.conversationSetVariables = function (variables) {
            var body = {
              personaId: this._personaId,
              variables: variables,
            };
            return this._scene.sendRequest('conversationSetVariables', body);
          };
          /**
           * Get variables will return the current conversation variable values
           * in the promise completion.
           * Completion/promise receives an object with member 'variables'.
           */
          Persona.prototype.conversationGetVariables = function () {
            var body = {
              personaId: this._personaId,
            };
            return this._scene.sendRequest('conversationGetVariables', body);
          };
          /**
           * Cut or animate to a named camera position, with support for camera adjustment.
           * @param cameraName - Named camera position. The currently supported option is "CloseUp".
           * @param time - Time in seconds for the animation to run. 0 indicates a cut.
           * @param orbitDegX - Degrees of horizontal rotation around implicit orbit point of camera position (typically the middle of the Persona's head)
           * @param orbitDegY - Degrees of vertical rotation around implicit orbit point of camera position (typically the middle of the Persona's head)
           * @param panDeg - Degrees of camera pan. Orbital adjustment is applied before pan adjustment.
           * @param tiltDeg - Degrees of camera tilt. Orbital adjustment is applied before tilt adjustment.
           */
          Persona.prototype.animateToNamedCameraWithOrbitPan = function (
            cameraName,
            time,
            orbitDegX,
            orbitDegY,
            panDeg,
            tiltDeg
          ) {
            var body = {
              personaId: this._personaId,
              cameraName: cameraName,
              time: time,
              orbitDegX: orbitDegX,
              orbitDegY: orbitDegY,
              panDeg: panDeg,
              tiltDeg: tiltDeg,
            };
            return this._scene.sendRequest('animateToNamedCamera', body);
          };
          /**
           * Play an animation.
           * @internal
           * @param animation - Structured animation data.
           */
          Persona.prototype.playAnimation = function (animation) {
            var body = {
              personaId: this._personaId,
              animation: animation,
            };
            return this._scene.sendRequest('playAnimation', body);
          };
          /**
           * Get & Set bl variables.
           * @internal
           */
          Persona.prototype.getVariables = function (
            names,
            errorTolerant,
            format
          ) {
            if (errorTolerant === void 0) {
              errorTolerant = false;
            }
            if (format === void 0) {
              format = '';
            }
            var body = {
              personaId: this._personaId,
              names: names,
              errorTolerant: errorTolerant,
              format: format,
            };
            return this._scene.sendRequest('getVariables', body);
          };
          /**
           * @internal
           */
          Persona.prototype.setVariables = function (variables) {
            var body = {
              personaId: this._personaId,
              Variables: variables,
            };
            return this._scene.sendRequest('setVariables', body);
          };
          /**
           * @internal
           */
          Persona.prototype.setVariablesOneway = function (variables) {
            var body = {
              personaId: this._personaId,
              Variables: variables,
            };
            this._scene.sendOnewaySceneRequest('setVariables', body);
          };
          /**
           * Get bl variables list.
           * @internal
           */
          Persona.prototype.getVariablesList = function () {
            var body = {
              personaId: this._personaId,
            };
            return this._scene.sendRequest('getVariablesList', body);
          };
          /**
           * Get model bl variables list.
           * @internal
           */
          Persona.prototype.getModelVariablesList = function (modelName) {
            var body = {
              personaId: this._personaId,
              Models: modelName,
            };
            return this._scene.sendRequest('getModelVariablesList', body);
          };
          /**
           * Get model children.
           * @internal
           */
          Persona.prototype.getModelChildren = function (modelName) {
            var body = {
              personaId: this._personaId,
              Models: modelName,
            };
            return this._scene.sendRequest('getModelChildren', body);
          };
          /**
           * Get model list by snippet.
           * @internal
           */
          Persona.prototype.getModelFilterSearchResult = function (modelName) {
            var body = {
              personaId: this._personaId,
              Models: modelName,
            };
            return this._scene.sendRequest('getModelFilterSearchResult', body);
          };
          /**
           * Get model variable list by snippet.
           * @internal
           */
          Persona.prototype.getModelVariableFilterSearchResult = function (
            variableName
          ) {
            var body = {
              personaId: this._personaId,
              Models: variableName,
            };
            return this._scene.sendRequest(
              'getModelVariableFilterSearchResult',
              body
            );
          };
          /**
           * Get connector entries.
           * @internal
           */
          Persona.prototype.getConnectorEntries = function (model) {
            var body = {
              personaId: this._personaId,
              model: model,
            };
            return this._scene.sendRequest('getConnectorEntries', body);
          };
          /**
           * Start BL profiling.
           * @internal
           */
          Persona.prototype.startBlProfiling = function () {
            var body = {
              personaId: this._personaId,
            };
            return this._scene.sendRequest('startBlProfiling', body);
          };
          /**
           * Stop BL profiling.
           * @internal
           */
          Persona.prototype.stopBlProfiling = function (reverse) {
            var body = {
              personaId: this._personaId,
              reverse: reverse,
            };
            return this._scene.sendRequest('stopBlProfiling', body);
          };
          /**
           * Get model hierarchy.
           * @internal
           */
          Persona.prototype.getModelHierarchy = function (model) {
            var body = {
              personaId: this._personaId,
              model: model,
            };
            return this._scene.sendRequest('getModelHierarchy', body);
          };
          /**
           * Monitor bl variables.
           * @internal
           */
          Persona.prototype.createMonitorSet = function (setName, variables) {
            var body = {
              personaId: this._personaId,
              setName: [{ SetName: setName }],
              variables: variables,
            };
            return this._scene.sendRequest('createMonitorSet', body);
          };
          /**
           * @internal
           */
          Persona.prototype.removeMonitorSet = function (setName) {
            var body = {
              personaId: this._personaId,
              setName: [{ SetName: setName }],
            };
            return this._scene.sendRequest('removeMonitorSet', body);
          };
          /**
           * @internal
           */
          Persona.prototype.addVariableToMonitorSet = function (
            setName,
            variables
          ) {
            var body = {
              personaId: this._personaId,
              setName: [{ SetName: setName }],
              variables: variables,
            };
            return this._scene.sendRequest('addVariableToMonitorSet', body);
          };
          /**
           * @internal
           */
          Persona.prototype.removeVariableFromMonitorSet = function (
            setName,
            variables
          ) {
            var body = {
              personaId: this._personaId,
              setName: [{ SetName: setName }],
              variables: variables,
            };
            return this._scene.sendRequest(
              'removeVariableFromMonitorSet',
              body
            );
          };
          /**
           * @internal
           */
          Persona.prototype.renderModel = function (modelName) {
            var body = {
              personaId: this._personaId,
              modelName: modelName,
            };
            return this._scene.sendRequest('renderModel', body);
          };
          Object.defineProperty(
            Persona.prototype,
            'onConversationResultEvent',
            {
              get: function () {
                return this._onConversationResultEvent;
              },
              enumerable: false,
              configurable: true,
            }
          );
          Object.defineProperty(Persona.prototype, 'onSpeechMarkerEvent', {
            get: function () {
              return this._onSpeechMarkerEvent;
            },
            enumerable: false,
            configurable: true,
          });
          return Persona;
        })();

        // CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        /* global Reflect, Promise */

        var extendStatics = function (d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (d, b) {
                d.__proto__ = b;
              }) ||
            function (d, b) {
              for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };

        function __extends(d, b) {
          if (typeof b !== 'function' && b !== null)
            throw new TypeError(
              'Class extends value ' +
                String(b) +
                ' is not a constructor or null'
            );
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype =
            b === null
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __());
        }

        var __assign = function () {
          __assign =
            Object.assign ||
            function __assign(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };

        function __rest(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
              var i = 0, p = Object.getOwnPropertySymbols(s);
              i < p.length;
              i++
            ) {
              if (
                e.indexOf(p[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(s, p[i])
              )
                t[p[i]] = s[p[i]];
            }
          return t;
        }

        function __decorate(decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        }

        function __param(paramIndex, decorator) {
          return function (target, key) {
            decorator(target, key, paramIndex);
          };
        }

        function __metadata(metadataKey, metadataValue) {
          if (
            typeof Reflect === 'object' &&
            typeof Reflect.metadata === 'function'
          )
            return Reflect.metadata(metadataKey, metadataValue);
        }

        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value);
                });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator['throw'](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected);
            }
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next()
            );
          });
        }

        function __generator(thisArg, body) {
          var _ = {
              label: 0,
              sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
              },
              trys: [],
              ops: [],
            },
            f,
            y,
            t,
            g;
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === 'function' &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw new TypeError('Generator is already executing.');
            while (_)
              try {
                if (
                  ((f = 1),
                  y &&
                    (t =
                      op[0] & 2
                        ? y['return']
                        : op[0]
                        ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                        : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (
                      !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                      (op[0] === 6 || op[0] === 2)
                    ) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }

        var __createBinding = Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            };

        function __exportStar(m, o) {
          for (var p in m)
            if (p !== 'default' && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
        }

        function __values(o) {
          var s = typeof Symbol === 'function' && Symbol.iterator,
            m = s && o[s],
            i = 0;
          if (m) return m.call(o);
          if (o && typeof o.length === 'number')
            return {
              next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
              },
            };
          throw new TypeError(
            s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          );
        }

        function __read(o, n) {
          var m = typeof Symbol === 'function' && o[Symbol.iterator];
          if (!m) return o;
          var i = m.call(o),
            r,
            ar = [],
            e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error: error };
          } finally {
            try {
              if (r && !r.done && (m = i['return'])) m.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          return ar;
        }

        /** @deprecated */
        function __spread() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
          return ar;
        }

        /** @deprecated */
        function __spreadArrays() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        }

        function __spreadArray(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        }

        function __await(v) {
          return this instanceof __await
            ? ((this.v = v), this)
            : new __await(v);
        }

        function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
          var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
          return (
            (i = {}),
            verb('next'),
            verb('throw'),
            verb('return'),
            (i[Symbol.asyncIterator] = function () {
              return this;
            }),
            i
          );
          function verb(n) {
            if (g[n])
              i[n] = function (v) {
                return new Promise(function (a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await
              ? Promise.resolve(r.value.v).then(fulfill, reject)
              : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume('next', value);
          }
          function reject(value) {
            resume('throw', value);
          }
          function settle(f, v) {
            if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
          }
        }

        function __asyncDelegator(o) {
          var i, p;
          return (
            (i = {}),
            verb('next'),
            verb('throw', function (e) {
              throw e;
            }),
            verb('return'),
            (i[Symbol.iterator] = function () {
              return this;
            }),
            i
          );
          function verb(n, f) {
            i[n] = o[n]
              ? function (v) {
                  return (p = !p)
                    ? { value: __await(o[n](v)), done: n === 'return' }
                    : f
                    ? f(v)
                    : v;
                }
              : f;
          }
        }

        function __asyncValues(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
          var m = o[Symbol.asyncIterator],
            i;
          return m
            ? m.call(o)
            : ((o =
                typeof __values === 'function'
                  ? __values(o)
                  : o[Symbol.iterator]()),
              (i = {}),
              verb('next'),
              verb('throw'),
              verb('return'),
              (i[Symbol.asyncIterator] = function () {
                return this;
              }),
              i);
          function verb(n) {
            i[n] =
              o[n] &&
              function (v) {
                return new Promise(function (resolve, reject) {
                  (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                });
              };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
              resolve({ value: v, done: d });
            }, reject);
          }
        }

        function __makeTemplateObject(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        }

        var __setModuleDefault = Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v,
              });
            }
          : function (o, v) {
              o['default'] = v;
            };

        function __importStar(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod)
              if (
                k !== 'default' &&
                Object.prototype.hasOwnProperty.call(mod, k)
              )
                __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        }

        function __importDefault(mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        }

        function __classPrivateFieldGet(receiver, state, kind, f) {
          if (kind === 'a' && !f)
            throw new TypeError(
              'Private accessor was defined without a getter'
            );
          if (
            typeof state === 'function'
              ? receiver !== state || !f
              : !state.has(receiver)
          )
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return kind === 'm'
            ? f
            : kind === 'a'
            ? f.call(receiver)
            : f
            ? f.value
            : state.get(receiver);
        }

        function __classPrivateFieldSet(receiver, state, value, kind, f) {
          if (kind === 'm')
            throw new TypeError('Private method is not writable');
          if (kind === 'a' && !f)
            throw new TypeError(
              'Private accessor was defined without a setter'
            );
          if (
            typeof state === 'function'
              ? receiver !== state || !f
              : !state.has(receiver)
          )
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return (
            kind === 'a'
              ? f.call(receiver, value)
              : f
              ? (f.value = value)
              : state.set(receiver, value),
            value
          );
        }

        // CONCATENATED MODULE: ./src/Deferred.ts
        /**
         * @module smwebsdk
         */
        /*
         * Copyright 2017-2020 Soul Machines Ltd. All Rights Reserved.
         */
        /**
         * Deferred class
         * @preferred
         */
        var Deferred = /** @class */ (function () {
          function Deferred() {
            var _this = this;
            this.state = 'pending';
            this.fate = 'unresolved';
            this.promise = new Promise(function (resolve, reject) {
              _this._resolve = resolve;
              _this._reject = reject;
            });
            this.promise.then(
              function () {
                return (_this.state = 'fulfilled');
              },
              function () {
                return (_this.state = 'rejected');
              }
            );
          }
          Deferred.prototype.resolve = function (value) {
            if (this.fate === 'resolved') {
              console.error('Deferred cannot be resolved twice');
              return;
            }
            this.fate = 'resolved';
            this._resolve(value);
          };
          Deferred.prototype.reject = function (reason) {
            if (this.fate === 'resolved') {
              console.error('Deferred cannot be resolved twice');
              return;
            }
            this.fate = 'resolved';
            this._reject(reason);
          };
          Deferred.prototype.isResolved = function () {
            return this.fate === 'resolved';
          };
          Deferred.prototype.isPending = function () {
            return this.state === 'pending';
          };
          Deferred.prototype.isFulfilled = function () {
            return this.state === 'fulfilled';
          };
          Deferred.prototype.isRejected = function () {
            return this.state === 'rejected';
          };
          return Deferred;
        })();

        // CONCATENATED MODULE: ./src/Features.ts
        /**
         * @module smwebsdk
         */
        /*
         * Copyright 2017-2020 Soul Machines Ltd. All Rights Reserved.
         */
        /**
         * Features class
         *
         * An instance of this class can also be created by the convenience API function DetectCapabilities()
         *
         * ```ts
         * var features  = window.smwebsdk.DetectCapabilities();
         * ```
         *
         * which also calls the detectWebRTCFeatures() method.
         */
        var Features = /** @class */ (function () {
          function Features() {
            this._hasMicrophone = false;
            this._hasCamera = false;
            this._isAndroid = false;
            this._isBrowserSupported = false;
            this._isEdge = false;
            this._isIos = false;
            this._isAndroid = this.detectAndroid();
            this._isEdge = this.detectEdge();
            this._isIos = this.detectIos();
          }
          Features.prototype.detectEdge = function () {
            return this.userAgentMatches('Edge');
          };
          Features.prototype.detectAndroid = function () {
            return this.userAgentMatches('Android');
          };
          Features.prototype.detectIos = function () {
            var isIOS =
              (/iPad|iPhone|iPod/i.test(navigator.platform) ||
                (navigator &&
                  navigator.platform === 'MacIntel' &&
                  navigator.maxTouchPoints > 1)) &&
              !window.MSStream;
            return isIOS;
          };
          Features.prototype.userAgentMatches = function (text) {
            var userAgent = window.navigator.userAgent;
            var matches = userAgent.match(text);
            if (matches) {
              return matches.length > 0 ? true : false;
            }
            return false;
          };
          Features.prototype.detectWebRTCFeatures = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
              // Check for runtime host
              if (window.SmIsUnderRuntimeHost) {
                // TODO - detect whether camera/microphone is available in runtime host
                _this._isBrowserSupported = true;
                _this._hasMicrophone = true;
                _this._hasCamera = true;
                resolve(_this);
              }
              // This approach heavily influenced by the helpful and MIT licensed:
              //    https://github.com/muaz-khan/DetectRTC/blob/master/DetectRTC.js
              // Detect webrtc support
              var isWebRTCSupported = false;
              [
                'RTCPeerConnection',
                'webkitRTCPeerConnection',
                'mozRTCPeerConnection',
                'RTCIceGatherer',
              ].forEach(function (item) {
                if (isWebRTCSupported) {
                  return;
                }
                if (item in window) {
                  isWebRTCSupported = true;
                }
              });
              // Apparently IE11 injected iPhone into user agent string, hence check for not MSStream
              var iOS =
                navigator.userAgent.match(/iPhone|iPad|iPod/i) &&
                !window.MSStream;
              var isSafari = /^((?!chrome|android).)*safari/i.test(
                navigator.userAgent
              );
              if (isWebRTCSupported && iOS && !isSafari) {
                // Webrtc is not supported on an iOS device using webview instead of full Safari
                isWebRTCSupported = false;
              }
              _this._isBrowserSupported = isWebRTCSupported;
              if (!_this._isBrowserSupported) {
                resolve(_this);
              }
              // Find the enumerate devices function if available
              var navEnumerateDevices = null;
              if (
                navigator.mediaDevices &&
                navigator.mediaDevices.enumerateDevices
              ) {
                // Firefox 38+ seems having support of enumerateDevices
                // Thanks @xdumaine/enumerateDevices
                // eslint-disable-next-line @typescript-eslint/ban-types
                navEnumerateDevices = function (callback) {
                  Promise.resolve(navigator.mediaDevices.enumerateDevices())
                    .then(function (value) {
                      if (value === void 0) {
                        value = [];
                      }
                      callback(value);
                    })
                    .catch(function () {
                      callback([]);
                    });
                };
              }
              var MediaStreamTrack = window.MediaStreamTrack;
              if (
                !navEnumerateDevices &&
                MediaStreamTrack &&
                MediaStreamTrack.getSources
              ) {
                navEnumerateDevices =
                  MediaStreamTrack.getSources.bind(MediaStreamTrack);
              }
              if (!navEnumerateDevices && navigator.enumerateDevices) {
                // ! block was originally unreachable until bug is fixed in trunk
                navEnumerateDevices =
                  navigator.enumerateDevices.bind(navigator);
              }
              // Enumerate the media devices
              if (navEnumerateDevices) {
                navEnumerateDevices(function (devices) {
                  devices.forEach(function (device) {
                    if (device.kind === 'audioinput') {
                      _this._hasMicrophone = true;
                    }
                    if (device.kind === 'videoinput') {
                      _this._hasCamera = true;
                    }
                  });
                  resolve(_this);
                });
              } else {
                resolve(_this);
              }
            });
          };
          Object.defineProperty(Features.prototype, 'hasMicrophone', {
            get: function () {
              return this._hasMicrophone;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Features.prototype, 'hasCamera', {
            get: function () {
              return this._hasCamera;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Features.prototype, 'isAndroid', {
            get: function () {
              return this._isAndroid;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Features.prototype, 'isBrowserSupported', {
            get: function () {
              return this._isBrowserSupported;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Features.prototype, 'isEdge', {
            get: function () {
              return this._isEdge;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Features.prototype, 'isIos', {
            get: function () {
              return this._isIos;
            },
            enumerable: false,
            configurable: true,
          });
          return Features;
        })();

        // CONCATENATED MODULE: ./src/utils/Logger.ts

        var logLevels = ['debug', 'log', 'warn', 'error'];
        var Logger_Logger = /** @class */ (function () {
          function Logger(minLogLevel, isEnabled) {
            if (minLogLevel === void 0) {
              minLogLevel = 'log';
            }
            if (isEnabled === void 0) {
              isEnabled = true;
            }
            this.isEnabled = isEnabled;
            this.availableLogLevels = [];
            this._minLogLevel = 'log';
            this.setMinLogLevel(minLogLevel);
          }
          Logger.prototype.log = function (type) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
            }
            if (this.isEnabled && this.availableLogLevels.includes(type)) {
              console[type].apply(console, __spread(args));
            }
          };
          Logger.prototype.enableLogging = function (enable) {
            this.isEnabled = enable;
          };
          Logger.prototype.getMinLogLevel = function () {
            return this._minLogLevel;
          };
          Logger.prototype.setMinLogLevel = function (level) {
            var index = logLevels.indexOf(level);
            this._minLogLevel = level;
            this.availableLogLevels = logLevels.slice(index);
          };
          return Logger;
        })();

        // CONCATENATED MODULE: ./src/utils/make-error.ts
        function makeError(message, reason) {
          var error = new Error(message);
          error.name = reason;
          return error;
        }

        // CONCATENATED MODULE: ./src/LocalSession.ts
        /**
         * @module smwebsdk
         */

        /*
         * Copyright 2017-2020 Soul Machines Ltd. All Rights Reserved.
         */

        /**
         *  LocalSession class
         */
        var LocalSession_LocalSession = /** @class */ (function () {
          function LocalSession(
            videoElement,
            serverUri,
            connectUserText,
            accessToken,
            audioOnly,
            logger
          ) {
            var _this = this;
            if (logger === void 0) {
              logger = new Logger_Logger();
            }
            this.logger = logger;
            this._isMicrophoneConnected = false;
            this._isCameraConnected = false;
            this._closed = false;
            this._outgoingQueue = [];
            // Duration that microphone mute is maintained by the web sdk after the persona has
            // finished speaking.  Set to -1 to disable.  Default value is -1 (disabled).
            this._microphoneMuteDelay = -1;
            this._offsetX = 0;
            this._offsetY = 0;
            if (videoElement) {
              this._viewport_element = videoElement;
            }
            window.SmRuntimeHostReceiveMessage = this.receiveMessage.bind(this);
            if (
              typeof window.SmRuntimeHostStyleViewportElement === 'function'
            ) {
              window.SmRuntimeHostStyleViewportElement(this._viewport_element);
            }
            // owner specifies custom close method
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this._onClose = function (reason) {};
            // owner specifies custom message handler
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this._onMessage = function (message) {};
            // owner specifies custom rtc user text message handler
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this._onUserText = function (text) {};
            this.sendVideoBounds(0, 0);
            // The initial positioning can take a while. Would be nice to make this more deterministic.
            setTimeout(function () {
              _this.sendVideoBounds(0, 0);
            }, 3000);
            this._features = new Features();
            this.log('Local session created!');
          }
          LocalSession.prototype.receiveMessage = function (raw_text) {
            var _a, _b;
            var message = JSON.parse(raw_text);
            this.log('message received: ' + raw_text);
            this._onMessage(message);
            if (
              message.name === 'state' &&
              message.category === 'scene' &&
              ((_b =
                (_a = message.body) === null || _a === void 0
                  ? void 0
                  : _a.session) === null || _b === void 0
                ? void 0
                : _b.state) === 'idle'
            ) {
              this.log('Local session ending - conversationEnded');
              this.close(true, 'conversationEnded');
            }
          };
          Object.defineProperty(LocalSession.prototype, 'onClose', {
            set: function (closeFunction) {
              this._onClose = closeFunction;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'onMessage', {
            set: function (messageFunction) {
              this._onMessage = messageFunction;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'onUserText', {
            set: function (userTextFunction) {
              this._onUserText = userTextFunction;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'loggingEnabled', {
            get: function () {
              return this.logger.isEnabled;
            },
            /**
             * @deprecated use setLogging(boolean).
             */
            set: function (enable) {
              this.logger.log(
                'warn',
                'loggingEnabled is deprecated and will be removed in a future version. Please use setLogging(boolean)'
              );
              this.logger.enableLogging(enable);
            },
            enumerable: false,
            configurable: true,
          });
          LocalSession.prototype.setMinLogLevel = function (level) {
            this.logger.setMinLogLevel(level);
          };
          LocalSession.prototype.setLogging = function (enable) {
            this.logger.enableLogging(enable);
          };
          LocalSession.prototype.log = function (text) {
            this.logger.log('log', text);
          };
          LocalSession.prototype.sendVideoBounds = function (
            widthIgnored,
            heightIgnored
          ) {
            var _this = this;
            // We need to defer the update very slightly to give the browser time to reflow,
            // otherwise we get out of date values for width, height etc:
            setTimeout(function () {
              // Brute-force method for getting pos and dimensions, as
              // getBoundingClientRect seems to be unreliable (sometimes
              // returning zeroes for left and right):
              var el = _this._viewport_element;
              if (el) {
                var view = document.defaultView || window;
                var width = parseInt(view.getComputedStyle(el).width, 10);
                var height = parseInt(view.getComputedStyle(el).height, 10);
                _this._offsetX = 0;
                _this._offsetY = 0;
                while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
                  _this._offsetX += el.offsetLeft - el.scrollLeft;
                  _this._offsetY += el.offsetTop - el.scrollTop;
                  el = el.offsetParent;
                }
                if (document.documentElement) {
                  var x_off = document.documentElement.scrollLeft;
                  var y_off = document.documentElement.scrollTop;
                  _this._offsetX -= x_off;
                  _this._offsetY -= y_off;
                }
                _this.log(
                  'Updating bounds: x =  ' +
                    _this._offsetX +
                    ' , y = ' +
                    _this._offsetY +
                    "', w = " +
                    width +
                    ', h = ' +
                    height
                );
                // update bounds
                var top = _this._offsetY;
                var left = _this._offsetX;
                var bottom = _this._offsetY + height;
                var right = _this._offsetX + width;
                var payload = {
                  name: 'videoBounds',
                  body: { top: top, left: left, bottom: bottom, right: right },
                  category: 'local',
                  kind: 'event',
                };
                _this.sendMessage(payload);
              }
            }, 0);
          };
          LocalSession.prototype.hideVideo = function () {
            var top = 0;
            var left = 0;
            var bottom = 0;
            var right = 0;
            var payload = {
              name: 'videoBounds',
              body: { top: top, left: left, bottom: bottom, right: right },
              category: 'local',
              kind: 'event',
            };
            this.sendMessage(payload);
          };
          LocalSession.prototype.sendRtcEvent = function (name, body) {
            // NOOP: Stuff for compatibility with Session in Scene
          };
          LocalSession.prototype.connect = function () {
            return __awaiter(this, void 0, Promise, function () {
              var deferred, result, payload;
              var _this = this;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    deferred = new Deferred();
                    this.log('Local session connecting!');
                    this._closed = false;
                    return [4 /*yield*/, this._features.detectWebRTCFeatures()];
                  case 1:
                    result = _a.sent();
                    this._closed = false;
                    this._sessionId = undefined;
                    this._isMicrophoneConnected = result.hasMicrophone;
                    this._isCameraConnected = result.hasCamera;
                    if (typeof window.local_websocket_port === 'number') {
                      this._serverConnection = new WebSocket(
                        'ws://localhost:' + window.local_websocket_port
                      );
                      this.log('smsdk: websocket open');
                      this._serverConnection.onmessage = function (msg) {
                        _this.gotMessageFromServer(msg);
                      };
                      this._serverConnection.onerror = function (event) {
                        if (deferred.isPending()) {
                          deferred.reject(
                            makeError(
                              'smsdk websocket failed',
                              'serverConnectionFailed'
                            )
                          );
                        }
                      };
                      this._serverConnection.onopen = function (event) {
                        // disable SmRuntimeHostReceiveMessage
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        window.SmRuntimeHostReceiveMessage = function () {};
                        _this.log('Local session connected!');
                        // send out messages in queue
                        for (var i = 0; i < _this._outgoingQueue.length; i++) {
                          _this._serverConnection.send(
                            JSON.stringify(_this._outgoingQueue[i])
                          );
                          _this.logger.log(
                            'log',
                            'SmLocalSession.prototype.sendMessage, forwarding message to Web Socket: ' +
                              _this._outgoingQueue[i]
                          );
                        }
                        _this._outgoingQueue = [];
                        if (deferred.isPending()) {
                          deferred.resolve();
                        }
                      };
                      this._serverConnection.onclose = function (event) {
                        _this.logger.log(
                          'log',
                          'smsdk: websocket closed: code(' +
                            event.code +
                            '), reason(' +
                            event.reason +
                            '), clean(' +
                            event.wasClean +
                            ')'
                        );
                        if (!deferred.isRejected) {
                          _this.close(false, 'normal');
                        }
                      };
                    } else {
                      this.log(
                        'local_websocket_port not found! Failed to create WebSocket'
                      );
                      if (deferred.isPending()) {
                        deferred.reject(
                          makeError(
                            'smsdk websocket failed',
                            'local_websocket_port not found'
                          )
                        );
                      }
                    }
                    payload = {
                      name: 'startSession',
                      body: {},
                      category: 'scene',
                      kind: 'request',
                    };
                    this.sendMessage(payload);
                    return [2 /*return*/, deferred.promise];
                }
              });
            });
          };
          LocalSession.prototype.gotMessageFromServer = function (
            websocket_message
          ) {
            var raw_text = websocket_message.data;
            var message = JSON.parse(raw_text);
            var category = message.category;
            var name = message.name;
            var body = message.body;
            if (category !== 'webrtc') {
              // forward on non-webrtc messages (e.g. scene)
              this._onMessage(message);
            } else if (name === 'close') {
              this.close(false, body.reason);
            }
            if (
              name === 'state' &&
              category === 'scene' &&
              body.session !== null &&
              body.session !== undefined &&
              body.session.state === 'idle'
            ) {
              this.log('Local session ending due to server idle message');
              this.close(true, 'conversationEnded');
            }
          };
          LocalSession.prototype.sendMessage = function (message) {
            var msg = JSON.stringify(message);
            if (
              this._serverConnection &&
              this._serverConnection.readyState === WebSocket.OPEN
            ) {
              this._serverConnection.send(msg);
              this.log(
                'SmLocalSession.prototype.sendMessage, forwarding message to Web Socket: ' +
                  msg
              );
            } else {
              this._outgoingQueue.push(message);
            }
          };
          LocalSession.prototype.sendUserText = function (text) {
            this.logger.log(
              'log',
              'SmLocalSession.prototype.sendUserText, discarding text: ' + text
            );
          };
          LocalSession.prototype.close = function (sendRtcClose, reason) {
            if (sendRtcClose === void 0) {
              sendRtcClose = true;
            }
            if (reason === void 0) {
              reason = 'normal';
            }
            if (this._closed) {
              return;
            }
            this._closed = true;
            this._onClose(reason);
            this._isMicrophoneConnected = false;
            this._isCameraConnected = false;
            this.hideVideo();
            if (this._serverConnection) {
              this.log('smsdk: closing server connection');
              var normalClosureCode = 1000;
              this._serverConnection.close(normalClosureCode, reason);
            }
          };
          Object.defineProperty(LocalSession.prototype, 'peerConnection', {
            get: function () {
              return null;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'userMediaStream', {
            get: function () {
              return null;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'serverConnection', {
            get: function () {
              return this._serverConnection;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'sessionId', {
            get: function () {
              return this._sessionId;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(
            LocalSession.prototype,
            'isMicrophoneConnected',
            {
              get: function () {
                return this._isMicrophoneConnected;
              },
              enumerable: false,
              configurable: true,
            }
          );
          Object.defineProperty(LocalSession.prototype, 'isCameraConnected', {
            get: function () {
              return this._isCameraConnected;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'features', {
            get: function () {
              return this._features;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'microphoneMuteDelay', {
            get: function () {
              return this._microphoneMuteDelay;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'microphoneMuted', {
            get: function () {
              // todo - RuntimeHost does not yet support this,
              //        currently only needed in webrtc sessions and tests
              if (typeof window.SmRuntimeHostIsMicrophoneMuted === 'function') {
                return window.SmRuntimeHostIsMicrophoneMuted();
              }
              return false;
            },
            set: function (mute) {
              // todo - RuntimeHost does not yet support this,
              //        currently only needed in webrtc sessions and tests
              if (typeof window.SmRuntimeHostMuteMicrophone === 'function') {
                window.SmRuntimeHostMuteMicrophone(mute);
              }
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'offsetX', {
            get: function () {
              return this._offsetX;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(LocalSession.prototype, 'offsetY', {
            get: function () {
              return this._offsetY;
            },
            enumerable: false,
            configurable: true,
          });
          LocalSession.prototype.isMicrophoneActive = function () {
            return this.isMicrophoneConnected && !this.microphoneMuted;
          };
          LocalSession.prototype.isCameraActive = function () {
            return this.isCameraConnected;
          };
          LocalSession.prototype.setMediaDeviceActive = function (_a) {
            var microphone = _a.microphone,
              camera = _a.camera;
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (_b) {
                throw makeError(
                  'setMediaDeviceActive not supported on LocalSession',
                  'notSupported'
                );
              });
            });
          };
          return LocalSession;
        })();

        // CONCATENATED MODULE: ./src/types/scene.ts
        /**
         * Represents the different combinations of User Media that are supported
         * @public
         */
        var UserMedia;
        (function (UserMedia) {
          UserMedia[(UserMedia['None'] = 0)] = 'None';
          UserMedia[(UserMedia['Microphone'] = 1)] = 'Microphone';
          UserMedia[(UserMedia['MicrophoneAndCamera'] = 2)] =
            'MicrophoneAndCamera';
          UserMedia[(UserMedia['Camera'] = 3)] = 'Camera';
        })(UserMedia || (UserMedia = {}));

        // CONCATENATED MODULE: ./src/Session.ts
        /**
         * @module smwebsdk
         */

        /*
         * Copyright 2017-2020 Soul Machines Ltd. All Rights Reserved.
         */

        // Reexporting here to keep backwards compatibility

        /**
         *  Session class
         */
        var Session_Session = /** @class */ (function () {
          function Session(
            videoElement,
            serverUri,
            connectUserText,
            accessToken,
            audioOnly,
            requestedUserMedia,
            requiredUserMedia,
            echoCancellationEnabled,
            logger
          ) {
            var _this = this;
            if (logger === void 0) {
              logger = new Logger_Logger();
            }
            this.logger = logger;
            // eslint-disable-next-line @typescript-eslint/ban-types
            this._connectPendingRemoteStream = null;
            this._outgoingQueue = [];
            this._controlOpen = false;
            this._controlQueue = [];
            this._requestedUserMedia = UserMedia.None;
            this._requiredUserMedia = UserMedia.None;
            this._pendingLog = [];
            this._closed = false;
            this._shouldLogToServer = false;
            // Duration that microphone mute is maintained by the web sdk after the persona has
            // finished speaking.  Set to -1 to disable.  Default value is -1 (disabled) if not specified
            // by server in 'established' message.
            this._microphoneMuteDelay = -1;
            this._changeUserMediaQueue = new Array();
            this._removeListeners = new Array();
            this._videoOptions = {
              frameRate: 10.0,
              width: 640.0,
              height: 480.0,
              facingMode: 'user',
            };
            // TypeScript support to MediaTrackConstraints is not complete, thus using any here
            this._audioOptions = {
              noiseSuppression: false,
              autoGainControl: false,
              channelCount: 1,
              sampleRate: 16000,
              sampleSize: 16,
              echoCancellation: true,
            };
            this._videoElement = videoElement;
            this._serverUri = serverUri;
            this._connectUserText = connectUserText || '';
            this._accessToken = accessToken;
            this._audioOnly = audioOnly;
            this._audioOptions.echoCancellation = echoCancellationEnabled;
            this._requiredUserMedia = requiredUserMedia;
            this._requestedUserMedia = requestedUserMedia;
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this._onClose = function (reason) {}; // owner specifies custom close method
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this._onMessage = function (message) {}; // owner specifies custom message handler
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this._onUserText = function (text) {}; // owner specifies custom rtc user text message handler
            this._sessionError = function (error) {
              // owner can specify custom session error handler
              _this.log('smsdk - session error: ' + error);
            };
            this._features = new Features();
          }
          Object.defineProperty(Session.prototype, 'onClose', {
            set: function (closeFunction) {
              this._onClose = closeFunction;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'onMessage', {
            set: function (messageFunction) {
              this._onMessage = messageFunction;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'onUserText', {
            set: function (userTextFunction) {
              this._onUserText = userTextFunction;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'loggingEnabled', {
            get: function () {
              return this.logger.isEnabled;
            },
            /**
             * @deprecated use setLogging(boolean) .
             */
            set: function (enable) {
              this.logger.log(
                'warn',
                'loggingEnabled is deprecated and will be removed in a future version. Please use setLogging(boolean)'
              );
              this.logger.enableLogging(enable);
            },
            enumerable: false,
            configurable: true,
          });
          Session.prototype.setMinLogLevel = function (level) {
            this.logger.setMinLogLevel(level);
          };
          Session.prototype.setLogging = function (enable) {
            this.logger.enableLogging(enable);
          };
          Session.prototype.log = function (text, level) {
            if (level === void 0) {
              level = 'log';
            }
            if (this.loggingEnabled) {
              var now = new Date();
              var msg = now.toISOString() + ' ' + text;
              if (this._shouldLogToServer) {
                this.logToServer(msg);
              }
              this.logger.log(level, msg);
            }
          };
          Session.prototype.logToServer = function (msg) {
            if (this.sessionId) {
              this.sendlogMessage([msg]);
            } else {
              this._pendingLog.push(msg);
            }
          };
          Session.prototype.sendlogMessage = function (textArray) {
            if (this._sessionId && textArray && textArray.length > 0) {
              var payload = {
                category: 'diagnostics',
                kind: 'event',
                name: 'log',
                body: { name: 'browser', text: textArray },
              };
              this.sendMessage(payload);
            }
          };
          Session.prototype.connect = function (userText) {
            return __awaiter(this, void 0, Promise, function () {
              var deferred, xhr;
              var _this = this;
              return __generator(this, function (_a) {
                deferred = new Deferred();
                this._closed = false;
                if (userText) {
                  this._connectUserText = userText;
                }
                if (
                  this._serverUri &&
                  (this._serverUri.startsWith('ws:') ||
                    this._serverUri.startsWith('wss:'))
                ) {
                  // A server uri has been specified, continue with the connection
                  // by acquiring user media (microphone/camera) as needed
                  this.selectUserMedia(
                    this._requestedUserMedia,
                    this._requiredUserMedia,
                    deferred,
                    this.getUserMediaSuccess.bind(this)
                  );
                  return [2 /*return*/, deferred.promise];
                }
                xhr = new XMLHttpRequest();
                xhr.open('GET', '/api/jwt' + window.location.search);
                xhr.onreadystatechange = function (ev) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                      if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                          this.log('JWT request returned: ' + xhr.responseText);
                          response = JSON.parse(xhr.responseText);
                          this._serverUri = response.url;
                          this._accessToken = response.jwt;
                          this.selectUserMedia(
                            this._requestedUserMedia,
                            this._requiredUserMedia,
                            deferred,
                            this.getUserMediaSuccess.bind(this)
                          );
                        } else {
                          this.log(
                            'JWT Request failed, status: ' + xhr.statusText
                          );
                          deferred.reject(
                            makeError(
                              'Failed to acquire jwt at /api/jwt',
                              'noServer'
                            )
                          );
                        }
                      }
                      return [2 /*return*/];
                    });
                  });
                };
                xhr.send();
                return [2 /*return*/, deferred.promise];
              });
            });
          };
          Session.prototype.webcamRequested = function (
            requestedMedia,
            requiredMedia
          ) {
            return (
              !this._audioOnly &&
              [UserMedia.MicrophoneAndCamera, UserMedia.Camera].some(function (
                r
              ) {
                return [requestedMedia, requiredMedia].includes(r);
              })
            );
          };
          Session.prototype.micRequested = function (
            requestedMedia,
            requiredMedia
          ) {
            return [UserMedia.Microphone, UserMedia.MicrophoneAndCamera].some(
              function (r) {
                return [requestedMedia, requiredMedia].includes(r);
              }
            );
          };
          Session.prototype.getMediaConstraints = function (
            requestedMedia,
            requiredMedia
          ) {
            // checking supported constraints only for debugging purpose, no need to use it when applying constraints
            // as providing specific values for constraints, means they are a 'best effort' rather than required
            // https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API/Constraints#requesting_a_specific_value_for_a_setting
            var supports = navigator.mediaDevices.getSupportedConstraints();
            this.log(
              'Browser supports media constraints: ' + supports,
              'debug'
            );
            return {
              audio: this.micRequested(requestedMedia, requiredMedia)
                ? this._audioOptions
                : false,
              video: this.webcamRequested(requestedMedia, requiredMedia)
                ? this._videoOptions
                : false,
            };
          };
          Session.prototype.selectUserMedia = function (
            requestedMedia,
            requiredMedia,
            deferred,
            completion
          ) {
            var _this = this;
            if (
              requestedMedia === UserMedia.None &&
              requiredMedia === UserMedia.None
            ) {
              // no microphone or camera is required or requested
              completion(null, deferred);
              return;
            }
            if (navigator.mediaDevices.getUserMedia) {
              var constraints = this.getMediaConstraints(
                requestedMedia,
                requiredMedia
              );
              this.log('Best video constraints: ' + constraints, 'debug');
              navigator.mediaDevices
                .getUserMedia(constraints)
                .then(function (stream) {
                  completion(stream, deferred);
                })
                .catch(function (error) {
                  //fail when required media wasn't obtained
                  if (requiredMedia === requestedMedia) {
                    _this.log(
                      'getUserMedia could not get required media, error given: ' +
                        error,
                      'debug'
                    );
                    deferred.reject(_this.MakeErrorForUserMedia(error));
                  }
                  //re-try required media fallback
                  else if (requiredMedia !== UserMedia.None) {
                    _this.getUserMediaRequiredOnlyFallback(
                      requiredMedia,
                      deferred,
                      completion
                    );
                  }
                  //re-try mic only fallback
                  else if (requestedMedia === UserMedia.MicrophoneAndCamera) {
                    _this.getUserMediaAudioOnlyFallback(deferred, completion);
                  }
                  //complete without a stream
                  else {
                    completion(null, deferred);
                  }
                });
            } else {
              deferred.reject(
                makeError(
                  'Your browser does not support getUserMedia API',
                  'notSupported'
                )
              );
            }
          };
          Session.prototype.getUserMediaRequiredOnlyFallback = function (
            requiredMedia,
            deferred,
            completion
          ) {
            var _this = this;
            this.log('Retrying with required media only', 'debug');
            var constraints = this.getMediaConstraints(
              UserMedia.None,
              requiredMedia
            );
            this.log('Attempt constraints: ' + constraints, 'debug');
            return navigator.mediaDevices
              .getUserMedia(constraints)
              .then(function (stream) {
                completion(stream, deferred);
              })
              .catch(function (error) {
                _this.log(
                  'getUserMedia could not get required media, error given: ' +
                    error,
                  'debug'
                );
                //fail when required media wasn't obtained
                deferred.reject(_this.MakeErrorForUserMedia(error));
              });
          };
          Session.prototype.getUserMediaAudioOnlyFallback = function (
            deferred,
            completion
          ) {
            var _this = this;
            this.log('Retrying with microphone only', 'debug');
            var constraints = {
              video: false,
              audio: this._audioOptions,
            };
            this.log('Attempt constraints: ' + constraints, 'debug');
            return navigator.mediaDevices
              .getUserMedia(constraints)
              .then(function (stream) {
                completion(stream, deferred);
              })
              .catch(function (error) {
                _this.log(
                  'getUserMedia could not get microphone audio, error given: ' +
                    error,
                  'debug'
                );
                // still succeed as fallback is only tried if media was required, not requested
                completion(null, deferred);
              });
          };
          Session.prototype.MakeErrorForUserMedia = function (error) {
            var name = 'noUserMedia';
            // Returning more specific errors below is considered a breaking change which we
            // cannot accommodate currently. This will be reinstated in the future, likely for v15
            // At that time, the error codes in Scene.connect() and scene.setMediaDeviceActive() need re-documenting -
            // see https://github.com/soulmachines/smwebsdk/blob/dfe3e1dc8d57aac17cb0be38fa2527190cd78ef4/src/Scene.ts#L916-L918
            // if (error.name === 'NotAllowedError' || error.name === 'SecurityError') {
            //   name = 'userMediaNotAllowed';
            // } else if (
            //   error.name === 'AbortError' ||
            //   error.name === 'NotReadableError'
            // ) {
            //   name = 'userMediaFailed';
            // }
            return makeError(error.message, name);
          };
          Session.prototype.getUserMediaSuccess = function (stream, deferred) {
            var _this = this;
            this.log('Got user media', 'debug');
            this._localStream = stream;
            this.microphoneMuted = true; // mute the local microphone until the DP is visible
            // Connect to the session server
            // To pass the Json Web Token (jwt) to the server when opening the websocket
            // we basically have three options with the available javascript api:
            // 1) pass as a 'access_token' query parameter similar to auth2 bearer tokens when not auth header
            // 2) pass as basic auth user/pass embedded in the url
            // 3) pass as a custom protocol which is translated into the 'Sec-WebSocket-Protocol' request header
            //    more info here: https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api
            // We've gone with using a query parameter with ssl.
            // create and connect the websocket
            // Note that javscript websockets do not allow most request headers to be set.  The two exceptions
            // are the Authorization header (via basic auth) and the protocol header - neither of which
            // are ideal for our jwt token.  Hence instead we pass the jwt as a query parameter.
            this.log('smsdk: connecting to: ' + this._serverUri);
            if (!this._accessToken) {
              this._serverConnection = new WebSocket(this._serverUri);
            } else {
              this._serverConnection = new WebSocket(
                this._serverUri + '?access_token=' + this._accessToken
              );
            }
            this._serverConnection.onmessage = function (msg) {
              try {
                _this.gotMessageFromServer(msg, deferred);
              } catch (e) {
                _this.log(
                  'smsdk: unexpected exception processing received message: ' +
                    e
                );
              }
            };
            this._serverConnection.onerror = function (event) {
              if (deferred.isPending()) {
                deferred.reject(
                  makeError('websocket failed', 'serverConnectionFailed')
                );
              }
            };
            // wait for the websocket to open, then continue with setup
            this._serverConnection.onopen = function (event) {
              _this.log('Websocket open');
              // wait for the welcome 'established' message to receive the ice servers, hence nothing more to do here
            };
            // setup a close handler
            this._serverConnection.onclose = function (event) {
              _this.log(
                'smsdk: websocket closed: code(' +
                  event.code +
                  '), reason(' +
                  event.reason +
                  '), clean(' +
                  event.wasClean +
                  ')'
              );
              if (!deferred.isRejected) {
                _this.close(false, 'normal', deferred);
              }
            };
          };
          Session.prototype.hasTurnServer = function (iceServers) {
            var e_1, _a, e_2, _b;
            // Check for at least one turn server by url in the array of ice servers
            if (!iceServers) {
              return false;
            }
            try {
              for (
                var iceServers_1 = __values(iceServers),
                  iceServers_1_1 = iceServers_1.next();
                !iceServers_1_1.done;
                iceServers_1_1 = iceServers_1.next()
              ) {
                var server = iceServers_1_1.value;
                if (!server || !server.urls) {
                  continue;
                }
                try {
                  for (
                    var _c = ((e_2 = void 0), __values(server.urls)),
                      _d = _c.next();
                    !_d.done;
                    _d = _c.next()
                  ) {
                    var url = _d.value;
                    if (url.indexOf('turn:') === 0) {
                      return true;
                    }
                  }
                } catch (e_2_1) {
                  e_2 = { error: e_2_1 };
                } finally {
                  try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                  } finally {
                    if (e_2) throw e_2.error;
                  }
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (
                  iceServers_1_1 &&
                  !iceServers_1_1.done &&
                  (_a = iceServers_1.return)
                )
                  _a.call(iceServers_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
            return false;
          };
          Session.prototype.gotMessageFromServer = function (
            websocket_message,
            deferred
          ) {
            var _this = this;
            var _a, _b;
            var raw_text = websocket_message.data;
            this.log('message received: ' + raw_text);
            var message = JSON.parse(raw_text);
            var category = message.category;
            var name = message.name;
            var body = message.body;
            if (category !== 'webrtc') {
              // If there is a control connection then forward 'scene' messages to that
              if (this._controlConnection !== null && category === 'scene') {
                if (
                  this._controlOpen &&
                  this._serverConnection.readyState === WebSocket.OPEN
                ) {
                  this._controlConnection.send(raw_text);
                } else {
                  this._controlQueue.push(raw_text);
                }
              }
              // forward on non-webrtc messages (e.g. scene)
              this._onMessage(message);
              return;
            }
            if (message.kind !== 'event') {
              // currently ignore requests and responses
              return;
            }
            if (name === 'established') {
              // Create the peer connection configuration from the established body
              // which includes the ice servers we should use
              var config = { iceServers: [] };
              if (body.iceServers) {
                config.iceServers = body.iceServers;
                // If at least one ice server is a turn server then force
                // our traffic to route over turn (relay)
                if (this.hasTurnServer(body.iceServers)) {
                  this.log('Detected turn server, forcing relay mode');
                  config.iceTransportPolicy = 'relay';
                }
              }
              this.log('selected ice servers: ' + config.iceServers);
              if (
                body.settings &&
                typeof body.settings.microphoneMuteDelay === 'number'
              ) {
                this._microphoneMuteDelay = body.settings.microphoneMuteDelay;
              }
              this.log(
                'microphone mute delay after persona speech: ' +
                  this._microphoneMuteDelay
              );
              // Send logging to server  server if requested by the server
              this._shouldLogToServer =
                (_b =
                  (_a = body.settings) === null || _a === void 0
                    ? void 0
                    : _a.logToServer) !== null && _b !== void 0
                  ? _b
                  : false;
              // Setup the WebRTC peer connection
              this._peerConnection = new RTCPeerConnection(config);
              // ref: Ice candidate will only trigger when media video is enabled in Safari
              // https://stackoverflow.com/a/53914556
              this._peerConnection.onicecandidate =
                this.gotIceCandidate.bind(this);
              if ('ontrack' in this._peerConnection && !this._features.isEdge) {
                // todo update when angular 7
                // This doesnt work with angular yet because of old definitions
                // this._peerConnection.ontrack = (event:RTCTrackEvent)=>{
                this._peerConnection.ontrack = function (event) {
                  if (
                    event.track.kind === 'video' ||
                    event.track.kind === 'audio'
                  ) {
                    if (
                      !_this._remoteStream ||
                      (!_this._audioOnly && event.track.kind === 'video')
                    ) {
                      _this.onRemoteStream(event.streams[0]);
                    }
                  }
                };
                // Attach a video loaded event so the server can be notified when the video is
                // ready to start playing
                this._videoElement.addEventListener(
                  'loadeddata',
                  this.onVideoLoaded.bind(this)
                );
                this._removeListeners.push({
                  target: this._videoElement,
                  name: 'loadeddata',
                  callback: this.onVideoLoaded,
                });
              } else {
                // fallback to stream (for IE/Safari plugin)
                // onaddstream is deprecated
                // This feature has been removed from the Web standards.
                // Though some browsers may still support it, it is in the process of being dropped.
                // Writing like this to pass type checking as this isnt in current spec and therefore
                // neither the type definitions
                this._peerConnection.onaddstream = function (streamEvent) {
                  _this.onRemoteStream(streamEvent.stream);
                };
              }
              this._peerConnection.oniceconnectionstatechange = function (e) {
                // `this._peerConnection.iceConnectionState === 'disconnected'` is quite handy
                _this.log(
                  'ICE connection state: ' +
                    _this._peerConnection.iceConnectionState
                );
                if (_this._peerConnection.iceConnectionState === 'failed') {
                  makeError('ice connection failed', 'mediaStreamFailed');
                  if (deferred && deferred.isPending()) {
                    // Close the connection and reject the connect()
                    _this._serverConnection.close();
                    if (
                      _this._controlConnection &&
                      (_this._controlConnection.readyState === WebSocket.OPEN ||
                        _this._controlConnection.readyState ===
                          WebSocket.CONNECTING)
                    ) {
                      _this._controlConnection.close();
                    }
                    deferred.reject(
                      makeError('ice connection failed', 'mediaStreamFailed')
                    );
                  }
                }
              };
              this.log('adding local media stream if any', 'debug');
              if (this._localStream) {
                if (!this._peerConnection.addTrack) {
                  this._peerConnection.addStream(this._localStream);
                  this.log('adding local media stream by stream', 'debug');
                } else {
                  try {
                    this.log('adding local media stream by track', 'debug');
                    this._localStream.getTracks().forEach(function (track) {
                      _this._peerConnection.addTrack(track, _this._localStream);
                    });
                  } catch (e) {
                    this.logger.log('error', e);
                  }
                }
              }
              // Add an audio and video transceiver that are send and receive,
              // regardless of whether the user microphone / camera is currently
              // available.
              this._peerConnection.addTransceiver('audio', {
                direction: 'sendrecv',
              });
              this._peerConnection.addTransceiver('video', {
                direction: 'sendrecv',
              });
              // Create a webrtc offer
              var offerOptions = {
                voiceActivityDetection: false,
              };
              this.createOffer(this._peerConnection, offerOptions)
                .then(this.createdDescription.bind(this))
                .catch(this._sessionError.bind(this));
            } else if (name === 'accepted') {
              this.log('accepted, session_id = ' + body.sessionId);
              this._sessionId = body.sessionId;
              this._server = body.server;
              this._sceneId = body.sceneId;
              // The session has been accepted, send any outgoing queued messages
              for (var i = 0; i < this._outgoingQueue.length; i++) {
                this._outgoingQueue[i].body.sessionId = this._sessionId;
                this.sendMessage(this._outgoingQueue[i]);
              }
              this._outgoingQueue = [];
              // Monitor for orientation change events to update the camera rotation
              var callback = function () {
                if (_this) {
                  _this.sendCameraRotation();
                }
              };
              window.addEventListener('orientationchange', callback);
              this._removeListeners.push({
                target: window,
                name: 'orientationchange',
                callback: callback,
              });
              this.sendCameraRotation();
              var view = document.defaultView || window;
              var style = view.getComputedStyle(this._videoElement);
              var video_width = parseInt('' + style.width, 10); // cs check changed frm this.videoElement
              var video_height = parseInt('' + style.height, 10);
              this.log(
                'accepted, sending video width/height: ' +
                  video_width +
                  ' / ' +
                  video_height
              );
              this.sendVideoBounds(video_width, video_height);
              // Send all pending log messages
              this.sendlogMessage(this._pendingLog);
              this._pendingLog = [];
              // Check whether the the server needs us to route control messages to the
              // orchestration server.
              if (body.controlUrl) {
                this._controlUrl = body.controlUrl;
                this._controlQueue = [];
                this._controlOpen = false;
                this._controlConnection = new WebSocket(
                  body.controlUrl + '?access_token=' + this._accessToken
                );
                this._controlConnection.onmessage = function (msg) {
                  var raw_text = msg.data;
                  if (raw_text) {
                    // forward this message to the session server
                    if (_this._serverConnection.readyState === WebSocket.OPEN) {
                      _this._serverConnection.send(raw_text);
                    }
                  }
                };
                this._controlConnection.onerror = function () {
                  _this.close(true, 'controlFailed', deferred);
                };
                // wait for the websocket to open, then continue with setup
                this._controlConnection.onopen = function (event) {
                  _this.log('smsdk: control websocket open');
                  if (!_this._controlOpen) {
                    _this._controlOpen = true;
                    // send any pending orchestration/control messages in the order they were received
                    for (var i = 0; i < _this._controlQueue.length; i++) {
                      _this.log(
                        'smsdk: control websocket now open, forwarding queued message: ' +
                          _this._controlQueue[i]
                      );
                      _this._controlConnection.send(_this._controlQueue[i]);
                    }
                    _this._controlQueue = [];
                  }
                };
                // setup a close handler
                this._controlConnection.onclose = function (event) {
                  _this.log(
                    'smsdk: control closed: code(' +
                      event.code +
                      '), reason(' +
                      event.reason +
                      '), clean(' +
                      event.wasClean +
                      ')'
                  );
                  _this.close(true, 'controlDisconnected', deferred);
                };
              }
            } else if (name === 'answer') {
              this.log('set remote description');
              this.log(JSON.stringify(body));
              var sessionDescription = {
                sdp: body.sdp,
                type: 'answer',
              };
              this.setRemoteDescription(
                this._peerConnection,
                sessionDescription
              )
                .then(function () {
                  // Currently there's nothing to do
                })
                .catch(this._sessionError.bind(this));
            } else if (name === 'connected') {
              if (this._remoteStream) {
                this.onConnected();
                if (deferred) {
                  deferred.resolve(body.sessionId);
                }
              } else {
                this.log('Connected but no remote media stream available');
                // The remote stream has not connected yet, give it more time to connect
                this._connectPendingRemoteStream = function () {
                  _this.onConnected();
                  if (deferred) {
                    deferred.resolve(body.sessionId);
                  }
                };
              }
            } else if (name === 'ice') {
              this.log('add ice candidate');
              var addCandidate = void 0;
              if (body.complete) {
                if (this._features.isEdge) {
                  addCandidate = this._peerConnection.addIceCandidate(
                    new RTCIceCandidate({
                      candidate: '',
                      sdpMid: '',
                      sdpMLineIndex: 0,
                    })
                  );
                }
              } else {
                var iceCandidate = new RTCIceCandidate({
                  candidate: body.candidate,
                  sdpMid: body.sdpMid,
                  sdpMLineIndex: body.sdpMLineIndex,
                });
                addCandidate =
                  this._peerConnection.addIceCandidate(iceCandidate);
              }
              if (addCandidate) {
                addCandidate.catch(this._sessionError.bind(this));
              }
            } else if (name === 'offer') {
              // NB: For calls inbound to browser, currently not used
              //     Perhaps we might use this for queueing to talk to an avatar?
              this._sessionId = body.sessionId;
              var sessionDescription = {
                sdp: body.sdp,
                type: 'offer',
              };
              this.setRemoteDescription(
                this._peerConnection,
                sessionDescription
              )
                // Create an answer in response to the offer
                .then(function () {
                  return _this.createAnswer(_this._peerConnection);
                })
                .then(this.createdDescription.bind(this))
                .catch(this._sessionError.bind(this));
            } else if (name === 'userText') {
              this.log('rtc - user text message received: ' + body.userText);
              this._onUserText(body.userText);
            } else if (name === 'close') {
              this.close(false, body.reason, deferred);
            }
          };
          Session.prototype.gotIceCandidate = function (event) {
            if (event.candidate) {
              this.log('got local ice candidate');
              // Note we name each ice field as the IE/Safari plugin doesn't reflect these for json serialization
              this.sendRtcEvent('ice', {
                complete: false,
                candidate: event.candidate.candidate,
                sdpMid: event.candidate.sdpMid,
                sdpMLineIndex: event.candidate.sdpMLineIndex,
              });
            } else {
              this.log('end ice candidate');
              // all ice candidates have been gathered, send an end of ice notification
              this.sendRtcEvent('ice', {
                complete: true,
                candidate: '',
                sdpMid: '',
                sdpMLineIndex: 0,
              });
            }
          };
          Session.prototype.createdDescription = function (
            description,
            messageName
          ) {
            var _this = this;
            if (messageName === void 0) {
              messageName = 'offer';
            }
            this.log('got description');
            // Note we name each ice field as the IE/Safari plugin doesn't  reflect these for json serialization
            var descriptionObj = {
              sdp: description.sdp,
              type: description.type,
            };
            this.log(JSON.stringify({ sdp: descriptionObj }));
            this.setLocalDescription(this._peerConnection, description)
              .then(function () {
                // Note with the sdp offer information we also send the
                // current video element width/height to remote end when
                // setting up webrtc session so that it can send the best
                // width/height
                _this.log('send sdp offer to server');
                // Note we name each sdp field as the IE/Safari plugin doesn't  reflect these for json serialization
                _this.sendRtcEvent(messageName, {
                  sdp: _this._peerConnection.localDescription
                    ? _this._peerConnection.localDescription.sdp
                    : null,
                  type: _this._peerConnection.localDescription
                    ? _this._peerConnection.localDescription.type
                    : null,
                  user_text: _this._connectUserText,
                  features: { videoStartedEvent: true },
                });
              })
              .catch(this._sessionError.bind(this));
          };
          Session.prototype.onRemoteStream = function (stream) {
            this.log('smsdk - got remote stream');
            this._remoteStream = stream;
            this.log(
              'smsdk - ICE connection state: ' +
                this._peerConnection.iceConnectionState
            );
            if (this._connectPendingRemoteStream) {
              // A connect has been received however it has been paused while
              // we waited for the remote stream - continue it now
              this._connectPendingRemoteStream();
              this._connectPendingRemoteStream = null;
            }
          };
          Session.prototype.onConnected = function () {
            var _this = this;
            var _a, _b;
            this._videoElement.hidden = false; // remote video stream
            this._videoElement.srcObject = this._remoteStream;
            var callback = function (event) {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  if (this._remoteStream) {
                    this._remoteStream.addTrack(event.track);
                  }
                  return [2 /*return*/];
                });
              });
            };
            this._peerConnection.addEventListener('track', callback);
            this._removeListeners.push({
              target: this._peerConnection,
              name: 'track',
              callback: callback,
            });
            this.log('video enabled');
            // Update the server of the current camera active state
            this.sendUserCamera();
            // Update the application of the current microphone & camera state
            (_a = this._onMicrophoneActive) === null || _a === void 0
              ? void 0
              : _a.call(this.isMicrophoneActive());
            (_b = this._onCameraActive) === null || _b === void 0
              ? void 0
              : _b.call(this.isCameraActive());
          };
          Session.prototype.onVideoLoaded = function (e) {
            var _this = this;
            this.log('video has loaded');
            var videoStarted = function () {
              _this.log('video has started playing');
              _this.sendRtcEvent('videoStarted', {});
              _this.microphoneMuted = false; // allow the user to speak now that the DP is visible
            };
            // If the video element isn't muted the videoStarted event can be sent immediately
            if (!this._videoElement.muted) {
              videoStarted();
              return;
            }
            // The video element is muted, wait for it to be unmuted before declaring the video fully started
            // there isn't an event for unmuted however volumechange apparently provides a
            // fair alternative: https://stackoverflow.com/questions/25105414/html5-video-onmuted-and-onloop-event
            var unmuteCallback = function () {
              videoStarted();
              _this._videoElement.removeEventListener(
                'volumechange',
                unmuteCallback
              );
            };
            this._videoElement.addEventListener(
              'volumechange',
              unmuteCallback,
              false
            );
          };
          Session.prototype.sendRtcEvent = function (name, body) {
            if (this._serverConnection === null) {
              return;
            }
            if (this._sessionId) {
              body.sessionId = this._sessionId;
            }
            var payload = {
              category: 'webrtc',
              kind: 'event',
              name: name,
              body: body,
            };
            //this.log('sendRtcEvent, payload = ' + JSON.stringify(payload));
            if (this._sessionId || name === 'offer') {
              this.sendMessage(payload);
            } else {
              // The session has not yet been accepted, queue the message until it is
              this._outgoingQueue.push(payload);
            }
          };
          Session.prototype.sendVideoBounds = function (width, height) {
            this.sendRtcEvent('videoBounds', { width: width, height: height });
          };
          /**
           * Sends updated user camera rotation to server
           * this gives the app the chance to choose the required rotation of the user camera
           * such that it matches the devices orientation.  Values can be 0, 90, 180, 270.
           * @param rotation - The clockwise rotation in degrees of the user video feed (0, 90, 180 or 270)
           * @internal
           */
          Session.prototype.sendUserCamera = function (rotation) {
            var body = { active: this.isCameraActive() };
            if (rotation !== undefined) {
              body.rotation = rotation;
            }
            this.sendRtcEvent('userCamera', body);
          };
          Session.prototype.sendCameraRotation = function () {
            if (this._features.isIos) {
              var orientation = window.orientation;
              this.log(
                'send updated camera rotation, device orientation: ' +
                  orientation
              );
              // Compute the camera orientation for iOS, degrees to rotate the image to the right
              // to give it a correct orientation relative to how the iOS device is held
              var rotateCamera = 0;
              // NB: iOS safari fixedCameraOrientation = -90; - iOS front camera orientation in terms of window orientation positions
              if (orientation === 0) {
                rotateCamera = 90;
              } else if (orientation === 90) {
                rotateCamera = 180;
              } else if (orientation === 180) {
                rotateCamera = 270;
              } else if (orientation === -90) {
                rotateCamera = 0;
              }
              this.sendUserCamera(rotateCamera);
            }
          };
          Session.prototype.sendMessage = function (message) {
            if (!this._serverConnection) {
              return;
            }
            if (this._serverConnection.readyState === WebSocket.OPEN) {
              // connected
              this._serverConnection.send(JSON.stringify(message));
            } else {
              this.log('smsdk - not ready, discarding message: ' + message);
            }
          };
          Session.prototype.sendUserText = function (text) {
            this.sendRtcEvent('userText', { userText: text });
          };
          Session.prototype.hasCamera = function (userMedia) {
            return (
              userMedia === UserMedia.Camera ||
              userMedia === UserMedia.MicrophoneAndCamera
            );
          };
          Session.prototype.hasMicrophone = function (userMedia) {
            return (
              userMedia === UserMedia.Microphone ||
              userMedia === UserMedia.MicrophoneAndCamera
            );
          };
          Session.prototype.makeUserMedia = function (microphone, webcam) {
            if (microphone && webcam) {
              return UserMedia.MicrophoneAndCamera;
            } else if (microphone) {
              return UserMedia.Microphone;
            } else if (webcam) {
              return UserMedia.Camera;
            }
            return UserMedia.None;
          };
          Session.prototype.findSenderTrackByKind = function (kind) {
            var e_3, _a;
            var _b;
            if (!this._peerConnection) {
              return null;
            }
            var senders = this._peerConnection.getSenders();
            try {
              for (
                var senders_1 = __values(senders),
                  senders_1_1 = senders_1.next();
                !senders_1_1.done;
                senders_1_1 = senders_1.next()
              ) {
                var sender = senders_1_1.value;
                if (
                  sender.track &&
                  ((_b = sender.track) === null || _b === void 0
                    ? void 0
                    : _b.kind) === kind
                ) {
                  return sender.track;
                }
              }
            } catch (e_3_1) {
              e_3 = { error: e_3_1 };
            } finally {
              try {
                if (senders_1_1 && !senders_1_1.done && (_a = senders_1.return))
                  _a.call(senders_1);
              } finally {
                if (e_3) throw e_3.error;
              }
            }
            return null;
          };
          Session.prototype.findSenderByKind = function (kind) {
            var e_4, _a, e_5, _b;
            var _c, _d;
            if (!this._peerConnection) {
              return null;
            }
            try {
              for (
                var _e = __values(this._peerConnection.getTransceivers()),
                  _f = _e.next();
                !_f.done;
                _f = _e.next()
              ) {
                var transceiver = _f.value;
                if (
                  transceiver.direction === 'sendrecv' &&
                  ((_d =
                    (_c = transceiver.receiver) === null || _c === void 0
                      ? void 0
                      : _c.track) === null || _d === void 0
                    ? void 0
                    : _d.kind) === kind
                ) {
                  return transceiver.sender;
                }
              }
            } catch (e_4_1) {
              e_4 = { error: e_4_1 };
            } finally {
              try {
                if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
              } finally {
                if (e_4) throw e_4.error;
              }
            }
            try {
              for (
                var _g = __values(this._peerConnection.getSenders()),
                  _h = _g.next();
                !_h.done;
                _h = _g.next()
              ) {
                var sender = _h.value;
                if (sender.track === null || sender.track.kind === kind) {
                  return sender;
                }
              }
            } catch (e_5_1) {
              e_5 = { error: e_5_1 };
            } finally {
              try {
                if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
              } finally {
                if (e_5) throw e_5.error;
              }
            }
            return null;
          };
          Session.prototype.processChangeUserMediaQueue = function () {
            var _a, _b, _c, _d;
            return __awaiter(this, void 0, void 0, function () {
              var operation, lastMicrophoneActive, lastCameraActive, e_6;
              return __generator(this, function (_e) {
                switch (_e.label) {
                  case 0:
                    operation =
                      this._changeUserMediaQueue.length > 0
                        ? this._changeUserMediaQueue[0]
                        : undefined;
                    if (!operation) return [3 /*break*/, 5];
                    _e.label = 1;
                  case 1:
                    _e.trys.push([1, 3, , 4]);
                    lastMicrophoneActive = this.isMicrophoneActive();
                    lastCameraActive = this.isCameraActive();
                    // Change the media to that requested by the operation
                    return [
                      4 /*yield*/,
                      this.changeUserMediaInternal(
                        this.makeUserMedia(
                          (_a = operation.microphone) !== null && _a !== void 0
                            ? _a
                            : lastMicrophoneActive,
                          (_b = operation.camera) !== null && _b !== void 0
                            ? _b
                            : lastCameraActive
                        )
                      ),
                    ];
                  case 2:
                    // Change the media to that requested by the operation
                    _e.sent();
                    // Notify of any change of microphone state
                    if (
                      operation.microphone !== undefined &&
                      operation.microphone !== lastMicrophoneActive
                    ) {
                      (_c = this._onMicrophoneActive) === null || _c === void 0
                        ? void 0
                        : _c.call(this.isMicrophoneActive());
                    }
                    // Notify of any change of camera state
                    if (
                      operation.camera !== undefined &&
                      operation.camera !== lastCameraActive
                    ) {
                      (_d = this._onCameraActive) === null || _d === void 0
                        ? void 0
                        : _d.call(this.isCameraActive());
                    }
                    // The operation has completed successfully
                    operation.deferred.resolve();
                    return [3 /*break*/, 4];
                  case 3:
                    e_6 = _e.sent();
                    operation.deferred.reject(e_6);
                    return [3 /*break*/, 4];
                  case 4:
                    // Remove the operation as it's now finished
                    this._changeUserMediaQueue.shift();
                    _e.label = 5;
                  case 5:
                    if (operation) return [3 /*break*/, 0];
                    _e.label = 6;
                  case 6:
                    return [2 /*return*/];
                }
              });
            });
          };
          Session.prototype.changeUserMediaInternal = function (newUserMedia) {
            return __awaiter(this, void 0, Promise, function () {
              var microphoneTrack,
                cameraTrack,
                needMicrophoneUpgrade,
                needCameraUpgrade,
                newMediaStream,
                requiredMedia,
                mediaDeferred;
              var _this = this;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    microphoneTrack = this.findSenderTrackByKind('audio');
                    cameraTrack = this.findSenderTrackByKind('video');
                    needMicrophoneUpgrade =
                      this.hasMicrophone(newUserMedia) &&
                      (!microphoneTrack ||
                        microphoneTrack.readyState === 'ended');
                    needCameraUpgrade =
                      this.hasCamera(newUserMedia) &&
                      (!cameraTrack || cameraTrack.readyState === 'ended');
                    newMediaStream = null;
                    if (!(needMicrophoneUpgrade || needCameraUpgrade))
                      return [3 /*break*/, 2];
                    requiredMedia = this.makeUserMedia(
                      needMicrophoneUpgrade,
                      needCameraUpgrade
                    );
                    mediaDeferred = new Deferred();
                    this.selectUserMedia(
                      requiredMedia,
                      requiredMedia,
                      mediaDeferred,
                      function (stream, deferred) {
                        return __awaiter(_this, void 0, void 0, function () {
                          return __generator(this, function (_a) {
                            newMediaStream = stream;
                            deferred.resolve();
                            return [2 /*return*/];
                          });
                        });
                      }
                    );
                    return [4 /*yield*/, mediaDeferred.promise];
                  case 1:
                    _a.sent();
                    if (!this._localStream) {
                      this._localStream = new MediaStream();
                    }
                    _a.label = 2;
                  case 2:
                    // Update the microphone track
                    return [
                      4 /*yield*/,
                      this.updateSenderTrack(
                        'audio',
                        this.hasMicrophone(newUserMedia),
                        newMediaStream
                      ),
                    ];
                  case 3:
                    // Update the microphone track
                    _a.sent();
                    // Update the camera track
                    return [
                      4 /*yield*/,
                      this.updateSenderTrack(
                        'video',
                        this.hasCamera(newUserMedia),
                        newMediaStream
                      ),
                    ];
                  case 4:
                    // Update the camera track
                    _a.sent();
                    // Update the server of the current camera active state
                    this.sendUserCamera();
                    return [2 /*return*/];
                }
              });
            });
          };
          // Update the RTP sender / track to the given active state. If active then the newMediaStream must
          // contain a track for the requested 'kind'
          Session.prototype.updateSenderTrack = function (
            kind,
            active,
            newMediaStream
          ) {
            var _a, _b;
            return __awaiter(this, void 0, Promise, function () {
              var sender, track, newTrack, e_7;
              return __generator(this, function (_c) {
                switch (_c.label) {
                  case 0:
                    sender = this.findSenderByKind(kind);
                    track =
                      sender === null || sender === void 0
                        ? void 0
                        : sender.track;
                    if (!(!!sender && (!track || active !== track.enabled)))
                      return [3 /*break*/, 7];
                    this.log('new user ' + kind + ' active state = ' + active);
                    if (!active) return [3 /*break*/, 6];
                    _c.label = 1;
                  case 1:
                    _c.trys.push([1, 4, , 5]);
                    if (track) {
                      (_a = this._localStream) === null || _a === void 0
                        ? void 0
                        : _a.removeTrack(track);
                    }
                    if (!newMediaStream) return [3 /*break*/, 3];
                    newTrack = this.getTrackByKind(newMediaStream, kind);
                    if (!newTrack) return [3 /*break*/, 3];
                    (_b = this._localStream) === null || _b === void 0
                      ? void 0
                      : _b.addTrack(newTrack);
                    if (!(sender.track !== newTrack)) return [3 /*break*/, 3];
                    this.log('replacing user ' + kind + ' track');
                    return [4 /*yield*/, sender.replaceTrack(newTrack)];
                  case 2:
                    _c.sent();
                    _c.label = 3;
                  case 3:
                    return [3 /*break*/, 5];
                  case 4:
                    e_7 = _c.sent();
                    this.log(
                      'failed to get user ' + kind + ' track, error: ' + e_7
                    );
                    throw makeError(
                      'failed to get user ' + kind + ': ' + e_7,
                      'failedUpgrade'
                    );
                  case 5:
                    return [3 /*break*/, 7];
                  case 6:
                    if (track) {
                      track.enabled = false;
                      track.stop();
                    }
                    _c.label = 7;
                  case 7:
                    return [2 /*return*/];
                }
              });
            });
          };
          Session.prototype.getTrackByKind = function (stream, kind) {
            var e_8, _a;
            if (stream) {
              try {
                for (
                  var _b = __values(stream.getTracks()), _c = _b.next();
                  !_c.done;
                  _c = _b.next()
                ) {
                  var track = _c.value;
                  if (track.kind === kind) {
                    return track;
                  }
                }
              } catch (e_8_1) {
                e_8 = { error: e_8_1 };
              } finally {
                try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }
            }
            return undefined;
          };
          Session.prototype.isSenderTrackEnabled = function (kind) {
            var track = this.findSenderTrackByKind(kind);
            return Boolean(
              track === null || track === void 0 ? void 0 : track.enabled
            );
          };
          Session.prototype.isMicrophoneActive = function () {
            return this.isSenderTrackEnabled('audio');
          };
          Session.prototype.isCameraActive = function () {
            return this.isSenderTrackEnabled('video');
          };
          Session.prototype.setMediaDeviceActive = function (_a) {
            var microphone = _a.microphone,
              camera = _a.camera;
            return __awaiter(this, void 0, Promise, function () {
              var deferred;
              return __generator(this, function (_b) {
                deferred = new Deferred();
                this._changeUserMediaQueue.push({
                  microphone: microphone,
                  camera: camera,
                  deferred: deferred,
                });
                if (this._changeUserMediaQueue.length === 1) {
                  this.processChangeUserMediaQueue();
                }
                return [2 /*return*/, deferred.promise];
              });
            });
          };
          Session.prototype.close = function (sendRtcClose, reason, deferred) {
            var e_9, _a;
            if (sendRtcClose === void 0) {
              sendRtcClose = true;
            }
            if (reason === void 0) {
              reason = 'normal';
            }
            if (this._closed) {
              return;
            }
            this._closed = true;
            if (this._peerConnection) {
              try {
                this._peerConnection.close();
              } catch (e) {
                this.logger.log('error', e);
              }
            }
            if (this._localStream) {
              try {
                var tracks = this._localStream.getTracks();
                for (var i in tracks) {
                  tracks[i].stop();
                }
              } catch (e) {
                this.logger.log('error', e);
              }
            }
            if (sendRtcClose) {
              this.sendRtcEvent('close', { reason: 'normal' });
            }
            if (deferred) {
              if (deferred.isResolved()) {
                this._onClose(reason);
              } else {
                deferred.reject(
                  makeError('websocket closed: ' + reason, reason)
                );
              }
            }
            if (this._serverConnection) {
              this.log('smsdk: closing server connection');
              this._serverConnection.close();
            }
            if (this._controlConnection) {
              this._controlConnection.close();
            }
            try {
              // Deregister event listeners
              for (
                var _b = __values(this._removeListeners), _c = _b.next();
                !_c.done;
                _c = _b.next()
              ) {
                var listener = _c.value;
                listener.target.removeEventListener(
                  listener.name,
                  listener.callback
                );
              }
            } catch (e_9_1) {
              e_9 = { error: e_9_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              } finally {
                if (e_9) throw e_9.error;
              }
            }
          };
          Session.prototype.createOffer = function (peerConnection, options) {
            return peerConnection.createOffer(options);
          };
          Session.prototype.setRemoteDescription = function (
            peerConnection,
            sessionDescription
          ) {
            return peerConnection.setRemoteDescription(sessionDescription);
          };
          Session.prototype.setLocalDescription = function (
            peerConnection,
            description
          ) {
            return peerConnection.setLocalDescription(description);
          };
          Session.prototype.createAnswer = function (peerConnection) {
            return peerConnection.createAnswer();
          };
          Object.defineProperty(Session.prototype, 'peerConnection', {
            get: function () {
              return this._peerConnection;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'serverConnection', {
            get: function () {
              return this._serverConnection;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'sessionId', {
            get: function () {
              return this._sessionId;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'server', {
            get: function () {
              return this._server;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'sceneId', {
            get: function () {
              return this._sceneId;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'isMicrophoneConnected', {
            get: function () {
              return !!this.findSenderTrackByKind('audio');
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'isCameraConnected', {
            get: function () {
              return !!this.findSenderTrackByKind('video');
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'features', {
            get: function () {
              return this._features;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'microphoneMuteDelay', {
            get: function () {
              return this._microphoneMuteDelay;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'userMediaStream', {
            get: function () {
              return this._localStream;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'microphoneMuted', {
            get: function () {
              if (!this._localStream) {
                return true;
              }
              var audioTracks = this._localStream.getAudioTracks();
              if (!audioTracks || audioTracks.length < 1) {
                return true;
              }
              return !audioTracks[0].enabled;
            },
            set: function (mute) {
              var _a, _b;
              if (!this._localStream) {
                return;
              }
              var audioTracks = this._localStream.getAudioTracks();
              if (!audioTracks || audioTracks.length < 1) {
                return;
              }
              var audioSender = this.findSenderByKind('audio');
              if (
                ((_a =
                  audioSender === null || audioSender === void 0
                    ? void 0
                    : audioSender.track) === null || _a === void 0
                  ? void 0
                  : _a.readyState) === 'live' &&
                audioSender.track === audioTracks[0]
              ) {
                var enable = !mute;
                audioTracks[0].enabled = enable;
                console.log('microphone muted active notification: ' + enable);
                (_b = this._onMicrophoneActive) === null || _b === void 0
                  ? void 0
                  : _b.call(enable);
              }
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'webcamMuted', {
            get: function () {
              if (!this._localStream) {
                return true;
              }
              var videoTracks = this._localStream.getVideoTracks();
              if (!videoTracks || videoTracks.length < 1) {
                return true;
              }
              return !videoTracks[0].enabled;
            },
            set: function (mute) {
              var _a, _b;
              if (!this._localStream) {
                return;
              }
              var videoTracks = this._localStream.getVideoTracks();
              if (!videoTracks || videoTracks.length < 1) {
                return;
              }
              var videoSender = this.findSenderByKind('video');
              if (
                ((_a =
                  videoSender === null || videoSender === void 0
                    ? void 0
                    : videoSender.track) === null || _a === void 0
                  ? void 0
                  : _a.readyState) === 'live' &&
                videoSender.track === videoTracks[0]
              ) {
                var enable = !mute;
                videoTracks[0].enabled = enable;
                (_b = this._onCameraActive) === null || _b === void 0
                  ? void 0
                  : _b.call(enable);
              }
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'offsetX', {
            get: function () {
              return 0;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Session.prototype, 'offsetY', {
            get: function () {
              return 0;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(
            Session.prototype,
            'microphoneActiveCallbacks',
            {
              set: function (callbacks) {
                this._onMicrophoneActive = callbacks;
              },
              enumerable: false,
              configurable: true,
            }
          );
          Object.defineProperty(Session.prototype, 'cameraActiveCallbacks', {
            set: function (callbacks) {
              this._onCameraActive = callbacks;
            },
            enumerable: false,
            configurable: true,
          });
          return Session;
        })();

        // CONCATENATED MODULE: ./src/WebSocketSession.ts
        /**
         * @module smwebsdk
         */

        /*
         * Copyright 2020 Soul Machines Ltd. All Rights Reserved.
         */

        /**
         *  WebSocketSession class
         */
        var WebSocketSession_WebSocketSession = /** @class */ (function () {
          function WebSocketSession(serverUri, accessToken, logger) {
            var _this = this;
            if (logger === void 0) {
              logger = new Logger_Logger();
            }
            this.logger = logger;
            this._outgoingQueue = [];
            this._pendingLog = [];
            this._closed = false;
            this._shouldLogToServer = false;
            this._serverUri = serverUri;
            this._accessToken = accessToken;
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this._onClose = function (reason) {}; // owner specifies custom close method
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this._onMessage = function (message) {}; // owner specifies custom message handler
            this._sessionError = function (error) {
              // owner can specify custom session error handler
              _this.logger.log('error', 'smsdk - session error: ' + error);
            };
            this._features = new Features();
          }
          Object.defineProperty(WebSocketSession.prototype, 'onClose', {
            set: function (closeFunction) {
              this._onClose = closeFunction;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(WebSocketSession.prototype, 'onMessage', {
            set: function (messageFunction) {
              this._onMessage = messageFunction;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(WebSocketSession.prototype, 'loggingEnabled', {
            get: function () {
              return this.logger.isEnabled;
            },
            /**
             * @deprecated use setLogging(boolean).
             */
            set: function (enable) {
              this.logger.log(
                'warn',
                'loggingEnabled is deprecated and will be removed in a future version. Please use setLogging(boolean)'
              );
              this.logger.enableLogging(enable);
            },
            enumerable: false,
            configurable: true,
          });
          WebSocketSession.prototype.setMinLogLevel = function (level) {
            this.logger.setMinLogLevel(level);
          };
          WebSocketSession.prototype.setLogging = function (enable) {
            this.logger.enableLogging(enable);
          };
          WebSocketSession.prototype.log = function (text) {
            if (this.loggingEnabled) {
              if (this._shouldLogToServer) {
                this.logToServer(text);
              } else {
                this.logger.log('log', text);
              }
            }
          };
          WebSocketSession.prototype.logToServer = function (text) {
            if (this.sessionId) {
              this.sendlogMessage([text]);
            } else {
              this._pendingLog.push(text);
            }
          };
          WebSocketSession.prototype.sendlogMessage = function (textArray) {
            if (this._sessionId && textArray && textArray.length > 0) {
              var payload = {
                category: 'diagnostics',
                kind: 'event',
                name: 'log',
                body: { name: 'browser', text: textArray },
              };
              this.sendMessage(payload);
            }
          };
          WebSocketSession.prototype.connect = function () {
            return __awaiter(this, void 0, Promise, function () {
              var deferred;
              return __generator(this, function (_a) {
                deferred = new Deferred();
                this._closed = false;
                if (
                  this._serverUri &&
                  (this._serverUri.startsWith('ws:') ||
                    this._serverUri.startsWith('wss:'))
                ) {
                  // A server uri has been specified, continue with the connection
                  this.connectByWebSocket(deferred);
                }
                return [2 /*return*/, deferred.promise];
              });
            });
          };
          WebSocketSession.prototype.connectByWebSocket = function (deferred) {
            var _this = this;
            this.log('smsdk: connecting to: ' + this._serverUri);
            if (!this._accessToken) {
              this._serverConnection = new WebSocket(this._serverUri);
            } else {
              this._serverConnection = new WebSocket(
                this._serverUri + '?access_token=' + this._accessToken
              );
            }
            this._serverConnection.onmessage = function (msg) {
              _this.gotMessageFromServer(msg, deferred);
            };
            this._serverConnection.onerror = function (event) {
              if (deferred.isPending()) {
                deferred.reject(
                  makeError('smsdk websocket failed', 'serverConnectionFailed')
                );
              }
            };
            // wait for the websocket to open, then continue with setup
            this._serverConnection.onopen = function (event) {
              _this.log('smsdk: websocket open');
              deferred.resolve();
            };
            // setup a close handler
            this._serverConnection.onclose = function (event) {
              _this.log(
                'smsdk: websocket closed: code(' +
                  event.code +
                  '), reason(' +
                  event.reason +
                  '), clean(' +
                  event.wasClean +
                  ')'
              );
              if (!deferred.isRejected) {
                _this.close(false, 'normal', deferred);
              }
            };
          };
          WebSocketSession.prototype.gotMessageFromServer = function (
            websocket_message,
            deferred
          ) {
            var raw_text = websocket_message.data;
            this.log('message received: ' + raw_text);
            var message = JSON.parse(raw_text);
            var category = message.category;
            var name = message.name;
            var body = message.body;
            if (category !== 'webrtc') {
              // forward on non-webrtc messages (e.g. scene)
              this._onMessage(message);
              return;
            }
            if (message.kind !== 'event') {
              // currently ignore requests and responses
              return;
            }
            if (name === 'accepted') {
              this.log('accepted, session_id = ' + body.sessionId);
              this._sessionId = body.sessionId;
              // The session has been accepted, send any outgoing queued messages
              for (var i = 0; i < this._outgoingQueue.length; i++) {
                this._outgoingQueue[i].body.sessionId = this._sessionId;
                this.sendMessage(this._outgoingQueue[i]);
              }
              this._outgoingQueue = [];
              // Send all pending log messages
              this.sendlogMessage(this._pendingLog);
              this._pendingLog = [];
            } else if (name === 'close') {
              this.close(false, body.reason, deferred);
            }
          };
          WebSocketSession.prototype.sendMessage = function (message) {
            if (!this._serverConnection) {
              return;
            }
            if (this._serverConnection.readyState === WebSocket.OPEN) {
              // connected
              this._serverConnection.send(JSON.stringify(message));
            } else {
              this.log('smsdk - not ready, discarding message: ' + message);
            }
          };
          WebSocketSession.prototype.close = function (
            sendRtcClose,
            reason,
            deferred
          ) {
            if (sendRtcClose === void 0) {
              sendRtcClose = true;
            }
            if (reason === void 0) {
              reason = 'normal';
            }
            if (this._closed) {
              return;
            }
            this._closed = true;
            if (deferred) {
              if (deferred.isResolved()) {
                this._onClose(reason);
              } else {
                deferred.reject(
                  makeError('websocket closed: ' + reason, reason)
                );
              }
            }
            if (this._serverConnection) {
              this.log('smsdk: closing server connection');
              this._serverConnection.close();
            }
          };
          Object.defineProperty(
            WebSocketSession.prototype,
            'serverConnection',
            {
              get: function () {
                return this._serverConnection;
              },
              enumerable: false,
              configurable: true,
            }
          );
          Object.defineProperty(WebSocketSession.prototype, 'sessionId', {
            get: function () {
              return this._sessionId;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(WebSocketSession.prototype, 'peerConnection', {
            get: function () {
              return null;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(WebSocketSession.prototype, 'features', {
            get: function () {
              return this._features;
            },
            enumerable: false,
            configurable: true,
          });
          WebSocketSession.prototype.sendRtcEvent = function (name, body) {
            // NOOP: Stuff for compatibility with Session in Scene
          };
          WebSocketSession.prototype.sendVideoBounds = function (
            widthIgnored,
            heightIgnored
          ) {
            // NOOP: Stuff for compatibility with Session in Scene
          };
          WebSocketSession.prototype.sendUserText = function (text) {
            this.logger.log(
              'error',
              'WebSocketSession discarding text: ' + text
            );
          };
          Object.defineProperty(
            WebSocketSession.prototype,
            'microphoneMuteDelay',
            {
              get: function () {
                return undefined;
              },
              enumerable: false,
              configurable: true,
            }
          );
          Object.defineProperty(WebSocketSession.prototype, 'microphoneMuted', {
            get: function () {
              return null;
            },
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            set: function (mute) {},
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(WebSocketSession.prototype, 'onUserText', {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            set: function (userTextFunction) {},
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(
            WebSocketSession.prototype,
            'isMicrophoneConnected',
            {
              get: function () {
                return null;
              },
              enumerable: false,
              configurable: true,
            }
          );
          Object.defineProperty(
            WebSocketSession.prototype,
            'isCameraConnected',
            {
              get: function () {
                return null;
              },
              enumerable: false,
              configurable: true,
            }
          );
          Object.defineProperty(WebSocketSession.prototype, 'offsetX', {
            get: function () {
              return 0;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(WebSocketSession.prototype, 'offsetY', {
            get: function () {
              return 0;
            },
            enumerable: false,
            configurable: true,
          });
          WebSocketSession.prototype.isMicrophoneActive = function () {
            return false;
          };
          WebSocketSession.prototype.isCameraActive = function () {
            return false;
          };
          WebSocketSession.prototype.setMediaDeviceActive = function (_a) {
            var microphone = _a.microphone,
              camera = _a.camera;
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (_b) {
                throw makeError(
                  'setMediaDeviceActive not supported on WebSocketSession',
                  'notSupported'
                );
              });
            });
          };
          return WebSocketSession;
        })();

        // CONCATENATED MODULE: ./src/websocket-message/enums/WebsocketCategory.ts
        var WebsocketCategory;
        (function (WebsocketCategory) {
          WebsocketCategory['Scene'] = 'scene';
        })(WebsocketCategory || (WebsocketCategory = {}));

        // CONCATENATED MODULE: ./src/websocket-message/enums/WebsocketKind.ts
        /**
         * @public
         */
        var WebsocketKind;
        (function (WebsocketKind) {
          WebsocketKind['Response'] = 'response';
          WebsocketKind['Request'] = 'request';
        })(WebsocketKind || (WebsocketKind = {}));

        // CONCATENATED MODULE: ./src/websocket-message/WebsocketResponse.ts

        // CONCATENATED MODULE: ./src/websocket-message/WebsocketRequest.ts

        // CONCATENATED MODULE: ./src/websocket-message/index.ts

        // CONCATENATED MODULE: ./src/websocket-message/enums/SpeechState.ts
        /*
         * Copyright 2019-2020 Soul Machines Ltd. All Rights Reserved.
         */
        var SpeechState;
        (function (SpeechState) {
          SpeechState['Idle'] = 'idle';
          SpeechState['Animating'] = 'animating';
          SpeechState['Speaking'] = 'speaking';
        })(SpeechState || (SpeechState = {}));

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/ConversationSendRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/ConversationSetVariablesRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/GetVariablesRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/PersonaRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/AnimateToNamedCameraRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/PlayAnimationRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/SetVariablesRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/GetVariablesListRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/GetModelVariablesListRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/GetModelChildrenRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/GetModelFilterSearchResultRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/GetModelVariableFilterSearchResultRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/StopBlProfilingRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/StartRecognizeRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/StartSpeakingRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/request-body/UpdateContentAwarenessRequestBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/SceneRequest.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/response-body/DemoModeResponseBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/response-body/RecognizeResultsResponseBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/response-body/ConversationResultResponseBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/response-body/SpeechMarkerResponseBody.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/response-body/StateResponseBody.ts
        var FeatureFlag;
        (function (FeatureFlag) {
          FeatureFlag['UI_CONTENT_AWARENESS'] = 'UI_CONTENT_AWARENESS';
          FeatureFlag['UI_SDK_CAMERA_CONTROL'] = 'UI_SDK_CAMERA_CONTROL';
        })(FeatureFlag || (FeatureFlag = {}));

        // CONCATENATED MODULE: ./src/websocket-message/scene/SceneResponse.ts

        // CONCATENATED MODULE: ./src/websocket-message/scene/SceneResponseError.ts

        var SceneResponseError_SceneResponseError = /** @class */ (function (
          _super
        ) {
          __extends(SceneResponseError, _super);
          function SceneResponseError() {
            var _this =
              (_super !== null && _super.apply(this, arguments)) || this;
            _this.requestName = '';
            _this.status = 0;
            return _this;
          }
          Object.defineProperty(SceneResponseError.prototype, 'message', {
            get: function () {
              return 'Scene response failed, status: ' + this.status;
            },
            enumerable: false,
            configurable: true,
          });
          return SceneResponseError;
        })(Error);

        // CONCATENATED MODULE: ./src/websocket-message/scene/index.ts

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
        var resizeObservers = [];

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js

        var hasActiveObservations = function () {
          return resizeObservers.some(function (ro) {
            return ro.activeTargets.length > 0;
          });
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js

        var hasSkippedObservations = function () {
          return resizeObservers.some(function (ro) {
            return ro.skippedTargets.length > 0;
          });
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js
        var msg =
          'ResizeObserver loop completed with undelivered notifications.';
        var deliverResizeLoopError = function () {
          var event;
          if (typeof ErrorEvent === 'function') {
            event = new ErrorEvent('error', {
              message: msg,
            });
          } else {
            event = document.createEvent('Event');
            event.initEvent('error', false, false);
            event.message = msg;
          }
          window.dispatchEvent(event);
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js
        var ResizeObserverBoxOptions;
        (function (ResizeObserverBoxOptions) {
          ResizeObserverBoxOptions['BORDER_BOX'] = 'border-box';
          ResizeObserverBoxOptions['CONTENT_BOX'] = 'content-box';
          ResizeObserverBoxOptions['DEVICE_PIXEL_CONTENT_BOX'] =
            'device-pixel-content-box';
        })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/freeze.js
        var freeze = function (obj) {
          return Object.freeze(obj);
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js

        var ResizeObserverSize_ResizeObserverSize = (function () {
          function ResizeObserverSize(inlineSize, blockSize) {
            this.inlineSize = inlineSize;
            this.blockSize = blockSize;
            freeze(this);
          }
          return ResizeObserverSize;
        })();

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js

        var DOMRectReadOnly_DOMRectReadOnly = (function () {
          function DOMRectReadOnly(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.top = this.y;
            this.left = this.x;
            this.bottom = this.top + this.height;
            this.right = this.left + this.width;
            return freeze(this);
          }
          DOMRectReadOnly.prototype.toJSON = function () {
            var _a = this,
              x = _a.x,
              y = _a.y,
              top = _a.top,
              right = _a.right,
              bottom = _a.bottom,
              left = _a.left,
              width = _a.width,
              height = _a.height;
            return {
              x: x,
              y: y,
              top: top,
              right: right,
              bottom: bottom,
              left: left,
              width: width,
              height: height,
            };
          };
          DOMRectReadOnly.fromRect = function (rectangle) {
            return new DOMRectReadOnly(
              rectangle.x,
              rectangle.y,
              rectangle.width,
              rectangle.height
            );
          };
          return DOMRectReadOnly;
        })();

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/element.js
        var isSVG = function (target) {
          return target instanceof SVGElement && 'getBBox' in target;
        };
        var isHidden = function (target) {
          if (isSVG(target)) {
            var _a = target.getBBox(),
              width = _a.width,
              height = _a.height;
            return !width && !height;
          }
          var _b = target,
            offsetWidth = _b.offsetWidth,
            offsetHeight = _b.offsetHeight;
          return !(
            offsetWidth ||
            offsetHeight ||
            target.getClientRects().length
          );
        };
        var isElement = function (obj) {
          var _a, _b;
          if (obj instanceof Element) {
            return true;
          }
          var scope =
            (_b =
              (_a = obj) === null || _a === void 0
                ? void 0
                : _a.ownerDocument) === null || _b === void 0
              ? void 0
              : _b.defaultView;
          return !!(scope && obj instanceof scope.Element);
        };
        var isReplacedElement = function (target) {
          switch (target.tagName) {
            case 'INPUT':
              if (target.type !== 'image') {
                break;
              }
            case 'VIDEO':
            case 'AUDIO':
            case 'EMBED':
            case 'OBJECT':
            case 'CANVAS':
            case 'IFRAME':
            case 'IMG':
              return true;
          }
          return false;
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/global.js
        var global = typeof window !== 'undefined' ? window : {};

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js

        var cache = new WeakMap();
        var scrollRegexp = /auto|scroll/;
        var verticalRegexp = /^tb|vertical/;
        var IE = /msie|trident/i.test(
          global.navigator && global.navigator.userAgent
        );
        var parseDimension = function (pixel) {
          return parseFloat(pixel || '0');
        };
        var calculateBoxSize_size = function (
          inlineSize,
          blockSize,
          switchSizes
        ) {
          if (inlineSize === void 0) {
            inlineSize = 0;
          }
          if (blockSize === void 0) {
            blockSize = 0;
          }
          if (switchSizes === void 0) {
            switchSizes = false;
          }
          return new ResizeObserverSize_ResizeObserverSize(
            (switchSizes ? blockSize : inlineSize) || 0,
            (switchSizes ? inlineSize : blockSize) || 0
          );
        };
        var zeroBoxes = freeze({
          devicePixelContentBoxSize: calculateBoxSize_size(),
          borderBoxSize: calculateBoxSize_size(),
          contentBoxSize: calculateBoxSize_size(),
          contentRect: new DOMRectReadOnly_DOMRectReadOnly(0, 0, 0, 0),
        });
        var calculateBoxSizes = function (target, forceRecalculation) {
          if (forceRecalculation === void 0) {
            forceRecalculation = false;
          }
          if (cache.has(target) && !forceRecalculation) {
            return cache.get(target);
          }
          if (isHidden(target)) {
            cache.set(target, zeroBoxes);
            return zeroBoxes;
          }
          var cs = getComputedStyle(target);
          var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
          var removePadding = !IE && cs.boxSizing === 'border-box';
          var switchSizes = verticalRegexp.test(cs.writingMode || '');
          var canScrollVertically =
            !svg && scrollRegexp.test(cs.overflowY || '');
          var canScrollHorizontally =
            !svg && scrollRegexp.test(cs.overflowX || '');
          var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
          var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
          var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
          var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
          var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
          var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
          var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
          var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
          var horizontalPadding = paddingLeft + paddingRight;
          var verticalPadding = paddingTop + paddingBottom;
          var horizontalBorderArea = borderLeft + borderRight;
          var verticalBorderArea = borderTop + borderBottom;
          var horizontalScrollbarThickness = !canScrollHorizontally
            ? 0
            : target.offsetHeight - verticalBorderArea - target.clientHeight;
          var verticalScrollbarThickness = !canScrollVertically
            ? 0
            : target.offsetWidth - horizontalBorderArea - target.clientWidth;
          var widthReduction = removePadding
            ? horizontalPadding + horizontalBorderArea
            : 0;
          var heightReduction = removePadding
            ? verticalPadding + verticalBorderArea
            : 0;
          var contentWidth = svg
            ? svg.width
            : parseDimension(cs.width) -
              widthReduction -
              verticalScrollbarThickness;
          var contentHeight = svg
            ? svg.height
            : parseDimension(cs.height) -
              heightReduction -
              horizontalScrollbarThickness;
          var borderBoxWidth =
            contentWidth +
            horizontalPadding +
            verticalScrollbarThickness +
            horizontalBorderArea;
          var borderBoxHeight =
            contentHeight +
            verticalPadding +
            horizontalScrollbarThickness +
            verticalBorderArea;
          var boxes = freeze({
            devicePixelContentBoxSize: calculateBoxSize_size(
              Math.round(contentWidth * devicePixelRatio),
              Math.round(contentHeight * devicePixelRatio),
              switchSizes
            ),
            borderBoxSize: calculateBoxSize_size(
              borderBoxWidth,
              borderBoxHeight,
              switchSizes
            ),
            contentBoxSize: calculateBoxSize_size(
              contentWidth,
              contentHeight,
              switchSizes
            ),
            contentRect: new DOMRectReadOnly_DOMRectReadOnly(
              paddingLeft,
              paddingTop,
              contentWidth,
              contentHeight
            ),
          });
          cache.set(target, boxes);
          return boxes;
        };
        var calculateBoxSize = function (
          target,
          observedBox,
          forceRecalculation
        ) {
          var _a = calculateBoxSizes(target, forceRecalculation),
            borderBoxSize = _a.borderBoxSize,
            contentBoxSize = _a.contentBoxSize,
            devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
          switch (observedBox) {
            case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
              return devicePixelContentBoxSize;
            case ResizeObserverBoxOptions.BORDER_BOX:
              return borderBoxSize;
            default:
              return contentBoxSize;
          }
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js

        var ResizeObserverEntry_ResizeObserverEntry = (function () {
          function ResizeObserverEntry(target) {
            var boxes = calculateBoxSizes(target);
            this.target = target;
            this.contentRect = boxes.contentRect;
            this.borderBoxSize = freeze([boxes.borderBoxSize]);
            this.contentBoxSize = freeze([boxes.contentBoxSize]);
            this.devicePixelContentBoxSize = freeze([
              boxes.devicePixelContentBoxSize,
            ]);
          }
          return ResizeObserverEntry;
        })();

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js

        var calculateDepthForNode = function (node) {
          if (isHidden(node)) {
            return Infinity;
          }
          var depth = 0;
          var parent = node.parentNode;
          while (parent) {
            depth += 1;
            parent = parent.parentNode;
          }
          return depth;
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js

        var broadcastActiveObservations = function () {
          var shallowestDepth = Infinity;
          var callbacks = [];
          resizeObservers.forEach(function processObserver(ro) {
            if (ro.activeTargets.length === 0) {
              return;
            }
            var entries = [];
            ro.activeTargets.forEach(function processTarget(ot) {
              var entry = new ResizeObserverEntry_ResizeObserverEntry(
                ot.target
              );
              var targetDepth = calculateDepthForNode(ot.target);
              entries.push(entry);
              ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
              if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
              }
            });
            callbacks.push(function resizeObserverCallback() {
              ro.callback.call(ro.observer, entries, ro.observer);
            });
            ro.activeTargets.splice(0, ro.activeTargets.length);
          });
          for (
            var _i = 0, callbacks_1 = callbacks;
            _i < callbacks_1.length;
            _i++
          ) {
            var callback = callbacks_1[_i];
            callback();
          }
          return shallowestDepth;
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js

        var gatherActiveObservationsAtDepth = function (depth) {
          resizeObservers.forEach(function processObserver(ro) {
            ro.activeTargets.splice(0, ro.activeTargets.length);
            ro.skippedTargets.splice(0, ro.skippedTargets.length);
            ro.observationTargets.forEach(function processTarget(ot) {
              if (ot.isActive()) {
                if (calculateDepthForNode(ot.target) > depth) {
                  ro.activeTargets.push(ot);
                } else {
                  ro.skippedTargets.push(ot);
                }
              }
            });
          });
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/process.js

        var process = function () {
          var depth = 0;
          gatherActiveObservationsAtDepth(depth);
          while (hasActiveObservations()) {
            depth = broadcastActiveObservations();
            gatherActiveObservationsAtDepth(depth);
          }
          if (hasSkippedObservations()) {
            deliverResizeLoopError();
          }
          return depth > 0;
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js
        var trigger;
        var queueMicroTask_callbacks = [];
        var notify = function () {
          return queueMicroTask_callbacks.splice(0).forEach(function (cb) {
            return cb();
          });
        };
        var queueMicroTask = function (callback) {
          if (!trigger) {
            var toggle_1 = 0;
            var el_1 = document.createTextNode('');
            var config = { characterData: true };
            new MutationObserver(function () {
              return notify();
            }).observe(el_1, config);
            trigger = function () {
              el_1.textContent = '' + (toggle_1 ? toggle_1-- : toggle_1++);
            };
          }
          queueMicroTask_callbacks.push(callback);
          trigger();
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js

        var queueResizeObserver = function (cb) {
          queueMicroTask(function ResizeObserver() {
            requestAnimationFrame(cb);
          });
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/scheduler.js

        var watching = 0;
        var isWatching = function () {
          return !!watching;
        };
        var CATCH_PERIOD = 250;
        var observerConfig = {
          attributes: true,
          characterData: true,
          childList: true,
          subtree: true,
        };
        var events = [
          'resize',
          'load',
          'transitionend',
          'animationend',
          'animationstart',
          'animationiteration',
          'keyup',
          'keydown',
          'mouseup',
          'mousedown',
          'mouseover',
          'mouseout',
          'blur',
          'focus',
        ];
        var time = function (timeout) {
          if (timeout === void 0) {
            timeout = 0;
          }
          return Date.now() + timeout;
        };
        var scheduled = false;
        var scheduler_Scheduler = (function () {
          function Scheduler() {
            var _this = this;
            this.stopped = true;
            this.listener = function () {
              return _this.schedule();
            };
          }
          Scheduler.prototype.run = function (timeout) {
            var _this = this;
            if (timeout === void 0) {
              timeout = CATCH_PERIOD;
            }
            if (scheduled) {
              return;
            }
            scheduled = true;
            var until = time(timeout);
            queueResizeObserver(function () {
              var elementsHaveResized = false;
              try {
                elementsHaveResized = process();
              } finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                  return;
                }
                if (elementsHaveResized) {
                  _this.run(1000);
                } else if (timeout > 0) {
                  _this.run(timeout);
                } else {
                  _this.start();
                }
              }
            });
          };
          Scheduler.prototype.schedule = function () {
            this.stop();
            this.run();
          };
          Scheduler.prototype.observe = function () {
            var _this = this;
            var cb = function () {
              return (
                _this.observer &&
                _this.observer.observe(document.body, observerConfig)
              );
            };
            document.body
              ? cb()
              : global.addEventListener('DOMContentLoaded', cb);
          };
          Scheduler.prototype.start = function () {
            var _this = this;
            if (this.stopped) {
              this.stopped = false;
              this.observer = new MutationObserver(this.listener);
              this.observe();
              events.forEach(function (name) {
                return global.addEventListener(name, _this.listener, true);
              });
            }
          };
          Scheduler.prototype.stop = function () {
            var _this = this;
            if (!this.stopped) {
              this.observer && this.observer.disconnect();
              events.forEach(function (name) {
                return global.removeEventListener(name, _this.listener, true);
              });
              this.stopped = true;
            }
          };
          return Scheduler;
        })();
        var scheduler = new scheduler_Scheduler();
        var updateCount = function (n) {
          !watching && n > 0 && scheduler.start();
          watching += n;
          !watching && scheduler.stop();
        };

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObservation.js

        var skipNotifyOnElement = function (target) {
          return (
            !isSVG(target) &&
            !isReplacedElement(target) &&
            getComputedStyle(target).display === 'inline'
          );
        };
        var ResizeObservation_ResizeObservation = (function () {
          function ResizeObservation(target, observedBox) {
            this.target = target;
            this.observedBox =
              observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
            this.lastReportedSize = {
              inlineSize: 0,
              blockSize: 0,
            };
          }
          ResizeObservation.prototype.isActive = function () {
            var size = calculateBoxSize(this.target, this.observedBox, true);
            if (skipNotifyOnElement(this.target)) {
              this.lastReportedSize = size;
            }
            if (
              this.lastReportedSize.inlineSize !== size.inlineSize ||
              this.lastReportedSize.blockSize !== size.blockSize
            ) {
              return true;
            }
            return false;
          };
          return ResizeObservation;
        })();

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js
        var ResizeObserverDetail = (function () {
          function ResizeObserverDetail(resizeObserver, callback) {
            this.activeTargets = [];
            this.skippedTargets = [];
            this.observationTargets = [];
            this.observer = resizeObserver;
            this.callback = callback;
          }
          return ResizeObserverDetail;
        })();

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js

        var observerMap = new WeakMap();
        var getObservationIndex = function (observationTargets, target) {
          for (var i = 0; i < observationTargets.length; i += 1) {
            if (observationTargets[i].target === target) {
              return i;
            }
          }
          return -1;
        };
        var ResizeObserverController_ResizeObserverController = (function () {
          function ResizeObserverController() {}
          ResizeObserverController.connect = function (
            resizeObserver,
            callback
          ) {
            var detail = new ResizeObserverDetail(resizeObserver, callback);
            observerMap.set(resizeObserver, detail);
          };
          ResizeObserverController.observe = function (
            resizeObserver,
            target,
            options
          ) {
            var detail = observerMap.get(resizeObserver);
            var firstObservation = detail.observationTargets.length === 0;
            if (getObservationIndex(detail.observationTargets, target) < 0) {
              firstObservation && resizeObservers.push(detail);
              detail.observationTargets.push(
                new ResizeObservation_ResizeObservation(
                  target,
                  options && options.box
                )
              );
              updateCount(1);
              scheduler.schedule();
            }
          };
          ResizeObserverController.unobserve = function (
            resizeObserver,
            target
          ) {
            var detail = observerMap.get(resizeObserver);
            var index = getObservationIndex(detail.observationTargets, target);
            var lastObservation = detail.observationTargets.length === 1;
            if (index >= 0) {
              lastObservation &&
                resizeObservers.splice(resizeObservers.indexOf(detail), 1);
              detail.observationTargets.splice(index, 1);
              updateCount(-1);
            }
          };
          ResizeObserverController.disconnect = function (resizeObserver) {
            var _this = this;
            var detail = observerMap.get(resizeObserver);
            detail.observationTargets.slice().forEach(function (ot) {
              return _this.unobserve(resizeObserver, ot.target);
            });
            detail.activeTargets.splice(0, detail.activeTargets.length);
          };
          return ResizeObserverController;
        })();

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserver.js

        var ResizeObserver_ResizeObserver = (function () {
          function ResizeObserver(callback) {
            if (arguments.length === 0) {
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            }
            if (typeof callback !== 'function') {
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            }
            ResizeObserverController_ResizeObserverController.connect(
              this,
              callback
            );
          }
          ResizeObserver.prototype.observe = function (target, options) {
            if (arguments.length === 0) {
              throw new TypeError(
                "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
              );
            }
            if (!isElement(target)) {
              throw new TypeError(
                "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
              );
            }
            ResizeObserverController_ResizeObserverController.observe(
              this,
              target,
              options
            );
          };
          ResizeObserver.prototype.unobserve = function (target) {
            if (arguments.length === 0) {
              throw new TypeError(
                "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
              );
            }
            if (!isElement(target)) {
              throw new TypeError(
                "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
              );
            }
            ResizeObserverController_ResizeObserverController.unobserve(
              this,
              target
            );
          };
          ResizeObserver.prototype.disconnect = function () {
            ResizeObserverController_ResizeObserverController.disconnect(this);
          };
          ResizeObserver.toString = function () {
            return 'function ResizeObserver () { [polyfill code] }';
          };
          return ResizeObserver;
        })();

        // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js

        // CONCATENATED MODULE: ./src/utils/allImagesLoaded.ts
        var allImagesLoaded = function () {
          return Promise.all(
            Array.from(document.images)
              .filter(function (img) {
                return !img.complete;
              })
              .map(function (img) {
                return new Promise(function (resolve) {
                  img.onload = resolve;
                  img.onerror = resolve;
                });
              })
          );
        };
        /* harmony default export */ var utils_allImagesLoaded =
          allImagesLoaded;

        // CONCATENATED MODULE: ./src/utils/debounce.ts
        var debouncedFunction = function (fn, debounceTimeMs) {
          if (debounceTimeMs === void 0) {
            debounceTimeMs = 500;
          }
          var debounceTimerId = -1;
          return function () {
            if (debounceTimerId) {
              clearTimeout(debounceTimerId);
            }
            debounceTimerId = setTimeout(function () {
              return fn();
            }, debounceTimeMs);
          };
        };

        // CONCATENATED MODULE: ./src/ContentAwareness.ts
        /*
         * Copyright 2021 Soul Machines Ltd. All Rights Reserved.
         */

        /**
         * ContentAwareness class
         *
         * An instance of this class is used to enable CUE behaviors in the digital human.
         * This is achived by measuring tagged HTML elements and sending their coordinates back to the server
         *
         * See documentation on GitHub for further reference on how to use this API
         * https://github.com/soulmachines/smwebsdk/blob/cue-content-awareness-api/guide/content-awareness.md
         *
         * @public
         */
        var ContentAwareness_ContentAwareness = /** @class */ (function () {
          function ContentAwareness(scene, debounceTime, logger) {
            var _this = this;
            if (debounceTime === void 0) {
              debounceTime = 300;
            }
            if (logger === void 0) {
              logger = new Logger_Logger();
            }
            this.scene = scene;
            this.debounceTime = debounceTime;
            this.logger = logger;
            // Data Attribute Strings
            this.VIDEO_FRAME_STR = 'data-sm-video';
            this.VIDEO_FRAME_STR_BRACKETED = '[' + this.VIDEO_FRAME_STR + ']';
            this.CONTENT_STR = 'data-sm-content';
            this.CONTENT_STR_BRACKETED = '[' + this.CONTENT_STR + ']';
            this.CUE_ATTRIBUTES = [this.VIDEO_FRAME_STR, this.CONTENT_STR];
            this.CUE_ATTRIBUTES_BRACKETED = [
              this.VIDEO_FRAME_STR_BRACKETED,
              this.CONTENT_STR_BRACKETED,
            ].join();
            this.RESIZE_OBSERVER_BOX_OPTIONS = 'border-box';
            this.callMeasure = false;
            this.contentCollection = {};
            this.videoFrame = null;
            this.debouncedMeasure = debouncedFunction(function () {
              return _this.measureInternal();
            }, debounceTime);
            this.resizeObserver = new ResizeObserver_ResizeObserver(
              function () {
                return _this.measureDebounced();
              }
            );
            this.getInitialElements();
            this.mutationObserver = new MutationObserver(function (mutations) {
              return _this.mutationCallback(mutations);
            });
            this.setupEventListeners();
            this.observeMutations();
            this.measureInternal();
          }
          ContentAwareness.prototype.isLoggingEnabled = function () {
            return this.logger.isEnabled;
          };
          ContentAwareness.prototype.setLogging = function (enable) {
            this.logger.enableLogging(enable);
          };
          ContentAwareness.prototype.setMinLogLevel = function (level) {
            this.logger.setMinLogLevel(level);
          };
          ContentAwareness.prototype.setupEventListeners = function () {
            var _this = this;
            window.addEventListener('resize', function () {
              return _this.measureDebounced();
            });
          };
          /**
           * Get initial elements, future elements will be added via mutation observer
           */
          ContentAwareness.prototype.getInitialElements = function () {
            var _this = this;
            var videoEl = document.querySelector(
              this.VIDEO_FRAME_STR_BRACKETED
            );
            var contentElements = document.querySelectorAll(
              this.CONTENT_STR_BRACKETED
            );
            this.trackVideoElement(videoEl);
            Array.from(contentElements).map(function (element) {
              return _this.trackContentElement(element);
            });
          };
          /**
           * Start watching for changes in the DOM that are relevant to
           * ContentAwareness object tracking.
           * @returns The ContentAwareness MutationObserver used for all content
           */
          ContentAwareness.prototype.observeMutations = function () {
            var watchNode = document.documentElement || document.body; // Target node of DOM to watch
            this.mutationObserver.observe(watchNode, {
              attributeFilter: this.CUE_ATTRIBUTES,
              attributeOldValue: true,
              childList: true,
              subtree: true,
            });
          };
          /**
           * Publicly accessible function to disconnect observers and event listeners
           */
          ContentAwareness.prototype.disconnect = function () {
            var _this = this;
            // Disconnect observers
            this.mutationObserver.disconnect();
            this.resizeObserver.disconnect();
            // Remove event listeners
            window.removeEventListener('resize', function () {
              return _this.measureDebounced();
            });
            // Reset scene
            this.scene.contentAwareness = undefined;
          };
          /**
           * Publicly accessible function to reconnect observers and event listeners
           */
          ContentAwareness.prototype.reconnect = function () {
            // Restore the link between scene and ca
            this.scene.contentAwareness = this;
            this.observeMutations();
            this.setupEventListeners();
            this.measure();
          };
          /**
           * Publicly accessible function to trigger measurement of CUE-relevant elements in the DOM
           * and send an updateContentAwareness message
           */
          ContentAwareness.prototype.measure = function () {
            this.measureInternal();
          };
          ContentAwareness.prototype.measureDebounced = function () {
            this.debouncedMeasure();
          };
          /**
           * measures data-sm-video and data-sm-content HTML Elements
           *
           * This is automatically called in simple scenarios but can be manually called
           * if the dev knows an important element has changed
           *
           * See documentation on GitHub for further reference on how to use this API
           * https://github.com/soulmachines/smwebsdk/blob/cue-content-awareness-api/guide/content-awareness.md
           *
           * Console logs the sent message on success or an error on failure
           */
          ContentAwareness.prototype.measureInternal = function () {
            if (!this.scene.isConnected()) {
              this.logger.log(
                'error',
                'ContentAwareness: Scene does not exist or is not connected yet'
              );
              return;
            }
            var windowSize = this.measureWindow();
            var videoFrame = this.measureVideoFrame();
            var contentCollection = this.measureContent();
            if (windowSize && videoFrame && contentCollection) {
              var contentAwarenessMessage =
                this.buildUpdateContentAwarenessRequest(
                  windowSize.innerWidth,
                  windowSize.innerHeight,
                  videoFrame,
                  contentCollection
                );
              this.scene.sendRequest(
                'updateContentAwareness',
                contentAwarenessMessage
              );
            }
          };
          /**
           * measure elements tagged with data-videoFrame
           * @returns a ContentAwarenessObjectModel filled with
           * videoFrame coordinates on success. returns null on failure
           */
          ContentAwareness.prototype.measureVideoFrame = function () {
            if (!this.videoFrame) {
              this.logger.log(
                'error',
                'ContentAwareness: Unable to find a video element'
              );
              return null;
            }
            var videoRect = this.videoFrame.getBoundingClientRect();
            if (this.invalidDimensions(videoRect)) {
              this.logger.log(
                'warn',
                'ContentAwareness: Video has a zero width and height'
              );
              return null;
            }
            return {
              x1: Math.round(videoRect.left),
              x2: Math.round(videoRect.right),
              y1: Math.round(videoRect.top),
              y2: Math.round(videoRect.bottom),
            };
          };
          /**
           * measure elements tagged with data-content
           * @returns a ContentAwarenessObjectModel array filled with the coordinates and
           * ids of content tagged with the data-sm-content attribute
           */
          ContentAwareness.prototype.measureContent = function () {
            var _this = this;
            var validContent = [];
            Object.keys(this.contentCollection).map(function (key) {
              var contentElement = _this.contentCollection[key];
              var contentRect = contentElement.getBoundingClientRect();
              if (_this.invalidDimensions(contentRect)) {
                _this.logger.log(
                  'warn',
                  "ContentAwareness: Element '" +
                    key +
                    "' has a zero width and height"
                );
              }
              if (_this.invalidContent(contentRect)) {
                _this.logger.log(
                  'warn',
                  "ContentAwareness: Element '" + key + "' is not being tracked"
                );
                // Remove id from content collection but keep observers incase it changes
                delete _this.contentCollection[key];
                return;
              }
              validContent.push({
                id: key,
                x1: Math.round(contentRect.left),
                x2: Math.round(contentRect.right),
                y1: Math.round(contentRect.top),
                y2: Math.round(contentRect.bottom),
              });
            });
            return validContent;
          };
          /**
           * Preliminary indication of if content dimensions are valid or not.
           * Checks if the length and height are zero
           * @param contentRect - the DOMRect to check
           * @returns a bool indicating validity
           */
          ContentAwareness.prototype.invalidDimensions = function (
            contentRect
          ) {
            return contentRect.width === 0 && contentRect.height === 0;
          };
          /**
           * Preliminary indication of if content is valid or not.
           * Checks if the coordinates are non zero
           * @param contentRect - the DOMRect to check
           * @returns a bool indicating validity
           */
          ContentAwareness.prototype.invalidContent = function (contentRect) {
            return (
              contentRect.top === 0 &&
              contentRect.bottom === 0 &&
              contentRect.right === 0 &&
              contentRect.left === 0
            );
          };
          /**
           * measure the browser window
           * @returns an object containing the window height (innerHeight) and window width (innerWidth)
           */
          ContentAwareness.prototype.measureWindow = function () {
            return {
              innerHeight: Math.round(window.innerHeight),
              innerWidth: Math.round(window.innerWidth),
            };
          };
          /**
           * Builds the required UpdateContentAwareness message that gets sent to the server
           *
           * @param viewWidth - the width of the browser window
           * @param viewHeight - the height of the browser window
           * @param videoFrame - an object containing the coordinates of the video element in which the persona exists
           * @param content - an array of objects containing the coordinates of the content elements the persona should be aware of
           * @returns - UpdateContentAwarenessRequestBody the message body to send
           *
           * The return value from this function should be passed to
           * scene.sendRequest('updateContentAwareness', body)
           */
          ContentAwareness.prototype.buildUpdateContentAwarenessRequest =
            function (viewWidth, viewHeight, videoFrame, content) {
              return {
                viewWidth: viewWidth,
                viewHeight: viewHeight,
                videoFrame: videoFrame,
                content: content,
              };
            };
          ContentAwareness.prototype.trackVideoElement = function (element) {
            if (!element) {
              return;
            }
            if (this.videoFrame) {
              this.logger.log(
                'warn',
                'ContentAwareness: Already observing a video element, switching to new video element'
              );
              this.untrackVideoElement(this.videoFrame);
            }
            this.videoFrame = element;
            this.resizeObserver.observe(this.videoFrame, {
              box: this.RESIZE_OBSERVER_BOX_OPTIONS,
            });
          };
          ContentAwareness.prototype.trackContentElement = function (element) {
            var id = element.getAttribute(this.CONTENT_STR);
            if (id) {
              this.contentCollection[id] = element;
              this.resizeObserver.observe(element, {
                box: this.RESIZE_OBSERVER_BOX_OPTIONS,
              });
              return true;
            }
            return false;
          };
          ContentAwareness.prototype.untrackContentElement = function (
            element
          ) {
            var id = element.getAttribute(this.CONTENT_STR);
            var trackedElement = this.contentCollection[id];
            // only untrack the element if the element we have stored
            // against that id is the same one being requested for removal.
            // this allows for showing/hiding of elements that use the same id.
            if (element === trackedElement) {
              delete this.contentCollection[id];
              this.resizeObserver.unobserve(element);
            }
          };
          ContentAwareness.prototype.untrackVideoElement = function (element) {
            this.videoFrame = null;
            this.resizeObserver.unobserve(element);
          };
          /**
           * Takes an array of MutationRecords and measures the ones marked with content awareness attributes
           * @param mutations - an array of MutationRecords to check and measure
           */
          ContentAwareness.prototype.mutationCallback = function (mutations) {
            var _this = this;
            var imagesAdded = false;
            this.callMeasure = false; // reset callMeasure
            for (var i = 0; i < mutations.length; ++i) {
              switch (mutations[i].type) {
                case 'childList': {
                  if (mutations[i].target.nodeType !== Node.ELEMENT_NODE) {
                    break;
                  }
                  this.untrackRemovedNodeWithCUE(mutations[i].removedNodes); // Unobserve and stop tracking removed elements
                  this.trackAddedNodeWithCUE(mutations[i].addedNodes); // Start tracking elements added elements
                  for (var j = 0; j < mutations[i].addedNodes.length; j++) {
                    try {
                      var element = mutations[i].addedNodes[j];
                      if (!element.hasAttribute) {
                        // node is not an element, do not continue processing it
                        continue;
                      }
                      var isImage = element.tagName === 'IMG';
                      var containsImages = !!element.querySelector('img');
                      imagesAdded = isImage || containsImages;
                      if (imagesAdded) {
                        break;
                      }
                    } catch (err) {
                      this.logger.log(
                        'warn',
                        'ContentAwareness: Failed to track non-element node',
                        mutations[i].addedNodes[j]
                      );
                    }
                  }
                  break;
                }
                case 'attributes': {
                  if (mutations[i].target.nodeType !== Node.ELEMENT_NODE) {
                    break;
                  }
                  try {
                    var element = mutations[i].target;
                    var attr = mutations[i].attributeName;
                    if (attr === this.VIDEO_FRAME_STR) {
                      if (element.hasAttribute(attr)) {
                        this.trackVideoElement(element);
                        this.callMeasure = true;
                      } else if (this.videoFrame) {
                        this.untrackVideoElement(element);
                      }
                    } else if (attr === this.CONTENT_STR) {
                      var newValue = element.getAttribute(attr);
                      var oldValue = mutations[i].oldValue;
                      if (oldValue) {
                        // data-sm-content attribute was changed and must be removed
                        this.resizeObserver.unobserve(
                          this.contentCollection[oldValue]
                        );
                        delete this.contentCollection[oldValue];
                      }
                      if (newValue) {
                        // data-sm-content attribute value was changed/added and now must be added to the list
                        this.contentCollection[newValue] = element;
                        this.resizeObserver.observe(element, {
                          box: this.RESIZE_OBSERVER_BOX_OPTIONS,
                        });
                      }
                      this.callMeasure = true;
                    }
                    break;
                  } catch (err) {
                    this.logger.log(
                      'warn',
                      'ContentAwareness: Failed to track non-element node',
                      mutations[i].target
                    );
                  }
                }
              }
            }
            if (this.callMeasure) {
              if (imagesAdded) {
                // Wait for all images to be loaded then remeasure
                utils_allImagesLoaded().then(function () {
                  _this.measureDebounced();
                });
              } else {
                this.measureDebounced();
              }
            }
          };
          ContentAwareness.prototype.trackAddedNodeWithCUE = function (
            mutations
          ) {
            var _this = this;
            mutations.forEach(function (node) {
              try {
                var element = node;
                if (!element.hasAttribute) {
                  // node is not an element, do not continue processing it
                  return;
                }
                // check top level node for cue attributes
                if (element.hasAttribute(_this.VIDEO_FRAME_STR)) {
                  _this.trackVideoElement(element);
                  _this.callMeasure = true;
                } else if (element.hasAttribute(_this.CONTENT_STR)) {
                  _this.callMeasure = _this.trackContentElement(element);
                }
                // check child nodes for cue attributes
                if (
                  element.querySelector(_this.CUE_ATTRIBUTES_BRACKETED) !== null
                ) {
                  element
                    .querySelectorAll(_this.CUE_ATTRIBUTES_BRACKETED)
                    .forEach(function (childElement) {
                      if (childElement.hasAttribute(_this.VIDEO_FRAME_STR)) {
                        _this.trackVideoElement(childElement);
                        _this.callMeasure = true;
                      } else if (childElement.hasAttribute(_this.CONTENT_STR)) {
                        _this.callMeasure =
                          _this.trackContentElement(childElement);
                      }
                    });
                }
              } catch (err) {
                _this.logger.log(
                  'warn',
                  'ContentAwareness: Failed to track non-element node',
                  node
                );
              }
            });
          };
          ContentAwareness.prototype.untrackRemovedNodeWithCUE = function (
            mutations
          ) {
            var _this = this;
            mutations.forEach(function (node) {
              try {
                var element = node;
                if (!element.hasAttribute) {
                  // node is not an element, do not continue processing it
                  return;
                }
                if (element.hasAttribute(_this.VIDEO_FRAME_STR)) {
                  _this.untrackVideoElement(element);
                } else if (element.hasAttribute(_this.CONTENT_STR)) {
                  _this.untrackContentElement(element);
                  _this.callMeasure = true;
                }
                // check child nodes for cue attributes
                if (
                  element.querySelector(_this.CUE_ATTRIBUTES_BRACKETED) !== null
                ) {
                  element
                    .querySelectorAll(_this.CUE_ATTRIBUTES_BRACKETED)
                    .forEach(function (childElement) {
                      if (childElement.hasAttribute(_this.VIDEO_FRAME_STR)) {
                        _this.untrackVideoElement(childElement);
                      } else if (childElement.hasAttribute(_this.CONTENT_STR)) {
                        _this.untrackContentElement(childElement);
                        _this.callMeasure = true;
                      }
                    });
                }
              } catch (err) {
                _this.logger.log(
                  'warn',
                  'ContentAwareness: Failed to track non-element node',
                  node
                );
              }
            });
          };
          return ContentAwareness;
        })();

        // CONCATENATED MODULE: ./src/utils/convertToUserMedia.ts

        var convertToUserMedia = function (options, fallbackValue) {
          if (fallbackValue === void 0) {
            fallbackValue = UserMedia.None;
          }
          if (!options) {
            return fallbackValue;
          }
          if (options.camera && options.microphone) {
            return UserMedia.MicrophoneAndCamera;
          } else if (options.camera) {
            return UserMedia.Camera;
          } else if (options.microphone) {
            return UserMedia.Microphone;
          } else {
            return UserMedia.None;
          }
        };
        /* harmony default export */ var utils_convertToUserMedia =
          convertToUserMedia;

        // CONCATENATED MODULE: ./src/Scene.ts
        /**
         * @module smwebsdk
         */

        /*
         * Copyright 2017-2020 Soul Machines Ltd. All Rights Reserved.
         */

        function sleep(t) {
          return new Promise(function (resolve) {
            return setTimeout(function () {
              return resolve();
            }, t);
          });
        }
        var DEFAULT_RETRY_COUNT = 50;
        var DEFAULT_RETRY_DELAY = 200;
        function retry(task, retryOptions, scene) {
          if (retryOptions === void 0) {
            retryOptions = {};
          }
          return __awaiter(this, void 0, void 0, function () {
            var errors, count, delay, result, i, error_1;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  errors = [];
                  count = retryOptions.maxRetries || DEFAULT_RETRY_COUNT;
                  delay = retryOptions.delayMs || DEFAULT_RETRY_DELAY;
                  i = 0;
                  _a.label = 1;
                case 1:
                  if (!(i < count)) return [3 /*break*/, 8];
                  _a.label = 2;
                case 2:
                  _a.trys.push([2, 4, , 6]);
                  return [4 /*yield*/, task()];
                case 3:
                  result = _a.sent();
                  // store the result on the scene object
                  scene.connectionResult = {
                    message: 'success',
                    value: result,
                    retries: errors,
                  };
                  return [3 /*break*/, 6];
                case 4:
                  error_1 = _a.sent();
                  // collect a history of errors encountered during connect
                  errors.push(error_1);
                  // store the result on the scene object
                  scene.connectionResult = {
                    message: 'failed',
                    retries: errors,
                  };
                  // any error other than 'noScene' should throw immediately
                  // and should not retry repeatedly.
                  // allows for proper errors and also string errors
                  if (
                    !(error_1 instanceof Error) ||
                    error_1.name !== 'noScene'
                  ) {
                    throw error_1;
                  }
                  // when we have reached the max number of retries,
                  // we should give up and throw the error
                  if (errors.length === count) {
                    console.warn(
                      'Retry gave up after ' +
                        count +
                        ' retries:\n' +
                        errors
                          .map(function (e) {
                            return e instanceof Error
                              ? e.message
                              : e.toString();
                          })
                          .join('\n')
                    );
                    // throw the most recent error as the primary cause of failure
                    throw error_1;
                  }
                  return [4 /*yield*/, sleep(delay)];
                case 5:
                  _a.sent();
                  return [3 /*break*/, 7];
                case 6:
                  return [3 /*break*/, 8];
                case 7:
                  i++;
                  return [3 /*break*/, 1];
                case 8:
                  return [2 /*return*/, result];
              }
            });
          });
        }
        /**
         * Scene class to hold a webrtc connection to a scene containing a persona.
         * @public
         */
        var Scene_Scene = /** @class */ (function () {
          function Scene(
            videoOrOptions,
            audioOnly,
            requestedUserMedia,
            requiredUserMedia,
            contentAwarenessDebounceTime,
            loggingConfig
          ) {
            var _this = this;
            if (audioOnly === void 0) {
              audioOnly = false;
            }
            if (requestedUserMedia === void 0) {
              requestedUserMedia = UserMedia.MicrophoneAndCamera;
            }
            if (requiredUserMedia === void 0) {
              requiredUserMedia = UserMedia.Microphone;
            }
            this._onConversationResultEvents = {}; // persona id -> SmEvent with function(persona, result)
            this._onSpeechMarkerEvents = {}; // persona id -> SmEvent function(persona, marker)
            this._session = undefined;
            this._isWebSocketOnly = false;
            this._transactionId = 0;
            this._pendingResponses = {};
            this._microphoneUnmuteTimer = undefined;
            this._echoCancellationEnabled = true;
            this._serverControlledCameras = false;
            this._loggingConfig = {
              session: {},
              contentAwareness: {},
            };
            this._onMicrophoneActive = new SmEvent();
            this._onCameraActive = new SmEvent();
            this.visibilityChange = function () {
              var visible = document.visibilityState === 'visible';
              console.log('rtc - new ui visibility: ' + visible);
              setTimeout(function () {
                if (_this._session) {
                  _this._session.sendRtcEvent('ui', { visible: visible });
                }
              }, 500); // allow 100ms for the H.264 decoder to become fully available again
            };
            // use the first parameter of the constructor to figure out
            // whether it was constructed using SceneOptions, or using
            // the deprecated multi-param format.
            if (this.isSceneOptions(videoOrOptions)) {
              // pull all private property initial values from the config object,
              // with fallbacks to the constructor property defaults if not provided
              var options = videoOrOptions;
              this._videoElement = options.videoElement;
              this._apiKey = options.apiKey;
              this._audioOnly = options.audioOnly || audioOnly;
              this._requestedUserMedia = utils_convertToUserMedia(
                options.requestedMediaDevices,
                requestedUserMedia
              );
              this._requiredUserMedia = utils_convertToUserMedia(
                options.requiredMediaDevices,
                requiredUserMedia
              );
              this.contentAwarenessDebounceTime =
                options.contentAwarenessDebounceTime;
              this._loggingConfig = __assign(
                __assign({}, this._loggingConfig),
                options.loggingConfig || {}
              );
            } else {
              // take all private property initial values directly from the constructor props
              this._videoElement = videoOrOptions;
              this._audioOnly = audioOnly;
              this._requestedUserMedia = requestedUserMedia;
              this._requiredUserMedia = requiredUserMedia;
              this.contentAwarenessDebounceTime = contentAwarenessDebounceTime;
              this._loggingConfig = __assign(
                __assign({}, this._loggingConfig),
                loggingConfig
              );
            }
            /**
             * call onStateEvent.addListener(function(scene, state)) to be called when a state message is received as per the scene protocol
             * call onStateEvent.removeListener(function(scene, state)) to deregister a listener.
             */
            this._onStateEvent = new SmEvent();
            this._onStateEvent.addListener(function (scene, state) {
              if (_this._onState) {
                _this._onState(scene, state);
              }
            });
            /**
             * call onRecognizeResultsEvent.addListener(function(scene, status, errorMessage, results)) to be called when speech to text results are recognized, results are documented in scene protocol.
             * call onRecognizeResultsEvent.removeListener(function(scene, status, errorMessage, results)) to deregister a listener.
             */
            this._onRecognizeResultsEvent = new SmEvent();
            this._onRecognizeResultsEvent.addListener(function (
              scene,
              status,
              errorMessage,
              results
            ) {
              if (_this._onRecognizeResults) {
                _this._onRecognizeResults(scene, status, errorMessage, results);
              }
            });
            /**
             * call onDisconnectedEvent.addListener(function(scene, sessionId, reason)) to be  called when the session is disconnected.
             * call onDisconnectedEvent.removeListener(function(scene, sessionId, reason)) to deregister a listener.
             */
            this._onDisconnectedEvent = new SmEvent();
            this._onDisconnectedEvent.addListener(function (
              scene,
              sessionId,
              reason
            ) {
              if (_this._onDisconnected) {
                _this._onDisconnected(scene, sessionId, reason);
              }
            });
            /**
             * call onUserTextEvent.addListener(function(scene, text)) to be called when a custom text message is sent from the orchestration server
             * call onUserTextEvent.removeListener(function(scene, text)) to deregister a listener.
             */
            this._onUserTextEvent = new SmEvent();
            this._onUserTextEvent.addListener(function (scene, text) {
              if (_this._onUserText) {
                _this._onUserText(scene, text);
              }
            });
            this._onDemoModeEvent = new SmEvent();
            this._underRuntimeHost = Boolean(window.SmIsUnderRuntimeHost);
            // Generate a random id for the scene. This is used internally with the _transactionId
            // to ensure unique transaction ids when mulitple Scene instances access the same BL instances
            // eg multiple Soul Studio windows
            var randArray = new Uint32Array(3);
            window.crypto.getRandomValues(randArray);
            this._sceneId = randArray.toString().replace(/,/g, '-');
          }
          /**
           * Tests the first value of the Scene construtor to decide if
           * it matches the new-style config options format.
           */
          Scene.prototype.isSceneOptions = function (videoOrOptions) {
            var _a;
            // scene options must be defined, even if they're an empty object
            var isDefined = !!videoOrOptions;
            // scene options object will not have a tagName
            var isHTMLElement = !!((_a = videoOrOptions) === null ||
            _a === void 0
              ? void 0
              : _a.tagName);
            return isDefined && !isHTMLElement;
          };
          Scene.prototype.connectionValid = function () {
            if (this._underRuntimeHost) {
              return true;
            }
            if (this._session && this._session.serverConnection) {
              return true;
            }
            return false;
          };
          /**
           * Check if the scene connection is open and valid.
           *
           * @returns Returns true if the connection is open and valid otherwise false.
           */
          Scene.prototype.isConnected = function () {
            if (
              this.connectionValid() &&
              this._session &&
              this._session.serverConnection &&
              this._session.serverConnection.readyState ===
                this._session.serverConnection.OPEN
            ) {
              return true;
            }
            return false;
          };
          /**
           * Extends the server side timeout. This also happens automatically whenever the persona speaks.
           */
          Scene.prototype.keepAlive = function () {
            if (this._session && this._session.peerConnection !== null) {
              this._session.sendRtcEvent('keepAlive', {});
            }
          };
          /**
           * Disconnects the session
           */
          Scene.prototype.disconnect = function () {
            var _a, _b;
            (_a = this.contentAwareness) === null || _a === void 0
              ? void 0
              : _a.disconnect();
            (_b = this._session) === null || _b === void 0
              ? void 0
              : _b.close(true);
            this._session = undefined;
          };
          Scene.prototype.connect = function (
            serverUriOrOptions,
            userText,
            accessToken,
            retryOptions
          ) {
            return __awaiter(this, void 0, void 0, function () {
              var logger,
                config,
                hasPassedInTokenServerAuth,
                response,
                data,
                error_2;
              var _this = this;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    logger = new Logger_Logger(
                      this._loggingConfig.session.minLogLevel,
                      this._loggingConfig.session.enabled
                    );
                    config = this.connectArgsToConfig(
                      serverUriOrOptions,
                      userText,
                      accessToken,
                      retryOptions
                    );
                    hasPassedInTokenServerAuth =
                      config.tokenServerUri || config.tokenServerAccessToken;
                    if (this._apiKey && hasPassedInTokenServerAuth) {
                      logger.log(
                        'warn',
                        'You are trying to connect via an API key and a token server. Please use one or the other'
                      );
                    }
                    if (!(this._apiKey && !hasPassedInTokenServerAuth))
                      return [3 /*break*/, 5];
                    _a.label = 1;
                  case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, this.fetchAuthConfig(this._apiKey)];
                  case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                  case 3:
                    data = _a.sent();
                    config.tokenServerUri = data.url;
                    config.tokenServerAccessToken = data.jwt;
                    return [3 /*break*/, 5];
                  case 4:
                    error_2 = _a.sent();
                    throw makeError(
                      'Invalid API key',
                      'serverConnectionFailed'
                    );
                  case 5:
                    if (
                      !config.tokenServerUri ||
                      !config.tokenServerAccessToken
                    ) {
                      throw makeError(
                        'Please authenticate via an API key or with a serverUri and accessToken',
                        'serverConnectionFailed'
                      );
                    }
                    if (this._underRuntimeHost) {
                      console.log(
                        'Detected RuntimeHost, creating local session'
                      );
                      this._session = new LocalSession_LocalSession(
                        this._videoElement,
                        config.tokenServerUri,
                        config.userText,
                        config.tokenServerAccessToken,
                        this._audioOnly,
                        logger
                      );
                    } else if (this._isWebSocketOnly) {
                      console.log('Creating WebSocket session only');
                      this._session = new WebSocketSession_WebSocketSession(
                        config.tokenServerUri,
                        config.tokenServerAccessToken,
                        logger
                      );
                    } else {
                      this._session = new Session_Session(
                        this._videoElement,
                        config.tokenServerUri,
                        config.userText,
                        config.tokenServerAccessToken,
                        this._audioOnly,
                        this._requestedUserMedia,
                        this._requiredUserMedia,
                        this._echoCancellationEnabled,
                        logger
                      );
                    }
                    this._session.onMessage = this.onMessage.bind(this);
                    this._session.onClose = this.sessionClosed.bind(this);
                    this._session.onUserText = this.rtcUserText.bind(this);
                    if ('microphoneActiveCallbacks' in this._session) {
                      this._session.microphoneActiveCallbacks =
                        this._onMicrophoneActive;
                    }
                    if ('cameraActiveCallbacks' in this._session) {
                      this._session.cameraActiveCallbacks =
                        this._onCameraActive;
                    }
                    if (this._session.features.isIos) {
                      document.addEventListener(
                        'visibilitychange',
                        this.visibilityChange
                      );
                    }
                    return [
                      4 /*yield*/,
                      retry(
                        function () {
                          return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                              switch (_a.label) {
                                case 0:
                                  return [4 /*yield*/, this._session.connect()];
                                case 1:
                                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                  return [2 /*return*/, _a.sent()];
                              }
                            });
                          });
                        },
                        config.retryOptions,
                        this
                      ),
                    ];
                  case 6:
                    return [2 /*return*/, _a.sent()];
                }
              });
            });
          };
          Scene.prototype.onMessage = function (message) {
            var category = message.category;
            if (category === 'scene') {
              var sceneMessage = message;
              this.onSceneMessage(sceneMessage);
              return;
            }
          };
          Scene.prototype.sendOnewaySceneRequest = function (name, body) {
            if (!this._session) {
              return;
            }
            var payload = {
              name: name,
              body: body,
              category: WebsocketCategory.Scene,
              kind: WebsocketKind.Request,
            };
            this._session.sendMessage(payload);
          };
          /**
           * The internal method used for sending request messages.
           *
           * All offically supported message have their own public methods (e.g. `conversationSend()` or `scene.startRecognize()`). \
           * Please use those instead.
           *
           * @internal
           */
          Scene.prototype.sendRequest = function (name, body) {
            var _this = this;
            if (body === void 0) {
              body = {};
            }
            return new Promise(function (resolve, reject) {
              if (!_this._session) {
                reject(makeError('No session available', 'noSession'));
                return;
              }
              var transaction = _this._sceneId + '_' + ++_this._transactionId;
              var payload = {
                transaction: transaction,
                name: name,
                body: body,
                category: WebsocketCategory.Scene,
                kind: WebsocketKind.Request,
              };
              var pending = { resolve: resolve, reject: reject };
              _this._pendingResponses[transaction] = pending;
              if (_this._session) {
                _this._session.sendMessage(payload);
              }
            });
          };
          Scene.prototype.onSceneMessage = function (message) {
            var _a;
            var name = message.name,
              body = message.body,
              kind = message.kind,
              status = message.status,
              transaction = message.transaction;
            // Process events
            if (body && name === 'state') {
              var responseBody = body;
              // this.log('persona state message received:' + raw_text);
              this._onStateEvent.call(this, responseBody);
              if (
                (_a = responseBody.scene) === null || _a === void 0
                  ? void 0
                  : _a.featureFlags
              ) {
                this.enableFlaggedFeatures(responseBody.scene.featureFlags);
              }
              // mute the microphone while a persona is speaking
              this.controlMicrophoneMute(body);
            } else if (body && name === 'recognizeResults') {
              var _b = body,
                status_1 = _b.status,
                errorMessage = _b.errorMessage,
                results = _b.results;
              this._onRecognizeResultsEvent.call(
                this,
                status_1,
                errorMessage,
                results
              );
            } else if (body && name === 'conversationResult') {
              var personaId = body.personaId;
              if (personaId) {
                var persona = new Persona_Persona(this, personaId);
                var event = this._onConversationResultEvents[personaId];
                event.call(persona, body);
              }
            } else if (body && name === 'speechMarker') {
              var personaId = body.personaId;
              if (personaId) {
                var persona = new Persona_Persona(this, personaId);
                var event = this._onSpeechMarkerEvents[personaId];
                event.call(persona, body);
              }
            } else if (body && name === 'demoMode') {
              this._onDemoModeEvent.call(this, body);
            }
            // Process responses, message should always be a response as far as we're aware
            if (kind === WebsocketKind.Response && transaction) {
              this.processResponse(body, name, status, transaction);
            }
          };
          Scene.prototype.processResponse = function (
            body,
            name,
            status,
            transaction
          ) {
            // Check for a pending response
            var pending = this._pendingResponses[transaction];
            if (pending) {
              if (status === 0) {
                // Success
                pending.resolve(body);
              } else {
                // Failure
                var error = new SceneResponseError_SceneResponseError();
                error.requestName = name;
                error.status = status;
                error.responseBody = body;
                pending.reject(error);
              }
              delete this._pendingResponses[transaction];
            }
          };
          Scene.prototype.controlMicrophoneMute = function (state) {
            var _this = this;
            // Watch for speaking state transitions and mute the
            // microphone during persona speech to prevent self interruption
            if (
              state.persona &&
              this._session &&
              this._session.microphoneMuteDelay !== -1
            ) {
              // iterate through the personas looking for speaking state changes
              for (var personaId in state.persona) {
                var persona_state = state.persona[personaId];
                if (!persona_state.speechState) {
                  continue;
                }
                if (persona_state.speechState === SpeechState.Speaking) {
                  // A persona is speaking, mute the microphone
                  if (!this._session.microphoneMuted) {
                    this._session.log('Persona is speaking - mute microphone');
                    this._session.microphoneMuted = true;
                  }
                  if (this._microphoneUnmuteTimer) {
                    // ensure an in-progress timeout doesn't incorrectly unmute
                    clearTimeout(this._microphoneUnmuteTimer);
                    this._microphoneUnmuteTimer = undefined;
                  }
                } else {
                  // A persona has stopped speaking, unmute the microphone after
                  // the microphone mute delay
                  if (
                    this._session.microphoneMuted &&
                    !this._microphoneUnmuteTimer
                  ) {
                    this._microphoneUnmuteTimer = setTimeout(function () {
                      if (!_this._session || !_this._microphoneUnmuteTimer) {
                        return;
                      }
                      _this._session.log(
                        'Persona is no longer speaking - unmute microphone'
                      );
                      _this._session.microphoneMuted = false;
                      _this._microphoneUnmuteTimer = undefined;
                    }, this._session.microphoneMuteDelay);
                  }
                }
              }
            }
          };
          /** Close the current scene connection */
          Scene.prototype.close = function () {
            // close/disconnect the session
            if (this._session) {
              this._session.close(true);
            }
          };
          Scene.prototype.sessionClosed = function (reason) {
            if (this._session) {
              if (this._session.features.isIos) {
                document.removeEventListener(
                  'visibilitychange',
                  this.visibilityChange
                );
              }
              this._onDisconnectedEvent.call(
                this,
                this._session.sessionId,
                reason
              );
            }
          };
          Scene.prototype.rtcUserText = function (text) {
            this._onUserTextEvent.call(this, text);
          };
          Scene.prototype.enableFlaggedFeatures = function (featureFlags) {
            if (featureFlags.includes(FeatureFlag.UI_CONTENT_AWARENESS)) {
              if (!this.contentAwareness) {
                this.contentAwareness = new ContentAwareness_ContentAwareness(
                  this,
                  this.contentAwarenessDebounceTime,
                  new Logger_Logger(
                    this._loggingConfig.contentAwareness.minLogLevel,
                    this._loggingConfig.contentAwareness.enabled
                  )
                );
              }
            }
            this._serverControlledCameras = featureFlags.includes(
              FeatureFlag.UI_SDK_CAMERA_CONTROL
            );
          };
          Scene.prototype.sendContent = function () {
            var _a;
            if (!this.contentAwareness) {
              console.warn('ContentAwareness is not enabled for this project');
            }
            (_a = this.contentAwareness) === null || _a === void 0
              ? void 0
              : _a.measure();
          };
          /**
           * Sends updated video element size to server
           * this gives the app the chance to choose what size should be rendered on server
           * and the application is responsible to register for a video element size change
           * event and call this method to maintain best possible video quality for the size
           * and/or to set an updated video element size and then call this method.
           * @param width - The width in pixels to render the video
           * @param height - The height in pixels to render the video
           */
          Scene.prototype.sendVideoBounds = function (width, height) {
            if (this._session) {
              this._session.sendVideoBounds(width, height);
            }
          };
          /**
           * Send configuration to the scene
           * @param configuration - Scene configuration as per the scene protocol
           */
          Scene.prototype.configure = function (configuration) {
            return this.sendRequest('configure', configuration);
          };
          /**
           * Send a custom user text message to the orchestration server
           * @param text - Custom text sent to the orchestration server
           */
          Scene.prototype.sendUserText = function (text) {
            if (this._session) {
              this._session.sendUserText(text);
            }
          };
          /**
           * Start the speech to text recognizer
           * @param audioSource - The audio source either smwebsdk.audioSource.processed or
           *                    smwebsdk.audioSource.squelched, defaults to processed.
           */
          Scene.prototype.startRecognize = function (audioSource) {
            var body = {};
            if (audioSource !== undefined) {
              body.audioSource = audioSource;
            }
            return this.sendRequest('startRecognize', body);
          };
          /** Stop the speech to text reconizer */
          Scene.prototype.stopRecognize = function () {
            return this.sendRequest('stopRecognize');
          };
          /** Is the microphone connected in the session */
          Scene.prototype.isMicrophoneConnected = function () {
            // public function rather than getter for back compatibility
            if (this._session) {
              return this._session.isMicrophoneConnected;
            }
            return false;
          };
          /** Is the camera connected in the session */
          Scene.prototype.isCameraConnected = function () {
            // public function rather than getter for back compatibility
            if (this._session) {
              return this._session.isCameraConnected;
            }
            return false;
          };
          Scene.prototype.session = function () {
            // public function rather than getter for back compatibility
            return this._session;
          };
          Scene.prototype.hasContentAwareness = function () {
            return !!this.contentAwareness;
          };
          Scene.prototype.hasServerControlledCameras = function () {
            return this._serverControlledCameras;
          };
          Object.defineProperty(Scene.prototype, 'onConversationResultEvents', {
            get: function () {
              return this._onConversationResultEvents;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onSpeechMarkerEvents', {
            get: function () {
              return this._onSpeechMarkerEvents;
            },
            enumerable: false,
            configurable: true,
          });
          /** Get the current scene state */
          Scene.prototype.getState = function () {
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequest('getState')];
              });
            });
          };
          Object.defineProperty(Scene.prototype, 'onStateEvent', {
            get: function () {
              return this._onStateEvent;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onState', {
            // eslint-disable-next-line @typescript-eslint/ban-types
            set: function (onState) {
              this._onState = onState;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onDisconnectedEvent', {
            get: function () {
              return this._onDisconnectedEvent;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onDisconnected', {
            // eslint-disable-next-line @typescript-eslint/ban-types
            set: function (onDisconnected) {
              this._onDisconnected = onDisconnected;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onRecognizeResultsEvent', {
            get: function () {
              return this._onRecognizeResultsEvent;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onRecognizeResults', {
            // eslint-disable-next-line @typescript-eslint/ban-types
            set: function (onRecognizeResults) {
              this._onRecognizeResults = onRecognizeResults;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onUserTextEvent', {
            get: function () {
              return this._onUserTextEvent;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onUserText', {
            // eslint-disable-next-line @typescript-eslint/ban-types
            set: function (onUserText) {
              this._onUserText = onUserText;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'echoCancellationEnabled', {
            get: function () {
              return this._echoCancellationEnabled;
            },
            set: function (enabled) {
              this._echoCancellationEnabled = enabled;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onDemoModeEvent', {
            /**
             * @internal
             */
            get: function () {
              return this._onDemoModeEvent;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'videoElement', {
            get: function () {
              return this._videoElement;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'viewerOffsetX', {
            get: function () {
              if (this._session) {
                return this._session.offsetX;
              }
              return 0;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'viewerOffsetY', {
            get: function () {
              if (this._session) {
                return this._session.offsetY;
              }
              return 0;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'isWebSocketOnly', {
            get: function () {
              return this._isWebSocketOnly;
            },
            set: function (isWebSocketOnly) {
              this._isWebSocketOnly = isWebSocketOnly;
            },
            enumerable: false,
            configurable: true,
          });
          Object.defineProperty(Scene.prototype, 'onMicrophoneActive', {
            /**
             * @returns an {@link SmEvent} associated with the microphone.
             *
             * Listeners can then be added to this event allowing you to call functions when the microphone active status changes.
             *
             * Usage:
             * ```javascript
             * scene.onMicrophoneActive.addListener(
             *   (active) => console.log('Microphone Active: ', active));
             * ```
             */
            get: function () {
              return this._onMicrophoneActive;
            },
            enumerable: false,
            configurable: true,
          });
          /**
           * Specifies if the microphone is currently active and streaming audio
           * to the server.
           *
           * @returns `boolean`
           *
           * Usage:
           * ```javascript
           * const isMicrophoneActive = scene.isMicrophoneActive();
           * ```
           */
          Scene.prototype.isMicrophoneActive = function () {
            var _a;
            return Boolean(
              (_a = this._session) === null || _a === void 0
                ? void 0
                : _a.isMicrophoneActive()
            );
          };
          Object.defineProperty(Scene.prototype, 'onCameraActive', {
            /**
             * @returns an {@link SmEvent} associated with the camera.
             *
             * Listeners can then be added to this event allowing you to call functions when the camera active status changes.
             *
             * Usage:
             * ```javascript
             * scene.onCameraActive.addListener(
             *   (active) => console.log('Camera Active: ', active));
             * ```
             */
            get: function () {
              return this._onCameraActive;
            },
            enumerable: false,
            configurable: true,
          });
          /**
           * Specifies if the camera is currently active and streaming video
           * to the server.
           *
           * @returns `boolean`
           *
           * Usage:
           * ```javascript
           * const isCameraActive = scene.isCameraActive();
           * ```
           */
          Scene.prototype.isCameraActive = function () {
            var _a;
            return Boolean(
              (_a = this._session) === null || _a === void 0
                ? void 0
                : _a.isCameraActive()
            );
          };
          /**
           * On success, starts or stops streaming video/audio to the server based on the values of `microphone` and `camera`.
           *
           * @param options.microphone - If `true`, activates the microphone and starts streaming audio. \
           * If `false` deactivates the microphone and stops streaming audio. \
           * If not set, microphone will retain its existing state.
           * @param options.camera - If `true`, activates the camera and starts streaming video. \
           * If `false` deactivates the camera and stops streaming video. \
           * If not set, microphone will retain its existing state.
           *
           * @returns Returns a promise which is fulfilled when the media active state has been successfully changed. \
           * If the session is not defined it will return `undefined`. \
           * If the active state could not be changed, the promise is rejected with an Error object having the format:
           * ```javascript
           * {
           *   message: string;
           *   name: errorCode;
           * }
           * ```
           * Where `errorCode` is one of:
           *    - `noUserMedia` - the microphone/camera is either not available, not usable or the user declined permission to use them
           *    - `failedUpgrade` - the media upgrade failed
           *    - `notSupported` - user’s browser does not support the getUserMedia API
           *    - `noConnection` - connection has not been established - ensure scene.connect() has been called previously
           *
           * Usage:
           * ```javascript
           * scene.setMediaDeviceActive({ microphone: true, camera: false })
           *   .then(console.log('microphone activated, camera deactivated'));
           *   .catch((error) => console.log('error occurred: ', error);
           * ```
           */
          Scene.prototype.setMediaDeviceActive = function (options) {
            var _a;
            return __awaiter(this, void 0, Promise, function () {
              return __generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    if (!this.isConnected()) return [3 /*break*/, 2];
                    return [
                      4 /*yield*/,
                      (_a = this._session) === null || _a === void 0
                        ? void 0
                        : _a.setMediaDeviceActive({
                            microphone: options.microphone,
                            camera: options.camera,
                          }),
                    ];
                  case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                  case 2:
                    throw makeError(
                      'Connection has not been established',
                      'noConnection'
                    );
                  case 3:
                    return [2 /*return*/];
                }
              });
            });
          };
          /**
           * Play the video element and return results. Different browsers have different restrictions on autoplay.
           * Using this method can handle all the cases browsers can have on inital video playback.
           * @param videoElement - Optional parameter specifying the video element hosting the Digital Person. If not specified the video element passed to the Scene constructor will be used.
           * @returns Returns a promise which is fulfilled when the video playback is successful, with indication of video and audio status.
           * If the video element is not defined or video play fails the promise is rejected with an Error object having the format:
           * ```javascript
           * {
           *   message: string;
           *   name: errorCode;
           * }
           * ```
           * Where `errorCode` is one of:
           *    - `noVideoElement` - no HTMLVideoElement found from `videoElement` or `Scene` constructor
           *    - `userInteractionRequired` - cannot start media playback due to browser restriction; user interaction is required before playing again
           *
           * Usage:
           * ```javascript
           * scene.startVideo()
           *      .then(({ video, audio }) => {
           *         if (!audio) {
           *          //video is muted, ask user to unmute video
           *         }
           *      })
           *      .catch((error) => {
           *         if (error.name === 'userInteractionRequired') {
           *          //ask user to interact with the UI
           *          //unmute video and play again
           *          video.muted = false;
           *          video.play();
           *         }
           *      });
           * ```
           */
          Scene.prototype.startVideo = function (videoElement) {
            return __awaiter(this, void 0, Promise, function () {
              var video;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    video = videoElement || this._videoElement;
                    if (!video) {
                      throw makeError(
                        'Cannot find HTMLVideoElement',
                        'noVideoElement'
                      );
                    }
                    return [4 /*yield*/, this.playVideo(video)];
                  case 1:
                    // best case, play with audio
                    if (_a.sent()) {
                      return [
                        2 /*return*/,
                        {
                          video: true,
                          audio: true,
                        },
                      ];
                    }
                    //second-best case, play without audio
                    video.muted = true;
                    return [4 /*yield*/, this.playVideo(video)];
                  case 2:
                    if (_a.sent()) {
                      return [
                        2 /*return*/,
                        {
                          video: true,
                          audio: false,
                        },
                      ];
                    }
                    //worst case, not able to play, require user interaction
                    throw makeError(
                      'Cannot start media playback',
                      'userInteractionRequired'
                    );
                }
              });
            });
          };
          Scene.prototype.playVideo = function (videoElement) {
            return __awaiter(this, void 0, Promise, function () {
              var _a;
              return __generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, videoElement.play()];
                  case 1:
                    _b.sent();
                    return [2 /*return*/, true];
                  case 2:
                    _a = _b.sent();
                    return [2 /*return*/, false];
                  case 3:
                    return [2 /*return*/];
                }
              });
            });
          };
          Scene.prototype.fetchAuthConfig = function (apiKey) {
            var decodedApiKey = JSON.parse(atob(apiKey));
            return fetch(decodedApiKey.authServer, {
              headers: {
                key: apiKey,
              },
            });
          };
          // Use the first parameter of the constructor to figure out
          // whether it was constructed using ConnectOptions, or using the deprecated multi-param format.
          Scene.prototype.connectArgsToConfig = function (
            serverUriOrOptions,
            userText,
            accessToken,
            retryOptions
          ) {
            var _a, _b;
            if (typeof serverUriOrOptions === 'string') {
              return {
                tokenServerUri: serverUriOrOptions,
                tokenServerAccessToken: accessToken,
                userText: userText,
                retryOptions: retryOptions,
              };
            } else {
              return {
                tokenServerUri:
                  ((_a =
                    serverUriOrOptions === null || serverUriOrOptions === void 0
                      ? void 0
                      : serverUriOrOptions.tokenServer) === null ||
                  _a === void 0
                    ? void 0
                    : _a.uri) || '',
                tokenServerAccessToken:
                  (_b =
                    serverUriOrOptions === null || serverUriOrOptions === void 0
                      ? void 0
                      : serverUriOrOptions.tokenServer) === null ||
                  _b === void 0
                    ? void 0
                    : _b.token,
                userText:
                  serverUriOrOptions === null || serverUriOrOptions === void 0
                    ? void 0
                    : serverUriOrOptions.userText,
                retryOptions:
                  serverUriOrOptions === null || serverUriOrOptions === void 0
                    ? void 0
                    : serverUriOrOptions.retryOptions,
              };
            }
          };
          return Scene;
        })();

        // CONCATENATED MODULE: ./src/SmWebSdk.ts
        /**
         * smwebsdk.js creates the global namespace variable _smwebsdk_ to access the API from.
         *
         * ```ts
         * window.smwebsdk
         * ```
         * @module smwebsdk
         * @preferred
         */
        /**
         * Copyright 2017-2020 Soul Machines Ltd. All Rights Reserved.
         */

        var SmWebSdk_userMedia;
        (function (userMedia) {
          userMedia[(userMedia['none'] = UserMedia.None)] = 'none';
          userMedia[(userMedia['microphone'] = UserMedia.Microphone)] =
            'microphone';
          userMedia[
            (userMedia['microphoneAndCamera'] = UserMedia.MicrophoneAndCamera)
          ] = 'microphoneAndCamera';
          userMedia[(userMedia['camera'] = UserMedia.Camera)] = 'camera';
        })(SmWebSdk_userMedia || (SmWebSdk_userMedia = {}));
        /**
         * SmWebSdk class for legacy compatibility
         * @deprecated - please use the other top level classes such as {@link Scene} or {@link Persona} instead
         */
        var SmWebSdk_SmWebSdk = /** @class */ (function () {
          function SmWebSdk() {
            this.Scene = Scene_Scene;
            this.Persona = Persona_Persona;
            this.userMedia = {
              none: UserMedia.None,
              microphone: UserMedia.Microphone,
              microphoneAndCamera: UserMedia.MicrophoneAndCamera,
              camera: UserMedia.Camera,
            };
            this.DetectCapabilities = function () {
              return new Features().detectWebRTCFeatures();
            };
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            this.setLogging = function (value) {};
          }
          return SmWebSdk;
        })();

        /**
         * @deprecated - please use the other top level classes such as {@link Scene} or {@link Persona} instead
         * @public
         */
        var smwebsdk = new SmWebSdk_SmWebSdk();
        // This is here purely to coerce the documentation
        /**
         * Detect the browser capabilities
         */
        function DetectCapabilities() {
          return new Features().detectWebRTCFeatures();
        }
        // This is here purely to coerce the documentation
        /**
         * Set logging for smbwebsdk to enabled or disabled, defaults to enabled
         */
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function setLogging(value) {}

        // CONCATENATED MODULE: ./src/index.ts

        /***/
      },
      /******/
    ]
  );
});
//# sourceMappingURL=smwebsdk.js.map
