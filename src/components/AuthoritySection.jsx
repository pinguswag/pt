import React from "react";
import { Award, CheckCircle } from "lucide-react";
import "./AuthoritySection.css";

const AuthoritySection = () => {
  const credentials = [
    "NSCA-CPT (공인 퍼스널 트레이너)",
    "Advanced 스포츠 영양 코치",
    "Crossfit Lv.1",
  ];

  return (
    <section className="authority-section">
      <div className="authority-container">
        <div className="authority-header">
          <Award size={48} className="authority-icon" />
          <h2 className="authority-title">
            "체계적인 커리큘럼을 통해
            <br />
            혼자 운동 할 수 있게끔 도와드립니다."
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
