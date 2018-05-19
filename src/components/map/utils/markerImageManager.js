
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

const StatusColorMap = {
  'Open, unassigned': 'open-unassigned',
  'Open, assigned': 'open-assigned',
  'Open, partially completed': 'open-partially-completed',
  'Open, needs follow-up': 'open-needs-follow-up',
  'Closed, completed': 'closed-completed',
  'Closed, incomplete': 'closed-incomplete',
  'Closed, out of scope': 'closed-out-of-scope',
  'Closed, done by others': 'closed-done-by-others',
  'Closed, no help wanted': 'closed-no-help-wanted',
  'Closed, rejected': 'closed-rejected',
  'Closed, duplicate': 'closed-duplicate',
};

export default function(claimed_by, status, work_type) {
  let part1 = null, part2 = null, part3 = null;
  if (status) {
    part1 = StatusColorMap[status];
    part2 = claimed_by ? 'claimed' : 'unclaimed';
    part3 = 'new';
  }
  if (!work_type) {
    work_type = "Report";
  }
  var baseUrl = `${window.location.protocol}//${window.location.host}`;
  return {
    path: `${baseUrl}/static/img/map_icons/${work_type.replace(/\s+/g, '_')}_red.png`,
    cssClass: `${part1}-${part2}-${part3}`
  }
};

