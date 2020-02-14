// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log(res.data.articles);

        // this will make a variable that is an Array set to the key values of an object. This object is the one we are grabbing from the api.
        const articleArrayKeys = Object.keys(res.data.articles);

        //this map now will map the array at each index point, a different key and return...
        articleArrayKeys.map(index => {

            // ... this map. It will go a layer deeper inside at the specific index point and the map that out so that our function can grab the keys it needs to populate the cards with content.
            res.data.articles[index].map(obj => {
                cardContainer.append(createCard(obj));
            })
        })
    })
    .catch(error => {
        console.log('Error: ', error);
    });



    function createCard(obj) {
        const card = document.createElement('div'),
              headline = document.createElement('div'),
              author = document.createElement('div'),
              imgContainer = document.createElement('div'),
              authorImg = document.createElement('img'),
              authorName = document.createElement('span');

        card.append(headline, author);
        author.append(imgContainer, authorName);
        imgContainer.appendChild(authorImg);

        card.classList.add('card');
        headline.classList.add('headline')
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        headline.textContent = obj.headline;
        authorImg.src = obj.authorPhoto;
        authorName.textContent = obj.authorName;

        return card;
    };