import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-9', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-9></my-comp-9>');

    const element = await page.find('my-comp-9');
    expect(element).toHaveClass('hydrated');
  });
});
