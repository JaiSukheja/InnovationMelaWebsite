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
      <p>{EventData[id-1].EventDesc}</p>
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
