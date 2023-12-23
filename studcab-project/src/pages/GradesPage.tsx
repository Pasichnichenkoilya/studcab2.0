const GradesPage = () => {
  const grades = [
    {
      subject: "Computer networks and distributed computing",
      teacher: "Mysyura S.Y. [MMI]",
      grade: 84,
    },
    {
      subject: "Cross-platform programming",
      teacher: "Ivanchenko K.V. [KMPS]",
      grade: 99,
    },
    {
      subject: "Mathematical statistics",
      teacher: "Larin O.O. [MMI]",
      grade: 76,
    },
    {
      subject: "Optimization methods",
      teacher: "Lavinsky D.V. [TMOM]",
      grade: 91,
    },
    {
      subject: "Modeling and reverse engineering based on data",
      teacher: "Potopalska K.E. [MMI]",
      grade: 99,
    },
    {
      subject: "Discipline of free choice 1",
      teacher: "Tatarinova O.A. [KMPS]",
      grade: 91,
    },
    {
      subject: "Basics of web technologies",
      teacher: "Metielov V. O. [KMPS]",
      grade: 100,
    },
    {
      subject: "Physical Education",
      teacher: "Shiryaeva S.V. [FW]",
      grade: 100,
    },
  ];

  return (
    <div className="w-full h-full max-w-[48rem] mx-auto">
      <table className="flex flex-col justify-center w-full h-full gap-5 overflow-y-auto">
        <tbody>
          <tr className="flex items-center justify-between px-5 py-1 text-xl font-semibold">
            <td>Subject</td>
            <td>Grade</td>
          </tr>
          {grades.map((item, index) => (
            <tr
              key={index}
              className="flex items-center justify-between px-5 py-1 rounded-md sm:hover:bg-soft-black-hover-200">
              <td>
                <p className="text-xl">{item.subject}</p>
                <p className="text-soft-white-hover-200">{item.teacher}</p>
              </td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradesPage;
