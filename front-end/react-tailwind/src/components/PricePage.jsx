import { Helmet, HelmetProvider } from 'react-helmet-async';
import ShutterTypes from './shutter/ShutterTypes';
import ShutterPricingTable from './shutter/ShutterPricingTable';
import ShutterComparison from './shutter/ShutterComparison';
import ShutterFAQ from './shutter/ShutterFAQ';
import ShutterGuide from './shutter/ShutterGuide';
import ConsultationForm from './ConsultationForm';
import ShutterCalculator from './shutter/ShutterCalculator';
import ShutterIntro from './shutter/ShutterIntro';

const PricePage = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'قیمت کرکره برقی چند است؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'قیمت کرکره برقی بسته به نوع تیغه بین ۷۰۰ هزار تا ۱.۵ میلیون تومان به ازای هر متر مربع است.',
        },
      },
      {
        '@type': 'Question',
        name: 'نصب کرکره شامل هزینه جداست؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'مشاوره و بازدید اولیه در مهرسازه رایگان است، هزینه نصب طبق شرایط پروژه محاسبه می‌شود.',
        },
      },
    ],
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'کرکره برقی',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '19',
    },
  };

  return (
    <>
      <HelmetProvider>
        <div className='p-10 text-center'>
          <Helmet>
            <title>قیمت کرکره برقی | مهرسازه</title>
            <meta
              name='description'
              content='قیمت دقیق کرکره برقی، نصب تخصصی و مشاوره رایگان در مهرسازه. تیغه آلومینیومی، شفاف و پانچ دار.'
            />
            <link rel='canonical' href='https://mehr-saze.ir/قیمت-کرکره-برقی' />
            <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
            <script type='application/ld+json'>{JSON.stringify(reviewSchema)}</script>
            <script type='application/ld+json'>{`
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "name": "تیغه آلومینیومی دوجداره",
          "description": "مقاوم، بی‌صدا، اقتصادی",
          "offers": {
            "@type": "Offer",
            "price": "700000",
            "priceCurrency": "IRR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "name": "تیغه پلی‌کربنات شفاف",
          "description": "شفاف، امنیت بالا",
          "offers": {
            "@type": "Offer",
            "price": "1100000",
            "priceCurrency": "IRR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "name": "تیغه پانچ‌دار",
          "description": "تهویه‌پذیر، زیبا",
          "offers": {
            "@type": "Offer",
            "price": "850000",
            "priceCurrency": "IRR",
            "availability": "https://schema.org/InStock"
          }
        }
      ]
    }
  `}</script>
          </Helmet>

          <h1 className='text-3xl font-bold text-blue-700'>قیمت کرکره برقی</h1>
          <p className='mt-4 text-gray-600'>
            به صفحه رسمی قیمت کرکره برقی خوش آمدید. جهت مشاهده
            <a href='/محصولات/کرکره-برقی' className='mx-1 text-blue-500 underline'>
              توضیحات کامل محصول
            </a>
            کلیک کنید.
          </p>
        </div>
      </HelmetProvider>

      <ShutterIntro />
      <ShutterPricingTable />
      <ShutterCalculator />
      <ShutterTypes />
      <ShutterComparison />
      <ShutterGuide />
      <ShutterFAQ />
      <ConsultationForm />
    </>
  );
};

export default PricePage;
