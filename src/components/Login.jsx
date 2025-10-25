import React, { useState, useEffect } from 'react';

const Login = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    answer: ''
  });
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Generate a new algebraic question
  const generateQuestion = () => {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, answer;
    
    switch (operation) {
      case '+':
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        answer = num1 + num2;
        setQuestion(`What is ${num1} + ${num2}?`);
        break;
      case '-':
        num1 = Math.floor(Math.random() * 30) + 10;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 - num2;
        setQuestion(`What is ${num1} - ${num2}?`);
        break;
      case '*':
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        answer = num1 * num2;
        setQuestion(`What is ${num1} × ${num2}?`);
        break;
      default:
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        answer = num1 + num2;
        setQuestion(`What is ${num1} + ${num2}?`);
    }
    
    setCorrectAnswer(answer);
  };

  useEffect(() => {
    if (isOpen) {
      generateQuestion();
      setFormData({ email: '', password: '', answer: '' });
      setError('');
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate algebraic answer
    if (parseInt(formData.answer) !== correctAnswer) {
      setError('Incorrect answer to the math question. Please try again.');
      generateQuestion();
      setFormData({ ...formData, answer: '' });
      setIsSubmitting(false);
      return;
    }

    // Simulate login process
    setTimeout(() => {
      setIsSubmitting(false);
      // For demo purposes, we'll just show success
      alert('Login successful! Welcome to DocBook.');
      onClose();
    }, 1500);
  };

  const handleRefreshQuestion = () => {
    generateQuestion();
    setFormData({ ...formData, answer: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content login-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Login to DocBook</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="form-input"
              />
            </div>

            <div className="verification-section">
              <div className="verification-header">
                <label>Security Verification</label>
                <button 
                  type="button" 
                  className="refresh-btn"
                  onClick={handleRefreshQuestion}
                  title="Generate new question"
                >
                  <i className="fas fa-sync-alt"></i>
                </button>
              </div>
              
              <div className="math-question">
                <div className="question-box">
                  <i className="fas fa-calculator"></i>
                  <span>{question}</span>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="number"
                  name="answer"
                  value={formData.answer}
                  onChange={handleChange}
                  required
                  placeholder="Your answer"
                  className="form-input math-input"
                />
              </div>
            </div>

            {error && (
              <div className="error-message">
                <i className="fas fa-exclamation-triangle"></i>
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="login-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Logging in...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt"></i>
                  Login
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>
              Don't have an account? 
              <a href="#" className="signup-link">Sign up here</a>
            </p>
            <p>
              <a href="#" className="forgot-link">Forgot your password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
