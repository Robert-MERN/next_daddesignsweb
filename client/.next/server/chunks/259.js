exports.id = 259;
exports.ids = [259];
exports.modules = {

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "Home_menu__2ncGe",
	"forms": "Home_forms__YLSDr",
	"icon": "Home_icon__qn8Vn",
	"rotate": "Home_rotate____XsI",
	"root": "Home_root__wfVGa",
	"video-card": "Home_video-card__CdOHP",
	"cardText": "Home_cardText__oX0jU",
	"btn-move": "Home_btn-move__7I_AH",
	"scaling": "Home_scaling__YZeVP",
	"navbar": "Home_navbar__H7ooC",
	"card-scroll": "Home_card-scroll__gSDsI",
	"flip-card": "Home_flip-card__qq_AJ",
	"flip-card-inner": "Home_flip-card-inner__T60j8",
	"flip-card-back": "Home_flip-card-back__bfd3C",
	"flip-card-front": "Home_flip-card-front__GAZoF",
	"loader": "Home_loader__7Zjim",
	"loader-child": "Home_loader-child__Jkuz4",
	"loadingRotate": "Home_loadingRotate__jE82z",
	"load": "Home_load__4zFUV"
};


/***/ }),

/***/ 7106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3259);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);




const Button = ({ text , customFunc , margin , type , tab , click , classes , call , extraPadding  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            id: "button-check",
            type: type ? "submit" : "button",
            style: {
                backgroundColor: `${tab ? click ? "#FFF85E" : "transparent" : "#FFF85E"}`
            },
            onClick: customFunc,
            className: `py-2 pb-4 ${extraPadding ? "px-14 xl:px-24" : "px-4 xl:px-8"} border-3  ${tab ? click ? "border-black rounded-full" : "border-transparent" : "border-black rounded-full"} ${tab ? "shadow-none" : "shadow-btn-shadow"} hover:shadow-none  w-fit transition-all duration-400 cursor-pointer select-none 2xl:text-24 text-16 ${margin ? "my-3 mt-8" : "my-0"} pt-4 ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()["btn-move"])} transition-all duration-300 ${classes} flex justify-center items-center ${call ? "text-blue-800" : ""}`,
            children: [
                call && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: "mr-3 text-red-400"
                }),
                text
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 3602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ContextProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7246);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_3__);




const StateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ContextProvider = ({ children  })=>{
    const alert = (0,react_alert__WEBPACK_IMPORTED_MODULE_3__.useAlert)();
    const { 0: activeMenu , 1: setActiveMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const defaultValue = {
        tabOne: false,
        tabTwo: false,
        tabThree: false,
        tabFour: false,
        tabFive: false
    };
    const { 0: heightAnimation , 1: setHeightAnimation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    const heightPress = (prop)=>{
        if (heightAnimation[prop] === false) {
            setHeightAnimation({
                ...defaultValue,
                [prop]: true
            });
        } else {
            setHeightAnimation({
                ...defaultValue,
                [prop]: false
            });
        }
    };
    const initalValue = {
        tabOne: false,
        tabTwo: false,
        tabThree: false,
        tabFour: false,
        tabFive: false,
        tabSix: false
    };
    const { 0: tabValue , 1: setTabValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        ...initalValue,
        tabOne: true
    });
    const tabPress = (prop)=>{
        setTabValue({
            ...initalValue,
            [prop]: true
        });
    };
    // form
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: formDetail , 1: setFormDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        subject: "Dad Designs Web"
    });
    const { 0: formSubmitted , 1: setFormSubmitted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openForm = (packagePrice, pageName, packageName, buttonName, normal, separate, card)=>{
        if (buttonName === "Website Form") {
            setFormDetail({
                ...formDetail,
                buttonName,
                pageName
            });
        } else {
            if (!separate) {
                setForm(true);
                if (!normal) {
                    if (card) {
                        setFormDetail({
                            ...formDetail,
                            packagePrice,
                            packageName,
                            buttonName,
                            pageName
                        });
                    }
                } else {
                    setFormDetail({
                        ...formDetail,
                        buttonName,
                        pageName
                    });
                }
            } else {
                setForm(true);
                setFormDetail({
                    ...formDetail,
                    buttonName,
                    pageName
                });
            }
        }
    };
    const closeForm = ()=>{
        setForm(false);
    };
    const handleChangeForm = (e)=>{
        setFormDetail({
            ...formDetail,
            [e.target.name]: e.target.value
        });
    };
    let errorNum = 0;
    const submitForm = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://api.daddesignsweb.com/sendmail", formDetail);
            setFormSubmitted(true);
            setLoading(false);
            setFormDetail({
                subject: "Dad Designs Web"
            });
            alert.show("Thank you for submitting the form!", {
                type: "success"
            });
        } catch (err) {
            console.error(err);
            errorNum = errorNum + 1;
            setLoading(false);
            if (errorNum < 3) {
                alert.show("We couldn't send your form. try again!", {
                    type: "error"
                });
            } else {
                alert.show("Contact with us if you aren't be able to send form!", {
                    type: "error"
                });
            }
        }
    };
    const { 0: specificService , 1: setSpecificService  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: chatShow , 1: setChatShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("first");
    // video custom order 
    const orderVideoCustom = (packagePrice, videoType, videoDuration)=>{
        setForm(true);
        setFormDetail({
            packagePrice,
            pageName: "video-editing",
            packageName: "Custom Order",
            buttonName: "Order Now",
            videoType,
            videoDuration
        });
    };
    // content writing custom order
    const orderContentCustom = (packagePrice, stars, words, pages, urgency, keywordSearch)=>{
        setForm(true);
        setFormDetail({
            packagePrice,
            pageName: "conetnt-writing",
            packageName: "Custom Order",
            buttonName: "Order Now",
            stars,
            words,
            pages,
            urgency,
            keywordSearch
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StateContext.Provider, {
        value: {
            activeMenu,
            setActiveMenu,
            tabValue,
            tabPress,
            heightAnimation,
            heightPress,
            form,
            openForm,
            closeForm,
            submitForm,
            handleChangeForm,
            formSubmitted,
            setFormSubmitted,
            setFormDetail,
            formDetail,
            loading,
            setSpecificService,
            specificService,
            chatShow,
            setChatShow,
            orderVideoCustom,
            orderContentCustom
        },
        children: children
    });
};
const useStateContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStateContext);


/***/ })

};
;