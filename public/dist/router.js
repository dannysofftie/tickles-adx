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
var signInRecaptcha = function () {
    var recaptcha = 'recaptcha';
    // @ts-ignore
    grecaptcha.render(recaptcha, {
        'sitekey': '6LdN1FEUAAAAAPoMc4b4A9pPFRC2E1GkA0Y3EOyi'
    });
};
var signUpRecaptcha = function () {
    var recaptcha = 'recaptcha2';
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
    var app, d, error404, 
    // @ts-ignore
    router;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = document.getElementById('app'), d = document;
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
                                return [4 /*yield*/, asyncRequest('/page-view')];
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
                                if (extractCookies(document.cookie, "SSID")) {
                                    router.navigateTo('/client/dashboard');
                                    window.location.reload();
                                }
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/page-view/client')];
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
                router.add('client/signin', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showSpinner();
                                if (extractCookies(document.cookie, "SSID")) {
                                    router.navigateTo('/client/dashboard');
                                    window.location.reload();
                                }
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/page-view/client/signin')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('client/captcha-auth')];
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
                router.add('client/signup', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showSpinner();
                                if (extractCookies(document.cookie, "SSID")) {
                                    router.navigateTo('/client/dashboard');
                                    window.location.reload();
                                }
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/page-view/client/signup')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('client/captcha-auth')];
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
                router.add('client/logout', function () { return __awaiter(_this, void 0, void 0, function () {
                    var allCookies, cookie;
                    return __generator(this, function (_a) {
                        showSpinner();
                        allCookies = extractCookies(document.cookie);
                        for (cookie in JSON.parse(allCookies)) {
                            document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/client;';
                        }
                        router.navigateTo('/client');
                        window.location.reload();
                        hideSpinner();
                        return [2 /*return*/];
                    });
                }); });
                router.add('/client/dashboard', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showSpinner();
                                return [4 /*yield*/, extractCookies(document.cookie, "SSID")];
                            case 1:
                                if (!(_b.sent())) {
                                    router.navigateTo('/client');
                                    window.location.reload();
                                }
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/page-view/client/dashboard')];
                            case 2:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('client/chart-data')];
                            case 3:
                                _b.sent();
                                return [4 /*yield*/, linksLoader()];
                            case 4:
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
                                showSpinner();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/page-view/client/create-campaign')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('client/create-campaign')];
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
                                return [4 /*yield*/, asyncRequest('/page-view/client/manage-campaign')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('client/manage-campaigns')];
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
                                return [4 /*yield*/, asyncRequest('/page-view/client/campaign-statistics')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('client/campaign-statistics')];
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
                                return [4 /*yield*/, asyncRequest('/page-view/client/payment-wallet')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('client/payment-wallet')];
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
                                return [4 /*yield*/, asyncRequest('/page-view/client/referral-program')
                                    // await scriptLoader('create-campaign')
                                ];
                            case 1:
                                _a.innerHTML = _b.sent();
                                // await scriptLoader('create-campaign')
                                return [4 /*yield*/, linksLoader()];
                            case 2:
                                // await scriptLoader('create-campaign')
                                _b.sent();
                                hideTopLoader();
                                hideSpinner();
                                return [2 /*return*/];
                        }
                    });
                }); });
                router.add('/publisher', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showSpinner();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/page-view/publisher')];
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
                router.add('/publisher/signup', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showSpinner();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/page-view/publisher/signup')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('publisher/signup')];
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
                router.add('/publisher/dashboard', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                showSpinner();
                                _a = app;
                                return [4 /*yield*/, asyncRequest('/page-view/publisher/dashboard')];
                            case 1:
                                _a.innerHTML = _b.sent();
                                return [4 /*yield*/, scriptLoader('publisher/dashboard')];
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
                router.add('/publisher/logout', function () { return __awaiter(_this, void 0, void 0, function () {
                    var allCookies;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                showSpinner();
                                allCookies = extractCookies(document.cookie);
                                return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                        var cookie;
                                        return __generator(this, function (_a) {
                                            for (cookie in JSON.parse(allCookies)) {
                                                document.cookie = cookie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/publisher;';
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); })()];
                            case 1:
                                _a.sent();
                                router.navigateTo('/publisher');
                                window.location.reload();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQXFMRTtBQXJMRixJQUFJLGVBQWUsR0FBRztJQUNsQixJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUE7SUFDM0IsYUFBYTtJQUNiLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1FBQ3pCLFNBQVMsRUFBRSwwQ0FBMEM7S0FDeEQsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDO0FBQ0YsSUFBSSxlQUFlLEdBQUc7SUFDbEIsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFBO0lBQzVCLGFBQWE7SUFDYixVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUN6QixTQUFTLEVBQUUsMENBQTBDO0tBQ3hELENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQztBQUNGLENBQUMsVUFBQyxDQUFDO0lBQ0MsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDOUIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO1lBQzFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUE7S0FDTDs7UUFFRyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFDLENBQUMsVUFBTyxRQUFrQixFQUFFLE1BQWM7Ozs7Ozs7O2dCQUVwQyxHQUFHLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQ2pELENBQUMsR0FBRyxRQUFRO2dCQUNELHFCQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBQTs7Z0JBQTFDLFFBQVEsR0FBRyxTQUErQixFQUUxQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ2hCLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8s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