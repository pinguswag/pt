import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import "./FAQSection.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "헬스 완전 초보도 가능한가요?",
      a: (
        <>
          네, 가능합니다.
          <br />
          이 프로그램은 헬스장을 처음 가는 분들도 혼자 운동할 수 있도록 만드는
          것을 목표로 설계되었습니다.
          <br />
          기초 체력 테스트부터 시작해
          <br />
          무분할 → 2분할 → 3분할 → 5분할
          <br />
          순서로 운동을 배우기 때문에 초보자도 단계적으로 익힐 수 있습니다.
        </>
      ),
    },
    {
      q: "일반 PT와 무엇이 다른가요?",
      a: (
        <>
          일반 PT는 트레이너가 프로그램을 짜주고 따라 하는 방식입니다.
          <br />
          하지만 이 프로그램은 운동을 배우는 수업입니다.
          <br />
          - 운동 루틴 구성 방법
          <br />
          - 헬스장 기구 사용법
          <br />
          - 식단 구성 방법
          <br />을 배우기 때문에 수업이 끝난 후에도 혼자 운동할 수 있게 되는
          것이 가장 큰 차이입니다.
        </>
      ),
    },
    {
      q: "몇 번의 수업으로 정말 혼자 운동할 수 있나요?",
      a: (
        <>
          10회 수업 동안 헬스장에서 가장 많이 사용하는 운동과
          <br />
          운동 프로그램을 구성하는 원리를 배우게 됩니다.
          <br />
          10회 수업으로 몸이 완전히 바뀌는 것은 어렵지만,
          <br />
          헬스장에서 혼자 운동할 수 있는 기초 체계는 충분히 만들 수 있습니다.
        </>
      ),
    },
    {
      q: "수업은 어떻게 진행되나요?",
      a: (
        <>
          수업은 실기 10회 + 이론 2회로 구성됩니다.
          <br />
          - 실기 수업 : 55분
          <br />
          - 이론 수업 : 30분 (1회차 / 10회차)
          <br />
          실기에서는 헬스장 운동을 직접 배우고,
          <br />
          이론 수업에서는 식단 구성법과 운동 프로그램 설계 방법을 배웁니다.
        </>
      ),
    },
    {
      q: "PT를 받아본 사람에게도 도움이 되나요?",
      a: (
        <>
          네.
          <br />
          많은 분들이 PT를 받았지만 루틴을 직접 구성하는 방법까지 배우지는 못한
          경우가 많습니다.
          <br />
          이 프로그램에서는
          <br />
          - 운동 분할 설정 방법
          <br />
          - 운동 루틴 구성 방법
          <br />을 배우기 때문에 PT 경험이 있는 분들에게도 도움이 됩니다.
        </>
      ),
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
                  <div className="a-text">{faq.a}</div>
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
