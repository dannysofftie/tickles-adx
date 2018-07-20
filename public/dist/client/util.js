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
    }, 500);
}
function showTopLoader() {
    var loader = document.querySelector('#color-top-loader');
    loader.classList.remove('d-none');
}
function hideTopLoader() {
    var loader = document.querySelector('#color-top-loader');
    setTimeout(function () {
        loader.classList.add('d-none');
    }, 1000);
}
/**
   * Top level ajax function for GET and POST requests
  * @param {string} url server url to send/request data
  * @param {Array.<string>|{}} body optional data to send to server `always in json`
  * @param {string} ifForm Content-Type to include in headers
  */
function asyncRequest(url, body, multipart) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof url == 'undefined' || typeof url != 'string')
                        throw new Error('Expected a url but found none!');
                    if (!(typeof body == 'undefined')) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(url, {
                            method: 'GET', credentials: 'same-origin', headers: {
                                'Client-Ssid': extractCookies(document.cookie, 'SSID')
                            }
                        }).then(function (res) {
                            if (res.headers.get('Content-Type').indexOf('text/html') != -1)
                                return res.text();
                            else if (res.headers.get('Content-Type').indexOf('application/json') != -1)
                                return res.json();
                            else
                                return undefined;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    if (!(typeof multipart != "undefined")) return [3 /*break*/, 4];
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST', credentials: 'same-origin', headers: {
                                'Content-Length': body.length,
                                'Client-Ssid': extractCookies(document.cookie, 'SSID')
                            }, body: body
                        }).then(function (res) { return res.json(); })];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: return [4 /*yield*/, fetch(url, {
                        method: 'POST', credentials: 'same-origin', headers: {
                            'Content-Type': 'application/json',
                            'Content-Length': body.length,
                            'Client-Ssid': extractCookies(document.cookie, 'SSID')
                        }, body: JSON.stringify(body)
                    }).then(function (res) { return res.json(); })];
                case 5: return [2 /*return*/, _a.sent()];
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
        scd.src = "/dist/" + script + ".js";
        scd.async = true;
        scd.defer = true;
        allTags.forEach(function (s) {
            (s.src == scd.src) ? s.parentNode.removeChild(s) : s.parentNode.insertBefore(scd, s);
        });
    }
    else
        script.forEach(function (s) {
            var sr = d.createElement('script');
            sr.src = "/dist/" + s + ".js";
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
            switch (_d.label) {
                case 0:
                    if (!(typeof form == 'undefined')) return [3 /*break*/, 1];
                    throw new Error('Requires a form to iterate');
                case 1:
                    data_1 = {};
                    // reset object values first before iterating form
                    Object.getOwnPropertyNames(data_1).forEach(function (key) {
                        delete data_1[key];
                    });
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
                    // delete empty keys
                    return [4 /*yield*/, Object.keys(data_1).forEach(function (key) { return (key.length < 1) && delete data_1[key]; })];
                case 2:
                    // delete empty keys
                    _d.sent();
                    return [2 /*return*/, data_1];
            }
        });
    });
}
/**
 * checks if cookie exists and returns all cookies, or cookie value if cookie name is passed
 * @param {string} cookieString
 * @param {string} cookieName
 */
function extractCookies(cookieString, cookieName) {
    // @ts-ignore
    var c = decodeURIComponent(cookieString), d, e = {};
    if (c.length < 1)
        return false;
    if (c.indexOf(';') != -1)
        d = c.split(';');
    else
        d = c;
    if (typeof d == 'string')
        e[d.split('=')[0].trim()] = d.split('=')[1].trim();
    else
        d.map(function (p) { return e[p.split('=')[0].trim()] = p.split('=')[1].trim(); });
    if (typeof cookieName != 'undefined') {
        if (cookieName.trim() == 'API') {
            return window.location.protocol + '//' + e[cookieName];
        }
        return e[cookieName];
    }
    return JSON.stringify(e);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUN2RCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBQ0Q7SUFDSSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDdkQsVUFBVSxDQUFDO1FBQ1AsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ1gsQ0FBQztBQUNEO0lBQ0ksSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3hELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3JDLENBQUM7QUFDRDtJQUNJLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUN4RCxVQUFVLENBQUM7UUFDUCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDWixDQUFDO0FBRUQ7Ozs7O0lBS0k7QUFDSixzQkFBNEIsR0FBVyxFQUFFLElBQWUsRUFBRSxTQUFtQjs7Ozs7b0JBQ3pFLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQVE7d0JBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTt5QkFD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