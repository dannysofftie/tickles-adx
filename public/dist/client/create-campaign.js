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
            var e_2, _a, selectOption, businessCategories, businessCategories_1, businessCategories_1_1, field;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        selectOption = document.querySelector('select[name="campaignCategory"]');
                        return [4 /*yield*/, fetch(extractCookies(document.cookie, 'API') + '/api/v1/data/business-categories').then(function (res) { return res.json(); })];
                    case 1:
                        businessCategories = _b.sent();
                        try {
                            for (businessCategories_1 = __values(businessCategories), businessCategories_1_1 = businessCategories_1.next(); !businessCategories_1_1.done; businessCategories_1_1 = businessCategories_1.next()) {
                                field = businessCategories_1_1.value;
                                selectOption.append(new Option(field.businessName, field._id));
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (businessCategories_1_1 && !businessCategories_1_1.done && (_a = businessCategories_1["return"])) _a.call(businessCategories_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jcmVhdGUtY2FtcGFpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0g7SUFDSSx5QkFBeUI7QUFDN0IsQ0FBQztBQUVEOzs7Ozs7b0JBQ1EsU0FBUyxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDO29CQUNqRixxQkFBTSxZQUFZLENBQUMsZ0NBQWdDLENBQUMsRUFBQTs7b0JBQTdELE1BQU0sR0FBRyxTQUFvRDt5QkFDN0QsQ0FBQSxTQUFTLElBQUksSUFBSSxDQUFBLEVBQWpCLHlCQUFpQjs7OztvQkFDUyxXQUFBLGNBQUEsTUFBTSxDQUFBOzs7OztvQkFBZixLQUFLLG1CQUFBLENBQUE7b0JBQ2xCLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUU3RSxhQUFhO29CQUNiLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBOzs7OztDQUM3QztBQUNELENBQUMsVUFBQyxDQUFDO0lBQ0MsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDOUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtLQUN0Qjs7UUFFRyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFDLENBQUMsVUFBQyxRQUFrQixFQUFFLE1BQWM7SUFDbEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtRQUNoQyxJQUFJLEdBQUcsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBRXBFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRTtZQUNqRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLFlBQVksRUFBRSxvQ0FBb0M7Z0JBQ2xELFNBQVMsRUFBRSxXQUFXO2FBQ3pCLENBQUMsQ0FBQTtTQUNMOztZQUNHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDckIsWUFBWSxFQUFFLG9DQUFvQztnQkFDbEQsU0FBUyxFQUFFLFVBQVU7YUFDeEIsQ0FBQyxDQUFBO0lBQ1YsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1FBQ2IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFDOUQsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7WUFFbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQ1osR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQTtZQUMvQyxDQUFDLENBQUMsQ0FBQTtZQUVGLHFCQUFxQjtZQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksV0FBVztnQkFBRSwwQkFBMEIsRUFBRSxDQUFBO1lBRTdFLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNkLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzdCLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtZQUN6QyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBRUYsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTtRQUNuQixjQUFjLEVBQUUsSUFBSTtRQUNwQixxQkFBcUIsRUFBRSxHQUFHO1FBQzFCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsU0FBUyxFQUFFLEtBQUs7S0FDbkIsQ0FBQyxDQUFBO0lBQ0YsYUFBYTtJQUNiLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLDZDQUE2QztJQUM3QyxDQUFDOzs7Ozs7d0JBQ08sWUFBWSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGlDQUFpQyxDQUFDO3dCQUN0RSxxQkFBTSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsa0NBQWtDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLEVBQUE7O3dCQUFySSxrQkFBa0IsR0FBRyxTQUFnSDs7NEJBRXpJLEtBQW9CLHVCQUFBLFNBQUEsa0JBQWtCLENBQUEsNElBQUU7Z0NBQTdCLEtBQUs7Z0NBQ1osWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOzZCQUNqRTs7Ozs7Ozs7O3dCQUNELGFBQWE7d0JBQ2IsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsWUFBWSxFQUFFLENBQUE7Ozs7O0tBQzdDLENBQUMsRUFBRSxDQUFBO0lBRUosa0NBQWtDO0lBQ2xDLElBQUksZ0JBQWdCLEdBQW9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUMxRSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBZ0IsQ0FBQzs7Ozs7O3dCQUN6RCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7d0JBQ1AscUJBQU0sZUFBZSxDQUFDLGdCQUFnQixDQUFDLEVBQUE7O3dCQUE5QyxJQUFJLEdBQUcsU0FBdUMsRUFDOUMsU0FBUyxHQUFZLEtBQUs7d0JBQzlCLHFDQUFxQzt3QkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTOzRCQUMvQixJQUFJLFFBQVEsR0FBcUIsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGtCQUFlLFNBQVMsUUFBSSxDQUFDLEVBQ3pGLFNBQVMsR0FBc0IsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLDBDQUF3QyxDQUFDLENBQUE7NEJBQzNHLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtnQ0FDbEIsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQ0FDdkUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7b0NBQ3BDLFNBQVMsR0FBRyxLQUFLLENBQUE7aUNBQ3BCO3FDQUFNLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtvQ0FDbkYsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7b0NBQ3BDLFNBQVMsR0FBRyxLQUFLLENBQUE7aUNBQ3BCO3FDQUFNO29DQUNILFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO29DQUN2QyxTQUFTLEdBQUcsSUFBSSxDQUFBO2lDQUNuQjs2QkFDSjt3QkFDTCxDQUFDLENBQUMsQ0FBQTs2QkFFRSxDQUFBLFNBQVMsSUFBSSxLQUFLLENBQUEsRUFBbEIsd0JBQWtCO3dCQUNELHFCQUFNLFlBQVksQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsRUFBQTs7d0JBQWxFLFVBQVUsR0FBRyxTQUFxRCxFQUNsRSxXQUFXLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7d0JBQ3BGLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTs7Ozs7O0tBRTFCLENBQUMsQ0FBQTtJQUVGLG9DQUFvQztJQUNwQyxJQUFJLFlBQVksR0FBb0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUNsRSxlQUFlLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQTtJQUM5QyxJQUFJLFlBQVksSUFBSSxTQUFTLEVBQUU7UUFDM0IsSUFBSSxXQUFTLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsRUFDN0UsYUFBYSxHQUFxQixZQUFZLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFDLEVBQzVGLGVBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7UUFDOUUsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFnQixDQUFDOzs7Ozs7NEJBQ2xELEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNoQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksRUFDdEIsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQ3RCLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFBO2lDQUV0QixDQUFBLFNBQVMsSUFBSSxZQUFZLElBQUksU0FBUyxJQUFJLFdBQVcsQ0FBQSxFQUFyRCx3QkFBcUQ7NEJBQ2pELFVBQVUsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFBOzRCQUM3QyxxQkFBTSxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFBOzs0QkFBckMsU0FBcUMsQ0FBQTs0QkFDckMsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7Z0NBQzlCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxHQUFHLFdBQVMsU0FBUyxZQUFTLENBQUE7Z0NBQzlFLGVBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO29DQUNyQixHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dDQUM1QyxDQUFDLENBQUMsQ0FBQTs0QkFDTixDQUFDLENBQUE7Ozs7OztTQUlSLENBQUMsQ0FBQTtRQUVGLHdCQUF3QjtRQUN4QixRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFnQixLQUFLOzs7Ozs7NEJBQ3BGLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTs0QkFDVCxxQkFBTSxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUE7OzRCQUE1QyxNQUFNLEdBQUcsU0FBbUM7NEJBQ2hELEtBQVcsR0FBRyxJQUFJLE1BQU0sRUFBRTtnQ0FDdEIsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUM7b0NBQ3JCLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOzZCQUMvQzs0QkFDRCxXQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7Ozs7O1NBQ3BCLENBQUMsQ0FBQTtRQUVGLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQWdCLENBQUM7Ozs7O2dDQUM1RCxxQkFBTSxZQUFZLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxDQUFDLEVBQUE7OzRCQUF6RSxTQUFTLEdBQUcsU0FBNkQ7NEJBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7Ozs7O1NBQ3pCLENBQUMsQ0FBQTtLQUNMO0FBQ0wsQ0FBQyxDQUFDLENBQUEifQ==