"use strict";
exports.id = 638;
exports.ids = [638];
exports.modules = {

/***/ 8638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ landingSection_LandingSectionOne)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./data/data.js + 36 modules
var data = __webpack_require__(2211);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/VideoCard.jsx




const VideoCard = ({ image , text , bgColor , size , link  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            rel: "noreferrer noopener",
            href: link,
            target: "_blank",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `lg:w-400 2xl:w-450 md:w-550 xl:h-250 md:h-350 w-320 h-250 border-5 border-black  rounded-xl transition-all duration-400 ${(Home_module_default())["video-card"]} overflow-hidden relative cursor-pointer`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        layout: "fill",
                        src: image,
                        className: `${size || "object-cover"} h-full w-full transition-all duration-300 ${bgColor}`,
                        alt: "card"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: `text-center w-full font-sans text-white text-21 font-extrabold absolute ${(Home_module_default()).cardText} px-2`,
                        children: text
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_VideoCard = (VideoCard);

// EXTERNAL MODULE: ./components/Button.jsx
var Button = __webpack_require__(7106);
;// CONCATENATED MODULE: ./landingSection/LandingSectionOne.jsx





const LandingSectionOne = ({ bgColor , logo  })=>{
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)(6);
    const { 0: index2 , 1: setIndex2  } = (0,external_react_.useState)(6);
    const project = data/* projectLinks.slice */.wQ.slice(0, index);
    const project2 = data/* projectLogo.slice */.q9.slice(0, index2);
    const addingContent = ()=>{
        if (index <= 6) {
            setIndex(index + 6);
        } else {
            setIndex(index + 6);
        }
    };
    const addingContent2 = ()=>{
        if (index2 <= 6) {
            setIndex2(index2 + 6);
        } else {
            setIndex2(index2 + 6);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "pt-20 pb-8 px-4 xl:px-10 w-screen min-h-screen flex flex-col items-center",
            style: {
                backgroundColor: bgColor
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "2xl:w-1400 lg:w-900 w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full xl:flex-row flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "2xl:text-100 2xl:leading-80 leading-60 lg:text-65 text-55 pb-4 xl:text-left text-center",
                                    children: "The Work We Have Done"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-sans text-20 xl:text-28 font-semibold xl:font-bold xl:text-left text-center",
                                    children: "Take a look at our portfolio to get an idea of our creativity."
                                })
                            })
                        ]
                    }),
                    !logo && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full flex xl:flex-row flex-col flex-wrap gap-6 justify-center items-center mb-8 mt-16",
                        children: project.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_VideoCard, {
                                link: item.link,
                                image: item.img,
                                text: item.title
                            }, index))
                    }),
                    data/* projectLinks.length */.wQ.length > 6 && project.length !== data/* projectLinks.length */.wQ.length && !logo && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            customFunc: addingContent,
                            text: "view more."
                        })
                    }),
                    logo && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full flex xl:flex-row flex-col flex-wrap gap-6 justify-center items-center mb-8 mt-24",
                        children: project2.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_VideoCard, {
                                size: "object-contain",
                                link: item.link,
                                bgColor: "bg-white",
                                image: item.img,
                                text: item.title
                            }, index))
                    }),
                    data/* projectLogo.length */.q9.length > 6 && project2.length !== data/* projectLogo.length */.q9.length && logo && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            customFunc: addingContent2,
                            text: "view more."
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const landingSection_LandingSectionOne = (LandingSectionOne);


/***/ })

};
;