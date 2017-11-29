import moment from 'moment';

export default function (mark) {
  // var timestamp = moment();
  // const timeDiff = timestamp.diff(mark.updated_at, 'day');
  return `<div id="content" style="text-align: center">
<h3>${mark.helped_at} days ago</h3>
<h5>${mark.first_name}</h5> in ${mark.city} was helped by<br> 
<h6 style="color: limegreen;">${mark.organization ? mark.organization.name : ""}</h6>
</div>
`

}



