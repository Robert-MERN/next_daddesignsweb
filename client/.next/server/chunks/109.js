"use strict";
exports.id = 109;
exports.ids = [109];
exports.modules = {

/***/ 7839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bearglass.8da5b839.gif","height":1080,"width":1080});

/***/ }),

/***/ 1841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/premium.51e19f5b.png","height":340,"width":341,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/klEQVR42mMAgTMMDIIHGBhKDmqp7D2gobxvPwND6SmgGAMInAQyDlo7TD2ZF///1tqJ/2+t6/9/qiD1/yFbp2lgRXsZGAov1tX/v2Jq+uNqesS/a1mR/67Z2P8AiYHkGA5YWOx+NH/2/6cd7X/vNDT9v11T//9hbc2/h3Nm/z9o57CH4aCh3O6zrTn/r/VN+Hu7s/P/rZaW//e7ev4+nNnx/4Cd4W4GoOOKTuTE/X9UVfnjRWrav9fJKf9+1db9uFZV/n8HyIpzIEeaO0y91tT8/8PESf8/A/HN5pb/uzQMp5xnYBBgAAGQa3cxMBTvdfPYu9vVfe9WIPsc1JsA7CCAwV4CMUsAAAAASUVORK5CYII="});

/***/ }),

/***/ 6874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3935);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7149);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3602);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7106);







//  bg-top bg-no-repeat bg-contain hover:bg-hero-pattern
const Card = ({ price , price2 , price3 , noPrice , heading , customFunc , normal , content , bgColor , ribbon , month , single , writing  })=>{
    const { openForm  } = (0,_context_ContextProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { 0: sumPrice , 1: setSumPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Number(price));
    const { 0: stars , 1: setStars  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);
    const addPrice = ()=>{
        if (stars < 5) {
            if (stars === 3) {
                setSumPrice(sumPrice + Number(price2));
            } else if (stars === 4) {
                setSumPrice(sumPrice + Number(price3));
            }
            setStars(stars + 1);
        }
    };
    const lessPrice = ()=>{
        if (stars > 3) {
            if (stars === 5) {
                setSumPrice(sumPrice - Number(price3));
            } else if (stars === 4) {
                setSumPrice(sumPrice - Number(price2));
            }
            setStars(stars - 1);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `border-5 border-black  hover:shadow-btn-shadow rounded-xl ${normal ? "h-fit" : writing ? "lg:h-950 2xl:h-900 h-750" : "lg:h-900 h-750"} ${single ? "2xl:w-800 w-full" : "w-full sm:w-320 md:w-650 lg:w-400  2xl:w-450"} transition-all duration-400 ${normal ? "px-2 py-16" : "px-10 py-16"}  ${bgColor || "hover:bg-fuchsia-300"} relative`,
            children: [
                ribbon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        margin: "0 auto"
                    },
                    className: "py-1 absolute w-250 md:w-400 xl:w-350 right-0 left-0 rounded-t-lg bg-red-500 -top-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-18 text-white font-sans text-center font-semibold",
                        children: "Best Seller"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-34 mb-2 leading-30",
                            children: heading
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `flex items-center w-full justify-center px-2 ${normal ? "mb-0" : "mb-4"}`,
                            children: [
                                noPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-24",
                                        children: [
                                            "$",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                                className: "text-17 sm:text-19 2xl:text-28 mr-4",
                                                children: noPrice
                                            })
                                        ]
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-26 lg:text-34",
                                    children: "$"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-28 md:text-38 lg:text-55 2xl:text-55 font-extrabold p-0 mx-2",
                                    children: [
                                        sumPrice.toFixed(2),
                                        " ",
                                        month ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "xl:text-21 text-19 font-bold",
                                            children: month
                                        }) : ""
                                    ]
                                })
                            ]
                        }),
                        writing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full flex justify-center items-center mb-3",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex py-1 px-2 items-center justify-between rounded-full border-black border-3 xl:border-5 w-170 xl:w-150 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: lessPrice,
                                        className: "flex justify-center items-center p-1 rounded-full hover:bg-teal-500 active:g-teal-300 cursor-pointer transition-all",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-18 xl:text-24 select-none",
                                        children: [
                                            stars,
                                            " Star"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: addPrice,
                                        className: "flex justify-center items-center p-1 rounded-full hover:bg-teal-500 active:g-teal-300 cursor-pointer transition-all",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            className: ""
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${normal ? "" : `xl:h-440 h-330 overflow-x-hidden overflow-y-scroll px-2 ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default()["card-scroll"])}`}`,
                            children: !normal && content && content.map((text, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "border-black border-b-1 w-full p-3 font-sans font-bold text-17 xl:text-21",
                                    children: text
                                }, index))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full flex justify-center items-center border-t-1 border-black my-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex-1 cursor-pointer border-r-1 border-black",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "xl:text-21 text-13 sm:text-15 font-sans font-medium xl:font-bold",
                                            children: "Speak with us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "tel:647-660-1776",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-sans text-12 sm:text-14 xl:text-18 font-normal xl:font-semibold",
                                                children: "647-660-1776"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex-1 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "xl:text-21 text-13 sm:text-15 font-sans font-medium xl:font-bold whitespace-nowrap ml-1",
                                            children: "Want to discuss?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noreferrer noopener",
                                            href: "javascript:$zopim.livechat.window.show()",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-sans text-12 sm:text-14 xl:text-18 font-normal xl:font-semibold",
                                                children: "Live Chat Now"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                customFunc: ()=>writing ? openForm(sumPrice.toFixed(2), "content-writing-page", heading, "Start a Project", "", "", true) : customFunc(),
                                text: "Start Project"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ })

};
;