import './PostFilter.scss';

const PostFilter = () => {
  return (
    <div className='filter'>
      <nav className='filter__nav navbar  navbar-light bg-primary text-dark py-4 '>
        {/* Mobile Filter */}
        <div className='container-fluid px-4 d-md-none d-flex justify-content-between align-items-center'>
          <ul className='navbar-nav'>
            <li className='nav-item fw-bolder'>
              <span>Posts(368)</span>
            </li>
          </ul>
          <button className='nav-link  btn btn-secondary text-dark py-1'>
            Filter: All
          </button>
        </div>

        {/* Desktop Filter */}
        <div className='filter__nav__desktop container-fluid p-0 d-none d-md-flex align-items-center justify-content-between '>
          <ul className='filter__nav__links d-flex p-0 m-0 '>
            <li className='nav-link'><span className='filter__nav--active text-dark'>All Posts(32)</span></li>
            <li className='nav-link'><span>Article</span></li>
            <li className='nav-link'><span>Event</span></li>
            <li className='nav-link'><span>Education</span></li>
            <li className='nav-link'><span>Job</span></li>
          </ul>

          <div className='filter__nav__btns d-flex gap-3'>
          <button className='btn btn-secondary dropdown-toggle '>
            <span>Write a Post</span>
          </button>
          <button className='btn btn-blue'>
            <i className='bi bi-people-fill'></i>
            <span>Join Group</span>
          </button>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default PostFilter;
