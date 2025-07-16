const ShutterComparison = () => {
  const data = [
    {
      type: 'پلی‌کربنات شفاف',
      strength: 'مقاومت بالا در برابر ضربه',
      visibility: 'کاملاً شفاف - مناسب ویترین فروشگاه',
      price: 'گران‌تر نسبت به سایر مدل‌ها',
      noise: 'عملکرد نرم و بی‌صدا',
    },
    {
      type: 'آلومینیومی دوجداره',
      strength: 'مقاومت متوسط و وزن سبک',
      visibility: 'غیرشفاف - مناسب استفاده عمومی',
      price: 'مقرون‌به‌صرفه و اقتصادی',
      noise: 'بسیار کم‌صدا',
    },
    {
      type: 'تیغه پانچ‌دار',
      strength: 'استحکام خوب با طراحی خاص',
      visibility: 'نیمه‌شفاف با قابلیت تهویه و نور',
      price: 'قیمت متوسط',
      noise: 'کم‌صدا با جریان هوای مناسب',
    },
  ];

  return (
    <section className='bg-gray-50 px-4 py-16' dir='rtl'>
      <div className='mx-auto max-w-6xl'>
        <div className='rounded-2xl border-t-4 border-blue-600 bg-white p-6 shadow-lg sm:p-10'>
          <h3 className='mb-8 text-center text-2xl font-extrabold text-blue-700'>
            جدول مقایسه انواع کرکره برقی
          </h3>
          <div className='overflow-x-auto rounded-md border border-gray-200'>
            <table className='w-full table-auto text-sm text-gray-700'>
              <thead className='bg-blue-100 text-center text-blue-700'>
                <tr>
                  <th className='border p-4 whitespace-nowrap'>نوع تیغه</th>
                  <th className='border p-4 whitespace-nowrap'>مقاومت</th>
                  <th className='border p-4 whitespace-nowrap'>شفافیت</th>
                  <th className='border p-4 whitespace-nowrap'>قیمت حدودی</th>
                  <th className='border p-4 whitespace-nowrap'>صدای عملکرد</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i} className='text-center even:bg-gray-50'>
                    <td className='border p-4 font-semibold'>{row.type}</td>
                    <td className='border p-4'>{row.strength}</td>
                    <td className='border p-4'>{row.visibility}</td>
                    <td className='border p-4'>{row.price}</td>
                    <td className='border p-4'>{row.noise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShutterComparison;
