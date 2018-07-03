var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function showSpinner() {
    var spinner = document.querySelector('.spinner-holder');
    spinner.classList.remove('d-none');
}
function hideSpinner() {
    var spinner = document.querySelector('.spinner-holder');
    setTimeout(function () {
        spinner.classList.add('d-none');
    }, 2000);
}
function showTopLoader() {
    var loader = document.querySelector('#color-top-loader');
    loader.classList.remove('d-none');
}
function hideTopLoader() {
    var loader = document.querySelector('#color-top-loader');
    setTimeout(function () {
        loader.classList.add('d-none');
    }, 2000);
}
/**
   * Top level ajax function for GET and POST requests
  * @param {string} url server url to send/request data
  * @param {Array.<string>|{}} body optional data to send to server `always in json`
  * @param {string} ifForm Content-Type to include in headers
  */
function asyncRequest(url, body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof url == 'undefined' || typeof url != 'string')
                        throw new Error('Expected a url but found none!');
                    if (!(typeof body == 'undefined')) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(url, { method: 'GET', credentials: 'include' }).then(function (res) {
                            if (res.headers.get('Content-Type').indexOf('text/html') != -1)
                                return res.text();
                            if (res.headers.get('Content-Type').indexOf('application/json') != -1)
                                return res.json();
                            else
                                return undefined;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, fetch(url, {
                        method: 'POST', credentials: 'include', headers: {
                            'Content-Type': 'application/json',
                            'Content-Length': body.length
                        }, body: JSON.stringify(body)
                    }).then(function (res) { return res.json(); })["catch"](function (err) { return err; })];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
/**
 * pass an element to find if it's visible on the browser window
 * @param {HTMLElement} el element to check it's visibility in browser window
 */
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight);
}
/**
 * loads link navigation and router manager to current document loaded
 */
function linksLoader() {
    var links = Array.from(document.querySelectorAll('a.link'));
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var href = this.getAttribute('href');
            // @ts-ignore
            window.router.navigateTo(href);
        });
    });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
/**
 * extract url parameter search queries
 * @param {string} param parameter to value value for
 */
function extractURLParam(param) {
    if (typeof param == undefined)
        throw new Error('Expected param to search but found none');
    var url = window.location.href;
    if (url.indexOf('?') == -1)
        return 'Can\'t get search params';
    else {
        var u = url.split('?')[1], s = void 0, obj_1 = {};
        if (u.indexOf('&') != -1)
            s = u.split('&');
        else
            s = u;
        if (typeof s == "string")
            obj_1[s.split('=')[0].trim()] = s.split('=')[1];
        else
            s.map(function (p) { return obj_1[p.split('=')[0].trim()] = p.split('=')[1]; });
        if (typeof param != "undefined")
            return obj_1[param];
        else
            return obj_1;
    }
}
function scriptLoader(script) {
    var d = document;
    var scd = d.createElement('script'), sad = d.getElementsByTagName('script')[0], allTags = Array.from(document.getElementsByTagName('script'));
    if (typeof script == "string") {
        scd.src = "/dist/client/" + script + ".js";
        scd.async = true;
        scd.defer = true;
        allTags.forEach(function (s) {
            (s.src == scd.src) ? s.parentNode.removeChild(s) : sad.parentNode.insertBefore(scd, s);
        });
    }
    else
        script.forEach(function (s) {
            var sr = d.createElement('script');
            sr.src = "/dist/client/" + s + ".js";
            sr.async = true;
            sr.defer = true;
            allTags.forEach(function (s) {
                (s.src == sr.src) ? s.parentNode.removeChild(s) : sad.parentNode.insertBefore(sr, s);
            });
        });
}
/**
 * extracts form data, including checkboxes, multiple select options,
 * multiple file uploads, ..... radio buttons still to be implemented,
 * and returns an iterable
 * @param {HTMLFormElement} form form to extract data
 */
function extractFormData(form) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a, data_1, _loop_1, _b, _c, element;
        return __generator(this, function (_d) {
            if (typeof form == 'undefined')
                throw new Error('Requires a form to iterate');
            else {
                data_1 = {};
                _loop_1 = function (element) {
                    var e_2, _a;
                    ['text', 'number', 'url', 'textarea', 'password', 'email'].forEach(function (type) {
                        if (element['type'].indexOf(type) != -1) {
                            data_1[element['name']] = element['value'].trim();
                        }
                    });
                    if (element['type'] == 'file') {
                        data_1[element['name']] = element['files'][0];
                    }
                    if (element['type'].indexOf('select') != -1) {
                        if (element.getAttribute('multiple') != undefined) {
                            try {
                                var multiValues = [], options = Array.from(element.querySelectorAll('option'));
                                try {
                                    for (var options_1 = __values(options), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                                        var option = options_1_1.value;
                                        if (option.selected)
                                            multiValues.push(option.value);
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (options_1_1 && !options_1_1.done && (_a = options_1["return"])) _a.call(options_1);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                                data_1[element['name']] = multiValues;
                            }
                            catch (err) { }
                        }
                        else {
                            data_1[element['name']] = element['value'];
                        }
                    }
                    // @ts-ignore
                    if (element['type'] == 'checkbox' && element.checked)
                        data_1[element['name']] = element['value'];
                    // @ts-ignore
                    if (element['type'] == 'radio' && element.checked)
                        data_1[element['name']] = element['value'];
                };
                try {
                    for (_b = __values(Array.from(form.elements)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        element = _c.value;
                        _loop_1(element);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [2 /*return*/, data_1];
            }
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUN2RCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBQ0Q7SUFDSSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDdkQsVUFBVSxDQUFDO1FBQ1AsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbkMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ1osQ0FBQztBQUNEO0lBQ0ksSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3hELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3JDLENBQUM7QUFDRDtJQUNJLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUN4RCxVQUFVLENBQUM7UUFDUCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDWixDQUFDO0FBRUQ7Ozs7O0lBS0k7QUFDSixzQkFBNEIsR0FBVyxFQUFFLElBQWU7Ozs7O29CQUNwRCxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRO3dCQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7eUJBQ2pELENBQUEsT0FB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