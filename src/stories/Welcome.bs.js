'use strict';

var React = require("react");
var React$1 = require("@storybook/react");
var Button$ReasonStorybookExample = require("../Button.bs.js");

function Welcome$ButtonWithText(Props) {
  return React.createElement(Button$ReasonStorybookExample.make, {
              onClick: (function (e) {
                  console.log(e);
                  return /* () */0;
                }),
              children: null
            }, "Hello", React.createElement("span", {
                  style: {
                    fontWeight: "bold",
                    marginLeft: "4px"
                  }
                }, "storybook!"));
}

var ButtonWithText = {
  make: Welcome$ButtonWithText
};

function Welcome$ButtonWithEmoji(Props) {
  return React.createElement(Button$ReasonStorybookExample.make, {
              onClick: (function (e) {
                  console.log(e);
                  return /* () */0;
                }),
              children: React.createElement("span", {
                    "aria-label": "so cool",
                    role: "img"
                  }, " 😀 😎 👍 💯 ")
            });
}

var ButtonWithEmoji = {
  make: Welcome$ButtonWithEmoji
};

var module_ = module;

React$1.storiesOf("Button", module_).add("with Text", (function (param) {
          return React.createElement(Welcome$ButtonWithText, { });
        })).add("with Emoji", (function (param) {
        return React.createElement(Welcome$ButtonWithEmoji, { });
      }));

exports.ButtonWithText = ButtonWithText;
exports.ButtonWithEmoji = ButtonWithEmoji;
exports.module_ = module_;
/* module_ Not a pure module */
