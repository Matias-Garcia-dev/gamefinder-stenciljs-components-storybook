import {buttonGamefinder} from './button';

export default {
    title: 'Example/Button',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
      label: { control: 'text' },
      onClick: { action: 'onClick' },
      primary: { control: 'boolean' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
  };