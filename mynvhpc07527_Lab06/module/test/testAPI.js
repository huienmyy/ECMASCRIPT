import Comment from '../comment/comment.js';
let demoAPI = async () => {
    try {
      const oneGetComment = await Comment.getOne(1);
      
      console.log("Get one Comment:", oneGetComment);
  
      const allGetComment = await Comment.getAll();
      console.log("Get all Comment:", allGetComment);
    } catch (error) {
      console.error("Error", error);
    }
  };
export default demoAPI;
