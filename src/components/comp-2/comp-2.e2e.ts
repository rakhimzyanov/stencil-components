import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-2></my-comp-2>');

    const element = await page.find('my-comp-2');
    expect(element).toHaveClass('hydrated');
  });
});
