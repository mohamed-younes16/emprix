// PrivacyPolicy.js

import Modal from 'react-modal';
import './privacyPolicy.css'
const TermsAndConditions = ({ isOpen, onClose  }: {isOpen: any, onClose: any}) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Privacy Policy"
    className="privacy-policy-modal-overlay" /* Apply overlay class */
    style={{overlay: {zIndex: 1000}}}
  >
    <div className="privacy-policy-modal-content">
    <h1>Terms and Conditions</h1>
    <p>Please read these terms and conditions carefully before using our service.</p>

<p>By using our service, you agree to these terms and conditions. If you do not agree with any part of these terms, please do not use our service.</p>

<h2>Use of Our Service</h2>
<ul>
    <li>You must be at least 18 years of age to use this application.</li>
    <li>You agree to use the application only for lawful purposes and in a way that does not infringe upon the rights of others.</li>
    <li>You are solely responsible for any content you submit to the application.</li>
</ul>
<h2>User Accounts</h2>
        <ul>
            <li>To access certain features of the application, you may be required to create a user account.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
            <li>You must notify us immediately if you suspect any unauthorized use of your account.</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>The application and its original content, features, and functionality are owned by Emprix and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        <h2>Privacy</h2>
        <p>Your use of the application is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and share your personal information.</p>

        <h2>Limitation of Liability</h2>
        <p>In no event shall Emprix be liable for any indirect, special, incidental, consequential, or punitive damages, including but not limited to, loss of profits, data, or other intangible losses, arising out of or in connection with your use or inability to use the application.</p>

        <h2>Termination</h2>
        <p>We reserve the right to terminate or suspend your account and access to the application at our sole discretion, without notice, for any reason, including violation of these terms and conditions.</p>
        <h2>Changes to These Terms</h2>
        <p>We may revise these terms and conditions at any time without notice. By using the application, you agree to be bound by the current version of these terms and conditions.</p>

        <h2>Contact Information</h2>
        <p>If you have any questions about these terms and conditions, please contact us at our email.</p>
        <p>Thank you for using Emprix!</p>

      </div>
  </Modal>
);
};


export default TermsAndConditions;