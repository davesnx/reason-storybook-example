open ReactDOMRe;

[@genType "Button"]
[@react.component]
let make = (~onClick, ~children) => {
  <div style={Style.make(~fontSize="32px", ())}>
    <button
      style={Style.make(
        ~borderRadius="4px",
        ~fontSize="20px",
        ~padding="8px 16px",
        (),
      )}
      onClick>
      children
    </button>
  </div>;
};
