webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outerContainer{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n@media screen and (min-width: 800px){\r\n  .chatContainer{\r\n    position: relative;\r\n    top:20px;\r\n    max-width: 60%;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    height: calc(100% - 35px);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 800px){\r\n  .chatContainer{\r\n    position: relative;\r\n    top:0;\r\n    width:100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.chatContainer{\r\n  padding: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.chatToolBarControlsWrapper{\r\n  margin-left: auto;\r\n}\r\n\r\n.chatToolBarTitleWrapper_subtitle{\r\n  line-height: 0;\r\n  font-size: 11px;\r\n}\r\n\r\n.chatMessagesContainer{\r\n  -webkit-box-flex:1;\r\n      -ms-flex-positive:1;\r\n          flex-grow:1;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.chatControlsContainer{\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n.chatControlsContainer app-chat-controls{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.chatToolBarControlsWrapper :link {\r\n  color:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"outerContainer\">\n  <md-card class=\"chatContainer\">\n    <md-toolbar color=\"primary\">\n      <div class=\"chatToolBarTitleWrapper\">\n        <div class=\"chatToolBarTitleWrapper_title\">Curdia</div>\n        <div class=\"chatToolBarTitleWrapper_subtitle\">The <b>Cur</b>ious <b>Di</b>gital <b>A</b>ssistant</div>\n      </div>\n      <div class=\"chatToolBarControlsWrapper\">\n<!--         <button md-icon-button>\n            <md-icon>more_vert</md-icon>\n        </button> -->\n        <a href=\"https://www.linkedin.com/in/yuri-wergrzn-4269b497/\" target=\"_newtab\"> <button md-button><b>Contact Me</b></button></a>\n      </div>\n    </md-toolbar>\n    <div class=\"chatMessagesContainer\" #chatMessagesContainer>\n      <app-chat-viewer></app-chat-viewer>\n    </div>\n    <div class=\"chatControlsContainer\">\n      <app-chat-controls></app-chat-controls>\n    </div>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('chatMessagesContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "scrollContainer", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_viewer_chat_viewer_component__ = __webpack_require__("../../../../../src/app/chat-viewer/chat-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_controls_chat_controls_component__ = __webpack_require__("../../../../../src/app/chat-controls/chat-controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_chat_service_service__ = __webpack_require__("../../../../../src/app/services/chat-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule(iconRegistry) {
        iconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__chat_viewer_chat_viewer_component__["a" /* ChatViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_controls_chat_controls_component__["a" /* ChatControlsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__["a" /* WelcomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_chat_service_service__["b" /* MockChatService */], __WEBPACK_IMPORTED_MODULE_9__services_chat_service_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdIconRegistry */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdIconRegistry */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat-controls/chat-controls.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theInput{\r\n  -webkit-box-flex:1;\r\n      -ms-flex-positive:1;\r\n          flex-grow:1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-controls/chat-controls.component.html":
/***/ (function(module, exports) {

module.exports = "<md-input-container class=\"theInput\">\n  <input mdInput type=\"text\" placeholder=\"Enter message...\" [(ngModel)]=\"inputMsg\" (keyup.enter)=\"send()\">\n</md-input-container>\n"

/***/ }),

/***/ "../../../../../src/app/chat-controls/chat-controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service_service__ = __webpack_require__("../../../../../src/app/services/chat-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatControlsComponent = (function () {
    function ChatControlsComponent(_chatService) {
        this._chatService = _chatService;
    }
    ChatControlsComponent.prototype.ngOnInit = function () {
        this._chatService.postMessage('yuri', 'I see you\'ve made it to my "chat portfolio". Welcome! My name is Yuri Antin Wergrzn and ' +
            'although I\'m not here right now, please feel free to talk to my digital assistant! She will do her best to answer your ' +
            'questions about me!');
    };
    ChatControlsComponent.prototype.send = function () {
        this._chatService.sendMessage('you', this.inputMsg);
        this.inputMsg = '';
    };
    return ChatControlsComponent;
}());
ChatControlsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chat-controls',
        template: __webpack_require__("../../../../../src/app/chat-controls/chat-controls.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-controls/chat-controls.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatControlsComponent);

var _a;
//# sourceMappingURL=chat-controls.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-viewer/chat-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".leftMessage md-card{\r\nbackground-color: rgba(230, 230, 230, 0.32);\r\nmargin-right: auto;\r\n}\r\n.rightMessage md-card{\r\nbackground-color: rgba(171, 254, 254, 0.32);\r\nmargin-left: auto;\r\n}\r\n.masterMessage md-card{\r\n  background-color: rgba(111, 133, 255, 0.32);\r\n}\r\n.messageBox{\r\n  margin:10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.messageBox md-card{\r\n  padding:10px 0 0 10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.msgContent{\r\n  margin-right: 15px;\r\n  word-break: break-all;\r\n  word-wrap: break-word;\r\n}\r\n:host ::ng-deep .msgContent img{\r\n  max-width: 40%;\r\n  min-width: 270px;\r\n}\r\n\r\n.msgStatus{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.msgStatus .filler{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1\r\n}\r\n\r\n.msgStatus md-icon{\r\n  height: initial;\r\n  width: initial;\r\n  margin: 8px 5px 5px 5px;\r\n  font-size: 11px;\r\n  color:rgba(87, 87, 87, 0.78)\r\n}\r\n.msgTime{\r\n  font-size: 10px;\r\n  margin: 10px 5px 5px 0;\r\n  min-width: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-viewer/chat-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"messageBox\" *ngFor=\"let msg of viewData.messages\" [ngClass]=\"{'rightMessage': msg.sender == 'you', 'leftMessage': msg.sender != 'you',\n    'masterMessage': msg.sender == 'yuri'}\">\n  <md-card>\n    <div class=\"msgContent\" [innerHTML]=\"msg.messageContent\">\n\n    </div>\n    <div class=\"msgStatus\">\n        <div class=\"filler\"></div>\n        <md-icon *ngIf=\"msg.status == 1 && msg.sender == 'you'\" fontSet=\"fontawesome\" fontIcon=\"fa-clock-o\"></md-icon>\n        <md-icon *ngIf=\"msg.status == 2 && msg.sender == 'you'\" fontSet=\"fontawesome\" fontIcon=\"fa-check\"></md-icon>\n        <div *ngIf=\"msg.sender != 'you'\" class=\"msgTime\">{{msg.time | date:'jm' }}</div>\n    </div>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat-viewer/chat-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service_service__ = __webpack_require__("../../../../../src/app/services/chat-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatViewerComponent = (function () {
    function ChatViewerComponent(chatService) {
        this.chatService = chatService;
        this.viewData = {
            messages: chatService.messageHistory
        };
    }
    ChatViewerComponent.prototype.ngOnInit = function () {
    };
    return ChatViewerComponent;
}());
ChatViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chat-viewer',
        template: __webpack_require__("../../../../../src/app/chat-viewer/chat-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-viewer/chat-viewer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatViewerComponent);

var _a;
//# sourceMappingURL=chat-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/chat-message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageStatus; });
var MessageStatus;
(function (MessageStatus) {
    MessageStatus[MessageStatus["None"] = 0] = "None";
    MessageStatus[MessageStatus["Sent"] = 1] = "Sent";
    MessageStatus[MessageStatus["Processed"] = 2] = "Processed";
})(MessageStatus || (MessageStatus = {}));
//# sourceMappingURL=chat-message.js.map

/***/ }),

/***/ "../../../../../src/app/services/chat-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MockChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_chat_message__ = __webpack_require__("../../../../../src/app/models/chat-message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
        this.messageHistory = [];
    }
    ChatService.prototype.postMessage = function (_sender, _content) {
        this.messageHistory.push({
            sender: _sender,
            messageContent: _content,
            time: new Date(),
            status: __WEBPACK_IMPORTED_MODULE_1__models_chat_message__["a" /* MessageStatus */].Processed
        });
    };
    ChatService.prototype.sendMessage = function (sender, content) {
        var _this = this;
        var msgSend = {
            sender: sender,
            messageContent: content,
            time: new Date(),
            status: __WEBPACK_IMPORTED_MODULE_1__models_chat_message__["a" /* MessageStatus */].Sent
        };
        this.messageHistory.push(msgSend);
        this.http.post('api/message', { sender: 'test', message: content })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.messageHistory.push({
                sender: 'Bot',
                messageContent: data['reply'],
                time: new Date(),
                status: __WEBPACK_IMPORTED_MODULE_1__models_chat_message__["a" /* MessageStatus */].Processed
            });
            msgSend.status = __WEBPACK_IMPORTED_MODULE_1__models_chat_message__["a" /* MessageStatus */].Processed;
        }); // need more examples/best practice?
        return 'not implemented';
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ChatService);

var MockChatService = (function () {
    function MockChatService() {
        this.messageHistory = [];
    }
    MockChatService.prototype.postMessage = function (_sender, _content) {
        this.messageHistory.push({
            sender: _sender,
            messageContent: _content,
            time: new Date(),
            status: __WEBPACK_IMPORTED_MODULE_1__models_chat_message__["a" /* MessageStatus */].Processed
        });
    };
    MockChatService.prototype.sendMessage = function (_sender, _content) {
        this.messageHistory.push({
            sender: _sender,
            messageContent: _content,
            time: new Date(),
            status: __WEBPACK_IMPORTED_MODULE_1__models_chat_message__["a" /* MessageStatus */].Processed
        });
        this.messageHistory.push({
            sender: 'Bot',
            messageContent: 'test echo mode: ' + _content,
            // 'test with image: <img src="https://tce-live2.s3.amazonaws.com/media/media/be7a97e5-19d2-4df5-b348-a549dd5b3fe7.jpg" />' ,
            time: new Date(),
            status: __WEBPACK_IMPORTED_MODULE_1__models_chat_message__["a" /* MessageStatus */].None
        });
        return 'test';
    };
    return MockChatService;
}());
MockChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MockChatService);

var _a;
//# sourceMappingURL=chat-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome {\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  margin:0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background:white;\r\n  z-index: 2;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@state]=\"state\" class=\"welcome\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.state = 'visible';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        // this.state = 'invisible';
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('state', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 0,
                    display: 'none'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('visible => invisible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(300))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map