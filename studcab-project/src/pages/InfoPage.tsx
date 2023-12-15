const InfoPage = () => {
  const profileImg =
    "https://images.unsplash.com/photo-1544717305-2782549b5136";

  const firstName = "Iryna";
  const middleName = "Petrovna";
  const lastName = "Kovalenko";

  const additionalInfo = [
    { label: "Course", value: "3" },
    { label: "Group", value: "IKM-221a" },
    {
      label: "Faculty",
      value:
        "Educational and Scientific Institute of Computer Modeling, Applied Physics and Mathematics",
    },
    {
      label: "Department",
      value: "Computer modeling of processes and systems",
    },
    {
      label: "Specialization",
      value: "Design, creation and analysis of computer systems",
    },
    {
      label: "Educational Program",
      value: "Computer science. Modeling, design and computer graphics",
    },
    { label: "Level", value: "Bachelor" },
    { label: "Form Of Education", value: "Daytime" },
    { label: "Payment", value: "Budget" },
  ];

  const fullName = `${firstName} ${middleName} ${lastName}`;

  return (
    <div className="w-full h-full max-w-[48rem] mx-auto flex flex-col gap-2">
      <div className="flex-shrink-0 w-48 h-48 mx-auto overflow-hidden rounded-full">
        <img src={profileImg} alt="" className="object-cover w-full h-full" />
      </div>
      <p className="flex-shrink-0 mx-auto text-xl font-medium">{fullName}</p>
      {additionalInfo.map((item, index) => (
        <p
          key={index}
          className="gap-2 p-2 text-lg border-b last:border-none sm:flex">
          <span className="flex-shrink-0 text-xl font-semibold">{`${item.label}: `}</span>
          <span>{item.value}</span>
        </p>
      ))}
    </div>
  );
};

export default InfoPage;
