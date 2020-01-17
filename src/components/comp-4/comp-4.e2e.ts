import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-4', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-4></my-comp-4>');

    const element = await page.find('my-comp-4');
    expect(element).toHaveClass('hydrated');
  });
});
