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
(function (f) {
    if (typeof module == 'undefined') {
        document.addEventListener('DOMContentLoaded', function () {
            f(document, window);
        });
    }
    else
        throw new Error('Cannot run in Node environment');
})(function (document, window) {
    var loader = document.getElementById('color-top-loader');
    // @ts-ignore
    window.loader = loader;
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
            loader.classList.remove('d-none');
            // @ts-ignore
            var id = this.getAttribute('id');
            navs.forEach(function (n) {
                n.classList.remove('nav-active');
            });
            // @ts-ignore
            this.classList.add('nav-active');
            // pass id of the clicked tab to function changeContent(id:string){ }
            changeContent(id);
        });
    });
    // change content in dashboard
    function changeContent(url) {
        return __awaiter(this, void 0, void 0, function () {
            var contentHolder, rootUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contentHolder = document.querySelector('.dashboard-content'), rootUrl = '/client/adv/dashboard/?url=';
                        history.replaceState(null, null, '?url=' + url);
                        return [4 /*yield*/, asyncRequest(rootUrl + url)];
                    case 1:
                        data = _a.sent();
                        contentHolder.innerHTML = data;
                        setTimeout(function () {
                            loader.classList.add('d-none');
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0lBSUk7QUFDSixzQkFBNEIsR0FBVyxFQUFFLElBQWU7Ozs7O29CQUNwRCxJQUFJLE9BQU8sR0FBRyxJQUFJLFdBQVcsSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRO3dCQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7eUJBQ2pELENBQUEsT0FBTyxJQUFJLElBQUksV0FBVyxDQUFBLEVBQTFCLHdCQUEwQjtvQkFDbkIscUJBQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRzs0QkFDdkUsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUMxRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTs0QkFDckIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ2pFLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBOztnQ0FDaEIsT0FBTyxTQUFTLENBQUE7d0JBQ3pCLENBQUMsQ0FBQyxFQUFBO3dCQU5GLHNCQUFPLFNBTUwsRUFBQTt3QkFFSyxxQkFBTSxLQUFLLENBQUMsR0FBRyxFQUFFO3dCQUNwQixNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFOzRCQUM3QyxjQUFjLEVBQUUsa0JBQWtCOzRCQUNsQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTTt5QkFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7cUJBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUMsT0FBSyxDQUFBLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLEVBQUE7d0JBTDVDLHNCQUFPLFNBS3FDLEVBQUE7Ozs7Q0FDbkQ7QUFHRDs7O0dBR0c7QUFDSCw2QkFBNkIsRUFBZTtJQUN4QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtJQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztRQUN2RSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQ2hGLENBQUM7QUFHRCxDQUFDLFVBQUMsQ0FBQztJQUNDLElBQUksT0FBTyxNQUFNLElBQUksV0FBVyxFQUFFO1FBQzlCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtZQUMxQyxDQUFDLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0tBQ0w7O1FBRUcsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3pELENBQUMsQ0FBQyxDQUFDLFVBQUMsUUFBa0IsRUFBRSxNQUFjO0lBRWxDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUN4RCxhQUFhO0lBQ2IsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFHdEIsMEJBQTBCO0lBQzFCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7UUFDaEMsSUFBSSxHQUFHLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUVwRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUU7WUFDakUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO2dCQUNyQixZQUFZLEVBQUUsb0NBQW9DO2dCQUNsRCxTQUFTLEVBQUUsV0FBVzthQUN6QixDQUFDLENBQUE7U0FDTDs7WUFDRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLFlBQVksRUFBRSxvQ0FBb0M7Z0JBQ2xELFNBQVMsRUFBRSxVQUFVO2FBQ3hCLENBQUMsQ0FBQTtJQUNWLENBQUMsQ0FBQyxDQUFBO0lBRUYsZ0NBQWdDO0lBQ2hDLElBQUksSUFBSSxHQUFtQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0lBQ2hGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1FBQ1osR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNqQyxhQUFhO1lBQ2IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDVixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNwQyxDQUFDLENBQUMsQ0FBQTtZQUNGLGFBQWE7WUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNoQyxxRUFBcUU7WUFDckUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRiw4QkFBOEI7SUFDOUIsdUJBQTZCLEdBQVc7Ozs7Ozt3QkFDaEMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsRUFDNUQsT0FBTyxHQUFXLDZCQUE2QixDQUFBO3dCQUNuRCxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFBO3dCQUVwQyxxQkFBTSxZQUFZLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFBOzt3QkFBeEMsSUFBSSxHQUFHLFNBQWlDO3dCQUM1QyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTt3QkFDOUIsVUFBVSxDQUFDOzRCQUNQLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO3dCQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7Ozs7O0tBQ1g7QUFDTCxDQUFDLENBQUMsQ0FBQSJ9