const { GoogleAnalytics } = require('google-analytics-node');

/**
 * Initialize Google Analytics
 * Requires a valid Tracking ID (e.g., 'UA-XXXXXXXXX-X') set in the environment variable `GA_TRACKING_ID`.
 */
const ga = new GoogleAnalytics(process.env.GA_TRACKING_ID);

/**
 * Tracks an event in Google Analytics.
 * @param {string} category - The category of the event (e.g., 'Video').
 * @param {string} action - The action performed (e.g., 'Play', 'Pause').
 * @param {string} label - A descriptive label for the event (optional).
 * @param {number} value - A numeric value associated with the event (optional).
 */
const trackEvent = (category, action, label = '', value = 0) => {
  try {
    ga.event({
      category,
      action,
      label,
      value,
    });
    console.log('Event tracked successfully:', { category, action, label, value });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

module.exports = trackEvent;
