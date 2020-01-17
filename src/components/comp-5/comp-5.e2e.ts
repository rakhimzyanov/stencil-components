import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-5', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-5></my-comp-5>');

    const element = await page.find('my-comp-5');
    expect(element).toHaveClass('hydrated');
  });
});
