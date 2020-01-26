import React from 'react';
import { articles } from '../data/articles.json';
import ArticleThumbnail from '../components/ArticleThumbnail';

const Campaign = () => (
  <>
    <h1>Nasze artykuły</h1>
    <h2 className="campaign__h2">Tutaj przeczytasz wszystkie nasze artykuły</h2>
    <div className="thumbnail-container">
      {articles.map((article) => {
        const link = `/kampania/${article.header}`;
        return (
          <ArticleThumbnail
            key={article.header}
            thumbnail={article.thumbnail}
            header={article.header}
            description={article.description}
            link={link}
          />
        );
      })}
    </div>
  </>
);

export default Campaign;