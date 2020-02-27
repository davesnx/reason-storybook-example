open BsStorybook;

module Counters = {
  [@react.component]
  let make = () =>
    <Counter onClick={e => Js.log(e)}>
      {React.string("Hello storybook!")}
    </Counter>;
};

let module_ = [%bs.raw "module"];

Story.storiesOf("Counters", module_)
->(Story.add("Select", () => <Counters />));
