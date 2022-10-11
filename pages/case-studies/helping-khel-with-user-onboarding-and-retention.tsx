import { useState, useEffect, useRef } from "react";
import KhelData from "../../components/data/khelplayRummy";
import HeadHTML from "../../components/reusable/caseStudies/HeadHTML";
import Hero from "../../components/reusable/caseStudies/Hero";
import AboutClient from "../../components/reusable/caseStudies/AboutClient";
import ProblemStatement from "../../components/reusable/caseStudies/ProblemStatement";
import TimelineInfo from "../../components/reusable/caseStudies/TimelineInfo";
import ApproachFindings from "../../components/reusable/caseStudies/ApproachFindings";
import FrameworkWrapper from "../../components/reusable/caseStudies/FrameworkWrapper";
import Outcome from "../../components/reusable/caseStudies/Outcome";
import WorkDone from "../../components/reusable/caseStudies/WorkDone";
import Testimonial from "../../components/reusable/caseStudies/Testimonial";
import MoreStudies from "../../components/reusable/caseStudies/MoreStudies";
import SurveyCTAStrip from "../../components/reusable/SurveyCTAStrip";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Khel() {
  const post = KhelData;

  const imgArray: Array<any> = [useRef(null), useRef(null)];
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    imgArray.forEach((img, index) => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "none" },
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "+=60%",
          scrub: true,
        },
      });
      tl.to(imgArray[index], { scale: 1 });
    });
  }, []);

  return (
    <div className="">
      <HeadHTML title={post.title} />
      <Hero
        bannerImg={post.heroBanner}
        logoImg={post.logo}
        industry={post.industry}
        title={post.title}
      />
      <AboutClient aboutJsx={post.about} sideImg={post.side1} />
      {/* Image Break 1 */}
      <div
        ref={(el) => (imgArray[1] = el)}
        className={`blog-wide-img ${post.break1}`}
      />
      <ProblemStatement type={"Opportunity"} content={post.problem} />
      <TimelineInfo
        projInfo={post.projInfo}
        timeline={post.timeline}
        timelineImg={post.side2}
      />

      <ApproachFindings approachList={post.approachList} />

      {/* Work Done */}
      <WorkDone summaryJsx={post.workDoneSum} listJsx={post.workDoneList} />

      {/* Image Break 2 */}
      <div
        ref={(el) => (imgArray[0] = el)}
        className={`${post.break2} blog-wide-img`}
      />
      <Outcome content={post.outcome} />

      {/*Framework / Services */}
      {typeof post.framework !== "undefined" && (
        <FrameworkWrapper contentJsx={post.framework} />
      )}

      {/* Testimonials */}

      {/* {typeof post.testimonials !== "undefined" && (
        <Testimonial list={post.testimonials} />
      )} */}

      <SurveyCTAStrip isDark />

      {/* More Posts*/}

      <MoreStudies title={post.title} />
    </div>
  );
}

export default Khel;
