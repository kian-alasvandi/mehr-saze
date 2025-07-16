import { useParams } from 'react-router-dom';

const products = [
  {
    id: 'کرکره-برقی',
    title: 'کرکره برقی',
    description: 'کرکره‌های برقی مناسب فروشگاه، پارکینگ و ویلا با تیغه‌های مختلف.',
    image: '/images/shutter-main.jpg',
  },
  {
    id: 'دوربین-مداربسته',
    title: 'دوربین مداربسته',
    description: 'دوربین‌های امنیتی با قابلیت دید در شب و نصب سریع.',
    image: '/images/camera-main.jpg',
  },
  {
    id: 'درب-اتوماتیک',
    title: 'درب اتوماتیک',
    description: 'درب‌های اتوماتیک شیشه‌ای و پارکینگی با سنسورهای حرکتی.',
    image: '/images/door-main.jpg',
  },
  // سایر محصولات...
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className='py-20 text-center font-bold text-red-600'>محصول پیدا نشد</div>;
  }

  return (
    <div className='font-iransans mx-auto max-w-4xl px-4 py-12 text-center' dir='rtl'>
      <h1 className='mb-4 text-3xl font-bold'>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className='mx-auto mb-6 w-full max-w-md rounded-xl'
      />
      <p className='leading-relaxed text-gray-700'>{product.description}</p>

      {/* دکمه‌ها فقط برای کرکره برقی */}
      {id === 'کرکره-برقی' && (
        <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center'>
          <a
            href='/قیمت-کرکره-برقی'
            className='inline-block rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700'
          >
            مشاهده قیمت لحظه‌ای کرکره برقی
          </a>
          <a
            href='/خدمات-کرکره-برقی'
            className='inline-block rounded-xl border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-50'
          >
            مشاهده خدمات کرکره برقی
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
