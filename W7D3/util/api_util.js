const APIUtil = {
  fetchSearchGiphys (searchTerm) {
    return $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=2`
    });
  }
};

// export const fetchSearchGiphys = searchTerm => {
//   return $.ajax({
//   method: 'GET',
//   url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=2`
//   });
// };

module.exports = APIUtil;
