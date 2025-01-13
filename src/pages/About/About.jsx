import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import pu from "../../assets/images/pu.png";
import sgc from "../../assets/images/sgc.png";
import vnhss from "../../assets/images/vnhss.jpg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            A dedicated programmer constantly seeking new challenges to grow and improve.
            As a team player, always open to learning and supporting others. 
            In my free time, enjoy playing chess.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Pondicherry University, Pondicherry",
                p: "Master of Computer Application (2022-2024)",
                image: pu,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Saradha Gangadharan College, Pondicherry",
                p: "Bachelor of Information Technology (2019-2022)",
                image: sgc,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "Vidhya Niketan Higher Sec. School, Pondicherry",
                p: "School (2007-2019)",
                image: vnhss,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
