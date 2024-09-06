import React from 'react'

export default function StudentPlanner({isVisible, studentName, days, meals, onClickMethod}) {
    return (
        <div key={`student${studentName}`} className={`student ${isVisible ? 'student-visible' : 'student-nonvisible'}`}>
            <p>{studentName} is my name, come straight from my daddy's mane, my whole body's made of glitter, and I'll throw it in your face!</p>
            <h3 className='meal-header'>Breakfast</h3>
            {Array.from(days).map(([day, value]) => (
                        <div key={`breakfast${day}${studentName}`} className={`student-meal container ${!value ? 'day-meal-disabled': 'day-meal-enabled'}`}>
                            <p className='test'>{day}</p>
                            <button className={meals.get(day).breakfast === 'Home' ? 'meal-active' : 'meal-inactive'}
                                onClick={() => onClickMethod(studentName, day, 'breakfast', 'home')}>Home</button>
                            <button className={meals.get(day).breakfast === 'School' ? 'meal-active' : 'meal-inactive'}
                                onClick={() => onClickMethod(studentName, day, 'breakfast', 'school')}>School</button>
                        </div>
            ))}
            <h3 className='meal-header'>Lunch</h3>
            {Array.from(days).map(([day, value]) => (
                        <div key={`lunch${day}${studentName}`} className={`student-meal container ${!value ? 'day-meal-disabled': 'day-meal-enabled'}`}>
                            <p className='test'>{day}</p>
                            <button className={meals.get(day).lunch === 'Home' ? 'meal-active' : 'meal-inactive'}
                                onClick={() => onClickMethod(studentName, day, 'lunch', 'home')}>Home</button>
                            <button className={meals.get(day).lunch === 'School' ? 'meal-active' : 'meal-inactive'}
                                onClick={() => onClickMethod(studentName, day, 'lunch', 'school')}>School</button>
                        </div>
            ))}
        </div>
    )
}
