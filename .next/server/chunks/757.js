"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(195);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(368);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.fab);
const FormSignUp = (props)=>{
    var ref, ref1, ref2, ref3, ref4, ref5, ref6;
    const { inscription , setInscription  } = props;
    // form validation rules 
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
        gender: yup__WEBPACK_IMPORTED_MODULE_3__.string().required('Gender is required').nullable(),
        dob: yup__WEBPACK_IMPORTED_MODULE_3__.string().required('Date of Birth is required').matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        email: yup__WEBPACK_IMPORTED_MODULE_3__.string().required('Email is required').email('Email is invalid'),
        confirmEmail: yup__WEBPACK_IMPORTED_MODULE_3__.string().oneOf([
            yup__WEBPACK_IMPORTED_MODULE_3__.ref('email'),
            null
        ], 'Email must match').required('Confirm Email is required'),
        password: yup__WEBPACK_IMPORTED_MODULE_3__.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: yup__WEBPACK_IMPORTED_MODULE_3__.string().oneOf([
            yup__WEBPACK_IMPORTED_MODULE_3__.ref('password'),
            null
        ], 'Passwords must match').required('Confirm Password is required'),
        acceptTerms: yup__WEBPACK_IMPORTED_MODULE_3__.bool().oneOf([
            true
        ], 'Accept Ts & Cs is required')
    });
    const formOptions = {
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(validationSchema)
    };
    // get functions to build form with useForm() hook
    const { register , handleSubmit , reset , formState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)(formOptions);
    const { errors  } = formState;
    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        setInscription(false);
        return false;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `mt-6 mb-3 pb-3 border-b border-b-slate-600 flex flex-col space-y-2`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: `uppercase px-4 py-3 border border-google rounded-md`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                icon: [
                                    'fab',
                                    'google'
                                ],
                                className: `mr-2 text-google`
                            }),
                            " Sign Up with Google"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: `uppercase px-4 py-3 border border-facebook rounded-md`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                icon: [
                                    'fab',
                                    'facebook'
                                ],
                                className: `mr-2 text-facebook`
                            }),
                            "Sign Up with Facebook"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-full my-6 border-b border-b-slate-600 pb-6 space-y-2`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        name: "email",
                                        type: "text",
                                        ...register('email'),
                                        className: `px-4 py-2 rounded-md form-control ${errors.email ? 'is-invalid border-danger border' : ''}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-1 text-0.7 text-danger uppercase invalid-feedback",
                                        children: (ref = errors.email) === null || ref === void 0 ? void 0 : ref.message
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Confirm Email"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        name: "email",
                                        type: "text",
                                        ...register('confirmEmail'),
                                        className: `px-4 py-2 rounded-md form-control ${errors.confirmEmail ? 'is-invalid border-danger border' : ''}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-1 text-0.7 text-danger uppercase invalid-feedback",
                                        children: (ref1 = errors.confirmEmail) === null || ref1 === void 0 ? void 0 : ref1.message
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-full my-6 border-b border-b-slate-600 pb-6 space-y-2`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Password"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        name: "password",
                                        type: "password",
                                        ...register('password'),
                                        className: `px-4 py-2 rounded-md form-control ${errors.password ? 'is-invalid border-danger border' : ''}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-1 text-0.7 text-danger uppercase invalid-feedback",
                                        children: (ref2 = errors.password) === null || ref2 === void 0 ? void 0 : ref2.message
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Confirm Password"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        name: "confirmPassword",
                                        type: "password",
                                        ...register('confirmPassword'),
                                        className: `px-4 py-2 rounded-md form-control ${errors.confirmPassword ? 'is-invalid border-danger border' : ''}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-1 text-0.7 text-danger uppercase invalid-feedback",
                                        children: (ref3 = errors.confirmPassword) === null || ref3 === void 0 ? void 0 : ref3.message
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-full my-6 border-b border-b-slate-600 pb-6 space-y-2`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Date of Birth"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "dob",
                                    type: "date",
                                    ...register('dob'),
                                    className: `px-4 py-2 rounded-md form-control ${errors.dob ? 'is-invalid border-danger border' : ''}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-1 text-0.7 text-danger uppercase invalid-feedback",
                                    children: (ref4 = errors.dob) === null || ref4 === void 0 ? void 0 : ref4.message
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `w-full my-6 border-b border-b-slate-600 pb-6 space-y-2`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Gender"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `flex space-x-4 px-4 py-2 rounded-md form-control ${errors.gender ? 'is-invalid border-danger border' : ''}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "radio",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        ...register('gender', {
                                                            required: true
                                                        }),
                                                        type: "radio",
                                                        name: "gender",
                                                        value: "Male",
                                                        className: "mr-2 form-check-input",
                                                        id: "male"
                                                    }),
                                                    "Male"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "radio",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        ...register('gender', {
                                                            required: true
                                                        }),
                                                        type: "radio",
                                                        name: "gender",
                                                        value: "Female",
                                                        className: "mr-2 form-check-input",
                                                        id: "female"
                                                    }),
                                                    "Female"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "radio",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        ...register('gender', {
                                                            required: true
                                                        }),
                                                        type: "radio",
                                                        name: "gender",
                                                        value: "Non-binary",
                                                        className: "mr-2 form-check-input",
                                                        id: "non-binary"
                                                    }),
                                                    "Non-binary"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-1 text-0.7 text-danger uppercase invalid-feedback",
                                    children: (ref5 = errors.gender) === null || ref5 === void 0 ? void 0 : ref5.message
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-6 form-group form-check",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "acceptTerms",
                                type: "checkbox",
                                ...register('acceptTerms'),
                                id: "acceptTerms",
                                className: `p-1 mr-2 form-check-input ${errors.acceptTerms ? 'is-invalid border-danger border' : ''}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "acceptTerms",
                                className: "form-check-label",
                                children: "Accept Terms & Conditions"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-1 text-0.7 text-danger uppercase invalid-feedback",
                                children: (ref6 = errors.acceptTerms) === null || ref6 === void 0 ? void 0 : ref6.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex space-x-4 form-group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "px-6 py-4 text-white uppercase bg-blue-400 rounded-lg",
                                children: "Register"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: ()=>reset()
                                ,
                                className: "px-6 py-4 text-white uppercase bg-gray-700 rounded-lg",
                                children: "Reset"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSignUp);

});

/***/ })

};
;