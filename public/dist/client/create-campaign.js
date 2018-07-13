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
var _this = this;
/**
 * google maps initializer
 */
function initMap() {
    // initialize google maps
}
// places search autocomplete
// src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"
/*
function init() {
                var input = document.getElementById('locationTextField');
                var autocomplete = new google.maps.places.Autocomplete(input);
            }

            google.maps.event.addDomListener(window, 'load', init);
*/
(function (f) {
    if (typeof module == 'undefined') {
        f(document, window);
    }
    else
        throw new Error('Cannot run in Node environment');
})(function (document, window) { return __awaiter(_this, void 0, void 0, function () {
    var e_1, _a, tabs, campaignDataForm, createAdForm, adDataToPublish, finalStep_1, upLoadedImage, previewImages_1, advertiserCampaigns, adCCategorySelect, adSelectedType, adDestinationUrl, adDescription, descriptionpreview_1, advertiserCampaigns_1, advertiserCampaigns_1_1, field;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
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
                tabs = Array.from(document.querySelectorAll('.campaign-tab'));
                tabs.forEach(function (tab) {
                    tab.addEventListener('click', function () {
                        var refTab = document.getElementById(this.getAttribute('ref-tab')), allChild = Array.from(document.querySelectorAll('.camp-child'));
                        tabs.forEach(function (div) {
                            div.classList.remove('campaign-tab-active');
                        });
                        // retrieve campaigns
                        // if (this.getAttribute('ref-tab') == 'create-ad') 
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
                                            // @ts-ignore
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
                campaignDataForm = document.forms['campaignDataForm'];
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
                                    return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/save-campaign', data)];
                                case 2:
                                    saveResult = _a.sent(), createAdTab = document.querySelector('div[ref-tab="create-ad"]');
                                    // check saveResult and give appropriate messages
                                    console.log(saveResult);
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                });
                createAdForm = document.forms['createAdDataForm'], adDataToPublish = new FormData();
                if (!(createAdForm != undefined)) return [3 /*break*/, 2];
                finalStep_1 = document.querySelector('div[ref-tab="finalize"]'), upLoadedImage = createAdForm.querySelector('input[name="adDisplayImage"]'), previewImages_1 = Array.from(document.querySelectorAll('.ad-image-preview'));
                return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/get-campaigns')];
            case 1:
                advertiserCampaigns = _b.sent(), adCCategorySelect = createAdForm.querySelector('select[name="adCampaignCategory"]'), adSelectedType = createAdForm.querySelector('select[name="adSelectedType"]'), adDestinationUrl = createAdForm.querySelector('input[name="adDestinationUrl"]'), adDescription = createAdForm.querySelector('textarea[name="adDescription"]'), descriptionpreview_1 = Array.from(document.querySelectorAll('.description-preview '));
                try {
                    for (advertiserCampaigns_1 = __values(advertiserCampaigns), advertiserCampaigns_1_1 = advertiserCampaigns_1.next(); !advertiserCampaigns_1_1.done; advertiserCampaigns_1_1 = advertiserCampaigns_1.next()) {
                        field = advertiserCampaigns_1_1.value;
                        // @ts-ignore
                        adCCategorySelect.append(new Option(field.campaignName, field._id));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (advertiserCampaigns_1_1 && !advertiserCampaigns_1_1.done && (_a = advertiserCampaigns_1["return"])) _a.call(advertiserCampaigns_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // @ts-ignore
                $('.custom-campaign-group').selectpicker();
                adDestinationUrl.addEventListener('blur', function (e) {
                    return __awaiter(this, void 0, void 0, function () {
                        var urlValidated, urlValidationMessage;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/validate-url', { adDestinationUrl: this.value })];
                                case 1:
                                    urlValidated = _a.sent(), urlValidationMessage = document.getElementById('urlValidationMessage');
                                    urlValidated.status != true ?
                                        urlValidationMessage.innerHTML = '<span class="text-danger"> &nbsp;&nbsp; url could not be verified</span>' :
                                        urlValidationMessage.innerHTML = '<span class="text-info">&nbsp;&nbsp;url has been verified</span>';
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                adSelectedType.addEventListener('change', function (e) {
                    switch (this.value) {
                        case 'text':
                        case 'link':
                            document.getElementById('adDisplayHolder').classList.add('d-none');
                            break;
                        default:
                            document.getElementById('adDisplayHolder').classList.remove('d-none');
                            break;
                    }
                });
                // @ts-ignore
                upLoadedImage.addEventListener('change', function (e) {
                    return __awaiter(this, void 0, void 0, function () {
                        var input, inputName, inputType, inputSize, fileReader;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    input = e.srcElement['files'][0], inputName = input.name, inputType = input.type, inputSize = input.size;
                                    if (!(inputType == 'image/jpeg' || inputType == 'image/png')) return [3 /*break*/, 2];
                                    if (Number(inputSize) / (1024 * 1024) > 1.2) {
                                        document.getElementById('labelUpload').innerHTML = "<span class=\"text-info\">Maximum allowed size is 1 mb</span>";
                                        return [2 /*return*/, false];
                                    }
                                    fileReader = new FileReader();
                                    return [4 /*yield*/, fileReader.readAsDataURL(input)];
                                case 1:
                                    _a.sent();
                                    fileReader.onloadend = function (e) {
                                        document.getElementById('labelUpload').innerHTML = "<span>" + inputName + "</span>";
                                        previewImages_1.forEach(function (img) {
                                            // @ts-ignore
                                            img.setAttribute('src', e.target.result);
                                        });
                                    };
                                    return [3 /*break*/, 3];
                                case 2:
                                    // display file format not supported error message, and clear input[type="file"]                
                                    document.getElementById('labelUpload').innerHTML = "<span class=\"text-danger\">Input of type " + inputType + " not supported</span>";
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                });
                adDescription.addEventListener('keyup', function () {
                    var _this = this;
                    var placeholderLength = document.getElementById('placeholderLength');
                    descriptionpreview_1.forEach(function (preview) {
                        preview.innerHTML = _this.value.trim();
                    });
                    if (this.value.trim().length <= 120) {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                        placeholderLength.innerHTML = "<span>You have " + (120 - this.value.trim().length) + " characters remaining.</span>";
                    }
                    else {
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                        placeholderLength.innerHTML = "<span>You have 0 characters remaining.</span>";
                    }
                });
                // submit and publish ad
                document.getElementById('goToFinalStep').addEventListener('click', function (event) {
                    return __awaiter(this, void 0, void 0, function () {
                        var data, validated, key, key;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    event.preventDefault();
                                    return [4 /*yield*/, extractFormData(createAdForm)];
                                case 1:
                                    data = _a.sent(), validated = false;
                                    Object.keys(data).every(function (key) {
                                        if (key.trim() != 'adDisplayImage' && key.trim() != 'adDescription'
                                            && key.trim() != 'adCampaignCategory' && data[key].trim().length < 2) {
                                            createAdForm.querySelector("[name=\"" + key + "\"]").classList.add('is-invalid');
                                            validated = false;
                                        }
                                        else {
                                            createAdForm.querySelector("[name=\"" + key + "\"]").classList.remove('is-invalid');
                                            validated = true;
                                        }
                                        if (key.trim() == 'adCampaignCategory' && data[key].length < 3) {
                                            validated = false;
                                        }
                                        else {
                                            validated = true;
                                        }
                                        if (key.trim() == 'adDescription' && data[key].trim().length < 80) {
                                            createAdForm.querySelector("textarea[name=\"" + key + "\"]").classList.add('is-invalid');
                                            validated = false;
                                        }
                                        else {
                                            validated = true;
                                        }
                                        return true;
                                    });
                                    if (validated != false) {
                                        // clear formdata object to circumvent repeatition
                                        for (key in data) {
                                            if (key.trim().length > 1)
                                                adDataToPublish["delete"](key);
                                        }
                                        // add to formdata 
                                        for (key in data) {
                                            if (key.trim().length > 1)
                                                adDataToPublish.append(key, data[key]);
                                        }
                                        finalStep_1.click();
                                    }
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
                                case 0: return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/save-campaignad', adDataToPublish, true)];
                                case 1:
                                    pubResult = _a.sent();
                                    console.log(pubResult);
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                _b.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jcmVhdGUtY2FtcGFpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsaUJBc1BFO0FBelBGOztHQUVHO0FBQ0g7SUFDSSx5QkFBeUI7QUFDN0IsQ0FBQztBQUVELDZCQUE2QjtBQUM3QixzRkFBc0Y7QUFDdEY7Ozs7Ozs7RUFPRTtBQUVGLENBQUMsVUFBQyxDQUFDO0lBQ0MsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDOUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtLQUN0Qjs7UUFFRyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFDLENBQUMsVUFBTyxRQUFrQixFQUFFLE1BQWM7Ozs7O2dCQUN4QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO29CQUNoQyxJQUFJLEdBQUcsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO29CQUVwRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTs0QkFDckIsWUFBWSxFQUFFLG9DQUFvQzs0QkFDbEQsU0FBUyxFQUFFLFdBQVc7eUJBQ3pCLENBQUMsQ0FBQTtxQkFDTDs7d0JBQ0csTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFOzRCQUNyQixZQUFZLEVBQUUsb0NBQW9DOzRCQUNsRCxTQUFTLEVBQUUsVUFBVTt5QkFDeEIsQ0FBQyxDQUFBO2dCQUNWLENBQUMsQ0FBQyxDQUFBO2dCQUVFLElBQUksR0FBRyxLQUFLLENB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