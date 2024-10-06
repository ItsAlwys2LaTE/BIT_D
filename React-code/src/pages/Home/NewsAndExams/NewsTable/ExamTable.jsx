import React from 'react'
import "./Table.css"
import Navbar from '../../../../components/navbar/Navbar';
import UpperNavbar from '../../../../components/upper-navbar/UpperNavbar';

function ExamTable() {
    const data = [
        {
          serialNo: "1",
          notificationTitle: "Examssssss",
          description: "Employment Notification 2024",
          date: "11-Sep-2024",
          link: "Link"
        },
        {
          serialNo: "2",
          notificationTitle: "Employment Notification 2024",
          description: "Employment Notification 2024",
          date: "14-Sep-2024",
          link: "Link"
        },
        {
          serialNo: "3",
          notificationTitle: "Employment Notification 2024",
          description: "Employment Notification 2024",
          date: "14-Sep-2024",
          link: "Link"
        },
        {
          serialNo: "4",
          notificationTitle: "Employment Notification 2024",
          description: "Employment Notification 2024",
          date: "14-Sep-2024",
          link: "Link"
        },
      ];
    
      return (
        <div>
        <UpperNavbar/>
        <Navbar/>
        <div className="responsive-table-container">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Notification Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={row.serialNo} className={index % 2 === 0 ? 'even' : 'odd'}>
                  <td data-label="Serial No.">{row.serialNo}</td>
                  <td data-label="Notification Title">{row.notificationTitle}</td>
                  <td data-label="Description">{row.description}</td>
                  <td data-label="Date">{row.date}</td>
                  <td data-label="Action">
                    <a href="#" className="table-link" aria-label={`Link for ${row.notificationTitle}`}>
                      {row.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
  )
}

export default ExamTable
