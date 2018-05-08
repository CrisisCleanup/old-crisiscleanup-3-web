
const UnclaimedStatusColorMap = {
  'Open, unassigned': 'orange',
  'Open, assigned': 'yellow',
  'Open, partially completed': 'yellow',
  'Open, needs follow-up': 'yellow',
  'Closed, completed': 'green',
  'Closed, incomplete': 'gray',
  'Closed, out of scope': 'gray',
  'Closed, done by others': 'gray',
  'Closed, no help wanted': 'xgray',
  'Closed, rejected': 'xgray',
  'Closed, duplicate': 'xgray',
};

export default function(claimed_by, status, work_type) {
  let color;
  if (claimed_by || /Closed/.test(status)) {
    color = UnclaimedStatusColorMap[status];
  } else {
    color = 'red';
  }
  if (!work_type) {
    work_type = "Report";
  }
  var baseUrl = `${window.location.protocol}//${window.location.host}`;
  return `${baseUrl}/static/img/map_icons/${work_type.replace(/\s+/g, '_')}_red.png`;
}

