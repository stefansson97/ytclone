import { getSubscribersShorten } from '../subscribers-and-description';

it('On the individual video page we are setting the number of subscribers to be shorten', () => {

    expect(getSubscribersShorten('2')).toBe('2 subscribers');
    expect(getSubscribersShorten('22')).toBe('22 subscribers');
    expect(getSubscribersShorten('222')).toBe('222 subscribers');
    expect(getSubscribersShorten('2222')).toBe('2.22K subscribers');
    expect(getSubscribersShorten('22222')).toBe('22.2K subscribers');
    expect(getSubscribersShorten('222222')).toBe('222K subscribers');
    expect(getSubscribersShorten('2222222')).toBe('2.22M subscribers');
    expect(getSubscribersShorten('22222222')).toBe('22.2M subscribers');
    expect(getSubscribersShorten('222222222')).toBe('222M subscribers');
    expect(getSubscribersShorten('2222222222')).toBe('2.22B subscribers');
    expect(getSubscribersShorten('22222222222')).toBe('22.2B subscribers');
    expect(getSubscribersShorten('222222222222')).toBe('222B subscribers');

});