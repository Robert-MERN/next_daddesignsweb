"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./context/ContextProvider.js
var ContextProvider = __webpack_require__(3602);
// EXTERNAL MODULE: external "react-alert"
var external_react_alert_ = __webpack_require__(7246);
;// CONCATENATED MODULE: external "react-alert-template-basic"
const external_react_alert_template_basic_namespaceObject = require("react-alert-template-basic");
var external_react_alert_template_basic_default = /*#__PURE__*/__webpack_require__.n(external_react_alert_template_basic_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: external "@material-ui/icons/Close"
const Close_namespaceObject = require("@material-ui/icons/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Call"
var Call_ = __webpack_require__(3259);
var Call_default = /*#__PURE__*/__webpack_require__.n(Call_);
// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__(9746);
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);
;// CONCATENATED MODULE: ./components/Menu.jsx








const Menu = ({ classes  })=>{
    const { setActiveMenu , activeMenu  } = (0,ContextProvider/* default */.Z)();
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `top-0 right-0 left-0 bottom-0 bg-yellow-300 py-10 px-4 md:p-10 xl:p-16 fixed ${(Home_module_default()).menu} ${activeMenu ? "translate-x-0" : "translate-x-full"} transition-all duration-700 ${classes}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full h-full flex flex-col 2xl:mx-64 xl:flex-row",
                    children: [
                        activeMenu && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-1 p-2 flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    onClick: ()=>{
                                        setActiveMenu((prev)=>!prev);
                                        router.push("/");
                                    },
                                    className: "text-34 xl:text-65 cursor-pointer",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    onClick: ()=>{
                                        setActiveMenu((prev)=>!prev);
                                        router.push("/services");
                                    },
                                    className: "text-34 xl:text-65 cursor-pointer",
                                    children: "Services"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    onClick: ()=>{
                                        setActiveMenu((prev)=>!prev);
                                        router.push("/about");
                                    },
                                    className: "text-34 xl:text-65 cursor-pointer",
                                    children: "About"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    onClick: ()=>{
                                        setActiveMenu((prev)=>!prev);
                                        router.push("/contact");
                                    },
                                    className: "text-34 xl:text-65 cursor-pointer",
                                    children: "Contact"
                                })
                            ]
                        }),
                        activeMenu && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-1 h-full p-2 flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "tel:647-660-1776",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        onClick: ()=>setActiveMenu((prev)=>!prev),
                                        className: "font-sans font-bold text-21 xl:text-28 flex items-center cursor-pointer my-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {
                                                className: "mr-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "647-660-1776"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "mailto:sales@daddesignsweb.com",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        onClick: ()=>setActiveMenu((prev)=>!prev),
                                        className: "flex items-center font-sans font-bold text-21 xl:text-28 cursor-pointer my-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {
                                                className: "mr-4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "sales@daddesignsweb.com"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                activeMenu && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute right-8 top-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "hover:scale-300 scale-250 transition-all",
                        onClick: ()=>setActiveMenu((prev)=>!prev),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                            className: "hover:drop-shadow-3xl"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Menu = (Menu);

// EXTERNAL MODULE: ./components/Button.jsx
var Button = __webpack_require__(7106);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/thankyou.webp
/* harmony default export */ const thankyou = ({"src":"/_next/static/media/thankyou.2a484975.webp","height":502,"width":502,"blurDataURL":"data:image/webp;base64,UklGRuQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAAAAAAAQEAJcW+yJlaNheI////zyIUlf/4/P36dgAh5P/7+f++AADa//////+ZAKfUysjc/3UAAAAAAA0sAABWUDggfAAAABACAJ0BKggACAACQDglsAJ0LRmBhItf3QAA/m0DjGetgOCj8uIZb1ffqcyzw/AC7f3fe1/j/DURdI7r5YowshyPMJ8dv53e7dbfPefMf2Mv/g43V/6DHx/+Tfku/+XC/5KQ3/EGXlOH7/+ot/3HJn9G///TBHjyh8eAAAA="});
;// CONCATENATED MODULE: ./components/Form.jsx







// image import

const Form = ({ classes  })=>{
    const { closeForm , form , submitForm , handleChangeForm , formSubmitted , setFormSubmitted , setFormDetail , formDetail , setParentForm  } = (0,ContextProvider/* default */.Z)();
    const heightRef = (0,external_react_.useRef)();
    let totalHeight = {
        height: heightRef.current?.offsetHeight
    };
    const isMounted = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        if (isMounted.current) return;
        isMounted.current = true;
        totalHeight.height = heightRef.current?.offsetHeight;
    });
    const PF = "https://daddesignsweb.com/images/";
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `inset-0 bg-transparent ${(Home_module_default()).forms} fixed flex justify-center items-center ${form ? "translate-x-0" : "translate-x-full"} transition-all duration-700 ${classes}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `xl:w-550 md:w-450 h-full xl:h-fit w-full ${(Home_module_default())["flip-card"]}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `relative w-full h-full flex items-center ${(Home_module_default())["flip-card-inner"]}`,
                    rotate: formSubmitted ? "true" : "",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            ref: heightRef,
                            className: `absolute w-full h-full md:w-450 md:h-fit lg:h-550 2xl:h-fit 2xl:w-550 right-0 ${(Home_module_default())["flip-card-front"]}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    backgroundColor: "#FBEC7A"
                                },
                                className: "md:border-8 w-full h-full md:border-black md:rounded-xl px-6 xl:px-4 pt flex justify-center items-center overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        onSubmit: submitForm,
                                        className: "px-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-26 2xl:text-38 my-4 mt-4 lg:mt-6 2xl:mt-8 text-center leading-30 2xl:leading-50",
                                                children: "Let's Discuss Your Requirements"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-full flex xl:flex-row flex-col xl:gap-4 2xl:gap-10 mb-4 lg:mb-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-full xl:w-fit flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                            className: "text-18 2xl:text-21 font-sans font-bold",
                                                            htmlFor: "",
                                                            children: [
                                                                "Full Name",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            value: formDetail.fullName || "",
                                                            name: "fullName",
                                                            onChange: handleChangeForm,
                                                            required: true,
                                                            type: "text",
                                                            autoCorrect: "false",
                                                            spellCheck: false,
                                                            className: "w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-1 2xl:py-3 px-4 outline-none text-18 xl:text-21"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-full xl:w-fit flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        className: "text-18 2xl:text-21 font-sans font-bold",
                                                        htmlFor: "",
                                                        children: [
                                                            "Email",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        value: formDetail.email || "",
                                                        name: "email",
                                                        onChange: handleChangeForm,
                                                        required: true,
                                                        type: "email",
                                                        autoCorrect: "false",
                                                        spellCheck: false,
                                                        className: "w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-1 2xl:py-3 px-4 outline-none text-18 xl:text-21"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-full xl:w-fit flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        className: "text-18 2xl:text-21 font-sans font-bold",
                                                        htmlFor: "",
                                                        children: [
                                                            "Phone",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        value: formDetail.phone || "",
                                                        name: "phone",
                                                        onChange: handleChangeForm,
                                                        required: true,
                                                        type: "tel",
                                                        autoCorrect: "false",
                                                        spellCheck: false,
                                                        className: "w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-1 2xl:py-3 px-4 outline-none text-18 xl:text-21"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-full xl:w-fit flex flex-col my-4 lg:my-2 2xl:gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        className: "text-18 2xl:text-21 font-sans font-bold",
                                                        htmlFor: "",
                                                        children: [
                                                            "Project Details",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                        value: formDetail.text || "",
                                                        name: "text",
                                                        onChange: handleChangeForm,
                                                        required: true,
                                                        id: "",
                                                        className: "w-full xl:w-fit bg-inherit font-sans font-bold border-4 border-black rounded-2xl py-2 2xl:py-5 px-3 outline-none text-18 xl:text-21 resize-none"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-full xl:w-fit mb-4 2xl:mb-8",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    text: "Submit",
                                                    type: "submit"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "fixed md:absolute md:top-2 md:right-2 sm:top-3 sm:right-3 xl:top-2 xl:right-2 top-1 right-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "scale-200 hover:scale-250 transition-all mt-2 mr-3",
                                            type: "button",
                                            onClick: ()=>{
                                                closeForm();
                                                setFormDetail({
                                                    subject: "Dad-Designs-Web Project"
                                                });
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                className: "hover:drop-shadow-3xl"
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                height: totalHeight.height + "px"
                            },
                            className: `absolute w-full md:w-450 2xl:w-550 right-0 ${(Home_module_default())["flip-card-back"]}`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    backgroundColor: "#FBEC7A"
                                },
                                className: "md:border-8 w-full h-full md:border-black md:rounded-xl px-6 xl:px-4 pt flex justify-center items-center overflow-x-hidden overflow-y-scroll",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: thankyou,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "fixed md:absolute md:top-2 md:right-2 sm:top-3 sm:right-3 xl:top-2 xl:right-2 top-1 right-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "scale-200 hover:scale-250 2xl:scale-200 lg:hover:scale-200 lg:scale-150 2xl:hover:scale-250 transition-all mt-2 mr-3",
                                            type: "button",
                                            onClick: ()=>{
                                                closeForm();
                                                setFormDetail({
                                                    subject: "Dad-Designs-Web Project"
                                                });
                                                setFormSubmitted(false);
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                className: "hover:drop-shadow-3xl"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_Form = (Form);

;// CONCATENATED MODULE: ./components/Navbar.jsx



const Navbar = ({ toShow  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                backgroundColor: `${toShow ? "#FBEC7A" : "transparent"}`
            },
            className: `opacity-90 fixed w-screen right-0 left-0 top-0 ${(Home_module_default()).navbar} 2xl:h-140 md:h-110 h-85`
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Loader.jsx



const Loader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Home_module_default()).loader,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default())["loader-child"]
            })
        })
    });
};
/* harmony default export */ const components_Loader = (Loader);

;// CONCATENATED MODULE: ./layout/Layout.jsx






// components import 





const Layout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const location = router.pathname;
    const textClass = "variation-one";
    const PF = "https://daddesignsweb.com/images/";
    const { setActiveMenu , activeMenu , form , openForm , loading , chatShow , setChatShow  } = (0,ContextProvider/* default */.Z)();
    const openMenu = ()=>{
        setActiveMenu(true);
    };
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const controlNavbar = ()=>{
        if (window.scrollY > 150) {
            setShow(true);
        } else {
            setShow(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", controlNavbar);
        return ()=>{
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (window.screen.width > 1280) {
            if (chatShow === "first" && !form) {
                setTimeout(()=>{
                    if (!form) {
                        document.getElementById("open-chat")?.click();
                    }
                    setChatShow("second");
                }, 4000);
            } else if (chatShow === "second" && !form) {
                setTimeout(()=>{
                    if (!form) {
                        document.getElementById("open-chat")?.click();
                    }
                    setChatShow("third");
                }, 20000);
            } else if (chatShow === "third" && !form) {
                setTimeout(()=>{
                    if (!form) {
                        document.getElementById("open-chat")?.click();
                    }
                    setChatShow("second");
                }, 20000);
            }
        }
        return ()=>{
            clearTimeout();
        };
    }, [
        chatShow,
        setChatShow,
        form
    ]);
    const scrollToTop = ()=>{
        document.getElementById("root").scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onContextMenu: (e)=>e.preventDefault(),
        id: "root",
        className: `${(Home_module_default()).root} ${activeMenu || form ? "bg-black" : ""} relative transition-all`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "shortcut icon",
                    href: `${PF}favicon.jpg`,
                    type: "image/x-icon"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                id: "ze-snippet",
                src: "https://static.zdassets.com/ekr/snippet.js?key=ab66d382-3888-4e1f-8563-3e91db8f0455",
                children: " "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                id: "open-chat",
                className: "hidden",
                href: "javascript:$zopim.livechat.window.show()",
                children: "click"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Form, {
                classes: textClass
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: scrollToTop,
                className: `bg-yellow-300 menu fixed bottom-3 left-5 p-3 transition-all duration-400 rounded-full cursor-pointer hover:bg-yellow-200 ${show ? "translate-x-0" : "-translate-x-36"} w-50`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `${PF}scroll.webp`,
                    className: "w-50",
                    alt: ""
                })
            }),
            loading && /*#__PURE__*/ jsx_runtime_.jsx(components_Loader, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `root ${form ? "opacity-40" : "opacity-100"} transition-all duration-400`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-t-5 border-black relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                                toShow: show
                            }),
                            !activeMenu && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            onClick: ()=>router.push("/"),
                                            className: `cursor-pointer fixed top-2 left-4 md:left-10 xl:top-1 ${(Home_module_default()).menu} w-50 md:w-70 xl:w-80 2xl:w-100`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: `${PF}logo.webp`,
                                                className: "object-contain w-50 md:w-70 xl:w-80 2xl:w-100 transition-all",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `fixed md:top-5 2xl:top-8 xl:right-4 top-2 right-2  md:right-12 ${(Home_module_default()).menu}`,
                                        children: [
                                            location.includes("/web-design-services") ? /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                customFunc: ()=>openForm("", "landing-page-v1", "", "Get a Free Quote", true),
                                                text: "Get A Free Quote",
                                                classes: textClass
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                customFunc: openMenu,
                                                text: "Menu",
                                                classes: textClass
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `fixed 2xl:top-8 top-4  ${location.includes("/web-design-services") ? "2xl:right-72 right-64" : "right-36  2xl:right-48"}  menu xl:block hidden transition-all duration-300`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "tel:647-660-1776",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        text: "647-660-1776",
                                                        classes: textClass,
                                                        call: true
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Menu, {
                                classes: textClass
                            })
                        ]
                    }),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.jsx







function MyApp({ Component , pageProps  }) {
    // optional configuration
    const options = {
        // you can also just use 'bottom center'
        position: external_react_alert_.positions.BOTTOM_CENTER,
        timeout: 5000,
        offset: "30px",
        // you can also just use 'scale'
        transition: external_react_alert_.transitions.SCALE
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_alert_.Provider, {
            template: (external_react_alert_template_basic_default()),
            ...options,
            children: /*#__PURE__*/ jsx_runtime_.jsx(ContextProvider/* ContextProvider */.H, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3259:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Call");

/***/ }),

/***/ 9746:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7246:
/***/ ((module) => {

module.exports = require("react-alert");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,675,259], () => (__webpack_exec__(6215)));
module.exports = __webpack_exports__;

})();