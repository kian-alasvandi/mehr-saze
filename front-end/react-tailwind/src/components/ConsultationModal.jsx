import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

const ConsultationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // حالت ارسال موفق

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/mehrsaze.ir/back-end/save.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        source: 'modal',
      }),
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true); // فقط نمایش پیام موفق
    } else {
      alert('❌ خطا: ' + result.message);
    }
  };

  return (
    <div
      className='fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm'
      onClick={onClose}
      dir='rtl'
    >
      <div
        className='animate-fade-in relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-3 left-3 text-gray-500 transition hover:text-red-500'
        >
          <X className='h-5 w-5' />
        </button>

        {!isSubmitted ? (
          <>
            <h2 className='mb-4 text-center text-lg font-bold text-gray-800'>
              درخواست مشاوره رایگان
            </h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <input
                type='text'
                name='name'
                placeholder='نام شما'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800'
              />
              <input
                type='tel'
                name='phone'
                pattern='09[0-9]{9}'
                title='شماره باید با 09 شروع شود و 11 رقم باشد'
                placeholder='شماره تماس (مثلاً 09121234567)'
                value={formData.phone}
                onChange={handleChange}
                required
                className='w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800'
              />
              <select
                name='service'
                value={formData.service}
                onChange={handleChange}
                required
                className='w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800'
              >
                <option value=''>انتخاب نوع خدمات</option>
                <option value='shutter'>کرکره برقی</option>
                <option value='camera'>دوربین مداربسته</option>
                <option value='door'>درب اتوماتیک</option>
                <option value='jack'>جک پارکینگی</option>
                <option value='awning'>سایبان برقی</option>
              </select>
              <textarea
                name='message'
                placeholder='توضیحات یا پیام شما (اختیاری)'
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className='w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-800'
              />
              <button
                type='submit'
                className='mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 text-white transition hover:scale-105 hover:shadow-lg'
              >
                ارسال درخواست
              </button>
            </form>
          </>
        ) : (
          <div className='flex flex-col items-center justify-center py-10'>
            <CheckCircle className='mb-4 h-12 w-12 text-green-500' />
            <p className='text-center text-lg font-semibold text-gray-700'>
              اطلاعات شما با موفقیت ارسال شد.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
