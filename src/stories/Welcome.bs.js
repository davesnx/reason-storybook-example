'use strict';

var React = require("react");
var React$1 = require("@storybook/react");
var Counter$ReasonStorybookExample = require("../Counter.bs.js");

function Welcome$Counters(Props) {
  return React.createElement(Counter$ReasonStorybookExample.make, {
              onClick: (function (e) {
                  console.log(e);
                  return /* () */0;
                }),
              children: "Hello storybook!"
            });
}

var Counters = {
  make: Welcome$Counters
};

var module_ = module;

React$1.storiesOf("Counters", module_).add("Select", (function (param) {
        return React.createElement(Welcome$Counters, { });
      }));

exports.Counters = Counters;
exports.module_ = module_;
/* module_ Not a pure module */
