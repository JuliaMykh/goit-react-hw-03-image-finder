import axios from "axios";

const url = 'https://pixabay.com/api/';
const key = '29178244-3f7bc3a9b23228b3a0c269efa';
const filter = `&image_type=photo&orientation=horizontal&per_page=12`;

export const fetchImages = async (values, page=1) => {
    return await axios.get(`${url}?q=${values}&page=${page}&key=${key}${filter}`).then(response => response.data);
}