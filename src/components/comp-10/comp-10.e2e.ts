import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-10', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-10></my-comp-10>');

    const element = await page.find('my-comp-10');
    expect(element).toHaveClass('hydrated');
  });
});
