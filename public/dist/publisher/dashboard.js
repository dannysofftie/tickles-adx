// function autoCompletePlaces() {
//     let input = document.getElementById('testPlaces')
//     // @ts-ignore
//     new google.maps.places.Autocomplete(input)
// }
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
        var checkStatus, verifyPaypal, pubSiteData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkStatus = document.getElementById('checkStatus');
                    if (checkStatus) {
                        checkStatus.addEventListener('click', function (e) {
                            e.preventDefault();
                            window.location.reload();
                        });
                    }
                    verifyPaypal = document.forms['verifyPaypal'];
                    if (verifyPaypal) {
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
                    }
                    return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/publisherData')];
                case 1:
                    pubSiteData = _a.sent();
                    console.log(pubSiteData);
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3B1Ymxpc2hlci9kYXNoYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBQ2xDLHdEQUF3RDtBQUN4RCxvQkFBb0I7QUFDcEIsaURBQWlEO0FBQ2pELElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVKLENBQUMsVUFBVSxDQUFDO0lBQ1IsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXO1FBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQTtJQUMxRCxDQUFDLEVBQUUsQ0FBQTtBQUNQLENBQUMsQ0FBQyxDQUFDOzs7Ozs7b0JBT0ssV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUE7b0JBRXhELElBQUksV0FBVyxFQUFFO3dCQUNiLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDOzRCQUM3QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7NEJBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUE7d0JBQzVCLENBQUMsQ0FBQyxDQUFBO3FCQUNMO29CQUVHLFlBQVksR0FBb0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtvQkFDbEUsSUFBSSxZQUFZLEVBQUU7d0JBQ2QsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFnQixDQUFDOzs7Ozs7NENBQ3JELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTs0Q0FDYSxLQUFBLFlBQVksQ0FBQTtrREFBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRywyQkFBMkI7NENBQUUscUJBQU0sZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFBO2dEQUFwSCxxQkFBTSw0QkFBbUYsU0FBMkIsR0FBQyxFQUFBOzs0Q0FBMUksa0JBQWtCLEdBQUcsU0FBcUgsRUFDMUksR0FBRyxHQUFzQixZQUFZLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDOzRDQUNoRixJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGdCQUFnQixFQUFFO2dEQUNqRCxHQUFHLENBQUMsU0FBUyxHQUFHLDZCQUE2QixDQUFBO2dEQUM3QyxVQUFVLENBQUM7b0RBQ1AsR0FBRyxDQUFDLFNBQVMsR0FBRyxxRUFBbUUsQ0FBQTtnREFDdkYsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBOzZDQUNYO2lEQUFNLElBQUksa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFO2dEQUNuRCxHQUFHLENBQUMsU0FBUyxHQUFHLGdDQUFnQyxDQUFBO2dEQUNoRCxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTs2Q0FDdEI7Ozs7O3lCQUNKLENBQUMsQ0FBQTtxQkFDTDtvQkFFaUIscUJBQU0sWUFBWSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLDRCQUE0QixDQUFDLEVBQUE7O29CQUF2RyxXQUFXLEdBQUcsU0FBeUY7b0JBQzNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7Ozs7O0NBRTNCLENBQUMsQ0FBQSJ9