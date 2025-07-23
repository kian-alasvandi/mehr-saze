import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      setError('لطفاً نام و شماره تماس را وارد کنید.');
      return;
    }

    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('لطفاً شماره موبایل را با 09 شروع کرده و دقیقاً 11 رقم وارد کنید.');
      return;
    }

    try {
      const response = await fetch('http://localhost/mehrsaze.ir/back-end/save.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'تماس با ما',
          source: 'contact-page',
        }),
      });

      const result = await response.json();
      if (result.success) setSuccess(true);
      else setError(result.message || 'خطا در ارسال اطلاعات.');
    } catch (err) {
      setError('ارتباط با سرور برقرار نشد.');
    }
  };

  return (
    <section className='mx-auto max-w-6xl px-4 py-16' dir='rtl'>
      <h1 className='relative mb-12 inline-block text-center text-3xl font-bold text-blue-700 after:absolute after:right-0 after:-bottom-2 after:left-0 after:mx-auto after:h-1 after:w-16 after:rounded-full after:bg-blue-300'>
        تماس با ما
      </h1>

      <div className='grid grid-cols-1 items-start gap-10 md:grid-cols-2'>
        {/* فرم تماس */}
        <div className='rounded-2xl bg-gray-50 p-6 shadow-lg'>
          <h2 className='relative mb-6 text-center text-xl font-semibold text-gray-800 after:absolute after:right-0 after:-bottom-1 after:left-0 after:mx-auto after:h-[2px] after:w-20 after:rounded-full after:bg-blue-400'>
            فرم ارتباطی
          </h2>
          {!success ? (
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <input
                type='text'
                name='name'
                placeholder='نام و نام خانوادگی'
                value={formData.name}
                onChange={handleChange}
                required
                className='rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm'
              />

              <input
                type='tel'
                name='phone'
                placeholder='شماره تماس'
                value={formData.phone}
                onChange={handleChange}
                required
                className='rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm'
              />

              <input
                type='email'
                name='email'
                placeholder='ایمیل (اختیاری)'
                value={formData.email}
                onChange={handleChange}
                className='rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm'
              />

              <textarea
                name='message'
                placeholder='پیام شما (اختیاری)'
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className='rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm'
              />

              <button
                type='submit'
                className='mt-2 flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 font-semibold text-white transition hover:opacity-90'
              >
                <Send size={18} />
                ارسال پیام
              </button>
              {error && <p className='mt-2 text-sm text-red-600'>{error}</p>}
            </form>
          ) : (
            <div className='py-10 text-center font-semibold text-green-700'>
              ✅ پیام شما با موفقیت ارسال شد.
            </div>
          )}
        </div>

        {/* اطلاعات تماس */}
        <div className='flex flex-col gap-5'>
          <h2 className='relative text-center text-xl font-semibold text-gray-800 after:absolute after:right-0 after:-bottom-1 after:left-0 after:mx-auto after:h-[2px] after:w-28 after:rounded-full after:bg-blue-400'>
            شماره‌های تماس
          </h2>

          {[
            ['تلفن', '۰۲۶-۳۲۳۴۵۶۷۸'],

            ['مدیر تدارکات', '09927435734'],
            ['مدیر فروش', '09197035165'],
            ['مدیر فنی', '09358867004'],
          ].map(([label, number]) => (
            <div key={number} className='flex items-center gap-3 text-sm text-gray-700'>
              <div className='rounded-full bg-blue-500 p-2 text-white'>
                <Phone size={16} />
              </div>
              <span>
                {label} : {number}
              </span>
            </div>
          ))}

          <div className='flex items-center gap-3 text-sm text-gray-700'>
            <div className='rounded-full bg-blue-500 p-2 text-white'>
              <Mail size={16} />
            </div>
            info@mehrsaze.ir
          </div>

          <div className='flex items-start gap-3 text-sm text-gray-700'>
            <div className='rounded-full bg-blue-500 p-2 text-white'>
              <MapPin size={16} />
            </div>
            البرز، کرج، میدان آزادگان، پلاک ۱۸، واحد ۳
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className='mt-6 text-center'>
            <h3 className='mb-2 font-semibold'>شبکه‌های اجتماعی</h3>
            <div className='flex justify-center gap-4'>
              <a href='#' className='text-pink-500 transition hover:scale-110'>
                <Instagram />
              </a>
              <a href='#' className='text-blue-600 transition hover:scale-110'>
                <Twitter />
              </a>
              <a href='#' className='text-blue-700 transition hover:scale-110'>
                <Facebook />
              </a>
            </div>
          </div>

          {/* نقشه گوگل */}
          <div className='mt-6 overflow-hidden rounded-xl shadow-md'>
            <iframe
              title='karaj-map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.793332210737!2d50.976397599999995!3d35.832442399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0616f845cf27%3A0x3b6a5dd40cfa4b5d!2sKaraj%2C%20Alborz%20Province!5e0!3m2!1sen!2sir!4v1718130000000'
              width='100%'
              height='300'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
