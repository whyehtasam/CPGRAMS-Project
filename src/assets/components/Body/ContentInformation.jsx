import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCaretRight } from '@fortawesome/free-solid-svg-icons';
const ContentInformation = () => {
    return (
        <div className="my-4 mx-4">
            <div className="title font-bold text-xl my-4">ABOUT CPGRAMS</div>
            <div className="info1 text-sm text-justify font-[400]">Centralised Public Grievance Redress and Monitoring System (CPGRAMS) is an online platform available to the citizens 24x7 to lodge their grievances to the public authorities on any subject related to service delivery. It is a single portal connected to all the Ministries/Departments of Government of India and States. Every Ministry and States have role-based access to this system. CPGRAMS is also accessible to the citizens through standalone mobile application downloadable through Google Play store and mobile application integrated with UMANG.
                <br />
                <br />

                The status of the grievance filed in CPGRAMS can be tracked with the unique registration ID provided at the time of registration of the complainant. CPGRAMS also provides appeal facility to the citizens if they are not satisfied with the resolution by the Grievance Officer. After closure of grievance if the complainant is not satisfied with the resolution, he/she can provide feedback. If the rating is ‘Poor’ the option to file an appeal is enabled. The status of the Appeal can also be tracked by the petitioner with the grievance registration number.</div>
            <br />

            <div className="info2 text-sm text-justify">
                <h3 className="text-[16px] font-bold text-blue-800 my-1"><FontAwesomeIcon icon={faCircleInfo} className='mr-1' />Issues which are not taken up for redress :</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faCaretRight} className='ml-4 mr-1' />RTI Matters</li>
                    <li><FontAwesomeIcon icon={faCaretRight} className='ml-4 mr-1' />Court related / Subjudice matters</li>
                    <li><FontAwesomeIcon icon={faCaretRight} className='ml-4 mr-1' />Religious matters</li>
                    <li><FontAwesomeIcon icon={faCaretRight} className='ml-4 mr-1' />Suggestions</li>
                    <li><FontAwesomeIcon icon={faCaretRight} className='ml-4 mr-1' />Grievances of Government employees concerning their service matters including disciplinary proceedings etc. unless the aggrieved </li>
                    <li className='ml-4 mr-1'>
                    employee has already exhausted the prescribed channels keeping in view the <span className='text-blue-800'> DoPT OM No. 11013/08/2013-Estt.(A-III) dated 31.08.2015</span></li>
                </ul>
            </div>
            <div className="note text-sm text-justify">
                <br />

                <h3 className="text-[16px] text-gray-600 font-bold my-1">Note :</h3>
                <ol className="list-decimal list-outside text-[16px]">
                    <li className="ml-4">If you have not got a satifactory redress of your grievance within a reasonable period of time,relating to <span className='text-blue-800'>Ministries/Departments and Organisations</span> under the purview of Directorate of Public Grievances(DPG), Cabinet Secretariat, GOI, you may seek help of DPG in resolution. Please <a href="#" className='text-blue-800'>click here</a> for details.</li>
                    <li className="ml-4">Government is not charging fee from the public for filing grievances. All money being paid by the public for filing grievance is going only to M/s CSC only.</li>
                </ol>
            </div>
        </div>
    )
}

export default ContentInformation;