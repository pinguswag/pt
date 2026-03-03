import React from "react";
import { BookOpen, Dumbbell } from "lucide-react";
import "./CurriculumSection.css";

const CurriculumSection = () => {
  const curriculum = [
    {
      session: "1회차",
      title: "기초 영양 + 무분할",
      type: "both",
    },
    {
      session: "2~3회차",
      title: "2분할 (상체/하체)",
      type: "practical",
    },
    {
      session: "4~6회차",
      title: "3분할 (밀기/당기기/하체)",
      type: "practical",
    },
    {
      session: "7~9회차",
      title: "5분할 (가슴/등/어깨 집중)",
      type: "practical",
    },
    {
      session: "10회차",
      title: "독립 루틴 설계 + QnA",
      type: "both",
    },
  ];

  return (
    <section className="curriculum-section">
      <div className="curriculum-container">
        <div className="section-header">
          <span className="badge-highlight">SOLUTION</span>
          <h2 className="section-title">
            실기 10회 + 핵심 이론 2회
            <br />
            55만원
          </h2>
          <p className="section-subtitle">완벽한 자립을 위한 10주 커리큘럼</p>
        </div>

        <div className="curriculum-timeline">
          {curriculum.map((item, index) => (
            <div key={index} className="curriculum-card">
              <div className="card-header">
                <span className="session-badge">{item.session}</span>
                <div className="type-badges">
                  {(item.type === "theory" || item.type === "both") && (
                    <span className="type-badge theory">
                      <BookOpen size={14} /> 이론
                    </span>
                  )}
                  {(item.type === "practical" || item.type === "both") && (
                    <span className="type-badge practical">
                      <Dumbbell size={14} /> 실기
                    </span>
                  )}
                </div>
              </div>
              <h3 className="card-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
