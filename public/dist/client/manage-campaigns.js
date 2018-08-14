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
(function (f) {
    if (typeof module == 'undefined')
        f();
    else
        throw new Error('Node environment not supported');
})(function () {
    return __awaiter(this, void 0, void 0, function () {
        function campaignManager(campaign) {
            var statusIndicator = '';
            if (campaign['campaignTargetDesktop'] == 'off' && campaign['campaignTargetMobile'] == 'off' && campaign['campaignTargetTablets'] == 'off')
                statusIndicator = "<span class=\"badge badge-danger\">Needs attention</span>";
            else if (campaign['campaignTargetDesktop'] == 'on' && campaign['campaignTargetMobile'] == 'off')
                statusIndicator = "<span class=\"badge badge-info\" title=\"You have targeted desktop devices only\">Moderate</span>";
            else if (campaign['campaignTargetDesktop'] == 'on' && campaign['campaignTargetMobile'] == 'on')
                statusIndicator = "<span class=\"badge badge-success\" title=\"You have targeted desktop and mobile devices. Good to go\">Good</span>";
            glanceCampaignStatus += "<div class=\"targeting-status\">\n            <span>" + campaign['campaignName'] + " </span>\n            <div class=\"status-indicator\">\n                " + statusIndicator + "\n            </div>\n        </div>";
            var checkboxStatus = function (value) {
                return value == 'off' ? '' : 'checked';
            };
            allCampignData += "\n        <div class=\"single-campaign\" data-campaign=\"" + campaign['_id'] + "\">\n            <div>" + campaign['campaignName'] + "</div>\n            <label class=\"switch\">\n                <input name=\"campaignStatus\" type=\"checkbox\" " + checkboxStatus(campaign['campaignStatus']) + ">\n                <span class=\"slider round\"></span>\n            </label>\n            <div>" + new Date(campaign['campaignBeginDate']).toDateString() + "</div>\n            <div>" + new Date(campaign['campaignEndDate']).toDateString() + "</div>\n            <div style=\"margin: 0 auto;\">" + campaign['campaignEstimatedBudget'] + "</div>\n            <small>" + campaign['campaignCategory']['businessName'] + "</small>\n            <div>\n                <a href=\"#t" + campaign['_id'] + "\" data-toggle=\"collapse\">View targeting</a>\n                <div id=\"t" + campaign['_id'] + "\" class=\"collapse\">\n                    <ul>\n                        <li class=\"mb-1\">Desktop devices &nbsp;\n                            <label class=\"switch float-right\">\n                                <input name=\"campaignTargetDesktop\" type=\"checkbox\" " + checkboxStatus(campaign['campaignTargetDesktop']) + ">\n                                <span class=\"slider round\"></span>\n                            </label>\n                        </li>\n                        <li class=\"mb-1\">Smartphones &nbsp;\n                            <label class=\"switch float-right\">\n                                <input name=\"campaignTargetMobile\" type=\"checkbox\" " + checkboxStatus(campaign['campaignTargetMobile']) + ">\n                                <span class=\"slider round\"></span>\n                            </label>\n                        </li>\n                        <li class=\"mb-1\">Tablets &nbsp;\n                            <label class=\"switch float-right\">\n                                <input name=\"campaignTargetTablets\" type=\"checkbox\" " + checkboxStatus(campaign['campaignTargetTablets']) + ">\n                                <span class=\"slider round\"></span>\n                            </label>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>";
        }
        function checkboxChangeListener() {
            return __awaiter(this, void 0, void 0, function () {
                var e_2, _a, checkboxes, checkboxes_1, checkboxes_1_1, checkbox, e_2_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            checkboxes = Array.from(allCampaigns.querySelectorAll('input[type="checkbox"]'));
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 6, 7, 12]);
                            checkboxes_1 = __asyncValues(checkboxes);
                            _b.label = 2;
                        case 2: return [4 /*yield*/, checkboxes_1.next()];
                        case 3:
                            if (!(checkboxes_1_1 = _b.sent(), !checkboxes_1_1.done)) return [3 /*break*/, 5];
                            checkbox = checkboxes_1_1.value;
                            checkbox.addEventListener('change', function (e) {
                                var campaignId = this.closest('div.single-campaign').getAttribute('data-campaign'), selectedName = this.getAttribute('name'), value = this.checked == true ? 'on' : 'off';
                                notifySelectionChange(campaignId, selectedName, value);
                            });
                            _b.label = 4;
                        case 4: return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 12];
                        case 6:
                            e_2_1 = _b.sent();
                            e_2 = { error: e_2_1 };
                            return [3 /*break*/, 12];
                        case 7:
                            _b.trys.push([7, , 10, 11]);
                            if (!(checkboxes_1_1 && !checkboxes_1_1.done && (_a = checkboxes_1["return"]))) return [3 /*break*/, 9];
                            return [4 /*yield*/, _a.call(checkboxes_1)];
                        case 8:
                            _b.sent();
                            _b.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            if (e_2) throw e_2.error;
                            return [7 /*endfinally*/];
                        case 11: return [7 /*endfinally*/];
                        case 12: return [2 /*return*/];
                    }
                });
            });
        }
        function notifySelectionChange(campaignId, field, value) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/updateCampaign', {
                                campaignId: campaignId,
                                field: field,
                                value: value
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        var e_1, _a, campaignData, glanceAnalytics, suggestedImprovements, allCampaigns, glanceCampaignStatus, allCampignData, campaignData_1, campaignData_1_1, campaign, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, asyncRequest(extractCookies(document.cookie, 'API') + '/api/v1/data/getCampaignsWithBsCategories')];
                case 1:
                    campaignData = _b.sent(), glanceAnalytics = document.querySelector('div.targeting-level'), suggestedImprovements = document.querySelector('.suggested-improvements'), allCampaigns = document.querySelector('.all-campaigns-section');
                    glanceCampaignStatus = '', allCampignData = '';
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, 8, 13]);
                    campaignData_1 = __asyncValues(campaignData);
                    _b.label = 3;
                case 3: return [4 /*yield*/, campaignData_1.next()];
                case 4:
                    if (!(campaignData_1_1 = _b.sent(), !campaignData_1_1.done)) return [3 /*break*/, 6];
                    campaign = campaignData_1_1.value;
                    campaignManager(campaign);
                    _b.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _b.trys.push([8, , 11, 12]);
                    if (!(campaignData_1_1 && !campaignData_1_1.done && (_a = campaignData_1["return"]))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(campaignData_1)];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13:
                    glanceAnalytics.innerHTML = glanceCampaignStatus;
                    allCampaigns.innerHTML = allCampignData;
                    checkboxChangeListener();
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWNhbXBhaWducy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvbWFuYWdlLWNhbXBhaWducy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQVUsQ0FBQztJQUNSLElBQUksT0FBTyxNQUFNLElBQUksV0FBVztRQUM1QixDQUFDLEVBQUUsQ0FBQTs7UUFFSCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFDLENBQUM7O1FBWUMsU0FBUyxlQUFlLENBQUMsUUFBYTtZQUNsQyxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUE7WUFDeEIsSUFBSSxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxLQUFLLElBQUksUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksS0FBSyxJQUFJLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEtBQUs7Z0JBQ3JJLGVBQWUsR0FBRywyREFBeUQsQ0FBQTtpQkFDMUUsSUFBSSxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksS0FBSztnQkFDM0YsZUFBZSxHQUFHLG1HQUErRixDQUFBO2lCQUNoSCxJQUFJLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxJQUFJO2dCQUMxRixlQUFlLEdBQUcsb0hBQWdILENBQUE7WUFFdEksb0JBQW9CLElBQUkseURBQ1osUUFBUSxDQUFDLGNBQWMsQ0FBQyxnRkFFMUIsZUFBZSx5Q0FFbEIsQ0FBQTtZQUVQLElBQU0sY0FBYyxHQUFHLFVBQUEsS0FBSztnQkFDeEIsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtZQUMxQyxDQUFDLENBQUE7WUFFRCxjQUFjLElBQUksOERBQzRCLFFBQVEsQ0FBQyxLQUFLLENBQUMsOEJBQ2xELFFBQVEsQ0FBQyxjQUFjLENBQUMsdUhBRW9CLGNBQWMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyx3R0FHdEYsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsaUNBQ3RELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLDJEQUM1QixRQUFRLENBQUMseUJBQXlCLENBQUMsbUNBQ3pELFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpRUFFcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxtRkFDaEIsUUFBUSxDQUFDLEtBQUssQ0FBQyx1UkFJMkMsY0FBYyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLDhXQU1sRCxjQUFjLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUMsMldBTS9DLGNBQWMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQyx3T0FPeEgsQ0FBQTtRQUNYLENBQUM7UUFJRCxTQUFlLHNCQUFzQjs7Ozs7OzRCQUM3QixVQUFVLEdBQTRCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTs7Ozs0QkFDaEYsZUFBQSxjQUFBLFVBQVUsQ0FBQTs7Ozs7NEJBQXRCLFFBQVEsdUJBQUEsQ0FBQTs0QkFDckIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUM7Z0NBQzNDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQzlFLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUN4QyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO2dDQUMvQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFBOzRCQUMxRCxDQUFDLENBQUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRVQ7UUFFRCxTQUFlLHFCQUFxQixDQUFDLFVBQWtCLEVBQUUsS0FBYSxFQUFFLEtBQWE7Ozs7Z0NBQ2pGLHFCQUFNLFlBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyw2QkFBNkIsRUFBRTtnQ0FDdkYsVUFBVSxFQUFFLFVBQVU7Z0NBQ3RCLEtBQUssRUFBRSxLQUFLO2dDQUNaLEtBQUssRUFBRSxLQUFLOzZCQUNmLENBQUMsRUFBQTs7NEJBSkYsU0FJRSxDQUFBOzs7OztTQUNMOzs7O3dCQTFGa0IscUJBQU0sWUFBWSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLDJDQUEyQyxDQUFDLEVBQUE7O29CQUF2SCxZQUFZLEdBQUcsU0FBd0csRUFDdkgsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFDL0QscUJBQXFCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxFQUN6RSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDL0Qsb0JBQW9CLEdBQVcsRUFBRSxFQUNqQyxjQUFjLEdBQVcsRUFBRSxDQUFBOzs7O29CQUVGLGlCQUFBLGNBQUEsWUFBWSxDQUFBOzs7OztvQkFBeEIsUUFBUSx5QkFBQSxDQUFBO29CQUNyQixlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkE2RDdCLGVBQWUsQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUE7b0JBQ2hELFlBQVksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFBO29CQUN2QyxzQkFBc0IsRUFBRSxDQUFBOzs7OztDQXNCM0IsQ0FBQyxDQUFBIn0=