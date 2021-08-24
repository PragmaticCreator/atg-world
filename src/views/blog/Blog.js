import './Blog.scss';
import GroupBanner from 'components/groupBanner';
import StoryCard from 'components/storyCard';
import ActivityCard from 'components/activityCard';
import PostFilter from 'components/postFilter';
import data from 'data/db.json';

const Blog = () => {
  return (
    <div className='blog'>
      {/* Blog's group banner */}
      <GroupBanner />

      <div className='blog__container container-xl p-0 px-md-3 mt-2'>
        {/* Navigation for post types */}
        <PostFilter />

        <div className='d-flex gap-5'>
          <div className='blog__data col-12 col-md-8 '>
            {/* Blog Articles */}
            <StoryCard
              blogs={data.blogs.filter((blog) => blog.category === 'Article')}
            />
            <StoryCard
              blogs={data.blogs.filter((blog) => blog.category === 'Education')}
            />
            <ActivityCard
              blogs={data.blogs.filter((blog) => blog.category === 'Meetup')}
            />
            <ActivityCard
              blogs={data.blogs.filter((blog) => blog.category === 'Job')}
            />
          </div>

          {/* Blog Location */}
          <div className='blog__location d-none col-md-3 d-md-flex flex-column'>
            <div className='blog__location__search d-flex'>
              <i className='bi bi-geo-alt-fill'></i>
              <input
                className='form-control bg-primary '
                type='search'
                placeholder='Enter your location'
              />
            </div>
            <div className='blog__location__note d-flex mt-4 text-grey'>
              <i class='bi bi-exclamation-circle me-2'></i>
              <p>
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
