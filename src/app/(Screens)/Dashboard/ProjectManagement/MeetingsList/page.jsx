// ...other imports
'use client'
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import DashboardLayout from "../../../../Sections/DashboardSections/dashboard";

const EMAILJS_PUBLIC_KEY = "pJGavA9anYeYHfdIK"; // Replace with your actual public key
emailjs.init(EMAILJS_PUBLIC_KEY);

const MeetingList = () => {
  const [lists, setLists] = useState([]);

  // Load lists from localStorage on initial load
  useEffect(() => {
    const storedLists = localStorage.getItem('lists');
    if (storedLists) {
      try {
        setLists(JSON.parse(storedLists));
      } catch (error) {
        console.error('Error parsing lists from local storage:', error);
      }
    }
  }, []);

  // Save lists to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  const [taskInput, setTaskInput] = useState({});

  const onDragEnd = (result) => {
    const { source, destination, type } = result;
    if (!destination) return;

    if (type === 'list') {
      const newLists = Array.from(lists);
      const [movedList] = newLists.splice(source.index, 1);
      newLists.splice(destination.index, 0, movedList);
      setLists(newLists);
    }

    if (type === 'task') {
      const updatedLists = [...lists];
      const sourceListIndex = updatedLists.findIndex(
        (list) => list.id === source.droppableId
      );
      const destinationListIndex = updatedLists.findIndex(
        (list) => list.id === destination.droppableId
      );
      const sourceList = updatedLists[sourceListIndex];
      const destinationList = updatedLists[destinationListIndex];

      const [removed] = sourceList.items.splice(source.index, 1);
      destinationList.items.splice(destination.index, 0, removed);

      setLists(updatedLists);
    }
  };

  const addNewList = async () => {
    const { value: listTitle } = await Swal.fire({
      title: 'Enter the list title',
      input: 'text',
      inputLabel: 'List Title',
      inputPlaceholder: 'Type the title of the list',
      showCancelButton: true,
    });
  
    if (listTitle) {
      const newList = {
        id: `list-${lists.length + 1}`,
        title: listTitle,
        items: [],
      };
      
      setLists((prevLists) => [...prevLists, newList]);
    }
  };

  const handleTaskInputChange = (listId, value) => {
    setTaskInput({ ...taskInput, [listId]: value });
  };

  const addTaskToList = async (listId) => {
    const { value: taskContent } = await Swal.fire({
      title: 'Add New Task',
      input: 'text',
      inputLabel: 'Task Content',
      inputPlaceholder: 'Enter your task',
      showCancelButton: true,
    });

    if (!taskContent) return;

    const { value: taskDateTime } = await Swal.fire({
      title: 'Set Date and Time for Task',
      html: `
        <input type="date" id="task-date" class="swal2-input" placeholder="Select date">
        <input type="time" id="task-time" class="swal2-input" placeholder="Select time">
      `,
      focusConfirm: false,
      preConfirm: () => {
        const date = document.getElementById('task-date').value;
        const time = document.getElementById('task-time').value;
        return date && time ? `${date} ${time}` : null;
      },
      showCancelButton: true,
    });

    if (!taskDateTime) return;

    const newTask = {
      id: `task-${Date.now()}`,
      content: taskContent,
      dateTime: taskDateTime, // Keep the dateTime here
    };

    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, items: [...list.items, newTask] } : list
      )
    );

    // Schedule email notification
    scheduleEmailNotification(taskContent, taskDateTime);
  };

  const scheduleEmailNotification = (taskContent, taskDateTime) => {
    const taskTime = new Date(taskDateTime).getTime();
    const currentTime = new Date().getTime();
    const delay = taskTime - currentTime;

    if (delay > 0) {
      setTimeout(() => {
        emailjs.send("service_r7nxwg3", "template_3vr37jl", {
          to_email: "muhammedhasaan09@gmail.com",
          subject: "Task Reminder",
          message: `Reminder for your task: "${taskContent}" scheduled at ${taskDateTime}.`,
        })
        .then(() => {
          Swal.fire('Success!', 'Email reminder scheduled successfully!', 'success');
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          Swal.fire('Error!', 'Failed to schedule email reminder.', 'error');
        });
      }, delay);
    } else {
      console.warn("Task date/time is in the past, cannot schedule email.");
      Swal.fire('Error!', 'The scheduled time is in the past.', 'error');
    }
  };

  const removeList = (listId) => {
    setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
  };

  const removeTask = (listId, taskId) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, items: list.items.filter((item) => item.id !== taskId) } : list
      )
    );
  };

  return (
    <DashboardLayout>
      <div className="w-full flex justify-end items-center">
        <div className="w-[80%] min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white p-10 shadow-lg">
        <div className="w-full flex flex-col justify-center items-center mb-8">
          <div className="w-[50%] flex justify-center items-center space-x-2">
            <h1 className="text-indigo-800 text-4xl font-bold tracking-wide">
              Meeting
            </h1>
            <h1 className="text-gray-900 text-4xl font-bold tracking-wide">
              List
            </h1>
          </div>
          <hr className="bg-gray-900 h-[4px] w-[300px] rounded-full mt-4" />
        </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="all-lists" direction="horizontal" type="list">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="flex space-x-4 overflow-auto">
                  {lists.map((list, index) => (
                    <div key={list.id} className="bg-white p-4 rounded shadow w-64">
                      <h3 className="text-lg font-semibold flex justify-between items-center">
                        {list.title}
                        <button onClick={() => removeList(list.id)} className="text-red-600 hover:text-red-800">Remove</button>
                      </h3>
                      <div className="mt-2">
                        <button onClick={() => addTaskToList(list.id)} className="bg-blue-500 text-white px-2 py-1 rounded">Add Task</button>
                      </div>
                      <Droppable droppableId={list.id}>
                        {(provided) => (
                          <div {...provided.droppableProps} ref={provided.innerRef} className="mt-2">
                            {list.items.map((item, index) => (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="bg-gray-100 p-2 mb-2 rounded shadow cursor-pointer"
                                  >
                                    <div className="flex flex-col">
                                      <div className="flex justify-between items-center">
                                        <span>{item.content}</span>
                                        <button onClick={() => removeTask(list.id, item.id)} className="text-red-600 hover:text-red-800">Remove</button>
                                      </div>
                                      <span className="text-gray-600 text-sm">{`Reminder: ${item.dateTime}`}</span> {/* Display the reminder time */}
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <button onClick={addNewList} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Add New List</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MeetingList;
