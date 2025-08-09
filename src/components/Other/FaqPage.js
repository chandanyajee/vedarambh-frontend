import React from 'react';

const FaqPage = () => {
  const faqs = [
    {
      q: 'Is VedArambh free to use?',
      a: 'Yes, students and institutions can start for free. Premium features may be added in the future.'
    },
    {
      q: 'Who can register?',
      a: 'Students, Teachers, and Educational Institutions can register and participate.'
    },
    {
      q: 'How are teachers verified?',
      a: 'All teachers are verified manually by the admin before being allowed to teach.'
    },
    {
      q: 'What kind of courses are available?',
      a: 'Courses include Sanatan Dharma, Vedic Gyaan, Sanskrit, Indian Culture, Morals, and more.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-orange-800 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b pb-3">
            <h4 className="font-semibold text-lg">{faq.q}</h4>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
