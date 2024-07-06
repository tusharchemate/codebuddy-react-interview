const API_BASE_URL = "https://codebuddy.review";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const postData = await response.json();
    return postData?.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
