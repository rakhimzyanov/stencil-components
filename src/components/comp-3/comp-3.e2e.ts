import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-3', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-3></my-comp-3>');

    const element = await page.find('my-comp-3');
    expect(element).toHaveClass('hydrated');
  });
});
