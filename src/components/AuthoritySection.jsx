import React from "react";
import { Award, CheckCircle } from "lucide-react";
import coachProfileImg from "../assets/coach-profile.jpg";
import "./AuthoritySection.css";

const AuthoritySection = () => {
  const credentials = [
    "NSCA-CPT(미국 체력관리학회 공인 트레이너)",
    "NSCA KOREA Advanced Sport Nutrition Coach(Advanced 스포츠 영향 코치)",
    "Crossfit Coach Lv.1(크로스핏 코치 lv.1 자격)",
  ];

  const experience = [
    "전) 벌크업 전문 센터 메루치 양식장 강남점 시니어 트레이너",
    "전) 트렌디 바디 트레이너",
    "전) 짐박스 성신여대점 트레이너",
  ];

  return (
    <section className="authority-section">
      <div className="authority-container">
        {/* Top Section: Photo + Intro */}
        <div className="authority-intro">
          <div className="authority-photo-wrapper">
            <img
              src={coachProfileImg}
              alt="코치 프로필"
              className="authority-photo"
            />
          </div>
          <div className="authority-header">
            <h2 className="authority-title">
              "체계적인 커리큘럼을 통해 혼자 운동 할 수 있게끔
              도와드리겠습니다."
            </h2>
          </div>
        </div>

        {/* Bottom Section: Experience + Credentials */}
        <div className="authority-details">
          <div className="authority-section-block">
            <h3 className="authority-subtitle">코치 이력</h3>
            <ul className="credentials-list">
              {experience.map((item, index) => (
                <li key={index} className="credential-item">
                  <CheckCircle size={18} className="credential-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="authority-section-block">
            <h3 className="authority-subtitle">코치 자격</h3>
            <ul className="credentials-list">
              {credentials.map((item, index) => (
                <li key={index} className="credential-item">
                  <CheckCircle size={18} className="credential-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
