import { useState } from 'react';
import { Layers, PhoneCall } from 'lucide-react';

const ShutterCalculator = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [type, setType] = useState('aluminum');
  const [price, setPrice] = useState(null);

  const prices = {
    aluminum: 970000,
    polycarbonate: 2000000,
    punch: 840000,
    steel: 1800000,
    wood: 990000,
  };

  const handleCalculate = () => {
    const area = (parseFloat(width) || 0) * (parseFloat(height) || 0);
    const result = area * prices[type];
    setPrice(result);
  };

  return (
    <section className='mx-auto max-w-3xl px-4 py-12' dir='rtl'>
      <div className='rounded-xl border border-blue-100 bg-white p-6 shadow-sm'>
        <h3 className='mb-6 text-center text-xl font-bold text-blue-700'>محاسبه قیمت کرکره برقی</h3>

        {/* فیلدهای ورودی */}
        <div className='flex flex-col gap-4 md:grid md:grid-cols-4'>
          <input
            type='number'
            placeholder='عرض (متر)'
            className='w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none'
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <input
            type='number'
            placeholder='ارتفاع (متر)'
            className='w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          {/* Select همراه با آیکون */}
          <div className='relative flex w-full items-center rounded-lg border border-gray-300 bg-white shadow-sm focus-within:border-blue-500'>
            <div className='pointer-events-none absolute left-3 text-gray-400'>
              <Layers size={18} />
            </div>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className='w-full appearance-none rounded-lg bg-transparent px-10 py-2 text-sm focus:outline-none'
            >
              <option value='aluminum'>تیغه آلومینیومی</option>
              <option value='polycarbonate'>تیغه پلی‌کربنات شفاف</option>
              <option value='punch'>تیغه پانچ‌دار</option>
              <option value='steel'>تیغه فولادی</option>
              <option value='wood'>تیغه طرح چوب</option>
            </select>
          </div>

          <button
            onClick={handleCalculate}
            className='w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700'
          >
            محاسبه قیمت
          </button>
        </div>

        {/* نمایش قیمت و شماره تماس */}
        {price && (
          <div className='mt-6 flex flex-col items-center justify-center gap-4 md:flex-row'>
            <p className='text-lg font-bold text-green-700'>
              💰 قیمت تقریبی: {price.toLocaleString()} تومان
            </p>

            <a
              href='tel:02112345678'
              className='flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-800 shadow-sm hover:bg-blue-100'
            >
              <PhoneCall size={18} />
              تماس با ما: <span className='font-bold'>021-12345678</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShutterCalculator;
