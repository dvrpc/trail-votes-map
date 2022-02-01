const generate_api_root = () => {
  var current_env = process.env.NODE_ENV;

  let production_api = "https://vote-api.planninglab.org/api/trail-votes";
  let local_api = "http://localhost:8000/api/trail-votes";

  if (current_env == "development") {
    var url = local_api;
  } else {
    var url = production_api;
  }
  return url;
};

const API_ROOT = generate_api_root();

const URL_FOR_TRAILHEADS = API_ROOT + "/trailheads";
const URL_FOR_TRAIL_SEGMENTS = API_ROOT + "/trail-segments";
const URL_TO_SAVE_VOTE = API_ROOT + "/add-vote/";

export { URL_FOR_TRAILHEADS, URL_FOR_TRAIL_SEGMENTS, URL_TO_SAVE_VOTE };
