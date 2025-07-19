import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white'>
      {/* آیکون SVG بالا */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className='mb-6'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='64'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#2563eb'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M9 12l2 2 4-4' />
          <circle cx='12' cy='12' r='10' />
        </svg>
      </motion.div>

      {/* نوشته مهرسازه با پرش */}
      <motion.h1
        className='font-iransans text-3xl font-extrabold text-blue-600 drop-shadow-md'
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        مهرسازه
      </motion.h1>

      {/* متن لطفاً صبر کنید */}
      <motion.p
        className='mt-3 text-sm text-gray-600'
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        لطفاً صبر کنید...
      </motion.p>
    </div>
  );
};

export default Loader;
