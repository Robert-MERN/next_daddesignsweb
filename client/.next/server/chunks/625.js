"use strict";
exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 3625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3602);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2211);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7106);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6874);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_images_bearglass_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7839);
/* harmony import */ var _public_images_premium_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1841);








// importing GIF 

// importing image

const LandingSectionSeven = ({ bgColor , serviceTwo , serviceThree , serviceFour , serviceFive , serviceSix , pageName , content  })=>{
    const { openForm  } = (0,_context_ContextProvider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const PF = "https://daddesignsweb.com/images/";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "priceSection",
            className: "px-4 xl:px-10 w-screen min-h-screen flex flex-col items-center",
            style: {
                backgroundColor: bgColor
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `2xl:w-1400 ${content ? "lg:w-1200" : "lg:w-800"} w-full lg:px-8`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full my-28 flex-col flex items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center text-55 leading-50 xl:text-72 xl:leading-70 pb-2",
                            children: "Pricing Plans That Work for Everyone!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center text-21 xl:text-28 font-sans pb-2",
                            children: "Click & Scroll to review our plans!"
                        }),
                        !serviceTwo && !serviceThree && !serviceFour && !serviceFive && !serviceSix && !content && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "2xl:w-1400 lg:w-1000 w-full flex xl:flex-row flex-col flex-wrap gap-12 xl:gap-20 justify-center items-center my-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .packageCard1 */ .y8,
                                    customFunc: ()=>openForm(449.99, pageName, "Dad Next Door Plan", "Start a Project", "", "", true),
                                    heading: "Dad Next Door Plan",
                                    price: "449.99",
                                    noPrice: "749.99",
                                    bgColor: "hover:bg-red-300"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .packageCard2 */ .C7,
                                    customFunc: ()=>openForm(749.99, pageName, "Father Figure Plan", "Start a Project", "", "", true),
                                    heading: "Father Figure Plan",
                                    price: "749.99",
                                    noPrice: "1049.99",
                                    bgColor: "hover:bg-green-300"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .packageCard3 */ .rT,
                                    bgColor: "hover:bg-teal-200",
                                    heading: "Thanks Dad Plan",
                                    price: "1049.99",
                                    noPrice: "1449.99",
                                    ribbon: true,
                                    customFunc: ()=>openForm(1049.99, pageName, "Thanks Dad Plan", "Start a Project", "", "", true)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .packageCard4 */ .Hp,
                                    customFunc: ()=>openForm(1449.99, pageName, "Super Dad Plan", "Start a Project", "", "", true),
                                    heading: "Super Dad Plan",
                                    bgColor: "hover:bg-violet-400",
                                    price: "1449.99",
                                    noPrice: "1799.99"
                                })
                            ]
                        }),
                        serviceTwo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "2xl:w-1400 lg:w-1000 w-full flex xl:flex-row flex-col flex-wrap gap-12 xl:gap-20 justify-center items-center my-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .serviceTwoPackage */ .UY,
                                    customFunc: ()=>openForm(1449.99, pageName, "Tie-Tightner Plan", "Start a Project", "", "", true),
                                    heading: "Tie-Tightner Plan",
                                    bgColor: "hover:bg-green-300",
                                    price: "149.99"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .serviceTwoPackage2 */ .fy,
                                    customFunc: ()=>openForm(1449.99, pageName, "Hand-Holding Plan", "Start a Project", "", "", true),
                                    heading: "Hand-Holding Plan",
                                    bgColor: "hover:bg-violet-400",
                                    price: "249.99"
                                })
                            ]
                        }),
                        serviceFour && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "2xl:w-1400 lg:w-1000 w-full flex xl:flex-row flex-col flex-wrap gap-12 xl:gap-20 justify-center items-center my-16",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .SEOPackage */ .mZ,
                                customFunc: ()=>openForm(999.99, pageName, "The Fix It Plan", "Start a Project", "", "", true),
                                heading: "The Fix It Plan",
                                bgColor: "hover:bg-green-300",
                                price: "999.99",
                                month: "/month",
                                single: true
                            })
                        }),
                        serviceFive && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "2xl:w-1400 lg:w-1000 w-full flex xl:flex-row flex-col flex-wrap gap-12 xl:gap-20 justify-center items-center my-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .serviceFivePackage */ .jQ,
                                    customFunc: ()=>openForm(1449.99, pageName, "DAD BRONZE PLAN", "Start a Project", "", "", true),
                                    heading: "DAD BRONZE PLAN",
                                    bgColor: "hover:bg-green-300",
                                    price: "249.99",
                                    month: "/month"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .serviceFivePackage2 */ .ir,
                                    customFunc: ()=>openForm(1449.99, pageName, "DAD SILVER PLAN", "Start a Project", "", "", true),
                                    heading: "DAD SILVER PLAN",
                                    bgColor: "hover:bg-violet-400",
                                    price: "499.99",
                                    month: "/month"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .serviceFivePackage3 */ .fO,
                                    customFunc: ()=>openForm(1449.99, pageName, "DAD GOLD PLAN", "Start a Project", "", "", true),
                                    heading: "DAD GOLD PLAN",
                                    bgColor: "hover:bg-red-300",
                                    price: "499.99",
                                    month: "/month"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .serviceFivePackage4 */ .Tv,
                                    customFunc: ()=>openForm(1449.99, pageName, "DAD ULTRA PLAN", "Start a Project", "", "", true),
                                    heading: "DAD ULTRA PLAN",
                                    bgColor: "hover:bg-teal-200",
                                    price: "999.99",
                                    month: "/month"
                                })
                            ]
                        }),
                        content && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "xl:w-1600 w-full flex xl:flex-row flex-col flex-wrap gap-6 lg:gap-3 2xl:gap-8 justify-center items-center my-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .contentPricing */ .eM,
                                    customFunc: ()=>openForm(1449.99, pageName, "1 Pages", "Start a Project", "", "", true),
                                    heading: "1 Pages",
                                    bgColor: "hover:bg-green-300",
                                    price: "39.80",
                                    price2: "9.95",
                                    price3: "12.44",
                                    writing: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .contentPricing */ .eM,
                                    customFunc: ()=>openForm(1449.99, pageName, "5 Pages", "Start a Project", "", "", true),
                                    heading: "5 Pages",
                                    bgColor: "hover:bg-violet-400",
                                    price: "199.00",
                                    price2: "49.75",
                                    price3: "62.19",
                                    writing: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    content: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .contentPricing */ .eM,
                                    customFunc: ()=>openForm(1449.99, pageName, "10 Pages", "Start a Project", "", "", true),
                                    heading: "10 Pages",
                                    bgColor: "hover:bg-red-300",
                                    price: "375.00",
                                    price2: "93.74",
                                    price3: "117.19",
                                    writing: true
                                })
                            ]
                        }),
                        !serviceTwo && !serviceFour && !serviceFive && !content && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "2xl:1400 xl:w-1200 lg:w-1000 md:w-700 w-full border-5 border-black rounded-xl hover:shadow-btn-shadow pb-8 px-4 xl:px-12 transition-all duration-400 relative hover:bg-blue-400",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full flex xl:flex-row flex-col-reverse justify-center items-center",
                                    children: [
                                        !serviceSix && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex-1 flex justify-center xl:justify-end ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                src: _public_images_bearglass_gif__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                                width: "250",
                                                height: "250",
                                                className: "object-contain",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `xl:text-55 text-46 text-center p-0 xl:pl-8 leading-50 ${serviceSix?.packageName ? "my-8" : ""}`,
                                                children: serviceSix?.packageName || "I Need A Beer Plan"
                                            })
                                        }),
                                        !serviceSix && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "xl:flex-1 flex justify-center items-center my-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                src: _public_images_premium_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                                width: "200",
                                                height: "200",
                                                className: "drop-shadow w-200",
                                                alt: ""
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full flex justify-center items-center border-t-1 border-b-1 border-black mb-4 xl:mb-14",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-17 xl:text-21",
                                                children: [
                                                    "$",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                                        className: "text-15 md:text-17 xl:text-28 mr-2 md:mr-4",
                                                        children: "10,599.99"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "text-28",
                                            children: "$"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-28 md:text-34 lg:text-55 xl:text-55 font-extrabold p-0 mx-2",
                                            children: serviceSix?.price || "5499.99"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `w-full flex xl:flex-row flex-col justify-center gap-0 xl:gap-4 xl:h-fit h-600 xl:overflow-hidden overflow-y-scroll overflow-x-hidden ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default()["card-scroll"])}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "xl:flex-1 px-3 flex flex-col items-center xl:items-start xl:p-6",
                                            children: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .megaSectionOne.map */ .oL.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex w-full items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mr-6 text-16 xl:text-24",
                                                            children: "\u2022"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-14 md:text-17 font-sans py-2 font-medium xl:font-bold text-left",
                                                            children: item
                                                        })
                                                    ]
                                                }, index))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "xl:flex-1 px-3 flex flex-col items-center xl:items-start xl:p-6",
                                            children: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .megaSectionTwo.map */ .gS.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex w-full items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mr-6 text-16 xl:text-24",
                                                            children: "\u2022"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-14 md:text-17 font-sans py-2 font-medium xl:font-bold text-left",
                                                            children: item
                                                        })
                                                    ]
                                                }, index))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "xl:flex-1 px-3 flex flex-col items-center xl:items-start xl:p-6",
                                            children: _data_data__WEBPACK_IMPORTED_MODULE_3__/* .megaSectionThree.map */ .sC.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex w-full items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mr-6 text-16 xl:text-24",
                                                            children: "\u2022"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-14 md:text-17 font-sans py-2 font-medium xl:font-bold text-left",
                                                            children: item
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full flex justify-center items-center border-t-1 border-black my-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-1 cursor-pointer border-r-1 border-black text-right pr-4 xl:pr-8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "xl:text-21 text-15 font-sans font-medium xl:font-bold",
                                                    children: "Speak with us"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "tel:647-660-1776",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-sans text-14 xl:text-18 font-normal xl:font-semibold",
                                                        children: "647-660-1776"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-1 cursor-pointer pl-4 xl:pl-8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "xl:text-21 text-15 font-sans font-medium xl:font-bold whitespace-nowrap ",
                                                    children: "Want to discuss?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "javascript:$zopim.livechat.window.show()",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-sans text-14 xl:text-18 font-normal xl:font-semibold",
                                                        children: "Live Chat Now"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full mt-4 justify-center flex",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        customFunc: ()=>openForm(5499.99, pageName, "I need A beer plan", "Start a Project", "", "", true),
                                        text: "Start Project."
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingSectionSeven);


/***/ })

};
;