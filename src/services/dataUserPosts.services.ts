import { Users } from '../entities/Users';

const dataUserPosts = async (user: Users) => {
  const dataUser = await user.posts;

  const review = dataUser.filter((item) => item.type.type === 'resenha').length;
  const comment = dataUser.filter((item) => item.type.type === 'comentario').length;
  const notes = dataUser.filter((item) => item.type.type === 'marcacao').length;

  return {
    review_posts: review,
    comment_posts: comment,
    notes_posts: notes,
  };
};

export default dataUserPosts;
