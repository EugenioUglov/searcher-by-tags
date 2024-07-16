class SearcherByTags {
    /// Return a Set with target values.
    /// It's taken user request and search all target values where at least one word of user request match with a tag.
    getTargetValuesByUserRequest({userRequest, targetValuesByTag}) {
        const targetValuesToReturn = new Set();
        const userWords = userRequest.toLowerCase().split(" ");

        
        for (const indexUserWord in userWords) {
            // One user word of phrase.
            const currentUserWord = userWords[indexUserWord];
            // Target values of current tag.
            const currentTargetValuesByTag = targetValuesByTag[currentUserWord];

            if (currentTargetValuesByTag === undefined) continue;

            for (const indexTargetValueByTag in currentTargetValuesByTag) {
                const targetValue = currentTargetValuesByTag[indexTargetValueByTag];

                targetValuesToReturn.add(targetValue);
            }
        }

        return targetValuesToReturn;
    }

    /// Return an array with target values.
    /// It's taken user request and search all target values where at least one word of user request match with a tag. Results are returning in the order from the value with the most matches.
    getTargetValuesByUserRequestWithOrderFromMostRelativeResults({userRequest, targetValuesByTag}) {
        const userWords = userRequest.toLowerCase().split(" ");
        const countMatchedTagsByTargetValue = {};
        
        for (const indexUserWord in userWords) {
            // One user word of phrase.
            const currentUserWord = userWords[indexUserWord];
            // Target values of current tag.
            const currentTargetValuesByTag = targetValuesByTag[currentUserWord];

            if (currentTargetValuesByTag === undefined) continue;

            // Get target values by user word.
            for (const indexTargetValueByTag in currentTargetValuesByTag) {
                const targetValue = currentTargetValuesByTag[indexTargetValueByTag];

                if (countMatchedTagsByTargetValue[targetValue] === undefined) {
                    countMatchedTagsByTargetValue[targetValue] = 0;
                }

                countMatchedTagsByTargetValue[targetValue]++;
            }
        }


        function sortObjectEntries(obj){
            return Object.entries(obj).sort((a,b)=>b[1]-a[1]).map(el=>el[0]);
        }

        return sortObjectEntries(countMatchedTagsByTargetValue);
    }

    /// Return an array with target values.
    /// Just values where all user words are match with some tags of a target value. 
    getTargetValuesByUserRequestExactSearch({userRequest, targetValuesByTag}) {
        let targetValuesToReturn = [];
        const userWords = userRequest.toLowerCase().split(" ");

        for (const indexUserWord in userWords) {
            // One user word of phrase.
            const currentUserWord = userWords[indexUserWord];
            // Target values of current tag.
            const currentTargetValuesByTag = targetValuesByTag[currentUserWord];

            if (currentTargetValuesByTag === undefined) continue;

            if (targetValuesToReturn.length > 0) {
                targetValuesToReturn = getSameItemsOfArrays(currentTargetValuesByTag, targetValuesToReturn);
            }
            else {
                targetValuesToReturn = currentTargetValuesByTag;
            }
        }


        // Get just items that are match with all user words.
        function getSameItemsOfArrays(arr1, arr2) {
            return arr1.filter(item1 => {
                const item2 = arr2.find(item => item === item1);

                return item2;
            });
        }

        return targetValuesToReturn;
    }
}

module.exports = SearcherByTags;