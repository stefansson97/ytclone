export default function handleSearchQuery(query) {
    return (query.substring('?search_query='.length).replace(/\+/g, ' ')); //replaceAll() still throwing an error
}