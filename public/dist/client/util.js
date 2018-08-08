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
                                'client-ssid': extractCookies(document.cookie, 'SSID')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFdBQVc7SUFDaEIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3ZELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3RDLENBQUM7QUFDRCxTQUFTLFdBQVc7SUFDaEIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3ZELFVBQVUsQ0FBQztRQUNQLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ25DLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUNYLENBQUM7QUFDRCxTQUFTLGFBQWE7SUFDbEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3hELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3JDLENBQUM7QUFDRCxTQUFTLGFBQWE7SUFDbEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3hELFVBQVUsQ0FBQztRQUNQLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUNaLENBQUM7QUFFRDs7Ozs7SUFLSTtBQUNKLFNBQWUsWUFBWSxDQUFDLEdBQVcsRUFBRSxJQUFlLEVBQUUsU0FBbUI7Ozs7O29CQUN6RSxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsSUFBSSxPQUFPLEdBQUcsSUFBSSxR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