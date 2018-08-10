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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var _this = this;
var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'DEC'];
(function (f) {
    if (typeof module == 'undefined') {
        f(document, window);
    }
    else
        throw new Error('Unsupported environment');
})(function (document, window) { return __awaiter(_this, void 0, void 0, function () {
    var e_1, _a, paypalCheckout, ownTransactions, referralRewards, transactionResult, transactionData, _b, _c, history_1, e_1_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                paypalCheckout = document.forms['paypal-checkout'];
                paypalCheckout.querySelector('input[name="top-up-amount"]').addEventListener('keyup', function (e) {
                    this.value = this.value.replace(/[^\d]/ig, '');
                });
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
                                    if (paypalResult['message'] == 'password-error') {
                                        btn.innerHTML = "<span class=\"text-danger\">Password error <span class=\"mdi mdi-alert\"></span></span>";
                                        setTimeout(function () {
                                            btn.innerHTML = "<span>Paypal Checkout &nbsp; <span class=\"mdi mdi-paypal\"></span></span>";
                                            btn.disabled = false;
                                        }, 3000);
                                    }
                                    else if (paypalResult['message'] == 'success')
                                        window.location.href = paypalResult['url'];
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                ownTransactions = document.querySelector('div.own-transactions'), referralRewards = document.querySelector('div.from-referrals');
                return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/transactionHistory')];
            case 1:
                transactionResult = _d.sent();
                if (!(transactionResult['transactionHistory'].length < 1)) return [3 /*break*/, 2];
                ownTransactions.innerHTML = "<div class=\"my-5 d-flex flex-column justify-content-center align-items-center\">\n            <span class=\"mdi mdi-alert mdi-24px\"></span>\n            <span>No transaction history found</span>\n        </div>";
                return [3 /*break*/, 15];
            case 2:
                transactionData = '';
                _d.label = 3;
            case 3:
                _d.trys.push([3, 8, 9, 14]);
                _b = __asyncValues(transactionResult['transactionHistory']);
                _d.label = 4;
            case 4: return [4 /*yield*/, _b.next()];
            case 5:
                if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 7];
                history_1 = _c.value;
                transactionData += "\n            <div class=\"mt-1 own-transactions-data\">\n                <div class=\"own-transactions-date d-flex flex-column align-items-center text-muted\">\n                    <small>" + new Date(history_1['topUpDate']).getDate() + "</small>\n                    <span>" + months[new Date(history_1['topUpDate']).getMonth() + 1] + "</span>\n                </div>\n                <div class=\"own-transactions-metadata d-flex flex-column justify-content-center\">\n                    <small>" + history_1['payerEmail'] + "  " + new Date(history_1['topUpDate']).toLocaleTimeString() + "</small>\n                    <small>Amount deposited $" + history_1['paidAmount'] + "</small>\n                </div>\n            </div>";
                _d.label = 6;
            case 6: return [3 /*break*/, 4];
            case 7: return [3 /*break*/, 14];
            case 8:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 9:
                _d.trys.push([9, , 12, 13]);
                if (!(_c && !_c.done && (_a = _b["return"]))) return [3 /*break*/, 11];
                return [4 /*yield*/, _a.call(_b)];
            case 10:
                _d.sent();
                _d.label = 11;
            case 11: return [3 /*break*/, 13];
            case 12:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 13: return [7 /*endfinally*/];
            case 14:
                ownTransactions.innerHTML = transactionData;
                _d.label = 15;
            case 15:
                if (transactionResult['referralAwards'].length < 1)
                    referralRewards.innerHTML = "<div class=\"my-5 d-flex flex-column justify-content-center align-items-center\">\n            <span class=\"mdi mdi-alert mdi-24px\"></span>\n            <span>No transaction history found</span>\n            <span>See how you can earn from referrals <a href=\"/client/dashboard/referral-program\" class=\"link\"> here </a></span>\n        </div>";
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC13YWxsZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpZW50L3BheW1lbnQtd2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlCQW1FRTtBQW5FRixJQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3RixDQUFDLFVBQUMsQ0FBQztJQUNDLElBQUksT0FBTyxNQUFNLElBQUksV0FBVyxFQUFFO1FBQzlCLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7S0FDdEI7O1FBRUcsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQyxDQUFDLFVBQU8sUUFBa0IsRUFBRSxNQUFjOzs7OztnQkFDcEMsY0FBYyxHQUFvQixRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRXJELGNBQWMsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO29CQUNqSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQTtnQkFDbEQsQ0FBQyxDQUFDLENBQUE7Z0JBRUYsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFnQixDQUFDOzs7Ozs7b0NBQ2pELEdBQUcsR0FBc0IsY0FBYyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO29DQUNwRixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtvQ0FDbkIsR0FBRyxDQUFDLFNBQVMsR0FBRyxpRkFBK0UsQ0FBQTtvQ0FDL0YsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO29DQUNPLEtBQUEsWUFBWSxDQUFBOzBDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLHlCQUF5QjtvQ0FBRSxxQkFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUE7d0NBQWxILHFCQUFNLDRCQUFpRixTQUEyQixHQUFDLEVBQUE7O29DQUFsSSxZQUFZLEdBQUcsU0FBbUg7b0NBQ3RJLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGdCQUFnQixFQUFFO3dDQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLHlGQUFxRixDQUFBO3dDQUNyRyxVQUFVLENBQUM7NENBQ1AsR0FBRyxDQUFDLFNBQVMsR0FBRyw0RUFBMEUsQ0FBQTs0Q0FDMUYsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7d0NBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtxQ0FDWDt5Q0FBTSxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTO3dDQUMzQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7Ozs7O2lCQUNqRCxDQUFDLENBQUE7Z0JBR0UsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsRUFDaEUsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7Z0JBQzFDLHFCQUFNLFlBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyxFQUFBOztnQkFBbEgsaUJBQWlCLEdBQUcsU0FBOEY7cUJBRWxILENBQUEsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBLEVBQWxELHdCQUFrRDtnQkFDbEQsZUFBZSxDQUFDLFNBQVMsR0FBRyxzTkFHckIsQ0FBQTs7O2dCQUVILGVBQWUsR0FBRyxFQUFFLENBQUE7Ozs7Z0JBQ0ksS0FBQSxjQUFBLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUE7Ozs7O2dCQUFsRCxvQkFBTyxDQUFBO2dCQUNwQixlQUFlLElBQUksa01BR0YsSUFBSSxJQUFJLENBQUMsU0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLDRDQUN6QyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLHlLQUdwRCxTQUFPLENBQUMsWUFBWSxDQUFDLFVBQUssSUFBSSxJQUFJLENBQUMsU0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsK0RBQzNELFNBQU8sQ0FBQyxZQUFZLENBQUMseURBRWpELENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFFWCxlQUFlLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQTs7O2dCQUkvQyxJQUFJLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQzlDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsNlZBSXJCLENBQUE7Ozs7S0FHZCxDQUFDLENBQUEifQ==