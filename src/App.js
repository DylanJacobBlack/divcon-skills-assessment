import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data
            .sort((a, b) => b.id - a.id)
            .slice(0, 21)
            .map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))
        )
      );
  }, [setPosts]);

  return (
    <div className="container p-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>{posts}</tbody>
      </table>
    </div>
  );
}

export default App;
