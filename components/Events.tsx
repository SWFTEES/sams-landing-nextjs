'use client'

import { useEffect, useState } from 'react'

interface Event {
  Title: string
  Date: string
  Description: string
  Type: string
  Active?: string
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    loadEventsFromGoogleSheets()
  }, [])

  const loadEventsFromGoogleSheets = async () => {
    const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdLsGa_bo-GIfr93TkQTaAvI12efwHkcGK44qHgbk8qAMyluzEevh0Iv2z8zPqRtZO7iGZ6h2nBIkJ/pub?output=csv'
    
    try {
      const response = await fetch(SHEET_CSV_URL)
      
      if (!response.ok) {
        console.log('Google Sheet not configured yet. Showing sample events.')
        showSampleEvents()
        return
      }
      
      const csvText = await response.text()
      const parsedEvents = parseCSV(csvText)
      
      const activeEvents = parsedEvents.filter(event => {
        if (event.Active?.toUpperCase() !== 'TRUE') return false
        
        const dateParts = event.Date.split('/')
        if (dateParts.length !== 3) return false
        
        const month = parseInt(dateParts[0], 10) - 1
        const day = parseInt(dateParts[1], 10)
        const year = parseInt(dateParts[2], 10)
        
        const eventDate = new Date(year, month, day)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        eventDate.setHours(0, 0, 0, 0)
        
        return eventDate >= today
      })
      
      activeEvents.sort((a, b) => {
        const parseDate = (dateStr: string) => {
          const parts = dateStr.split('/')
          return new Date(parseInt(parts[2], 10), parseInt(parts[0], 10) - 1, parseInt(parts[1], 10))
        }
        return parseDate(a.Date).getTime() - parseDate(b.Date).getTime()
      })
      
      if (activeEvents.length === 0) {
        setFallback(true)
      } else {
        setEvents(activeEvents.slice(0, 6))
      }
      
    } catch (error) {
      console.log('Using sample events (Google Sheet not configured)')
      showSampleEvents()
    } finally {
      setLoading(false)
    }
  }

  const parseCSV = (csvText: string): Event[] => {
    const lines = csvText.split('\n').filter(line => line.trim())
    const headers = lines[0].split(',').map(h => h.trim())
    
    return lines.slice(1).map(line => {
      const values: string[] = []
      let current = ''
      let inQuotes = false
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i]
        
        if (char === '"') {
          inQuotes = !inQuotes
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim())
          current = ''
        } else {
          current += char
        }
      }
      values.push(current.trim())
      
      const event: any = {}
      headers.forEach((header, index) => {
        event[header] = values[index] || ''
      })
      return event
    })
  }

  const showSampleEvents = () => {
    const sampleEvents: Event[] = [
      {
        Title: 'Big Game Sunday',
        Date: '2/11/2026',
        Description: 'Free food, no cover, giveaways. Game starts at 3:30 PM.',
        Type: 'event'
      },
      {
        Title: "Valentine's Weekend",
        Date: '2/14/2026',
        Description: 'Couples drink specials all weekend. Bring your valentine or find one here.',
        Type: 'drink_special'
      },
      {
        Title: 'Live DJ Set',
        Date: '2/15/2026',
        Description: 'DJ Midnight spins classic Vegas vibes starting at 10 PM.',
        Type: 'entertainment'
      }
    ]
    
    setEvents(sampleEvents)
    setLoading(false)
  }

  const getEventTypeClass = (type: string) => {
    const typeMap: { [key: string]: string } = {
      'event': 'bg-red-neon/20 border-red-neon/30',
      'drink_special': 'bg-yellow-500/20 border-yellow-500/30 text-yellow-500',
      'entertainment': 'bg-purple-500/20 border-purple-500/30 text-purple-500'
    }
    return typeMap[type?.toLowerCase()] || typeMap['event']
  }

  const getEventTypeLabel = (type: string) => {
    const labelMap: { [key: string]: string } = {
      'event': 'EVENT',
      'drink_special': 'DRINK SPECIAL',
      'entertainment': 'LIVE'
    }
    return labelMap[type?.toLowerCase()] || 'EVENT'
  }

  const formatDate = (dateStr: string) => {
    const dateParts = dateStr.split('/')
    const month = parseInt(dateParts[0], 10) - 1
    const day = parseInt(dateParts[1], 10)
    const year = parseInt(dateParts[2], 10)
    const date = new Date(year, month, day)
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    })
  }

  return (
    <section id="events" className="py-20 px-6 scroll-fade opacity-0 translate-y-8 transition-all duration-800">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-pinyon text-5xl md:text-6xl mb-12 text-center text-cream">What&apos;s On</h2>
        
        {loading ? (
          <div className="text-center text-cream/60 col-span-full">
            <p className="text-lg">Loading events...</p>
          </div>
        ) : fallback ? (
          <div className="text-center text-cream/60">
            <p className="text-lg">Check back soon — or just come in. We&apos;re open 24/7.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider ${getEventTypeClass(event.Type)}`}>
                    {getEventTypeLabel(event.Type)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cream">{event.Title}</h3>
                <p className="text-red-neon/70 text-sm mb-2">{formatDate(event.Date)}</p>
                <p className="text-cream/70 text-sm">{event.Description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}