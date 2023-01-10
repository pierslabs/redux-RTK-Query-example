import './App.css';
import reactLogo from './assets/react.svg';
import { useGetPostByIdQuery } from './store/api/postsApi';
import { useState } from 'react';

function App() {
  const [id, setId] = useState(1);
  const { data: post = [], isLoading } = useGetPostByIdQuery(id);

  const nextPost = () => {
    setId(id + 1);
  };

  const prevPost = () => {
    if (id <= 1) return;
    setId(id - 1);
  };
  return (
    <div className="App">
      <div className="container">
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1>Redux - RTK Query</h1>
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      </div>

      <section>
        <h3>Loading: {isLoading ? 'true' : 'false'}</h3>
        <p>{JSON.stringify(post)}</p>
      </section>

      <div className="buttonContainer">
        <button onClick={prevPost}> Prev</button>
        <button onClick={nextPost}>Next </button>
      </div>
    </div>
  );
}

export default App;
