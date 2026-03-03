import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          비싼 돈 주고 PT 받았는데,
          <br />
          <span className="text-primary">혼자 헬스장 가면</span>
          <br />또 러닝머신만 뛰고 계신가요?
        </h1>

        <p className="hero-subtitle">
          단 10회. 누군가에게 의존하는 운동은 끝내세요.
          <br />
          당신을 완벽하게 독립시켜 드립니다.
        </p>

        <div className="hero-action">
          <a
            href="https://open.kakao.com/o/sSEUoqji"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-cta"
          >
            지금 바로 무료 상담하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
