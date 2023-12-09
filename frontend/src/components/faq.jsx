import React from 'react'

function FAQ() {
  const faqs = [
    {
      question: 'How can I adopt a cat?',
      answer:
        'To adopt a cat, visit our "Cats" page, browse available cats, and fill out an adoption form,located on the "Adopt-A-Cat" page, to choose the cat you wish to adopt.'
    },
    {
      question: 'What are the adoption fees?',
      answer:
        'Adoption fees vary depending on the cat’s age, breed, and medical history. Contact us for specific details about adoption fees.'
    },
    {
      question: 'Can I return an adopted cat?',
      answer:
        'Yes, you can return an adopted cat within a specific timeframe. Contact us for information on our return policy.'
    },
  ];

  return (
    <main>
    <div className='faq-page'>
      <h1>Frequently Asked Questions</h1>
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div className='faq-item' key={index}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    <footer>
    <nav className='navbar'>
            <a href="/about">About</a>
            <a href="/faq">FAQs</a>
          </nav>
        </footer>
    </main>
  );
}

export default FAQ