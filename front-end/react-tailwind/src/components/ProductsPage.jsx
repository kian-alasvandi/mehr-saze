import ProductCategories from './Product-Page/ProductCategories';
import ProductArticles from './Product-Page/ProductArticles';
import Testimonials from './Testimonials';
import TimelineSection2 from './Product-Page/TimelineSection2';
import ConsultBoxAdvanced from './ConsultBoxAdvanced';
const ProductsPage = () => {
  return (
    <div className='font-iransans'>
      {/* کامپوننت دسته‌بندی محصولات */}
      <ProductCategories />
      <TimelineSection2 />
      <ConsultBoxAdvanced />
      <Testimonials />
      <ProductArticles />

      {/* اینجا بعداً می‌تونیم جدول مقایسه، CTA یا FAQ اضافه کنیم */}
    </div>
  );
};

export default ProductsPage;
