// src/components/PrivacyPolicyPopup.js

const PrivacyPolicyPopup = ( {isOpen, onClose}: {isOpen:boolean, onClose: any} ) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>Close</button>
        <div className="privacy-policy">
        <h1>Privacy Policy</h1>

        <p>
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our [Your App Name] application.
        </p>

        <h2>Information We Collect</h2>

        <h3>Personal Information</h3>
        <p>When you register or use our application, we may collect personal information such as your name, email address, and other identifying information.</p>

        <h3>Usage Data</h3>
        <p>We may collect information on how you interact with our application, including the pages you visit, your IP address, browser type, and device information.</p>

        <h2>How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>

        <ul>
          <li>To provide and maintain the application.</li>
          <li>To notify you about changes to our application.</li>
          <li>To monitor the usage of our application.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information so that we can improve our application.</li>
          <li>To detect, prevent, and address technical issues.</li>
        </ul>

        <h2>Disclosure of Your Information</h2>
        <p>We may disclose your personal information to comply with legal obligations, protect our rights, or prevent illegal activities. We may also share your personal information with third-party service providers to support and enhance the functionality of our application.</p>

        <h2>Security</h2>
        <p>We take reasonable measures to protect your personal information; however, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>
      </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPopup;
