import { useState, useCallback, useMemo } from 'react';
import { Phone, Mail, AlertTriangle } from 'lucide-react';
import { updateContact as apiUpdateContact } from '../api/api';
import './Contact.scss';
import useFetchData from '../Utils/useData';

function Contact() {

  const {data} = useFetchData()

  const {phone, email} = data?.data || {}

  const [contact, setContact] = useState({
    phone: phone || '+256 777 123 456',
    email: email || 'info@uncleboxing.com',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = useCallback((field, value) => {
    setContact(prev => ({ ...prev, [field]: value }));
  }, []);

  const hasChanges = useMemo(() => {
    return contact.phone !== '+256 777 123 456' ||
           contact.phone !== phone ||
           contact.email !== 'info@uncleboxing.com'||
            contact.email !== email;
  }, [contact,email,phone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await apiUpdateContact(contact);
      setMessage({ type: 'success', text: 'Contact info updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="header">
        <Phone className="icon" />
        <h2 className="title">Contact Details</h2>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <label>Main Phone Number</label>
          <Phone className="icon" aria-hidden />
          <input
            type="text"
            value={contact.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="input"
          />
        </div>

        <div className="field">
          <label>Main Email Address</label>
          <Mail className="icon" aria-hidden />
          <input
            type="email"
            value={contact.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="input"
          />
        </div>

        <button
          type="submit"
          disabled={loading || !hasChanges}
          className="btn"
        >
          {loading ? 'Saving...' : 'Save Contact Info'}
        </button>

        {message.text && (
          <div className="message" data-type={message.type}>
            {message.text}
          </div>
        )}

        <div className="alert">
          <AlertTriangle className="icon" />
          <p>
            Changing contact info will immediately update the website.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Contact;
