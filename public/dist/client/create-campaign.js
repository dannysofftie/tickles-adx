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
/**
 * google maps initializer
 */
function initMap() {
    // initialize google maps
}
function currentAdvertiserCampaigns() {
    return __awaiter(this, void 0, void 0, function () {
        var campaigns, htmlSelect, field;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, asyncRequest('/api/client/retrieve-campaigns')];
                case 1:
                    campaigns = _a.sent(), htmlSelect = document.querySelector('select[name=""]');
                    for (field in campaigns) {
                        // @ts-ignore
                        htmlSelect.append(new Option(field.campaignName, field.campaingValue));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
(function (f) {
    if (typeof module == 'undefined') {
        f(document, window);
    }
    else
        throw new Error('Cannot run in Node environment');
})(function (document, window) {
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
    var tabs = Array.from(document.querySelectorAll('.campaign-tab'));
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var refTab = document.getElementById(this.getAttribute('ref-tab')), allChild = Array.from(document.querySelectorAll('.camp-child'));
            tabs.forEach(function (div) {
                div.classList.remove('campaign-tab-active');
            });
            // retrieve campaigns
            if (this.getAttribute('ref-tab') == 'create-ad')
                currentAdvertiserCampaigns();
            allChild.forEach(function (d) {
                d.classList.add('hidden');
            });
            this.classList.add('campaign-tab-active');
            refTab.classList.remove('hidden');
        });
    });
    // calendar for campaign date ranges
    // @ts-ignore
    $('.calendar').datepicker({
        setDate: new Date(),
        todayHighlight: true,
        daysOfWeekHighlighted: "0",
        autoclose: true,
        startDate: '-0d'
    });
    // @ts-ignore
    $('.custom-select-search').selectpicker();
    // request campaign business group categories
    (function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, catSelect, groups, groups_1, groups_1_1, field, e_1_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        catSelect = document.querySelector('select[name="campaignCategory"]');
                        return [4 /*yield*/, asyncRequest('/api/client/business-group-categories')];
                    case 1:
                        groups = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 13]);
                        groups_1 = __asyncValues(groups);
                        _b.label = 3;
                    case 3: return [4 /*yield*/, groups_1.next()];
                    case 4:
                        if (!(groups_1_1 = _b.sent(), !groups_1_1.done)) return [3 /*break*/, 6];
                        field = groups_1_1.value;
                        catSelect.append(new Option(field.businessGroup, field.groupValue));
                        _b.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(groups_1_1 && !groups_1_1.done && (_a = groups_1["return"]))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(groups_1)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        // @ts-ignore
                        $('.selectpicker-category').selectpicker();
                        return [2 /*return*/];
                }
            });
        });
    })();
    // save campaign data and validate
    var campaignDataForm = document.forms['campaignDataForm'];
    campaignDataForm.addEventListener('submit', function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var data, validated, saveResult, createAdTab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        return [4 /*yield*/, extractFormData(campaignDataForm)];
                    case 1:
                        data = _a.sent(), validated = false;
                        // validate input fields of type text
                        Object.keys(data).forEach(function (inputName) {
                            var refInput = campaignDataForm.querySelector("input[name=\"" + inputName + "\"]");
                            if (refInput != null && refInput.getAttribute('type') == 'text' && data[inputName].length < 4) {
                                refInput.classList.add('is-invalid');
                                validated = false;
                            }
                            else if (refInput != null && refInput.getAttribute('type') == 'number' && Number(data[inputName]) < 0.5) {
                                refInput.classList.add('is-invalid');
                                validated = false;
                            }
                            else {
                                if (refInput != null) {
                                    refInput.classList.remove('is-invalid');
                                    validated = true;
                                }
                            }
                        });
                        if (!(validated != false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, asyncRequest('/api/client/save-campaign', data)];
                    case 2:
                        saveResult = _a.sent(), createAdTab = document.querySelector('div[ref-tab="create-ad"]');
                        createAdTab.click();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jcmVhdGUtY2FtcGFpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSDtJQUNJLHlCQUF5QjtBQUM3QixDQUFDO0FBRUQ7Ozs7O3dCQUNtQyxxQkFBTSxZQUFZLENBQUMsZ0NBQWdDLENBQUMsRUFBQTs7b0JBQS9FLFNBQVMsR0FBa0IsU0FBb0QsRUFDL0UsVUFBVSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO29CQUM3RSxLQUFTLEtBQUssSUFBSSxTQUFTLEVBQUU7d0JBQ3pCLGFBQWE7d0JBQ2IsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO3FCQUN6RTs7Ozs7Q0FDSjtBQUNELENBQUMsVUFBQyxDQUFDO0lBQ0MsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDOUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtLQUN0Qjs7UUFFRyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFDLENBQUMsVUFBQyxRQUFrQixFQUFFLE1BQWM7SUFDbEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtRQUNoQyxJQUFJLEdBQUcsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBRXBFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRTtZQUNqRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLFlBQVksRUFB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