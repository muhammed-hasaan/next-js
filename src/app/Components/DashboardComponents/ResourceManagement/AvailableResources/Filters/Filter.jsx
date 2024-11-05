"use client";
import React from "react";
import "./Filters.css";

const Filters = (props) => {
  // When Category changes, update positionsList

  return (
    <div className="filters-container p-6 bg-white rounded-lg shadow-lg space-y-6 ">
      <h2 className="filters-titleSub font-bold text-2xl text-blue-600 mb-4">
        Job Filters
      </h2>
      {/* Dropdown and input fields */}
      <div className="space-y-2">
        <div className="filter-group">
          <h4 className="text-gray-700 font-semibold mb-1">
            Search by Category
          </h4>
          <select
            onChange={props.handleCategoryChange}
            className="input-field w-full p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={props.Category}
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option value="BIM">BIM</option>
            <option value="CAD">CAD</option>
          </select>
        </div>

        <div className="filter-group">
          <h4 className="text-gray-700 font-semibold mb-1">Position</h4>
          <select
            onChange={props.handlePositionChange}
            className="input-field w-full p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={props.Position}
          >
            <option value="" disabled>
              Choose a position
            </option>
            {props.positionsList.map((position, index) => (
              <option key={index} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <h4 className="text-gray-700 font-semibold mb-1">Discipline</h4>
          <select
            onChange={props.handleDisciplineChange}
            className="input-field w-full p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={props.Discipline}
          >
            <option value="" disabled>
              Choose a discipline
            </option>
            {props.disciplineList.map((discipline, index) => (
              <option key={index} value={discipline}>
                {discipline}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <h4 className="text-gray-700 font-semibold mb-1">Sub Discipline</h4>
          <select
            onChange={props.handleSubDisciplineChange}
            className="input-field w-full p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={props.SubDiscipline}
          >
            <option value="" disabled>
              Choose a sub discipline
            </option>
            {props.subDisciplineList.map((subDiscipline, index) => (
              <option key={index} value={subDiscipline}>
                {subDiscipline}
              </option>
            ))}
          </select>
        </div>

        {/* Repeat for other fields with similar styling */}
        <div className="filter-group">
          <h4 className="text-gray-700 font-semibold mb-1">
            Final Educational Qualification
          </h4>
          <select
            onChange={props.SetFEQualification}
            className="input-field w-full p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={props.FEQualification}
          >
            <option value="" disabled>
              Choose a Qualification
            </option>
            {/* Qualification options */}
          </select>
        </div>

        <div className="filter-group">
          <h4 className="text-gray-700 font-semibold mb-1">
            Qualification Passout Final Year
          </h4>
          <input
            type="number"
            className="input-field w-full p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Qualification passout year"
            onChange={props.SetQualificationPassoutYear}
            value={props.QualificationPassoutYear}
          />
        </div>

        <div className="filter-group">
          <h4 className="text-gray-700 font-semibold mb-1">
            Availability to Join
          </h4>
          <select
            onChange={props.SetJoinAvailability}
            className="input-field w-full p-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            value={props.JoinAvailability}
          >
            <option value="" disabled>
              Choose Availability
            </option>
            <option value="Immediately">Immediately</option>
            <option value="1 month">1 Month</option>
            {/* Additional options */}
          </select>
        </div>

        {/* Additional fields structured similarly */}
      </div>

      {/* Tags Container */}
      <div className="filter-group">
        <h4 className="text-gray-700 font-semibold mb-1">Tags</h4>
        <div
          className="tag-group flex flex-wrap gap-2 bg-gray-100 p-2 rounded-md"
          id="TagsContainer"
        >
          {/* Tags will appear here */}
        </div>
      </div>

      {/* Filter Button */}
      <div className="start-searching">
        <button
          className="search-button w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          onClick={props.filter}
        >
          Start Searching Now
        </button>
      </div>
    </div>
  );
};

export default Filters;
