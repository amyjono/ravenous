const apiKey = 'uA_yozivLHVRFwB5aZZqEFbQ6lu9hW0JyzeZMuk30t8p2iutGn2QO4ovqmRkheiFklh4H0ql_yv4tkR43K8dYXKnJj9mRb-WDEp4IL3LeRzWcSHVmZOYQeH6eq2GW3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                }));
            } 
        });
    }
};

export default Yelp;