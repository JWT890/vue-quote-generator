import { mount } from '@vue/test-utils';
import QuoteGenerator from '@/components/QuoteGenerator.vue';

describe('QuoteGenerator.vue', () => {
it('should set the quote to a random quote from the array', async () => {
    const wrapper = mount(QuoteGenerator);
    await wrapper.vm.getQuote();
    expect(wrapper.vm.quote).toMatchObject({ text: expect.any(String), author: expect.any(String) });
  });
})