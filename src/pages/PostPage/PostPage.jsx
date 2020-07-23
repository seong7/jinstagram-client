import React, { useEffect } from 'react';
import { PageLayout } from '../styled';
import { Post } from '../../containers';

const title = 'Jinstagram';

const PostPage = () => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <PageLayout>
      <Post />
    </PageLayout>
  );
};

export default PostPage;
