import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-6', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-6></my-comp-6>');

    const element = await page.find('my-comp-6');
    expect(element).toHaveClass('hydrated');
  });
});
