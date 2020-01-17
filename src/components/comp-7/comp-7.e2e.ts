import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-7', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-7></my-comp-7>');

    const element = await page.find('my-comp-7');
    expect(element).toHaveClass('hydrated');
  });
});
