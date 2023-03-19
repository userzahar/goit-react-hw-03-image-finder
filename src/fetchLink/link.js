const ADD_KEY = '33289628-97fffc14136600725dd3f07c9';
const BASE_URL = 'https://pixabay.com/api/';

export const getImage = searchText => {
  fetch(
    `${BASE_URL}?q=${searchText}&key=${ADD_KEY}&page=1&image_type=photo&orientation=horizontal&per_page=12`
  );
};
