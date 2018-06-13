"use strict";
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
(function (f) {
    if (typeof module == 'undefined') {
        document.addEventListener('DOMContentLoaded', function () {
            f(document, window);
        });
    }
    else
        throw new Error('Cannot run in Node environment');
})(function (document, window) {
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
                            credentials: 'include',
                            headers: {
                                'Content-Type': 'application/json',
                                'Content-Length': body.length
                            },
                            body: JSON.stringify(body)
                        }).then(function (res) { return res.json(); })["catch"](function (err) { return err; })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    // listen for scroll event
    document.addEventListener('scroll', function () {
        var ref = document.querySelector('.client-details-box');
        if (!isElementInViewport(document.querySelector('.top-navigation'))) {
            Object.assign(ref.style, {
                'box-shadow': '0px 4px 5px 0px rgba(0, 0, 0, 0.3)',
                'padding': '15px 22px'
            });
        }
        else
            Object.assign(ref.style, {
                'box-shadow': '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
                'padding': '9px 16px'
            });
    });
    // manage dashboard naviagations
    var navs = Array.from(document.querySelectorAll('.nav-options'));
    navs.forEach(function (nav) {
        nav.addEventListener('click', function () {
            // @ts-ignore
            var id = this.getAttribute('id');
            navs.forEach(function (n) {
                n.classList.remove('nav-active');
            });
            // @ts-ignore
            this.classList.add('nav-active');
        });
    });
    // data-overview charts
    var ctx = document.getElementById('data-overview');
    ctx;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9kYXNoYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxVQUFDLENBQUM7SUFDQyxJQUFJLE9BQU8sTUFBTSxJQUFJLFdBQVcsRUFBRTtRQUM5QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7WUFDMUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtLQUNMOztRQUVHLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQyxVQUFDLFFBQWtCLEVBQUUsTUFBYztJQUVsQzs7O09BR0c7SUFDSCw2QkFBNkIsRUFBZTtRQUN4QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtRQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUN2RSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2hGLENBQUM7SUFFRDs7OztNQUlFO0lBQ0YsV0FBaUIsR0FBVyxFQUFFLElBQVM7Ozs7O3dCQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFROzRCQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7NkJBQ2pELENBQUEsT0FBTyxJQUFJLElBQUksV0FBVyxD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