export default function handleSearchQuery(query) {
    return (query.substring('?search_query='.length).replace('+',' '));
}