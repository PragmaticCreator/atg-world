import './StoryCard.scss';
import PropTypes from 'prop-types';

const StoryCard = ({ blogs }) => {
  return (
    <div className='story'>
      {blogs.map((blog, index) => {
        return (
          <div key={index} className='story__card card'>
            <img src={blog.image} alt='' />
            <div className='story__card__data card-body'>
              <div className='story__card__category d-flex align-content-center'>
                <i
                  className={
                    blog.category === 'Article'
                      ? 'bi bi-brush-fill'
                      : 'bi bi-book-half'
                  }
                ></i>
                <span className='text-info'>{blog.category}</span>
              </div>
              <div className='story__card__title d-flex align-items-center justify-content-between gap-3 '>
                <h5 className='card-title'>{blog.title}</h5>
                <div class="dropdown">
                  <button class="btn btn-primary border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className='bi bi-three-dots'></i>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><span class="dropdown-item">Edit</span></li>
                    <li><span class="dropdown-item">Report</span></li>
                    <li><span class="dropdown-item">Option 3</span></li>
                  </ul>
                </div>
              </div>
              <p className='card-text'>{blog.body}</p>

              <div className='d-flex justify-content-between'>
                <div className='d-flex  align-items-center gap-2'>
                  <img className='story__card__profile' src={blog.profileImg} alt="Profile" />
                  <div className='d-flex flex-column'>
                    <span>{blog.author}</span>
                    <small>{blog.views}</small>
                  </div>
                </div>

                <button className='btn btn-secondary'>
                  <i className='bi bi-share-fill me-2 me-md-0'></i>
                  <span className='d-md-none'>Share</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

StoryCard.prototypes = {
  blogs: PropTypes.array.isRequired,
};

export default StoryCard;
