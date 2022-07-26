"use strict";
exports.id = 18;
exports.ids = [18];
exports.modules = {

/***/ 18:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3602);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1677);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3259);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9309);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7106);








const SectionOne = ({ landingPage , home , contact , Services , price  })=>{
    const PF = "https://daddesignsweb.com/images/";
    const { openForm  } = (0,_context_ContextProvider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const scrollToService = ()=>{
        document.getElementById("servicesSection").scrollIntoView({
            behavior: "smooth"
        });
    };
    const scrollToPrice = ()=>{
        document.getElementById("priceSection").scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-gradient-to-b from-violet-300 to-cyan-100 pt-36 xl:pt-48 px-6 md:px-10 w-full min-h-screen text-center flex flex-col items-center",
            children: [
                landingPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "2xl:w-1400 lg:w-1000 xl:1200 flex flex-col xl:flex-row-reverse mb-20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1 px-0 lg:px-8 flex justify-center items-center lg:items-start 2xl:items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `${PF}monitors.webp`,
                                className: "object-contain",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1 px-0 md:px-4 2xl:px-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-46 lg:text-55 2xl:text-72 mb-12 text-center xl:text-left leading-50 xl:leading-70 font-1200",
                                    children: [
                                        "Stunning custom websites that convert ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            style: {
                                                color: "#44017c"
                                            },
                                            className: "text-yellow-500",
                                            children: [
                                                "Starting from just $",
                                                price || "449.99",
                                                "."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-21 font-sans mb-12 font-semibold text-center xl:text-left",
                                    children: "From personal websites to complex corporate pages or online stores, Dad Designs Web is your one stop shop for all things web."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center text-21 font-extrabold mb-6 text-center xl:text-left font-sans",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Tell us what you need. We'll do the rest."
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full justify-center flex xl:justify-start items-center my-5",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-1 cursor-pointer flex xl:justify-start justify-center items-center border-r-1 border-black text-right",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    className: "mr-2 md:mr-4 text-24 text-blue-800"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "tel:647-660-1776",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-sans text-14 xl:text-21 font-normal xl:font-bold",
                                                        children: "647-660-1776"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "javascript:$zopim.livechat.window.show()",
                                            className: "flex-1 cursor-pointer flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    className: "mr-1 md:mr-2 text-24 text-yellow-500"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    id: "live-chat",
                                                    className: "font-sans text-14 xl:text-21 font-normal xl:font-bold",
                                                    children: "Live Chat Now"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "py-10 flex flex-col xl:flex-row xl:justify-between items-center gap-y-12 xl:gap-y-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            customFunc: ()=>openForm("", "landing-page-v1", "", "Get Started Now", true, false),
                                            text: "Get Started Now"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: `${PF}rating.png`,
                                            className: "object-contain",
                                            alt: ""
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                contact && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:w-1000 lg:w-800 mb-20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-65 xl:text-100 mb-20 leading-60 xl:leading-100",
                            children: "Get In Touch With Us 24/7!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-24 font-sans font-semibold mb-20",
                            children: "We love taking on exciting new projects for aspiring businesses and growth-oriented clients. Get in touch with us today for a free strategic consultation!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                customFunc: ()=>openForm("", "contact", "", "Let's Get started", true),
                                text: "Let's Get started"
                            })
                        })
                    ]
                }),
                contact && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:w-1000 lg:w-800 w-full items-center flex justify-center mb-8 xl:my-58 relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${PF}yellowcircle.svg`,
                            alt: "",
                            className: `relative ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon)} w-300 md:w-600 z-0`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${PF}logo.webp`,
                            className: "w-80 sm:w-120 md:w-250 xl:w-250 object-contain absolute m-auto inset-0 text-center",
                            alt: ""
                        })
                    ]
                }),
                Services && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:w-1000 lg:w-800 mb-20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-65 xl:text-100 mb-20 leading-60 xl:leading-100",
                            children: "The Services"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-24 font-sans font-semibold text-center xl:text-left flex items-center mb-2 w-full justify-center lg:justify-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mr-5 font-extrabold hidden lg:block",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "mr-8 hidden xl:block text-left align-middle"
                                    })
                                }),
                                "Unique Web Design to Build Your Brand"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-24 font-sans font-semibold mb-20 text-center xl:text-left flex items-center w-full justify-center lg:justify-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "mr-5 font-extrabold hidden lg:block",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "mr-8 hidden xl:block text-left align-middle"
                                    })
                                }),
                                "Create live segments and target the right people for messages based on their behaviors."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                customFunc: scrollToService,
                                text: "view services"
                            })
                        })
                    ]
                }),
                Services && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:w-1000 lg:w-800 w-full items-center flex justify-center mb-8 xl:my-58 relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${PF}yellowcircle.svg`,
                            alt: "",
                            className: `relative ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon)} w-300 md:w-600 z-0`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${PF}logo.webp`,
                            className: "w-80 sm:w-120 md:w-250 xl:w-250 object-contain absolute m-auto inset-0 text-center",
                            alt: ""
                        })
                    ]
                }),
                Services && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "xl:w-1000 lg:w-800 mb-20",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-34 xl:text-55 mb-20 leading-40 xl:leading-70 text-center",
                        children: "First impressions are everything and your website is a representation of who you are. It's the first place anyone looks when it comes to selling your services, showcasing your work, or connecting with new leads. Let's build you a website that you (and your dad!) would be proud of. Complex, multi-page website? Small, simple landing page? If you can dream it, we can build it."
                    })
                }),
                Services && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "xl:w-1000 lg:w-800 mb-20",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-34 xl:text-55 mb-20 leading-40 xl:leading-60 text-center",
                        children: "Our team of experienced web developers will work with you from start to finish to figure out exactly what you need and how we can translate your unique personality onto the web."
                    })
                }),
                home && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:w-1000 lg:w-800 mb-20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-65 xl:text-72 2xl:text-100 mb-20 leading-60 xl:leading-100",
                            children: "Create anything on the internet. we've got you."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-24 font-sans font-semibold mb-14",
                            children: "Dad Designs Web is a full-service agency ready to help with all your web, content, marketing, and development needs. Let our experienced team of experts help bring your vision to life"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center text-21 font-sans font-extrabold mb-6 text-center justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Tell us what you need. We'll do the rest."
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full justify-center flex xl:justify-start items-center mb-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex-1 cursor-pointer flex justify-end items-center border-r-1 border-black text-right pr-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            className: "mr-4 text-24 xl:text-28 text-blue-800"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "tel:647-660-1776",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-sans text-14 xl:text-21 font-normal xl:font-bold",
                                                children: "647-660-1776"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "javascript:$zopim.livechat.window.show()",
                                    className: "flex-1 cursor-pointer flex items-center pl-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "mr-2 text-24 xl:text-28 text-yellow-500"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            id: "live-chat",
                                            className: "font-sans text-14 xl:text-21 font-normal xl:font-bold",
                                            children: "Live Chat Now"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                customFunc: scrollToPrice,
                                text: "view Pricing"
                            })
                        })
                    ]
                }),
                home && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:w-1000 lg:w-800 w-full items-center flex justify-center mb-8 xl:my-58 relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${PF}yellowcircle.svg`,
                            alt: "",
                            className: `relative ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon)} w-300 md:w-600 z-0`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${PF}logo.webp`,
                            className: "w-80 sm:w-120 md:w-250 xl:w-250 object-contain absolute m-auto inset-0 text-center",
                            alt: ""
                        })
                    ]
                }),
                landingPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "xl:w-1000 lg:w-800 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-46 xl:text-38 mb-4 leading-50",
                                children: "We build interactive and beautiful websites that engage your customers, and lead to more conversions in less time."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex xl:w-800 w-full flex-row justify-between my-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "xl:w-200 md:w-250 sm:w-150 w-100",
                                        src: `${PF}goodfirm.webp`,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "xl:w-200 md:w-250 sm:w-150 w-100",
                                        src: `${PF}clutch.webp`,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "xl:w-200 md:w-250 sm:w-150 w-100",
                                        src: `${PF}certified.webp`,
                                        alt: ""
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionOne);


/***/ })

};
;