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
var d = document, onloadCallback = function () {
    var recaptcha = 'recaptcha';
    // @ts-ignore
    grecaptcha.render(recaptcha, {
        'sitekey': '6LdN1FEUAAAAAPoMc4b4A9pPFRC2E1GkA0Y3EOyi'
    });
};
/**
 * Reveals elem's visibility within DOM
 * @param {HTMLElement} elem
 */
function i(elem) {
    var e = elem.getBoundingClientRect();
    return e.bottom > 0 && e.top > 0 && e.left > 0 && e.right > 0;
}
/**
 * Top level ajax function for GET and POST requests
 * @param {string} url server url to send/request data
 * @param {Array.<string>|{}} body optional data to send to server `always in json`
 */
function r(url, body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof url == 'undefined' || typeof url != 'string')
                        throw new Error('Expected a url but found none!');
                    if (!(typeof body == 'undefined')) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch(url).then(function (res) { return res.json(); })["catch"](function (err) { return err; })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body)
                    }).then(function (res) { return res.json(); })["catch"](function (err) { return err; })];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
(function (f) {
    if (typeof module == 'undefined')
        f();
    else
        throw new Error('Node environment not supported');
})(function () {
    // DOM loaded, execute
    d.addEventListener('DOMContentLoaded', function () {
        var sc = d.createElement('script'), sa = d.getElementsByTagName('script')[0];
        sc.src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit";
        sc.async = true;
        sc.defer = true;
        sa.parentNode.insertBefore(sc, sa);
        var _a = __read([d.getElementById('signin'), d.getElementById('signup'), d.querySelector('.sign-up-form'), d.querySelector('.sign-in-form')], 4), sin = _a[0], sup = _a[1], sint = _a[2], supt = _a[3];
        sin.addEventListener('click', function (e) {
            supt.classList.remove('d-none');
            sint.classList.add('d-none');
        });
        sup.addEventListener('click', function (e) {
            sint.classList.remove('d-none');
            supt.classList.add('d-none');
        });
        // sign up form
        d.forms['signupform'].addEventListener('submit', function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var icon, signUpData, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            e.preventDefault();
                            icon = this.querySelector('.mdi-play-circle');
                            icon.classList.add('mdi-spin');
                            signUpData = Object.assign.apply(Object, __spread([{}], Array.from(new FormData(this), function (_a) {
                                var _b = __read(_a, 2), x = _b[0], y = _b[1];
                                var _c;
                                return (_c = {}, _c[x] = y.trim(), _c);
                            })));
                            return [4 /*yield*/, r('/client/client-signup', signUpData)["catch"](function (err) { return err; })];
                        case 1:
                            result = _a.sent();
                            icon.classList.remove('mdi-spin');
                            console.log(result);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS1hdXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jYXB0Y2hhLWF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksQ0FBQyxHQUFHLFFBQVEsRUFDWixjQUFjLEdBQUc7SUFDYixJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUE7SUFDM0IsYUFBYTtJQUNiLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1FBQ3pCLFNBQVMsRUFBRSwwQ0FBMEM7S0FDeEQsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUw7OztHQUdHO0FBQ0gsV0FBVyxJQUFpQjtJQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtJQUNwQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO0FBQ2pFLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsV0FBaUIsR0FBVyxFQUFFLElBQVM7Ozs7O29CQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRO3dCQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7eUJBQ2pELENBQUEsT0FBTyxJQUFJLElBQUksV0FBVyxDQUFBLEVBQTFCLHdCQUEwQjtvQkFDbkIscUJBQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQyxPQUFLLENBQUEsQ0FBQyxVQUFBLEdBQUcsSUFBSSxP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