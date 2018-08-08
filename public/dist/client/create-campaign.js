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
function initializeMap() {
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
    var e_1, _a, e_2, _b, g, s, s_1, s_1_1, l, tabs, campaignDataForm, createAdForm, adDataToPublish, finalStep_1, upLoadedImage, previewImages_1, advertiserCampaigns, adCCategorySelect, adSelectedType, adDestinationUrl, adDescription, descriptionpreview_1, advertiserCampaigns_1, advertiserCampaigns_1_1, field;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                g = document.createElement('script'), s = Array.from(document.getElementsByTagName('script'));
                g.async = true;
                g.defer = true;
                g.type = 'text/javascript';
                g.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBs-9K2aygiKd_2bXjhgnltqE-LW8FgRLc&callback=initializeMap';
                try {
                    for (s_1 = __values(s), s_1_1 = s_1.next(); !s_1_1.done; s_1_1 = s_1.next()) {
                        l = s_1_1.value;
                        if (l.src !== g.src)
                            l.parentNode.insertBefore(g, l);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (s_1_1 && !s_1_1.done && (_a = s_1["return"])) _a.call(s_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // s.forEach(sc => sc.src == g.src ? console.log(sc.src) : sc.parentNode.insertBefore(g, sc))
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
                        var e_3, _a, selectOption, businessCategories, businessCategories_1, businessCategories_1_1, field;
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
                                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                    finally {
                                        try {
                                            if (businessCategories_1_1 && !businessCategories_1_1.done && (_a = businessCategories_1["return"])) _a.call(businessCategories_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
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
                        var _this = this;
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
                                    if (saveResult.message == 'INVALID') {
                                        // @ts-ignore
                                        this.querySelector('button[type="submit"]').disabled = false;
                                        this.querySelector('button[type="submit"]').innerHTML = "<span>Failed &nbsp; <i class=\"mdi mdi-block-helper\"></i></span>";
                                        setTimeout(function () {
                                            _this.querySelector('button[type="submit"]').innerHTML = "<span>Save campaign ad &nbsp; <i class=\"mdi mdi-chevron-double-right\"></i></span>";
                                        }, 3000);
                                        return [2 /*return*/];
                                    }
                                    this.querySelector('button[type="submit"]').innerHTML = "<span>Successfull &nbsp; <i class=\"mdi mdi-check-circle\"></i></span>";
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
                advertiserCampaigns = _c.sent(), adCCategorySelect = createAdForm.querySelector('select[name="adCampaignCategory"]'), adSelectedType = createAdForm.querySelector('select[name="adSelectedType"]'), adDestinationUrl = createAdForm.querySelector('input[name="adDestinationUrl"]'), adDescription = createAdForm.querySelector('textarea[name="adDescription"]'), descriptionpreview_1 = Array.from(document.querySelectorAll('.description-preview '));
                try {
                    for (advertiserCampaigns_1 = __values(advertiserCampaigns), advertiserCampaigns_1_1 = advertiserCampaigns_1.next(); !advertiserCampaigns_1_1.done; advertiserCampaigns_1_1 = advertiserCampaigns_1.next()) {
                        field = advertiserCampaigns_1_1.value;
                        // @ts-ignore
                        adCCategorySelect.append(new Option(field['campaignName'], field._id));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (advertiserCampaigns_1_1 && !advertiserCampaigns_1_1.done && (_b = advertiserCampaigns_1["return"])) _b.call(advertiserCampaigns_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                // @ts-ignore
                $('.custom-campaign-group').selectpicker();
                adDestinationUrl.addEventListener('blur', function (e) {
                    return __awaiter(this, void 0, void 0, function () {
                        var urlValidated, urlValidationMessage;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    document.getElementById('urlValidationMessage').innerHTML = '<span class="text-info">Verifying url ...<span class="mdi mdi-loading mdi-spin"></span></span>';
                                    return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/validate-url', { url: this.value })];
                                case 1:
                                    urlValidated = _a.sent(), urlValidationMessage = document.getElementById('urlValidationMessage');
                                    urlValidated.status != true ?
                                        urlValidationMessage.innerHTML = '<span class="text-danger">Url verification failed. Ensure url does not contain http:// or https://</span>' :
                                        urlValidationMessage.innerHTML = '<span class="text-info">Url has been approved</span>';
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
                                        // clear formdata object to circumvent repetition
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
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    // @ts-ignore
                                    this.disabled = true;
                                    this.innerHTML = "<span>Publishing ... <i class=\"mdi mdi-loading mdi-spin\"></i></span>";
                                    return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/save-campaignad', adDataToPublish, true)
                                        // give message
                                    ];
                                case 1:
                                    pubResult = _a.sent();
                                    // give message
                                    if (pubResult.message == 'INVALID') {
                                        // @ts-ignore
                                        this.disabled = false;
                                        this.innerHTML = "<span>Failed &nbsp; <i class=\"mdi mdi-block-helper\"></i></span>";
                                        setTimeout(function () {
                                            _this.innerHTML = "<span>Publish ad &nbsp; <i class=\"mdi mdi-chevron-double-right\"></i></span>";
                                        }, 3000);
                                        return [2 /*return*/];
                                    }
                                    this.innerHTML = "<span>Successfull &nbsp; <i class=\"mdi mdi-check-circle\"></i></span>";
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                _c.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jcmVhdGUtY2FtcGFpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsaUJBeVJFO0FBNVJGOztHQUVHO0FBQ0gsU0FBUyxhQUFhO0lBQ2xCLHlCQUF5QjtBQUM3QixDQUFDO0FBRUQsNkJBQTZCO0FBQzdCLHNGQUFzRjtBQUN0Rjs7Ozs7OztFQU9FO0FBRUYsQ0FBQyxVQUFDLENBQUM7SUFDQyxJQUFJLE9BQU8sTUFBTSxJQUFJLFdBQVcsRUFBRTtRQUM5QixDQUFDLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0tBQ3RCOztRQUVHLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQyxVQUFPLFFBQWtCLEVBQUUsTUFBYzs7Ozs7Z0JBRXBDLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUNwQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtnQkFDM0QsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7Z0JBQ2QsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7Z0JBQ2QsQ0FBQyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQTtnQkFDMUIsQ0FBQyxDQUFDLEdBQUcsR0FBRyw0R0FBNEcsQ0FBQTs7b0JBQ3BILEtBQWdCLE1BQUEsU0FBQSxDQUFDLENBQUEsdURBQUU7d0JBQVIsQ0FBQzt3QkFDUixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUc7NEJBQ2YsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxD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