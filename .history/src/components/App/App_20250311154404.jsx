import { useEffect, useState } from "react";

import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Description from "../Description/Description.jsx";
import Notification from "../Notification/Notification.jsx";

export default function App() {
  const [reviewType, setRewiewType] = useState(() => {
    const saveRewiew = localStorage.getItem("current-effect");
    if (saveRewiew) {
      return JSON.parse(saveRewiew);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = reviewType.good + reviewType.neutral + reviewType.bad;

  const positiveFeedback = Math.round((reviewType.good / totalFeedback) * 100);

  useEffect(() => {
    console.log(567890);
    localStorage.setItem("current-effect", JSON.stringify(reviewType));
  }, [reviewType]);

  const updateFeedback = (feedbackType) => {
    setRewiewType({
      ...reviewType,
      [feedbackType]: reviewType[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setRewiewType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        isShown={totalFeedback > 0}
      />
      {totalFeedback > 0 && (
        <Feedback
          reviewType={reviewType}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback <= 0 && <Notification />}
    </>
  );
}

