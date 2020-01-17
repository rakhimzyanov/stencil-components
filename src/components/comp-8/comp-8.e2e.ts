import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-8', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-8></my-comp-8>');

    const element = await page.find('my-comp-8');
    expect(element).toHaveClass('hydrated');
  });
});
