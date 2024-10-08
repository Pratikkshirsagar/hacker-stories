const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Redux",
    url: "https://reduxjs.org",
    author: "Dan Abramov, Andrew Cleark",
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

const App = () => {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />
    </div>
  );
};

const Search = () => (
  <div>
    <label htmlFor='search'>Search: </label>
    <input type='text' id='search' />
  </div>
);

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectId}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
);

export default App;
