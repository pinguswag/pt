import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import "./FAQSection.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "완전 초보도 가능한가요?",
      a: "네, 물론입니다. 오히려 처음부터 정확한 자세와 자격증을 기반으로 한 검증된 루틴으로 배우는 것이 부상 없이 가장 빠르게 성장할 수 있는 방법입니다.",
    },
    {
      q: "식단 관리는 어떻게 하나요?",
      a: "Advanced 스포츠 영양 코치 자격을 바탕으로, 무조건 굶는 식단이 아닌 회원님의 라이프스타일에 맞춘 지속 가능한 영양 가이드를 제공해 드립니다.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <HelpCircle size={32} className="faq-icon" />
          <h2 className="section-title">자주 묻는 질문</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="q-icon">Q.</span>
                <span className="q-text">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              <div className="faq-answer">
                <div className="answer-content">
                  <span className="a-icon">A.</span>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
