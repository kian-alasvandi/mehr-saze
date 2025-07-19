import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 'blog-1',
    title: 'چگونه یک سیستم امنیتی خانگی انتخاب کنیم؟',
    excerpt:
      'در این مقاله یاد می‌گیرید که چطور یک سیستم امنیتی مناسب برای خانه یا محل کار خود انتخاب کنید...',
    image: '/images/blog-security.webp',
  },
  {
    id: 'blog-2',
    title: 'مزایای نصب درب اتوماتیک',
    excerpt: 'درب‌های اتوماتیک علاوه بر راحتی، به صرفه‌جویی در مصرف انرژی نیز کمک می‌کنند...',
    image: '/images/blog-door.webp',
  },
  {
    id: 'blog-3',
    title: 'معرفی انواع جک پارکینگی',
    excerpt: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    image: '/images/blog-parking.webp',
  },
  {
    id: 'blog-4',
    title: 'معرفی انواع جک پارکینگی',
    excerpt: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    image: '/images/blog-parking.webp',
  },
  {
    id: 'blog-5',
    title: 'معرفی انواع جک پارکینگی',
    excerpt: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    image: '/images/blog-parking.webp',
  },
  {
    id: 'blog-6',
    title: 'معرفی انواع جک پارکینگی',
    excerpt: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    image: '/images/blog-parking.webp',
  },
  {
    id: 'blog-7',
    title: 'معرفی انواع جک پارکینگی',
    excerpt: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    image: '/images/blog-parking.webp',
  },
  {
    id: 'blog-8',
    title: 'معرفی انواع جک پارکینگی',
    excerpt: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    image: '/images/blog-parking.webp',
  },
  {
    id: 'blog-9',
    title: 'معرفی انواع جک پارکینگی',
    excerpt: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    image: '/images/blog-parking.webp',
  },
  {
    id: 'blog-10',
    title: 'معرفی انواع جک پارکینگی',
    excerpt: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    image: '/images/blog-parking.webp',
  },
  {
    id: 'blog-11',
    title: 'معرفی انواع جک پارکینگی',
    excerpt: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    image: '/images/blog-parking.webp',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const BlogListPage = () => {
  return (
    <section className='bg-gradient-to-b from-white to-sky-50 py-20' dir='rtl'>
      <div className='mx-auto max-w-7xl px-4'>
        <h1 className='font-iransans mb-14 text-center text-4xl font-extrabold text-blue-800'>
          مقالات تخصصی <span className='text-blue-500'>مهرسازه</span>
        </h1>

        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              className='group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-xl'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className='relative h-52 overflow-hidden'>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
              </div>

              <div className='flex flex-col justify-between p-6'>
                <div>
                  <h2 className='font-iransans mb-3 text-lg font-bold text-gray-800 transition group-hover:text-blue-700'>
                    {blog.title}
                  </h2>
                  <p className='text-sm leading-relaxed text-gray-600'>{blog.excerpt}</p>
                </div>

                <div className='mt-6'>
                  <Link
                    to={`/بلاگ/${blog.id}`}
                    className='inline-block w-fit rounded-full border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white'
                  >
                    ادامه مطلب
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListPage;
