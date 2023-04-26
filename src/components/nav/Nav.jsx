import React, { useEffect, useState } from "react";

function Nav() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&from=2023-03-26&sortBy=publishedAt&apiKey=09dfed00446e43cc9362f6a575c68a72"
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);

          const startSlice = Math.random(100);
          const endSlice = startSlice + 5;
          setData(res.articles.slice(startSlice, endSlice));
        });
    }, 6 * 1000);
  }, []);

  return (
    <div id="nav">
      <ul>
        {data.map(({ author, content, description, title }) => (
          <li>
            <p>{author}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
