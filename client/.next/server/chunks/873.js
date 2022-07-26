"use strict";
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 5873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3602);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7106);




const SectionNine = ({ bgColor  })=>{
    const PF = "https://daddesignsweb.com/images/";
    const { submitForm , handleChangeForm , formDetail , openForm  } = (0,_context_ContextProvider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                backgroundColor: `${bgColor || ""}`
            },
            className: "pt-20 px-4 lg:px-10 w-screen h-fit flex flex-col items-center ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "2xl:w-1400 xl:w-1000 lg:w-800 flex flex-col xl:flex-row mb-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: (e)=>{
                            openForm("", "landing-page-v1", "", "Website Form", false, true);
                            submitForm(e);
                        },
                        className: "flex-1 px-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-34 lg:text-38 mb-14 text-center leading-40 2xl:leading-80",
                                children: "Let's Discuss Your Requirements"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex xl:flex-row flex-col xl:gap-10 mb-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full xl:w-fit flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "text-21 font-sans font-bold",
                                                htmlFor: "",
                                                children: [
                                                    "First Name",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "firstName",
                                                value: formDetail.firstName || "",
                                                onChange: handleChangeForm,
                                                required: true,
                                                type: "text",
                                                autoCorrect: "false",
                                                spellCheck: false,
                                                className: "w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-3 px-4 outline-none text-20"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full xl:w-fit flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "text-21 font-sans font-bold",
                                                htmlFor: "",
                                                children: [
                                                    "Last Name",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "lastName",
                                                value: formDetail.lastName || "",
                                                onChange: handleChangeForm,
                                                required: true,
                                                type: "text",
                                                autoCorrect: "false",
                                                spellCheck: false,
                                                className: "w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-3 px-4 outline-none text-20"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex xl:flex-row flex-col xl:gap-10 mb-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full xl:w-fit flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "text-21 font-sans font-bold",
                                                htmlFor: "",
                                                children: [
                                                    "Email",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "email",
                                                value: formDetail.email || "",
                                                onChange: handleChangeForm,
                                                required: true,
                                                type: "text",
                                                autoCorrect: "false",
                                                spellCheck: false,
                                                className: "w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-3 px-4 outline-none text-20"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full xl:w-fit flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "text-21 font-sans font-bold",
                                                htmlFor: "",
                                                children: [
                                                    "Phone",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "phone",
                                                value: formDetail.phone || "",
                                                onChange: handleChangeForm,
                                                required: true,
                                                type: "text",
                                                autoCorrect: "false",
                                                spellCheck: false,
                                                className: "w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-3 px-4 outline-none text-20"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full xl:w-fit flex flex-col mb-8 lg:mb-16 xl:gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "text-21 font-sans font-bold",
                                        htmlFor: "",
                                        children: [
                                            "Project Details",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        name: "text",
                                        value: formDetail.text || "",
                                        onChange: handleChangeForm,
                                        required: true,
                                        id: "",
                                        className: "w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-5 px-3 outline-none text-20 resize-none"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    text: "Submit",
                                    type: "submit"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 flex items-center lg:px-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            loading: "lazy",
                            src: `${PF}side5.png`,
                            className: "object-cover",
                            alt: ""
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionNine);


/***/ })

};
;