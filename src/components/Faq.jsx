import React, { useState } from 'react';
import './Faq.css';

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span>{open ? '-' : '+'}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: 'Do you provide services or technical help?',
      answer: 'Yes, we are a service-based organization. We help clients enhance and build their products with smart technical solutions.',
    },
    {
      question: 'What kind of companies do you work with?',
      answer: 'We work with startups, SMBs, and enterprises across domains like fintech, health, edtech, and logistics.',
    },
    {
      question: 'Can you build a product from scratch?',
      answer: 'Absolutely! From idea validation to final deployment and scaling — we do end-to-end product engineering.',
    },
    {
      question: 'Do you provide cloud or DevOps services?',
      answer: 'Yes, we specialize in AWS, Azure, CI/CD setup, infrastructure scaling, and monitoring.',
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'Through automated testing, peer reviews, CI/CD pipelines, and agile delivery — ensuring clean, scalable code.',
    },
    {
      question: 'Can we hire a dedicated team?',
      answer: 'Yes, we offer flexible engagement models — dedicated developers, teams, or project-based execution.',
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
