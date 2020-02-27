open BsStorybook;
open ReactDOMRe;

module ButtonWithText = {
  [@react.component]
  let make = (~greet) =>
    <Button onClick={Action.action("I Clicked The Button!")}>
      {React.string("Hello")}
      <span style={Style.make(~fontWeight="bold", ~margin="0 4px", ())}>
        {React.string(greet)}
      </span>
      {React.string("!")}
    </Button>;
};

module ButtonWithEmoji = {
  [@react.component]
  let make = () =>
    <Button onClick={Action.action("I clicked The Button!")}>
      <span role="img" ariaLabel="so cool">
        {React.string({js| 😀 😎 👍 💯 |js})}
      </span>
    </Button>;
};

let module_ = [%bs.raw "module"];

Story.storiesOf("Button", module_)
->(
    Story.add("with Text", () =>
      <ButtonWithText
        greet={Knobs.text(~label="greeting", ~defaultValue="storybook", ())}
      />
    )
  )
->(Story.add("with Emoji", () => <ButtonWithEmoji />));
