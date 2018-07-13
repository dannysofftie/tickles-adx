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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var d = document;
(function (f) {
    if (typeof module == 'undefined')
        f();
    else
        throw new Error('Node environment not supported');
})(function () {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a, signInForm, sc, sa, signUpForm, sc, sa, businessCategories, selectOption, businessCategories_1, businessCategories_1_1, field;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    signInForm = d.forms['signinform'];
                    if (typeof signInForm != 'undefined') {
                        sc = d.createElement('script'), sa = d.getElementsByTagName('script')[0];
                        sc.src = "https://www.google.com/recaptcha/api.js?onload=signInRecaptcha&render=explicit";
                        sc.async = true;
                        sc.defer = true;
                        sa.parentNode.insertBefore(sc, sa);
                        signInForm.addEventListener('submit', function (e) {
                            return __awaiter(this, void 0, void 0, function () {
                                var submitButton, notify, signInData, result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            e.preventDefault();
                                            submitButton = this.querySelector('button[type="submit"]'), notify = d.getElementById('notifystatus');
                                            submitButton.innerHTML = "<span>Loading ... </span><span class=\"mdi mdi-flattr mdi-spin\"></span>";
                                            submitButton.disabled = true;
                                            return [4 /*yield*/, extractFormData(signInForm)];
                                        case 1:
                                            signInData = _a.sent();
                                            return [4 /*yield*/, asyncRequest('/api/client/client-login', signInData)];
                                        case 2:
                                            result = _a.sent();
                                            if (result.error == 'NOT_FOUND') {
                                                notify.innerText = 'Email provided not registered';
                                                notify.classList.remove('d-none');
                                                submitButton.disabled = false;
                                                submitButton.innerHTML = "<span> Sign in &nbsp; <span class=\"mdi mdi-play-circle\"></span></span>";
                                            }
                                            else if (result.error == 'WRONG_PASS') {
                                                notify.innerText = 'Wrong password';
                                                notify.classList.remove('d-none');
                                                submitButton.disabled = false;
                                                submitButton.innerHTML = "<span> Sign in &nbsp; <span class=\"mdi mdi-play-circle\"></span></span>";
                                            }
                                            else if (result.error == 'captcha_error') {
                                                notify.innerText = 'Verify captcha to continue';
                                                notify.classList.remove('d-none');
                                                submitButton.disabled = false;
                                                submitButton.innerHTML = "<span> Sign in &nbsp; <span class=\"mdi mdi-play-circle\"></span></span>";
                                            }
                                            else {
                                                // @ts-ignore
                                                window.router.navigateTo('/client/dashboard');
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                    }
                    signUpForm = d.forms['signupform'];
                    if (!(typeof signUpForm != 'undefined')) return [3 /*break*/, 2];
                    sc = d.createElement('script'), sa = d.getElementsByTagName('script')[0];
                    sc.src = "https://www.google.com/recaptcha/api.js?onload=signUpRecaptcha&render=explicit";
                    sc.async = true;
                    sc.defer = true;
                    sa.parentNode.insertBefore(sc, sa);
                    return [4 /*yield*/, fetch('/api/client/business-group-categories').then(function (res) { return res.json(); })];
                case 1:
                    businessCategories = _b.sent(), selectOption = document.querySelector('select[name="businessgrouptarget"]');
                    try {
                        for (businessCategories_1 = __values(businessCategories), businessCategories_1_1 = businessCategories_1.next(); !businessCategories_1_1.done; businessCategories_1_1 = businessCategories_1.next()) {
                            field = businessCategories_1_1.value;
                            selectOption.append(new Option(field.businessName, field._id));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (businessCategories_1_1 && !businessCategories_1_1.done && (_a = businessCategories_1["return"])) _a.call(businessCategories_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    // @ts-ignore
                    $('.business-target').selectpicker();
                    signUpForm.addEventListener('submit', function (e) {
                        return __awaiter(this, void 0, void 0, function () {
                            var submitButton, signUpData, signUpResult, notify;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        e.preventDefault();
                                        submitButton = this.querySelector('button[type="submit"]');
                                        submitButton.innerHTML = "<span>Processing &nbsp; <span class=\"mdi mdi-flattr mdi-spin\"></span></span>";
                                        submitButton.disabled = true;
                                        return [4 /*yield*/, extractFormData(this)];
                                    case 1:
                                        signUpData = _a.sent();
                                        return [4 /*yield*/, asyncRequest('/api/client/client-signup', signUpData)];
                                    case 2:
                                        signUpResult = _a.sent(), notify = document.getElementById('notify');
                                        if (signUpResult.error == 'EMAIL_EXISTS') {
                                            notify.innerText = 'Email provided has been taken';
                                            notify.classList.remove('d-none');
                                            submitButton.disabled = false;
                                            submitButton.innerHTML = "<span>Register &nbsp; <span class=\"mdimdi-play-circle\"></span></span>";
                                        }
                                        else if (signUpResult.error == 'captcha_error') {
                                            notify.innerText = 'Verify captcha to proceed';
                                            notify.classList.remove('d-none');
                                            submitButton.disabled = false;
                                            submitButton.innerHTML = "<span>Register &nbsp; <span class=\"mdimdi-play-circle\"></span></span>";
                                        }
                                        else {
                                            notify.innerText = 'Successfull, check your email to verify registration ';
                                            notify.classList.remove('d-none', 'alert-danger');
                                            notify.classList.add('alert-success');
                                            submitButton.disabled = true;
                                            submitButton.classList.remove('btn-info');
                                            submitButton.classList.add('btn-success');
                                            submitButton.innerHTML = "<span>Successfully registered &nbsp;</span>";
                                            // @ts-ignore
                                            setTimeout(function () { window.router.navigateTo('/client/signin'); }, 4000);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS1hdXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jYXB0Y2hhLWF1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBRWpCLENBQUMsVUFBVSxDQUFDO0lBQ1IsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXO1FBQzVCLENBQUMsRUFBRSxDQUFBOztRQUVILE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQzs7Ozs7O29CQUVLLFVBQVUsR0FBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtvQkFDdkQsSUFBSSxPQUFPLFVBQVUsSUFBSSxXQUFXLEVBQUU7d0JBQzlCLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUM5QixFQUFFLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUM1QyxFQUFFLENBQUMsR0FBRyxHQUFHLGdGQUFnRixDQUFBO3dCQUN6RixFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTt3QkFDZixFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTt3QkFDZixFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7d0JBRWxDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBZ0IsQ0FBQzs7Ozs7OzRDQUNuRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7NENBQ2QsWUFBWSxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLEVBQzdFLE1BQU0sR0FBb0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMs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