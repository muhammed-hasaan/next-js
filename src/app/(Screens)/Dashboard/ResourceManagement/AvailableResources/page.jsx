"use client";
import React from "react";
import AvailableResourcesComponent from "../../../../Components/DashboardComponents/ResourceManagement/AvailableResources/AvailableResources";
import DashboardLayout from "../../../../Sections/DashboardSections/dashboard";
import Filters from "../../../../Components/DashboardComponents/ResourceManagement/AvailableResources/Filters/Filter";
import ResourceList from "../../../../Components/DashboardComponents/ResourceManagement/AvailableResources/ResourcesList/ResourceList";
import Image from "next/image";
import ResourceUserImg from "../../../../../../Assets/ResourceManagement/AvailableResources/AvailableResourceDetail/ResourceUserImg.jpeg";
import { useState } from "react";
import ShortList from "../../../../Components/DashboardComponents/ResourceManagement/AvailableResources/ShortList/ShortList";
const AvailableResources = () => {
  const [Category, SetCategory] = useState("");
  const [Position, SetPosition] = useState("");
  const [Discipline, SetDiscipline] = useState("");
  const [SubDiscipline, SetSubDiscipline] = useState("");
  const [FEQualification, SetFEQualification] = useState("");
  const [QualificationPassoutYear, SetQualificationPassoutYear] = useState("");
  const [JoinAvailability, SetJoinAvailability] = useState("");
  const [Gender, SetGender] = useState("");
  const [SoftwareSkills, SetSoftwareSkills] = useState("");
  const [GCCExperience, SetGCCExperience] = useState("");
  const [DomainExperience, SetDomainExperience] = useState("");
  const [Nationality, SetNationality] = useState("");
  const [Language, SetLanguage] = useState("");
  const [Level, SetLevel] = useState("");
  const [LastCompany, SetLastCompany] = useState("");
  const [LastCompanyLocation, SetLastCompanyLocation] = useState("");

  const [positionsList, setPositionsList] = useState([]);
  const [disciplineList, setDisciplineList] = useState([]);
  const [subDisciplineList, setSubDisciplineList] = useState([]);

  const handleCategoryChange = (category) => {
    SetCategory(category);
    SetPosition(""); // Reset Position when Category changes
    SetDiscipline(""); // Reset Discipline when Category changes
    setDisciplineList([]); // Reset Discipline list when Category changes
    setSubDisciplineList([]); // Reset SubDiscipline list when Category changes

    if (category === "BIM") {
      setPositionsList([
        "BIM Modeler / BIM Technician",
        "BIM Designer",
        "BIM Architect",
        "BIM Coordinator",
        "BIM Manager",
        "BIM Lead",
        "BIM Project Manager",
        "BIM Implementation Specialist",
        "BIM Quality Control Specialist",
        "BIM Analyst",
        "BIM Facility Manager",
        "BIM Software Developer",
        "BIM Data Specialist",
        "BIM Consultant",
        "BIM Engineer",
        "BIM Support Specialist",
        "BIM Trainer",
        "BIM Coordinator (MEP)",
        "BIM Structural Engineer",
        "BIM Integration Manager",
        "BIM Documentation Specialist",
        "BIM Content Developer",
        "BIM Systems Specialist",
        "BIM Estimator",
        "BIM Asset Manager",
      ]);
    } else if (category === "CAD") {
      setPositionsList([
        "CAD Drafter / CAD Technician",
        "CAD Designer",
        "AutoCAD Operator",
        "CAD Coordinator",
        "CAD Manager",
        "CAD Quality Control Specialist",
        "CAD Engineer",
        "CAD Mechanical Designer",
        "CAD Electrical Designer",
        "CAD Structural Designer",
        "CAD Architectural Designer",
        "CAD Survey Technician",
        "CAD Modeler",
        "CAD Detailer",
        "CAD Civil Designer",
        "CAD Specialist",
        "CAD Support Engineer",
        "CAD Lead",
        "CAD Documentation Specialist",
        "CAD Technician (MEP)",
      ]);
    } else {
      setPositionsList([]);
    }
  };

  // When Position changes, update disciplineList
  const handlePositionChange = (position) => {
    SetPosition(position);

    if (position) {
      setDisciplineList([
        "Architecture",
        "Structure",
        "Mechanical",
        "Plumbing & Drainage",
        "Electrical",
        "Landscape",
        "Interior",
        "Infrastructure (Dry Utilities)",
        "Infrastructure (Wet Utilities)",
        "Infrastructure (Transportation)",
        "Infrastructure (Environmental and Sustainable)",
      ]);
    } else {
      setDisciplineList([]);
    }
  };

  // When Discipline changes, update subDisciplineList
  const handleDisciplineChange = (discipline) => {
    SetDiscipline(discipline);

    if (discipline === "Architecture") {
      setSubDisciplineList([
        "Interior Design (ID)",
        "Fitout",
        "Joinery",
        "Facade Design",
        "Building Envelope",
        "Space Planning",
        "Urban Design",
        "Heritage and Conservation",
        "Sustainable Architecture",
        "Lighting Design",
        "Furniture and Fixture Design",
        "Building Acoustics",
        "Fire Safety Design",
        "Wayfinding and Signage Design",
      ]);
    } else if (discipline === "Structure") {
      setSubDisciplineList([
        "Structural Steel Design",
        "Reinforced Concrete Design",
        "Masonry Structures",
        "Timber Structures",
        "Foundation Engineering",
        "Bridge Design",
        "Tunneling and Underground Structures",
        "Precast Structures",
        "Seismic Design",
        "Tall Buildings and High-Rise Structures",
        "Structural Rehabilitation and Retrofitting",
        "Temporary Structures and Scaffolding",
        "Offshore Structural Engineering",
      ]);
    } else if (discipline === "Mechanical") {
      setSubDisciplineList([
        "HVAC (Heating, Ventilation, and Air Conditioning)",
        "Fire Protection Systems",
        "Mechanical Piping Systems",
        "Energy Management Systems",
        "Building Automation Systems",
        "Renewable Energy Systems (e.g., Solar, Geothermal)",
        "Industrial Ventilation",
        "Thermal Insulation",
        "Noise and Vibration Control",
        "Refrigeration Systems",
        "Mechanical Equipment Layout",
        "Facility Management Systems",
      ]);
    } else if (discipline === "Plumbing & Drainage") {
      setSubDisciplineList([
        "Sanitary Plumbing Systems",
        "Stormwater Management",
        "Drainage Systems",
        "Rainwater Harvesting Systems",
        "Greywater Recycling Systems",
        "Gas Piping Systems",
        "Sewerage Systems",
        "Fire Suppression Plumbing Systems",
        "Hydronic Heating Systems",
        "Domestic Hot Water Systems",
        "Vacuum Plumbing Systems",
        "Plumbing Fixture Selection",
      ]);
    } else if (discipline === "Electrical") {
      setSubDisciplineList([
        "Power Distribution Systems",
        "Lighting Systems",
        "Low Voltage Systems",
        "Fire Alarm Systems",
        "Communication Systems (Data/Voice)",
        "Security Systems (CCTV, Access Control)",
        "Renewable Energy Systems (e.g., Solar, Wind)",
        "Emergency Power Systems",
        "Building Automation Systems (BAS)",
        "Lightning Protection Systems",
        "Electrical Load Analysis",
        "Electrical Safety Systems",
      ]);
    } else if (discipline === "Landscape") {
      setSubDisciplineList([
        "Urban Landscape Design",
        "Residential Landscape Design",
        "Commercial Landscape Design",
        "Green Infrastructure Design",
        "Sustainable Landscape Design",
        "Irrigation Systems",
        "Landscape Lighting",
        "Ecological Restoration",
        "Park and Recreation Design",
        "Water Features Design",
        "Planting Design",
        "Hardscape Design",
      ]);
    } else if (discipline === "Interior") {
      setSubDisciplineList([
        "Interior Fit-Out",
        "Furniture and Fixture Design",
        "Lighting Design",
        "Space Planning",
        "Sustainable Interior Design",
        "Material and Finishes Selection",
        "Acoustical Design",
        "Interior Detailing",
        "Interior Joinery Design",
        "Retail and Commercial Interiors",
        "Exhibition and Display Design",
        "Interior Branding and Signage",
      ]);
    } else if (discipline === "Infrastructure (Dry Utilities)") {
      setSubDisciplineList([
        "Electrical Power Distribution",
        "Telecommunications Infrastructure (Data/Voice)",
        "Street Lighting Systems",
        "Traffic Signal Systems",
        "Gas Distribution Systems",
        "Cable TV and Broadband Systems",
        "Fiber Optic Networks",
        "Smart City Infrastructure",
        "Public Safety Networks (Emergency Communication Systems)",
      ]);
    } else if (discipline === "Infrastructure (Wet Utilities)") {
      setSubDisciplineList([
        "Water Supply Systems",
        "Sanitary Sewer Systems",
        "Stormwater Management",
        "Wastewater Treatment Systems",
        "Irrigation Systems",
        "Flood Control Systems",
        "Fire Water Supply Systems",
        "Greywater Recycling Systems",
        "Desalination Plants",
      ]);
    } else if (discipline === "Infrastructure (Transportation)") {
      setSubDisciplineList([
        "Roads and Highways",
        "Bridges and Tunnels",
        "Railway Tracks and Stations",
        "Airport Runways and Terminals",
        "Port and Harbor Infrastructure",
        "Pedestrian and Bicycle Infrastructure",
        "Transit-Oriented Development (TOD)",
        "Public Transportation Systems (Bus, Tram, Metro)",
      ]);
    } else if (
      discipline === "Infrastructure (Environmental and Sustainable)"
    ) {
      setSubDisciplineList([
        "Green Infrastructure",
        "Environmental Remediation",
        "Renewable Energy Systems",
        "Stormwater Retention and Detention Systems",
        "Waste Management and Recycling Systems",
        "Sustainable Urban Drainage Systems (SUDS)",
        "Biodiversity and Habitat Restoration",
      ]);
    } else {
      setSubDisciplineList([]);
    }
  };

  const handleSubDisciplineChange = (SubDescipline) => {
    SetSubDiscipline(SubDescipline);
  };

  const filter = () => {
    console.log(Category, "Category");
    console.log(Position, "Position");
    console.log(Discipline, "Discipline");
    console.log(SubDiscipline, "SubDiscipline");
    console.log(FEQualification, "Final Educational Qualification");
    console.log(QualificationPassoutYear, "Qualification Passout Year");
    console.log(JoinAvailability, "Availability to Join");
    console.log(Gender, "Gender");
    console.log(SoftwareSkills, "Software Skills");
    console.log(GCCExperience, "GCC Experience");
    console.log(DomainExperience, "Domain Experience");
    console.log(Nationality, "Nationality");
    console.log(Language, "Language");
    console.log(Level, "Level");
    console.log(LastCompany, "Last Working Company");
    console.log(LastCompanyLocation, "Last Company Location");

    const dataArr = [
      Category,
      Position,
      Discipline,
      SubDiscipline,
      FEQualification,
      QualificationPassoutYear,
      JoinAvailability,
      Gender,
      SoftwareSkills,
      GCCExperience,
      DomainExperience,
      Nationality,
      Language,
      Level,
      LastCompany,
      LastCompanyLocation,
    ];

    const filteredData = dataArr.filter((tag) => tag);
    document.getElementById("TagsContainer").innerHTML = "";
    filteredData.forEach((tag, index) => {
      document.getElementById("TagsContainer").innerHTML += `
        <span key=${index} class="tag">
          ${tag}
        </span>
      `;
    });
  };

  const FilterData = {
    Category: Category,
    Position: Position,
    Discipline: Discipline,
    SubDiscipline: SubDiscipline,
    FEQualification: FEQualification,
    QualificationPassoutYear: QualificationPassoutYear,
    JoinAvailability: JoinAvailability,
    Gender: Gender,
    SoftwareSkills: SoftwareSkills,
    GCCExperience: GCCExperience,
    DomainExperience: DomainExperience,
    Nationality: Nationality,
    Language: Language,
    Level: Level,
    LastCompany: LastCompany,
    LastCompanyLocation: LastCompanyLocation,
  };

  const [Shortlist, SetShortlist] = useState("");
  const [GetDataForShortlist, SetGetDataForShortlist] = useState();

  console.log(GetDataForShortlist, "GetDataForShortlist from home");
  return (
    <DashboardLayout>
      <div className="flex justify-center items-center lg:items-center w-full flex-col">
        <div className="w-full lg:w-[100%] flex justify-center items-center">
          <h1 className="text-[#0085DB] text-3xl font-bold">Available</h1>
          <h1 className="text-3xl font-bold">Resources</h1>
        </div>
        <div className="w-full lg:w-[80%] flex justify-center items-center">
          <hr className="bg-black h-1 w-[100px] mt-3" />
        </div>
        <br />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="min-h-screen w-full lg:w-[100%] flex justify-center items-start">
          <div
            className={`flex flex-col lg:flex-row justify-center flex-wrap lg:flex-nowrap ${
              Shortlist == "Shortlist" ? "w-[100%] lg:[flex-col]" : ""
            }`}
          >
            {/* Filters and Resource List */}

            {!Shortlist && (
              <Filters
                handleCategoryChange={(e) =>
                  handleCategoryChange(e.target.value)
                }
                Category={Category}
                handlePositionChange={(e) =>
                  handlePositionChange(e.target.value)
                }
                Position={Position}
                positionsList={positionsList}
                handleDisciplineChange={(e) =>
                  handleDisciplineChange(e.target.value)
                }
                Discipline={Discipline}
                disciplineList={disciplineList}
                handleSubDisciplineChange={(e) =>
                  handleSubDisciplineChange(e.target.value)
                }
                SubDiscipline={SubDiscipline}
                subDisciplineList={subDisciplineList}
                SetFEQualification={(e) => SetFEQualification(e.target.value)}
                FEQualification={FEQualification}
                SetQualificationPassoutYear={(e) =>
                  SetQualificationPassoutYear(e.target.value)
                }
                QualificationPassoutYear={QualificationPassoutYear}
                SetJoinAvailability={(e) => SetJoinAvailability(e.target.value)}
                JoinAvailability={JoinAvailability}
                SetGender={(e) => SetGender(e.target.value)}
                Gender={Gender}
                SetSoftwareSkills={(e) => SetSoftwareSkills(e.target.value)}
                SoftwareSkills={SoftwareSkills}
                SetGCCExperience={(e) => SetGCCExperience(e.target.value)}
                GCCExperience={GCCExperience}
                SetDomainExperience={(e) => SetDomainExperience(e.target.value)}
                DomainExperience={DomainExperience}
                SetNationality={(e) => SetNationality(e.target.value)}
                Nationality={Nationality}
                SetLanguage={(e) => SetLanguage(e.target.value)}
                Language={Language}
                SetLevel={(e) => SetLevel(e.target.value)}
                Level={Level}
                SetLastCompany={(e) => SetLastCompany(e.target.value)}
                LastCompany={LastCompany}
                SetLastCompanyLocation={(e) =>
                  SetLastCompanyLocation(e.target.value)
                }
                LastCompanyLocation={LastCompanyLocation}
                filter={filter}
              />
            )}
            {!Shortlist && (
              <ResourceList
                FilterData={FilterData}
                filter={filter}
                SetShortlist={SetShortlist}
                Shortlist={Shortlist}
                SetGetDataForShortlist={SetGetDataForShortlist}
              />
            )}
            {!!Shortlist && (
              <ShortList
                GetDataForShortlist={GetDataForShortlist}
                SetShortlist={SetShortlist}
              />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AvailableResources;
