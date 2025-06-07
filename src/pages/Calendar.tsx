import React, { useEffect, useState } from 'react';
import { fetchCalendarEvents } from '../lib/googleCalendarApi';

interface CalendarEvent {
  id: string;
  summary: string;
  start: { dateTime: string; date: string };
  end: { dateTime: string; date: string };
  location?: string;
  description?: string;
  htmlLink: string;
}

const CalendarEvents: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Loading calendar events...');
        const fetchedEvents = await fetchCalendarEvents(20);
        console.log('Events loaded successfully:', fetchedEvents);
        setEvents(fetchedEvents);
        
      } catch (err) {
        console.error('Error loading events:', err);
        setError(`Failed to load calendar events: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading upcoming events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      
      {events.length === 0 ? (
        <div className="text-center">
          <p>No upcoming events found for the next 12 months.</p>
        </div>
      ) : (
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">{event.summary}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      <i className="bi bi-calendar-event me-1"></i>
                      {event.start.dateTime
                        ? new Date(event.start.dateTime).toLocaleString()
                        : new Date(event.start.date).toLocaleDateString()}
                    </small>
                  </p>
                  {event.location && (
                    <p className="card-text">
                      <small className="text-muted">
                        <i className="bi bi-geo-alt me-1"></i>
                        {event.location}
                      </small>
                    </p>
                  )}
                  {event.description && (
                    <p className="card-text">
                      {event.description.substring(0, 100)}
                      {event.description.length > 100 ? '...' : ''}
                    </p>
                  )}
                  <a 
                    href={event.htmlLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm btn-outline-primary"
                  >
                    View in Google Calendar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarEvents;
