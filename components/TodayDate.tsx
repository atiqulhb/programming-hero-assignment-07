'use client'

import { useState, useEffect} from 'react'

export default function TodayDate() {
  const [today, setToday] = useState("")

  useEffect(() => {
     const todaysDate = new Date()
    const todaysDateInBengali = todaysDate.toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    setToday(todaysDateInBengali)

    
  },[])

   
  return (
    <span>{today}</span>
  )
}
