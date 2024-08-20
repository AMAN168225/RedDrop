import React, { createContext, useState } from 'react';

// Context for sign-up
export const StudentContext = createContext();

// Context for blood events
export const BloodEventsContext = createContext();

export const ContextProvider = ({ children }) => {
    // State for sign-up
    const [students, setStudents] = useState([]);

    // State for blood events
    const [events, setEvents] = useState([]);

    const addStudent = (student) => {
        setStudents([...students, student]);
    };

    const addEvent = (event) => {
        setEvents([...events, event]);
    };

    return (
        <StudentContext.Provider value={{ students, addStudent }}>
            <BloodEventsContext.Provider value={{ events, addEvent }}>
                {children}
            </BloodEventsContext.Provider>
        </StudentContext.Provider>
    );
};
