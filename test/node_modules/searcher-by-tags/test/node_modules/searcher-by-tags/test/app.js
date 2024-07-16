const SearcherByTags = require('searcher-by-tags');
const searcherByTags = new SearcherByTags();

console.log(searcherByTags.getTargetValuesByUserRequestExactSearch(
    {
        'userRequest': 'hello all all everyone', 
        'targetValuesByTag': {
            'all': ['a','l','l'],
            'hello': ['h', 'e', 'l', 'l', 'o']
        }
    }
));