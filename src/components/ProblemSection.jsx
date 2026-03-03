import React from "react";
import { CheckCircle2 } from "lucide-react";
import "./ProblemSection.css";

const ProblemSection = () => {
  const problems = [
    "헬스장 기구 앞에서 서성이다 집에 온다",
    "PT 끝나면 다시 원상복구 된다",
    "유튜브 따라 해도 자세가 맞는지 모르겠다",
    "단기 속성으로 혼자 운동하는 방법만 배우고 싶다",
  ];

  return (
    <section className="problem-section">
      <div className="problem-container">
        <h2 className="section-title">이런 고민 해보신 적 있나요?</h2>

        <ul className="problem-list">
          {problems.map((problem, index) => (
            <li key={index} className="problem-item">
              <CheckCircle2 className="check-icon" size={24} />
              <span className="problem-text">{problem}</span>
            </li>
          ))}
        </ul>

        <div className="highlight-box">
          <p className="highlight-text">
            "트레이너 없이도 스스로 운동할 수 있어야
            <br />
            <strong>진짜 당신의 근육</strong>이 됩니다."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
