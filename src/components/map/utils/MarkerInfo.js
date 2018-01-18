import moment from 'moment';

export default function (mark, translation) {
  // var timestamp = moment();
  // const timeDiff = timestamp.diff(mark.updated_at, 'day');
  return `<div id="content" style="text-align: center">
<h3>${translation.helped_at}</h3>
<h5>${mark.first_name}</h5> ${translation.city}<br> 
<h6 style="color: limegreen;">${mark.organization ? mark.organization.name : ""}</h6>
</div>
`

}



