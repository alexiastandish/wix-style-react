import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import MarketingPageFeaturesFooter from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: MarketingPageFeaturesFooter,
  componentPath: '..',

  componentProps: {
    buttonText: 'Hello World!',
  },

  exampleProps: {
    features: [
      {
        label: 'With features',
        value: [
          {
            id: '0001',
            image: <Image width={60} height={60} />,
            title: 'Remove Wix Ads',
            text:
              "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            id: '0002',
            image: <Image width={60} height={60} />,
            title: 'Connect a Custom Domain',
            text: 'Get your business found with a custom domain.',
          },
          {
            id: '0003',
            image: <Image width={60} height={60} />,
            title: 'Accept Online Payment',
            text: 'Let your customers and clients pay you online at checkout.',
          },
        ],
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${MarketingPageFeaturesFooter.displayName}/`,
      component: <MarketingPageFeaturesFooter buttonText="Click me!" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component is a footer for the MarketingPageLayout component.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: examples.basicExample,
          }),

          example({
            title: 'Sizes',
            text: 'The are 3 sizes: small, medium, large (default)',
            source: examples.sizesExample,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};