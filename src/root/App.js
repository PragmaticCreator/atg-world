import Blog from 'views/blog';
import Header from 'components/header';

function App() {
  return (
    <main className="d-flex justify-content-center">
      <div className='container-xxl p-0 m-0'>
        <Header />
        <Blog />
      </div>
    </main>
  );
}

export default App;
