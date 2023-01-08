
export default {
    title: 'GameFinder/Button',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
      disabled: { Boolean: 'false' },
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary'],
      },
      onClick: { action: 'onClick' },
      size: {
        control: { type: 'select' },
        options: ['small', 'large'],
      },
    },
  };

  const Template = ({...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return `<button-gamefinder>Game finder</button-gamefinder>`;
  };

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
    variant: 'primary',
    label: 'Button',
};