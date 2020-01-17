import { newE2EPage } from '@stencil/core/testing';

describe('my-comp-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-comp-1></my-comp-1>');

    const element = await page.find('my-comp-1');
    expect(element).toHaveClass('hydrated');
  });
});
