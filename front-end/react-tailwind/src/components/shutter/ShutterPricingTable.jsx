const ShutterPricingTable = () => {
  return (
    <section className='bg-gray-50 px-4 py-12' dir='rtl'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='mb-10 text-center text-xl font-bold text-blue-700'>
          لیست قیمت روز کرکره برقی
        </h2>

        {/* جدول تیغه */}
        <div className='mb-12 overflow-x-auto'>
          <h3 className='mb-4 font-bold text-blue-600'>قیمت انواع تیغه کرکره</h3>
          <table className='w-full table-auto border text-sm text-gray-800'>
            <thead className='bg-blue-100 text-blue-800'>
              <tr>
                <th className='border p-3'>نوع تیغه</th>
                <th className='border p-3'>قیمت تقریبی</th>
                <th className='border p-3'>ویژگی‌ها</th>
                <th className='border p-3'>کاربرد</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='even:bg-gray-50'>
                <td className='border p-3'>آلومینیومی دوجداره</td>
                <td className='border p-3'>۷۰۰٫۰۰۰ تومان</td>
                <td className='border p-3'>مقاوم، بی‌صدا، اقتصادی</td>
                <td className='border p-3'>پارکینگ، منازل</td>
              </tr>
              <tr className='even:bg-gray-50'>
                <td className='border p-3'>پلی‌کربنات شفاف</td>
                <td className='border p-3'>۱٫۱۰۰٫۰۰۰ تومان</td>
                <td className='border p-3'>لوکس، شفاف، امنیت بالا</td>
                <td className='border p-3'>ویترین فروشگاه‌ها</td>
              </tr>
              <tr className='even:bg-gray-50'>
                <td className='border p-3'>تیغه پانچ‌دار</td>
                <td className='border p-3'>۸۵۰٫۰۰۰ تومان</td>
                <td className='border p-3'>تهویه‌پذیر، نورگیر</td>
                <td className='border p-3'>مغازه، مراکز تجاری</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* جدول موتور */}
        <div className='overflow-x-auto'>
          <h3 className='mb-4 font-bold text-blue-600'>قیمت انواع موتور کرکره</h3>
          <table className='w-full table-auto border text-sm text-gray-800'>
            <thead className='bg-blue-100 text-blue-800'>
              <tr>
                <th className='border p-3'>نوع موتور</th>
                <th className='border p-3'>قیمت تقریبی</th>
                <th className='border p-3'>قدرت</th>
                <th className='border p-3'>مناسب برای</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              <tr className='even:bg-gray-50'>
                <td className='border p-3'>توبولار</td>
                <td className='border p-3'>۲٫۲۰۰٫۰۰۰ تومان</td>
                <td className='border p-3'>سبک تا متوسط</td>
                <td className='border p-3'>مغازه و منزل</td>
              </tr>
              <tr className='even:bg-gray-50'>
                <td className='border p-3'>ساید</td>
                <td className='border p-3'>۳٫۵۰۰٫۰۰۰ تومان</td>
                <td className='border p-3'>سنگین‌وزن</td>
                <td className='border p-3'>صنعتی و فروشگاه بزرگ</td>
              </tr>
              <tr className='even:bg-gray-50'>
                <td className='border p-3'>سانترال</td>
                <td className='border p-3'>۲٫۸۰۰٫۰۰۰ تومان</td>
                <td className='border p-3'>متوسط</td>
                <td className='border p-3'>درب‌های قدیمی یا خاص</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ShutterPricingTable;
