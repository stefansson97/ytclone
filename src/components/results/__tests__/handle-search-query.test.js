import handleSearchQuery from '../handle-search-query';

it('Making sure our search query is properly set from the URL', () => {

    expect(handleSearchQuery('?search_query=a+b+c')).toBe('a b c');

    //multiple whitespaces
    expect(handleSearchQuery('?search_query=+a+++b++c++')).toBe(' a   b  c  ');
    
});