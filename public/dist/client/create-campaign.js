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
                        adCCategorySelect.append(new Option(field.campaignName, field._id));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jcmVhdGUtY2FtcGFpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsaUJBeVJFO0FBNVJGOztHQUVHO0FBQ0g7SUFDSSx5QkFBeUI7QUFDN0IsQ0FBQztBQUVELDZCQUE2QjtBQUM3QixzRkFBc0Y7QUFDdEY7Ozs7Ozs7RUFPRTtBQUVGLENBQUMsVUFBQyxDQUFDO0lBQ0MsSUFBSSxPQUFPLE1BQU0sSUFBSSxXQUFXLEVBQUU7UUFDOUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtLQUN0Qjs7UUFFRyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFDLENBQUMsVUFBTyxRQUFrQixFQUFFLE1BQWM7Ozs7O2dCQUVwQyxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFDcEMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7Z0JBQzNELENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO2dCQUNkLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO2dCQUNkLENBQUMsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUE7Z0JBQzFCLENBQUMsQ0FBQyxHQUFHLEdBQUcsNEdBQTRHLENBQUE7O29CQUNwSCxLQUFnQixNQUFBLFNBQUEsQ0FBQyxDQUFBLHVEQUFFO3dCQUFSLENBQUM7d0JBQ1IsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHOzRCQUNmLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtxQkFDdEM7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