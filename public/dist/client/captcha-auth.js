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
var d = document;
(function (f) {
    if (typeof module == 'undefined')
        f();
    else
        throw new Error('Node environment not supported');
})(function () {
    // google recaptcha and advertiser authentication
    // sign-up and sign-in handler
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
    // client sign-in form handler
    var signInForm = d.forms['signinform'];
    signInForm.addEventListener('submit', function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var btn, signInData, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        btn = document.querySelector('button#submitbutton');
                        btn.innerHTML = "<span>Loading ... </span><span class=\"mdi mdi-loading mdi-spin\"></span>";
                        btn.disabled = true;
                        return [4 /*yield*/, extractFormData(signInForm)];
                    case 1:
                        signInData = _a.sent();
                        return [4 /*yield*/, asyncRequest('/api/client/client-login', signInData)["catch"](function (err) { return err; })];
                    case 2:
                        result = _a.sent();
                        if (result.message == 'success') {
                            // @ts-ignore
                            window.router.navigateTo('/client/dashboard');
                        }
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS1hdXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jYXB0Y2hhLWF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBRWpCLENBQUMsVUFBVSxDQUFDO0lBQ1IsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXO1FBQzVCLENBQUMsRUFBRSxDQUFBOztRQUVILE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVDLGlEQUFpRDtJQUNqRCw4QkFBOEI7SUFDOUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFDOUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM1QyxFQUFFLENBQUMsR0FBRyxHQUFHLCtFQUErRSxDQUFBO0lBQ3hGLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO0lBQ2YsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7SUFDZixFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFFOUIsSUFBQSw0SUFBcUosRUFBcEosV0FBRyxFQUFFLFdBQUcsRUFBRSxZQUFJLEVBQUUsWUFBSSxDQUFnSTtJQUN6SixHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBRUYsOEJBQThCO0lBQzlCLElBQUksVUFBVSxHQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3ZELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBZ0IsQ0FBQzs7Ozs7O3dCQUNuRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7d0JBQ2QsR0FBRyxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUE7d0JBQzFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsMkVBQXlFLENBQUE7d0JBQ3pGLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO3dCQUVGLHFCQUFNLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQTlDLFVBQVUsR0FBRyxTQUFpQzt3QkFDckMscUJBQU0sWUFBWSxDQUFDLDBCQUEwQixFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQUssQ0FBQSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxFQUFBOzt3QkFBckYsTUFBTSxHQUFHLFNBQTRFO3dCQUN6RixJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFFOzRCQUM3QixhQUFhOzRCQUNiLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUE7eUJBQ2hEOzs7OztLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=