import * as React from 'react';
import MarketingPageFeaturesFooter from '..';
import { marketingPageFeaturesFooterTestkitFactory } from '../../../testkit';
import { marketingPageFeaturesFooterTestkitFactory as marketingPageFeaturesFooterEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { marketingPageFeaturesFooterTestkitFactory as marketingPageFeaturesFooterPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import Image from '../../Image/Image';

function marketingPageFeaturesFooterWithMandatoryProps() {
  return <MarketingPageFeaturesFooter />;
}

function marketingPageFeaturesFooterWithAllProps() {
  return (
    <MarketingPageFeaturesFooter
      dataHook="dataHook"
      className="className"
      size="large"
    //   features={[
    //   {
    //     id: '0001',
    //     image: <Image width={60} height={60} />,
    //     title: 'Remove Wix Ads',
    //     text: "Enjoy a website that's completely your own brand by removing Wix ads.",
    //   },
    //   {
    //     id: '0002',
    //     image: <Image width={60} height={60} />,
    //     title: 'Connect a Custom Domain',
    //     text: "Get your business found with a custom domain.",
    //   },
    //   {
    //     id: '0003',
    //     image: <Image width={60} height={60} />,
    //     title: 'Accept Online Payment',
    //     text: "Let your customers and clients pay you online at checkout.",
    //   },
    // ]}
    />
  );
}

async function testkits() {
  const testkit = marketingPageFeaturesFooterTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = marketingPageFeaturesFooterEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await marketingPageFeaturesFooterPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
