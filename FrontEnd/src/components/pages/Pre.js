import React from 'react';

const Pre = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, red, yellow)', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0}}>
      <div>
        <h1 style={{padding:'6px',color:'blue',fontSize:'50px'}}>
          <i>Predesigned Plans for Good Health System</i>
        </h1>
        <hr />
        <h1 style={{padding:'8px'}}>There are some ideas for features and plans you could consider for a fitness tracker:</h1>
        <ol style={{ padding: '18px',fontSize:'20px'}}>
          <li>
            Activity Tracking: Include standard features like step counting, distance traveled, and calories burned. You can also add advanced tracking options such as tracking specific activities like running, cycling, swimming, and weightlifting.
          </li>
          <li>
            Heart Rate Monitoring: Implement continuous heart rate monitoring to provide users with insights into their cardiovascular health and intensity levels during workouts. It can also be used for sleep tracking to analyze sleep patterns.
          </li>
          <li>
            GPS Integration: Incorporate GPS functionality to track outdoor activities accurately, including routes taken, distance covered, and elevation changes. This feature is especially useful for runners, cyclists, and hikers.
          </li>
          <li>
            Sleep Tracking: Enable sleep monitoring to analyze sleep duration, quality, and patterns. Provide users with personalized suggestions for improving sleep habits and overall sleep health.
          </li>
          <li>
            Smart Notifications: Allow users to receive notifications from their smartphones directly on the fitness tracker, including calls, messages, and app alerts. This feature ensures users stay connected while exercising without needing to carry their phones.
          </li>
          <li>
            Water Resistance: Ensure the fitness tracker is water-resistant, allowing users to track their activities even during swimming or other water-based exercises.
          </li>
          <li>
            Mobile App Integration: Develop a companion mobile app that syncs with the fitness tracker to provide users with a comprehensive overview of their fitness data, historical trends, and personalized insights. The app can also offer goal setting, challenges, and rewards to motivate users.
          </li>
          <li>
            Customizable Workouts: Provide preloaded workout plans or the ability to create custom workout routines based on individual goals, preferences, and fitness levels. Include visual and audio cues to guide users through exercises.
          </li>
          <li>
            Social Interaction: Incorporate social features that allow users to connect with friends, join fitness communities, and share achievements. Friendly competition, challenges, and virtual rewards can enhance user engagement and motivation.
          </li>
          <li>
            Health Metrics: Expand beyond basic fitness metrics and offer additional health monitoring features like stress levels, blood pressure, blood oxygen saturation , or menstrual cycle tracking for a more holistic approach to wellness.
          </li>
          <li>
            Personalized Coaching: Integrate artificial intelligence to offer personalized coaching tips and suggestions based on users' data, goals, and progress. This can provide users with tailored advice on improving their fitness routines and reaching their objectives.
          </li>
          <li>
            Long Battery Life: Design the fitness tracker with a long-lasting battery to ensure it can track activities throughout the day and last for extended periods between charges.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Pre;