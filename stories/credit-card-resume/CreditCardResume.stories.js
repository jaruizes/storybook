import { wcloader } from '../../utils/wc-loader';
import { setCustomElements } from '@storybook/web-components';

import customElements from './credit-card-resume.json';
setCustomElements(customElements);

wcloader('http://microfrontends-cdn.s3-website.eu-west-2.amazonaws.com/web-components/credit-card-resume/credit-card-resume.esm.js');

export default {
  title: 'Cards/Credit Card Resume',
  component: 'credit-card-resume',
  argTypes: {
    name: {
      control: {
        type: 'text'
      }
    },
    number: {
      control: {
        type: 'text',
        required: true
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['0', '1']
      }
    },
    amount: {
      control: {
        type: 'text'
      }
    },
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 10
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};


const CreditCardTemplate = ({ name, number, lastMovement, amount, progress, type }) => `
    <credit-card-resume name="${name}"
                        number="${number}"
                        lastmovement="${lastMovement}"
                        amount="${amount}"
                        progress="${progress}"
                        type="${type}">
      </credit-card-resume>
`;

export const DebitCard = CreditCardTemplate.bind();
DebitCard.storyname = "Debit Card Resume";
DebitCard.args = {
  name: 'Jose Miguel González del Campo',
  number: 'XXXX XXXX XXXX XXXX',
  lastmovement: '3 days ago',
  amount: '500 €',
  progress: '50'
};

export const CreditCard = CreditCardTemplate.bind();
CreditCard.storyname = "Credit Card Resume";
CreditCard.args = {
  ...DebitCard.args,
  type: '1'
};
