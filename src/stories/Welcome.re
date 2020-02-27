open BsStorybook;
open ReactDOMRe;

module ButtonWithText = {
  [@react.component]
  let make = () =>
    <Button onClick={e => Js.log(e)}>
      {React.string("Hello")}
      <span style={Style.make(~fontWeight="bold", ~marginLeft="4px", ())}>
        {React.string("storybook!")}
      </span>
    </Button>;
};

module ButtonWithEmoji = {
  [@react.component]
  let make = () =>
    <Button onClick={e => Js.log(e)}>
      <span role="img" ariaLabel="so cool">
        {React.string({js| 😀 😎 👍 💯 |js})}
      </span>
    </Button>;
};

let module_ = [%bs.raw "module"];

Story.storiesOf("Button", module_)
->(Story.add("with Text", () => <ButtonWithText />))
->(Story.add("with Emoji", () => <ButtonWithEmoji />));
