const blogs = [
  {
    title: 'چگونه یک سیستم امنیتی خانگی انتخاب کنیم؟',
    image: '/images/blog-security.webp',
    summary:
      'در این مقاله یاد می‌گیرید که چطور یک سیستم امنیتی مناسب برای خانه یا محل کار خود انتخاب کنید...',
    link: '/بلاگ/هوشمند-سازی-خانه',
  },
  {
    title: 'مزایای نصب درب اتوماتیک',
    image: '/images/blog-door.webp',
    summary: 'درب‌های اتوماتیک علاوه بر راحتی، به صرفه‌جویی در مصرف انرژی نیز کمک می‌کنند...',
    link: '/بلاگ/درب-اتوماتیک',
  },
  {
    title: 'معرفی انواع جک پارکینگی',
    image: '/images/blog-parking.webp',
    summary: 'در این مقاله با مدل‌های مختلف جک‌های پارکینگی و کاربردهای آن‌ها آشنا می‌شوید...',
    link: '/بلاگ/جک-پارکینگی',
  },
];

const BlogSection = () => {
  return (
    <section className='font-iransans bg-gray-50 py-16' dir='rtl'>
      <div className='mx-auto max-w-6xl px-4'>
        <h2 className='mb-10 text-center text-2xl font-bold text-blue-700'>
          مطالب آموزشی و مقالات
        </h2>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {blogs.map((blog, index) => (
            <article
              key={index}
              className='overflow-hidden rounded-xl bg-white shadow transition hover:shadow-md'
            >
              <img
                src={blog.image}
                alt={blog.title}
                className='h-48 w-full object-cover'
                loading='lazy'
                fetchPriority='low'
              />
              <div className='flex h-[calc(100%-12rem)] flex-col justify-between p-4'>
                <h3 className='mb-2 text-lg font-semibold text-gray-800'>{blog.title}</h3>
                <p className='mb-4 line-clamp-3 text-sm text-gray-600'>{blog.summary}</p>
                <a
                  href={blog.link}
                  className='mt-auto inline-block text-sm font-semibold text-blue-600 hover:underline'
                >
                  ادامه مطلب →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
