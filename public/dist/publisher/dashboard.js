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
(function (f) {
    if (typeof module != 'undefined')
        throw new Error('Should not run in Node environment!');
    f();
})(function () {
    return __awaiter(this, void 0, void 0, function () {
        var checkStatus, verifyPaypal;
        return __generator(this, function (_a) {
            checkStatus = document.getElementById('checkStatus');
            checkStatus.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.reload();
            });
            verifyPaypal = document.forms['verifyPaypal'];
            verifyPaypal.addEventListener('submit', function (e) {
                return __awaiter(this, void 0, void 0, function () {
                    var verificationStatus, btn, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                e.preventDefault();
                                _a = asyncRequest;
                                _b = [extractCookies(document.cookie, 'API') + '/api/v1/auth/verifyPaypal'];
                                return [4 /*yield*/, extractFormData(this)];
                            case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([_c.sent()]))];
                            case 2:
                                verificationStatus = _c.sent(), btn = verifyPaypal.querySelector('button[type="submit"]');
                                if (verificationStatus['error'] == 'password-error') {
                                    btn.innerHTML = "<span>Wrong password</span>";
                                    setTimeout(function () {
                                        btn.innerHTML = "<span>Confirm account <span class=\"mdi mdi-paypal\"></span></span>";
                                    }, 3000);
                                }
                                else if (verificationStatus['message'] == 'success') {
                                    btn.innerHTML = "<span>Account confirmed</span>";
                                    btn.disabled = true;
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            });
            return [2 /*return*/];
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3B1Ymxpc2hlci9kYXNoYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQVMsQ0FBQztJQUNQLElBQUksT0FBTyxNQUFNLElBQUksV0FBVztRQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7SUFDMUQsQ0FBQyxFQUFFLENBQUE7QUFDUCxDQUFDLENBQUMsQ0FBQzs7OztZQUNLLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3hELFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7Z0JBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUE7WUFFRSxZQUFZLEdBQW9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDbEUsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFlLENBQUM7Ozs7OztnQ0FDcEQsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO2dDQUNhLEtBQUEsWUFBWSxDQUFBO3NDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLDJCQUEyQjtnQ0FBRSxxQkFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUE7b0NBQXBILHFCQUFNLDRCQUFtRixTQUEyQixHQUFDLEVBQUE7O2dDQUExSSxrQkFBa0IsR0FBRyxTQUFxSCxFQUMxSSxHQUFHLEdBQXNCLFlBQVksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7Z0NBQ2hGLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQWdCLEVBQUU7b0NBQ2pELEdBQUcsQ0FBQyxTQUFTLEdBQUcsNkJBQTZCLENBQUE7b0NBQzdDLFVBQVUsQ0FBQzt3Q0FDUCxHQUFHLENBQUMsU0FBUyxHQUFHLHFFQUFtRSxDQUFBO29DQUN2RixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7aUNBQ1g7cUNBQU0sSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLEVBQUU7b0NBQ25ELEdBQUcsQ0FBQyxTQUFTLEdBQUcsZ0NBQWdDLENBQUE7b0NBQ2hELEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2lDQUN0Qjs7Ozs7YUFDSixDQUFDLENBQUE7Ozs7Q0FDTCxDQUFDLENBQUEifQ==