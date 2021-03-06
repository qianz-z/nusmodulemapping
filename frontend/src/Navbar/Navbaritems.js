import React from 'react'
import * as BsIcons from "react-icons/bs";

export const Navbaritems = [
    {
        title: 'Modules',
        path: '/modules',
        icon: <BsIcons.BsBook />,
        cName: 'nav-text'
    },
    {
        title: 'Study Plan',
        path: '/studyplan',
        icon: <BsIcons.BsCalendar4 />,
        cName: 'nav-text'
    },
    {
        title: 'Professors',
        path: '/prof',
        icon: <BsIcons.BsPersonFill />,
        cName: 'nav-text'
    },
]