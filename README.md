# ReasonReact with Storybook

This is an example on how to run Storybook with ReasonML. Thanks to [bs-storybook](https://github.com/MyWellGiving/bs-storybook).

[Demo](https://reason-storybook.netlify.com/)

## Goal
- Being able to write ReasonML Stories the same way as React
- Provide a minimum reproducible demo
- Showcase the configuration
- Explore current limitations

## Example

This is how to use Story API
```re
open BsStorybook;

module ButtonWithEmoji = {
  [@react.component]
  let make = () =>
    <button onClick={Action.action("I clicked The Button!")}>
      <span role="img" ariaLabel="so cool">
        {React.string({js| 😀 😎 👍 💯 |js})}
      </span>
    </button>;
};

/* module is a reserved keyword in Reason and storybook needs
Node's module for hot-reloading, we get it with bs.raw */
let module_ = [%bs.raw "module"];

Story.storiesOf("Button", module_)
->(Story.add("with Text", () => <ButtonWithEmoji />));
```

[![Netlify Status](https://api.netlify.com/api/v1/badges/afdc27ef-1fc8-4110-b934-eac10f9cbf9f/deploy-status)](https://app.netlify.com/sites/reason-storybook/deploys)
