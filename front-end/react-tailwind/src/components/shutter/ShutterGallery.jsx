const images = [
  '/images/shutter1.jpg',
  '/images/shutter2.jpg',
  '/images/shutter3.jpg',
  '/images/shutter4.jpg',
];

const ShutterGallery = () => {
  return (
    <section className='bg-white py-12' dir='rtl'>
      <div className='container mx-auto px-4'>
        <h3 className='mb-6 text-center text-xl font-bold text-blue-700'>
          گالری کرکره‌های نصب‌شده
        </h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {images.map((src, i) => (
            <div key={i} className='overflow-hidden rounded-lg shadow'>
              <img src={src} alt={`تصویر کرکره ${i + 1}`} className='h-52 w-full object-cover' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShutterGallery;
