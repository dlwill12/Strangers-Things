const COHORT_NAME = "2209-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const FetchPost = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const results = await response.json();
    // console.log(allPost);
    const data = results.data.posts;
    return data;
    // console.log(data);
  } catch (err) {
    console.error(err);
  }
  return;
};

export default FetchPost;
