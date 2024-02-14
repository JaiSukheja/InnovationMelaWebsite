import "./EventsInfo.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { EventData} from "../data/EventData";

const EventInfo = () => {
  const { id } = useParams();

  

  return (
    <div className="event_info">
      <h1>{EventData[id-1].EventName}</h1>
      <div>
        <img src={EventData[id-1].EventImg} alt="" />
      </div>
      <h2>{EventData[id-1].EventDesc}</h2>
      <h3>Venue: {EventData[id-1].EventVenue}</h3>
      <h3>Date: {EventData[id-1].EventDate}</h3>
      <h3>Time: {EventData[id-1].EventTime}</h3>
      <Link
        to={EventData[id-1].EventRegLink}
        target="_blank"
        className="neon-button"
      >
        Register Now
      </Link>
    </div>
  );
};

export default EventInfo;
