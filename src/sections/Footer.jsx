import { socialImgs } from "../constants";
import { useState } from "react";

const footerStyle = {
  background: "linear-gradient(135deg, #000000, #1a1a1a, #000000)",
  padding: "2rem 1rem",
  borderTop: "1px solid #222",
  color: "rgba(255, 255, 255, 0.85)",
  fontWeight: 500,
  boxShadow: "inset 0 1px 0 #333",
  transition: "background-color 0.3s ease",
};

const footerContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  //flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "1srem",
};

const footerTextStyle = {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "rgba(255, 255, 255, 0.9)",
  textAlign: "center",
  flex: "1 1 100%",
  marginBottom: "1rem",
};

const socialsStyle = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  flex: "1 1 auto",
};

const iconStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#111",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 0 8px rgba(0, 255, 255, 0.3)",
  transition: "transform 0.3s ease, boxShadow 0.3s ease",
  cursor: "pointer",
};

const iconImgStyle = {
  width: "28px",
  height: "28px",
  filter: "none",
  transition: "filter 0.3s ease",
};

const gitIconImgStyle = {
  width: "28px",
  height: "28px",
  filter: "none",
  transition: "filter 0.3s ease",
};

const copyrightStyle = {
  fontSize: "0.875rem",
  color: "rgba(255, 255, 255, 0.6)",
  textAlign: "center",
  flex: "1 1 100%",
  marginTop: "1rem",
};

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={footerTextStyle}>
          <p>Let’s Connect</p>
        </div>
        <div style={socialsStyle}>
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...iconStyle,
                transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 0 12px rgba(0, 255, 255, 0.7)"
                    : "0 0 8px rgba(0, 255, 255, 0.3)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label={socialImg.name}
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                style={{
                  ...(socialImg.name.toLowerCase() === "github" ? gitIconImgStyle : iconImgStyle),
                  filter:
                    hoveredIndex === index
                      ? "brightness(0) invert(0.7) sepia(1) saturate(5) hue-rotate(160deg)"
                      : "brightness(0) invert(1)",
                }}
              />
            </a>
          ))}
        </div>
        <div style={copyrightStyle}>
          <p>© {new Date().getFullYear()} Prince Doriya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
