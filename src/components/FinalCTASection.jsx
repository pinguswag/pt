import React from "react";
import "./FinalCTASection.css";

const FinalCTASection = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="urgency-badge">마감 임박</div>
        <h2 className="final-title">
          "이번 달 수강 가능 인원
          <br />
          <span className="highlight-number">단 10명</span> 남았습니다"
        </h2>

        <p className="final-subtitle">
          더 이상 미루지 마세요.
          <br />
          10주 뒤, 완전히 달라진 스스로를 만나보세요.
        </p>

        <div className="final-action">
          <button className="btn btn-cta btn-large">
            지금 바로 운동 독립 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
