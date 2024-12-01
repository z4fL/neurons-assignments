export default function mapUsers(users) {
  return {
    data: users,
    count: users.length,
  };
}

export function mapArticles(articles) {
  return {
    data: articles,
    count: articles.length,
  };
}
