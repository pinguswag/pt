import React from "react";
import { CheckCircle2 } from "lucide-react";
import "./ProblemSection.css";

const ProblemSection = () => {
  const problems = [
    "헬스장 기구 앞에서 서성이다 러닝머신만 뛰는 분",
    "PT 받은 이후에는 항상 막막한 분",
    "올바른 자세가 맞는지 모르겠는 분",
    "혼자 운동하는 방법을 배우고 싶은 분",
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
            "스스로 운동할 수 있어야
            <br />
            <strong>진짜 당신의 근육</strong>이 됩니다."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
