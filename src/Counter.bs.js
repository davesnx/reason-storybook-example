'use strict';

var React = require("react");

function Counter(Props) {
  var onClick = Props.onClick;
  var children = Props.children;
  return React.createElement("div", {
              style: {
                fontSize: "32px"
              }
            }, React.createElement("button", {
                  style: {
                    fontSize: "20px",
                    padding: "8px 16px",
                    borderRadius: "4px"
                  },
                  onClick: onClick
                }, children));
}

var make = Counter;

exports.make = make;
/* react Not a pure module */
