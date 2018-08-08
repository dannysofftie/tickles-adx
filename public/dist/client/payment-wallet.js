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
var _this = this;
(function (f) {
    if (typeof module == 'undefined') {
        f(document, window);
    }
    else
        throw new Error('Unsupported environment');
})(function (document, window) { return __awaiter(_this, void 0, void 0, function () {
    var paypalCheckout;
    return __generator(this, function (_a) {
        paypalCheckout = document.forms['paypal-checkout'];
        paypalCheckout.addEventListener('submit', function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var btn, paypalResult, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            btn = paypalCheckout.querySelector('button[type="submit"]');
                            btn.disabled = true;
                            btn.innerHTML = "<span>Processing &nbsp; <span class=\"mdi mdi-loading mdi-spin\"></span></span>";
                            e.preventDefault();
                            _a = asyncRequest;
                            _b = [extractCookies(document.cookie, 'API') + '/api/v1/checkout/paypal'];
                            return [4 /*yield*/, extractFormData(this)];
                        case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.sent()]))];
                        case 2:
                            paypalResult = _c.sent();
                            if (paypalResult['message'] == 'success')
                                window.location.href = paypalResult['url'];
                            return [2 /*return*/];
                    }
                });
            });
        });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC13YWxsZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpZW50L3BheW1lbnQtd2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBaUJFO0FBakJGLENBQUMsVUFBQyxDQUFDO0lBQ0MsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDOUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtLQUN0Qjs7UUFFRyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7QUFDbEQsQ0FBQyxDQUFDLENBQUMsVUFBTyxRQUFrQixFQUFFLE1BQWM7OztRQUNwQyxjQUFjLEdBQW9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUN2RSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQWdCLENBQUM7Ozs7Ozs0QkFDakQsR0FBRyxHQUFzQixjQUFjLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUE7NEJBQ3BGLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBOzRCQUNuQixHQUFHLENBQUMsU0FBUyxHQUFHLGlGQUErRSxDQUFBOzRCQUMvRixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7NEJBQ08sS0FBQSxZQUFZLENBQUE7a0NBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcseUJBQXlCOzRCQUFFLHFCQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQTtnQ0FBbEgscUJBQU0sNEJBQWlGLFNBQTJCLEdBQUMsRUFBQTs7NEJBQWxJLFlBQVksR0FBRyxTQUFtSDs0QkFDdEksSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUztnQ0FDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBOzs7OztTQUNqRCxDQUFDLENBQUE7OztLQUNMLENBQUMsQ0FBQSJ9