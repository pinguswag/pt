import React from "react";
import { Award, CheckCircle } from "lucide-react";
import "./AuthoritySection.css";

const AuthoritySection = () => {
  const credentials = [
    "NSCA-CPT (공인 퍼스널 트레이너)",
    "Advanced 스포츠 영양 코치",
    "Crossfit Lv.1",
    "초보자 대상 운동 지침서 집필 중",
  ];

  return (
    <section className="authority-section">
      <div className="authority-container">
        <div className="authority-header">
          <Award size={48} className="authority-icon" />
          <h2 className="authority-title">
            "감으로 가르치지 않습니다.
            <br />
            체계적으로 자립시킵니다."
          </h2>
        </div>

        <div className="credentials-box">
          <ul className="credentials-list">
            {credentials.map((item, index) => (
              <li key={index} className="credential-item">
                <CheckCircle size={20} className="credential-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
