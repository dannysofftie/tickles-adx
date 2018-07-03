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
        var e_1, _a, catSelect, groups, groups_1, groups_1_1, field, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    catSelect = document.querySelector('select[name="adCampaignCategory"]');
                    return [4 /*yield*/, asyncRequest('/api/client/retrieve-campaigns')];
                case 1:
                    groups = _b.sent();
                    if (!(catSelect != null)) return [3 /*break*/, 13];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, 8, 13]);
                    groups_1 = __asyncValues(groups);
                    _b.label = 3;
                case 3: return [4 /*yield*/, groups_1.next()];
                case 4:
                    if (!(groups_1_1 = _b.sent(), !groups_1_1.done)) return [3 /*break*/, 6];
                    field = groups_1_1.value;
                    catSelect.append(new Option(field.campaignName, field.campaignValue));
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
                    $('.custom-campaign-group').selectpicker();
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
            var e_2, _a, catSelect, groups, groups_2, groups_2_1, field, e_2_1;
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
                        groups_2 = __asyncValues(groups);
                        _b.label = 3;
                    case 3: return [4 /*yield*/, groups_2.next()];
                    case 4:
                        if (!(groups_2_1 = _b.sent(), !groups_2_1.done)) return [3 /*break*/, 6];
                        field = groups_2_1.value;
                        catSelect.append(new Option(field.businessGroup, field.groupValue));
                        _b.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(groups_2_1 && !groups_2_1.done && (_a = groups_2["return"]))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(groups_2)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
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
                            var refInput = campaignDataForm.querySelector("input[name=\"" + inputName + "\"]"), refSelect = campaignDataForm.querySelector("select[name=\"campaignTargetLocations\"]");
                            if (refInput != null) {
                                if (refInput.getAttribute('type') == 'text' && data[inputName].length < 4) {
                                    refInput.classList.add('is-invalid');
                                    validated = false;
                                }
                                else if (refInput.getAttribute('type') == 'number' && Number(data[inputName]) < 0.5) {
                                    refInput.classList.add('is-invalid');
                                    validated = false;
                                }
                                else {
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
    // save ad and validate input fields
    var createAdForm = document.forms['createAdDataForm'], adDataToPublish = new FormData();
    if (createAdForm != undefined) {
        var finalStep_1 = document.querySelector('div[ref-tab="finalize"]'), upLoadedImage = createAdForm.querySelector('input[name="adDisplayImage"]'), previewImages_1 = Array.from(document.querySelectorAll('.ad-image-preview'));
        upLoadedImage.addEventListener('change', function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var image, imageName, imageType, imageSize, fileReader;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            image = e.srcElement['files'][0], imageName = image.name, imageType = image.type, imageSize = image.size;
                            if (!(imageType == 'image/jpeg' || imageType == 'image/png')) return [3 /*break*/, 2];
                            fileReader = new FileReader();
                            return [4 /*yield*/, fileReader.readAsDataURL(image)];
                        case 1:
                            _a.sent();
                            fileReader.onloadend = function (e) {
                                document.getElementById('labelUpload').innerHTML = "<span>" + imageName + "</span>";
                                previewImages_1.forEach(function (img) {
                                    img.setAttribute('src', e.target.result);
                                });
                            };
                            return [3 /*break*/, 2];
                        case 2: return [2 /*return*/];
                    }
                });
            });
        });
        // submit and publish ad
        document.getElementById('goToFinalStep').addEventListener('click', function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var adData, key;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            event.preventDefault();
                            return [4 /*yield*/, extractFormData(createAdForm)];
                        case 1:
                            adData = _a.sent();
                            for (key in adData) {
                                if (key.trim().length > 1)
                                    adDataToPublish.append(key, adData[key]);
                            }
                            finalStep_1.click();
                            return [2 /*return*/];
                    }
                });
            });
        });
        document.getElementById('publishAd').addEventListener('click', function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var pubResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, asyncRequest('/api/client/publish-ad', adDataToPublish)];
                        case 1:
                            pubResult = _a.sent();
                            console.log(pubResult);
                            return [2 /*return*/];
                    }
                });
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jcmVhdGUtY2FtcGFpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSDtJQUNJLHlCQUF5QjtBQUM3QixDQUFDO0FBRUQ7Ozs7OztvQkFDUSxTQUFTLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUNBQW1DLENBQUM7b0JBQ2pGLHFCQUFNLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFBOztvQkFBN0QsTUFBTSxHQUFHLFNBQW9EO3lCQUM3RCxDQUFBLFNBQVMsSUFBSSxJQUFJLENBQUEsRUFBakIseUJBQWlCOzs7O29CQUNTLFdBQUEsY0FBQSxNQUFNLENBQUE7Ozs7O29CQUFmLEtBQUssbUJBQUEsQ0FBQTtvQkFDbEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRTdFLGFBQWE7b0JBQ2IsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsWUFBWSxFQUFFLENBQUE7Ozs7O0NBQzdDO0FBQ0QsQ0FBQyxVQUFDLENBQUM7SUFDQyxJQUFJLE9BQU8sTUFBTSxJQUFJLFdBQVcsRUFBRTtRQUM5QixDQUFDLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0tBQ3RCOztRQUVHLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQyxVQUFDLFFBQWtCLEVBQUUsTUFBYztJQUNsQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1FBQ2hDLElBQUksR0FBRyxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUE7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