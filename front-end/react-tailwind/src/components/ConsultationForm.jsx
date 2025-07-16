// import { useState } from 'react';
// import { Phone } from 'lucide-react';

// const ConsultationForm = () => {
//   const [error, setError] = useState('');

//   const validate = (e) => {
//     const phone = e.target.phone.value;
//     const isValid = /^09[0-9]{9}$/.test(phone);

//     if (!isValid) {
//       e.preventDefault();
//       setError('شماره وارد شده نامعتبر است. لطفاً شماره‌ای با ۰۹ شروع و ۱۱ رقمی وارد کنید.');
//     } else {
//       setError('');
//     }
//   };

//   return (
//     <section
//       className='relative bg-cover bg-center py-20'
//       dir='rtl'
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
//       }}
//     >
//       {/* لایه تیره روی عکس */}
//       <div className='absolute inset-0 bg-black/30 backdrop-blur-sm' />

//       <div className='relative z-10 mx-auto max-w-5xl px-4'>
//         <div className='rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10'>
//           {/* متن */}
//           <div className='mb-6 text-center lg:mb-0 lg:w-1/2 lg:text-right'>
//             <div className='mb-4 inline-flex items-center gap-2 text-xl font-bold text-blue-700 lg:text-2xl'>
//               <Phone size={20} />
//               دریافت مشاوره رایگان
//             </div>
//             <p className='text-sm leading-relaxed text-gray-700'>
//               شماره موبایل خود را وارد کنید تا کارشناسان ما در سریع‌ترین زمان با شما تماس بگیرند.
//               این مشاوره کاملاً رایگان و بدون تعهد است.
//             </p>
//           </div>

//           {/* فرم متصل به PHP */}
//           <div className='w-full lg:w-1/2'>
//             <form
//               action='/save.php'
//               method='POST'
//               onSubmit={validate}
//               className='flex flex-col items-center gap-4 sm:flex-row'
//             >
//               <input
//                 type='tel'
//                 name='phone'
//                 placeholder='مثلاً ۰۹۱۲۱۲۳۴۵۶۷'
//                 required
//                 className='w-full flex-1 rounded-md border border-gray-300 px-4 py-2 text-right text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-auto'
//               />
//               <button
//                 type='submit'
//                 className='rounded-md bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700'
//               >
//                 ارسال
//               </button>
//             </form>

//             {/* پیام خطا */}
//             {error && <p className='mt-3 text-center text-sm text-red-600'>{error}</p>}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConsultationForm;

import { useState } from 'react';
import { Phone, CheckCircle } from 'lucide-react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({ phone: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ phone: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = /^09[0-9]{9}$/.test(formData.phone);
    if (!isValid) {
      setError('شماره وارد شده نامعتبر است. لطفاً شماره‌ای با ۰۹ شروع و ۱۱ رقمی وارد کنید.');
      return;
    }

    const response = await fetch('http://localhost/mehrsaze.ir/back-end/save.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'کاربر سایت',
        phone: formData.phone,
        service: 'مشاوره سریع',
        message: '',
        source: 'footer-form',
      }),
    });

    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
    } else {
      setError('ارسال اطلاعات با خطا مواجه شد.');
    }
  };

  return (
    <section
      className='relative bg-cover bg-center py-20'
      dir='rtl'
      style={{
        backgroundImage: `url('/images/bg-consult.webp')`,
      }}
    >
      <div className='absolute inset-0 bg-black/30 backdrop-blur-sm'></div>

      <div className='relative z-10 mx-auto max-w-5xl px-4'>
        <div className='rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10'>
          {/* متن سمت راست */}
          <div className='mb-6 text-center lg:mb-0 lg:w-1/2 lg:text-right'>
            <div className='mb-4 inline-flex items-center gap-2 text-xl font-bold text-blue-700 lg:text-2xl'>
              <Phone size={20} />
              دریافت مشاوره رایگان
            </div>
            <p className='text-sm leading-relaxed text-gray-700'>
              شماره موبایل خود را وارد کنید تا کارشناسان ما در سریع‌ترین زمان با شما تماس بگیرند.
              این مشاوره کاملاً رایگان و بدون تعهد است.
            </p>
          </div>

          {/* فرم یا پیام موفقیت */}
          <div className='w-full lg:w-1/2'>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center gap-4 sm:flex-row'
              >
                <input
                  type='tel'
                  name='phone'
                  placeholder='مثلاً ۰۹۱۲۱۲۳۴۵۶۷'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className='w-full flex-1 rounded-md border border-gray-300 px-4 py-2 text-right text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-auto'
                />
                <button
                  type='submit'
                  className='rounded-md bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700'
                >
                  ارسال
                </button>
              </form>
            ) : (
              <div className='flex flex-col items-center justify-center py-6'>
                <CheckCircle className='mb-2 h-8 w-8 text-green-600' />
                <p className='text-sm font-semibold text-green-800'>
                  اطلاعات شما با موفقیت ارسال شد.
                </p>
              </div>
            )}

            {error && <p className='mt-3 text-center text-sm text-red-600'>{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
