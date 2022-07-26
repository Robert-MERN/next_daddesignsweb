"use strict";
exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 8456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@material-ui/icons/Call"
var Call_ = __webpack_require__(3259);
var Call_default = /*#__PURE__*/__webpack_require__.n(Call_);
// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__(9746);
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);
// EXTERNAL MODULE: external "@material-ui/icons/Facebook"
var Facebook_ = __webpack_require__(7055);
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);
// EXTERNAL MODULE: external "@material-ui/icons/Instagram"
var Instagram_ = __webpack_require__(6765);
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_);
// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__(9616);
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/icon.webp
/* harmony default export */ const icon = ({"src":"/_next/static/media/icon.06cd2994.webp","height":630,"width":1122,"blurDataURL":"data:image/webp;base64,UklGRmAAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAALCoTJEweAABreGh7vIBUSWSYSnWptHZRHDoxIGFVAAAAVlA4IBgAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vucwAA="});
;// CONCATENATED MODULE: ./components/Footer.jsx









// importing images

const Footer = ({ home , bgColor  })=>{
    const PF = "https://daddesignsweb.com/images/";
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                backgroundColor: bgColor
            },
            className: "py-8 px-8 flex flex-col items-center",
            children: [
                home && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full lg:w-1000 2xl:w-1200 flex xl:flex-row flex-col justify-center flex-wrap",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 px-6 mb-14 cursor-pointer flex justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>router.push("/"),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: icon,
                                        className: "object-contain w-fit lg:w-400 xl:w-fit",
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-2 px-0 sm:px-3 mb-14 xl:text-left text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-24 my-1 mb-6",
                                    children: "quick links"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/services"),
                                    href: "/services",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Services"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/about"),
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "About"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/contact"),
                                    href: "/contact",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Contact"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-2 px-0 sm:px-3 mb-14 xl:text-left text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-24 my-1 mb-6",
                                    children: "Services"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/web-design-services-v1-a",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Web Design Promo"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/web-design-development"),
                                    href: "/web-design-development",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Web Design & Development"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/logo-design"),
                                    href: "/logo-design",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Logo Design"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/web-application-development"),
                                    href: "/web-application-development",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                        children: "Web Application Development"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/search-engine-optimization"),
                                    href: "/search-engine-optimization",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                        children: "Search Engine Optimization"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/social-media-marketing"),
                                    href: "/social-media-marketing",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                        children: "Social Media Marketing"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/mobile-application-development"),
                                    href: "/mobile-application-development",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Mobile Application Development"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/graphic-design"),
                                    href: "/graphic-design",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Graphic Design"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/video-editing"),
                                    href: "/video-editing",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Video Editing"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/content-writing-publications"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Content Writing & Publications"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/testimonials"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-18 font-bold font-sans my-1 cursor-pointer hover:underline",
                                            children: "Testimonials"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-1 px-0 sm:px-3 mb-14 xl:text-left",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-24 my-1 mb-6 text-center xl:text-left",
                                    children: "Contact"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    rel: "noreferrer noopener",
                                    href: "tel:647-660-1776",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-18 font-bold font-sans my-1 flex xl:justify-start justify-center w-full items-center cursor-pointer hover:underline",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {
                                                className: "mr-3"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "647-660-1776"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    rel: "noreferrer noopener",
                                    href: "mailto:sales@daddesignsweb.com",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-18 font-bold font-sans my-3 flex xl:justify-start justify-center w-full items-center cursor-pointer hover:underline",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {
                                                className: "mr-3"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "sales@daddesignsweb.com"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-18 font-bold font-sans mt-3 flex xl:justify-start justify-center w-full items-start xl:items-center text-center xl:text-left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((LocationOn_default()), {
                                            className: "mr-0 sm:mr-3",
                                            style: {
                                                transform: "scale(1.2)"
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "218-39 New Delhi Drive, Markham ON L3S 0E1"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `w-full lg:w-1000 2xl:w-1400 items-center flex justify-between flex-col xl:flex-row py-6 ${home && "border-t-1 border-black"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-17 font-medium font-sans my-1 text-center",
                                children: "Copyright \xa9 Dad Designs Web - All Rights Reserved 2022"
                            })
                        }),
                        !home && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>router.push("/"),
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    width: "300",
                                    height: "300",
                                    className: "object-contain",
                                    src: icon,
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/terms-conditions"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-14 sm:text-17 font-medium font-sans pr-4 my-1 border-r border-slate-500 cursor-pointer",
                                            children: "Terms & Conditions"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>router.push("/privacy-policy"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-14 sm:text-17 font-medium font-sans my-1 pl-4 cursor-pointer",
                                            children: "Privacy Policy"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center justify-between my-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    rel: "noreferrer noopener",
                                    href: "https://www.instagram.com/daddesignsweb/",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Instagram_default()), {
                                        className: "scale-150 mr-3"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    rel: "noreferrer noopener",
                                    href: "https://www.facebook.com/daddesignsweb",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Facebook_default()), {
                                        className: "scale-150 ml-3"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                !home && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `w-full lg:w-1000 2xl:w-1400 flex md:flex-row flex-col items-center mb-10 xl:mb-0 `,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            rel: "noreferrer noopener",
                            href: "tel:647-660-1776",
                            className: "flex-1 md:border-r-1 md:border-black md:pr-5 flex md:justify-end justify-center font-sans text-18 font-semibold items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Call_default()), {
                                    className: "mr-3"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "647-660-1776"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            rel: "noreferrer noopener",
                            href: "mailto:sales@daddesignsweb.com",
                            className: "flex-1 md:pl-5 flex font-sans text-18 font-semibold items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {
                                    className: "mr-3"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "sales@daddesignsweb.com"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);


/***/ })

};
;