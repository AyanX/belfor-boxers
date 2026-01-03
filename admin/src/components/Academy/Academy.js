import { useState, useCallback } from "react";
import { Save } from "lucide-react";
import InfoInput from "./components/InfoInput";
import HoursSection from "./components/HoursSection";
import SuccessToast from "./components/Success";
import "./Academy.scss";
import { submitAcademyInfo } from "../api/api";
import AppHeader from "../Utils/AppHeader";

const Academy = ({academyData}) => {
  const data = academyData
    ? academyData
    : {
    "id": 1,
    "yearFounded": 2020,
    "proMembers": 200,
    "location": "Kampala, Uganda, Kenya",
    "trainingHours": {
        "weekdays": {
            "evening": "4:00 PM - 7:00 PM",
            "morning": "7:00 AM - 10:00 AM",
            "afternoon": "12:00 PM - 2:00 PM"
        },
        "weekends": {
            "evening": "4:00 PM - 7:00 PM",
            "morning": "7:00 AM - 11:00 AM",
            "afternoon": "Closed"
        }
    }
}

  const [formData, setFormData] = useState(data);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInfoChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "yearFounded" || name === "proMembers"
          ? parseInt(value) || ""
          : value,
    }));
  }, []);

  const handleHoursChange = useCallback((dayType, session, value) => {
    setFormData((prev) => ({
      ...prev,
      trainingHours: {
        ...prev.trainingHours,
        [dayType]: {
          ...prev.trainingHours[dayType],
          [session]: value,
        },
      },
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await submitAcademyInfo(formData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error saving academy info:", error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting]);

  return (
    <div>
      <AppHeader title="ACADEMY INFORMATION" />
      <div className="academy-form-wrapper">
        <SuccessToast
          show={showSuccess}
          message="Academy information saved successfully!"
        />

        <div className="academy-form-container">

          <div className="academy-info-grid">
            <InfoInput
              label="YEAR FOUNDED"
              name="yearFounded"
              type="number"
              value={formData.yearFounded}
              onChange={handleInfoChange}
            />
            <InfoInput
              label="PRO MEMBERS"
              name="proMembers"
              type="number"
              value={formData.proMembers}
              onChange={handleInfoChange}
            />
            <InfoInput
              label="LOCATION"
              name="location"
              value={formData.location}
              onChange={handleInfoChange}
            />
          </div>

          <HoursSection
            trainingHours={formData.trainingHours}
            onHoursChange={handleHoursChange}
          />

          <button
            className="academy-save-button"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            <Save size={20} />
            <span>{isSubmitting ? "Saving..." : "Save Academy Info"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Academy;
