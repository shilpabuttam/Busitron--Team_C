const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/events.json");


const readData = () => {
  const rawData = fs.readFileSync(dataFilePath);
  return JSON.parse(rawData);
};


const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};


const getEvents = (req, res) => {
  const events = readData();
  res.status(200).json(events);
};


const getEventById = (req, res) => {
  const events = readData();
  const event = events.find((e) => e.id === parseInt(req.params.id));

  if (!event) return res.status(404).json({ message: "Event not found" });

  res.status(200).json(event);
};


const createEvent = (req, res) => {
  const events = readData();
  const newEvent = {
    id: events.length > 0 ? events[events.length - 1].id + 1 : 1,
    ...req.body,
  };

  events.push(newEvent);
  writeData(events);
  res.status(201).json(newEvent);
};


const updateEvent = (req, res) => {
  let events = readData();
  const eventIndex = events.findIndex((e) => e.id === parseInt(req.params.id));

  if (eventIndex === -1) return res.status(404).json({ message: "Event not found" });

  events[eventIndex] = { ...events[eventIndex], ...req.body };
  writeData(events);
  res.status(200).json(events[eventIndex]);
};


const deleteEvent = (req, res) => {
  let events = readData();
  const newEvents = events.filter((e) => e.id !== parseInt(req.params.id));

  if (events.length === newEvents.length) return res.status(404).json({ message: "Event not found" });

  writeData(newEvents);
  res.status(200).json({ message: "Event deleted successfully" });
};

module.exports = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};
