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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
   * Top level ajax function for GET and POST requests
  * @param {string} url server url to send/request data
  * @param {Array.<string>|{}} body optional data to send to server `always in json`
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
function scriptLoader(script) {
    var d = document;
    var scd = d.createElement('script'), sad = d.getElementsByTagName('script')[0];
    if (typeof script == "string") {
        scd.src = "/dist/client/" + script + ".js";
        scd.async = true;
        scd.defer = true;
        sad.parentNode.insertBefore(scd, sad);
    }
    else
        script.forEach(function (s) {
            var sr = d.createElement('script');
            sr.src = "/dist/client/" + s + ".js";
            sr.async = true;
            sr.defer = true;
            sad.parentNode.insertBefore(sr, sad);
        });
}
function extractFormData(form) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (typeof form == 'undefined')
                throw new Error('Requires a form to iterate');
            else
                // @ts-ignore
                return [2 /*return*/, Object.assign.apply(Object, __spread([{}], Array.from(new FormData(form), function (_a) {
                        var _b = __read(_a, 2), v = _b[0], k = _b[1];
                        var _c;
                        return (_c = {}, _c[v] = k.trim(), _c);
                    })))];
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFJSTtBQUNKLHNCQUE0QixHQUFXLEVBQUUsSUFBZTs7Ozs7b0JBQ3BELElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQVE7d0JBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTt5QkFDakQsQ0FBQSxPQUFPLElBQUksSUFBSSxXQUFXLENBQUEsRUFBMUIsd0JBQTBCO29CQUNuQixxQkFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHOzRCQUN2RSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQzFELE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBOzRCQUNyQixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDakUsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7O2dDQUNoQixPQUFPLFNBQVMsQ0FBQTt3QkFDekIsQ0FBQyxDQUFDLEVBQUE7d0JBTkYsc0JBQU8sU0FNTCxFQUFBO3dCQUVLLHFCQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7d0JBQ3BCLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7NEJBQzdDLGNBQWMsRUFBRSxr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