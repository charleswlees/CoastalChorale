// src/lib/googleCalendarApi.ts

// Replace with your API Key from Google Cloud Console
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
// Replace with your public calendar ID
const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID; // or the specific calendar ID

let gapiInitialized = false;

// Function to load the Google API client library
function loadGapi(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (gapiInitialized) {
      resolve();
      return;
    }

    if (typeof gapi !== 'undefined') {
      gapiInitialized = true;
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      console.log('Google API script loaded');
      gapi.load('client', {
        callback: () => {
          console.log('Google API client loaded');
          gapiInitialized = true;
          resolve();
        },
        onerror: (error: any) => {
          console.error('Error loading gapi client:', error);
          reject(new Error('Failed to load Google API client'));
        }
      });
    };
    script.onerror = (error) => {
      console.error('Error loading Google API script:', error);
      reject(new Error('Failed to load Google API script'));
    };
    document.head.appendChild(script);
  });
}

// Function to initialize the Google API client with API key only
async function initializeGoogleAPI(): Promise<void> {
  try {
    await loadGapi();
    
    console.log('Initializing Google API client with API key...');
    
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
    });
    
    console.log('Google API client initialized successfully');
    
  } catch (error) {
    console.error('Error initializing Google API:', error);
    throw error;
  }
}

interface CalendarEvent {
  id: string;
  summary: string;
  start: { dateTime: string; date: string };
  end: { dateTime: string; date: string };
  location?: string;
  description?: string;
  htmlLink: string;
}

// Function to fetch calendar events from your public calendar
export async function fetchCalendarEvents(
  maxResults: number = 20,
  timeMin: Date = new Date(),
  timeMax: Date = new Date(new Date().setMonth(new Date().getMonth() + 12)),
): Promise<CalendarEvent[]> {
  try {
    await initializeGoogleAPI();

    console.log('Fetching calendar events from public calendar...');
    
    const response = await gapi.client.calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      showDeleted: false,
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: maxResults,
    });

    const events = response.result.items || [];
    console.log(`Fetched ${events.length} events`);
    
    return events.map((event: any) => ({
      id: event.id,
      summary: event.summary || 'No title',
      start: event.start,
      end: event.end,
      location: event.location,
      description: event.description,
      htmlLink: event.htmlLink,
    }));
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    throw error;
  }
}
