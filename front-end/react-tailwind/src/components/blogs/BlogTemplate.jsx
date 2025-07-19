import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import ScrollToTop from '../ScrollToTop';

const BlogTemplate = ({ title, description, image, content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title} | مهرسازه</title>
        <meta name='description' content={description} />
      </Helmet>
      <ScrollToTop />

      <section className='bg-gradient-to-b from-white to-sky-50 py-12' dir='rtl'>
        <div className='mx-auto max-w-6xl px-4'>
          {/* عنوان */}
          <h1 className='font-iransans mb-8 text-center text-3xl leading-relaxed font-extrabold text-blue-800 sm:text-4xl'>
            {title}
          </h1>

          {/* تصویر کاور */}
          <div className='relative mb-10 overflow-hidden rounded-3xl shadow-lg'>
            <img
              src={image}
              alt={title}
              className='h-auto w-full object-cover transition-transform duration-500 hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
          </div>

          {/* متن مقاله */}
          <article className='prose prose-blue prose-img:rounded-xl prose-img:shadow-md prose-p:leading-loose prose-p:text-gray-700 prose-headings:text-blue-800 prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline max-w-none'>
            {content}
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogTemplate;
