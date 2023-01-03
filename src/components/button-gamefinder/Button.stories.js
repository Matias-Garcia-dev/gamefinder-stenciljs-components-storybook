import {Button} from './button';

export default {
    title: 'GameFinder/Button',
    component: Button,
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
      lable: {control: 'text'},
    },
  };

  const Template = ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return `<button-gamefinder variant="${args.variant}" size="${args.size}">${label}</button-gamefinder>`;
  };

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
    variant: 'primary',
    label: 'Button',
};