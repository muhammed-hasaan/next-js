"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DashboardLayout from "../../../../Sections/DashboardSections/dashboard";

const ToDoList = () => {
  const initialLists = [
    { id: `list-${Date.now() + 1}`, title: "Tasks", items: [] },
    { id: `list-${Date.now() + 2}`, title: "In Progress", items: [] },
    { id: `list-${Date.now() + 3}`, title: "Completed", items: [] },
    { id: `list-${Date.now() + 4}`, title: "Due Tasks", items: [] },
  ];

  const [lists, setLists] = useState(initialLists);
  const [taskInput, setTaskInput] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [draggedFromListId, setDraggedFromListId] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [taskDetailInput, setTaskDetailInput] = useState("");

  useEffect(() => {
    const storedLists = localStorage.getItem("lists");
    if (storedLists) {
      try {
        setLists(JSON.parse(storedLists));
      } catch (error) {
        console.error("Error parsing lists from local storage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      setLists((prevLists) => {
        const updatedLists = [...prevLists];
        const dueTasksList = updatedLists.find(
          (list) => list.title === "Due Tasks"
        );

        prevLists.forEach((list) => {
          if (list.title !== "Due Tasks") {
            list.items.forEach((item) => {
              if (
                item.dueDate &&
                new Date(item.dueDate).getTime() <= currentTime
              ) {
                dueTasksList.items.push(item);
              }
            });
            list.items = list.items.filter(
              (item) =>
                !item.dueDate || new Date(item.dueDate).getTime() > currentTime
            );
          }
        });

        return updatedLists;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [lists]);

  const onDragStart = (item, index, listId) => {
    setDraggedItem(item);
    setDraggedItemIndex(index);
    setDraggedFromListId(listId);
  };

  const onDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const onDrop = (e, listId) => {
    e.preventDefault();
    if (draggedItem) {
      setLists((prevLists) =>
        prevLists.map((list) => {
          if (list.id === listId) {
            const updatedItems = [...list.items];
            updatedItems.splice(dragOverIndex, 0, draggedItem);
            if (draggedFromListId === listId) {
              updatedItems.splice(
                draggedItemIndex > dragOverIndex
                  ? draggedItemIndex + 1
                  : draggedItemIndex,
                1
              );
            }
            return { ...list, items: updatedItems };
          } else if (list.id === draggedFromListId) {
            return {
              ...list,
              items: list.items.filter((_, idx) => idx !== draggedItemIndex),
            };
          }
          return list;
        })
      );

      setDraggedItem(null);
      setDraggedItemIndex(null);
      setDraggedFromListId(null);
      setDragOverIndex(null);
    }
  };

  const addNewList = async () => {
    const { value: listTitle } = await Swal.fire({
      title: "Enter the list title",
      input: "text",
      inputLabel: "List Title",
      inputPlaceholder: "Type the title of the list",
      showCancelButton: true,
    });

    if (listTitle) {
      const newList = {
        id: ` list-${Date.now()}`,
        title: listTitle,
        items: [],
      };
      setLists((prevLists) => [...prevLists, newList]);
    }
  };

  const removeList = (listId) => {
    setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
  };

  const handleTaskInputChange = (listId, value) => {
    setTaskInput({ ...taskInput, [listId]: value });
  };

  const addTaskToList = (listId) => {
    if (!taskInput[listId]) return;

    const newTask = {
      id: `task-${Date.now()}`,
      content: taskInput[listId],
      dueDate: null,
      comments: [],
      details: "",
    };

    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId ? { ...list, items: [...list.items, newTask] } : list
      )
    );

    setTaskInput({ ...taskInput, [listId]: "" });
  };

  const setDueDateForTask = async (listId, taskId) => {
    const { value: dueDate } = await Swal.fire({
      title: "Set Due Date and Time",
      input: "datetime-local",
      showCancelButton: true,
    });

    if (dueDate) {
      setLists((prevLists) =>
        prevLists.map((list) =>
          list.id === listId
            ? {
                ...list,
                items: list.items.map((item) =>
                  item.id === taskId ? { ...item, dueDate } : item
                ),
              }
            : list
        )
      );
    }
  };

  const removeTask = (listId, taskId) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, items: list.items.filter((item) => item.id !== taskId) }
          : list
      )
    );
  };

  const openTaskDetails = (task) => {
    setSelectedTask(task);
    setTaskDetailInput(task.details || "");
  };

  const addCommentToTask = () => {
    if (!commentInput) return;
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === selectedTask.listId
          ? {
              ...list,
              items: list.items.map((task) =>
                task.id === selectedTask.id
                  ? { ...task, comments: [...task.comments, commentInput] }
                  : task
              ),
            }
          : list
      )
    );
    setCommentInput("");
  };

  const saveTaskDetails = () => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === selectedTask.listId
          ? {
              ...list,
              items: list.items.map((task) =>
                task.id === selectedTask.id
                  ? { ...task, details: taskDetailInput }
                  : task
              ),
            }
          : list
      )
    );
    setSelectedTask(null);
    setTaskDetailInput("");
  };

  return (
    <DashboardLayout>
      <div className="w-full flex justify-end items-center">
        <div className="w-[100%] min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white p-10 shadow-lg">
          <div className="w-full flex flex-col justify-center items-center mb-8">
            <div className="w-[50%] flex justify-center items-center space-x-2">
              <h1 className="text-indigo-800 text-4xl font-bold tracking-wide">
                Todo
              </h1>
              <h1 className="text-gray-900 text-4xl font-bold tracking-wide">
                List
              </h1>
            </div>
            <hr className="bg-gray-900 h-[4px] w-[300px] rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {lists.map((list) => (
              <div
                key={list.id}
                onDragOver={(e) => onDragOver(e, list.id)}
                onDrop={(e) => onDrop(e, list.id)}
                className="bg-gray-50 border border-gray-300 rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-medium text-gray-800">
                    {list.title}
                  </h2>
                  <button
                    onClick={() => removeList(list.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Remove
                  </button>
                </div>

                <div className="max-h-56 overflow-y-auto bg-gray-50 rounded-lg p-2">
                  {list.items.length > 0 ? (
                    list.items.map((item, idx) => (
                      <div
                        key={item.id}
                        draggable
                        onDragStart={() => onDragStart(item, idx, list.id)}
                        onClick={() => openTaskDetails(item)}
                        className="bg-gray-200 p-2 mb-1 rounded flex flex-col justify-between"
                      >
                        <span className="text-gray-800">{item.content}</span>
                        <div className="flex justify-between items-center mt-2">
                          {item.dueDate ? (
                            <span className="text-sm text-green-600">
                              Due: {new Date(item.dueDate).toLocaleString()}
                            </span>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent opening task details
                                setDueDateForTask(list.id, item.id);
                              }}
                              className="text-xs text-blue-500 underline"
                            >
                              Set Due Date
                            </button>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent opening task details
                              removeTask(list.id, item.id);
                            }}
                            className="text-xs text-red-500 underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <span className="text-gray-500">No tasks</span>
                  )}
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="text"
                    placeholder="Add a task..."
                    value={taskInput[list.id] || ""}
                    onChange={(e) =>
                      handleTaskInputChange(list.id, e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  <button
                    onClick={() => addTaskToList(list.id)}
                    className="px-3 py-2 ml-2 bg-blue-500 text-white rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              onClick={addNewList}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Add New List
            </button>
          </div>
        </div>

        {selectedTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-1/3 rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-medium">Task Details</h2>
              <textarea
                className="w-full px-3 py-2 border rounded-lg"
                value={taskDetailInput}
                onChange={(e) => setTaskDetailInput(e.target.value)}
              ></textarea>
              <h3 className="text-sm font-medium">Comments</h3>
              {selectedTask.comments.map((comment, index) => (
                <p
                  key={index}
                  className="text-xs bg-gray-100 p-2 rounded-lg my-2"
                >
                  {comment}
                </p>
              ))}
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
              <button
                onClick={addCommentToTask}
                className="px-3 py-1 mt-3 bg-blue-500 text-white rounded-lg"
              >
                Add Comment
              </button>
              <div className="flex justify-end mt-6">
                <button
                  onClick={saveTaskDetails}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={() => setSelectedTask(null)}
                  className="px-4 py-2 ml-2 bg-red-500 text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ToDoList;
