import { useState, useCallback, useMemo } from 'react';
import { Check } from 'lucide-react';
import { updatePricing as apiUpdatePricing } from '../api/api';
import './Pricing.scss';

function Pricing(data) {

  const {oneVone, smallGroup, groupClasses} = data?.data || {};

  const [pricing, setPricing] = useState({
    privateSession: oneVone || '50000',
    smallGroup: smallGroup || '30000',
    groupClass: groupClasses || '15000',
  });



  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = useCallback((field, value) => {
    setPricing(prev => ({ ...prev, [field]: value }));
  }, []);

  const hasChanges = useMemo(() => {
    return pricing.privateSession !== '50000' ||
           pricing.smallGroup !== '30000' ||
           pricing.groupClass !== '15000';
  }, [pricing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await apiUpdatePricing(pricing);
      setMessage({ type: 'success', text: 'Pricing updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pricing">
      <div className="header">
        <Check />
        <h2 className="title">Pricing Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="grid">
          <div className="field">
            <label>1v1 Private Session (UGX)</label>
            <div className="input-wrapper">
              <span className="prefix">UGX</span>
              <input
                type="text"
                value={pricing.privateSession}
                onChange={(e) => handleChange('privateSession', e.target.value)}
                className="input"
              />
            </div>
            <p className="hint">Per person price for individual training</p>
          </div>

          <div className="field">
            <label>Small Group Session (UGX)</label>
            <div className="input-wrapper">
              <span className="prefix">UGX</span>
              <input
                type="text"
                value={pricing.smallGroup}
                onChange={(e) => handleChange('smallGroup', e.target.value)}
                className="input"
              />
            </div>
            <p className="hint">Per person, 2-4 people</p>
          </div>
        </div>

        <div className="field">
          <label>Group Class (UGX)</label>
          <div className="input-wrapper">
            <span className="prefix">UGX</span>
            <input
              type="text"
              value={pricing.groupClass}
              onChange={(e) => handleChange('groupClass', e.target.value)}
              className="input"
            />
          </div>
          <p className="hint">Standard general admission group class</p>
        </div>

        {message.text && (
          <div className="message" data-type={message.type}>
            {message.text}
          </div>
        )}

        <div className="footer">
          <button
            type="submit"
            disabled={loading || !hasChanges}
            className="btn"
          >
            <Check size={16} />
            {loading ? 'Updating...' : 'Update Prices'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Pricing;
