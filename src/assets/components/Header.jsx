import TopNavbar from "./TopNavbar";
import MidNavbar from "./MidNavbar";
import BottomNavbar from "./BottomNavbar";

const viewStatus = [
    [{ title: 'View Status' }],
    [
      { list: 'Grievance Status' },
      { list: 'Appeal Status' }
    ]
  ];
  const nodalPgOfficers = [[
    { title: 'Nodal PG Officers' }],
    [
      { list: 'Central Government' },
      { list: 'State Government' }
    ]
  ];
  
  const redressProcess = [[
    { title: 'Redress Process' }],
    [
      { list: 'Redress Process Flow' }
    ]
  ];
  
  const grievance = [[
    { title: 'Grievance' }],
    [
      { list: 'Lodge Public Grievance' },
      { list: 'Lodge Pension Grievance' },
      { list: 'View Status' },
      { list: 'Reminder Clarification' },
      { list: 'Rate Grievance' }
    ]
  ];

const Header = (props) => {
    return (
        <>
            <TopNavbar />
            <MidNavbar />
            <BottomNavbar viewStatus={viewStatus} nodalPgOfficers={nodalPgOfficers} redressProcess={redressProcess} grievance={grievance} buttons={props.buttons} />
        </>
    )
}

export default Header;