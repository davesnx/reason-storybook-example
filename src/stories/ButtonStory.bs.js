'use strict';

var React = require("react");
var React$1 = require("@storybook/react");
var Knobs$BsStorybook = require("bs-storybook/src/knobs.js");
var AddonActions = require("@storybook/addon-actions");
var Button$ReasonStorybookExample = require("../components/Button.bs.js");

function ButtonStory$ButtonWithText(Props) {
  var greet = Props.greet;
  return React.createElement(Button$ReasonStorybookExample.make, {
              onClick: AddonActions.action("I Clicked The Button!"),
              children: null
            }, "Hello", React.createElement("span", {
                  style: {
                    fontWeight: "bold",
                    margin: "0 4px"
                  }
                }, greet), "!");
}

var ButtonWithText = {
  make: ButtonStory$ButtonWithText
};

function ButtonStory$ButtonWithEmoji(Props) {
  return React.createElement(Button$ReasonStorybookExample.make, {
              onClick: AddonActions.action("I clicked The Button!"),
              children: React.createElement("span", {
                    "aria-label": "so cool",
                    role: "img"
                  }, " 😀 😎 👍 💯 ")
            });
}

var ButtonWithEmoji = {
  make: ButtonStory$ButtonWithEmoji
};

var module_ = module;

React$1.storiesOf("Button", module_).add("with Text", (function (param) {
          return React.createElement(ButtonStory$ButtonWithText, {
                      greet: Knobs$BsStorybook.text("greeting", "storybook", /* () */0)
                    });
        })).add("with Emoji", (function (param) {
        return React.createElement(ButtonStory$ButtonWithEmoji, { });
      }));

exports.ButtonWithText = ButtonWithText;
exports.ButtonWithEmoji = ButtonWithEmoji;
exports.module_ = module_;
/* module_ Not a pure module */
