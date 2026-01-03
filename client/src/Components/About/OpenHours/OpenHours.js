import { memo } from "react";
import "./OpenHours.scss";
import SubHeader from "../../Utils/SubHeader";
import useFetchData from "../../Utils/useData";
import Loader from "../../Utils/Loader";

const TrainingHours = memo(() => {
  const {academyData:data,loading}=useFetchData()
  console.log(data)
  if(loading){
    return <Loader/>
  }

  if (!data) {
    return (
      <section className="open-hours">
        <div>
          <div className="skeleton" data-sz="title"></div>
          <div className="skeleton" data-sz="subtitle"></div>

          <div className="open-hours__card">
            <div className="open-hours__grid">
              <div className="open-hours__col">
                <div className="skeleton" data-sz="col-title"></div>
                <div className="open-hours__sessions">
                  <div className="skeleton" data-sz="session"></div>
                  <div className="skeleton" data-sz="session"></div>
                  <div className="skeleton" data-sz="session"></div>
                </div>
              </div>

              <div className="open-hours__col">
                <div className="skeleton" data-sz="col-title"></div>
                <div className="open-hours__sessions">
                  <div className="skeleton" data-sz="session"></div>
                  <div className="skeleton" data-sz="session"></div>
                  <div className="skeleton" data-sz="session"></div>
                </div>
              </div>
            </div>

            <div className="skeleton" data-sz="note"></div>
          </div>
        </div>
      </section>
    );
  }

  const weekdaysMorning = data?.trainingHours?.weekdays?.morning || "";
  const weekdaysAfternoon = data?.trainingHours?.weekdays?.afternoon || "";
  const weekdaysEvening = data?.trainingHours?.weekdays?.evening || "";

  const weekendsMorning = data?.trainingHours?.weekends?.morning || "";
  const weekendsAfternoon = data?.trainingHours?.weekends?.afternoon || "";
  const weekendsEvening = data?.trainingHours?.weekends?.evening || "";

  return (
    <section className="open-hours">
      <div>
        <SubHeader
          title="Training Hours"
          content={`Our facility is open six days a week with flexible training schedules`}
        />

        <div className="open-hours__card">
          <div className="open-hours__grid">
            <div className="open-hours__col">
              <h3 className="open-hours__col-title">WEEKDAYS</h3>
              <div className="open-hours__sessions">
                <div className="open-hours__session">
                  <span>Morning Session</span>
                  <span className="open-hours__time">{weekdaysMorning}</span>
                </div>
                <div className="open-hours__session">
                  <span>Afternoon Session</span>
                  <span className="open-hours__time">{weekdaysAfternoon}</span>
                </div>
                <div className="open-hours__session">
                  <span>Evening Session</span>
                  <span className="open-hours__time">{weekdaysEvening}</span>
                </div>
              </div>
            </div>

            <div className="open-hours__col">
              <h3 className="open-hours__col-title">WEEKEND</h3>
              <div className="open-hours__sessions">
                <div className="open-hours__session">
                  <span>Saturday Morning</span>
                  <span className="open-hours__time">{weekendsMorning}</span>
                </div>
                <div className="open-hours__session">
                  <span>Saturday Afternoon</span>
                  <span
                    className="open-hours__time"
                    data-closed={weekendsAfternoon.toLowerCase() === "closed"}
                  >
                    {weekendsAfternoon}
                  </span>
                </div>
                <div className="open-hours__session">
                  <span>Sunday</span>
                  <span
                    className="open-hours__time"
                    data-closed={weekendsEvening.toLowerCase() === "closed"}
                  >
                    {weekendsEvening}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="open-hours__note">
            <span>●</span>
            Private training sessions available by appointment. Contact us to
            schedule your session.
          </div>
        </div>
      </div>
    </section>
  );
});

export default TrainingHours;
