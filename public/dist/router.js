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
var onloadCallback = function () {
    var recaptcha = 'recaptcha';
    // @ts-ignore
    grecaptcha.render(recaptcha, {
        'sitekey': '6LdN1FEUAAAAAPoMc4b4A9pPFRC2E1GkA0Y3EOyi'
    });
};
(function (f) {
    if (typeof module == 'undefined') {
        document.addEventListener('DOMContentLoaded', function () {
            f(document, window);
        });
    }
    else
        throw new Error('Cannot run in Node environment');
})(function (document, window) { return __awaiter(_this, void 0, void 0, function () {
    var app, error404, 
    // @ts-ignore
    router;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = document.getElementById('app');
                return [4 /*yield*/, asyncRequest('/error404')];
            case 1:
                error404 = _a.sent(), router = new Router({
                    mode: 'history',
                    page404: function (path) {
                        app.innerHTML = '/' + path + ' not found on this server';
                    }
                });
                router.add('/', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showSpinner();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/client-router')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, linksLoader()];
                            case 2:
                                _b.sent();
                                hideSpinner();
                                return [2 /*return*/];
                        }
                    });
                }); });
                router.add('/client', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showSpinner();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/client-router/client')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('captcha-auth')];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, linksLoader()];
                            case 3:
                                _b.sent();
                                hideSpinner();
                                return [2 /*return*/];
                        }
                    });
                }); });
                router.add('/client/dashboard', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showSpinner();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/client-router/client/dashboard')
                                    // ['chart-data', 'create-campaign', 'dash-home']
                                ];
                            case 1:
                                _a.innerHTML = _b.sent();
                                // ['chart-data', 'create-campaign', 'dash-home']
                                return [4 /*yield*/, scriptLoader(['chart-data', 'dash-home'])];
                            case 2:
                                // ['chart-data', 'create-campaign', 'dash-home']
                                _b.sent();
                                return [4 /*yield*/, linksLoader()];
                            case 3:
                                _b.sent();
                                hideSpinner();
                                return [2 /*return*/];
                        }
                    });
                }); });
                router.add('/client/dashboard/create-campaign', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showTopLoader();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/client-router/client/create-campaign')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('create-campaign')];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, linksLoader()];
                            case 3:
                                _b.sent();
                                hideTopLoader();
                                hideSpinner();
                                return [2 /*return*/];
                        }
                    });
                }); });
                router.add('/client/dashboard/manage-campaign', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showTopLoader();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/client-router/client/manage-campaign')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('create-campaign')];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, linksLoader()];
                            case 3:
                                _b.sent();
                                hideTopLoader();
                                hideSpinner();
                                return [2 /*return*/];
                        }
                    });
                }); });
                router.add('/client/dashboard/campaign-statistics', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showTopLoader();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/client-router/client/campaign-statistics')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('create-campaign')];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, linksLoader()];
                            case 3:
                                _b.sent();
                                hideTopLoader();
                                hideSpinner();
                                return [2 /*return*/];
                        }
                    });
                }); });
                router.add('/client/dashboard/payment-wallet', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showTopLoader();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/client-router/client/payment-wallet')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('create-campaign')];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, linksLoader()];
                            case 3:
                                _b.sent();
                                hideTopLoader();
                                hideSpinner();
                                return [2 /*return*/];
                        }
                    });
                }); });
                router.add('/client/dashboard/referral-program', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showTopLoader();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/client-router/client/referral-program')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('create-campaign')];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, linksLoader()];
                            case 3:
                                _b.sent();
                                hideTopLoader();
                                hideSpinner();
                                return [2 /*return*/];
                        }
                    });
                }); });
                router.navigateTo(window.location.pathname);
                // @ts-ignore
                window.router = router;
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQW1HRTtBQW5HRixJQUFJLGNBQWMsR0FBRztJQUNqQixJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUE7SUFDM0IsYUFBYTtJQUNiLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1FBQ3pCLFNBQVMsRUFBRSwwQ0FBMEM7S0FDeEQsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDO0FBR0YsQ0FBQyxVQUFDLENBQUM7SUFDQyxJQUFJLE9BQU8sTUFBTSxJQUFJLFdBQVcsRUFBRTtRQUM5QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7WUFDMUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtLQUNMOztRQUVHLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQyxVQUFPLFFBQWtCLEVBQUUsTUFBYzs7Ozs7Ozs7Z0JBRXBDLEdBQUcsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLHFCQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBQTs7Z0JBQTFDLFFBQVEsR0FBRyxTQUErQixFQUUxQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ2hCLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxVQUFDLElBQUk7d0JBQ1YsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLDJCQUEyQixDQUFBO29CQUM1RCxDQUFDO2lCQUNKLENBQUM7Z0JBRU4sTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Ozs7O2dDQUNaLFdBQVcsRUFBRSxDQUFBO2dDQUNiLEtBQUEsR0FB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