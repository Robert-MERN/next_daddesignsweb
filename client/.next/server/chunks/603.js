"use strict";
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 8603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_SectionFive)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-material-ui-carousel"
var external_react_material_ui_carousel_ = __webpack_require__(6152);
var external_react_material_ui_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_material_ui_carousel_);
// EXTERNAL MODULE: ./data/data.js + 36 modules
var data = __webpack_require__(2211);
;// CONCATENATED MODULE: ./components/Video.jsx


const Video = ({ source , poster  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "myVideoFile",
            className: "xl:w-400 md:w-500 sm:w-320 w-full h-250 border-4 border-black rounded-2xl cursor-pointer bg-black",
            children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                poster: poster,
                playsInline: true,
                className: "object-contain w-full h-full",
                controls: true,
                disablePictureInPicture: true,
                src: source
            })
        })
    });
};
/* harmony default export */ const components_Video = (Video);

// EXTERNAL MODULE: ./components/Button.jsx
var Button = __webpack_require__(7106);
;// CONCATENATED MODULE: ./sections/SectionFive.jsx








const SectionFive = ({ landingPage , bgColor , services , top  })=>{
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(6);
    const project = data/* videoLinks.slice */.A1.slice(0, index);
    const project2 = data/* videoLinks2.slice */.Wf.slice(0, index);
    const addingContent = ()=>{
        if (index <= 9) {
            setIndex(index + 7);
        } else {
            setIndex(index + 6);
        }
    };
    const PF = "https://daddesignsweb.com/images/";
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                backgroundColor: bgColor
            },
            className: `"w-full min-h-100 flex flex-col ${landingPage ? "justify-between" : "justify-center"} items-center ${top ? "pt-32 pb-8" : "py-8"} px-8" `,
            children: [
                !services && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-46 xl:text-72 2xl:text-100 text-center",
                    children: "Our Happy Customers"
                }),
                !services && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_material_ui_carousel_default()), {
                    className: "my-8",
                    animation: "slide",
                    duration: 1700,
                    navButtonsAlwaysInvisible: true,
                    cycleNavigation: true,
                    autoPlay: false,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "2xl:w-1000 xl:w-800 w-full p-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12",
                                    children: "\u201CI hate outsourcing anything. I never trust anyone and always firmly believe that I can do everything myself. Well. I just learned a lesson. I'm starting my own small business and am constantly overloaded with work. My friend suggested I hand over my social media marketing to Dad Designs Web, who she uses. I thought that was stupid. I could just do it myself. I lost so much sleep and worked way more hours than I needed to until I finally gave in and agreed to try them out. Absolutely no regrets! I can't believe I ever lived without them. Their team is quick, efficient, and so easy to work with. I would never trust anyone else but them to handle my social media.\u201D"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-38 text-center",
                                    children: "-Shauna T."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-sans font-bold text-24 text-amber-200 text-center",
                                    children: "Business Owner."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "xl:w-1000 w-full p-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12",
                                    children: "\u201CWorking with Dad Designs Web really was like working with your dad! - My whole experience from start to finish was impressive. I had a complex, multi-page storefront that I needed built and they were able to deliver above and beyond what I thought was possible for the pricing. Since they built my site I asked if they could also do a logo redesign for me as well. The team worked with me to make sure I got exactly what I wanted.\u201D"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-38 text-center",
                                    children: "-Rayna P."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-sans font-bold text-24 text-amber-200 text-center",
                                    children: "E-Commerce Store Owner"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "xl:w-1000 w-full p-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12",
                                    children: "\u201CI have no experience in web design. I needed a quick fix for a client and my usual developer was unavailable. I tried to figure out how to do it myself but no luck. Wasn't really sure who to turn to, and stumbled across Dad Designs. They were super helpful and finished the landing page I needed before the requested delivery date. No complaints here.\u201D"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-38 text-center",
                                    children: "-TIM R."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-sans font-bold text-24 text-amber-200 text-center",
                                    children: "Agency Owner"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "xl:w-1000 w-full p-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12",
                                    children: "\u201CThe main thing I'd like to compliment here is the customer service and communication! From the beginning, I felt like they cared and I wasn't just another number. They made sure they fully understood exactly what I wanted for my site and even made suggestions I hadn't thought of to make it better. Multiple progress check ins to make sure everything was what I wanted. The end result was a beautiful site that showcased my product and its offerings better than I could have imagined.\u201D"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-38 text-center",
                                    children: "-Chris T."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-sans font-bold text-24 text-amber-200 text-center",
                                    children: "Startup Founder."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "xl:w-1000 w-full p-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "xl:text-24 text-21 font-sans xl:font-semibold font-medium text-center mb-12",
                                    children: "\u201CI originally came to Dad Designs Web for what I thought would be a simple, one and done website I needed built for an event I was hosting. I was so happy with the service and the end product that I stayed for marketing and design services as well. The team I was working with had already taken the effort to fully understand my brand and value prop, and communicated it well, so why wouldn't I want to continue working with them?\u201D"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-38 text-center",
                                    children: "-Tara C."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-sans font-bold text-24 text-amber-200 text-center",
                                    children: "Health Coach."
                                })
                            ]
                        })
                    ]
                }),
                !services && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full xl:w-1000 2xl:1200 2xl:w-1400 flex xl:flex-row flex-col flex-wrap gap-6 justify-center items-center mb-8 mt-28 px-3",
                    children: project.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Video, {
                            poster: item.poster,
                            source: item.src
                        }, index))
                }),
                services && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "2xl:w-1400 lg:w-900 w-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex w-full xl:flex-row flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "2xl:text-100 2xl:leading-80 leading-60 text-72 py-4 xl:text-left text-center",
                                        children: "The Work We Have Done"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-sans text-20 xl:text-28 font-semibold xl:font-bold py-8 xl:text-left text-center",
                                        children: "Take a look at our portfolio to get an idea of our creativity."
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "px-3 w-full xl:1200 2xl:w-1400 flex xl:flex-row flex-col flex-wrap gap-6 justify-center items-center mb-8 mt-28",
                            children: project2.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Video, {
                                    source: item
                                }, index))
                        })
                    ]
                }),
                !services && data/* videoLinks.length */.A1.length > 6 && project.length !== data/* videoLinks.length */.A1.length && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        customFunc: addingContent,
                        text: "view more."
                    })
                }),
                services && data/* videoLinks2.length */.Wf.length > 6 && project2.length !== data/* videoLinks2.length */.Wf.length && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        customFunc: addingContent,
                        text: "view more."
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const sections_SectionFive = (SectionFive);


/***/ })

};
;