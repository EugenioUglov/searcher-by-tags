# searcher-by-tags
Class with functions that are searching tags in user request and return target values depends of tags.

Install NPM package:
```
npm install searcher-by-tags
```

Example of usage:
```javascript
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
```
