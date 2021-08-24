import './ActivityCard.scss';
import PropTypes from 'prop-types';

const ActivityCard = ({ blogs }) => {
  return (
    <div className='activity'>
      {blogs.map((blog, index) => {
        return (
          <div key={index} className='activity__card card'>
            <img
              className={blog.hasOwnProperty('image') ? '' : 'd-none'}
              src={blog.image}
              alt=''
            />
            <div className='activity__card__data card-body'>
              <div className='activity__card__category d-flex align-content-center'>
                <i
                  className={
                    blog.category === 'Job'
                      ? 'bi bi-briefcase-fill'
                      : 'bi bi-calendar-event'
                  }
                ></i>
                <span>{blog.category}</span>
              </div>
              <div className='activity__card__title d-flex align-items-center justify-content-between gap-3'>
                <h4 className='card-title'>{blog.title}</h4>
                
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
              <div className='activity__card__pins d-flex justify-content-start gap-4'>
                <div className='d-flex align-items-center'>
                  <i
                    className={
                      blog.category === 'Job'
                        ? 'bi bi-briefcase'
                        : 'bi bi-calendar2-event'
                    }
                  ></i>
                  <span>
                    {blog.category === 'Job' ? blog.company : blog.date}
                  </span>
                </div>
                <div className='d-flex align-items-center'>
                  <i className='bi bi-geo-alt-fill'></i>
                  <span>{blog.location}</span>
                </div>
              </div>
              <button
                className={
                  blog.category === 'Job'
                    ? 'activity__card__cta btn btn-outline-border-light fw-bold text-green'
                    : 'activity__card__cta btn btn-outline-border-light fw-bold text-orange'
                }
              >
                {blog.category === 'Job'
                  ? 'Apply on Timesjobs'
                  : 'Visit Website'}
              </button>

              <div className='activity__card__footer d-flex justify-content-between'>
                <div className='d-flex  align-items-center gap-2'>
                  <img className='activity__card__profile' src={blog.profileImg} alt='Profile'/>
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

ActivityCard.prototypes = {
  blogs: PropTypes.array.isRequired,
};

export default ActivityCard;
